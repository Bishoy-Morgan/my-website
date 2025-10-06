import { NextRequest, NextResponse, userAgent } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar", "es"],
  defaultLocale: "en",
});

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  
  const pathnameLocale = pathname.split('/')[1];
  const locale = ['en', 'ar', 'es'].includes(pathnameLocale) ? pathnameLocale : 'en';

  const validRoutes = [
    '/',
    '/about',
    '/work',
    '/projects',
    '/privacy-policy',
    '/oops-wrong-turn',
  ];

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  const isDynamicProjectRoute = /^\/projects\/\d+$/.test(pathWithoutLocale);
  
  const isValidRoute = validRoutes.some(route => 
    pathWithoutLocale === route || pathWithoutLocale.startsWith(route + '/')
  );

  if (!isValidRoute && !isDynamicProjectRoute && pathWithoutLocale !== '/oops-wrong-turn') {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}/oops-wrong-turn`;
    return NextResponse.redirect(url);
  }

  const res = intlMiddleware(req);

  const { device } = userAgent(req);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  res.headers.set("x-viewport", viewport);

  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)'
  ],
};