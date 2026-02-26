'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, LogOut, LayoutDashboard } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import dynamic from 'next/dynamic';
import { getToolContent } from '@/config/tool-content';
import { useAuth } from '@/components/providers/AuthProvider';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const ToolsDropdown = dynamic(() => import('./ToolsDropdown').then(mod => mod.ToolsDropdown), {
  ssr: false
});

export interface HeaderProps {
  locale: Locale;
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('common');
  const tFooter = useTranslations('footer');
  const { user, loading } = useAuth();
  const supabase = createClient();
  const router = useRouter();

  // State for menus
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push(`/${locale}`);
    router.refresh();
    setIsMobileMenuOpen(false);
  };

  // Helper to get localized tool name
  const getToolName = (toolId: string) => {
    const content = getToolContent(locale, toolId);
    return content?.title || toolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Navigation Items - using localized tool names
  const mainTools = [
    { href: `/${locale}/tools/merge-pdf`, label: getToolName('merge-pdf') },
    { href: `/${locale}/tools/split-pdf`, label: getToolName('split-pdf') },
    { href: `/${locale}/tools/compress-pdf`, label: getToolName('compress-pdf') },

    { href: `/${locale}/workflow`, label: t('navigation.workflow') },
    { href: `/${locale}/developers`, label: tFooter('links.developers') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-200 h-[72px] flex items-center bg-white site-header ${scrolled ? 'shadow-sm border-b border-gray-100' : ''
          }`}
        role="banner"
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">

          {/* Left Side: Logo + Brand */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 flex-shrink-0"
            aria-label={`${t('brand')} - Home`}
          >
            <div className="relative h-10 w-10 bg-[#2563eb] rounded-lg flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt={t('brand')}
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              {t('brand')}
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full gap-1">
            {/* Direct Tools */}
            {mainTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="h-full flex items-center px-4 font-medium text-[13px] uppercase tracking-wider text-gray-600 hover:text-[#2563eb] transition-colors"
              >
                {tool.label}
              </Link>
            ))}

            {/* All PDF Tools Mega Menu Trigger */}
            <div
              className="h-full flex items-center relative group"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                className={`h-full flex items-center px-4 font-medium text-[13px] uppercase tracking-wider gap-1 transition-colors ${isToolsOpen
                  ? 'text-[#2563eb]'
                  : 'text-gray-600 hover:text-[#2563eb]'
                  }`}
              >
                {t('header.allPdfTools')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>

          {/* Right Side: Auth buttons + Mobile Toggle */}
          <div className="flex items-center gap-3">

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-2">
              {loading ? (
                <div className="w-24 h-9 bg-gray-100 animate-pulse rounded-lg"></div>
              ) : user ? (
                <>
                  <Link href={`/${locale}/dashboard`}>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50">
                      <LayoutDashboard className="w-4 h-4" />
                      {t('navigation.dashboard')}
                    </button>
                  </Link>
                  <div className="h-6 w-px bg-gray-200 mx-1"></div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={`/${locale}/login`}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('auth.login')}
                  </Link>
                  <Link
                    href={`/${locale}/signup`}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors shadow-sm"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <ToolsDropdown
          locale={locale}
          isOpen={isToolsOpen}
          onMouseEnter={() => setIsToolsOpen(true)}
          onMouseLeave={() => setIsToolsOpen(false)}
        />
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white overflow-y-auto lg:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">

            <div>
              <h3 className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">{t('header.popular')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {mainTools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center p-3 bg-gray-50 rounded-lg font-medium text-sm text-center hover:bg-gray-100 text-gray-700"
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <Link
                href={`/${locale}/tools`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full p-4 text-center font-semibold text-base bg-blue-50 text-[#2563eb] rounded-xl mb-6"
              >
                {t('header.viewAllPdfTools')}
              </Link>

              {/* Mobile Auth */}
              <div className="flex flex-col gap-3">
                {loading ? (
                  <div className="w-full h-12 bg-gray-100 animate-pulse rounded-lg"></div>
                ) : user ? (
                  <>
                    <Link href={`/${locale}/dashboard`} onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full h-12 flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <LayoutDashboard className="w-4 h-4" />
                        {t('navigation.dashboard')}
                      </button>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full h-12 flex items-center justify-center gap-2 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
                    >
                      <LogOut className="w-4 h-4" />
                      {t('auth.logout')}
                    </button>
                  </>
                ) : (
                  <>
                    <Link href={`/${locale}/login`} onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full h-12 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
                        {t('auth.login')}
                      </button>
                    </Link>
                    <Link href={`/${locale}/signup`} onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full h-12 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8]">
                        {t('auth.signup')}
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
