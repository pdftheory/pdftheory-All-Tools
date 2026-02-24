'use client';

import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface TermsPageClientProps {
    locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const t = useTranslations('termsPage');
    const tCommon = useTranslations('legalCommon');

    const sections = [
        { id: 'definitions', title: t('sections.s1.title') },
        { id: 'acceptance', title: t('sections.s2.title') },
        { id: 'account', title: t('sections.s3.title') },
        { id: 'use', title: t('sections.s4.title') },
        { id: 'ip', title: t('sections.s5.title') },
        { id: 'files', title: t('sections.s6.title') },
        { id: 'payments', title: t('sections.s7.title') },
        { id: 'third-party', title: t('sections.s8.title') },
        { id: 'disclaimers', title: t('sections.s9.title') },
        { id: 'liability', title: t('sections.s10.title') },
        { id: 'indemnification', title: t('sections.s11.title') },
        { id: 'children', title: t('sections.s12.title') },
        { id: 'privacy', title: t('sections.s13.title') },
        { id: 'termination', title: t('sections.s14.title') },
        { id: 'governing-law', title: t('sections.s15.title') },
        { id: 'changes', title: t('sections.s16.title') },
        { id: 'contact', title: t('sections.s17.title') },
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
                            <nav className="space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
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

                        {/* Section 1: Definitions */}
                        <section id="definitions" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s1.title')}</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200 w-1/4">{t('sections.s1.termHeader')}</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.s1.defHeader')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(t.raw('sections.s1.terms') as { term: string; def: string }[]).map((item, idx) => (
                                            <tr key={idx} className={idx < (t.raw('sections.s1.terms') as any[]).length - 1 ? "border-b border-gray-100" : ""}>
                                                <td className="px-4 py-3 font-medium text-gray-900">{item.term}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.def}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 2: Acceptance of Terms */}
                        <section id="acceptance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s2.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('sections.s2.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s2.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 3: Account Registration */}
                        <section id="account" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s3.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('sections.s3.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                                {(t.raw('sections.s3.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-sm">
                                {t('sections.s3.note')}
                            </p>
                        </section>

                        {/* Section 4: Use of the Service */}
                        <section id="use" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s4.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('sections.s4.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s4.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 5: Intellectual Property */}
                        <section id="ip" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s5.title')}</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                                {(t.raw('sections.s5.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <p className="text-gray-700 text-sm">
                                    {t.rich('sections.s5.openSource', {
                                        strong: (chunks) => <strong>{chunks}</strong>,
                                        link: (chunks) => (
                                            <a href="https://github.com/pdftheory/pdftheory" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                                                {chunks} <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )
                                    })}
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Files and Data */}
                        <section id="files" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s6.title')}</h2>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                <p className="text-green-900 font-medium mb-2">{t('sections.s6.privacyTitle')}</p>
                                <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
                                    {(t.raw('sections.s6.privacyItems') as string[]).map((item, idx) => (
                                        <li key={idx}>
                                            {item.includes('never uploaded') ? (
                                                <>
                                                    {item.split('never uploaded')[0]}
                                                    <strong>never uploaded</strong>
                                                    {item.split('never uploaded')[1]}
                                                </>
                                            ) : (
                                                item
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s6.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 7: Payments and Advertising */}
                        <section id="payments" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s7.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s7.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 8: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s8.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s8.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 9: Disclaimers */}
                        <section id="disclaimers" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s9.title')}</h2>
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                                <p className="text-amber-900 font-medium">
                                    {t('sections.s9.warning')}
                                </p>
                            </div>
                            <p className="text-gray-700 mb-4">{t('sections.s9.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s9.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 10: Limitation of Liability */}
                        <section id="liability" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s10.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('sections.s10.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                                {(t.raw('sections.s10.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-sm">
                                {t('sections.s10.note')}
                            </p>
                        </section>

                        {/* Section 11: Indemnification */}
                        <section id="indemnification" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s11.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('sections.s11.intro')}</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s11.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 12: Children's Use */}
                        <section id="children" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s12.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s12.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 13: Privacy Compliance */}
                        <section id="privacy" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s13.title')}</h2>
                            <p className="text-gray-700">
                                {t.rich('sections.s13.text', {
                                    link: (chunks) => <Link href={`/${locale}/privacy`} className="text-blue-600 hover:underline">{chunks}</Link>
                                })}
                            </p>
                        </section>

                        {/* Section 14: Termination */}
                        <section id="termination" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s14.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s14.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 15: International Use and Governing Law */}
                        <section id="governing-law" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s15.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s15.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 16: Changes to Terms */}
                        <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s16.title')}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.s16.items') as string[]).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 17: Contact Information */}
                        <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s17.title')}</h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.s17.text')}
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
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
                            <div className="flex flex-wrap gap-4">
                                <Link href={`/${locale}/privacy`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('privacyPolicy')}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/cookies`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('cookiePolicy')}
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
