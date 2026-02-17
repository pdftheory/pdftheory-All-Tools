/**
 * Blog system - File-based Markdown blog with xlsx topic ingestion
 * 
 * Reads blog posts from src/content/blog/*.md files
 * Parses frontmatter with gray-matter
 * Renders markdown with marked
 * Reads topics from content/topics.xlsx
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// ─── Types & Constants (from client-safe shared module) ─────────

export type { BlogPost, BlogCategory } from './blog-shared';
export { BLOG_CATEGORIES } from './blog-shared';

import type { BlogPost, BlogCategory } from './blog-shared';
import { BLOG_CATEGORIES } from './blog-shared';

// ─── Paths ───────────────────────────────────────────────────────

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

// ─── Markdown Configuration ─────────────────────────────────────

marked.setOptions({
    gfm: true,
    breaks: false,
});

// ─── Helper: Calculate Reading Time ─────────────────────────────

function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// ─── Helper: Infer Category ─────────────────────────────────────

function inferCategory(frontmatterCategory?: string): BlogCategory {
    if (frontmatterCategory && frontmatterCategory in BLOG_CATEGORIES) {
        return frontmatterCategory as BlogCategory;
    }
    return 'guides';
}

// ─── Core: Get All Blog Posts ────────────────────────────────────

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

    const posts = files.map((filename, index) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContents);
        const slug = data.slug || filename.replace('.md', '');

        const htmlContent = marked.parse(content) as string;

        return {
            id: String(index + 1),
            slug,
            title: data.title || 'Untitled',
            excerpt: data.description || content.substring(0, 160).replace(/[#*\n]/g, '').trim(),
            content,
            htmlContent,
            category: inferCategory(data.category),
            featuredImage: data.cover || `/images/blog/${slug}/cover.webp`,
            author: data.author || 'PDFTheory Team',
            publishedAt: data.date || new Date().toISOString().split('T')[0],
            readingTime: calculateReadingTime(content),
            tags: data.tags || data.keywords || [],
            keywords: data.keywords || [],
            description: data.description || '',
        } satisfies BlogPost;
    });

    // Sort by date descending
    return posts.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

// ─── Core: Get Single Blog Post ──────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return getBlogPosts().find(p => p.slug === slug);
}

// ─── Core: Get Posts by Category ────────────────────────────────

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
    return getBlogPosts().filter(p => p.category === category);
}

// ─── Core: Search Blog Posts ────────────────────────────────────

export function searchBlogPosts(query: string): BlogPost[] {
    const lower = query.toLowerCase();
    return getBlogPosts().filter(
        p =>
            p.title.toLowerCase().includes(lower) ||
            p.excerpt.toLowerCase().includes(lower) ||
            p.tags.some(t => t.toLowerCase().includes(lower))
    );
}

// ─── Core: Get Recent Posts ─────────────────────────────────────

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
    return getBlogPosts().slice(0, limit);
}

// ─── Core: Get Related Posts ────────────────────────────────────

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
    const currentPost = getBlogPostBySlug(slug);
    if (!currentPost) return [];

    const allPosts = getBlogPosts().filter(p => p.slug !== slug);

    // Score by shared tags/keywords
    const scored = allPosts.map(post => {
        let score = 0;
        if (post.category === currentPost.category) score += 3;
        for (const tag of post.tags) {
            if (currentPost.tags.includes(tag)) score += 2;
        }
        for (const kw of post.keywords) {
            if (currentPost.keywords.includes(kw)) score += 1;
        }
        return { post, score };
    });

    return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(s => s.post);
}

// ─── Core: Get All Slugs (for generateStaticParams) ─────────────

export function getAllBlogSlugs(): string[] {
    return getBlogPosts().map(p => p.slug);
}

// ─── Topics: Read Unprocessed Topics from XLSX ──────────────────

export interface TopicCluster {
    clusterName: string;
    totalVolume: number;
    totalKeywords: number;
    avgCPC: number;
    avgCompetitionIndex: number;
    keywords: { keyword: string; volume: number; cpc: number; competitionIndex: number }[];
}

/**
 * Reads content/topics.xlsx and groups rows by cluster.
 * Filters out clusters that already have a matching blog post.
 */
export function getUnprocessedTopics(): TopicCluster[] {
    try {
        // Dynamic import for xlsx — only used at build/generation time
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const XLSX = require('xlsx');
        const xlsxPath = path.join(process.cwd(), 'content', 'topics.xlsx');

        if (!fs.existsSync(xlsxPath)) return [];

        const workbook = XLSX.readFile(xlsxPath);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet) as Record<string, unknown>[];

        // Group by cluster
        const clusters: Map<string, TopicCluster> = new Map();
        let currentCluster = '';

        for (const row of rows) {
            if (row['Cluster Name']) {
                currentCluster = String(row['Cluster Name']);
                clusters.set(currentCluster, {
                    clusterName: currentCluster,
                    totalVolume: Number(row['Total Volume']) || 0,
                    totalKeywords: Number(row['Total Keywords']) || 0,
                    avgCPC: Number(row['Avg. CPC']) || 0,
                    avgCompetitionIndex: Number(row['Avg. Competition Index']) || 0,
                    keywords: [],
                });
            }

            const cluster = clusters.get(currentCluster);
            if (cluster && row['Keyword']) {
                cluster.keywords.push({
                    keyword: String(row['Keyword']),
                    volume: Number(row['Volume']) || 0,
                    cpc: Number(row['CPC']) || 0,
                    competitionIndex: Number(row['Competition Index']) || 0,
                });
            }
        }

        // Filter out already-processed clusters
        const existingPosts = getBlogPosts();
        const existingSlugs = new Set(existingPosts.map(p => p.slug));
        const existingKeywords = new Set(
            existingPosts.flatMap(p => p.keywords.map(k => k.toLowerCase()))
        );

        return Array.from(clusters.values()).filter(cluster => {
            const slug = cluster.clusterName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            if (existingSlugs.has(slug)) return false;
            if (existingKeywords.has(cluster.clusterName.toLowerCase())) return false;
            return true;
        });
    } catch {
        console.warn('[Blog] Could not read topics.xlsx');
        return [];
    }
}
