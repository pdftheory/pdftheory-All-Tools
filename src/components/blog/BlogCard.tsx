'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost, BLOG_CATEGORIES } from '@/config/blog';

interface BlogCardProps {
    post: BlogPost;
    locale: string;
}

export function BlogCard({ post, locale }: BlogCardProps) {
    const categoryInfo = BLOG_CATEGORIES[post.category];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
            {/* Featured Image */}
            <Link href={`/${locale}/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-full ${categoryInfo.color}`}>
                    {categoryInfo.label}
                </span>
            </Link>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <Link href={`/${locale}/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                        {post.title}
                    </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min read
                    </span>
                </div>
            </div>
        </article>
    );
}
