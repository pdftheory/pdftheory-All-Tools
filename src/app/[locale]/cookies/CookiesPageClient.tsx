'use client';

import { useState } from 'react';
import { ChevronRight, Cookie, BarChart3, Megaphone, Settings, Shield, RefreshCw, Mail } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface CookiesPageClientProps {
    locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const t = useTranslations('cookiesPage');
    const tCommon = useTranslations('legalCommon');

    const sections = [
        { id: 'what-are-cookies', title: t('sections.s1.title') },
        { id: 'types-of-cookies', title: t('sections.s2.title') },
        { id: 'third-party', title: t('sections.s3.title') },
        { id: 'managing-cookies', title: t('sections.s4.title') },
        { id: 'legal-compliance', title: t('sections.s5.title') },
        { id: 'changes', title: t('sections.s6.title') },
        { id: 'contact', title: t('sections.s7.title') },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href={`/${locale}`} className="hover:text-gray-900 transition-colors">{tCommon('home')}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">{t('title')}</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        {t('description')}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span>{tCommon('effective')}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{tCommon('lastUpdated')}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
                <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-8">
                            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                                {tCommon('onThisPage')}
                            </h2>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === section.id
                                            ? 'bg-gray-100 text-gray-900 font-medium'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article className="prose prose-gray prose-lg max-w-none">
                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed">
                            {t.rich('intro', {
                                link: (chunks) => <a href="https://pdftheory.com" className="text-blue-600 hover:underline">pdftheory.com</a>
                            })}
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                            <p className="text-blue-900 font-medium m-0">
                                {t('consent')}
                            </p>
                        </div>

                        {/* Section 1: What Are Cookies? */}
                        <section id="what-are-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s1.title')}</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {t('sections.s1.text')}
                            </p>
                        </section>

                        {/* Section 2: Types of Cookies We Use */}
                        <section id="types-of-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s2.title')}</h2>

                            {/* Cookie Type Cards */}
                            <div className="space-y-6 not-prose">
                                {/* Essential Cookies */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Cookie className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('sections.s2.essential.title')}</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('sections.s2.essential.badge')}</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.essential.purposeLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.essential.purpose')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.essential.durationLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.essential.duration')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.essential.canDisableLabel')}</p>
                                                <p className="text-gray-900 font-medium">{t('sections.s2.essential.canDisable')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                            <BarChart3 className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('sections.s2.analytics.title')}</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('sections.s2.analytics.badge')}</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.analytics.purposeLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.analytics.purpose')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.analytics.durationLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.analytics.duration')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.analytics.providerLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.analytics.provider')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Advertising Cookies */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                                            <Megaphone className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('sections.s2.advertising.title')}</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">{t('sections.s2.advertising.badge')}</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.advertising.purposeLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.advertising.purpose')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.advertising.durationLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.advertising.duration')}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">{t('sections.s2.advertising.providerLabel')}</p>
                                                <p className="text-gray-900">{t('sections.s2.advertising.provider')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Third-Party Cookies */}
                        <section id="third-party" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s3.title')}</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {t('sections.s3.text')}
                            </p>
                            <p className="text-gray-700">
                                {t('sections.s3.reviewText')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{(t.raw('sections.s3.links') as string[])[0]}</a></li>
                                <li><a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{(t.raw('sections.s3.links') as string[])[1]}</a></li>
                            </ul>
                        </section>

                        {/* Section 4: Managing Cookies */}
                        <section id="managing-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Settings className="w-7 h-7 text-gray-400" />
                                {t('sections.s4.title')}
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {t('sections.s4.text')}
                            </p>

                            <div className="overflow-x-auto not-prose">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.s4.browserHeader')}</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.s4.howToHeader')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(t.raw('sections.s4.browsers') as { name: string; instructions: string }[]).map((browser, idx) => (
                                            <tr key={idx} className={idx < (t.raw('sections.s4.browsers') as any[]).length - 1 ? "border-b border-gray-100" : ""}>
                                                <td className="px-4 py-3 font-medium text-gray-900">{browser.name}</td>
                                                <td className="px-4 py-3 text-gray-700">{browser.instructions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                                <p className="text-amber-900 font-medium m-0">
                                    {t.rich('sections.s4.warning', {
                                        strong: (chunks) => <strong>{chunks}</strong>
                                    })}
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Legal Compliance */}
                        <section id="legal-compliance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Shield className="w-7 h-7 text-gray-400" />
                                {t('sections.s5.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {t('sections.s5.text')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                {(t.raw('sections.s5.items') as string[]).map((item, idx) => (
                                    <li key={idx}>
                                        {item.includes('GDPR') || item.includes('CCPA') ? (
                                            <>
                                                <strong>{item.split(' (')[0]}</strong>
                                                {' (' + item.split(' (')[1]}
                                            </>
                                        ) : item.includes('ePrivacy') ? (
                                            <>
                                                <strong>{item.split(' –')[0]}</strong>
                                                {' –' + item.split(' –')[1]}
                                            </>
                                        ) : (
                                            item
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 mt-4">
                                {t('sections.s5.outro')}
                            </p>
                        </section>

                        {/* Section 6: Changes to This Cookies Policy */}
                        <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <RefreshCw className="w-7 h-7 text-gray-400" />
                                {t('sections.s6.title')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {t('sections.s6.text')}
                            </p>
                        </section>

                        {/* Section 7: Contact Us */}
                        <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Mail className="w-7 h-7 text-gray-400" />
                                {t('sections.s7.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.s7.text')}
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{tCommon('email')}</p>
                                        <a href="mailto:privacy@pdftheory.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                            privacy@pdftheory.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{tCommon('phone')}</p>
                                        <a href="tel:+19295673562" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                            +1 (929) 567-3562
                                        </a>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-sm text-gray-500 mb-1">{tCommon('mailingAddress')}</p>
                                        <address className="text-gray-900 font-medium not-italic">
                                            pdftheory<br />
                                            123 Business St, Suite 400<br />
                                            San Francisco, CA 94105<br />
                                            United States
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Related Links */}
                        <section className="mt-16 pt-8 border-t border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">{tCommon('relatedPolicies')}</h2>
                            <div className="flex flex-wrap gap-4 not-prose">
                                <Link href={`/${locale}/privacy`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('privacyPolicy')}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/terms`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('termsOfService')}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/security`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('security')}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
}
