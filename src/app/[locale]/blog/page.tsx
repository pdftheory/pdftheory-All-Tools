import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { getBlogPosts } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

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
    const t = await getTranslations({ locale: validLocale, namespace: 'blogPage' });

    return {
        title: t('meta.title'),
        description: t('meta.description'),
        openGraph: {
            title: t('meta.title'),
            description: t('meta.description'),
            type: 'website',
        },
    };
}

interface BlogPageProps {
    params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';

    // Enable static rendering
    setRequestLocale(validLocale);

    // Fetch blog posts on the server
    const posts = getBlogPosts();

    return <BlogPageClient locale={validLocale} posts={posts} />;
}
