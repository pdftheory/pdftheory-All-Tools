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
import { useLocale, useTranslations } from 'next-intl';
import { CodeBlock } from '@/components/developers/CodeBlock';
import { Button } from '@/components/ui/Button';

export default function QuickstartPage() {
    const locale = useLocale();
    const t = useTranslations('developers');

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{t('quickstart.breadcrumb')}</span>
            </div>

            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {t('quickstart.title')}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {t('quickstart.subtitle')}
                </p>
            </header>

            <div className="space-y-16">
                {/* Step 1 */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">1</div>
                        <h2 id="get-api-key" className="text-2xl font-bold text-slate-900 dark:text-white m-0">{t('quickstart.step1.title')}</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {t('quickstart.step1.desc')}
                    </p>
                    <Link href={`/${locale}/developers/dashboard`}>
                        <Button className="h-11 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all">
                            {t('quickstart.step1.button')}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </section>

                {/* Step 2 */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">2</div>
                        <h2 id="first-request" className="text-2xl font-bold text-slate-900 dark:text-white m-0">{t('quickstart.step2.title')}</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {t.rich('quickstart.step2.desc', {
                            curl: (chunks: React.ReactNode) => <code>{chunks}</code>,
                            apikey: (chunks: React.ReactNode) => <code>{chunks}</code>
                        })}
                    </p>
                    <CodeBlock
                        language="bash"
                        filename={t('quickstart.step2.codeFilename')}
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
                        <h2 id="explore-api" className="text-2xl font-bold text-slate-900 dark:text-white m-0">{t('quickstart.step3.title')}</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        {t('quickstart.step3.desc')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: t('quickstart.step3.apiRef.title'), desc: t('quickstart.step3.apiRef.desc'), href: '/developers/api-reference', icon: Terminal },
                            { title: t('quickstart.step3.usage.title'), desc: t('quickstart.step3.usage.desc'), href: '/developers/usage', icon: Info },
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
                        <h3 className="text-lg font-bold mb-2">{t('quickstart.tip.title')}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {t('quickstart.tip.desc')}
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
