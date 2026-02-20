import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import SecurityPageClient from './SecurityPageClient';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
    const t = await getTranslations({ locale: validLocale, namespace: 'common' });

    return {
        title: `Security - ${t('brand')}`,
        description: 'Understand how pdftheory keeps your files safe with client-side processing technology.',
    };
}

interface SecurityPageProps {
    params: Promise<{ locale: string }>;
}

export default async function SecurityPage({ params }: SecurityPageProps) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    return <SecurityPageClient locale={locale as Locale} />;
}
