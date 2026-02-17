'use client';

import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'information-collected', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'cookies', title: '3. Cookies and Tracking Technologies' },
    { id: 'sharing', title: '4. Sharing Your Information' },
    { id: 'international', title: '5. International Data Transfers' },
    { id: 'retention', title: '6. Data Retention' },
    { id: 'your-rights', title: '7. Your Privacy Rights' },
    { id: 'children', title: '8. Children\'s Privacy' },
    { id: 'security', title: '9. Security' },
    { id: 'advertising', title: '10. Advertising and Analytics' },
    { id: 'license', title: '11. AGPL-3.0 License Disclosure' },
    { id: 'links', title: '12. Links to Other Websites' },
    { id: 'changes', title: '13. Changes to This Policy' },
    { id: 'contact', title: '14. Contact Us' },
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            This policy describes how pdftheory collects, uses, and shares information about you when you use our services.
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
              pdftheory (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our website <a href="https://pdftheory.com" className="text-blue-600 hover:underline">pdftheory.com</a> and our mobile application (together, the &ldquo;Service&rdquo;). By using our Service, you agree to the practices described in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <section id="information-collected" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                We collect information you provide directly and information collected automatically when you use our Service.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">1.1 Personal Information You Provide</h3>
              <p className="text-gray-700 mb-4">When you use our Service, you may provide us with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Account login credentials</li>
                <li>Payment information (if applicable)</li>
                <li>Customer support interactions</li>
                <li>Survey or feedback responses</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">1.2 Information Collected Automatically</h3>
              <p className="text-gray-700 mb-4">When you access or use our Service, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and device information (device type, operating system, browser)</li>
                <li>Location data (if you allow)</li>
                <li>Usage data (pages visited, time spent, clicks, interactions)</li>
                <li>Cookies, web beacons, and similar tracking technologies</li>
                <li>Analytics data (via Google Analytics or similar services)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">1.3 Files You Process</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-900 font-medium mb-2">Important: Your files stay private</p>
                <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
                  <li>All PDF files processed via pdftheory remain local to your device.</li>
                  <li>Files are temporarily stored in memory during processing and <strong>never uploaded to our servers</strong>.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-we-use" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our Service</li>
                <li>Manage your account and authentication</li>
                <li>Process payments (if applicable)</li>
                <li>Provide customer support</li>
                <li>Deliver marketing communications (if consented)</li>
                <li>Analyze usage trends and improve Service performance</li>
                <li>Ensure security, detect fraud, and prevent abuse</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to improve functionality, analyze usage, and deliver relevant ads.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Cookie Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">Essential Cookies</td>
                      <td className="px-4 py-3 text-gray-700">Required for core functions (login, session management)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">Analytics Cookies</td>
                      <td className="px-4 py-3 text-gray-700">Help us understand how users interact with the Service</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Marketing Cookies</td>
                      <td className="px-4 py-3 text-gray-700">Deliver personalized ads and measure ad performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                You can control cookies via your browser settings, but disabling essential cookies may limit Service functionality.
              </p>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Sharing Your Information</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-900 font-medium">We do not sell your personal information.</p>
              </div>

              <p className="text-gray-700 mb-4">We may share your data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>With Service Providers:</strong> For analytics, hosting, or customer support</li>
                <li><strong>For Legal Compliance:</strong> To respond to legal requests, protect rights, or prevent fraud</li>
                <li><strong>With Business Partners or Affiliates:</strong> Only with appropriate safeguards</li>
                <li><strong>In Business Transactions:</strong> During mergers, acquisitions, or asset sales</li>
                <li><strong>With Consent:</strong> Only when you explicitly authorize sharing</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="international" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be processed in countries outside your own, including the United States. We apply appropriate safeguards to ensure your data is protected according to applicable laws, including standard contractual clauses and other legally recognized transfer mechanisms.
              </p>
            </section>

            {/* Section 6 */}
            <section id="retention" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>We retain personal information for up to <strong>2 years</strong> after your last activity, unless a longer period is required by law.</li>
                <li>Usage and analytics data may be retained for up to <strong>24 months</strong>.</li>
                <li>Files processed through pdftheory are <strong>never stored</strong> beyond your active session.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="your-rights" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Access and correct your personal information</li>
                <li>Delete your personal information</li>
                <li>Withdraw consent to marketing communications</li>
                <li>Object to or restrict processing</li>
                <li>Data portability requests</li>
              </ul>
              <p className="text-gray-700">
                To exercise your rights, contact us at <a href="mailto:privacy@pdftheory.com" className="text-blue-600 hover:underline">privacy@pdftheory.com</a>.
              </p>
            </section>

            {/* Section 8 */}
            <section id="children" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Children&apos;s Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our Service is not intended for children under 16.</li>
                <li>We do not knowingly collect personal information from children under 16.</li>
                <li>If we learn we have collected data from a child, we will delete it immediately.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="security" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Security</h2>
              <p className="text-gray-700">
                We implement industry-standard technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure data centers, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 10 */}
            <section id="advertising" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Advertising and Analytics</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Advertisements are provided via partners such as Ezoic.</li>
                <li>Our advertising partners may use cookies and tracking technologies for ad personalization and measurement.</li>
                <li>We use analytics tools like Google Analytics to understand usage patterns and improve Service performance.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                You can opt out of personalized advertising by visiting <a href="https://www.aboutads.info/choices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a> or <a href="https://www.networkadvertising.org/choices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices</a>.
              </p>
            </section>

            {/* Section 11 */}
            <section id="license" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. AGPL-3.0 License Disclosure</h2>
              <p className="text-gray-700">
                Certain software components of pdftheory are licensed under the GNU Affero General Public License v3 (AGPL-3.0). When using or redistributing these components, you may access the full source code at: <a href="https://github.com/pdftheory/pdftheory" className="text-blue-600 hover:underline inline-flex items-center gap-1">github.com/pdftheory <ExternalLink className="w-3 h-3" /></a>
              </p>
            </section>

            {/* Section 12 */}
            <section id="links" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">12. Links to Other Websites</h2>
              <p className="text-gray-700 mb-4">
                Our Service may contain links to third-party websites, plugins, or applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
              </p>
              <p className="text-gray-700">
                We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            {/* Section 13 */}
            <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. When we make changes, we will revise the &ldquo;Effective Date&rdquo; at the top of this policy and post the updated policy on this page.
              </p>
              <p className="text-gray-700">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of the Service after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">14. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
                <Link href={`/${locale}/terms`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                  Terms of Service
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
