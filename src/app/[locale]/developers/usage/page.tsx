'use client';

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    BarChart3,
    ShieldCheck,
    Zap,
    Info,
    ArrowRight,
    Clock,
    AlertTriangle
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function UsagePage() {
    const locale = useLocale();
    const t = useTranslations('developers');

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{t('usage.breadcrumb')}</span>
            </div>

            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {t('usage.title')}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {t('usage.subtitle')}
                </p>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 id="fair-use" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('usage.fairUse.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {t('usage.fairUse.desc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
                    {[
                        { title: t('usage.fairUse.tiers.free.title'), value: t('usage.fairUse.tiers.free.value'), unit: t('usage.fairUse.tiers.free.unit'), color: 'blue' },
                        { title: t('usage.fairUse.tiers.wait.title'), value: t('usage.fairUse.tiers.wait.value'), unit: t('usage.fairUse.tiers.wait.unit'), color: 'purple' },
                        { title: t('usage.fairUse.tiers.size.title'), value: t('usage.fairUse.tiers.size.value'), unit: t('usage.fairUse.tiers.size.unit'), color: 'green' },
                    ].map((item, i) => (
                        <div key={i} className={`p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50`}>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">{item.title}</div>
                            <div className={`text-3xl font-black text-${item.color}-600 dark:text-${item.color}-400 mb-1`}>{item.value}</div>
                            <div className="text-sm text-slate-500">{item.unit}</div>
                        </div>
                    ))}
                </div>

                <h2 id="headers" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('usage.headers.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {t('usage.headers.desc')}
                </p>
                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <th className="py-4 font-semibold text-slate-900 dark:text-white">{t('usage.headers.table.header')}</th>
                                <th className="py-4 font-semibold text-slate-900 dark:text-white">{t('usage.headers.table.description')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
                            <tr>
                                <td className="py-4 font-mono text-blue-600">x-ratelimit-limit</td>
                                <td className="py-4 text-slate-500">{t('usage.headers.table.limit.desc')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-mono text-blue-600">x-ratelimit-remaining</td>
                                <td className="py-4 text-slate-500">{t('usage.headers.table.remaining.desc')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-mono text-blue-600">x-ratelimit-reset</td>
                                <td className="py-4 text-slate-500">{t('usage.headers.table.reset.desc')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl my-10 flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="text-amber-900 dark:text-amber-100 font-bold mb-1">{t('usage.exceeded.title')}</h4>
                        <p className="text-amber-800 dark:text-amber-200 text-sm m-0">
                            {t.rich('usage.exceeded.desc', {
                                code429: (chunks: React.ReactNode) => <code>{chunks}</code>
                            })}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-10 flex justify-between items-center text-sm text-slate-500">
                <Link href="/developers/api-reference" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    {t('usage.footer.apiRef')}
                </Link>
                <Link href="/developers/dashboard" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    {t('usage.footer.checkUsage')}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
