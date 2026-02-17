'use client';

import { BlogPost } from '@/config/blog';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
    posts: BlogPost[];
    locale: string;
}

export function BlogGrid({ posts, locale }: BlogGridProps) {
    if (posts.length === 0) {
        return (
            <div className="col-span-full py-16 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} locale={locale} />
            ))}
        </div>
    );
}
