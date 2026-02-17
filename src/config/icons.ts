import type { FC } from 'react';
import {
    TOOL_ICONS,
    DefaultToolIcon,
    type ToolIconProps,
    CATEGORY_COLORS
} from '@/components/icons/ToolIcons';

export type { ToolIconProps };
export { CATEGORY_COLORS };

/**
 * Get the custom icon component for a tool by its slug/id
 * Returns a professional filled SVG icon component
 * Normalizes the slug by converting underscores to hyphens for consistent lookup
 */
export const getToolIcon = (toolSlug: string): FC<ToolIconProps> => {
    // Normalize the slug: convert underscores to hyphens for consistent lookup
    const normalizedSlug = toolSlug.replace(/_/g, '-');
    return TOOL_ICONS[normalizedSlug] || DefaultToolIcon;
};

/**
 * Get category color for styling
 */
export const getCategoryColor = (category: string): string => {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || '#E5322D';
};
