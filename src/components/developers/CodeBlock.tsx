'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    className?: string;
}

export function CodeBlock({ code, language = 'javascript', filename, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("group relative my-6", className)}>
            {filename && (
                <div className="flex items-center px-4 py-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 rounded-t-xl text-xs font-mono text-gray-500">
                    {filename}
                </div>
            )}
            <div className={cn(
                "bg-gray-950 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl",
                filename && "rounded-t-none"
            )}>
                <button
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 p-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <div className="p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300 leading-relaxed scrollbar-hide">
                        <code className={`language-${language}`}>
                            {code.trim()}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
