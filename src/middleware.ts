
import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
    // 1. Run Next-Intl middleware (handles routing/locale)
    // With localePrefix: 'as-needed', this will serve the default locale at / directly.
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
    // Use a cleaner, standard matcher for next-intl
    matcher: [
        // Match the root path
        '/',

        // Match all paths starting with a supported locale
        '/(en|ja|ko|es|fr|de|zh|zh-TW|pt|ar)/:path*',

        // Match all other paths that are NOT static files or API routes
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt)).*)',
    ],
};
