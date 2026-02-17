import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkUnwrapImages from 'remark-unwrap-images';
import Link from 'next/link';

interface MarkdownRendererProps {
    content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkUnwrapImages]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // Custom Link handling
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                a: ({ href, children, ...props }: any) => {
                    const isInternal = href?.startsWith('/') || href?.startsWith('#');
                    const isButton = href?.includes('?btn=true'); // Simple way to flag buttons

                    // If it's a "button" link
                    if (isButton) {
                        return (
                            <Link
                                href={href?.replace('?btn=true', '') || '#'}
                                className="inline-block mt-8 mb-4 px-8 py-4 bg-[hsl(var(--color-primary))] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all transform duration-200 no-underline text-center w-full md:w-auto"
                            >
                                {children}
                            </Link>
                        );
                    }

                    if (isInternal) {
                        return (
                            <Link href={href || '#'} className="text-[hsl(var(--color-primary))] font-medium hover:underline decoration-2 underline-offset-2">
                                {children}
                            </Link>
                        );
                    }
                    return (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[hsl(var(--color-primary))] font-medium hover:underline decoration-2 underline-offset-2"
                            {...props}
                        >
                            {children}
                        </a>
                    );
                },

                // Custom Header handling
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                h2: ({ children, ...props }: any) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3 relative pb-4 border-b border-gray-100" {...props}>
                        <span className="bg-[hsl(var(--color-primary))] w-2 h-8 rounded-full absolute -left-0 md:-left-6 lg:-left-8 hidden md:block"></span>
                        {children}
                    </h2>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                h3: ({ children, ...props }: any) => (
                    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4" {...props}>
                        {children}
                    </h3>
                ),

                // Custom Blockquote (Key Takeaways / Pro Tips)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                blockquote: ({ children, ...props }: any) => {
                    // Check if this blockquote is an FAQ
                    // We look at the first child. If it's a paragraph starting with "**FAQ:**" or has a distinct marker.
                    const childrenArray = React.Children.toArray(children);
                    const firstChild = childrenArray[0] as any;

                    let isFAQ = false;
                    let question = "FAQ";

                    if (firstChild && firstChild.props && firstChild.props.children) {
                        const content = firstChild.props.children;
                        // content might be an array if it mixes text and bold elements
                        const textContent = Array.isArray(content)
                            ? content.map((c: any) => (typeof c === 'string' ? c : c.props?.children || '')).join('')
                            : typeof content === 'string' ? content : '';

                        if (textContent.includes("FAQ:") || textContent.includes("❓")) {
                            isFAQ = true;
                            // Extract question: Remove "**FAQ:**" prefix or similar
                            question = textContent.replace(/\*\*FAQ:\*\*/, '').replace(/FAQ:/, '').replace('❓', '').trim();
                        }
                    }

                    if (isFAQ) {
                        // Remove the first child (the question) from the answer body
                        const answerContent = childrenArray.slice(1);

                        return (
                            <details className="group border border-gray-200 rounded-xl bg-white mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 open:border-[hsl(var(--color-primary))] open:ring-1 open:ring-[hsl(var(--color-primary))/20]" {...props}>
                                <summary className="flex items-center justify-between p-5 font-bold text-gray-900 cursor-pointer list-none select-none bg-gray-50/50 group-open:bg-white transition-colors hover:bg-gray-50">
                                    <span className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--color-primary))/10] text-[hsl(var(--color-primary))]">
                                            ?
                                        </span>
                                        {question}
                                    </span>
                                    <span className="transform transition-transform duration-300 group-open:rotate-180 text-gray-400">
                                        ▼
                                    </span>
                                </summary>
                                <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-transparent group-open:border-gray-100 bg-white">
                                    {answerContent}
                                </div>
                            </details>
                        );
                    }

                    return (
                        <div className="my-8 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--color-primary))]"></div>
                            <div className="relative text-gray-700 font-medium leading-relaxed italic">
                                {children}
                            </div>
                        </div>
                    );
                },

                // Custom List items
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ul: ({ children, ...props }: any) => (
                    <ul className="space-y-3 my-6 list-none pl-2" {...props}>
                        {children}
                    </ul>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ol: ({ children, ...props }: any) => (
                    <ol className="space-y-3 my-6 list-decimal list-inside pl-2 marker:font-bold marker:text-[hsl(var(--color-primary))]" {...props}>
                        {children}
                    </ol>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                li: ({ children, ...props }: any) => (
                    <li className="text-gray-700 leading-relaxed flex gap-3 items-start" {...props}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--color-primary))] flex-shrink-0" />
                        <span>{children}</span>
                    </li>
                ),

                // Custom Details/Summary (FAQs)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                details: ({ children, ...props }: any) => (
                    <details className="group border border-gray-200 rounded-xl bg-white mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 open:border-[hsl(var(--color-primary))] open:ring-1 open:ring-[hsl(var(--color-primary))/20]" {...props}>
                        {children}
                    </details>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                summary: ({ children, ...props }: any) => (
                    <summary className="flex items-center justify-between p-5 font-bold text-gray-900 cursor-pointer list-none select-none bg-gray-50/50 group-open:bg-white transition-colors hover:bg-gray-50">
                        <span className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--color-primary))/10] text-[hsl(var(--color-primary))]">
                                ?
                            </span>
                            {children}
                        </span>
                        <span className="transform transition-transform duration-300 group-open:rotate-180 text-gray-400">
                            ▼
                        </span>
                    </summary>
                ),

                // Custom Image
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                img: ({ src, alt, ...props }: any) => (
                    <div className="my-8">
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={alt}
                                className="w-full h-auto object-cover"
                                {...props}
                            />
                        </div>
                        {alt && <p className="text-center text-sm text-gray-500 mt-3">{alt}</p>}
                    </div>
                ),

                // Paragraph
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                p: ({ children, ...props }: any) => (
                    <p className="text-gray-700 leading-8 mb-6 text-lg" {...props}>
                        {children}
                    </p>
                )
            }}
        >
            {content}
        </ReactMarkdown>
    );
}

// Helper component for FAQs in markdown
export const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <details className="group border border-gray-200 rounded-xl bg-white mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between p-5 font-bold text-gray-900 cursor-pointer list-none select-none bg-gray-50/50 group-open:bg-white transition-colors hover:bg-gray-50">
            <span className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600">?</span>
                {question}
            </span>
            <span className="transform transition-transform duration-300 group-open:rotate-180 text-gray-400">▼</span>
        </summary>
        <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-transparent group-open:border-gray-100 bg-white">
            {answer}
        </div>
    </details>
);
