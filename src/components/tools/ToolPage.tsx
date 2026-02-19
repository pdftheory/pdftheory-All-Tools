'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle2, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';
import { AdContainer } from '@/components/ads/AdContainer';
import { AdUnit } from '@/components/ads/AdUnit';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { getToolById } from '@/config/tools';

export interface ToolPageProps {
  tool: any;
  content: any;
  locale: string;
  children?: React.ReactNode;
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
}

export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  const toolDisplayName = content.title || tool.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const relatedTools = tool.relatedTools.map((id: string) => getToolById(id)).filter((t: any) => t !== undefined);

  // Helper to remove HTML tags for the small header description
  const stripTags = (html: string) => {
    return html ? html.replace(/<[^>]*>?/gm, '') : '';
  };

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center text-sm text-gray-500">
            <Link href={`/${locale}`} className="hover:text-blue-600"><Home className="w-4 h-4" /></Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <Link href={`/${locale}/tools`} className="hover:text-blue-600">Tools</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="font-medium text-gray-900 dark:text-gray-100">{toolDisplayName}</span>
          </nav>

          <div className="lg:grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            <div className="min-w-0">
              {/* Header Section */}
              <div className="mb-10">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 uppercase italic">
                  {toolDisplayName}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                  {stripTags(content.description).slice(0, 160)}...
                </p>
              </div>
              
              <div className="my-8">
                <AdUnit slotId="tool-middle-header" ezoicId="120" format="horizontal" />
              </div>

              <section className="mb-12 relative z-10">
                {children}
              </section>

              {/* How to Use Section */}
              <section className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 sm:p-10 border border-slate-200/60 dark:border-slate-700/50 mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How to use {toolDisplayName}</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-8">
                  {content.howToUse?.map((step: any, idx: number) => (
                    <div key={idx} className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                      <span className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg">{idx + 1}</span>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              <AdContainer slotId="tool-middle" ezoicId="120" />

              {/* Description Section - THIS FIXES THE <P> TAGS */}
              <div className="space-y-20 border-t border-slate-100 dark:border-slate-800 pt-16 mb-20">
                <div className="max-w-4xl">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About {toolDisplayName}</h2>
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed custom-description"
                    dangerouslySetInnerHTML={{ __html: content.description }} 
                  />
                </div>

                {/* Use Cases */}
                <div className="grid sm:grid-cols-2 gap-8">
                  {content.useCases?.map((useCase: any, idx: number) => (
                    <div key={idx} className="p-8 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/20">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/20">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{useCase.description}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                {content.faq && content.faq.length > 0 && (
                  <section>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-purple-600 rounded-2xl text-white"><HelpCircle className="w-7 h-7" /></div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid gap-6">
                      {content.faq.map((item: any, idx: number) => (
                        <div key={idx} className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.question}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Sidebar Ads */}
            <aside className="hidden lg:flex flex-col gap-8 sticky top-24">
              <AdUnit slotId="sidebar-top" ezoicId="122" />
              <div className="mt-8">
                <AdUnit slotId="sidebar-sticky" ezoicId="123" />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </ToolProvider>
  );
}
