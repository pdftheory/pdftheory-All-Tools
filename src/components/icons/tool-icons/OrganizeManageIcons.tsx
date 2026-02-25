import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

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
// Compress PDF - Vertical arrows shrinking document
export const CompressPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="compGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#E5322D" />
            </linearGradient>
        </defs>
        <rect x="10" y="8" width="28" height="32" rx="3" fill="url(#compGrad2)" opacity="0.3" />
        <path d="M16 20H32M16 28H32" stroke="url(#compGrad2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 6V14M24 42V34" stroke="#E5322D" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 10L24 14L28 10M20 38L24 34L28 38" stroke="#E5322D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
