'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles, ShieldCheck, Zap, Cloud, ArrowRight,
  Search, X, ChevronRight, Play, FileText, Lock, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AdUnit } from '@/components/ads/AdUnit';
import { getPopularTools, getAllTools } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getToolIcon } from '@/config/icons';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
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

  // Featured tools to showcase (6 most popular)
  const featuredTools = [
    { id: 'merge-pdf', icon: 'merge', color: 'bg-blue-500' },
    { id: 'split-pdf', icon: 'split', color: 'bg-emerald-500' },

    { id: 'pdf-to-word', icon: 'convert', color: 'bg-purple-500' },
    { id: 'compress-pdf', icon: 'minimize-2', color: 'bg-orange-500' },
    { id: 'rotate-pdf', icon: 'rotate', color: 'bg-rose-500' },
    { id: 'protect-pdf', icon: 'lock', color: 'bg-red-500' },
  ];

  const toolCount = getAllTools().length;

  return (
    <main id="main-content" className="relative overflow-hidden bg-white" tabIndex={-1}>

      {/* Top Ad Slot */}
      <div className="container mx-auto px-6 pt-4">
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
                              {localizedToolContent?.[result.tool.id]?.description || h('popularTools.fallbackDesc')}
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
                    priority
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

      {/* Featured Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {h('popularTools.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {h('popularTools.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {popularTools.map((tool) => {
              const ToolIcon = getToolIcon(tool.id);
              const content = localizedToolContent?.[tool.id];

              return (
                <Link
                  key={tool.id}
                  href={`/${locale}/tools/${tool.slug}`}
                  className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <ToolIcon className="w-12 h-12" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {content?.title || tool.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {content?.description?.slice(0, 60)}...
                  </p>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href={`/${locale}/tools`}>
              <Button variant="secondary" size="lg" className="rounded-xl">
                {h('popularTools.viewAll', { count: toolCount })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Showcase Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left - Content */}
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 border border-purple-200">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">{h('workflow.badge')}</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {h('workflow.title')}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {h('workflow.description')}
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: h('workflow.feature1') }} />
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: h('workflow.feature2') }} />
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: h('workflow.feature3') }} />
                </li>
              </ul>

              <Link href={`/${locale}/workflow`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl shadow-lg shadow-purple-500/25 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {h('workflow.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Right - Visual Preview */}
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-100 via-blue-50 to-transparent rounded-3xl -z-10" />

              {/* Workflow Preview Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <Image
                  src="/images/workflow-illustration.png"
                  alt={h('workflow.workflowImageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{h('workflow.actionsCount', { count: toolCount })}</p>
                  <p className="text-xs text-gray-500">{h('workflow.actionsAvailable')}</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{h('workflow.instantProcessing')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              {h('howItWorks.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {h('howItWorks.title')}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {h('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{h('howItWorks.step1Title')}</h3>
              <p className="text-gray-600">
                {h('howItWorks.step1Desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-purple-500/30">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{h('howItWorks.step2Title')}</h3>
              <p className="text-gray-600">
                {h('howItWorks.step2Desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-emerald-500/30">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{h('howItWorks.step3Title')}</h3>
              <p className="text-gray-600">
                {h('howItWorks.step3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {h('features.title', { brand: t('common.brand') })}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {h('features.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{h('features.private')}</h3>
              <p className="text-gray-400 text-sm">
                {h('features.privateDesc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{h('features.fast')}</h3>
              <p className="text-gray-400 text-sm">
                {h('features.fastDesc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{h('features.noAccount')}</h3>
              <p className="text-gray-400 text-sm">
                {h('features.noAccountDesc')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{h('features.everywhere')}</h3>
              <p className="text-gray-400 text-sm">
                {h('features.everywhereDesc')}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{toolCount}</div>
              <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('stats.pdfTools')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">1M+</div>
              <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('stats.happyUsers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100%</div>
              <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('stats.freeForever')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">0</div>
              <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('stats.serverUploads')}</div>
            </div>
          </div>
        </div>
      </section>

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
