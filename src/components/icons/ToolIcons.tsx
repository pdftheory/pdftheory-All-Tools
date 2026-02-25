'use client';

import React from 'react';

// Export type for all icon components
export interface ToolIconProps {
    className?: string;
    size?: number;
}

// Re-export categorized icons for external use
export * from './tool-icons/OrganizeManageIcons';
export * from './tool-icons/EditAnnotateIcons';
export * from './tool-icons/ConvertToPdfIcons';
export * from './tool-icons/ConvertFromPdfIcons';
export * from './tool-icons/OptimizeRepairIcons';
export * from './tool-icons/SecurePdfIcons';
export * from './tool-icons/MiscellaneousIcons';

// Internal imports for the TOOL_ICONS map
import * as OrganizeManage from './tool-icons/OrganizeManageIcons';
import * as EditAnnotate from './tool-icons/EditAnnotateIcons';
import * as ConvertToPdf from './tool-icons/ConvertToPdfIcons';
import * as ConvertFromPdf from './tool-icons/ConvertFromPdfIcons';
import * as OptimizeRepair from './tool-icons/OptimizeRepairIcons';
import * as SecurePdf from './tool-icons/SecurePdfIcons';
import { DefaultToolIcon } from './tool-icons/MiscellaneousIcons';

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
 * TOOL_ICONS Map (Slug -> Component)
 */
export const TOOL_ICONS: Record<string, React.FC<ToolIconProps>> = {
    // Organize & Manage (Red)
    'merge-pdf': OrganizeManage.MergePdfIcon,
    'split-pdf': OrganizeManage.SplitPdfIcon,
    'organize-pdf': OrganizeManage.OrganizePdfIcon,
    'extract-pages': OrganizeManage.ExtractPagesIcon,
    'delete-pages': OrganizeManage.DeletePagesIcon,
    'rotate-pdf': OrganizeManage.RotatePdfIcon,
    'rotate-custom': OrganizeManage.RotateCustomIcon,
    'reverse-pages': OrganizeManage.ReversePagesIcon,
    'alternate-merge': OrganizeManage.AlternateMergeIcon,
    'n-up-pdf': OrganizeManage.NupPdfIcon,
    'grid-combine': OrganizeManage.GridCombineIcon,
    'combine-single-page': OrganizeManage.CombineSinglePageIcon,
    'add-blank-page': OrganizeManage.AddBlankPageIcon,
    'divide-pages': OrganizeManage.DividePagesIcon,
    'pdf-multi-tool': OrganizeManage.PdfMultiToolIcon,
    'pdf-to-zip': OrganizeManage.PdfToZipIcon,
    'compare-pdfs': OrganizeManage.ComparePdfsIcon,
    'posterize-pdf': OrganizeManage.PosterizePdfIcon,
    'ocr-pdf': OrganizeManage.OcrPdfIcon,
    'pdf-booklet': OrganizeManage.PdfBookletIcon,
    'pdf-workflow': OrganizeManage.PdfWorkflowIcon,
    'add-attachments': OrganizeManage.AddAttachmentsIcon,
    'extract-attachments': OrganizeManage.ExtractAttachmentsIcon,
    'edit-attachments': OrganizeManage.EditAttachmentsIcon,
    'view-metadata': OrganizeManage.ViewMetadataIcon,
    'add-metadata': OrganizeManage.AddMetadataIcon,
    'edit-metadata': OrganizeManage.EditMetadataIcon,
    'compress-pdf': OrganizeManage.CompressPdfIcon,

    // Edit & Annotate (Orange)
    'edit-pdf': EditAnnotate.EditPdfIcon,
    'sign-pdf': EditAnnotate.SignPdfIcon,
    'crop-pdf': EditAnnotate.CropPdfIcon,
    'bookmark': EditAnnotate.BookmarkIcon,
    'table-of-contents': EditAnnotate.TableOfContentsIcon,
    'page-numbers': EditAnnotate.PageNumbersIcon,
    'add-watermark': EditAnnotate.AddWatermarkIcon,
    'header-footer': EditAnnotate.HeaderFooterIcon,
    'invert-colors': EditAnnotate.InvertColorsIcon,
    'background-color': EditAnnotate.BackgroundColorIcon,
    'text-color': EditAnnotate.TextColorIcon,
    'add-stamps': EditAnnotate.AddStampsIcon,
    'remove-annotations': EditAnnotate.RemoveAnnotationsIcon,
    'form-filler': EditAnnotate.FormFillerIcon,
    'form-creator': EditAnnotate.FormCreatorIcon,
    'remove-blank-pages': EditAnnotate.RemoveBlankPagesIcon,
    'pdf-reader': EditAnnotate.PdfReaderIcon,

    // Convert to PDF (Green)
    'image-to-pdf': ConvertToPdf.ImageToPdfIcon,
    'jpg-to-pdf': ConvertToPdf.JpgToPdfIcon,
    'png-to-pdf': ConvertToPdf.PngToPdfIcon,
    'webp-to-pdf': ConvertToPdf.WebpToPdfIcon,
    'svg-to-pdf': ConvertToPdf.SvgToPdfIcon,
    'bmp-to-pdf': ConvertToPdf.BmpToPdfIcon,
    'heic-to-pdf': ConvertToPdf.HeicToPdfIcon,
    'tiff-to-pdf': ConvertToPdf.TiffToPdfIcon,
    'psd-to-pdf': ConvertToPdf.PsdToPdfIcon,
    'word-to-pdf': ConvertToPdf.WordToPdfIcon,
    'excel-to-pdf': ConvertToPdf.ExcelToPdfIcon,
    'pptx-to-pdf': ConvertToPdf.PptxToPdfIcon,
    'powerpoint-to-pdf': ConvertToPdf.PptxToPdfIcon,
    'txt-to-pdf': ConvertToPdf.TxtToPdfIcon,
    'json-to-pdf': ConvertToPdf.JsonToPdfIcon,
    'rtf-to-pdf': ConvertToPdf.RtfToPdfIcon,
    'xps-to-pdf': ConvertToPdf.XpsToPdfIcon,
    'epub-to-pdf': ConvertToPdf.EpubToPdfIcon,
    'mobi-to-pdf': ConvertToPdf.MobiToPdfIcon,
    'fb2-to-pdf': ConvertToPdf.Fb2ToPdfIcon,
    'djvu-to-pdf': ConvertToPdf.DjvuToPdfIcon,
    'markdown-to-pdf': ConvertToPdf.MarkdownToPdfIcon,
    'email-to-pdf': ConvertToPdf.EmailToPdfIcon,
    'cbz-to-pdf': ConvertToPdf.CbzToPdfIcon,
    'html-to-pdf': ConvertToPdf.HtmlToPdfIcon,

    // Convert from PDF (Blue)
    'pdf-to-jpg': ConvertFromPdf.PdfToJpgIcon,
    'pdf-to-png': ConvertFromPdf.PdfToPngIcon,
    'pdf-to-webp': ConvertFromPdf.PdfToWebpIcon,
    'pdf-to-docx': ConvertFromPdf.PdfToDocxIcon,
    'pdf-to-word': ConvertFromPdf.PdfToWordIcon,
    'pdf-to-excel': ConvertFromPdf.PdfToExcelIcon,
    'pdf-to-pptx': ConvertFromPdf.PdfToPptxIcon,
    'pdf-to-powerpoint': ConvertFromPdf.PdfToPptxIcon,
    'pdf-to-txt': ConvertFromPdf.PdfToTxtIcon,
    'pdf-to-html': ConvertFromPdf.PdfToHtmlIcon,
    'pdf-to-svg': ConvertFromPdf.PdfToSvgIcon,
    'pdf-to-pdfa': ConvertFromPdf.PdfToPdfaIcon,
    'extract-images': ConvertFromPdf.ExtractImagesIcon,
    'extract-text': ConvertFromPdf.ExtractTextIcon,
    'pdf-to-bmp': ConvertFromPdf.PdfToBmpIcon,
    'pdf-to-tiff': ConvertFromPdf.PdfToTiffIcon,
    'pdf-to-greyscale': ConvertFromPdf.PdfToGreyscaleIcon,
    'pdf-to-json': ConvertFromPdf.PdfToJsonIcon,
    'pdf-to-heic': ConvertFromPdf.PdfToHeicIcon,
    'pdf-to-psd': ConvertFromPdf.PdfToPsdIcon,
    'pdf-to-xps': ConvertFromPdf.PdfToXpsIcon,
    'pdf-to-rtf': ConvertFromPdf.PdfToRtfIcon,
    'pdf-to-epub': ConvertFromPdf.PdfToEpubIcon,
    'pdf-to-mobi': ConvertFromPdf.PdfToMobiIcon,
    'pdf-to-djvu': ConvertFromPdf.PdfToDjvuIcon,
    'pdf-to-fb2': ConvertFromPdf.PdfToFb2Icon,
    'pdf-to-email': ConvertFromPdf.PdfToEmailIcon,
    'pdf-to-cbz': ConvertFromPdf.PdfToCbzIcon,
    'rasterize-pdf': ConvertFromPdf.RasterizePdfIcon,
    'extract-tables': ConvertFromPdf.ExtractTablesIcon,

    // Optimize & Repair (Purple)
    'flatten-pdf': OptimizeRepair.FlattenPdfIcon,
    'repair-pdf': OptimizeRepair.RepairPdfIcon,
    'linearize-pdf': OptimizeRepair.LinearizePdfIcon,
    'remove-objects': OptimizeRepair.RemoveObjectsIcon,
    'sanitize-pdf': OptimizeRepair.SanitizePdfIcon,
    'optimize-pdf': OptimizeRepair.OptimizePdfIcon,
    'grayscale-pdf': OptimizeRepair.GrayscalePdfIcon,
    'validate-pdf': OptimizeRepair.ValidatePdfIcon,
    'fix-page-size': OptimizeRepair.FixPageSizeIcon,
    'page-dimensions': OptimizeRepair.PageDimensionsIcon,
    'remove-restrictions': OptimizeRepair.RemoveRestrictionsIcon,
    'deskew-pdf': OptimizeRepair.DeskewPdfIcon,
    'font-to-outline': OptimizeRepair.FontToOutlineIcon,
    'ocg-manager': OptimizeRepair.OcgManagerIcon,

    // Secure PDF (Slate)
    'protect-pdf': SecurePdf.ProtectPdfIcon,
    'decrypt-pdf': SecurePdf.UnlockPdfIcon,
    'unlock-pdf': SecurePdf.UnlockPdfIcon,
    'encrypt-pdf': SecurePdf.EncryptPdfIcon,
    'redact-pdf': SecurePdf.RedactPdfIcon,
    'sign-with-cert': SecurePdf.SignWithCertIcon,
    'digital-signature': SecurePdf.SignWithCertIcon,
    'permissions': SecurePdf.PermissionsIcon,
    'change-permissions': SecurePdf.PermissionsIcon,
    'remove-metadata': SecurePdf.RemoveMetadataIcon,
};

// Get tool icon by slug
export function getToolIcon(slug: string): React.FC<ToolIconProps> | undefined {
    return TOOL_ICONS[slug];
}

// Get category color
export function getCategoryColor(category: string): string {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || '#666666';
}
