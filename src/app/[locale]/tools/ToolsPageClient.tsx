'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Search, X, Star } from 'lucide-react';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { ToolCard } from '@/components/tools/ToolCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getToolById } from '@/config/tools';
import { toolMatchesQuery, searchTools } from '@/lib/utils/search';
import { type Locale } from '@/lib/i18n/config';
import { CATEGORY_INFO, type ToolCategory } from '@/types/tool';
import { useFavorites } from '@/hooks/useFavorites';
import { AdUnit } from '@/components/ads/AdUnit';

type CategoryFilter = ToolCategory | 'all' | 'favorites';

interface ToolsPageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function ToolsPageClient({ locale, localizedToolContent }: ToolsPageClientProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const allTools = getAllTools();
  const { favorites, isLoaded: favoritesLoaded, favoritesCount } = useFavorites();

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  // Read initial values from URL search params (client-side)
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    (initialCategory as ToolCategory) || 'all'
  );

  // Sync state with URL params when they change
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const query = searchParams.get('q') || '';
    setSelectedCategory(category as CategoryFilter);
    setSearchQuery(query);
  }, [searchParams]);

  // Update URL when category or search changes
  const updateUrl = useCallback((category: string, query: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category && category !== 'all') {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  const handleCategoryChange = (category: CategoryFilter) => {
    // Optimistic update
    setSelectedCategory(category);
    // URL update
    updateUrl(category, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Debounce URL update for search could be nice, but simple push is okay for now
    updateUrl(selectedCategory, query);
  };

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    updateUrl(selectedCategory, '');
  }, [selectedCategory, updateUrl]);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    // If searching, we use the searchTools utility which sorts by relevance
    if (searchQuery.trim()) {
      const results = searchTools(searchQuery, localizedToolContent);
      let tools = results.map(r => r.tool);

      // Still respect category filter if selected (narrow down search)
      if (selectedCategory !== 'all' && selectedCategory !== 'favorites') {
        tools = tools.filter(t => t.category === selectedCategory);
      } else if (selectedCategory === 'favorites') {
        tools = tools.filter(t => favorites.includes(t.id));
      }

      return tools;
    }

    // Default category/favorites filtering when not searching
    let tools = allTools;

    if (selectedCategory === 'favorites') {
      tools = favorites
        .map(id => getToolById(id))
        .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined);
    } else if (selectedCategory !== 'all') {
      tools = getToolsByCategory(selectedCategory as ToolCategory);
    }

    return tools;
  }, [allTools, selectedCategory, searchQuery, favorites, localizedToolContent]);

  // Category options
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: t('toolsPage.allTools') },
    { value: 'favorites', label: t('tools.favorite.title') },
    { value: 'edit-annotate', label: t('home.categories.editAnnotate') },
    { value: 'convert-to-pdf', label: t('home.categories.convertToPdf') },
    { value: 'convert-from-pdf', label: t('home.categories.convertFromPdf') },
    { value: 'organize-manage', label: t('home.categories.organizeManage') },
    { value: 'optimize-repair', label: t('home.categories.optimizeRepair') },
    { value: 'secure-pdf', label: t('home.categories.securePdf') },
  ];

  return (
    <>
      <main className="flex-1 bg-gray-50/50">
        {/* Top Ad Slot */}
        <div className="container mx-auto px-4 pt-16 pb-4">
          <AdUnit slotId="tools-top-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
        </div>
        {/* Professional Hero Section */}
        <section className="relative pt-8 pb-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {t('toolsPage.title')}
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                {t('toolsPage.subtitle', { count: allTools.length })}
              </p>

              {/* Refined Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[hsl(var(--color-primary))]" aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder={t('tools.search.placeholder')}
                    className="block w-full pl-11 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent focus:bg-white transition-all shadow-sm [&::-webkit-search-cancel-button]:hidden appearance-none"
                    aria-label="Search tools"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      aria-label="Clear search"
                    >
                      <X className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Tools Grid */}
        <section className="py-12 min-h-[600px]">
          <div className="container mx-auto px-6">

            {/* Desktop Filters (Tabs Style) */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`
                      px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border
                      ${selectedCategory === cat.value
                      ? 'bg-[hsl(var(--color-primary))] text-white border-[hsl(var(--color-primary))] shadow-lg scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }
                    `}
                >
                  <div className="flex items-center gap-2">
                    {cat.value === 'favorites' && <Star className={`w-3.5 h-3.5 ${selectedCategory === cat.value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />}
                    {cat.label}
                    {cat.value !== 'all' && (
                      <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${selectedCategory === cat.value ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {cat.value === 'favorites' ? favoritesCount : getToolsByCategory(cat.value as ToolCategory).length}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Filter */}
            <div className="md:hidden mb-8">
              <select
                aria-label="Select category"
                className="w-full p-3 rounded-xl border border-gray-200 bg-white"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value as CategoryFilter)}
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>


            {/* Content Area */}
            {filteredTools.length > 0 ? (
              selectedCategory === 'all' && !searchQuery ? (
                <div className="space-y-16">
                  <ToolGrid
                    tools={filteredTools}
                    locale={locale}
                    localizedToolContent={localizedToolContent}
                    showCategoryHeaders
                    className="animate-in fade-in duration-500"
                  />
                </div>
              ) : (
                <ToolGrid
                  tools={filteredTools}
                  locale={locale}
                  localizedToolContent={localizedToolContent}
                  className="animate-in fade-in duration-500"
                />
              )
            ) : (
              // Empty State
              <div className="max-w-md mx-auto text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {selectedCategory === 'favorites' ? (
                    <Star className="h-10 w-10 text-gray-400" />
                  ) : (
                    <Search className="h-10 w-10 text-gray-400" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedCategory === 'favorites' ? t('tools.favorite.empty') : t('toolsPage.noToolsFound')}
                </h3>
                <p className="text-gray-500 mb-8">
                  {selectedCategory === 'favorites' ? t('tools.favorite.hint') : t('tools.search.noResults', { query: searchQuery })}
                </p>
                <Button variant="outline" onClick={() => { handleClearSearch(); handleCategoryChange('all'); }}>
                  View All Tools
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
