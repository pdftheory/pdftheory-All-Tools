---
description: how to generate blog posts from topics.xlsx
---
// turbo-all

## Generate Blog Posts from topics.xlsx

1. Read the topics.xlsx file to get unprocessed topic clusters:

```
node -e "const { getUnprocessedTopics } = require('./src/lib/blog.ts'); const topics = getUnprocessedTopics(); console.log('Unprocessed topics:', topics.length); topics.slice(0,10).forEach(t => console.log('-', t.clusterName, '(vol:', t.totalVolume, ')'));"
```

1. For each high-volume topic cluster, create a new blog post:
   - File: `src/content/blog/{slug}.md`
   - Use frontmatter format: title, slug, description, date, author, category, cover, tags, keywords
   - Content: 1000-2000 words, SEO-optimized, naturally link to PDFTheory tools
   - Internal links format: `[tool name](/en/tools/{tool-slug})`

2. Generate a cover image for each post (optional):
   - Save to `public/images/blog/{slug}/cover.webp`
   - Or use high-quality Unsplash URLs in the `cover` frontmatter field

3. Verify the posts are picked up by the blog system:

```
node -e "const { getBlogPosts } = require('./src/lib/blog.ts'); const posts = getBlogPosts(); console.log('Total posts:', posts.length); posts.forEach(p => console.log('-', p.slug, '|', p.title));"
```

1. Commit and push to GitHub:

```
git add -A
git commit -m "blog: add new posts from topics.xlsx"
git push
```

## Topic Categories

Map topics to categories based on content:

- **security** — malware, viruses, encryption, safety
- **tutorials** — how-to guides for specific tools
- **guides** — comprehensive explanations
- **tips** — productivity and workflow tips
- **comparisons** — tool/format comparisons
- **productivity** — efficiency and workflow optimization

## Internal Linking

Auto-detect tool slugs from `src/config/tools.ts` and link naturally:

- Merge: `/en/tools/merge-pdf`
- Convert: `/en/tools/pdf-to-docx`, `/en/tools/word-to-pdf`, etc.
- Edit: `/en/tools/edit-pdf`, `/en/tools/sign-pdf`, etc.
- Compress: `/en/tools/compress-pdf`

## Important Rules

- Never mention AI, automation, or content generation
- Write in a professional, helpful tone
- Use real data and facts
- Include actionable advice
- Naturally weave in internal links (2-5 per post)
- Each post should target the cluster's primary keyword in the title
