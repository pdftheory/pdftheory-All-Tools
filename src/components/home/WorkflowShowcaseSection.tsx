'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Sparkles, ArrowRight, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { type Locale } from '@/lib/i18n/config';

interface WorkflowShowcaseSectionProps {
    locale: Locale;
    toolCount: number;
}

export const WorkflowShowcaseSection: React.FC<WorkflowShowcaseSectionProps> = ({
    locale,
    toolCount,
}) => {
    const h = useTranslations('homePage.workflow');

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="max-w-lg">
                        <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 border border-purple-200">
                            <Sparkles className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-semibold text-purple-700">{h('badge')}</span>
                        </span>

                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            {h('title')}
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {h('description')}
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium" dangerouslySetInnerHTML={{ __html: h('feature1') }} />
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium" dangerouslySetInnerHTML={{ __html: h('feature2') }} />
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium" dangerouslySetInnerHTML={{ __html: h('feature3') }} />
                            </li>
                        </ul>

                        <Link href={`/${locale}/workflow`}>
                            <Button
                                variant="primary"
                                size="lg"
                                className="rounded-xl shadow-lg shadow-purple-500/25 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                            >
                                {h('cta')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    {/* Right - Visual Preview */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-100 via-blue-50 to-transparent rounded-3xl -z-10" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                            <Image
                                src="/images/workflow-illustration.png"
                                alt={h('workflowImageAlt')}
                                width={600}
                                height={400}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold">{h('actionsCount', { count: toolCount })}</p>
                                <p className="text-blue-100 text-xs">{h('actionsAvailable')}</p>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900">{h('values.fast.title')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
