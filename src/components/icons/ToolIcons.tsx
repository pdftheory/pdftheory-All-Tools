'use client';

import React from 'react';

export interface ToolIconProps {
    className?: string;
    size?: number;
}

// Category gradient colors
export const CATEGORY_COLORS = {
    'organize-manage': '#E5322D',
    'edit-annotate': '#FF6B35',
    'convert-to-pdf': '#00C853',
    'convert-from-pdf': '#2979FF',
    'optimize-repair': '#7C4DFF',
    'secure-pdf': '#455A64',
};

// ==================== ORGANIZE & MANAGE ICONS (Red) ====================

// Merge PDF - Two documents merging into one
export const MergePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mergeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="4" y="6" width="16" height="20" rx="2" fill="url(#mergeGrad1)" />
        <rect x="28" y="6" width="16" height="20" rx="2" fill="url(#mergeGrad1)" opacity="0.7" />
        <path d="M12 26L24 34L36 26" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="32" width="20" height="14" rx="2" fill="url(#mergeGrad1)" />
        <path d="M20 38H28M20 42H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Split PDF - Document splitting into two with scissors
export const SplitPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="splitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="14" y="4" width="20" height="16" rx="2" fill="url(#splitGrad1)" />
        <path d="M24 20V24" stroke="#E5322D" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="20" cy="26" r="4" fill="url(#splitGrad1)" />
        <circle cx="28" cy="26" r="4" fill="url(#splitGrad1)" />
        <path d="M18 28L8 38M30 28L40 38" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <rect x="4" y="32" width="16" height="12" rx="2" fill="url(#splitGrad1)" opacity="0.8" />
        <rect x="28" y="32" width="16" height="12" rx="2" fill="url(#splitGrad1)" opacity="0.8" />
    </svg>
);

// Organize PDF - Grid of page thumbnails with drag indicator
export const OrganizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="orgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="14" height="16" rx="2" fill="url(#orgGrad1)" />
        <text x="13" y="16" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1</text>
        <rect x="24" y="6" width="14" height="16" rx="2" fill="url(#orgGrad1)" opacity="0.8" />
        <text x="31" y="16" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">2</text>
        <rect x="6" y="26" width="14" height="16" rx="2" fill="url(#orgGrad1)" opacity="0.6" />
        <text x="13" y="36" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">3</text>
        <rect x="24" y="26" width="14" height="16" rx="2" stroke="url(#orgGrad1)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
        <path d="M42 10V18M42 30V38" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 12L42 10L44 12M40 36L42 38L44 36" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Extract Pages - Document with page being pulled out
export const ExtractPagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="extGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="8" y="6" width="24" height="32" rx="3" fill="url(#extGrad1)" opacity="0.4" />
        <rect x="12" y="10" width="16" height="10" rx="2" fill="url(#extGrad1)" />
        <path d="M14 16H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="14" height="18" rx="2" fill="url(#extGrad1)" />
        <path d="M32 30H38M32 34H36" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 28L34 22" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
        <path d="M38 18L42 22L38 26" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Delete Pages - Document with X on page
export const DeletePagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="delGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="10" y="4" width="28" height="36" rx="3" fill="url(#delGrad1)" opacity="0.3" />
        <rect x="14" y="8" width="20" height="14" rx="2" fill="url(#delGrad1)" />
        <path d="M18 12H30M18 18H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="34" r="10" fill="url(#delGrad1)" />
        <path d="M27 29L37 39M37 29L27 39" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Rotate PDF - Document with rotation arrow
export const RotatePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="12" y="14" width="24" height="28" rx="3" fill="url(#rotGrad1)" />
        <path d="M18 22H30M18 28H26M18 34H30" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 8C38 8 32 4 24 4C14 4 8 12 8 12" stroke="url(#rotGrad1)" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 8L42 4M38 8L42 12" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Rotate Custom - Document with angle indicator
export const RotateCustomIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rotCustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <g transform="rotate(-15 24 30)">
            <rect x="12" y="14" width="24" height="28" rx="3" fill="url(#rotCustGrad)" />
            <path d="M18 22H30M18 28H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M36 6L42 6L42 12" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 6C36 6 32 10 30 16" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
        <text x="40" y="20" fontSize="10" fill="#E5322D" fontWeight="bold">15°</text>
    </svg>
);

// Reverse Pages - Document with up/down flip arrows
export const ReversePagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="revGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="10" y="4" width="18" height="14" rx="2" fill="url(#revGrad1)" />
        <text x="19" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1</text>
        <rect x="10" y="30" width="18" height="14" rx="2" fill="url(#revGrad1)" opacity="0.7" />
        <text x="19" y="39" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">N</text>
        <path d="M36 14V34" stroke="url(#revGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 18L36 14L40 18" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 30L36 34L40 30" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Alternate Merge - Interleaving zig-zag pattern
export const AlternateMergeIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="altGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="4" y="6" width="12" height="10" rx="2" fill="url(#altGrad1)" />
        <rect x="4" y="20" width="12" height="10" rx="2" fill="url(#altGrad1)" />
        <rect x="4" y="34" width="12" height="10" rx="2" fill="url(#altGrad1)" />
        <rect x="32" y="6" width="12" height="10" rx="2" fill="url(#altGrad1)" opacity="0.6" />
        <rect x="32" y="20" width="12" height="10" rx="2" fill="url(#altGrad1)" opacity="0.6" />
        <rect x="32" y="34" width="12" height="10" rx="2" fill="url(#altGrad1)" opacity="0.6" />
        <path d="M16 11L32 18M16 25L32 32M16 39L32 11" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
    </svg>
);

// N-up PDF - Mini page grid
export const NupPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="nupGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#nupGrad1)" opacity="0.2" />
        <rect x="10" y="8" width="12" height="14" rx="2" fill="url(#nupGrad1)" />
        <rect x="26" y="8" width="12" height="14" rx="2" fill="url(#nupGrad1)" opacity="0.8" />
        <rect x="10" y="26" width="12" height="14" rx="2" fill="url(#nupGrad1)" opacity="0.6" />
        <rect x="26" y="26" width="12" height="14" rx="2" fill="url(#nupGrad1)" opacity="0.4" />
        <text x="16" y="17" textAnchor="middle" fontSize="6" fill="white">1</text>
        <text x="32" y="17" textAnchor="middle" fontSize="6" fill="white">2</text>
        <text x="16" y="35" textAnchor="middle" fontSize="6" fill="white">3</text>
        <text x="32" y="35" textAnchor="middle" fontSize="6" fill="white">4</text>
    </svg>
);

// Grid Combine - Multiple docs forming grid
export const GridCombineIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="gridGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="4" y="4" width="12" height="12" rx="2" fill="url(#gridGrad1)" />
        <rect x="18" y="4" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.8" />
        <rect x="32" y="4" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.6" />
        <rect x="4" y="18" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.8" />
        <rect x="18" y="18" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.6" />
        <rect x="32" y="18" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.4" />
        <rect x="4" y="32" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.6" />
        <rect x="18" y="32" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.4" />
        <rect x="32" y="32" width="12" height="12" rx="2" fill="url(#gridGrad1)" opacity="0.2" />
    </svg>
);

// Combine Single Page - Vertical scroll
export const CombineSinglePageIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="combGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="14" y="2" width="20" height="44" rx="3" fill="url(#combGrad1)" opacity="0.2" />
        <rect x="18" y="6" width="12" height="8" rx="1" fill="url(#combGrad1)" />
        <rect x="18" y="18" width="12" height="8" rx="1" fill="url(#combGrad1)" opacity="0.8" />
        <rect x="18" y="30" width="12" height="8" rx="1" fill="url(#combGrad1)" opacity="0.6" />
        <path d="M24 14L24 18M24 26L24 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M8 24L4 24M44 24L40 24" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <path d="M6 20L4 24L6 28M42 20L44 24L42 28" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Add Blank Page - Document with plus
export const AddBlankPageIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="addGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="8" y="6" width="24" height="32" rx="3" fill="url(#addGrad1)" />
        <path d="M14 16H26M14 22H22M14 28H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="16" height="20" rx="2" fill="white" stroke="url(#addGrad1)" strokeWidth="2" />
        <path d="M36 30V38M32 34H40" stroke="url(#addGrad1)" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Divide Pages - Page with cut line
export const DividePagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="divGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#divGrad1)" opacity="0.3" />
        <rect x="8" y="4" width="14" height="40" rx="3" fill="url(#divGrad1)" />
        <rect x="26" y="4" width="14" height="40" rx="3" fill="url(#divGrad1)" opacity="0.7" />
        <path d="M24 4V44" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="24" cy="14" r="4" fill="white" />
        <circle cx="24" cy="34" r="4" fill="white" />
    </svg>
);

// PDF Multi-tool - Swiss army knife style
export const PdfMultiToolIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="multiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="12" y="8" width="24" height="32" rx="4" fill="url(#multiGrad1)" />
        <circle cx="24" cy="24" r="8" fill="white" opacity="0.9" />
        <path d="M24 18V30M18 24H30" stroke="url(#multiGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M6 18L12 24L6 30" stroke="url(#multiGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 18L36 24L42 30" stroke="url(#multiGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6L24 12L30 6" stroke="url(#multiGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 42L24 36L30 42" stroke="url(#multiGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// PDF to ZIP - Document entering archive
export const PdfToZipIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="zipGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="8" width="20" height="26" rx="2" fill="url(#zipGrad1)" />
        <path d="M12 16H20M12 22H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 24L32 24" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <path d="M29 20L33 24L29 28" stroke="#E5322D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 10V38C32 40.2 33.8 42 36 42H42C44.2 42 46 40.2 46 38V14L42 10H32Z" fill="url(#zipGrad1)" opacity="0.8" />
        <path d="M36 10V14H42" stroke="white" strokeWidth="2" />
        <path d="M36 22H42M36 28H42M36 34H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Compare PDFs - Two overlapping docs with diff
export const ComparePdfsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="compGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="4" y="6" width="22" height="30" rx="2" fill="url(#compGrad1)" opacity="0.5" />
        <rect x="22" y="12" width="22" height="30" rx="2" fill="url(#compGrad1)" />
        <path d="M28 22H38M28 28H34M28 34H38" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="20" r="6" fill="#FFE082" stroke="url(#compGrad1)" strokeWidth="2" />
        <path d="M16 20L18 22L21 18" stroke="url(#compGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Posterize PDF - Large page split into tiles
export const PosterizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="postGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="2" fill="url(#postGrad1)" opacity="0.2" />
        <rect x="4" y="4" width="19" height="19" rx="2" fill="url(#postGrad1)" />
        <rect x="25" y="4" width="19" height="19" rx="2" fill="url(#postGrad1)" opacity="0.8" />
        <rect x="4" y="25" width="19" height="19" rx="2" fill="url(#postGrad1)" opacity="0.6" />
        <rect x="25" y="25" width="19" height="19" rx="2" fill="url(#postGrad1)" opacity="0.4" />
        <path d="M24 4V44M4 24H44" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
);

// OCR PDF - Document with scanning line and text
export const OcrPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="ocrGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#ocrGrad1)" opacity="0.2" />
        <path d="M8 24H40" stroke="url(#ocrGrad1)" strokeWidth="3" strokeLinecap="round" />
        <rect x="12" y="8" width="24" height="12" rx="2" fill="url(#ocrGrad1)" opacity="0.4" />
        <text x="24" y="34" textAnchor="middle" fontSize="14" fill="url(#ocrGrad1)" fontWeight="bold">Aa</text>
        <path d="M4 12V8C4 5.79 5.79 4 8 4H12" stroke="url(#ocrGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M36 4H40C42.21 4 44 5.79 44 8V12" stroke="url(#ocrGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 36V40C44 42.21 42.21 44 40 44H36" stroke="url(#ocrGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 44H8C5.79 44 4 42.21 4 40V36" stroke="url(#ocrGrad1)" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// PDF Booklet - Open book with folded pages
export const PdfBookletIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bookletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <path d="M24 10V42" stroke="url(#bookletGrad)" strokeWidth="2" />
        <path d="M24 10C24 10 20 6 12 6C6 6 4 8 4 8V40C4 40 6 38 12 38C20 38 24 42 24 42" fill="url(#bookletGrad)" opacity="0.8" />
        <path d="M24 10C24 10 28 6 36 6C42 6 44 8 44 8V40C44 40 42 38 36 38C28 38 24 42 24 42" fill="url(#bookletGrad)" opacity="0.6" />
        <path d="M8 16H18M8 22H16M8 28H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 16H40M30 22H38M30 28H40" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
);

// PDF Workflow - Connected nodes diagram
export const PdfWorkflowIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="workGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <circle cx="10" cy="24" r="6" fill="url(#workGrad1)" />
        <rect x="20" y="8" width="12" height="12" rx="2" fill="url(#workGrad1)" opacity="0.8" />
        <rect x="20" y="28" width="12" height="12" rx="2" fill="url(#workGrad1)" opacity="0.8" />
        <circle cx="42" cy="24" r="4" fill="url(#workGrad1)" />
        <path d="M16 24H20" stroke="url(#workGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 14L38 22M32 34L38 26" stroke="url(#workGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 18V10C10 8 11 7 13 7H18" stroke="url(#workGrad1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
    </svg>
);

// Add Attachments - Document with paperclip and plus
export const AddAttachmentsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="attGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="28" height="36" rx="3" fill="url(#attGrad1)" />
        <path d="M12 16H28M12 24H24M12 32H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 16C38 12 35 10 32 10C29 10 26 12 26 16V30C26 33 28 35 30 35C32 35 34 33 34 30V18" stroke="url(#attGrad1)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="38" cy="38" r="8" fill="url(#attGrad1)" />
        <path d="M38 34V42M34 38H42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

// Extract Attachments - Document with paperclip and arrow out
export const ExtractAttachmentsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="extAttGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="28" height="36" rx="3" fill="url(#extAttGrad)" opacity="0.7" />
        <path d="M12 16H28M12 24H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 30L42 30" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 26L42 30L38 34" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 32C26 28 23 26 20 26C17 26 14 28 14 32V40" stroke="url(#extAttGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
);

// Edit Attachments - Document with paperclip and pencil
export const EditAttachmentsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="edAttGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="26" height="34" rx="3" fill="url(#edAttGrad)" opacity="0.7" />
        <path d="M12 16H26M12 24H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 14C28 10 25 8 22 8C19 8 16 10 16 14V26" stroke="url(#edAttGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M34 26L44 36L40 40L30 30V26H34Z" fill="url(#edAttGrad)" />
        <path d="M42 28L44 30" stroke="white" strokeWidth="2" />
    </svg>
);

// View Metadata - Document with info badge
export const ViewMetadataIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="viewMetaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="28" height="36" rx="3" fill="url(#viewMetaGrad)" opacity="0.3" />
        <path d="M14 14H30M14 22H26M14 30H30" stroke="url(#viewMetaGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="36" r="10" fill="url(#viewMetaGrad)" />
        <text x="36" y="41" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">i</text>
    </svg>
);

// Edit Metadata - Document with info and pencil
export const EditMetadataIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="edMetaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#edMetaGrad)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H26" stroke="url(#edMetaGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="16" r="8" fill="url(#edMetaGrad)" />
        <text x="34" y="21" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">i</text>
        <path d="M34 30L44 40L40 44L30 34V30H34Z" fill="url(#edMetaGrad)" />
    </svg>
);

// Add Metadata - Document with info and plus
export const AddMetadataIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="addMetaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#addMetaGrad)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H26" stroke="url(#addMetaGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="34" r="10" fill="url(#addMetaGrad)" />
        <path d="M31 34H41M36 29V39" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M34 14C34 14 36 12 40 12" stroke="url(#addMetaGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
);

// ==================== EDIT & ANNOTATE ICONS (Orange) ====================

// Edit PDF - Document with pencil actively editing
export const EditPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="editGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="28" height="36" rx="3" fill="url(#editGrad1)" opacity="0.3" />
        <path d="M12 16H22M12 24H18M12 32H24" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 12L42 24L34 32L22 20L30 12Z" fill="url(#editGrad1)" />
        <path d="M40 14L44 18" stroke="white" strokeWidth="2" />
        <path d="M22 20L18 32L30 28" stroke="url(#editGrad1)" strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
);

// Sign PDF - Document with signature flourish
export const SignPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="signGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#signGrad1)" opacity="0.2" />
        <path d="M12 14H36M12 22H30" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="12" y1="36" x2="36" y2="36" stroke="#FF6B35" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M14 32C18 26 24 22 28 26C32 30 36 24 40 20" stroke="url(#signGrad1)" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
);

// Crop PDF - Document with crop handles
export const CropPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="cropGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="12" y="12" width="24" height="24" fill="url(#cropGrad1)" opacity="0.3" />
        <rect x="16" y="16" width="16" height="16" fill="url(#cropGrad1)" />
        <path d="M16 6V16H6" stroke="url(#cropGrad1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 42V32H42" stroke="url(#cropGrad1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="16" width="16" height="16" stroke="white" strokeWidth="2" fill="none" />
    </svg>
);

// Bookmark - Ribbon bookmark on document
export const BookmarkIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bookGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="8" y="6" width="32" height="38" rx="3" fill="url(#bookGrad1)" opacity="0.3" />
        <path d="M14 14H28M14 22H24M14 30H28" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 6V28L37 23L42 28V6H32Z" fill="url(#bookGrad1)" />
    </svg>
);

// Table of Contents - Document with hierarchical list
export const TableOfContentsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tocGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#tocGrad1)" opacity="0.2" />
        <circle cx="14" cy="14" r="3" fill="url(#tocGrad1)" />
        <path d="M20 14H38" stroke="url(#tocGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="24" r="2" fill="url(#tocGrad1)" opacity="0.8" />
        <path d="M24 24H38" stroke="url(#tocGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <circle cx="18" cy="34" r="2" fill="url(#tocGrad1)" opacity="0.6" />
        <path d="M24 34H34" stroke="url(#tocGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
);

// Page Numbers - Document with 1 2 3
export const PageNumbersIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pageNumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#pageNumGrad)" opacity="0.2" />
        <path d="M14 14H34M14 22H30M14 30H34" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="36" width="8" height="6" rx="1" fill="url(#pageNumGrad)" />
        <rect x="22" y="36" width="8" height="6" rx="1" fill="url(#pageNumGrad)" opacity="0.8" />
        <rect x="32" y="36" width="8" height="6" rx="1" fill="url(#pageNumGrad)" opacity="0.6" />
        <text x="16" y="41" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">1</text>
        <text x="26" y="41" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">2</text>
        <text x="36" y="41" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">3</text>
    </svg>
);

// Add Watermark - Document with diagonal text overlay
export const AddWatermarkIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="waterGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#waterGrad1)" opacity="0.2" />
        <path d="M12 14H36M12 22H32M12 30H36" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <g transform="rotate(-30 24 24)">
            <rect x="4" y="20" width="40" height="10" rx="2" fill="url(#waterGrad1)" opacity="0.7" />
            <text x="24" y="28" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">SAMPLE</text>
        </g>
    </svg>
);

// Header Footer - Document with top/bottom emphasis
export const HeaderFooterIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="hfGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#hfGrad1)" opacity="0.2" />
        <rect x="6" y="4" width="36" height="10" rx="3" fill="url(#hfGrad1)" />
        <rect x="6" y="34" width="36" height="10" rx="3" fill="url(#hfGrad1)" />
        <path d="M12 20H36M12 26H30" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M12 9H24M30 39H36" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Invert Colors - Split circle black/white
export const InvertColorsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="invGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#invGrad1)" opacity="0.2" />
        <circle cx="24" cy="24" r="14" fill="url(#invGrad1)" />
        <path d="M24 10A14 14 0 0 1 24 38" fill="white" />
        <path d="M20 20H28M20 24H26M20 28H28" stroke="url(#invGrad1)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// Background Color - Document with paint bucket
export const BackgroundColorIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="28" height="36" rx="3" fill="url(#bgGrad1)" />
        <path d="M12 16H28M12 24H24M12 32H28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M36 18L42 24L36 30L30 24L36 18Z" fill="url(#bgGrad1)" />
        <path d="M36 30C36 30 32 36 36 40C40 36 36 30 36 30Z" fill="url(#bgGrad1)" />
    </svg>
);

// Text Color - Letter A with color underline
export const TextColorIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="txtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="32" rx="3" fill="url(#txtGrad1)" opacity="0.2" />
        <text x="24" y="30" textAnchor="middle" fontSize="26" fill="url(#txtGrad1)" fontWeight="bold">A</text>
        <rect x="8" y="40" width="32" height="6" rx="2" fill="url(#txtGrad1)" />
    </svg>
);

// Add Stamps - Rubber stamp pressing down
export const AddStampsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="stampGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="38" width="36" height="6" rx="2" fill="url(#stampGrad1)" />
        <path d="M16 38V30C16 26 19 22 24 22C29 22 32 26 32 30V38" fill="url(#stampGrad1)" />
        <rect x="18" y="8" width="12" height="14" rx="2" fill="url(#stampGrad1)" opacity="0.8" />
        <text x="24" y="18" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">OK</text>
    </svg>
);

// Remove Annotations - Document with eraser
export const RemoveAnnotationsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="remAnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#remAnGrad)" opacity="0.3" />
        <path d="M12 14H28" stroke="url(#remAnGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 22H20" stroke="url(#remAnGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M12 30H24" stroke="url(#remAnGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="28" y="20" width="16" height="8" rx="2" fill="url(#remAnGrad)" transform="rotate(-30 28 20)" />
        <rect x="22" y="32" width="8" height="6" rx="1" fill="#FFE0B2" transform="rotate(-30 22 32)" />
    </svg>
);

// Form Filler - Document with checkboxes and fields
export const FormFillerIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="formFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#formFillGrad)" opacity="0.2" />
        <rect x="12" y="10" width="8" height="8" rx="1" fill="url(#formFillGrad)" />
        <path d="M14 14L16 16L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="24" y="12" width="14" height="4" rx="1" fill="url(#formFillGrad)" opacity="0.6" />
        <rect x="12" y="24" width="8" height="8" rx="1" stroke="url(#formFillGrad)" strokeWidth="2" fill="none" />
        <rect x="24" y="26" width="14" height="4" rx="1" fill="url(#formFillGrad)" opacity="0.6" />
        <rect x="12" y="36" width="26" height="4" rx="1" fill="url(#formFillGrad)" opacity="0.4" />
    </svg>
);

// Form Creator - Document with plus adding fields
export const FormCreatorIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="formCreateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="30" height="38" rx="3" fill="url(#formCreateGrad)" opacity="0.2" />
        <rect x="12" y="10" width="6" height="6" rx="1" stroke="url(#formCreateGrad)" strokeWidth="2" fill="none" />
        <rect x="22" y="11" width="10" height="4" rx="1" fill="url(#formCreateGrad)" opacity="0.5" />
        <rect x="12" y="22" width="6" height="6" rx="1" stroke="url(#formCreateGrad)" strokeWidth="2" fill="none" />
        <rect x="22" y="23" width="10" height="4" rx="1" fill="url(#formCreateGrad)" opacity="0.5" />
        <circle cx="38" cy="36" r="10" fill="url(#formCreateGrad)" />
        <path d="M38 31V41M33 36H43" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Remove Blank Pages - Empty page with X
export const RemoveBlankPagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="remBlankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="10" y="4" width="28" height="36" rx="3" stroke="url(#remBlankGrad)" strokeWidth="2" strokeDasharray="4 3" fill="none" />
        <circle cx="36" cy="36" r="10" fill="url(#remBlankGrad)" />
        <path d="M31 31L41 41M41 31L31 41" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// PDF Reader - Document with eye (viewing)
export const PdfReaderIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="readerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#readerGrad)" opacity="0.3" />
        <path d="M14 14H34M14 22H30M14 30H34M14 38H26" stroke="url(#readerGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <ellipse cx="32" cy="32" rx="12" ry="8" fill="url(#readerGrad)" opacity="0.9" />
        <circle cx="32" cy="32" r="4" fill="white" />
        <circle cx="32" cy="32" r="2" fill="url(#readerGrad)" />
    </svg>
);

// ==================== CONVERT TO PDF ICONS (Green) ====================

// HTML to PDF - Code brackets to PDF
export const HtmlToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="htmlToPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#E44D26" />
        <text x="11" y="24" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">&lt;/&gt;</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#htmlToPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// Image to PDF - Generic image icon to PDF
export const ImageToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="imgPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="4" y="10" width="18" height="18" rx="2" fill="url(#imgPdfGrad)" />
        <circle cx="10" cy="16" r="3" fill="white" />
        <path d="M4 24L9 19L13 23L22 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 20H30" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M27 16L31 20L27 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="16" height="22" rx="2" fill="url(#imgPdfGrad)" />
        <text x="36" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// JPG to PDF - JPG badge to PDF
export const JpgToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="jpgPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#FF9800" />
        <text x="11" y="23" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">JPG</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#jpgPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// PNG to PDF - PNG with transparency
export const PngToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pngPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
            <pattern id="checker" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="3" height="3" fill="#ccc" />
                <rect x="3" y="3" width="3" height="3" fill="#ccc" />
            </pattern>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="url(#checker)" />
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#2196F3" opacity="0.8" />
        <text x="11" y="23" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PNG</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#pngPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// WebP to PDF
export const WebpToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="webpPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#9C27B0" />
        <text x="11" y="23" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">WEBP</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#webpPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// SVG to PDF - Bezier curve to PDF
export const SvgToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="svgPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#FF5722" />
        <path d="M6 24C6 24 10 14 14 24C18 34 22 24 22 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="24" r="2" fill="white" />
        <circle cx="14" cy="24" r="2" fill="white" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#svgPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// BMP to PDF
export const BmpToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bmpPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#795548" />
        <text x="11" y="23" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">BMP</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#bmpPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// HEIC to PDF - Apple style
export const HeicToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="heicPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#607D8B" />
        <text x="11" y="23" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">HEIC</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#heicPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// TIFF to PDF
export const TiffToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tiffPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#3F51B5" />
        <rect x="4" y="12" width="14" height="4" rx="1" fill="white" opacity="0.3" />
        <rect x="4" y="18" width="14" height="4" rx="1" fill="white" opacity="0.2" />
        <rect x="4" y="24" width="14" height="4" rx="1" fill="white" opacity="0.1" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#tiffPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// PSD to PDF - Photoshop layers
export const PsdToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="psdPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="20" rx="2" fill="#001E36" />
        <text x="11" y="23" textAnchor="middle" fontSize="7" fill="#31A8FF" fontWeight="bold">Ps</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#psdPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// Word to PDF - W doc
export const WordToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="wordPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#2B579A" />
        <text x="11" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">W</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#wordPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// Excel to PDF - Grid
export const ExcelToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="excelPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#217346" />
        <text x="11" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">X</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#excelPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// PowerPoint to PDF
export const PptxToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pptPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#D24726" />
        <text x="11" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">P</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#pptPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// TXT to PDF
export const TxtToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="txtPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#78909C" />
        <path d="M6 16H16M6 20H14M6 24H16M6 28H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#txtPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// JSON to PDF - Curly braces
export const JsonToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="jsonPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#FFC107" />
        <text x="11" y="25" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">{'{}'}</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#jsonPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// RTF to PDF
export const RtfToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rtfPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#5C6BC0" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">RTF</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#rtfPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// XPS to PDF
export const XpsToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="xpsPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#00BCD4" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">XPS</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#xpsPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// EPUB to PDF - E-book
export const EpubToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="epubPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="8" width="18" height="26" rx="2" fill="#8BC34A" />
        <path d="M11 12V30M5 12H17M5 30H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#epubPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// MOBI to PDF - Kindle style
export const MobiToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mobiPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="8" width="18" height="26" rx="2" fill="#FF5722" />
        <text x="11" y="24" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">MOBI</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#mobiPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// FB2 to PDF
export const Fb2ToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="fb2PdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="8" width="18" height="26" rx="2" fill="#9C27B0" />
        <text x="11" y="24" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">FB2</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#fb2PdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// DJVU to PDF
export const DjvuToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="djvuPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="8" width="18" height="26" rx="2" fill="#455A64" />
        <text x="11" y="24" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">DJVU</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#djvuPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// Markdown to PDF
export const MarkdownToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mdPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="#263238" />
        <text x="11" y="24" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">MD</text>
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#mdPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// Email to PDF - Envelope
export const EmailToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="emailPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="12" width="18" height="16" rx="2" fill="#1976D2" />
        <path d="M2 14L11 20L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#emailPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// CBZ to PDF - Comic book
export const CbzToPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="cbzPdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#69F0AE" />
                <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
        </defs>
        <rect x="2" y="8" width="18" height="26" rx="2" fill="#E91E63" />
        <rect x="4" y="10" width="7" height="10" rx="1" fill="white" opacity="0.3" />
        <rect x="12" y="10" width="6" height="10" rx="1" fill="white" opacity="0.2" />
        <rect x="4" y="22" width="14" height="10" rx="1" fill="white" opacity="0.25" />
        <path d="M22 20H28" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="url(#cbzPdfGrad)" />
        <text x="37" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
    </svg>
);

// ==================== CONVERT FROM PDF ICONS (Blue) ====================

// PDF to JPG
export const PdfToJpgIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfJpgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfJpgGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="20" rx="2" fill="#FF9800" />
        <text x="37" y="23" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">JPG</text>
    </svg>
);

// PDF to PNG
export const PdfToPngIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfPngGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfPngGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="20" rx="2" fill="#2196F3" />
        <text x="37" y="23" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">PNG</text>
    </svg>
);

// PDF to WebP
export const PdfToWebpIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfWebpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfWebpGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="20" rx="2" fill="#9C27B0" />
        <text x="37" y="23" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">WEBP</text>
    </svg>
);

// PDF to Word
export const PdfToWordIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfWordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfWordGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#2B579A" />
        <text x="37" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">W</text>
    </svg>
);

// PDF to Excel
export const PdfToExcelIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfExcelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfExcelGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#217346" />
        <text x="37" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">X</text>
    </svg>
);

// PDF to PowerPoint
export const PdfToPptxIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfPptxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfPptxGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#D24726" />
        <text x="37" y="25" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">P</text>
    </svg>
);

// PDF to TXT
export const PdfToTxtIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfTxtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfTxtGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#78909C" />
        <path d="M32 16H44M32 20H42M32 24H44M32 28H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// PDF to HTML
export const PdfToHtmlIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfHtmlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfHtmlGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#E44D26" />
        <text x="37" y="24" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">&lt;/&gt;</text>
    </svg>
);

// PDF to SVG
export const PdfToSvgIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfSvgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfSvgGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#FF5722" />
        <path d="M32 20C32 20 36 14 40 20C44 26 48 20 48 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
);

// PDF to PDFA
export const PdfToPdfaIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="pdfPdfaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfPdfaGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="22" rx="2" fill="#4CAF50" />
        <text x="37" y="20" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">PDF</text>
        <text x="37" y="28" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">/A</text>
    </svg>
);

// Extract Images - Images coming out of PDF
export const ExtractImagesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="extImgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="4" y="6" width="22" height="28" rx="2" fill="url(#extImgGrad)" opacity="0.5" />
        <path d="M8 16H20M8 22H18M8 28H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 20H34" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 16L34 20L30 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="8" width="14" height="12" rx="2" fill="url(#extImgGrad)" />
        <circle cx="36" cy="12" r="2" fill="white" />
        <rect x="32" y="24" width="14" height="12" rx="2" fill="url(#extImgGrad)" opacity="0.7" />
        <circle cx="36" cy="28" r="2" fill="white" />
    </svg>
);

// Extract Text
export const ExtractTextIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="extTxtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64B5F6" />
                <stop offset="100%" stopColor="#2979FF" />
            </linearGradient>
        </defs>
        <rect x="4" y="6" width="22" height="28" rx="2" fill="url(#extTxtGrad)" opacity="0.5" />
        <rect x="8" y="12" width="14" height="8" rx="1" fill="white" opacity="0.4" />
        <path d="M26 20H34" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 16L34 20L30 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="10" width="14" height="22" rx="2" fill="url(#extTxtGrad)" />
        <path d="M36 16H42M36 21H40M36 26H42" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// ==================== OPTIMIZE & REPAIR ICONS (Purple) ====================



// Flatten PDF - Rolling pin flattening layers
export const FlattenPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="flatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="30" width="36" height="8" rx="2" fill="url(#flatGrad)" />
        <rect x="8" y="22" width="32" height="6" rx="1" fill="url(#flatGrad)" opacity="0.7" />
        <rect x="10" y="16" width="28" height="4" rx="1" fill="url(#flatGrad)" opacity="0.5" />
        <rect x="12" y="12" width="24" height="2" rx="1" fill="url(#flatGrad)" opacity="0.3" />
        <path d="M4 10L24 4L44 10" stroke="url(#flatGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Repair PDF - Wrench and document
export const RepairPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="repairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#repairGrad)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H26" stroke="url(#repairGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 18C41.314 18 44 20.686 44 24C44 25.5 43.4 26.8 42.5 27.8L44 38L38 36L32 38L33.5 27.8C32.6 26.8 32 25.5 32 24C32 20.686 34.686 18 38 18Z" fill="url(#repairGrad)" />
        <circle cx="38" cy="24" r="3" fill="white" />
    </svg>
);

// Linearize PDF - Sequential arrows
export const LinearizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="linearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="8" width="16" height="12" rx="2" fill="url(#linearGrad)" />
        <rect x="26" y="8" width="16" height="12" rx="2" fill="url(#linearGrad)" opacity="0.7" />
        <rect x="6" y="28" width="16" height="12" rx="2" fill="url(#linearGrad)" opacity="0.5" />
        <rect x="26" y="28" width="16" height="12" rx="2" fill="url(#linearGrad)" opacity="0.3" />
        <path d="M22 14H26" stroke="url(#linearGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 20V28" stroke="url(#linearGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 34H26" stroke="url(#linearGrad)" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Remove Objects - Document with minus/erasing
export const RemoveObjectsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="removeObjGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#removeObjGrad)" opacity="0.3" />
        <rect x="12" y="12" width="16" height="8" rx="1" fill="url(#removeObjGrad)" opacity="0.5" />
        <rect x="12" y="24" width="12" height="6" rx="1" fill="url(#removeObjGrad)" opacity="0.5" />
        <circle cx="38" cy="36" r="10" fill="url(#removeObjGrad)" />
        <path d="M33 36H43" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Sanitize PDF - Shield with check
export const SanitizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="sanitizeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="24" height="30" rx="3" fill="url(#sanitizeGrad)" opacity="0.3" />
        <path d="M12 16H24M12 24H20" stroke="url(#sanitizeGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 12C36 12 44 14 44 22C44 34 36 42 36 42C36 42 28 34 28 22C28 14 36 12 36 12Z" fill="url(#sanitizeGrad)" />
        <path d="M32 24L35 27L40 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Optimize PDF - Speedometer
export const OptimizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="optimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <path d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z" fill="url(#optimGrad)" opacity="0.2" />
        <path d="M24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8" stroke="url(#optimGrad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M24 24L34 16" stroke="url(#optimGrad)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="url(#optimGrad)" />
    </svg>
);

// Grayscale PDF - B&W circles
export const GrayscalePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#grayGrad)" opacity="0.2" />
        <circle cx="18" cy="20" r="8" fill="#333" />
        <circle cx="30" cy="20" r="8" fill="#999" />
        <circle cx="18" cy="32" r="8" fill="#ccc" />
        <circle cx="30" cy="32" r="8" fill="white" stroke="#333" strokeWidth="1" />
    </svg>
);

// Validate PDF - Document with checkmark
export const ValidatePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="validGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#validGrad)" opacity="0.3" />
        <path d="M12 14H28M12 22H24M12 30H28" stroke="url(#validGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="36" r="10" fill="url(#validGrad)" />
        <path d="M33 36L37 40L44 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ==================== SECURE PDF ICONS (Slate) ====================

// Protect PDF - Lock on document
export const ProtectPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="protectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#protectGrad)" opacity="0.3" />
        <path d="M12 14H28M12 22H20" stroke="url(#protectGrad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="16" height="14" rx="3" fill="url(#protectGrad)" />
        <path d="M32 24V20C32 17.239 34.239 15 37 15C39.761 15 42 17.239 42 20V24" stroke="url(#protectGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="37" cy="31" r="2" fill="white" />
    </svg>
);

// Unlock PDF - Open padlock
export const UnlockPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="unlockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#unlockGrad)" opacity="0.3" />
        <path d="M12 14H28M12 22H24M12 30H28" stroke="url(#unlockGrad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="16" height="14" rx="3" fill="url(#unlockGrad)" />
        <path d="M42 24V16C42 13.239 39.761 11 37 11C34.239 11 32 13.239 32 16" stroke="url(#unlockGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="36" cy="31" r="2" fill="white" />
    </svg>
);

// Encrypt PDF - Key icon
export const EncryptPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="encryptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="26" height="32" rx="3" fill="url(#encryptGrad)" opacity="0.3" />
        <path d="M12 16H26M12 24H22" stroke="url(#encryptGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="18" r="8" stroke="url(#encryptGrad)" strokeWidth="4" fill="none" />
        <path d="M38 26V38" stroke="url(#encryptGrad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 32H44" stroke="url(#encryptGrad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 38H42" stroke="url(#encryptGrad)" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

// Redact PDF - Black bar censoring text
export const RedactPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="redactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#redactGrad)" opacity="0.2" />
        <path d="M12 14H36" stroke="url(#redactGrad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="20" width="24" height="6" rx="1" fill="#000" />
        <path d="M12 34H30" stroke="url(#redactGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Sign PDF with cert - Certificate ribbon
export const SignWithCertIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="certGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="32" rx="3" fill="url(#certGrad)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H18" stroke="url(#certGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="22" r="10" fill="url(#certGrad)" />
        <path d="M34 22L37 25L43 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 32L38 36L42 32V44L38 40L34 44V32Z" fill="url(#certGrad)" opacity="0.7" />
    </svg>
);

// Permissions - Settings gear on document
export const PermissionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="permGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#permGrad)" opacity="0.3" />
        <path d="M12 14H26M12 22H20" stroke="url(#permGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="32" r="10" fill="url(#permGrad)" />
        <circle cx="38" cy="32" r="4" stroke="white" strokeWidth="2" fill="none" />
        <path d="M38 22V26M38 38V42M28 32H32M44 32H48M30 24L33 27M43 37L46 40M30 40L33 37M43 27L46 24" stroke="url(#permGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// ==================== NEW ICONS ====================

// Compress PDF - Arrows squeezing document
export const CompressPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="compressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="10" y="6" width="28" height="36" rx="3" fill="url(#compressGrad)" opacity="0.3" />
        <rect x="14" y="10" width="20" height="28" rx="2" fill="url(#compressGrad)" />
        <path d="M4 24H12M44 24H36" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" />
        <path d="M8 20L12 24L8 28M40 20L36 24L40 28" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14V18M24 34V30" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 18L24 22L28 18M20 30L24 26L28 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// PDF to BMP - Document with BMP badge
export const PdfToBmpIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bmpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#bmpGrad)" opacity="0.2" />
        <path d="M14 14H34M14 22H34" stroke="url(#bmpGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#bmpGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">BMP</text>
    </svg>
);

// PDF to TIFF - Document with TIFF badge/layers
export const PdfToTiffIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tiffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="32" height="38" rx="3" fill="url(#tiffGrad)" opacity="0.2" />
        <rect x="12" y="4" width="32" height="38" rx="3" fill="url(#tiffGrad)" opacity="0.2" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#tiffGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">TIFF</text>
    </svg>
);

// PDF to Greyscale - Half color half gray
export const PdfToGreyscaleIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="greyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9E9E9E" />
                <stop offset="100%" stopColor="#616161" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#greyGrad)" opacity="0.2" />
        <circle cx="24" cy="24" r="12" fill="url(#greyGrad)" />
        <path d="M24 12A12 12 0 0 0 24 36" fill="#424242" />
    </svg>
);

// PDF to JSON - Document with braces
export const PdfToJsonIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="jsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#jsonGrad)" opacity="0.2" />
        <path d="M16 18C14 18 14 20 14 22V23C14 24 13 24 12 24C13 24 14 24 14 25V26C14 28 14 30 16 30" stroke="url(#jsonGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 18C34 18 34 20 34 22V23C34 24 35 24 36 24C35 24 34 24 34 25V26C34 28 34 30 32 30" stroke="url(#jsonGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <text x="24" y="38" textAnchor="middle" fontSize="10" fill="url(#jsonGrad)" fontWeight="bold">JSON</text>
    </svg>
);

// PDF to Word/Docx - Document with W
export const PdfToDocxIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="docxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#docxGrad)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#docxGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="26" width="24" height="14" rx="2" fill="url(#docxGrad)" />
        <text x="24" y="36" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">W</text>
    </svg>
);

// Rasterize PDF - Pixel grid effect
export const RasterizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#rastGrad)" opacity="0.2" />
        <rect x="14" y="14" width="6" height="6" fill="url(#rastGrad)" />
        <rect x="22" y="14" width="6" height="6" fill="url(#rastGrad)" opacity="0.8" />
        <rect x="14" y="22" width="6" height="6" fill="url(#rastGrad)" opacity="0.8" />
        <rect x="22" y="22" width="6" height="6" fill="url(#rastGrad)" opacity="0.6" />
        <rect x="14" y="30" width="6" height="6" fill="url(#rastGrad)" opacity="0.6" />
        <rect x="22" y="30" width="6" height="6" fill="url(#rastGrad)" opacity="0.4" />
        <rect x="30" y="14" width="6" height="6" fill="url(#rastGrad)" opacity="0.6" />
        <rect x="30" y="22" width="6" height="6" fill="url(#rastGrad)" opacity="0.4" />
        <rect x="30" y="30" width="6" height="6" fill="url(#rastGrad)" opacity="0.2" />
    </svg>
);

// Extract Tables - Spreadsheet grid
export const ExtractTablesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="url(#tableGrad)" strokeWidth="2" fill="white" />
        <path d="M6 18H42" stroke="url(#tableGrad)" strokeWidth="2" />
        <path d="M6 28H42" stroke="url(#tableGrad)" strokeWidth="2" />
        <path d="M18 8V40" stroke="url(#tableGrad)" strokeWidth="2" />
        <path d="M30 8V40" stroke="url(#tableGrad)" strokeWidth="2" />
        <path d="M42 14L46 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 14L42 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Fix Page Size - Ruler and document
export const FixPageSizeIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="sizeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="10" y="6" width="28" height="36" rx="3" fill="url(#sizeGrad)" opacity="0.2" />
        <rect x="6" y="20" width="4" height="20" rx="1" fill="#424242" />
        <rect x="20" y="42" width="20" height="4" rx="1" fill="#424242" />
        <path d="M10 10L14 14M34 10L38 14M10 38L14 34M34 38L38 34" stroke="url(#sizeGrad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="url(#sizeGrad)" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
);

// Page Dimensions - Arrows measuring
export const PageDimensionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="dimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="24" height="28" rx="2" fill="url(#dimGrad)" opacity="0.3" />
        <path d="M8 10V38" stroke="url(#dimGrad)" strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <path d="M12 42H36" stroke="url(#dimGrad)" strokeWidth="2" />
        <path d="M8 10L12 10" stroke="url(#dimGrad)" strokeWidth="1" />
        <path d="M8 38L12 38" stroke="url(#dimGrad)" strokeWidth="1" />
        <path d="M12 42L12 38" stroke="url(#dimGrad)" strokeWidth="1" />
        <path d="M36 42L36 38" stroke="url(#dimGrad)" strokeWidth="1" />
        <text x="24" y="26" textAnchor="middle" fontSize="8" fill="url(#dimGrad)" fontWeight="bold">A4</text>
    </svg>
);

// Remove Restrictions - Broken chain/unlocked
export const RemoveRestrictionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="restGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#restGrad)" opacity="0.2" />
        <circle cx="24" cy="24" r="10" stroke="url(#restGrad)" strokeWidth="3" fill="white" />
        <path d="M18 24H30" stroke="url(#restGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 18L24 14" stroke="url(#restGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 14L26 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Deskew PDF - Straightening angled doc
export const DeskewPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="deskewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="24" height="30" rx="2" stroke="url(#deskewGrad)" strokeWidth="2" strokeDasharray="3 2" transform="rotate(10 24 25)" opacity="0.5" />
        <rect x="12" y="10" width="24" height="30" rx="2" stroke="url(#deskewGrad)" strokeWidth="2" fill="white" />
        <path d="M8 25H4" stroke="#E5322D" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M40 25H44" stroke="#E5322D" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
);

// Font to Outline - Letter A with nodes
export const FontToOutlineIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="fontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <text x="24" y="36" textAnchor="middle" fontSize="32" fill="none" stroke="url(#fontGrad)" strokeWidth="1" fontWeight="bold">A</text>
        <circle cx="16" cy="36" r="2" fill="url(#fontGrad)" />
        <circle cx="32" cy="36" r="2" fill="url(#fontGrad)" />
        <circle cx="24" cy="12" r="2" fill="url(#fontGrad)" />
        <circle cx="20" cy="24" r="2" fill="url(#fontGrad)" />
        <circle cx="28" cy="24" r="2" fill="url(#fontGrad)" />
    </svg>
);

// OCG Manager (Layers) - Stacked layers
export const OcgManagerIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="ocgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <path d="M24 10L40 18L24 26L8 18L24 10Z" fill="url(#ocgGrad)" opacity="0.9" />
        <path d="M8 24L24 32L40 24" stroke="url(#ocgGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 30L24 38L40 30" stroke="url(#ocgGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="4" fill="white" />
        <circle cx="38" cy="10" r="2" fill="#424242" />
    </svg>
);

// PDF to HEIC - Document with HEIC badge
export const PdfToHeicIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="heicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#heicGrad)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#heicGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#heicGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">HEIC</text>
    </svg>
);

// PDF to PSD - Document with PSD badge
export const PdfToPsdIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="psdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#psdGrad)" opacity="0.2" />
        <path d="M14 14L20 20M34 14L28 20" stroke="url(#psdGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#psdGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">PSD</text>
    </svg>
);

// PDF to XPS - Document with XPS badge
export const PdfToXpsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="xpsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#xpsGrad)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#xpsGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#xpsGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">XPS</text>
    </svg>
);

// PDF to RTF - Document with RTF badge
export const PdfToRtfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rtfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#rtfGrad)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#rtfGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#rtfGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">RTF</text>
    </svg>
);

// PDF to EPUB - Document with Book icon
export const PdfToEpubIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="epubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#epubGrad)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32M24 12C24 12 28 10 34 10C38 10 40 12 40 12V32C40 32 38 30 34 30C28 30 24 32 24 32" stroke="url(#epubGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#epubGrad)" />
        <text x="24" y="40" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">EPUB</text>
    </svg>
);

// PDF to MOBI - Document with Book icon
export const PdfToMobiIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mobiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#mobiGrad)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32" stroke="url(#mobiGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#mobiGrad)" />
        <text x="24" y="40" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">MOBI</text>
    </svg>
);

// PDF to DJVU - Document with Scan icon
export const PdfToDjvuIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="djvuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#djvuGrad)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#djvuGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#djvuGrad)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">DJVU</text>
    </svg>
);

// PDF to FB2 - Document with Book icon
export const PdfToFb2Icon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="fb2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#fb2Grad)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32" stroke="url(#fb2Grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#fb2Grad)" />
        <text x="24" y="40" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">FB2</text>
    </svg>
);

// PDF to Email - Document with Mail icon
export const PdfToEmailIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="emlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#emlGrad)" opacity="0.2" />
        <path d="M12 14C12 14 18 20 24 20C30 20 36 14 36 14V30C36 32.2 34.2 34 32 34H16C13.8 34 12 32.2 12 30V14Z" fill="url(#emlGrad)" />
        <path d="M12 14L24 22L36 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="24" y="42" textAnchor="middle" fontSize="8" fill="url(#emlGrad)" fontWeight="bold">EML</text>
    </svg>
);

// PDF to CBZ - Document with Library icon
export const PdfToCbzIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="cbzGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#cbzGrad)" opacity="0.2" />
        <rect x="12" y="10" width="8" height="20" rx="2" fill="url(#cbzGrad)" />
        <rect x="22" y="10" width="8" height="20" rx="2" fill="url(#cbzGrad)" opacity="0.8" />
        <rect x="32" y="10" width="4" height="20" rx="1" fill="url(#cbzGrad)" opacity="0.6" />
        <rect x="12" y="32" width="24" height="8" rx="2" fill="url(#cbzGrad)" />
        <text x="24" y="38" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">CBZ</text>
    </svg>
);

// Remove Metadata - Info with strike/remove
export const RemoveMetadataIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="remMetaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="28" height="36" rx="3" fill="url(#remMetaGrad)" opacity="0.3" />
        <path d="M14 14H30M14 22H26M14 30H30" stroke="url(#remMetaGrad)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="36" r="10" fill="url(#remMetaGrad)" />
        <text x="36" y="41" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">i</text>
        <path d="M30 42L42 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Fallback Icon
export const DefaultToolIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9E9E9E" />
                <stop offset="100%" stopColor="#616161" />
            </linearGradient>
        </defs>
        <rect x="10" y="6" width="28" height="36" rx="3" fill="url(#defaultGrad)" />
        <path d="M16 14H32M16 22H32M16 30H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// ==================== TOOL ICONS MAP ====================
// Maps each tool slug to its unique icon component

export const TOOL_ICONS: Record<string, React.FC<ToolIconProps>> = {
    // Organize & Manage (Red)
    'merge-pdf': MergePdfIcon,
    'split-pdf': SplitPdfIcon,
    'organize-pdf': OrganizePdfIcon,
    'extract-pages': ExtractPagesIcon,
    'delete-pages': DeletePagesIcon,
    'rotate-pdf': RotatePdfIcon,
    'rotate-custom': RotateCustomIcon,
    'reverse-pages': ReversePagesIcon,
    'alternate-merge': AlternateMergeIcon,
    'n-up-pdf': NupPdfIcon,
    'grid-combine': GridCombineIcon,
    'combine-single-page': CombineSinglePageIcon,
    'add-blank-page': AddBlankPageIcon,
    'divide-pages': DividePagesIcon,
    'pdf-multi-tool': PdfMultiToolIcon,
    'pdf-to-zip': PdfToZipIcon,
    'compare-pdfs': ComparePdfsIcon,
    'posterize-pdf': PosterizePdfIcon,
    'ocr-pdf': OcrPdfIcon,
    'pdf-booklet': PdfBookletIcon,
    'pdf-workflow': PdfWorkflowIcon,
    'add-attachments': AddAttachmentsIcon,
    'extract-attachments': ExtractAttachmentsIcon,
    'edit-attachments': EditAttachmentsIcon,
    'view-metadata': ViewMetadataIcon,
    'add-metadata': AddMetadataIcon,
    'edit-metadata': EditMetadataIcon,
    'compress-pdf': CompressPdfIcon,

    // Edit & Annotate (Orange)
    'edit-pdf': EditPdfIcon,
    'sign-pdf': SignPdfIcon,
    'crop-pdf': CropPdfIcon,
    'bookmark': BookmarkIcon,
    'table-of-contents': TableOfContentsIcon,
    'page-numbers': PageNumbersIcon,
    'add-watermark': AddWatermarkIcon,
    'header-footer': HeaderFooterIcon,
    'invert-colors': InvertColorsIcon,
    'background-color': BackgroundColorIcon,
    'text-color': TextColorIcon,
    'add-stamps': AddStampsIcon,
    'remove-annotations': RemoveAnnotationsIcon,
    'form-filler': FormFillerIcon,
    'form-creator': FormCreatorIcon,
    'remove-blank-pages': RemoveBlankPagesIcon,
    'pdf-reader': PdfReaderIcon,

    // Convert to PDF (Green)
    'image-to-pdf': ImageToPdfIcon,
    'jpg-to-pdf': JpgToPdfIcon,
    'png-to-pdf': PngToPdfIcon,
    'webp-to-pdf': WebpToPdfIcon,
    'svg-to-pdf': SvgToPdfIcon,
    'bmp-to-pdf': BmpToPdfIcon,
    'heic-to-pdf': HeicToPdfIcon,
    'tiff-to-pdf': TiffToPdfIcon,
    'psd-to-pdf': PsdToPdfIcon,
    'word-to-pdf': WordToPdfIcon,
    'excel-to-pdf': ExcelToPdfIcon,
    'pptx-to-pdf': PptxToPdfIcon,
    'powerpoint-to-pdf': PptxToPdfIcon,
    'txt-to-pdf': TxtToPdfIcon,
    'json-to-pdf': JsonToPdfIcon,
    'rtf-to-pdf': RtfToPdfIcon,
    'xps-to-pdf': XpsToPdfIcon,
    'epub-to-pdf': EpubToPdfIcon,
    'mobi-to-pdf': MobiToPdfIcon,
    'fb2-to-pdf': Fb2ToPdfIcon,
    'djvu-to-pdf': DjvuToPdfIcon,
    'markdown-to-pdf': MarkdownToPdfIcon,
    'email-to-pdf': EmailToPdfIcon,
    'cbz-to-pdf': CbzToPdfIcon,
    'html-to-pdf': HtmlToPdfIcon,

    // Convert from PDF (Blue)
    'pdf-to-jpg': PdfToJpgIcon,
    'pdf-to-png': PdfToPngIcon,
    'pdf-to-webp': PdfToWebpIcon,
    'pdf-to-docx': PdfToDocxIcon,
    'pdf-to-word': PdfToDocxIcon,
    'pdf-to-excel': PdfToExcelIcon,
    'pdf-to-pptx': PdfToPptxIcon,
    'pdf-to-powerpoint': PdfToPptxIcon,
    'pdf-to-txt': PdfToTxtIcon,
    'pdf-to-html': PdfToHtmlIcon,
    'pdf-to-svg': PdfToSvgIcon,
    'pdf-to-pdfa': PdfToPdfaIcon,
    'extract-images': ExtractImagesIcon,
    'extract-text': ExtractTextIcon,
    'pdf-to-bmp': PdfToBmpIcon,
    'pdf-to-tiff': PdfToTiffIcon,
    'pdf-to-greyscale': PdfToGreyscaleIcon,
    'pdf-to-json': PdfToJsonIcon,
    'pdf-to-heic': PdfToHeicIcon,
    'pdf-to-psd': PdfToPsdIcon,
    'pdf-to-xps': PdfToXpsIcon,
    'pdf-to-rtf': PdfToRtfIcon,
    'pdf-to-epub': PdfToEpubIcon,
    'pdf-to-mobi': PdfToMobiIcon,
    'pdf-to-djvu': PdfToDjvuIcon,
    'pdf-to-fb2': PdfToFb2Icon,
    'pdf-to-email': PdfToEmailIcon,
    'pdf-to-cbz': PdfToCbzIcon,
    'rasterize-pdf': RasterizePdfIcon,
    'extract-tables': ExtractTablesIcon,

    // Optimize & Repair (Purple)
    'flatten-pdf': FlattenPdfIcon,
    'repair-pdf': RepairPdfIcon,
    'linearize-pdf': LinearizePdfIcon,
    'remove-objects': RemoveObjectsIcon,
    'sanitize-pdf': SanitizePdfIcon,
    'optimize-pdf': OptimizePdfIcon,
    'grayscale-pdf': GrayscalePdfIcon,
    'validate-pdf': ValidatePdfIcon,
    'fix-page-size': FixPageSizeIcon,
    'page-dimensions': PageDimensionsIcon,
    'remove-restrictions': RemoveRestrictionsIcon,
    'deskew-pdf': DeskewPdfIcon,
    'font-to-outline': FontToOutlineIcon,
    'ocg-manager': OcgManagerIcon,

    // Secure PDF (Slate)
    'protect-pdf': ProtectPdfIcon,
    'decrypt-pdf': UnlockPdfIcon,
    'unlock-pdf': UnlockPdfIcon,
    'encrypt-pdf': EncryptPdfIcon,
    'redact-pdf': RedactPdfIcon,
    'sign-with-cert': SignWithCertIcon,
    'digital-signature': SignWithCertIcon,
    'permissions': PermissionsIcon,
    'change-permissions': PermissionsIcon,
    'remove-metadata': RemoveMetadataIcon,
};



// Get tool icon by slug
export function getToolIcon(slug: string): React.FC<ToolIconProps> | undefined {
    return TOOL_ICONS[slug];
}

// Get category color
export function getCategoryColor(category: string): string {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || '#666666';
}
