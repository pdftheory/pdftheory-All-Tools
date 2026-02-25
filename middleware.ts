
import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // OPTIMIZATION: Removed blocking Supabase session update from middleware
  // Session management is now handled by client-side AuthProvider and Server Components.
  // This significantly improves TTFB across all routes.

  // 1. Run Next-Intl middleware (handles routing/locale)
  const response = intlMiddleware(request);

  // 2. Force authoritative security headers for PDF editor support
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://pdftheory.com https://www.pdftheory.com"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml (SEO files)
     * - all files with extensions (e.g. .svg, .png, .jpg, .css, .js)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt)).*)',
  ],
};
