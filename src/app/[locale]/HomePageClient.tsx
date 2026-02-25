'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles, ShieldCheck, Zap, ArrowRight,
  Search, X, ChevronRight, Play
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import { AdUnit } from '@/components/ads/AdUnit';
import { getPopularTools, getAllTools } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getToolIcon } from '@/config/icons';

// Dynamic imports for below-the-fold sections
const PopularToolsSection = dynamic(() => import('@/components/home/PopularToolsSection').then(mod => mod.PopularToolsSection), {
  ssr: true,
  loading: () => <div className="py-20 bg-gray-50 h-[400px] animate-pulse" />
});

const WorkflowShowcaseSection = dynamic(() => import('@/components/home/WorkflowShowcaseSection').then(mod => mod.WorkflowShowcaseSection), {
  ssr: true,
  loading: () => <div className="py-20 bg-white h-[400px] animate-pulse" />
});

const HowItWorksSection = dynamic(() => import('@/components/home/HowItWorksSection').then(mod => mod.HowItWorksSection), {
  ssr: true,
  loading: () => <div className="py-20 bg-gray-50 h-[400px] animate-pulse" />
});

const FeaturesSection = dynamic(() => import('@/components/home/FeaturesSection').then(mod => mod.FeaturesSection), {
  ssr: true,
  loading: () => <div className="py-20 bg-gray-900 h-[400px] animate-pulse" />
});

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations('common');
  const h = useTranslations('homePage');
  const popularTools = getPopularTools().slice(0, 8); // Limit to 8 popular tools
  const router = useRouter();

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState(-1);

  // Handle search logic
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchTools(searchQuery);
      setSearchResults(results.slice(0, 5));
      setActiveSearchIndex(0);
    } else {
      setSearchResults([]);
      setActiveSearchIndex(-1);
    }
  }, [searchQuery]);

  const handleSearchNavigation = (slug: string) => {
    router.push(`/${locale}/tools/${slug}`);
    setSearchQuery('');
    setSearchResults([]);
    setActiveSearchIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSearchIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSearchIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      if (activeSearchIndex >= 0 && activeSearchIndex < searchResults.length) {
        handleSearchNavigation(searchResults[activeSearchIndex].tool.slug);
      }
    } else if (e.key === 'Escape') {
      setIsSearchFocused(false);
    }
  };

  const toolCount = getAllTools().length;

  return (
    <main id="main-content" className="relative overflow-hidden bg-white" tabIndex={-1}>

      {/* Top Ad Slot - Reserved height for CLS stability */}
      <div className="container mx-auto px-6 pt-4 min-h-[100px] flex items-center justify-center">
        <AdUnit slotId="home-top-leaderboard" format="horizontal" className="mx-auto" />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 via-purple-50/30 to-transparent -z-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Side - Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  {h('badge')}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                {h('headline1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {h('headline2')}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {h('subtitle')}
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="relative">
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${isSearchFocused ? 'text-blue-600' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    placeholder={h('searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full h-14 pl-12 pr-12 rounded-xl bg-white border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-base transition-all shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      title={h('clearSearch')}
                      aria-label={h('clearSearch')}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Search Dropdown */}
                {searchResults.length > 0 && searchQuery && isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    {searchResults.map((result, index) => {
                      const ToolIcon = getToolIcon(result.tool.id);
                      const isActive = index === activeSearchIndex;
                      return (
                        <Link
                          key={result.tool.id}
                          href={`/${locale}/tools/${result.tool.slug}`}
                          onClick={() => handleSearchNavigation(result.tool.slug)}
                          onMouseEnter={() => setActiveSearchIndex(index)}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-blue-50 ring-2 ring-inset ring-blue-100' : 'hover:bg-gray-50'}`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
                            <ToolIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`font-medium ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                              {localizedToolContent?.[result.tool.id]?.title || result.tool.id.replace(/-/g, ' ')}
                            </p>
                            <p className={`text-sm truncate max-w-[250px] ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
                              {localizedToolContent?.[result.tool.id]?.description || t('hero.description')}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${isActive ? 'text-blue-600 translate-x-1' : 'text-gray-400'}`} />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/tools`}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="h-14 px-8 text-base rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                  >
                    {h('exploreAllTools')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 h-14 px-6 rounded-xl border-2 border-gray-200 bg-white font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  <Play className="w-5 h-5" />
                  {h('howItWorksLink')}
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 opacity-20" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-gray-100">
                  <Image
                    src="/images/hero-illustration.png"
                    alt={h('heroImageAlt')}
                    width={600}
                    height={500}
                    className="w-full h-auto"
                    priority={true}
                  />
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{h('secureLabel')}</p>
                    <p className="text-xs text-gray-500">{h('secureDesc')}</p>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float-delayed">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{h('fastLabel')}</p>
                    <p className="text-xs text-gray-500">{h('fastDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <PopularToolsSection
        locale={locale}
        popularTools={popularTools}
        toolCount={toolCount}
        localizedToolContent={localizedToolContent || {}}
      />

      {/* Workflow Showcase Section */}
      <WorkflowShowcaseSection
        locale={locale}
        toolCount={toolCount}
      />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection
        brandName={t('common.brand')}
        toolCount={toolCount}
      />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {h('cta.title')}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            {h('cta.subtitle', { brand: t('common.brand') })}
          </p>
          <Link href={`/${locale}/tools`}>
            <Button
              size="lg"
              className="h-14 px-10 text-lg rounded-xl bg-white text-blue-600 font-bold hover:bg-gray-100 shadow-xl"
            >
              {h('cta.button')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="container mx-auto px-6 py-12">
        <AdUnit slotId="home-bottom-1" />
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}
