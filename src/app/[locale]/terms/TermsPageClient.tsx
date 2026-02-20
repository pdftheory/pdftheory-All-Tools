'use client';

import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';

interface TermsPageClientProps {
    locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const sections = [
        { id: 'definitions', title: '1. Definitions' },
        { id: 'acceptance', title: '2. Acceptance of Terms' },
        { id: 'account', title: '3. Account Registration' },
        { id: 'use', title: '4. Use of the Service' },
        { id: 'ip', title: '5. Intellectual Property' },
        { id: 'files', title: '6. Files and Data' },
        { id: 'payments', title: '7. Payments and Advertising' },
        { id: 'third-party', title: '8. Third-Party Services' },
        { id: 'disclaimers', title: '9. Disclaimers' },
        { id: 'liability', title: '10. Limitation of Liability' },
        { id: 'indemnification', title: '11. Indemnification' },
        { id: 'children', title: '12. Children\'s Use' },
        { id: 'privacy', title: '13. Privacy Compliance' },
        { id: 'termination', title: '14. Termination' },
        { id: 'governing-law', title: '15. Governing Law' },
        { id: 'changes', title: '16. Changes to Terms' },
        { id: 'contact', title: '17. Contact Information' },
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
                        <span className="text-gray-900 font-medium">Terms and Conditions</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        These terms govern your access to and use of our website, mobile application, and all related services.
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
                            Welcome to pdftheory (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website <a href="https://pdftheory.com" className="text-blue-600 hover:underline">pdftheory.com</a>, our mobile application, and all related services (collectively, the &ldquo;Service&rdquo;). By accessing or using our Service, you agree to comply with and be bound by these Terms. If you do not agree, you must not use our Service.
                        </p>

                        {/* Section 1: Definitions */}
                        <section id="definitions" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Definitions</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200 w-1/4">Term</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Definition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Service</td>
                                            <td className="px-4 py-3 text-gray-700">Refers to all features, tools, resources, and content provided via pdftheory.com and our mobile application.</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">User</td>
                                            <td className="px-4 py-3 text-gray-700">Any person or entity accessing or using the Service.</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="px-4 py-3 font-medium text-gray-900">Account</td>
                                            <td className="px-4 py-3 text-gray-700">A personal or business account created to access certain features of the Service.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Content</td>
                                            <td className="px-4 py-3 text-gray-700">Any text, data, files, software, images, or other materials uploaded, generated, or downloaded through the Service.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 2: Acceptance of Terms */}
                        <section id="acceptance" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-4">By accessing or using our Service, you:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Acknowledge that you have read and understood these Terms.</li>
                                <li>Agree to be legally bound by these Terms, including all updates or modifications.</li>
                                <li>Confirm that you are at least 16 years of age (or the applicable age in your jurisdiction) to use the Service.</li>
                            </ul>
                        </section>

                        {/* Section 3: Account Registration */}
                        <section id="account" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Account Registration</h2>
                            <p className="text-gray-700 mb-4">Some features of the Service require you to create an account. When you create an account, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                                <li>Provide accurate, complete, and current information.</li>
                                <li>Maintain the security of your login credentials.</li>
                                <li>Be fully responsible for all activity under your account.</li>
                                <li>Notify us immediately of any unauthorized use of your account.</li>
                            </ul>
                            <p className="text-gray-600 text-sm">
                                We reserve the right to suspend or terminate accounts that violate these Terms.
                            </p>
                        </section>

                        {/* Section 4: Use of the Service */}
                        <section id="use" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Use of the Service</h2>
                            <p className="text-gray-700 mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Use the Service in any way that violates applicable laws.</li>
                                <li>Attempt to gain unauthorized access to other users&apos; data, accounts, or systems.</li>
                                <li>Use automated systems (bots, scripts) to interact with the Service without prior written consent.</li>
                                <li>Interfere with or disrupt the Service, servers, or networks.</li>
                                <li>Reproduce, distribute, or create derivative works from our Content without authorization.</li>
                            </ul>
                        </section>

                        {/* Section 5: Intellectual Property */}
                        <section id="ip" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Intellectual Property</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                                <li>All Content provided by pdftheory, including software, designs, graphics, text, and logos, is owned by pdftheory or licensed to us and is protected by copyright, trademark, and other intellectual property laws.</li>
                                <li>Users are granted a limited, non-exclusive, non-transferable license to use the Service for personal or business purposes.</li>
                                <li>You must not copy, modify, distribute, sell, or exploit any part of the Service without explicit written permission.</li>
                            </ul>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Open Source:</strong> Certain components of pdftheory are licensed under the GNU Affero General Public License v3 (AGPL-3.0). You may access the full source at: <a href="https://github.com/pdftheory/pdftheory" className="text-blue-600 hover:underline inline-flex items-center gap-1">github.com/pdftheory <ExternalLink className="w-3 h-3" /></a>
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Files and Data */}
                        <section id="files" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Files and Data</h2>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                <p className="text-green-900 font-medium mb-2">Your files remain private</p>
                                <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
                                    <li>All PDF files processed via pdftheory remain local to your device.</li>
                                    <li>Files are temporarily stored in browser memory and <strong>never uploaded to our servers</strong>.</li>
                                </ul>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>You are responsible for the content and legality of any files you process.</li>
                                <li>We do not claim ownership of your files.</li>
                            </ul>
                        </section>

                        {/* Section 7: Payments and Advertising */}
                        <section id="payments" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Payments and Advertising</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>The Service is primarily free and supported by advertisements.</li>
                                <li>Ads may be delivered through partners such as Google AdSense.</li>
                                <li>Payment processing (if applicable for future premium features) is governed by the third-party processor&apos;s terms.</li>
                                <li>We are not responsible for any errors, interruptions, or issues arising from ads or payment processing.</li>
                            </ul>
                        </section>

                        {/* Section 8: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Third-Party Services</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Our Service may include links or integrations with third-party services.</li>
                                <li>We do not control, endorse, or guarantee the availability or quality of these services.</li>
                                <li>Your use of third-party services is governed by their respective terms and privacy policies.</li>
                            </ul>
                        </section>

                        {/* Section 9: Disclaimers */}
                        <section id="disclaimers" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Disclaimers</h2>
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                                <p className="text-amber-900 font-medium">
                                    The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
                                </p>
                            </div>
                            <p className="text-gray-700 mb-4">To the fullest extent permitted by law:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>We make no warranties, express or implied, including fitness for a particular purpose or non-infringement.</li>
                                <li>We do not guarantee the accuracy, reliability, or completeness of any content or data.</li>
                                <li>Your use of the Service is at your own risk.</li>
                            </ul>
                        </section>

                        {/* Section 10: Limitation of Liability */}
                        <section id="liability" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-4">To the maximum extent permitted by law, pdftheory, its affiliates, employees, or partners shall not be liable for:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                                <li>Any direct, indirect, incidental, special, or consequential damages.</li>
                                <li>Loss of profits, data, or business opportunities.</li>
                                <li>Any interruption, error, or virus in connection with the Service.</li>
                            </ul>
                            <p className="text-gray-600 text-sm">
                                This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability).
                            </p>
                        </section>

                        {/* Section 11: Indemnification */}
                        <section id="indemnification" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Indemnification</h2>
                            <p className="text-gray-700 mb-4">You agree to indemnify, defend, and hold harmless pdftheory and its affiliates, officers, and employees from any claims, liabilities, damages, losses, or expenses arising from:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Your use of the Service.</li>
                                <li>Your violation of these Terms.</li>
                                <li>Your infringement of any third-party rights.</li>
                            </ul>
                        </section>

                        {/* Section 12: Children's Use */}
                        <section id="children" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">12. Children&apos;s Use</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>The Service is not intended for children under 16.</li>
                                <li>We do not knowingly collect personal information from children under 16.</li>
                                <li>If we learn that we have collected data from a child, it will be deleted immediately.</li>
                            </ul>
                        </section>

                        {/* Section 13: Privacy Compliance */}
                        <section id="privacy" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">13. Privacy Compliance</h2>
                            <p className="text-gray-700">
                                Your use of the Service is subject to our <Link href={`/${locale}/privacy`} className="text-blue-600 hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your information.
                            </p>
                        </section>

                        {/* Section 14: Termination */}
                        <section id="termination" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">14. Termination</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>We may suspend or terminate your access at any time, with or without notice, for violations of these Terms.</li>
                                <li>Upon termination, your right to use the Service immediately ceases.</li>
                                <li>All disclaimers, limitations of liability, and indemnities survive termination.</li>
                            </ul>
                        </section>

                        {/* Section 15: International Use and Governing Law */}
                        <section id="governing-law" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">15. International Use and Governing Law</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>The Service is operated from Lebanon and the United States.</li>
                                <li>By using the Service, you consent to the collection, transfer, and processing of your data internationally.</li>
                                <li>These Terms are governed by the laws of Lebanon, without regard to conflict of laws principles.</li>
                                <li>Any disputes arising from these Terms or the Service will be resolved in the courts of Lebanon.</li>
                            </ul>
                        </section>

                        {/* Section 16: Changes to Terms */}
                        <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">16. Changes to Terms</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>We may update these Terms at any time.</li>
                                <li>Changes are effective immediately upon posting, with the updated Effective Date.</li>
                                <li>Continued use of the Service constitutes acceptance of the updated Terms.</li>
                            </ul>
                        </section>

                        {/* Section 17: Contact Information */}
                        <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">17. Contact Information</h2>
                            <p className="text-gray-700 mb-6">
                                For questions or concerns regarding these Terms, please contact us:
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
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
                            <div className="flex flex-wrap gap-4">
                                <Link href={`/${locale}/privacy`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Privacy Policy
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                <Link href={`/${locale}/cookies`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                                    Cookie Policy
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
