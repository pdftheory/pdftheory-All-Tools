'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { BlogHero, BlogGrid, CategoryFilter } from '@/components/blog';
import { type BlogPost, type BlogCategory } from '@/config/blog';
import { AdUnit } from '@/components/ads/AdUnit';
import { type Locale } from '@/lib/i18n/config';

type CategoryOption = BlogCategory | 'all';

interface BlogPageClientProps {
    locale: Locale;
    posts: BlogPost[];
}

export default function BlogPageClient({ locale, posts }: BlogPageClientProps) {
    const t = useTranslations('blogPage');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<CategoryOption>('all');

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        let filtered = posts;

        // Filter by search
        if (searchQuery.trim()) {
            const lower = searchQuery.toLowerCase();
            filtered = filtered.filter(
                p =>
                    p.title.toLowerCase().includes(lower) ||
                    p.excerpt.toLowerCase().includes(lower) ||
                    p.tags.some(t => t.toLowerCase().includes(lower))
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter((post) => post.category === selectedCategory);
        }

        return filtered;
    }, [posts, searchQuery, selectedCategory]);

    return (
        <main className="flex-1 bg-gray-50/50">
            {/* Top Ad Slot */}
            <div className="container mx-auto px-4 pt-16 pb-4">
                <AdUnit slotId="blog-top-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
            </div>

            {/* Hero Section */}
            <BlogHero
                title={t('title')}
                subtitle={t('subtitle')}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                searchPlaceholder={t('searchPlaceholder')}
            />

            {/* Category Filters */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        allLabel={t('allPosts')}
                    />
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <BlogGrid posts={filteredPosts} locale={locale} />
                </div>
            </section>

            {/* Bottom Ad Slot */}
            <div className="container mx-auto px-4 pb-12">
                <AdUnit slotId="blog-bottom-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
            </div>
        </main>
    );
}
