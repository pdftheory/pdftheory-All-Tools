'use client';

import { useState } from 'react';
import { ChevronRight, Cookie, BarChart3, Megaphone, Settings, Shield, RefreshCw, Mail } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';

interface CookiesPageClientProps {
    locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const sections = [
        { id: 'what-are-cookies', title: '1. What Are Cookies?' },
        { id: 'types-of-cookies', title: '2. Types of Cookies We Use' },
        { id: 'third-party', title: '3. Third-Party Cookies' },
        { id: 'managing-cookies', title: '4. Managing Cookies' },
        { id: 'legal-compliance', title: '5. Legal Compliance' },
        { id: 'changes', title: '6. Changes to This Policy' },
        { id: 'contact', title: '7. Contact Us' },
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
                        <Link href={`/${locale}`} className="hover:text-gray-900 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Cookies Policy</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        Cookies Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        This policy explains what cookies are, the types we use, how we use them, and your choices regarding cookies.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span>Effective: January 30, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Last updated: January 30, 2026</span>
                    </div>
                </div>
            </header>

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
                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed">
                            pdftheory (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) uses cookies and similar technologies to enhance your experience on our website <a href="https://pdftheory.com" className="text-blue-600 hover:underline">pdftheory.com</a> and our mobile application (together, the &ldquo;Service&rdquo;). This Cookies Policy explains what cookies are, the types we use, how we use them, and your choices regarding cookies.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                            <p className="text-blue-900 font-medium m-0">
                                By using our Service, you consent to the use of cookies as described in this policy.
                            </p>
                        </div>

                        {/* Section 1: What Are Cookies? */}
                        <section id="what-are-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. What Are Cookies?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites recognize your device and store information about your preferences or past activity. Cookies improve functionality, provide analytics, and deliver personalized ads.
                            </p>
                        </section>

                        {/* Section 2: Types of Cookies We Use */}
                        <section id="types-of-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Types of Cookies We Use</h2>

                            {/* Cookie Type Cards */}
                            <div className="space-y-6 not-prose">
                                {/* Essential Cookies */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Cookie className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">2.1 Essential Cookies</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">Required</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">Purpose</p>
                                                <p className="text-gray-900">Required for basic site functionality, such as logging in, maintaining sessions, and accessing account features.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Duration</p>
                                                <p className="text-gray-900">Session-only; deleted when you close your browser.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Can be disabled?</p>
                                                <p className="text-gray-900 font-medium">No – required for functionality</p>
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
                                            <h3 className="font-semibold text-gray-900">2.2 Analytics Cookies</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">Performance</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">Purpose</p>
                                                <p className="text-gray-900">Collect information about how you interact with our website and Service, such as pages visited, time spent, and clicks. This helps us improve our Service.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Duration</p>
                                                <p className="text-gray-900">Up to 24 months.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Provider</p>
                                                <p className="text-gray-900">Google Analytics</p>
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
                                            <h3 className="font-semibold text-gray-900">2.3 Advertising/Marketing Cookies</h3>
                                            <span className="text-xs text-gray-500 uppercase tracking-wide">Targeting</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 mb-1">Purpose</p>
                                                <p className="text-gray-900">Display relevant advertisements and measure ad performance.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Duration</p>
                                                <p className="text-gray-900">Varies by advertising partner.</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 mb-1">Provider</p>
                                                <p className="text-gray-900">Ezoic and other ad partners</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Third-Party Cookies */}
                        <section id="third-party" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Third-Party Cookies</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We use cookies from third-party services (Google Analytics, Ezoic, etc.) to provide analytics and personalized ads. These third parties may collect information about your browsing activity across multiple websites.
                            </p>
                            <p className="text-gray-700">
                                Please review their privacy policies for more details:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                                <li><a href="https://www.ezoic.com/privacy-policy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ezoic Privacy Policy</a></li>
                            </ul>
                        </section>

                        {/* Section 4: Managing Cookies */}
                        <section id="managing-cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Settings className="w-7 h-7 text-gray-400" />
                                4. Managing Cookies
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                You have the right to accept, reject, or delete cookies at any time. You can manage cookies through your browser settings:
                            </p>

                            <div className="overflow-x-auto not-prose">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Browser</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">How to Manage Cookies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Google Chrome</td>
                                            <td className="px-4 py-3 text-gray-700">Settings → Privacy and security → Cookies and other site data</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Mozilla Firefox</td>
                                            <td className="px-4 py-3 text-gray-700">Options → Privacy & Security → Cookies and Site Data</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Safari</td>
                                            <td className="px-4 py-3 text-gray-700">Preferences → Privacy → Manage Website Data</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Microsoft Edge</td>
                                            <td className="px-4 py-3 text-gray-700">Settings → Cookies and site permissions → Manage and delete cookies</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Opera</td>
                                            <td className="px-4 py-3 text-gray-700">Settings → Privacy & security → Cookies</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                                <p className="text-amber-900 font-medium m-0">
                                    <strong>Important:</strong> Disabling essential cookies may limit certain features of our Service.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Legal Compliance */}
                        <section id="legal-compliance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Shield className="w-7 h-7 text-gray-400" />
                                5. Legal Compliance
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our use of cookies is in compliance with applicable privacy laws, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                <li><strong>GDPR</strong> (General Data Protection Regulation) – for EU users</li>
                                <li><strong>CCPA</strong> (California Consumer Privacy Act) – for California users</li>
                                <li><strong>ePrivacy Directive</strong> – for EU cookie consent requirements</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                By continuing to use our Service, you consent to our cookies as described in this policy.
                            </p>
                        </section>

                        {/* Section 6: Changes to This Cookies Policy */}
                        <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <RefreshCw className="w-7 h-7 text-gray-400" />
                                6. Changes to This Cookies Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Cookies Policy from time to time. Updates are effective immediately upon posting, and the Effective Date at the top will be updated. Please check this page periodically for changes.
                            </p>
                        </section>

                        {/* Section 7: Contact Us */}
                        <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <Mail className="w-7 h-7 text-gray-400" />
                                7. Contact Us
                            </h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions about this Cookies Policy, please contact us:
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Email</p>
                                        <a href="mailto:privacy@pdftheory.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                            privacy@pdftheory.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                                        <a href="tel:+19295673562" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                            +1 (929) 567-3562
                                        </a>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-sm text-gray-500 mb-1">Mailing Address</p>
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
                                <Link href={`/${locale}/security`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Security
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
