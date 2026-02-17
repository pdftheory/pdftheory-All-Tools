
import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { updateSession } from '@/lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // 1. Run Supabase session update (refreshes auth token)
  // We capture the response because it contains the set-cookie headers
  const supabaseResponse = await updateSession(request);

  // 2. Run Next-Intl middleware (handles routing/locale)
  const response = intlMiddleware(request);

  // 3. Merge Supabase cookies into the response
  // This ensures the session is persisted even if next-intl redirects or rewrites
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    response.cookies.set(cookie.name, cookie.value, cookie);
  });

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals, API routes and all static files
    '/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
