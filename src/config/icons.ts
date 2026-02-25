import {
    getToolIcon as getDynamicToolIcon,
    getCategoryColor as getDynamicCategoryColor,
    type ToolIconProps,
    CATEGORY_COLORS
} from '@/components/icons/ToolIcons';

export type { ToolIconProps };
export { CATEGORY_COLORS };

/**
 * Get the custom icon component for a tool by its slug/id
 * Returns a dynamic SVG icon component that supports lazy loading
 */
export const getToolIcon = (toolSlug: string): any => {
    return getDynamicToolIcon(toolSlug);
};

/**
 * Get category color for styling
 */
export const getCategoryColor = (category: string): string => {
    return getDynamicCategoryColor(category);
};
