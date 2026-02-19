'use client';

import { useTranslations } from 'next-intl';
import { Tool, ToolContent, ToolCategory } from '@/types/tool';
import { getToolById } from '@/config/tools';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { AdContainer } from '@/components/ads/AdContainer';
import { AdUnit } from '@/components/ads/AdUnit';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { ToolHeader } from './ToolHeader';
import { HowToUseSection } from './HowToUseSection';
import { DescriptionSection } from './DescriptionSection';
import { UseCasesSection } from './UseCasesSection';
import { FAQSection } from './FAQSection';
import { RelatedToolsSection } from './RelatedToolsSection';

export interface ToolPageProps {
  tool: Tool;
  content: ToolContent;
  locale: string;
  children?: React.ReactNode;
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  const relatedTools = tool.relatedTools.map(id => getToolById(id)).filter((t): t is Tool => t !== undefined);
  const t = useTranslations();
  const toolDisplayName = content.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
          {/* Breadcrumbs */}
          <nav className="mb-4 flex items-center text-sm text-gray-500">
            <Link href={`/${locale}`} className="hover:text-blue-600"><Home className="w-4 h-4" /></Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href={`/${locale}/tools`} className="hover:text-blue-600">Tools</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium text-gray-900">{toolDisplayName}</span>
          </nav>

          <div className="lg:grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="min-w-0">
              <ToolHeader tool={tool} content={content} />
              
              {/* Middle Ad 1 (Under Title) */}
              <div className="mt-6">
                <AdUnit slotId="tool-middle-header" ezoicId="120" format="horizontal" />
              </div>

              <section className="mt-6 mb-12">{children}</section>
              <HowToUseSection steps={content.howToUse} />
              
              {/* Middle Ad 2 (In Content) */}
              <AdContainer slotId="tool-middle" ezoicId="120" />

              <div className="mt-16 space-y-16 border-t pt-16">
                <DescriptionSection description={content.description} />
                <UseCasesSection useCases={content.useCases} />
                <FAQSection faq={content.faq} />
              </div>
            </div>

            {/* Sidebar Ads (Desktop Only) */}
            <aside className="hidden lg:flex flex-col gap-8">
              <div className="sticky top-24">
                <AdUnit slotId="sidebar-top" ezoicId="122" />
                <div className="mt-8">
                  <AdUnit slotId="sidebar-sticky" ezoicId="123" />
                </div>
              </div>
            </aside>
          </div>

          <RelatedToolsSection tools={relatedTools} locale={locale} localizedRelatedTools={localizedRelatedTools} />
        </div>
      </main>
    </ToolProvider>
  );
}
