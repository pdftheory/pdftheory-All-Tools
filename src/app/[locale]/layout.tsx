import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localeConfig, type Locale, locales } from '@/lib/i18n/config';
import { generateHomeMetadata } from '@/lib/seo';
import { fontVariables } from '@/lib/fonts';
import { SkipLink } from '@/components/common/SkipLink';
import GlobalLayout from '@/components/layout/GlobalLayout';
import AuthProvider from '@/components/providers/AuthProvider';

import Script from 'next/script';
import '@/app/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Viewport configuration for performance
 * Requirements: 8.1 - Lighthouse performance score 90+
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Validate locale
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';

  // Get localized SEO translations
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  // Generate metadata using the SEO module with translations
  return generateHomeMetadata(validLocale, {
    title: t('home.title'),
    description: t('home.description'),
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  // Get direction for the locale
  const direction = localeConfig[locale as Locale]?.direction || 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* Google AdSense Auto Ads - Exact tag requested by Google for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8357473537626003"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${fontVariables} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <SkipLink targetId="main-content">Skip to main content</SkipLink>
              <GlobalLayout locale={locale as any}>
                {children}
              </GlobalLayout>
            </div>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
