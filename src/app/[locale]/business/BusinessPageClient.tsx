'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Zap, Users, Globe, Lock, MousePointer, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AdUnit } from '@/components/ads/AdUnit';
import { type Locale } from '@/lib/i18n/config';

interface BusinessPageClientProps {
    locale: Locale;
}

export default function BusinessPageClient({ locale }: BusinessPageClientProps) {
    const t = useTranslations('businessPage'); // You'll need to add these keys to messages later if they don't exist, I will assume English defaults for now in code

    // Fallback text effectively hardcoded for now, but structured for i18n
    // In a real scenario, we'd update the messages/en.json file.

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10" />
                    <img
                        src="/images/business-hero.jpg"
                        alt="Modern Business Office"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        {t('hero.tagline')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={`/${locale}/tools`}>
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 border-none h-14 px-8 text-lg font-semibold">
                                {t('hero.ctaCommon')}
                            </Button>
                        </Link>
                        <Link href={`/${locale}/contact`}>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                                {t('hero.ctaSales')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ad Placement - High Visibility */}
            <div className="container mx-auto px-4 mt-8">
                <AdUnit slotId="business-hero-bottom" format="horizontal" />
            </div>

            {/* Trust Section */}
            <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-b border-[hsl(var(--color-border))]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                        {t('trust.title')}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos using text for cleanliness if actual SVGs aren't available */}
                        {t.raw('trust.brands').map((brand: string, i: number) => {
                            const icons = [Globe, Zap, Lock, Server];
                            const Icon = icons[i % icons.length];
                            return (
                                <span key={i} className="text-xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <Icon className="h-6 w-6" /> {brand}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                            {t('features.title')}
                        </h2>
                        <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                            {t('features.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <FeatureCard
                            icon={<Shield className="h-8 w-8 text-blue-600" />}
                            title={t('features.security.title')}
                            description={t('features.security.description')}
                        />
                        <FeatureCard
                            icon={<Users className="h-8 w-8 text-blue-600" />}
                            title={t('features.team.title')}
                            description={t('features.team.description')}
                        />
                        <FeatureCard
                            icon={<Server className="h-8 w-8 text-blue-600" />}
                            title={t('features.api.title')}
                            description={t('features.api.description')}
                        />
                        <FeatureCard
                            icon={<MousePointer className="h-8 w-8 text-blue-600" />}
                            title={t('features.esign.title')}
                            description={t('features.esign.description')}
                        />
                        <FeatureCard
                            icon={<Globe className="h-8 w-8 text-blue-600" />}
                            title={t('features.remote.title')}
                            description={t('features.remote.description')}
                        />
                        <FeatureCard
                            icon={<Zap className="h-8 w-8 text-blue-600" />}
                            title={t('features.batch.title')}
                            description={t('features.batch.description')}
                        />
                    </div>



                    {/* Ad Placement - Mid Content */}
                    <AdUnit slotId="business-mid-content" format="auto" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[hsl(var(--color-primary)/0.03)] border-t border-[hsl(var(--color-border))]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--color-foreground))]">{t('cta.title')}</h2>
                    <Link href={`/${locale}/contact`}>
                        <Button size="lg" variant="primary" className="h-14 px-10 text-lg shadow-xl shadow-blue-500/20">
                            {t('cta.button')} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>


                </div>
            </section>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-3">{title}</h3>
            <p className="text-[hsl(var(--color-muted-foreground))] leading-relaxed">{description}</p>
        </div>
    );
}
