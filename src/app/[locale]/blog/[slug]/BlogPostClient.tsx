'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { type BlogPost, BLOG_CATEGORIES } from '@/config/blog';
import { AdUnit } from '@/components/ads/AdUnit';
import { BlogCard } from '@/components/blog';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer'; // Import the renderer
import { type Locale } from '@/lib/i18n/config';

interface BlogPostClientProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
    locale: Locale;
}

export default function BlogPostClient({ post, relatedPosts, locale }: BlogPostClientProps) {
    const t = useTranslations('blogPage');
    const categoryInfo = BLOG_CATEGORIES[post.category] || BLOG_CATEGORIES['guides'];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <main className="flex-1 bg-gray-50/50">
            {/* Top Ad Slot */}
            <div className="container mx-auto px-4 pt-16 pb-4">
                <AdUnit slotId="blog-post-top-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
            </div>

            {/* Article Header */}
            <article className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Link */}
                        <Link
                            href={`/${locale}/blog`}
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[hsl(var(--color-primary))] transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {t('backToBlog')}
                        </Link>

                        {/* Category Badge */}
                        <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${categoryInfo.color} mb-4`}>
                            {categoryInfo.label}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Description */}
                        {post.description && (
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {post.description}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readingTime} {t('minRead')}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="font-medium text-gray-700">{post.author}</span>
                        </div>

                        {/* Featured Image - Using standard img to avoid Next.js Image issues with remote URLs */}
                        {post.featuredImage && (
                            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="w-full h-auto object-cover aspect-video"
                                />
                            </div>
                        )}

                        {/* Content - rendered HTML from markdown */}
                        {/* Content - Rendered with React Markdown for better styling */}
                        <div className="max-w-none text-lg">
                            <MarkdownRenderer content={post.content} />
                        </div>

                        {/* Tags */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap items-center gap-2">
                                <Tag className="w-4 h-4 text-gray-400" />
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Mid Article Ad */}
            <div className="container mx-auto px-4 py-8">
                <AdUnit slotId="blog-post-mid-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-12 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('relatedPosts')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <BlogCard key={relatedPost.id} post={relatedPost} locale={locale} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
