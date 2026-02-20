'use client';

import { useState } from 'react';
import { ChevronRight, Shield, Lock, Server, Eye, Trash2, Globe, CheckCircle2, FileCheck, Cpu, Cloud, Key, AlertTriangle } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';

interface SecurityPageClientProps {
    locale: Locale;
}

export default function SecurityPageClient({ locale }: SecurityPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const sections = [
        { id: 'overview', title: 'Security Overview' },
        { id: 'local-processing', title: 'Local Processing' },
        { id: 'no-upload', title: 'No Server Uploads' },
        { id: 'encryption', title: 'Data Encryption' },
        { id: 'data-handling', title: 'Data Handling' },
        { id: 'infrastructure', title: 'Infrastructure Security' },
        { id: 'compliance', title: 'Compliance' },
        { id: 'reporting', title: 'Security Reporting' },
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
            title: 'No Server Uploads',
            description: 'Your files never leave your device. All processing happens locally in your browser.',
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: Lock,
            title: 'End-to-End Privacy',
            description: 'We cannot see, access, or store your documents. Your data stays 100% private.',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: Trash2,
            title: 'Automatic Data Cleanup',
            description: 'All file data is cleared from memory when you close the tab or navigate away.',
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: Cpu,
            title: 'Browser-Based Processing',
            description: 'Advanced WebAssembly technology powers fast, secure processing directly in your browser.',
            color: 'bg-orange-100 text-orange-600',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href={`/${locale}`} className="hover:text-gray-900 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Security</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                                Security at pdftheory
                            </h1>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 max-w-2xl mb-8">
                        Your security and privacy are our top priorities. pdftheory is built from the ground up with a privacy-first architecture that keeps your documents safe.
                    </p>

                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <div>
                            <p className="font-semibold text-green-900">100% Client-Side Processing</p>
                            <p className="text-sm text-green-700">Your files never leave your device</p>
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
                                On this page
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
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At pdftheory, we believe that the best way to protect your data is to never have access to it in the first place. That&apos;s why we&apos;ve built our entire platform around client-side processing technology.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Unlike traditional PDF tools that upload your files to remote servers, pdftheory processes everything directly in your web browser using advanced JavaScript and WebAssembly technology. This means your sensitive documents – whether they contain financial records, legal contracts, medical information, or personal data – never leave your device.
                            </p>
                        </section>

                        {/* Local Processing */}
                        <section id="local-processing" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Cpu className="w-7 h-7 text-gray-400" />
                                Local Processing Technology
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Every PDF operation on pdftheory is performed using cutting-edge browser technologies:
                            </p>
                            <div className="not-prose space-y-4 mb-6">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <FileCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">WebAssembly (WASM)</h4>
                                        <p className="text-sm text-gray-600">High-performance binary format that runs PDF processing at near-native speed directly in your browser.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">JavaScript PDF Libraries</h4>
                                        <p className="text-sm text-gray-600">Open-source libraries like PDF-lib and pdf.js power our tools, running entirely in your browser environment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Browser Sandbox</h4>
                                        <p className="text-sm text-gray-600">All processing occurs within your browser&apos;s secure sandbox, isolated from other applications and the internet.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* No Server Uploads */}
                        <section id="no-upload" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Cloud className="w-7 h-7 text-gray-400" />
                                No Server Uploads
                            </h2>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 not-prose">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-green-900 text-lg mb-2">Zero File Uploads Guarantee</h3>
                                        <p className="text-green-800 leading-relaxed">
                                            Your PDF files are <strong>never uploaded</strong> to our servers or any third-party servers. When you select a file, it&apos;s read directly by your browser and processed locally. The processed result is then available for download – all without any data ever leaving your device.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">What this means for you:</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Complete Privacy:</strong> We cannot see your documents because they never reach us.</li>
                                <li><strong>No Data Breaches:</strong> Since we don&apos;t store files, there&apos;s nothing to breach.</li>
                                <li><strong>No Third-Party Access:</strong> Your files aren&apos;t shared with any external services.</li>
                                <li><strong>Works Offline:</strong> Once loaded, many tools work without an internet connection.</li>
                            </ul>
                        </section>

                        {/* Data Encryption */}
                        <section id="encryption" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Key className="w-7 h-7 text-gray-400" />
                                Data Encryption
                            </h2>
                            <p className="text-gray-700 mb-6">
                                While your files stay local, all communication with our website is secured:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>TLS 1.3 Encryption:</strong> All connections use the latest TLS encryption protocols.</li>
                                <li><strong>HTTPS Everywhere:</strong> Our entire site is served over HTTPS with HSTS enabled.</li>
                                <li><strong>Secure Headers:</strong> We implement security headers including CSP, X-Frame-Options, and XSS protection.</li>
                                <li><strong>No Mixed Content:</strong> All resources are loaded securely to prevent man-in-the-middle attacks.</li>
                            </ul>
                        </section>

                        {/* Data Handling */}
                        <section id="data-handling" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Trash2 className="w-7 h-7 text-gray-400" />
                                Data Handling & Retention
                            </h2>

                            <div className="overflow-x-auto not-prose mb-6">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Data Type</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Storage Location</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Retention</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Your PDF Files</td>
                                            <td className="px-4 py-3 text-gray-700">Your device only (browser memory)</td>
                                            <td className="px-4 py-3 text-green-700 font-medium">Deleted immediately when you close the tab</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Processing Data</td>
                                            <td className="px-4 py-3 text-gray-700">Browser memory</td>
                                            <td className="px-4 py-3 text-green-700 font-medium">Cleared after each operation</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Account Information</td>
                                            <td className="px-4 py-3 text-gray-700">Secure servers (if you create an account)</td>
                                            <td className="px-4 py-3 text-gray-700">Until you delete your account</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Analytics (anonymous)</td>
                                            <td className="px-4 py-3 text-gray-700">Google Analytics</td>
                                            <td className="px-4 py-3 text-gray-700">Up to 24 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Infrastructure Security */}
                        <section id="infrastructure" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Globe className="w-7 h-7 text-gray-400" />
                                Infrastructure Security
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Our website infrastructure follows industry best practices:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>CDN Protection:</strong> Global content delivery with DDoS protection.</li>
                                <li><strong>Regular Updates:</strong> All dependencies and frameworks are kept up-to-date.</li>
                                <li><strong>Security Audits:</strong> Regular code reviews and security assessments.</li>
                                <li><strong>Minimal Data Collection:</strong> We only collect what&apos;s absolutely necessary.</li>
                                <li><strong>Open Source:</strong> Core components are open source and can be independently audited.</li>
                            </ul>
                        </section>

                        {/* Compliance */}
                        <section id="compliance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Shield className="w-7 h-7 text-gray-400" />
                                Compliance & Standards
                            </h2>
                            <p className="text-gray-700 mb-6">
                                pdftheory is designed to help you maintain compliance with data protection regulations:
                            </p>
                            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <h4 className="font-semibold text-blue-900 mb-1">GDPR Compliant</h4>
                                    <p className="text-sm text-blue-800">Meets European Union data protection requirements</p>
                                </div>
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <h4 className="font-semibold text-green-900 mb-1">CCPA Compliant</h4>
                                    <p className="text-sm text-green-800">Meets California Consumer Privacy Act requirements</p>
                                </div>
                                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                                    <h4 className="font-semibold text-purple-900 mb-1">HIPAA Friendly</h4>
                                    <p className="text-sm text-purple-800">Suitable for processing healthcare documents (files never leave your device)</p>
                                </div>
                                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                                    <h4 className="font-semibold text-orange-900 mb-1">SOX Friendly</h4>
                                    <p className="text-sm text-orange-800">Suitable for financial document processing</p>
                                </div>
                            </div>
                        </section>

                        {/* Security Reporting */}
                        <section id="reporting" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-gray-400" />
                                Security Reporting
                            </h2>
                            <p className="text-gray-700 mb-6">
                                We take security seriously and welcome responsible disclosure of any vulnerabilities.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose">
                                <h3 className="font-semibold text-gray-900 mb-4">Report a Security Issue</h3>
                                <p className="text-gray-700 mb-4">
                                    If you discover a security vulnerability, please report it to us responsibly:
                                </p>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Security Email</p>
                                        <a href="mailto:security@pdftheory.com" className="text-blue-600 font-medium hover:underline">
                                            security@pdftheory.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">General Contact</p>
                                        <a href="mailto:privacy@pdftheory.com" className="text-blue-600 font-medium hover:underline">
                                            privacy@pdftheory.com
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    Please include a detailed description of the vulnerability and steps to reproduce it. We aim to respond within 48 hours.
                                </p>
                            </div>
                        </section>

                        {/* Related Links */}
                        <section className="mt-16 pt-8 border-t border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Policies</h2>
                            <div className="flex flex-wrap gap-4 not-prose">
                                <Link href={`/${locale}/privacy`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Privacy Policy
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/terms`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Terms of Service
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/cookies`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Cookies Policy
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
