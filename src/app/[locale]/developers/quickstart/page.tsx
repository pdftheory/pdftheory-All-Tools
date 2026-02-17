'use client';

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    Zap,
    Key,
    Terminal,
    CheckCircle2,
    ArrowRight,
    Copy,
    Info
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { CodeBlock } from '@/components/developers/CodeBlock';
import { Button } from '@/components/ui/Button';

export default function QuickstartPage() {
    const locale = useLocale();

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">Quickstart</span>
            </div>

            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Quickstart Guide
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    Get up and running with pdftheory API in minutes. This guide will walk you through
                    obtaining your API key and making your first request.
                </p>
            </header>

            <div className="space-y-16">
                {/* Step 1 */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">1</div>
                        <h2 id="get-api-key" className="text-2xl font-bold text-slate-900 dark:text-white m-0">Get your API Key</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Before you can make requests, you'll need an API key. Head over to the developer dashboard
                        to generate your first key.
                    </p>
                    <Link href={`/${locale}/developers/dashboard`}>
                        <Button className="h-11 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all">
                            Go to Dashboard
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </section>

                {/* Step 2 */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">2</div>
                        <h2 id="first-request" className="text-2xl font-bold text-slate-900 dark:text-white m-0">Make your first request</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        The simplest way to test your integration is using <code>curl</code> to compress a PDF.
                        Replace <code>YOUR_API_KEY</code> with the key you generated in the previous step.
                    </p>
                    <CodeBlock
                        language="bash"
                        filename="Terminal"
                        code={`curl -X POST https://api.pdftheory.com/v1/compress \\
  -H "x-api-key: YOUR_API_KEY" \\
  -F "file=@/path/to/document.pdf" \\
  --output compressed_document.pdf`}
                    />
                </section>

                {/* Step 3 */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">3</div>
                        <h2 id="explore-api" className="text-2xl font-bold text-slate-900 dark:text-white m-0">Explore the Reference</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Now that you've successfully processed your first PDF, explore our other powerful endpoints
                        designed for merging, splitting, and securing your documents.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'API Reference', desc: 'Full endpoint details', href: '/developers/api-reference', icon: Terminal },
                            { title: 'Usage Limits', desc: 'Rate limits and quotas', href: '/developers/usage', icon: Info },
                        ].map((item, i) => (
                            <Link key={i} href={`/${locale}${item.href}`} className="group p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</div>
                                        <div className="text-xs text-slate-500">{item.desc}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            {/* Pro Tip */}
            <div className="mt-20 p-8 rounded-3xl bg-slate-900 dark:bg-blue-900/20 border border-slate-800 text-white">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Pro Tip: Use our SDKs</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            While raw REST requests work great, our official SDKs handle buffering, error retries,
                            and type safety out of the box.
                        </p>
                        <div className="flex gap-4">
                            <span className="text-xs font-mono px-2 py-1 bg-white/10 rounded">npm i @pdftheory/node</span>
                            <span className="text-xs font-mono px-2 py-1 bg-white/10 rounded">pip install pdftheory</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
