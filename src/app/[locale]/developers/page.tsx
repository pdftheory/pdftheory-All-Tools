'use client';

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Code2,
    Lock,
    Zap,
    CheckCircle2,
    ChevronRight,
    Terminal,
    Key,
    Box,
    FileText,
    Github,
    Search,
    BookOpen,
    Cpu,
    ShieldCheck,
    MousePointer2
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { CodeBlock } from '@/components/developers/CodeBlock';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DevelopersIntroductionPage() {
    const locale = useLocale();

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">Introduction</span>
            </div>

            {/* Hero Section */}
            <header className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold mb-6 border border-blue-100 dark:border-blue-900/50">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>v1.0 is now live</span>
                </div>
                <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                    Developer Documentation
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-normal">
                    Everything you need to integrate professional-grade PDF processing into your applications.
                    Built for speed, security, and developer happiness.
                </p>
            </header>

            {/* Getting Started Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                <Link href={`/${locale}/developers/quickstart`} className="group">
                    <div className="p-8 h-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/5">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-700">
                            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Quickstart</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                            Learn how to process your first PDF document in less than 5 minutes using our simple API.
                        </p>
                    </div>
                </Link>
                <Link href={`/${locale}/developers/api-reference`} className="group">
                    <div className="p-8 h-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/5">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-700">
                            <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">API Reference</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                            Detailed technical documentation for all our endpoints including Merge, Split, and Compress.
                        </p>
                    </div>
                </Link>
            </div>

            {/* Core Pillars */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 id="core-pillars" className="text-2xl font-bold mb-10 pt-4 border-b border-slate-100 dark:border-slate-800 pb-4">Core Infrastructure</h2>
                <div className="grid sm:grid-cols-2 gap-12 mb-20">
                    {[
                        {
                            title: 'Edge Runtime',
                            desc: 'Processing happens near your users for sub-second latency.',
                            icon: Cpu,
                            color: 'blue'
                        },
                        {
                            title: 'Zero-Trust Security',
                            desc: 'Files never touch local storage. Encryption at rest and in transit.',
                            icon: ShieldCheck,
                            color: 'green'
                        },
                        {
                            title: 'Intuitive API',
                            desc: 'Clean REST endpoints with consistent parameters and clear errors.',
                            icon: MousePointer2,
                            color: 'amber'
                        },
                        {
                            title: 'Global Scale',
                            desc: 'Built on high-performance infrastructure that scales with your traffic.',
                            icon: Zap,
                            color: 'purple'
                        },
                    ].map((feature, i) => (
                        <div key={i} className="flex gap-6 not-prose">
                            <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-${feature.color}-50 dark:bg-${feature.color}-900/20`}>
                                <feature.icon className={`w-5 h-5 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{feature.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 id="authentication" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-4">Authentication</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    All API requests must be authenticated using a secret API key. You can generate and manage multiple keys
                    in your <Link href={`/${locale}/developers/dashboard`} className="text-blue-600 font-semibold no-underline hover:underline">Developer Dashboard</Link>.
                </p>

                <CodeBlock
                    filename="Request Headers"
                    language="bash"
                    code={`curl -X POST https://api.pdftheory.com/v1/compress \\
     -H "x-api-key: YOUR_API_KEY" \\
     -F "file=@/path/to/document.pdf"`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-r-2xl my-12">
                    <h4 className="text-blue-900 dark:text-blue-100 font-bold mb-3 flex items-center gap-2 text-lg">
                        <Terminal className="w-5 h-5" />
                        Explore the API
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200 m-0 leading-relaxed">
                        Ready to start building? Head over to the <Link href="/developers/api-reference" className="font-bold underline decoration-2 underline-offset-4">API Reference</Link>
                        to see our complete set of PDF processing endpoints.
                    </p>
                </div>
            </div>

            {/* Community Section */}
            <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16 mb-20">
                <div className="bg-slate-900 dark:bg-blue-900/10 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">Join our Developer Community</h2>
                    <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto relative z-10">
                        Stay up to date with the latest features, share your projects, and get help from other developers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href="https://github.com/pdftheory">
                            <Button variant="secondary" className="w-full sm:w-auto h-12 px-8 rounded-xl font-bold">
                                <Github className="w-5 h-5 mr-3" />
                                Star on GitHub
                            </Button>
                        </Link>
                        <Button variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-xl font-bold border-white/20 text-white hover:bg-white/10">
                            Join Discord
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
