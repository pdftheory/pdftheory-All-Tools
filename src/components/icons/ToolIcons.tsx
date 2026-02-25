'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LoadingIcon = () => (
    <div className="animate-pulse bg-gray-100 rounded" style={{ width: '24px', height: '24px' }}></div>
);

// Export type for all icon components
export interface ToolIconProps {
    className?: string;
    size?: number;
}

// Category File Loaders
const OrganizeManageFile = () => import('./tool-icons/OrganizeManageIcons');
const EditAnnotateFile = () => import('./tool-icons/EditAnnotateIcons');
const ConvertToPdfFile = () => import('./tool-icons/ConvertToPdfIcons');
const ConvertFromPdfFile = () => import('./tool-icons/ConvertFromPdfIcons');
const OptimizeRepairFile = () => import('./tool-icons/OptimizeRepairIcons');
const SecurePdfFile = () => import('./tool-icons/SecurePdfIcons');
const MiscellaneousFile = () => import('./tool-icons/MiscellaneousIcons');

// Category gradient colors
export const CATEGORY_COLORS = {
    'organize-manage': '#E5322D',
    'edit-annotate': '#FF6B35',
    'convert-to-pdf': '#00C853',
    'convert-from-pdf': '#2979FF',
    'optimize-repair': '#7C4DFF',
    'secure-pdf': '#455A64',
};

/**
 * TOOL_ICONS Map (Slug -> Dynamic Component)
 */
export const TOOL_ICONS: Record<string, React.ComponentType<ToolIconProps>> = {
    // Organize & Manage (Red)
    'merge-pdf': dynamic(() => OrganizeManageFile().then(m => m.MergePdfIcon), { loading: LoadingIcon }),
    'split-pdf': dynamic(() => OrganizeManageFile().then(m => m.SplitPdfIcon), { loading: LoadingIcon }),
    'organize-pdf': dynamic(() => OrganizeManageFile().then(m => m.OrganizePdfIcon), { loading: LoadingIcon }),
    'extract-pages': dynamic(() => OrganizeManageFile().then(m => m.ExtractPagesIcon), { loading: LoadingIcon }),
    'delete-pages': dynamic(() => OrganizeManageFile().then(m => m.DeletePagesIcon), { loading: LoadingIcon }),
    'rotate-pdf': dynamic(() => OrganizeManageFile().then(m => m.RotatePdfIcon), { loading: LoadingIcon }),
    'rotate-custom': dynamic(() => OrganizeManageFile().then(m => m.RotateCustomIcon), { loading: LoadingIcon }),
    'reverse-pages': dynamic(() => OrganizeManageFile().then(m => m.ReversePagesIcon), { loading: LoadingIcon }),
    'alternate-merge': dynamic(() => OrganizeManageFile().then(m => m.AlternateMergeIcon), { loading: LoadingIcon }),
    'n-up-pdf': dynamic(() => OrganizeManageFile().then(m => m.NupPdfIcon), { loading: LoadingIcon }),
    'grid-combine': dynamic(() => OrganizeManageFile().then(m => m.GridCombineIcon), { loading: LoadingIcon }),
    'combine-single-page': dynamic(() => OrganizeManageFile().then(m => m.CombineSinglePageIcon), { loading: LoadingIcon }),
    'add-blank-page': dynamic(() => OrganizeManageFile().then(m => m.AddBlankPageIcon), { loading: LoadingIcon }),
    'divide-pages': dynamic(() => OrganizeManageFile().then(m => m.DividePagesIcon), { loading: LoadingIcon }),
    'pdf-multi-tool': dynamic(() => OrganizeManageFile().then(m => m.PdfMultiToolIcon), { loading: LoadingIcon }),
    'pdf-to-zip': dynamic(() => OrganizeManageFile().then(m => m.PdfToZipIcon), { loading: LoadingIcon }),
    'compare-pdfs': dynamic(() => OrganizeManageFile().then(m => m.ComparePdfsIcon), { loading: LoadingIcon }),
    'posterize-pdf': dynamic(() => OrganizeManageFile().then(m => m.PosterizePdfIcon), { loading: LoadingIcon }),
    'ocr-pdf': dynamic(() => OrganizeManageFile().then(m => m.OcrPdfIcon), { loading: LoadingIcon }),
    'pdf-booklet': dynamic(() => OrganizeManageFile().then(m => m.PdfBookletIcon), { loading: LoadingIcon }),
    'pdf-workflow': dynamic(() => OrganizeManageFile().then(m => m.PdfWorkflowIcon), { loading: LoadingIcon }),
    'add-attachments': dynamic(() => OrganizeManageFile().then(m => m.AddAttachmentsIcon), { loading: LoadingIcon }),
    'extract-attachments': dynamic(() => OrganizeManageFile().then(m => m.ExtractAttachmentsIcon), { loading: LoadingIcon }),
    'edit-attachments': dynamic(() => OrganizeManageFile().then(m => m.EditAttachmentsIcon), { loading: LoadingIcon }),
    'view-metadata': dynamic(() => OrganizeManageFile().then(m => m.ViewMetadataIcon), { loading: LoadingIcon }),
    'add-metadata': dynamic(() => OrganizeManageFile().then(m => m.AddMetadataIcon), { loading: LoadingIcon }),
    'edit-metadata': dynamic(() => OrganizeManageFile().then(m => m.EditMetadataIcon), { loading: LoadingIcon }),
    'compress-pdf': dynamic(() => OrganizeManageFile().then(m => m.CompressPdfIcon), { loading: LoadingIcon }),

    // Edit & Annotate (Orange)
    'edit-pdf': dynamic(() => EditAnnotateFile().then(m => m.EditPdfIcon), { loading: LoadingIcon }),
    'sign-pdf': dynamic(() => EditAnnotateFile().then(m => m.SignPdfIcon), { loading: LoadingIcon }),
    'crop-pdf': dynamic(() => EditAnnotateFile().then(m => m.CropPdfIcon), { loading: LoadingIcon }),
    'bookmark': dynamic(() => EditAnnotateFile().then(m => m.BookmarkIcon), { loading: LoadingIcon }),
    'table-of-contents': dynamic(() => EditAnnotateFile().then(m => m.TableOfContentsIcon), { loading: LoadingIcon }),
    'page-numbers': dynamic(() => EditAnnotateFile().then(m => m.PageNumbersIcon), { loading: LoadingIcon }),
    'add-watermark': dynamic(() => EditAnnotateFile().then(m => m.AddWatermarkIcon), { loading: LoadingIcon }),
    'header-footer': dynamic(() => EditAnnotateFile().then(m => m.HeaderFooterIcon), { loading: LoadingIcon }),
    'invert-colors': dynamic(() => EditAnnotateFile().then(m => m.InvertColorsIcon), { loading: LoadingIcon }),
    'background-color': dynamic(() => EditAnnotateFile().then(m => m.BackgroundColorIcon), { loading: LoadingIcon }),
    'text-color': dynamic(() => EditAnnotateFile().then(m => m.TextColorIcon), { loading: LoadingIcon }),
    'add-stamps': dynamic(() => EditAnnotateFile().then(m => m.AddStampsIcon), { loading: LoadingIcon }),
    'remove-annotations': dynamic(() => EditAnnotateFile().then(m => m.RemoveAnnotationsIcon), { loading: LoadingIcon }),
    'form-filler': dynamic(() => EditAnnotateFile().then(m => m.FormFillerIcon), { loading: LoadingIcon }),
    'form-creator': dynamic(() => EditAnnotateFile().then(m => m.FormCreatorIcon), { loading: LoadingIcon }),
    'remove-blank-pages': dynamic(() => EditAnnotateFile().then(m => m.RemoveBlankPagesIcon), { loading: LoadingIcon }),
    'pdf-reader': dynamic(() => EditAnnotateFile().then(m => m.PdfReaderIcon), { loading: LoadingIcon }),

    // Convert to PDF (Green)
    'image-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.ImageToPdfIcon), { loading: LoadingIcon }),
    'jpg-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.JpgToPdfIcon), { loading: LoadingIcon }),
    'png-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.PngToPdfIcon), { loading: LoadingIcon }),
    'webp-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.WebpToPdfIcon), { loading: LoadingIcon }),
    'svg-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.SvgToPdfIcon), { loading: LoadingIcon }),
    'bmp-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.BmpToPdfIcon), { loading: LoadingIcon }),
    'heic-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.HeicToPdfIcon), { loading: LoadingIcon }),
    'tiff-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.TiffToPdfIcon), { loading: LoadingIcon }),
    'psd-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.PsdToPdfIcon), { loading: LoadingIcon }),
    'word-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.WordToPdfIcon), { loading: LoadingIcon }),
    'excel-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.ExcelToPdfIcon), { loading: LoadingIcon }),
    'pptx-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.PptxToPdfIcon), { loading: LoadingIcon }),
    'powerpoint-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.PptxToPdfIcon), { loading: LoadingIcon }),
    'txt-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.TxtToPdfIcon), { loading: LoadingIcon }),
    'json-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.JsonToPdfIcon), { loading: LoadingIcon }),
    'rtf-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.RtfToPdfIcon), { loading: LoadingIcon }),
    'xps-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.XpsToPdfIcon), { loading: LoadingIcon }),
    'epub-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.EpubToPdfIcon), { loading: LoadingIcon }),
    'mobi-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.MobiToPdfIcon), { loading: LoadingIcon }),
    'fb2-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.Fb2ToPdfIcon), { loading: LoadingIcon }),
    'djvu-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.DjvuToPdfIcon), { loading: LoadingIcon }),
    'markdown-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.MarkdownToPdfIcon), { loading: LoadingIcon }),
    'email-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.EmailToPdfIcon), { loading: LoadingIcon }),
    'cbz-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.CbzToPdfIcon), { loading: LoadingIcon }),
    'html-to-pdf': dynamic(() => ConvertToPdfFile().then(m => m.HtmlToPdfIcon), { loading: LoadingIcon }),

    // Convert from PDF (Blue)
    'pdf-to-jpg': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToJpgIcon), { loading: LoadingIcon }),
    'pdf-to-png': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToPngIcon), { loading: LoadingIcon }),
    'pdf-to-webp': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToWebpIcon), { loading: LoadingIcon }),
    'pdf-to-docx': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToDocxIcon), { loading: LoadingIcon }),
    'pdf-to-word': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToWordIcon), { loading: LoadingIcon }),
    'pdf-to-excel': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToExcelIcon), { loading: LoadingIcon }),
    'pdf-to-pptx': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToPptxIcon), { loading: LoadingIcon }),
    'pdf-to-powerpoint': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToPptxIcon), { loading: LoadingIcon }),
    'pdf-to-txt': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToTxtIcon), { loading: LoadingIcon }),
    'pdf-to-html': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToHtmlIcon), { loading: LoadingIcon }),
    'pdf-to-svg': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToSvgIcon), { loading: LoadingIcon }),
    'pdf-to-pdfa': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToPdfaIcon), { loading: LoadingIcon }),
    'extract-images': dynamic(() => ConvertFromPdfFile().then(m => m.ExtractImagesIcon), { loading: LoadingIcon }),
    'extract-text': dynamic(() => ConvertFromPdfFile().then(m => m.ExtractTextIcon), { loading: LoadingIcon }),
    'pdf-to-bmp': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToBmpIcon), { loading: LoadingIcon }),
    'pdf-to-tiff': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToTiffIcon), { loading: LoadingIcon }),
    'pdf-to-greyscale': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToGreyscaleIcon), { loading: LoadingIcon }),
    'pdf-to-json': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToJsonIcon), { loading: LoadingIcon }),
    'pdf-to-heic': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToHeicIcon), { loading: LoadingIcon }),
    'pdf-to-psd': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToPsdIcon), { loading: LoadingIcon }),
    'pdf-to-xps': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToXpsIcon), { loading: LoadingIcon }),
    'pdf-to-rtf': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToRtfIcon), { loading: LoadingIcon }),
    'pdf-to-epub': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToEpubIcon), { loading: LoadingIcon }),
    'pdf-to-mobi': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToMobiIcon), { loading: LoadingIcon }),
    'pdf-to-djvu': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToDjvuIcon), { loading: LoadingIcon }),
    'pdf-to-fb2': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToFb2Icon), { loading: LoadingIcon }),
    'pdf-to-email': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToEmailIcon), { loading: LoadingIcon }),
    'pdf-to-cbz': dynamic(() => ConvertFromPdfFile().then(m => m.PdfToCbzIcon), { loading: LoadingIcon }),
    'rasterize-pdf': dynamic(() => ConvertFromPdfFile().then(m => m.RasterizePdfIcon), { loading: LoadingIcon }),
    'extract-tables': dynamic(() => ConvertFromPdfFile().then(m => m.ExtractTablesIcon), { loading: LoadingIcon }),

    // Optimize & Repair (Purple)
    'flatten-pdf': dynamic(() => OptimizeRepairFile().then(m => m.FlattenPdfIcon), { loading: LoadingIcon }),
    'repair-pdf': dynamic(() => OptimizeRepairFile().then(m => m.RepairPdfIcon), { loading: LoadingIcon }),
    'linearize-pdf': dynamic(() => OptimizeRepairFile().then(m => m.LinearizePdfIcon), { loading: LoadingIcon }),
    'remove-objects': dynamic(() => OptimizeRepairFile().then(m => m.RemoveObjectsIcon), { loading: LoadingIcon }),
    'sanitize-pdf': dynamic(() => OptimizeRepairFile().then(m => m.SanitizePdfIcon), { loading: LoadingIcon }),
    'optimize-pdf': dynamic(() => OptimizeRepairFile().then(m => m.OptimizePdfIcon), { loading: LoadingIcon }),
    'grayscale-pdf': dynamic(() => OptimizeRepairFile().then(m => m.GrayscalePdfIcon), { loading: LoadingIcon }),
    'validate-pdf': dynamic(() => OptimizeRepairFile().then(m => m.ValidatePdfIcon), { loading: LoadingIcon }),
    'fix-page-size': dynamic(() => OptimizeRepairFile().then(m => m.FixPageSizeIcon), { loading: LoadingIcon }),
    'page-dimensions': dynamic(() => OptimizeRepairFile().then(m => m.PageDimensionsIcon), { loading: LoadingIcon }),
    'remove-restrictions': dynamic(() => OptimizeRepairFile().then(m => m.RemoveRestrictionsIcon), { loading: LoadingIcon }),
    'deskew-pdf': dynamic(() => OptimizeRepairFile().then(m => m.DeskewPdfIcon), { loading: LoadingIcon }),
    'font-to-outline': dynamic(() => OptimizeRepairFile().then(m => m.FontToOutlineIcon), { loading: LoadingIcon }),
    'ocg-manager': dynamic(() => OptimizeRepairFile().then(m => m.OcgManagerIcon), { loading: LoadingIcon }),

    // Secure PDF (Slate)
    'protect-pdf': dynamic(() => SecurePdfFile().then(m => m.ProtectPdfIcon), { loading: LoadingIcon }),
    'decrypt-pdf': dynamic(() => SecurePdfFile().then(m => m.UnlockPdfIcon), { loading: LoadingIcon }),
    'unlock-pdf': dynamic(() => SecurePdfFile().then(m => m.UnlockPdfIcon), { loading: LoadingIcon }),
    'encrypt-pdf': dynamic(() => SecurePdfFile().then(m => m.EncryptPdfIcon), { loading: LoadingIcon }),
    'redact-pdf': dynamic(() => SecurePdfFile().then(m => m.RedactPdfIcon), { loading: LoadingIcon }),
    'sign-with-cert': dynamic(() => SecurePdfFile().then(m => m.SignWithCertIcon), { loading: LoadingIcon }),
    'digital-signature': dynamic(() => SecurePdfFile().then(m => m.SignWithCertIcon), { loading: LoadingIcon }),
    'permissions': dynamic(() => SecurePdfFile().then(m => m.PermissionsIcon), { loading: LoadingIcon }),
    'change-permissions': dynamic(() => SecurePdfFile().then(m => m.PermissionsIcon), { loading: LoadingIcon }),
    'remove-metadata': dynamic(() => SecurePdfFile().then(m => m.RemoveMetadataIcon), { loading: LoadingIcon }),
};

// Default fallback icon
export const DefaultToolIcon = dynamic(() => MiscellaneousFile().then(m => m.DefaultToolIcon), { loading: LoadingIcon });

// Get tool icon component by slug
export function getToolIcon(slug: string): React.ComponentType<ToolIconProps> {
    const normalizedSlug = slug.replace(/_/g, '-');
    return TOOL_ICONS[normalizedSlug] || DefaultToolIcon;
}

// Get category color
export function getCategoryColor(category: string): string {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || '#666666';
}
