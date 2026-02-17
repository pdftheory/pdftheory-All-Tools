/**
 * Blog configuration - Client-safe exports only
 * 
 * This file only exports types and constants that are safe for client components.
 * Server-side functions (getBlogPosts, etc.) must be imported directly from
 * '@/lib/blog' in server components only.
 */

export type {
    BlogPost,
    BlogCategory,
} from '@/lib/blog-shared';

export {
    BLOG_CATEGORIES,
} from '@/lib/blog-shared';
