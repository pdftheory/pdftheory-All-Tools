'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    Mail,
    MessageSquare,
    Github,
    LifeBuoy,
    Send,
    CheckCircle2
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SupportPage() {
    const locale = useLocale();
    const t = useTranslations('developers');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl mx-auto text-center py-20">
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-3xl font-bold mb-4">{t('support.success.title')}</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                    {t('support.success.desc')}
                </p>
                <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-xl px-8"
                >
                    {t('support.success.button')}
                </Button>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{t('support.breadcrumb')}</span>
            </div>

            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {t('support.title')}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {t('support.subtitle')}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                    {
                        title: t('support.channels.email.title'),
                        desc: t('support.channels.email.desc'),
                        icon: Mail,
                        color: 'blue',
                        action: 'support@pdftheory.com',
                        href: 'mailto:support@pdftheory.com'
                    },
                    {
                        title: t('support.channels.discord.title'),
                        desc: t('support.channels.discord.desc'),
                        icon: MessageSquare,
                        color: 'purple',
                        action: t('support.channels.discord.button'),
                        href: 'https://discord.gg/pdftheory'
                    },
                    {
                        title: t('support.channels.github.title'),
                        desc: t('support.channels.github.desc'),
                        icon: Github,
                        color: 'slate',
                        action: t('support.channels.github.button'),
                        href: 'https://github.com/pdftheory/issues'
                    }
                ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="p-6 h-full border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-300 dark:hover:border-blue-800 transition-all">
                            <div className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.desc}</p>
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:underline">
                                {item.action}
                                <ChevronRight className="w-3 h-3" />
                            </span>
                        </Card>
                    </a>
                ))}
            </div>

            <div className="max-w-3xl">
                <h2 id="contact-form" className="text-2xl font-bold mb-8 pt-4 border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-3">
                    <LifeBuoy className="w-6 h-6 text-blue-600" />
                    {t('support.form.title')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">{t('support.form.labels.name')}</label>
                            <input
                                required
                                id="name"
                                type="text"
                                placeholder={t('support.form.placeholders.name')}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">{t('support.form.labels.email')}</label>
                            <input
                                required
                                id="email"
                                type="email"
                                placeholder={t('support.form.placeholders.email')}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">{t('support.form.labels.subject')}</label>
                        <select
                            id="subject"
                            title="Support subject"
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option>{t('support.form.subjects.integration')}</option>
                            <option>{t('support.form.subjects.bug')}</option>
                            <option>{t('support.form.subjects.billing')}</option>
                            <option>{t('support.form.subjects.feature')}</option>
                            <option>{t('support.form.subjects.other')}</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">{t('support.form.labels.message')}</label>
                        <textarea
                            required
                            id="message"
                            rows={5}
                            placeholder={t('support.form.placeholders.message')}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                        ></textarea>
                    </div>

                    <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all">
                        <Send className="w-5 h-5 mr-3" />
                        {t('support.form.button')}
                    </Button>
                </form>
            </div>
        </div>
    );
}
