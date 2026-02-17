'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookOpen, GraduationCap, PenTool, Users, FileText, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AdUnit } from '@/components/ads/AdUnit';
import { type Locale } from '@/lib/i18n/config';

interface EducationPageClientProps {
    locale: Locale;
}

export default function EducationPageClient({ locale }: EducationPageClientProps) {
    const t = useTranslations('educationPage');

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-orange-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium text-sm mb-6">
                                <GraduationCap className="h-4 w-4" />
                                {t('hero.tagline')}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-foreground))] mb-6 leading-tight">
                                {t('hero.title')}
                            </h1>
                            <p className="text-xl text-[hsl(var(--color-muted-foreground))] mb-8 leading-relaxed">
                                {t('hero.description')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={`/${locale}/tools`}>
                                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8">
                                        {t('hero.ctaStart')}
                                    </Button>
                                </Link>
                                <Link href={`/${locale}/contact`}>
                                    <Button size="lg" variant="outline" className="h-12 px-8">
                                        {t('hero.ctaPricing')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        {/* Real Pexels Image */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-orange-100 dark:border-slate-800">
                            <img
                                src="/images/education-hero.jpg"
                                alt="Students Studying"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ad Placement - High Visibility */}
            <div className="container mx-auto px-4 mt-8">
                <AdUnit slotId="education-hero-bottom" format="horizontal" />
            </div>

            {/* Benefits Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
                                    <Check className="h-6 w-6 text-green-500 mb-4" />
                                    <h3 className="font-bold mb-2">{t('benefits.grid.essay.title')}</h3>
                                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('benefits.grid.essay.description')}</p>
                                </div>
                                <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
                                    <Check className="h-6 w-6 text-green-500 mb-4" />
                                    <h3 className="font-bold mb-2">{t('benefits.grid.group.title')}</h3>
                                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('benefits.grid.group.description')}</p>
                                </div>
                                <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
                                    <Check className="h-6 w-6 text-green-500 mb-4" />
                                    <h3 className="font-bold mb-2">{t('benefits.grid.textbooks.title')}</h3>
                                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('benefits.grid.textbooks.description')}</p>
                                </div>
                                <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
                                    <Check className="h-6 w-6 text-green-500 mb-4" />
                                    <h3 className="font-bold mb-2">{t('benefits.grid.secure.title')}</h3>
                                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('benefits.grid.secure.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--color-foreground))]">{t('benefits.title')}</h2>
                            <p className="text-lg text-[hsl(var(--color-muted-foreground))] mb-8">
                                {t('benefits.description')}
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">1</span>
                                    <span className="text-[hsl(var(--color-foreground))]">{t('benefits.list.free')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">2</span>
                                    <span className="text-[hsl(var(--color-foreground))]">{t('benefits.list.noInstall')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">3</span>
                                    <span className="text-[hsl(var(--color-foreground))]">{t('benefits.list.mobile')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-[hsl(var(--color-primary)/0.03)] border-t border-[hsl(var(--color-border))]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--color-foreground))]">{t('cta.title')}</h2>
                    <Link href={`/${locale}/contact`}>
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900">
                            {t('cta.button')}
                        </Button>
                    </Link>


                </div>
            </section>
        </main>
    );
}
