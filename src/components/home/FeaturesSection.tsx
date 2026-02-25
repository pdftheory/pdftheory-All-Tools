'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Lock, Zap, Cloud, Globe } from 'lucide-react';

interface FeaturesSectionProps {
    brandName: string;
    toolCount: number;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
    brandName,
    toolCount,
}) => {
    const h = useTranslations('homePage.features');

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">
                        {h('title', { brand: brandName })}
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {h('subtitle')}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Feature 1 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{h('private')}</h3>
                        <p className="text-gray-400">{h('privateDesc')}</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{h('fast')}</h3>
                        <p className="text-gray-400">{h('fastDesc')}</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                            <Cloud className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{h('free')}</h3>
                        <p className="text-gray-400">{h('freeDesc')}</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                            <Globe className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{h('values.accessible.title')}</h3>
                        <p className="text-gray-400 text-sm">{h('values.accessible.description')}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{toolCount}</div>
                        <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('benefits.grid.group.title')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">1M+</div>
                        <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('trust.title')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100%</div>
                        <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('values.free.title')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">0</div>
                        <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-semibold">{h('mission.title')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
