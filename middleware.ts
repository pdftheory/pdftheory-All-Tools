
import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { updateSession } from '@/lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // 1. Run Supabase session update (refreshes auth token)
  // ONLY for dashboard or protected routes to save TTFB on public pages
  const isDashboard = request.nextUrl.pathname.includes('/dashboard');
  let supabaseResponse = NextResponse.next({ request });

  if (isDashboard) {
    supabaseResponse = await updateSession(request);
  }

  // 2. Run Next-Intl middleware (handles routing/locale)
  const response = intlMiddleware(request);

  // 3. Merge Supabase cookies into the response (if session was updated)
  if (isDashboard) {
    supabaseResponse.cookies.getAll().forEach((cookie: { name: string; value: string }) => {
      response.cookies.set(cookie.name, cookie.value, cookie as any);
    });
  }

  // 4. Force authoritative security headers for PDF editor support
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://pdftheory.com https://www.pdftheory.com"
  );

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals, API routes and all static files
    '/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt)).*)',
  ],
};
