import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

// ==================== OPTIMIZE & REPAIR ICONS (Purple) ====================

// Flatten PDF - Rolling pin flattening layers
export const FlattenPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="flatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="30" width="36" height="8" rx="2" fill="url(#flatGrad1)" />
        <rect x="8" y="22" width="32" height="6" rx="1" fill="url(#flatGrad1)" opacity="0.7" />
        <rect x="10" y="16" width="28" height="4" rx="1" fill="url(#flatGrad1)" opacity="0.5" />
        <rect x="12" y="12" width="24" height="2" rx="1" fill="url(#flatGrad1)" opacity="0.3" />
        <path d="M4 10L24 4L44 10" stroke="url(#flatGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Repair PDF - Wrench and document
export const RepairPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="repairGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#repairGrad1)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H26" stroke="url(#repairGrad1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 18C41.314 18 44 20.686 44 24C44 25.5 43.4 26.8 42.5 27.8L44 38L38 36L32 38L33.5 27.8C32.6 26.8 32 25.5 32 24C32 20.686 34.686 18 38 18Z" fill="url(#repairGrad1)" />
        <circle cx="38" cy="24" r="3" fill="white" />
    </svg>
);

// Linearize PDF - Sequential arrows
export const LinearizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="linearGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="8" width="16" height="12" rx="2" fill="url(#linearGrad1)" />
        <rect x="26" y="8" width="16" height="12" rx="2" fill="url(#linearGrad1)" opacity="0.7" />
        <rect x="6" y="28" width="16" height="12" rx="2" fill="url(#linearGrad1)" opacity="0.5" />
        <rect x="26" y="28" width="16" height="12" rx="2" fill="url(#linearGrad1)" opacity="0.3" />
        <path d="M22 14H26" stroke="url(#linearGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 20V28" stroke="url(#linearGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 34H26" stroke="url(#linearGrad1)" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Remove Objects - Document with minus/erasing
export const RemoveObjectsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="removeObjGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#removeObjGrad1)" opacity="0.3" />
        <rect x="12" y="12" width="16" height="8" rx="1" fill="url(#removeObjGrad1)" opacity="0.5" />
        <rect x="12" y="24" width="12" height="6" rx="1" fill="url(#removeObjGrad1)" opacity="0.5" />
        <circle cx="38" cy="36" r="10" fill="url(#removeObjGrad1)" />
        <path d="M33 36H43" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

// Sanitize PDF - Shield with check
export const SanitizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="sanitizeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="24" height="30" rx="3" fill="url(#sanitizeGrad1)" opacity="0.3" />
        <path d="M12 16H24M12 24H20" stroke="url(#sanitizeGrad1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 12C36 12 44 14 44 22C44 34 36 42 36 42C36 42 28 34 28 22C28 14 36 12 36 12Z" fill="url(#sanitizeGrad1)" />
        <path d="M32 24L35 27L40 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Optimize PDF - Speedometer
export const OptimizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="optimGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <path d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z" fill="url(#optimGrad1)" opacity="0.2" />
        <path d="M24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8" stroke="url(#optimGrad1)" strokeWidth="4" strokeLinecap="round" />
        <path d="M24 24L34 16" stroke="url(#optimGrad1)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="url(#optimGrad1)" />
    </svg>
);

// Grayscale PDF - B&W circles
export const GrayscalePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="grayGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#grayGrad1)" opacity="0.2" />
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
            <linearGradient id="validGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#validGrad1)" opacity="0.3" />
        <path d="M12 14H28M12 22H24M12 30H28" stroke="url(#validGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="36" r="10" fill="url(#validGrad1)" />
        <path d="M33 36L37 40L44 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Fix Page Size - Ruler and document
export const FixPageSizeIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="sizeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="10" y="6" width="28" height="36" rx="3" fill="url(#sizeGrad1)" opacity="0.2" />
        <rect x="6" y="20" width="4" height="20" rx="1" fill="#424242" />
        <rect x="20" y="42" width="20" height="4" rx="1" fill="#424242" />
        <path d="M10 10L14 14M34 10L38 14M10 38L14 34M34 38L38 34" stroke="url(#sizeGrad1)" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="url(#sizeGrad1)" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
);

// Page Dimensions - Arrows measuring
export const PageDimensionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="dimGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="24" height="28" rx="2" fill="url(#dimGrad1)" opacity="0.3" />
        <path d="M8 10V38" stroke="url(#dimGrad1)" strokeWidth="2" />
        <path d="M12 42H36" stroke="url(#dimGrad1)" strokeWidth="2" />
        <path d="M8 10L12 10" stroke="url(#dimGrad1)" strokeWidth="1" />
        <path d="M8 38L12 38" stroke="url(#dimGrad1)" strokeWidth="1" />
        <path d="M12 42L12 38" stroke="url(#dimGrad1)" strokeWidth="1" />
        <path d="M36 42L36 38" stroke="url(#dimGrad1)" strokeWidth="1" />
        <text x="24" y="26" textAnchor="middle" fontSize="8" fill="url(#dimGrad1)" fontWeight="bold">A4</text>
    </svg>
);

// Remove Restrictions - Broken chain/unlocked
export const RemoveRestrictionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="restGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#restGrad1)" opacity="0.2" />
        <circle cx="24" cy="24" r="10" stroke="url(#restGrad1)" strokeWidth="3" fill="white" />
        <path d="M18 24H30" stroke="url(#restGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 18L24 14" stroke="url(#restGrad1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 14L26 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Deskew PDF - Straightening angled doc
export const DeskewPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="deskewGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="24" height="30" rx="2" stroke="url(#deskewGrad1)" strokeWidth="2" strokeDasharray="3 2" transform="rotate(10 24 25)" opacity="0.5" />
        <rect x="12" y="10" width="24" height="30" rx="2" stroke="url(#deskewGrad1)" strokeWidth="2" fill="white" />
        <path d="M8 25H4" stroke="#E5322D" strokeWidth="2" />
        <path d="M40 25H44" stroke="#E5322D" strokeWidth="2" />
    </svg>
);

// Font to Outline - Letter A with nodes
export const FontToOutlineIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="fontGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <text x="24" y="36" textAnchor="middle" fontSize="32" fill="none" stroke="url(#fontGrad1)" strokeWidth="1" fontWeight="bold">A</text>
        <circle cx="16" cy="36" r="2" fill="url(#fontGrad1)" />
        <circle cx="32" cy="36" r="2" fill="url(#fontGrad1)" />
        <circle cx="24" cy="12" r="2" fill="url(#fontGrad1)" />
        <circle cx="20" cy="24" r="2" fill="url(#fontGrad1)" />
        <circle cx="28" cy="24" r="2" fill="url(#fontGrad1)" />
    </svg>
);

// OCG Manager (Layers) - Stacked layers
export const OcgManagerIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="ocgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
        </defs>
        <path d="M24 10L40 18L24 26L8 18L24 10Z" fill="url(#ocgGrad1)" opacity="0.9" />
        <path d="M8 24L24 32L40 24" stroke="url(#ocgGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 30L24 38L40 30" stroke="url(#ocgGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="4" fill="white" />
        <circle cx="38" cy="10" r="2" fill="#424242" />
    </svg>
);
