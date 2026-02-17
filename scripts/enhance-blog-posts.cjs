const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(BLOG_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Wrap Key Takeaways in Blockquotes
    // Check if valid "Key Takeaways" header exists AND it is NOT already wrapped
    // We look for a line starting with "## Key Takeaways" that does NOT have "> " before it.

    // We can use a specific regex that requires the line to start with ## 
    const keyTakeawaysRegex = /^(## Key Takeaways[\s\S]*?)(?=\n##|$)/m;

    // Check if we find a match that isn't already quoted
    // Attempting to match the generic pattern

    if (!content.includes('> ## Key Takeaways')) {
        content = content.replace(keyTakeawaysRegex, (match) => {
            return match.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
        });
    }

    // 2. Convert FAQs to FAQ Blockquotes (Fixing the HTML/Markdown issue)

    // First, check for existing <details> tags and convert them to Blockquotes
    // Pattern: <details>...<summary>Q</summary>...<div>A</div>...</details>
    const detailsRegex = /<details>\s*<summary>(.*?)<\/summary>\s*<div>([\s\S]*?)<\/div>\s*<\/details>/g;

    if (content.match(detailsRegex)) {
        content = content.replace(detailsRegex, (match, question, answer) => {
            // We need to ensure the answer has "> " prefix on each line
            const formattedAnswer = answer.trim().split('\n').map(line => `> ${line}`).join('\n');
            return `> **FAQ: ${question.trim()}**\n>\n${formattedAnswer}\n\n`;
        });
    }

    // Also handle original ### style if any remain (for idempotency or new files)
    // We capture the section to ensure we only target the FAQs
    // Added .*? after header to catch potential trailing whitespace/newlines before the group
    const faqSectionRegex = /(## (?:Frequently Asked Questions|FAQs).*?)([\s\S]*?)(?=\n## |$)/;
    const faqMatch = content.match(faqSectionRegex);

    if (faqMatch) {
        const header = faqMatch[1];
        let body = faqMatch[2];

        // Transform ### N. Question inside body
        const qRegex = /### \d+\.\s*(.*?)\s*\n+([\s\S]*?)(?=\n### |$)/g;

        // Only process if we haven't already converted to blockquotes or details (handled above)
        if (!body.includes('> **FAQ:') && !body.includes('<details>')) {
            const newBody = body.replace(qRegex, (m, q, a) => {
                const formattedAnswer = a.trim().split('\n').map(line => `> ${line}`).join('\n');
                return `> **FAQ: ${q.trim()}**\n>\n${formattedAnswer}\n\n`;
            });
            content = content.replace(faqSectionRegex, `${header}${newBody}`);
        }
    }

    // 3. Convert CTA to Button
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let lastMatch = null;

    while ((match = linkRegex.exec(content)) !== null) {
        lastMatch = match;
    }

    if (lastMatch) {
        const fullMatch = lastMatch[0];
        const text = lastMatch[1];
        const url = lastMatch[2];

        if (!url.includes('?btn=true')) {
            const newUrl = url.includes('?') ? `${url}&btn=true` : `${url}?btn=true`;
            const newLink = `[${text}](${newUrl})`;

            // Replace only the last occurrence
            const lastIndex = content.lastIndexOf(fullMatch);
            if (lastIndex !== -1) {
                content = content.substring(0, lastIndex) + newLink + content.substring(lastIndex + fullMatch.length);
            }
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    // console.log(`Updated ${file}`);
});
console.log('Finished updating blog posts.');
