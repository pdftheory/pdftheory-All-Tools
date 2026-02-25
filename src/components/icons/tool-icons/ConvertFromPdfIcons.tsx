import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

// ==================== CONVERT FROM PDF ICONS (Blue) ====================

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

// PDF to JPEG
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
            <pattern id="checker2" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="3" height="3" fill="#ccc" />
                <rect x="3" y="3" width="3" height="3" fill="#ccc" />
            </pattern>
        </defs>
        <rect x="2" y="10" width="18" height="22" rx="2" fill="url(#pdfPngGrad)" />
        <text x="11" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PDF</text>
        <path d="M22 20H28" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 16L29 20L25 24" stroke="#2979FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="10" width="18" height="20" rx="2" fill="url(#checker2)" />
        <rect x="28" y="10" width="18" height="20" rx="2" fill="#2196F3" opacity="0.8" />
        <text x="37" y="23" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PNG</text>
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
// PDF to Word/Docx
export const PdfToDocxIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="docxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#docxGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#docxGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="26" width="24" height="14" rx="2" fill="url(#docxGrad1)" />
        <text x="24" y="36" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">W</text>
    </svg>
);

// PDF to BMP
export const PdfToBmpIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="bmpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#bmpGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 22H34" stroke="url(#bmpGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#bmpGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">BMP</text>
    </svg>
);

// PDF to TIFF
export const PdfToTiffIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tiffGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="32" height="38" rx="3" fill="url(#tiffGrad1)" opacity="0.2" />
        <rect x="12" y="4" width="32" height="38" rx="3" fill="url(#tiffGrad1)" opacity="0.2" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#tiffGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">TIFF</text>
    </svg>
);

// PDF to Greyscale
export const PdfToGreyscaleIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="greyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9E9E9E" />
                <stop offset="100%" stopColor="#616161" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#greyGrad1)" opacity="0.2" />
        <circle cx="24" cy="24" r="12" fill="url(#greyGrad1)" />
        <path d="M24 12A12 12 0 0 0 24 36" fill="#424242" />
    </svg>
);

// PDF to JSON
export const PdfToJsonIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="jsonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#jsonGrad1)" opacity="0.2" />
        <path d="M16 18C14 18 14 20 14 22V23C14 24 13 24 12 24C13 24 14 24 14 25V26C14 28 14 30 16 30" stroke="url(#jsonGrad1)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 18C34 18 34 20 34 22V23C34 24 35 24 36 24C35 24 34 24 34 25V26C34 28 34 30 32 30" stroke="url(#jsonGrad1)" strokeWidth="2.5" strokeLinecap="round" />
        <text x="24" y="38" textAnchor="middle" fontSize="10" fill="url(#jsonGrad1)" fontWeight="bold">JSON</text>
    </svg>
);

// PDF to Heic
export const PdfToHeicIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="heicGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#heicGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#heicGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#heicGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">HEIC</text>
    </svg>
);

// PDF to PSD
export const PdfToPsdIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="psdGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#psdGrad1)" opacity="0.2" />
        <path d="M14 14L20 20M34 14L28 20" stroke="url(#psdGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#psdGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">PSD</text>
    </svg>
);

// PDF to XPS
export const PdfToXpsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="xpsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#xpsGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#xpsGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#xpsGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">XPS</text>
    </svg>
);

// PDF to RTF
export const PdfToRtfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rtfGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#rtfGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#rtfGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#rtfGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">RTF</text>
    </svg>
);

// PDF to EPUB
export const PdfToEpubIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="epubGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#epubGrad1)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32M24 12C24 12 28 10 34 10C38 10 40 12 40 12V32C40 32 38 30 34 30C28 30 24 32 24 32" stroke="url(#epubGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#epubGrad1)" />
        <text x="24" y="40" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">EPUB</text>
    </svg>
);

// PDF to MOBI
export const PdfToMobiIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mobiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#mobiGrad1)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32" stroke="url(#mobiGrad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#mobiGrad1)" />
        <text x="24" y="40" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">MOBI</text>
    </svg>
);

// PDF to DJVU
export const PdfToDjvuIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="djvuGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#djvuGrad1)" opacity="0.2" />
        <path d="M14 14H34M14 20H34" stroke="url(#djvuGrad1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <rect x="12" y="28" width="24" height="12" rx="2" fill="url(#djvuGrad1)" />
        <text x="24" y="37" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">DJVU</text>
    </svg>
);

// PDF to FB2
export const PdfToFb2Icon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="fb2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#fb2Grad1)" opacity="0.2" />
        <path d="M24 12V32M24 12C24 12 20 10 14 10C10 10 8 12 8 12V32C8 32 10 30 14 30C20 30 24 32 24 32" stroke="url(#fb2Grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="34" width="24" height="8" rx="2" fill="url(#fb2Grad1)" />
        <text x="24" y="40" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">FB2</text>
    </svg>
);

// PDF to Email
export const PdfToEmailIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="emlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#emlGrad1)" opacity="0.2" />
        <path d="M12 14C12 14 18 20 24 20C30 20 36 14 36 14V30C36 32.2 34.2 34 32 34H16C13.8 34 12 32.2 12 30V14Z" fill="url(#emlGrad1)" />
        <path d="M12 14L24 22L36 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="24" y="42" textAnchor="middle" fontSize="8" fill="url(#emlGrad1)" fontWeight="bold">EML</text>
    </svg>
);

// PDF to CBZ
export const PdfToCbzIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="cbzGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#cbzGrad1)" opacity="0.2" />
        <rect x="12" y="10" width="8" height="20" rx="2" fill="url(#cbzGrad1)" />
        <rect x="22" y="10" width="8" height="20" rx="2" fill="url(#cbzGrad1)" opacity="0.8" />
        <rect x="32" y="10" width="4" height="20" rx="1" fill="url(#cbzGrad1)" opacity="0.6" />
        <rect x="12" y="32" width="24" height="8" rx="2" fill="url(#cbzGrad1)" />
        <text x="24" y="38" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">CBZ</text>
    </svg>
);

// Rasterize PDF
export const RasterizePdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="rastGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="32" height="40" rx="3" fill="url(#rastGrad1)" opacity="0.2" />
        <rect x="14" y="14" width="6" height="6" fill="url(#rastGrad1)" />
        <rect x="22" y="14" width="6" height="6" fill="url(#rastGrad1)" opacity="0.8" />
        <rect x="14" y="22" width="6" height="6" fill="url(#rastGrad1)" opacity="0.8" />
        <rect x="22" y="22" width="6" height="6" fill="url(#rastGrad1)" opacity="0.6" />
        <rect x="14" y="30" width="6" height="6" fill="url(#rastGrad1)" opacity="0.6" />
        <rect x="22" y="30" width="6" height="6" fill="url(#rastGrad1)" opacity="0.4" />
        <rect x="30" y="14" width="6" height="6" fill="url(#rastGrad1)" opacity="0.6" />
        <rect x="30" y="22" width="6" height="6" fill="url(#rastGrad1)" opacity="0.4" />
        <rect x="30" y="30" width="6" height="6" fill="url(#rastGrad1)" opacity="0.2" />
    </svg>
);

// Extract Tables
export const ExtractTablesIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="tableGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2979FF" />
                <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
        </defs>
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="url(#tableGrad1)" strokeWidth="2" fill="white" />
        <path d="M6 18H42" stroke="url(#tableGrad1)" strokeWidth="2" />
        <path d="M6 28H42" stroke="url(#tableGrad1)" strokeWidth="2" />
        <path d="M18 8V40" stroke="url(#tableGrad1)" strokeWidth="2" />
        <path d="M30 8V40" stroke="url(#tableGrad1)" strokeWidth="2" />
        <path d="M42 14L46 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 14L42 10" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
