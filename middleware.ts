// middleware.ts
import { NextRequest, NextResponse, userAgent } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar", "es"], // supported locales
  defaultLocale: "en",         // default locale
});

export function middleware(req: NextRequest): NextResponse {
  const res = intlMiddleware(req);

  const { device } = userAgent(req);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  res.headers.set("x-viewport", viewport);

  return res;
}

export const config = {
  matcher: ["/", "/(en|ar|es)/:path*"],
};
