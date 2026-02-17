/**
 * Blog shared types and constants — safe for both server and client components
 * 
 * This file contains NO Node.js APIs (fs, path, etc.)
 */

// ─── Types ───────────────────────────────────────────────────────

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;       // raw markdown
    htmlContent: string;   // rendered HTML
    category: BlogCategory;
    featuredImage: string;
    author: string;
    publishedAt: string;
    readingTime: number;
    tags: string[];
    keywords: string[];
    description: string;   // meta description
}

export type BlogCategory = 'tutorials' | 'productivity' | 'news' | 'tips' | 'guides' | 'comparisons' | 'security';

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; color: string }> = {
    tutorials: { label: 'Tutorials', color: 'bg-blue-500' },
    productivity: { label: 'Productivity', color: 'bg-green-500' },
    news: { label: 'News', color: 'bg-purple-500' },
    tips: { label: 'Tips & Tricks', color: 'bg-orange-500' },
    guides: { label: 'Guides', color: 'bg-teal-500' },
    comparisons: { label: 'Comparisons', color: 'bg-rose-500' },
    security: { label: 'Security', color: 'bg-red-500' },
};
