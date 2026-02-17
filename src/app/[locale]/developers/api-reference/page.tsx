'use client';

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    Terminal,
    Box,
    ArrowRight,
    Search,
    Code2,
    Cpu,
    Shield,
    Globe
} from 'lucide-react';
import { useLocale } from 'next-intl';

export default function ApiReferencePage() {
    const locale = useLocale();

    const endpoints = [
        { title: 'Compress PDF', slug: 'compress', desc: 'Reduce file size while preserving quality and integrity.', method: 'POST' },
        { title: 'Merge PDFs', slug: 'merge', desc: 'Concatenate multiple PDF documents into a single resulting file.', method: 'POST' },
        { title: 'Split PDF', slug: 'split', desc: 'Divide a PDF into multiple documents by specifying page ranges.', method: 'POST' },
        { title: 'Convert PDF', slug: 'convert', desc: 'Professional-grade conversion from PDF to images or text.', method: 'POST' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">API Reference</span>
            </div>

            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    API Reference
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    Our API is organized around REST. All endpoints use standard HTTP response codes,
                    authentication, and verbs.
                </p>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 id="base-url" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">Base URL</h2>
                <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono text-sm border border-slate-200 dark:border-slate-800 mb-12">
                    https://api.pdftheory.com/v1
                </div>

                <h2 id="endpoints" className="text-2xl font-bold mb-10 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">Endpoints</h2>
                <div className="grid gap-6 not-prose mb-20">
                    {endpoints.map((item, i) => (
                        <Link
                            key={i}
                            href={`/${locale}/developers/api/${item.slug}`}
                            className="group p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded text-[10px] font-bold uppercase tracking-wider">{item.method}</span>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <h2 id="standards" className="text-2xl font-bold mb-8 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">API Standards</h2>
                <div className="grid sm:grid-cols-2 gap-8 mb-20 not-prose">
                    {[
                        { title: 'JSON Responses', desc: 'All error responses are returned as structured JSON for easy parsing.', icon: Code2 },
                        { title: 'Global CDN', desc: 'Requests are routed through our global edge network for maximum speed.', icon: Globe },
                        { title: 'Security First', desc: 'TLS 1.3 encryption and automated compliance checks on every request.', icon: Shield },
                        { title: 'Rate Limiting', desc: 'Fair use limits ensure high availability for all developers.', icon: Cpu },
                    ].map((feature, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <feature.icon className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-10 text-sm text-slate-500">
                <p>
                    Need more help? Join our <Link href="#" className="text-blue-600 font-semibold hover:underline">Developer Discord</Link> or
                    contact <Link href="#" className="text-blue-600 font-semibold hover:underline">Support</Link>.
                </p>
            </div>
        </div>
    );
}
