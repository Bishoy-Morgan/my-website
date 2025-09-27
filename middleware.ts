import { NextResponse, NextRequest, userAgent } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const SUPPORTED_LOCALES = ["en", "ar", "es"] as const;
type Locale = typeof SUPPORTED_LOCALES[number];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const { device } = userAgent(req);

  // Skip internal assets & API
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return intlMiddleware(req);
  }

  const segments = pathname.split("/").filter(Boolean);
  let locale = segments[0] as Locale | undefined;

  // Default locale if not set
  if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
    locale = "en";
  }

  const url = req.nextUrl.clone();

  // ✅ Handle root → /en
  if (pathname === "/") {
    url.pathname = `/${locale}`;
    return NextResponse.rewrite(url);
  }

  // ✅ If path doesn’t start with a locale, inject one
  if (!SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // ✅ If already has locale, let intl handle it
  const response = intlMiddleware(req);

  // Attach device info (for rendering logic)
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  response.headers.set("x-device-type", viewport);
  response.cookies.set("deviceType", viewport, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
