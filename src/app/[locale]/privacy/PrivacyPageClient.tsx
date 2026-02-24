'use client';

import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const t = useTranslations('privacyPage');
  const tCommon = useTranslations('legalCommon');

  const sections = [
    { id: 'information-collected', title: t('sections.s1.title') },
    { id: 'how-we-use', title: t('sections.s2.title') },
    { id: 'cookies', title: t('sections.s3.title') },
    { id: 'sharing', title: t('sections.s4.title') },
    { id: 'international', title: t('sections.s5.title') },
    { id: 'retention', title: t('sections.s6.title') },
    { id: 'your-rights', title: t('sections.s7.title') },
    { id: 'children', title: t('sections.s8.title') },
    { id: 'security', title: t('sections.s9.title') },
    { id: 'advertising', title: t('sections.s10.title') },
    { id: 'license', title: t('sections.s11.title') },
    { id: 'links', title: t('sections.s12.title') },
    { id: 'changes', title: t('sections.s13.title') },
    { id: 'contact', title: t('sections.s14.title') },
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
                company: (chunks) => <span className="font-medium text-gray-900">{chunks}</span>,
                link: (chunks) => <a href="https://pdftheory.com" className="text-blue-600 hover:underline">pdftheory.com</a>
              })}
            </p>

            {/* Section 1 */}
            <section id="information-collected" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s1.title')}</h2>
              <p className="text-gray-700 mb-6">
                {t('sections.s1.intro')}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">{t('sections.s1.sub1Title')}</h3>
              <p className="text-gray-700 mb-4">{tCommon('youProvide')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(t.raw('sections.s1.sub1Items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">{t('sections.s1.sub2Title')}</h3>
              <p className="text-gray-700 mb-4">{tCommon('automaticallyCollected')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(t.raw('sections.s1.sub2Items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">{tCommon('filesYouProcess')}</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-900 font-medium mb-2">{tCommon('importantPrivacy')}</p>
                <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
                  <li>{tCommon('localProcessing')}</li>
                  <li>{t.rich('sections.s1.noUploadGuarantee', {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-we-use" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s2.title')}</h2>
              <p className="text-gray-700 mb-4">{t('sections.s2.intro')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(t.raw('sections.s2.items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="cookies" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s3.title')}</h2>
              <p className="text-gray-700 mb-6">
                {t('sections.s3.text')}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{tCommon('cookieType')}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">{tCommon('purpose')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">{tCommon('essentialCookies')}</td>
                      <td className="px-4 py-3 text-gray-700">{tCommon('essentialPurpose')}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">{tCommon('analyticsCookies')}</td>
                      <td className="px-4 py-3 text-gray-700">{tCommon('analyticsPurpose')}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">{tCommon('marketingCookies')}</td>
                      <td className="px-4 py-3 text-gray-700">{tCommon('marketingPurpose')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                {tCommon('cookieControl')}
              </p>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s4.title')}</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-900 font-medium">{tCommon('noSell')}</p>
              </div>

              <p className="text-gray-700 mb-4">{t('sections.s4.intro')}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {(t.raw('sections.s4.items') as string[]).map((item, idx) => {
                  const [title, desc] = item.split(': ');
                  return (
                    <li key={idx}>
                      <strong>{title}:</strong> {desc}
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Section 5 */}
            <section id="international" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s5.title')}</h2>
              <p className="text-gray-700">
                {t('sections.s5.text')}
              </p>
            </section>

            {/* Section 6 */}
            <section id="retention" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s6.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('sections.s6.text')}
              </p>
            </section>

            {/* Section 7 */}
            <section id="your-rights" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s7.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sections.s7.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                {(t.raw('sections.s7.items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700">
                {t.rich('sections.s7.outro', {
                  email: (chunks) => <a href={`mailto:${chunks}`} className="text-blue-600 hover:underline">{chunks}</a>
                })}
              </p>
            </section>

            {/* Section 8 */}
            <section id="children" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s8.title')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(t.raw('sections.s8.items') as string[] || []).length > 0 ? (
                  (t.raw('sections.s8.items') as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                ) : (
                  <li>{t('sections.s8.text')}</li>
                )}
              </ul>
            </section>

            {/* Section 9 */}
            <section id="security" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s9.title')}</h2>
              <p className="text-gray-700">
                {t('sections.s9.text')}
              </p>
            </section>

            {/* Section 10 */}
            <section id="advertising" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s10.title')}</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {(t.raw('sections.s10.items') as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                {t.rich('sections.s10.optOut', {
                  link1: (chunks) => <a href="https://www.aboutads.info/choices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{chunks}</a>,
                  link2: (chunks) => <a href="https://www.networkadvertising.org/choices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{chunks}</a>
                })}
              </p>
            </section>

            {/* Section 11 */}
            <section id="license" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s11.title')}</h2>
              <p className="text-gray-700">
                {t.rich('sections.s11.text', {
                  link: (chunks) => (
                    <a href="https://github.com/pdftheory/pdftheory" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                      {chunks} <ExternalLink className="w-3 h-3" />
                    </a>
                  )
                })}
              </p>
            </section>

            {/* Section 12 */}
            <section id="links" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s12.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sections.s12.text')}
              </p>
            </section>

            {/* Section 13 */}
            <section id="changes" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s13.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sections.s13.text')}
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="scroll-mt-8 pt-8 border-t border-gray-200 mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('sections.s14.title')}</h2>
              <p className="text-gray-700 mb-6">
                {t('sections.s14.text')}
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
                <Link href={`/${locale}/terms`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition-colors">
                  {tCommon('termsOfService')}
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
