'use client';

import { useState } from 'react';
import { ChevronRight, Shield, Lock, Server, Trash2, Globe, CheckCircle2, FileCheck, Cpu, Cloud, Key, AlertTriangle } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface SecurityPageClientProps {
    locale: Locale;
}

export default function SecurityPageClient({ locale }: SecurityPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const t = useTranslations('securityPage');
    const tCommon = useTranslations('legalCommon');

    const sections = [
        { id: 'overview', title: t('sections.overview.title') },
        { id: 'local-processing', title: t('sections.localProcessing.title') },
        { id: 'no-upload', title: t('sections.noUpload.title') },
        { id: 'encryption', title: t('sections.encryption.title') },
        { id: 'data-handling', title: t('sections.dataHandling.title') },
        { id: 'infrastructure', title: t('sections.infrastructure.title') },
        { id: 'compliance', title: t('sections.compliance.title') },
        { id: 'reporting', title: t('sections.reporting.title') },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    const securityFeatures = [
        {
            icon: Server,
            title: t('features.noServerUploads.title'),
            description: t('features.noServerUploads.desc'),
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: Lock,
            title: t('features.endToEndPrivacy.title'),
            description: t('features.endToEndPrivacy.desc'),
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: Trash2,
            title: t('features.autoCleanup.title'),
            description: t('features.autoCleanup.desc'),
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: Cpu,
            title: t('features.browserProcessing.title'),
            description: t('features.browserProcessing.desc'),
            color: 'bg-orange-100 text-orange-600',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href={`/${locale}`} className="hover:text-gray-900 transition-colors">{tCommon('home')}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">{tCommon('security')}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                                {t('title')}
                            </h1>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 max-w-2xl mb-8">
                        {t('description')}
                    </p>

                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <div>
                            <p className="font-semibold text-green-900">{t('trustBadge')}</p>
                            <p className="text-sm text-green-700">{t('trustBadgeDesc')}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Security Features Grid */}
            <section className="border-b border-gray-200 bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {securityFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

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

                        {/* Security Overview */}
                        <section id="overview" className="scroll-mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.overview.title')}</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {t('sections.overview.p1')}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {t('sections.overview.p2')}
                            </p>
                        </section>

                        {/* Local Processing */}
                        <section id="local-processing" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Cpu className="w-7 h-7 text-gray-400" />
                                {t('sections.localProcessing.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.localProcessing.intro')}
                            </p>
                            <div className="not-prose space-y-4 mb-6">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <FileCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{t('sections.localProcessing.wasm.title')}</h4>
                                        <p className="text-sm text-gray-600">{t('sections.localProcessing.wasm.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{t('sections.localProcessing.jsLibs.title')}</h4>
                                        <p className="text-sm text-gray-600">{t('sections.localProcessing.jsLibs.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{t('sections.localProcessing.sandbox.title')}</h4>
                                        <p className="text-sm text-gray-600">{t('sections.localProcessing.sandbox.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* No Server Uploads */}
                        <section id="no-upload" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Cloud className="w-7 h-7 text-gray-400" />
                                {t('sections.noUpload.title')}
                            </h2>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 not-prose">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-green-900 text-lg mb-2">{t('sections.noUpload.guarantee')}</h3>
                                        <p className="text-green-800 leading-relaxed">
                                            {t.rich('sections.noUpload.guaranteeDesc', {
                                                strong: (chunks) => <strong>{chunks}</strong>
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">{t('sections.noUpload.meaningTitle')}</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.noUpload.items') as string[]).map((item, idx) => (
                                    <li key={idx}>
                                        <strong>{item.split(': ')[0]}:</strong> {item.split(': ')[1]}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Encryption */}
                        <section id="encryption" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Key className="w-7 h-7 text-gray-400" />
                                {t('sections.encryption.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.encryption.intro')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.encryption.items') as string[]).map((item, idx) => (
                                    <li key={idx}>
                                        <strong>{item.split(': ')[0]}:</strong> {item.split(': ')[1]}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Handling */}
                        <section id="data-handling" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Trash2 className="w-7 h-7 text-gray-400" />
                                {t('sections.dataHandling.title')}
                            </h2>

                            <div className="overflow-x-auto not-prose mb-6">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.dataHandling.dataType')}</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.dataHandling.storageLocation')}</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{t('sections.dataHandling.retention')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(t.raw('sections.dataHandling.rows') as { type: string; location: string; retention: string }[]).map((row, idx) => (
                                            <tr key={idx} className={idx < (t.raw('sections.dataHandling.rows') as any[]).length - 1 ? "border-b border-gray-100" : ""}>
                                                <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                                                <td className="px-4 py-3 text-gray-700">{row.location}</td>
                                                <td className={`px-4 py-3 font-medium ${row.retention.toLowerCase().includes('deleted') || row.retention.toLowerCase().includes('cleared') ? 'text-green-700' : 'text-gray-700'}`}>
                                                    {row.retention}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Infrastructure Security */}
                        <section id="infrastructure" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Globe className="w-7 h-7 text-gray-400" />
                                {t('sections.infrastructure.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.infrastructure.intro')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {(t.raw('sections.infrastructure.items') as string[]).map((item, idx) => (
                                    <li key={idx}>
                                        <strong>{item.split(': ')[0]}:</strong> {item.split(': ')[1]}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Compliance */}
                        <section id="compliance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Shield className="w-7 h-7 text-gray-400" />
                                {t('sections.compliance.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.compliance.intro')}
                            </p>
                            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <h4 className="font-semibold text-blue-900 mb-1">{t('sections.compliance.gdpr.title')}</h4>
                                    <p className="text-sm text-blue-800">{t('sections.compliance.gdpr.desc')}</p>
                                </div>
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <h4 className="font-semibold text-green-900 mb-1">{t('sections.compliance.ccpa.title')}</h4>
                                    <p className="text-sm text-green-800">{t('sections.compliance.ccpa.desc')}</p>
                                </div>
                                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                                    <h4 className="font-semibold text-purple-900 mb-1">{t('sections.compliance.hipaa.title')}</h4>
                                    <p className="text-sm text-purple-800">{t('sections.compliance.hipaa.desc')}</p>
                                </div>
                                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                                    <h4 className="font-semibold text-orange-900 mb-1">{t('sections.compliance.sox.title')}</h4>
                                    <p className="text-sm text-orange-800">{t('sections.compliance.sox.desc')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Security Reporting */}
                        <section id="reporting" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-gray-400" />
                                {t('sections.reporting.title')}
                            </h2>
                            <p className="text-gray-700 mb-6">
                                {t('sections.reporting.intro')}
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose">
                                <h3 className="font-semibold text-gray-900 mb-4">{t('sections.reporting.reportTitle')}</h3>
                                <p className="text-gray-700 mb-4">
                                    {t('sections.reporting.reportText')}
                                </p>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{t('sections.reporting.securityEmail')}</p>
                                        <a href="mailto:security@pdftheory.com" className="text-blue-600 font-medium hover:underline">
                                            security@pdftheory.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{t('sections.reporting.generalContact')}</p>
                                        <a href="mailto:privacy@pdftheory.com" className="text-blue-600 font-medium hover:underline">
                                            privacy@pdftheory.com
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    {t('sections.reporting.responseTime')}
                                </p>
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
                                <Link href={`/${locale}/cookies`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    {tCommon('cookiePolicy')}
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
