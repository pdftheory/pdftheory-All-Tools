import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { getBlogPostBySlug, getAllBlogSlugs, getRelatedPosts } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        getAllBlogSlugs().map((slug) => ({
            locale,
            slug,
        }))
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | PDFTheory Blog`,
        description: post.description || post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description || post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author],
            images: [post.featuredImage],
            url: `https://www.pdftheory.com/${locale}/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description || post.excerpt,
        },
        alternates: {
            canonical: `https://www.pdftheory.com/en/blog/${slug}`,
        },
    };
}

interface BlogPostPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { locale, slug } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(validLocale);

    // Fetch related posts on the server
    const relatedPosts = getRelatedPosts(slug, 3).slice(0, 2);

    return <BlogPostClient post={post} relatedPosts={relatedPosts} locale={validLocale} />;
}
