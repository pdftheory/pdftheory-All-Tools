
import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // OPTIMIZATION: Removed blocking Supabase session update from middleware

  // 1. Run Next-Intl middleware (handles routing/locale)
  const response = intlMiddleware(request);

  // 2. Force authoritative security headers for PDF editor support
  // Even if it's a redirect, we can append headers for consistency
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://pdftheory.com https://www.pdftheory.com"
  );

  return response;
}

export const config = {
  // Matcher updated to be more explicit for root and locale routes
  // This ensures the middleware runs for the root path / and locale-prefixed paths
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the last locale for these paths
    '/(en|ja|ko|es|fr|de|zh|zh-TW|pt|ar)/:path*',

    // App router fallback for all other paths except static files/api
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt)).*)',
  ],
};
