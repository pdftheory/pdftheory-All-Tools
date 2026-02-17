'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/lib/i18n/config';
import { type Tool } from '@/types/tool';
import { getAllTools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';

interface ToolsDropdownProps {
    locale: Locale;
    onLinkClick?: () => void;
    isOpen?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const ToolsDropdown: React.FC<ToolsDropdownProps> = ({ locale, onLinkClick, isOpen, onMouseEnter, onMouseLeave }) => {
    const t = useTranslations();
    const allTools = getAllTools();

    // Define categories with translation keys
    const categories = [
        { id: 'organize-manage', labelKey: 'organizeManage' },
        { id: 'convert-to-pdf', labelKey: 'convertToPdf' },
        { id: 'convert-from-pdf', labelKey: 'convertFromPdf' },
        { id: 'edit-annotate', labelKey: 'editAnnotate' },
        { id: 'optimize-repair', labelKey: 'optimizeRepair' },
    ];

    // Helper to get tools for a category
    const getToolsForCategory = (categoryId: string) => {
        return allTools.filter(tool => tool.category === categoryId).slice(0, 6);
    };

    // Helper to get tool localized name
    const getToolName = (tool: Tool) => {
        const content = getToolContent(locale, tool.id);
        if (content?.title) {
            return content.title;
        }
        // Fallback to formatting the ID
        return tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div
            className={`fixed top-[80px] left-0 right-0 w-full bg-[hsl(var(--color-background))] shadow-xl border-t border-[hsl(var(--color-border))] transition-all duration-200 z-40 origin-top
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
      `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {categories.map((category) => {
                        const categoryTools = getToolsForCategory(category.id);
                        if (categoryTools.length === 0) return null;

                        return (
                            <div key={category.id} className="col-span-1">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-primary))] mb-4 border-b border-[hsl(var(--color-border))/0.5] pb-2">
                                    {t(`home.categories.${category.labelKey}`)}
                                </h3>
                                <ul className="flex flex-col gap-2.5">
                                    {categoryTools.map((tool) => (
                                        <li key={tool.id}>
                                            <Link
                                                href={`/${locale}/tools/${tool.slug}`}
                                                onClick={onLinkClick}
                                                className="text-[15px] font-medium text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] hover:translate-x-1 transition-all inline-block"
                                            >
                                                {getToolName(tool)}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link href={`/${locale}/tools?category=${category.id}`} className="text-xs font-bold text-[hsl(var(--color-primary))] hover:underline mt-2 inline-flex items-center gap-1 group/link">
                                            {t('common.header.seeAll')} <span className="transition-transform group-hover/link:translate-x-0.5">&rarr;</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};
