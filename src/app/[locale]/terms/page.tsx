import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import TermsPageClient from './TermsPageClient';

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
        title: `Terms & Conditions - ${t('brand')}`,
        description: 'Read our Terms & Conditions regarding the use of our free PDF tools services.',
    };
}

interface TermsPageProps {
    params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    return <TermsPageClient locale={locale as Locale} />;
}
