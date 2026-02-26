'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const HowItWorksSection: React.FC = () => {
    const h = useTranslations('homePage.howItWorks');

    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                        {h('badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        {h('title')}
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        {h('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <div className="relative text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{h('benefits.grid.secure.title')}</h3>
                        <p className="text-gray-600">{h('benefits.grid.secure.description')}</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-purple-500/30">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{h('step2Title')}</h3>
                        <p className="text-gray-600">{h('step2Desc')}</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-emerald-500/30">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{h('benefits.grid.essay.title')}</h3>
                        <p className="text-gray-600">{h('benefits.grid.essay.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
