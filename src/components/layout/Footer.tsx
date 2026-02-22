import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Globe, Info } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';
import { saveLanguagePreference } from './LanguageSelector';
import { LicenseModal } from './LicenseModal';

export interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('common');
  const tFooter = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    saveLanguagePreference(newLocale);
    setIsLanguageOpen(false);
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  const productLinks = [
    { href: `/${locale}`, label: tFooter('links.home') },
    { href: `/${locale}/tools`, label: tFooter('links.allTools') },
    { href: `/${locale}/workflow`, label: tFooter('links.workflow') },
    { href: `/${locale}/tools/merge-pdf`, label: tFooter('links.mergePdf') },
    { href: `/${locale}/tools/split-pdf`, label: tFooter('links.splitPdf') },

  ];

  const resourceLinks = [
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/blog`, label: tFooter('links.blog') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
    { href: `/${locale}/security`, label: tFooter('links.security') },
  ];

  const solutionLinks = [
    { href: `/${locale}/business`, label: tFooter('links.business') },
    { href: `/${locale}/education`, label: tFooter('links.education') },
    { href: `/${locale}/developers`, label: tFooter('links.developers') },
  ];

  const companyLinks = [
    { href: `/${locale}/about`, label: tFooter('links.aboutUs') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
    { href: `/${locale}/press`, label: tFooter('links.press') },
  ];

  const legalLinks = [
    { href: `/${locale}/terms`, label: tFooter('links.terms') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/cookies`, label: tFooter('links.cookies') },
  ];

  return (
    <footer className="w-full bg-[hsl(var(--color-foreground))] text-[hsl(var(--color-background))] pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">

        {/* Top Section: Links & Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

          {/* Product Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">{tFooter('sections.product')}</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">{tFooter('sections.resources')}</h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">{tFooter('sections.solutions')}</h3>
            <ul className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">{tFooter('sections.company')}</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">{tFooter('sections.legal')}</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Store Badges Column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">{tFooter('app.getTheApp')}</h3>
            <div className="flex flex-col gap-3">
              <button className="relative flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2 cursor-not-allowed group text-left opacity-70" disabled>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Google Play" className="w-8 h-8 filter grayscale opacity-60" />
                <div>
                  <div className="text-[10px] text-gray-500 leading-tight">{tFooter('app.getItOn')}</div>
                  <div className="text-sm font-bold text-gray-400">{tFooter('app.googlePlay')}</div>
                </div>
                {/* Coming Soon Badge */}
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-blue-400">
                  Soon
                </div>
              </button>
              <button className="relative flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2 cursor-not-allowed group text-left opacity-70" disabled>
                <img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" alt="App Store" className="w-8 h-8 filter invert opacity-60" />
                <div>
                  <div className="text-[10px] text-gray-500 leading-tight">{tFooter('app.downloadOnThe')}</div>
                  <div className="text-sm font-bold text-gray-400">{tFooter('app.appStore')}</div>
                </div>
                {/* Coming Soon Badge */}
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-blue-400">
                  Soon
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 border border-gray-700 rounded-md px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:border-gray-500 transition-all focus:outline-none"
              >
                <Globe className="w-4 h-4" />
                <span>{localeConfig[locale].nativeName}</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Standard React Conditional Dropdown */}
              {isLanguageOpen && (
                <div
                  className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-[100] animate-in fade-in slide-in-from-bottom-2 duration-200"
                >
                  {locales.map((loc) => {
                    const config = localeConfig[loc];
                    const isActive = loc === locale;
                    return (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${isActive ? 'text-white font-medium bg-gray-700' : 'text-gray-300'}`}
                      >
                        {config.nativeName}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>


          {/* Copyright */}
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>© {currentYear} {t('brand')} - {tFooter('tagline')}</span>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setIsLicenseOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors group focus:outline-none"
              title="License Information"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">AGPL-3.0</span>
            </button>
          </div>

        </div>

        <LicenseModal isOpen={isLicenseOpen} onClose={() => setIsLicenseOpen(false)} locale={locale} />
      </div>
    </footer>
  );
};

export default Footer;

