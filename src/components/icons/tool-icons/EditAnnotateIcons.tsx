import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

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
