'use client';
import { useTranslations } from 'next-intl';
import { Tool, ToolContent } from '@/types/tool';
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

export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: any) {
  const relatedTools = tool.relatedTools.map((id: string) => getToolById(id)).filter((t: any) => t !== undefined);
  const toolDisplayName = content.title || tool.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
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
              <div className="mt-6"><AdUnit slotId="tool-middle-header" ezoicId="120" format="horizontal" /></div>
              <section className="mt-6 mb-12">{children}</section>
              <HowToUseSection steps={content.howToUse} />
              <AdContainer slotId="tool-middle" ezoicId="120" />
              <div className="mt-16 space-y-16 border-t pt-16">
                <DescriptionSection description={content.description} />
                <UseCasesSection useCases={content.useCases} />
                <FAQSection faq={content.faq} />
              </div>
            </div>
            <aside className="hidden lg:flex flex-col gap-8 sticky top-24">
              <AdUnit slotId="sidebar-top" ezoicId="122" />
              <div className="mt-8"><AdUnit slotId="sidebar-sticky" ezoicId="123" /></div>
            </aside>
          </div>
          <RelatedToolsSection tools={relatedTools} locale={locale} localizedRelatedTools={localizedRelatedTools} />
        </div>
      </main>
    </ToolProvider>
  );
}
