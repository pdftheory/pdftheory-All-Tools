import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';
import EducationPageClient from './EducationPageClient';

interface Props {
    params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function EducationPage({ params }: Props) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <EducationPageClient locale={locale} />
    );
}
