import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

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
