// middleware.ts
import { NextRequest, NextResponse, userAgent } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar", "es"],
  defaultLocale: "en",
});

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  
  // Extract locale from pathname
  const pathnameLocale = pathname.split('/')[1];
  const locale = ['en', 'ar', 'es'].includes(pathnameLocale) ? pathnameLocale : 'en';

  // Check if the path exists (basic validation)
  // Add your valid routes here
  const validRoutes = [
    '/',
    '/about',
    '/work',
    '/projects',
    '/privacy-policy',
    '/oops-wrong-turn',
  ];

  // Remove locale from pathname for checking
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  // Check if it's a dynamic route like /projects/[id]
  const isDynamicProjectRoute = /^\/projects\/\d+$/.test(pathWithoutLocale);
  
  // If it's not a valid route and not a dynamic route, redirect to error page
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