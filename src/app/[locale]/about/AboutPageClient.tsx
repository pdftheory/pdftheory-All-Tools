'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Zap, Globe, Heart, Code, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';

interface AboutPageClientProps {
  locale: Locale;
}

export default function AboutPageClient({ locale }: AboutPageClientProps) {
  const t = useTranslations('aboutPage');
  const tCommon = useTranslations('common');
  const allTools = getAllTools();

  const primaryValues = [
    {
      image: '/assets/about/value-security.png',
      title: t('values.privacy.title'),
      description: t('values.privacy.description'),
      delay: '0',
    },
    {
      image: '/assets/about/value-speed.png',
      title: t('values.fast.title'),
      description: t('values.fast.description'),
      delay: '100',
    },
    {
      image: '/assets/about/value-simplicity.png',
      title: t('values.accessible.title'),
      description: t('values.accessible.description'),
      delay: '200',
    },
  ];

  const secondaryValues = [
    {
      icon: Heart,
      title: t('values.free.title'),
      description: t('values.free.description'),
    },
    {
      icon: Code,
      title: t('values.openSource.title'),
      description: t('values.openSource.description'),
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description'),
    },
  ];

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[hsl(var(--color-primary)/0.03)] to-transparent pt-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--color-primary))] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--color-primary))]"></span>
                </span>
                {tCommon('brand')} 2.0
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[hsl(var(--color-foreground))] mb-6 leading-[1.1]">
                Empowering Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--color-primary))] to-purple-600">
                  Document Workflow
                </span>
              </h1>

              <p className="text-xl text-[hsl(var(--color-muted-foreground))] mb-8 leading-relaxed max-w-lg">
                {t('description', { brand: tCommon('brand'), count: 110 })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/tools`}>
                  <Button variant="primary" size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                    {t('cta.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#mission">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/50 backdrop-blur-sm border-2">
                    {t('mission.title')}
                  </Button>
                </Link>
              </div>

              {/* Trust/Stats */}
              <div className="mt-12 pt-8 border-t border-[hsl(var(--color-border))]">
                <p className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] mb-4">Trusted by professionals worldwide</p>
                <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                  {/* Placeholders for logos if needed, or just stats */}
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[hsl(var(--color-foreground))]">110+</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">Tools</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[hsl(var(--color-foreground))]">1M+</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">Files Processed</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[hsl(var(--color-foreground))]">100%</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">Secure</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] w-full flex items-center justify-center hidden md:flex">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                <Image
                  src="/assets/about/hero-illustration.png"
                  alt="Abstract Document Cloud"
                  fill
                  className="object-contain drop-shadow-2xl animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden glass-card p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[hsl(var(--color-secondary)/0.3)]">
                <Image
                  src="/assets/about/mission-image.png"
                  alt="Team Collaboration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[hsl(var(--color-foreground))]">
                {t('mission.title')}
              </h2>
              <div className="space-y-6 text-lg text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                <p>{t('mission.p1', { brand: tCommon('brand') })}</p>
                <div className="pl-6 border-l-4 border-[hsl(var(--color-primary))] italic">
                  <p>{t('mission.p2', { brand: tCommon('brand') })}</p>
                </div>
                <p>{t('mission.p3', { brand: tCommon('brand') })}</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Browser-based Processing",
                  "No Server Uploads",
                  "Works Offline",
                  "Open Source"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[hsl(var(--color-foreground))] font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[hsl(var(--color-secondary)/0.3)] relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[hsl(var(--color-foreground))]">
              {t('values.title')}
            </h2>
            <p className="text-xl text-[hsl(var(--color-muted-foreground))]">
              The principles that drive every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {primaryValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-[hsl(var(--color-border))] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--color-primary)/0.05)] rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

                <div className="relative h-48 w-full mb-8 flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--color-foreground))]">{value.title}</h3>
                <p className="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 bg-transparent border-0 shadow-none hover:bg-[hsl(var(--color-background))] hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[hsl(var(--color-foreground))] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-8">
              {t('technology.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-[hsl(var(--color-muted-foreground))] mx-auto mb-12">
              <p>
                {t('technology.description', { brand: tCommon('brand') })}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Next.js", desc: "React Framework" },
                { name: "WebAssembly", desc: "High Performance" },
                { name: "Web Workers", desc: "Background Tasks" },
                { name: "PDF-Lib", desc: "PDF Manipulation" },
                { name: "IndexedDB", desc: "Local Storage" }
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-[hsl(var(--color-muted)/0.3)] hover:bg-[hsl(var(--color-muted)/0.6)] transition-colors">
                  <span className="font-bold text-[hsl(var(--color-foreground))]">{tech.name}</span>
                  <span className="text-xs text-[hsl(var(--color-muted-foreground))]">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--color-foreground))] mx-4 md:mx-12 rounded-[2.5rem]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              {t('cta.description', { brand: tCommon('brand'), count: 110 })}
            </p>
            <Link href={`/${locale}/tools`}>
              <Button size="lg" className="h-16 px-10 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl">
                {t('cta.button')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
