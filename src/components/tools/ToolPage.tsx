'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle2, Info, Lightbulb, HelpCircle } from 'lucide-react';
import { AdContainer } from '@/components/ads/AdContainer';
import { AdUnit } from '@/components/ads/AdUnit';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { getToolById } from '@/config/tools';

export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: any) {
  const toolDisplayName = content.title || tool.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const relatedTools = tool.relatedTools.map((id: string) => getToolById(id)).filter((t: any) => t !== undefined);

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
              {/* Header */}
              <div className="mb-8">
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 italic uppercase">{toolDisplayName}</h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400">{content.description?.slice(0, 150)}...</p>
              </div>
              
              <div className="mt-6">
                <AdUnit slotId="tool-middle-header" ezoicId="120" format="horizontal" />
              </div>

              <section className="mt-6 mb-12">{children}</section>

              {/* How to Use Section */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><CheckCircle2 className="w-6 h-6" /></div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How to use {toolDisplayName}</h2>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                      {content.howToUse?.map((step: any, idx: number) => (
                          <div key={idx} className="relative p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                              <span className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">{idx + 1}</span>
                              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
              
              <AdContainer slotId="tool-middle" ezoicId="120" />

              <div className="mt-16 space-y-16 border-t pt-16">
                 {/* Description */}
                 <section>
                    <div className="max-w-3xl"><h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About {toolDisplayName}</h2><div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-line">{content.description}</div></div>
                 </section>

                 {/* Use Cases */}
                 <section className="grid sm:grid-cols-2 gap-8">
                    {content.useCases?.map((useCase: any, idx: number) => (
                         <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50"><div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4"><Lightbulb className="w-5 h-5" /></div><h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{useCase.title}</h3><p className="text-slate-600 dark:text-slate-400">{useCase.description}</p></div>
                    ))}
                 </section>
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
