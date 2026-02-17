
/**
 * PDF Processing Utilities
 */

/**
 * Convert hex color string to RGB object (0-1 range)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
        return { r: 1, g: 1, b: 1 }; // Default to white
    }
    return {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
    };
}

/**
 * Get 0-based page indices from various page selection formats
 */
export function getPageIndices(
    pages: number[] | 'all' | 'odd' | 'even' | string | undefined,
    totalPages: number
): number[] {
    if (pages === undefined || pages === 'all') {
        return Array.from({ length: totalPages }, (_, i) => i);
    }

    if (pages === 'odd') {
        return Array.from({ length: totalPages }, (_, i) => i).filter(i => i % 2 === 0);
    }

    if (pages === 'even') {
        return Array.from({ length: totalPages }, (_, i) => i).filter(i => i % 2 === 1);
    }

    if (Array.isArray(pages)) {
        return pages.map(p => p - 1).filter(p => p >= 0 && p < totalPages);
    }

    if (typeof pages === 'string') {
        const trimmed = pages.trim();
        if (!trimmed) {
            return Array.from({ length: totalPages }, (_, i) => i);
        }

        const result: number[] = [];
        const parts = trimmed.split(',').map(s => s.trim()).filter(s => s.length > 0);

        for (const part of parts) {
            if (part.includes('-')) {
                const [startStr, endStr] = part.split('-').map(s => s.trim());
                const start = parseInt(startStr, 10);
                const end = parseInt(endStr, 10);

                if (!isNaN(start) && !isNaN(end) && start <= end) {
                    for (let i = start; i <= Math.min(end, totalPages); i++) {
                        if (i >= 1) result.push(i - 1);
                    }
                }
            } else {
                const pageNum = parseInt(part, 10);
                if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                    result.push(pageNum - 1);
                }
            }
        }

        // If no valid pages were parsed from the string, return all pages as a fallback
        if (result.length === 0) {
            return Array.from({ length: totalPages }, (_, i) => i);
        }

        // Remove duplicates and sort
        return [...new Set(result)].sort((a, b) => a - b);
    }

    return Array.from({ length: totalPages }, (_, i) => i);
}

/**
 * Get 1-based page numbers from various page selection formats
 */
export function getPageNumbers(
    pages: number[] | 'all' | 'odd' | 'even' | string | undefined,
    totalPages: number
): number[] {
    return getPageIndices(pages, totalPages).map(i => i + 1);
}
