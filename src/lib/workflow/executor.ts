/**
 * Workflow Node Executor
 * Executes individual workflow nodes by calling the appropriate PDF processors
 * 
 * This module provides type-safe execution of PDF processing workflows by:
 * 1. Using Processor classes directly for full type safety
 * 2. Converting workflow input files to proper File objects
 * 3. Mapping workflow settings to processor options
 */

import { WorkflowNode, WorkflowEdge, WorkflowOutputFile } from '@/types/workflow';
import type { ProcessOutput, ProgressCallback, ProcessInput } from '@/types/pdf';
import { PDFErrorCode, ErrorCategory } from '@/types/pdf';

// Import Processor classes
import { MergePDFProcessor } from '@/lib/pdf/processors/merge';
import { SplitPDFProcessor } from '@/lib/pdf/processors/split';
import { RotatePDFProcessor } from '@/lib/pdf/processors/rotate';
import { CompressPDFProcessor, type CompressionQuality, type CompressPDFOptions } from '@/lib/pdf/processors/compress';

import { FlattenPDFProcessor } from '@/lib/pdf/processors/flatten';
import { ExtractPagesPDFProcessor } from '@/lib/pdf/processors/extract';
import { DeletePagesPDFProcessor } from '@/lib/pdf/processors/delete';
import { AlternateMergePDFProcessor } from '@/lib/pdf/processors/alternate-merge';
import { DividePagesPDFProcessor } from '@/lib/pdf/processors/divide';
import { AddBlankPagePDFProcessor } from '@/lib/pdf/processors/add-blank-page';
import { ReversePagesPDFProcessor } from '@/lib/pdf/processors/reverse';
import { NUpPDFProcessor } from '@/lib/pdf/processors/n-up';
import { CombineSinglePagePDFProcessor } from '@/lib/pdf/processors/combine-single-page';
import { PosterizePDFProcessor } from '@/lib/pdf/processors/posterize';
import { EditMetadataPDFProcessor } from '@/lib/pdf/processors/edit-metadata';
import { TableOfContentsProcessor } from '@/lib/pdf/processors/table-of-contents';
import { PageNumbersProcessor } from '@/lib/pdf/processors/page-numbers';
import { WatermarkProcessor } from '@/lib/pdf/processors/watermark';
import { HeaderFooterProcessor } from '@/lib/pdf/processors/header-footer';
import { InvertColorsProcessor } from '@/lib/pdf/processors/invert-colors';
import { BackgroundColorProcessor } from '@/lib/pdf/processors/background-color';
import { TextColorProcessor } from '@/lib/pdf/processors/text-color';
import { RemoveAnnotationsProcessor } from '@/lib/pdf/processors/remove-annotations';
import { RemoveBlankPagesProcessor } from '@/lib/pdf/processors/remove-blank-pages';
import { ImageToPDFProcessor } from '@/lib/pdf/processors/image-to-pdf';
import { TextToPDFProcessor } from '@/lib/pdf/processors/text-to-pdf';
import { JSONToPDFProcessor } from '@/lib/pdf/processors/json-to-pdf';
import { PDFToImageProcessor } from '@/lib/pdf/processors/pdf-to-image';
import { PDFToSVGProcessor } from '@/lib/pdf/processors/pdf-to-svg';
import { PDFToGreyscaleProcessor } from '@/lib/pdf/processors/pdf-to-greyscale';
import { PDFToJSONProcessor } from '@/lib/pdf/processors/pdf-to-json';
import { OCRProcessor } from '@/lib/pdf/processors/ocr';
import { FixPageSizeProcessor } from '@/lib/pdf/processors/fix-page-size';
import { LinearizePDFProcessor } from '@/lib/pdf/processors/linearize';
import { RemoveRestrictionsProcessor } from '@/lib/pdf/processors/remove-restrictions';
import { RepairPDFProcessor } from '@/lib/pdf/processors/repair';
import { EncryptPDFProcessor } from '@/lib/pdf/processors/encrypt';
import { DecryptPDFProcessor } from '@/lib/pdf/processors/decrypt';
import { SanitizePDFProcessor } from '@/lib/pdf/processors/sanitize';
import { RemoveMetadataProcessor } from '@/lib/pdf/processors/remove-metadata';
import { ChangePermissionsProcessor } from '@/lib/pdf/processors/change-permissions';
import { WordToPDFProcessor } from '@/lib/pdf/processors/word-to-pdf';
import { ExcelToPDFProcessor } from '@/lib/pdf/processors/excel-to-pdf';
import { PPTXToPDFProcessor } from '@/lib/pdf/processors/pptx-to-pdf';
import { EPUBToPDFProcessor } from '@/lib/pdf/processors/epub-to-pdf';
import { FB2ToPDFProcessor } from '@/lib/pdf/processors/fb2-to-pdf';
import { MOBIToPDFProcessor } from '@/lib/pdf/processors/mobi-to-pdf';
import { RTFToPDFProcessor } from '@/lib/pdf/processors/rtf-to-pdf';
import { XPSToPDFProcessor } from '@/lib/pdf/processors/xps-to-pdf';
import { GridCombineProcessor } from '@/lib/pdf/processors/grid-combine';
import { ExtractImagesPDFProcessor } from '@/lib/pdf/processors/extract-images';
import { PDFToZipProcessor } from '@/lib/pdf/processors/pdf-to-zip';
import { OrganizePDFProcessor } from '@/lib/pdf/processors/organize';
import { DeskewPDFProcessor } from '@/lib/pdf/processors/deskew';
import { EmailToPDFProcessor } from '@/lib/pdf/processors/email-to-pdf';
import { FontToOutlineProcessor } from '@/lib/pdf/processors/font-to-outline';
import { StampsProcessor } from '@/lib/pdf/processors/stamps';
import { DJVUToPDFProcessor } from '@/lib/pdf/processors/djvu-to-pdf';
import { CbzToPDFProcessor } from '@/lib/pdf/processors/cbz-to-pdf';
import { BookletPDFProcessor } from '@/lib/pdf/processors/booklet';
import { MarkdownToPDFProcessor } from '@/lib/pdf/processors/markdown-to-pdf';
import { ExtractTablesProcessor } from '@/lib/pdf/processors/extract-tables';
import { RasterizePDFProcessor } from '@/lib/pdf/processors/rasterize';
import { PdfToPdfAProcessor } from '@/lib/pdf/processors/pdf-to-pdfa';
import { PDFToDocxProcessor } from '@/lib/pdf/processors/pdf-to-docx';
import { PDFToPptxProcessor } from '@/lib/pdf/processors/pdf-to-pptx';
import { PDFToExcelProcessor } from '@/lib/pdf/processors/pdf-to-excel';
import {
    PDFToTextProcessor,
    PDFToHTMLProcessor,
    PDFToHEICProcessor,
    PDFToPSDProcessor,
    PDFToXPSProcessor,
    PDFToRTFProcessor,
    PDFToEPUBProcessor,
    PDFToMOBIProcessor,
    PDFToDJVUProcessor,
    PDFToFB2Processor,
    PDFToEmailProcessor,
    PDFToCBZProcessor
} from '@/lib/pdf/processors';

/**
 * Convert WorkflowOutputFile or Blob to File with proper metadata
 */
function convertToFile(input: File | Blob | WorkflowOutputFile, index: number, defaultName: string = 'input'): File {
    if (input instanceof File) return input;

    if ('blob' in input && 'filename' in input) {
        // WorkflowOutputFile with metadata
        const filename = input.filename || `${defaultName}_${index}.pdf`;
        let type = 'application/pdf';

        // Detect MIME type from extension
        if (filename.endsWith('.zip')) type = 'application/zip';
        else if (filename.endsWith('.png')) type = 'image/png';
        else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) type = 'image/jpeg';
        else if (filename.endsWith('.webp')) type = 'image/webp';
        else if (filename.endsWith('.svg')) type = 'image/svg+xml';
        else if (filename.endsWith('.txt')) type = 'text/plain';
        else if (filename.endsWith('.json')) type = 'application/json';

        return new File([input.blob], filename, { type });
    }

    // Plain Blob without metadata - TypeScript now knows input is Blob here
    return new File([input as Blob], `${defaultName}_${index}.pdf`, { type: 'application/pdf' });
}

/**
 * Create ProcessInput from files and settings
 */
function createProcessInput(files: File[], settings: Record<string, unknown>): ProcessInput {
    return {
        files,
        options: settings,
    };
}

/**
 * Execute a single workflow node with type-safe processor classes
 */
export async function executeNode(
    node: WorkflowNode,
    inputFiles: (File | Blob | WorkflowOutputFile)[],
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const toolId = node.data.toolId;
    const settings = node.data.settings || {};

    // Convert all inputs to File objects with proper metadata
    const files: File[] = inputFiles.map((f, i) =>
        convertToFile(f, i, `workflow_${toolId}`)
    );

    try {
        switch (toolId) {
            // ==================== Organize & Manage ====================
            case 'merge-pdf': {
                const processor = new MergePDFProcessor();
                const options = {
                    preserveBookmarks: settings.preserveBookmarks !== undefined
                        ? Boolean(settings.preserveBookmarks)
                        : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'compress-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new CompressPDFProcessor();
                const options: Partial<CompressPDFOptions> = {
                    quality: (settings.quality as CompressionQuality) || 'standard',
                    imageQuality: settings.imageQuality !== undefined ? Number(settings.imageQuality) : undefined,
                    targetDpi: settings.targetDpi !== undefined ? Number(settings.targetDpi) : undefined,
                    optimizeImages: settings.optimizeImages !== undefined ? Boolean(settings.optimizeImages) : undefined,
                    removeBlankPages: settings.removeBlankPages !== undefined ? Boolean(settings.removeBlankPages) : undefined,
                    removeDuplicatePages: settings.removeDuplicatePages !== undefined ? Boolean(settings.removeDuplicatePages) : undefined,
                    flattenForms: settings.flattenForms !== undefined ? Boolean(settings.flattenForms) : undefined,
                    removeMetadata: settings.removeMetadata !== undefined ? Boolean(settings.removeMetadata) : undefined,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'split-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const mode = String(settings.splitMode || 'every');
                const pagesPerSplit = Number(settings.pagesPerSplit) || 1;

                // Calculate ranges based on mode
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                let ranges: { start: number; end: number }[] = [];
                if (mode === 'every') {
                    for (let i = 0; i < totalPages; i += pagesPerSplit) {
                        ranges.push({ start: i + 1, end: Math.min(i + pagesPerSplit, totalPages) });
                    }
                } else if (mode === 'ranges' && settings.pageRanges) {
                    // Parse page ranges like "1-3,5,7-9"
                    const { parsePageRanges } = await import('@/lib/pdf/processors/split');
                    ranges = parsePageRanges(String(settings.pageRanges), totalPages);
                } else {
                    // Split every page
                    for (let i = 1; i <= totalPages; i++) {
                        ranges.push({ start: i, end: i });
                    }
                }

                const processor = new SplitPDFProcessor();
                return await processor.process(createProcessInput(files, { ranges }), onProgress);
            }

            case 'extract-pages': {
                if (files.length === 0) throw new Error('No input file');


                // Need total pages for parsing the selection
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.pageRange as any || 'all', totalPages);

                const processor = new ExtractPagesPDFProcessor();
                return await processor.process(createProcessInput(files, { pages }), onProgress);
            }

            case 'delete-pages': {
                if (files.length === 0) throw new Error('No input file');

                // Need total pages for parsing the selection
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                // For delete, we default to page 1 if not specified, 
                // because we cannot delete 'all' pages.
                const pages = getPageNumbers(settings.pageRange as any || '1', totalPages);

                const processor = new DeletePagesPDFProcessor();
                return await processor.process(createProcessInput(files, { pages }), onProgress);
            }

            case 'rotate-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const angle = Number(settings.angle) || 90;

                // Get page count and applyTo setting
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.applyTo as any || 'all', totalPages);

                const processor = new RotatePDFProcessor();
                return await processor.process(createProcessInput(files, { angle, pages }), onProgress);
            }

            case 'alternate-merge': {
                const processor = new AlternateMergePDFProcessor();
                const options = {
                    reverseSecond: settings.reverseSecond !== undefined
                        ? Boolean(settings.reverseSecond)
                        : false,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'divide-pages': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new DividePagesPDFProcessor();
                const divisionType = String(settings.divisionType || 'vertical') as 'vertical' | 'horizontal' | 'grid-2x2' | 'grid-3x3';
                return await processor.process(createProcessInput(files, { divisionType }), onProgress);
            }

            case 'add-blank-page': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new AddBlankPagePDFProcessor();
                const positionStr = String(settings.position || 'end');
                const count = Number(settings.count) || 1;

                // Convert position string to options
                let options: Record<string, unknown> = { count };
                if (positionStr === 'end') {
                    options.position = 'end';
                } else if (positionStr === 'beginning') {
                    options.position = 'beginning';
                } else if (!isNaN(Number(positionStr))) {
                    options.position = Number(positionStr);
                }

                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'reverse-pages': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ReversePagesPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'n-up-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const pps = Number(settings.pagesPerSheet) || 4;
                const validPps = [2, 4, 9, 16].includes(pps) ? pps as 2 | 4 | 9 | 16 : 4;

                const processor = new NUpPDFProcessor();
                const options = {
                    pagesPerSheet: validPps,
                    pageSize: String(settings.pageSize || 'A4') as 'A4' | 'Letter' | 'Legal' | 'A3',
                    orientation: String(settings.orientation || 'auto') as 'auto' | 'portrait' | 'landscape',
                    useMargins: settings.useMargins !== undefined ? Boolean(settings.useMargins) : true,
                    addBorder: settings.addBorder !== undefined ? Boolean(settings.addBorder) : false,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'combine-single-page': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new CombineSinglePagePDFProcessor();
                const options = {
                    orientation: String(settings.orientation || 'vertical') as 'vertical' | 'horizontal',
                    spacing: Number(settings.spacing) || 0,
                    backgroundColor: String(settings.backgroundColor || '#FFFFFF'),
                    addSeparator: settings.addSeparator !== undefined ? Boolean(settings.addSeparator) : false,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'posterize-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PosterizePDFProcessor();
                const options = {
                    cols: Number(settings.columns) || 2,
                    rows: Number(settings.rows) || 2,
                    overlap: Number(settings.overlap) || 10,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'grid-combine': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new GridCombineProcessor();
                const options = {
                    gridLayout: String(settings.gridLayout || '2x2'),
                    spacing: Number(settings.spacing) || 10,
                    pageSize: String(settings.pageSize || 'A4') as any,
                    orientation: String(settings.orientation || 'landscape') as any,
                    useMargins: settings.useMargins !== undefined ? Boolean(settings.useMargins) : true,
                    addBorder: settings.addBorder !== undefined ? Boolean(settings.addBorder) : true,
                    borderColor: String(settings.borderColor || '#CCCCCC'),
                    fillMode: String(settings.fillMode || 'leave-empty') as any,
                    pageMode: String(settings.pageMode || 'first-page-only') as any,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'edit-metadata': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new EditMetadataPDFProcessor();
                const metadata: Record<string, any> = {};
                if (settings.title) metadata.title = String(settings.title);
                if (settings.author) metadata.author = String(settings.author);
                if (settings.subject) metadata.subject = String(settings.subject);
                if (settings.keywords) metadata.keywords = String(settings.keywords).split(',').map(k => k.trim());
                if (settings.creator) metadata.creator = String(settings.creator);
                if (settings.producer) metadata.producer = String(settings.producer);

                const options = {
                    metadata,
                    updateModificationDate: settings.updateModificationDate !== undefined
                        ? Boolean(settings.updateModificationDate)
                        : true
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            // ==================== Edit & Annotate ====================
            case 'table-of-contents': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new TableOfContentsProcessor();
                const options = {
                    title: String(settings.title || 'Table of Contents'),
                    fontSize: Number(settings.fontSize) || 12,
                    fontFamily: String(settings.fontFamily || 'helv'),
                    addBookmark: settings.addBookmark !== undefined ? Boolean(settings.addBookmark) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'page-numbers': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PageNumbersProcessor();
                const options = {
                    position: String(settings.position || 'bottom-center') as any,
                    format: String(settings.format || 'number') as any,
                    startNumber: Number(settings.startNumber) || 1,
                    fontSize: Number(settings.fontSize) || 12,
                    fontColor: String(settings.fontColor || '#000000'),
                    margin: Number(settings.margin) || 30,
                    skipFirstPage: settings.skipFirstPage !== undefined ? Boolean(settings.skipFirstPage) : false,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'add-watermark': {
                if (files.length === 0) throw new Error('No input file');

                // Get page count and applyTo setting
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.applyTo as any || 'all', totalPages);

                const processor = new WatermarkProcessor();
                const options: Record<string, any> = {
                    type: String(settings.watermarkType || 'text') as 'text' | 'image',
                    text: String(settings.text || 'WATERMARK'),
                    fontSize: Number(settings.fontSize) || 48,
                    color: String(settings.color || '#888888'),
                    opacity: Number(settings.opacity) || 0.3,
                    rotation: Number(settings.rotation) || -45,
                    position: String(settings.position || 'center') as any,
                    pages,
                };

                if (options.type === 'image' && settings.imageFile) {
                    const imageFile = settings.imageFile as File | Blob;
                    try {
                        options.imageData = await imageFile.arrayBuffer();
                        // Better detection: check if it contains 'png', otherwise default to 'jpg' 
                        // (covers image/jpeg, image/jpg, etc.)
                        options.imageType = imageFile.type.toLowerCase().includes('png') ? 'png' : 'jpg';
                    } catch (e) {
                        console.error('[Executor] Failed to read watermark image file:', e);
                        throw new Error('Could not read the uploaded watermark image. Please try again or use a different file.');
                    }
                }

                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'header-footer': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new HeaderFooterProcessor();
                const options = {
                    header: settings.headerText ? { center: String(settings.headerText) } : undefined,
                    footer: settings.footerText ? { center: String(settings.footerText) } : undefined,
                    fontSize: Number(settings.fontSize) || 10,
                    fontColor: String(settings.fontColor || '#000000'),
                    margin: Number(settings.margin) || 30,
                    pageRange: settings.pageRange ? String(settings.pageRange) : 'all',
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'invert-colors': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new InvertColorsProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'background-color': {
                if (files.length === 0) throw new Error('No input file');

                // Get page count and applyTo setting
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.applyTo as any || 'all', totalPages);

                const processor = new BackgroundColorProcessor();
                const options = {
                    color: String(settings.color || '#fefce8'),
                    pages,
                    opacity: settings.opacity !== undefined ? Number(settings.opacity) : 1,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'text-color': {
                if (files.length === 0) throw new Error('No input file');

                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.applyTo as any || 'all', totalPages);

                const processor = new TextColorProcessor();
                const options = {
                    color: String(settings.color || '#ff0000'),
                    pages,
                    mode: (settings.mode as 'dark' | 'light') || 'dark',
                    threshold: Number(settings.threshold) || 128,
                    scope: (settings.scope as 'all' | 'word' | 'line') || 'all',
                    searchValue: String(settings.searchValue || ''),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'remove-annotations': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RemoveAnnotationsProcessor();
                const options = {
                    removeComments: settings.removeComments !== undefined ? Boolean(settings.removeComments) : true,
                    removeHighlights: settings.removeHighlights !== undefined ? Boolean(settings.removeHighlights) : true,
                    removeLinks: settings.removeLinks !== undefined ? Boolean(settings.removeLinks) : false,
                    removeShapes: Boolean(settings.removeShapes),
                    removeImages: Boolean(settings.removeImages),
                    removeForms: Boolean(settings.removeForms),
                    removeJS: Boolean(settings.removeJS),
                    removeMetadata: Boolean(settings.removeMetadata),
                    removeBookmarks: Boolean(settings.removeBookmarks),
                    removeRedactions: Boolean(settings.removeRedactions),
                    removeUnderline: Boolean(settings.removeUnderline),
                    removeStrikeOut: Boolean(settings.removeStrikeOut),
                    removeSquiggly: Boolean(settings.removeSquiggly),
                    removeDrawings: Boolean(settings.removeDrawings),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'remove-blank-pages': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RemoveBlankPagesProcessor();
                const options = {
                    threshold: Number(settings.threshold) || 99,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            // ==================== Convert to PDF ====================
            case 'jpg-to-pdf':
            case 'png-to-pdf':
            case 'webp-to-pdf':
            case 'bmp-to-pdf':
            case 'heic-to-pdf':
            case 'tiff-to-pdf':
            case 'psd-to-pdf':
            case 'svg-to-pdf':
            case 'image-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ImageToPDFProcessor();
                const options = {
                    pageSize: String(settings.pageSize || 'A4') as 'A4' | 'LETTER' | 'LEGAL' | 'A3' | 'A5' | 'FIT',
                    orientation: String(settings.orientation || 'auto'),
                    margin: Number(settings.margin) || 36,
                    centerImage: settings.centerImage !== undefined ? Boolean(settings.centerImage) : true,
                    scaleToFit: settings.scaleToFit !== undefined ? Boolean(settings.scaleToFit) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'txt-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new TextToPDFProcessor();
                const options = {
                    fontSize: Number(settings.fontSize) || 12,
                    fontFamily: String(settings.fontFamily || 'Courier'),
                    pageSize: String(settings.pageSize || 'A4'),
                    margin: Number(settings.margin) || 50,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'json-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new JSONToPDFProcessor();
                const options = {
                    fontSize: Number(settings.fontSize) || 10,
                    pageSize: String(settings.pageSize || 'A4'),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'word-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new WordToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'excel-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ExcelToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'ppt-to-pdf':
            case 'pptx-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PPTXToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'epub-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new EPUBToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'fb2-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new FB2ToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'mobi-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new MOBIToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'rtf-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RTFToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'xps-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new XPSToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            // ==================== Convert from PDF ====================
            case 'pdf-to-jpg':
            case 'pdf-to-png':
            case 'pdf-to-webp':
            case 'pdf-to-bmp':
            case 'pdf-to-tiff': {
                if (files.length === 0) throw new Error('No input file');
                const format = toolId.replace('pdf-to-', '') as 'jpg' | 'png' | 'webp' | 'bmp' | 'tiff';

                // Get total pages and parse range
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pages = getPageNumbers(settings.pageRange as any || 'all', totalPages);

                const processor = new PDFToImageProcessor();
                const options = {
                    format: format === 'jpg' ? 'jpeg' : format,
                    quality: Number(settings.quality) || 0.92,
                    scale: Number(settings.scale) || 2,
                    pages: pages.length > 0 ? pages : undefined,
                };

                const imageResult = await processor.process(createProcessInput(files, options), onProgress);

                // If multiple images, package them into a ZIP
                if (imageResult.success && Array.isArray(imageResult.result) && imageResult.result.length > 1) {
                    const JSZip = (await import('jszip')).default;
                    const zip = new JSZip();
                    const baseName = files[0].name.replace(/\.pdf$/i, '');
                    const ext = format === 'jpg' ? 'jpg' : format;

                    (imageResult.result as Blob[]).forEach((blob, i) => {
                        zip.file(`${baseName}_page_${i + 1}.${ext}`, blob);
                    });

                    const zipBlob = await zip.generateAsync({ type: 'blob' });
                    return {
                        success: true,
                        result: zipBlob,
                        filename: `${baseName}_images.zip`,
                        metadata: { pageCount: (imageResult.result as Blob[]).length, format },
                    };
                }

                return imageResult;
            }

            case 'pdf-to-html': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToHTMLProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-svg': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToSVGProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'pdf-to-greyscale': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToGreyscaleProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'pdf-to-json': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToJSONProcessor();
                const options = {
                    extractText: settings.extractText !== undefined ? Boolean(settings.extractText) : true,
                    extractMetadata: settings.extractMetadata !== undefined ? Boolean(settings.extractMetadata) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'extract-images': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ExtractImagesPDFProcessor();
                const options = {
                    format: String(settings.format || 'png'),
                    minSize: Number(settings.minSize) || 100,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'pdf-to-txt': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToTextProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-heic': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToHEICProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-psd': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToPSDProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-xps': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToXPSProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-rtf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToRTFProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-epub': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToEPUBProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-mobi': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToMOBIProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-djvu': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToDJVUProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-fb2': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToFB2Processor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-email': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToEmailProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            case 'pdf-to-cbz': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToCBZProcessor();
                return await processor.process(createProcessInput(files, settings), onProgress);
            }

            // ==================== Optimize & Repair ====================


            case 'flatten-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new FlattenPDFProcessor();
                const options = {
                    flattenForms: settings.flattenForms !== undefined ? Boolean(settings.flattenForms) : true,
                    flattenAnnotations: settings.flattenAnnotations !== undefined ? Boolean(settings.flattenAnnotations) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'fix-page-size': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new FixPageSizeProcessor();
                const options = {
                    targetSize: String(settings.targetSize || 'A4'),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'linearize-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new LinearizePDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'repair-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RepairPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'remove-restrictions': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RemoveRestrictionsProcessor();
                const options = {
                    password: String(settings.password || ''),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'ocr-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new OCRProcessor();
                const options = {
                    language: String(settings.language || 'eng'),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            // ==================== Security ====================
            case 'encrypt-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new EncryptPDFProcessor();
                const options = {
                    userPassword: String(settings.userPassword || ''),
                    ownerPassword: String(settings.ownerPassword || ''),
                    permissions: {
                        printing: settings.allowPrinting !== undefined ? Boolean(settings.allowPrinting) : true,
                        copying: settings.allowCopying !== undefined ? Boolean(settings.allowCopying) : false,
                        modifying: settings.allowModifying !== undefined ? Boolean(settings.allowModifying) : false,
                        annotating: settings.allowAnnotating !== undefined ? Boolean(settings.allowAnnotating) : true,
                    },
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'decrypt-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new DecryptPDFProcessor();
                const options = {
                    password: String(settings.password || ''),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'sanitize-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new SanitizePDFProcessor();
                const options = {
                    removeJavaScript: settings.removeJavaScript !== undefined ? Boolean(settings.removeJavaScript) : true,
                    removeAttachments: settings.removeAttachments !== undefined ? Boolean(settings.removeAttachments) : true,
                    removeLinks: settings.removeLinks !== undefined ? Boolean(settings.removeLinks) : true,
                    flattenForms: settings.flattenForms !== undefined ? Boolean(settings.flattenForms) : true,
                    removeMetadata: settings.removeMetadata !== undefined ? Boolean(settings.removeMetadata) : true,
                    removeAnnotations: settings.removeAnnotations !== undefined ? Boolean(settings.removeAnnotations) : false,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'remove-metadata': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RemoveMetadataProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'change-permissions': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ChangePermissionsProcessor();
                const options = {
                    permissions: {
                        printing: settings.allowPrinting !== undefined ? Boolean(settings.allowPrinting) : true,
                        copying: settings.allowCopying !== undefined ? Boolean(settings.allowCopying) : false,
                        modifying: settings.allowModifying !== undefined ? Boolean(settings.allowModifying) : false,
                        annotating: settings.allowAnnotating !== undefined ? Boolean(settings.allowAnnotating) : true,
                    },
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            // ==================== Additional Tools ====================
            case 'pdf-to-zip': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToZipProcessor();
                const options = {
                    outputFilename: String(settings.filename || 'pdfs.zip'),
                    compressionLevel: Number(settings.compressionLevel) || 6,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'extract-attachments': {
                if (files.length === 0) throw new Error('No input file');
                const { ExtractAttachmentsPDFProcessor } = await import('@/lib/pdf/processors/attachments');
                const processor = new ExtractAttachmentsPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'organize-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const { loadPdfjs } = await import('@/lib/pdf/loader');
                const pdfjs = await loadPdfjs();
                const arrayBuffer = await files[0].arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                const totalPages = pdf.numPages;

                const { getPageNumbers } = await import('@/lib/pdf/utils');
                const pageOrder = getPageNumbers(settings.pageOrder as any || 'all', totalPages);

                const processor = new OrganizePDFProcessor();
                return await processor.process(createProcessInput(files, { pageOrder }), onProgress);
            }

            case 'deskew-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new DeskewPDFProcessor();
                const options = {
                    threshold: Number(settings.threshold) || 10,
                    dpi: Number(settings.dpi) || 150,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'email-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new EmailToPDFProcessor();
                const options = {
                    pageSize: String(settings.pageSize || 'a4') as 'a4' | 'letter' | 'legal',
                    includeCcBcc: settings.includeCcBcc !== undefined ? Boolean(settings.includeCcBcc) : true,
                    embedAttachments: settings.embedAttachments !== undefined ? Boolean(settings.embedAttachments) : true,
                    includeAttachmentsList: settings.includeAttachmentsList !== undefined ? Boolean(settings.includeAttachmentsList) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'font-to-outline': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new FontToOutlineProcessor();
                const options = {
                    dpi: Number(settings.dpi) || 300,
                    preserveSelectableText: settings.preserveSelectableText !== undefined ? Boolean(settings.preserveSelectableText) : false,
                    pageRange: settings.pageRange ? String(settings.pageRange) : undefined,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'add-stamps': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new StampsProcessor();
                const options = {
                    stamps: (settings.stamps as Array<{
                        type: 'preset' | 'image';
                        preset?: string;
                        pageNumber: number;
                        x: number;
                        y: number;
                        width?: number;
                        height?: number;
                    }>) || [],
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }


            case 'djvu-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new DJVUToPDFProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'cbz-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new CbzToPDFProcessor();
                const options = {
                    pageSize: String(settings.pageSize || 'A4') as 'A4' | 'LETTER' | 'LEGAL',
                    fitToPage: settings.fitToPage !== undefined ? Boolean(settings.fitToPage) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'pdf-booklet': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new BookletPDFProcessor();
                const options = {
                    pageSize: String(settings.pageSize || 'A4') as 'A4' | 'LETTER' | 'LEGAL',
                    bindingEdge: String(settings.bindingEdge || 'left') as 'left' | 'right',
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'rasterize-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new RasterizePDFProcessor();
                const options = {
                    dpi: Number(settings.dpi) || 150,
                    imageFormat: String(settings.imageFormat || 'jpeg') as 'jpeg' | 'png',
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'markdown-to-pdf': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new MarkdownToPDFProcessor();
                const options = {
                    fontSize: Number(settings.fontSize) || 12,
                    pageSize: String(settings.pageSize || 'A4'),
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'extract-tables': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new ExtractTablesProcessor();
                const options = {
                    outputFormat: String(settings.outputFormat || 'csv') as 'csv' | 'json' | 'excel',
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'pdf-to-pdfa': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PdfToPdfAProcessor();
                const options = {
                    conformanceLevel: String(settings.conformanceLevel || 'A-2b') as 'A-1b' | 'A-2b' | 'A-3b',
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'pdf-to-docx': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToDocxProcessor();
                const options = {
                    preserveFormatting: settings.preserveFormatting !== undefined ? Boolean(settings.preserveFormatting) : true,
                    extractImages: settings.extractImages !== undefined ? Boolean(settings.extractImages) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            case 'pdf-to-pptx': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToPptxProcessor();
                return await processor.process(createProcessInput(files, {}), onProgress);
            }

            case 'pdf-to-excel': {
                if (files.length === 0) throw new Error('No input file');
                const processor = new PDFToExcelProcessor();
                const options = {
                    detectTables: settings.detectTables !== undefined ? Boolean(settings.detectTables) : true,
                };
                return await processor.process(createProcessInput(files, options), onProgress);
            }

            // ==================== Passthrough (tools without processors or interactive tools) ====================
            default: {
                console.warn(`[Workflow Executor] Tool "${toolId}" does not have a workflow processor implementation.`);

                // Return error instead of passing through - safer approach
                return {
                    success: false,
                    error: {
                        code: PDFErrorCode.PROCESSING_FAILED,
                        category: ErrorCategory.PROCESSING_ERROR,
                        message: `Tool "${toolId}" is not supported in workflows yet.`,
                        details: 'This tool may require user interaction or is not yet implemented for workflow execution.',
                        recoverable: false,
                        suggestedAction: 'Use this tool directly instead of in a workflow.',
                    },
                };
            }
        }
    } catch (error) {
        console.error('[Workflow Executor] Error executing node:', error);

        const message = error instanceof Error ? error.message : 'Unknown error occurred during workflow execution';
        const details = error instanceof Error ? error.stack : undefined;

        return {
            success: false,
            error: {
                code: (error as any).code || PDFErrorCode.PROCESSING_FAILED,
                category: ErrorCategory.PROCESSING_ERROR,
                message,
                details,
                recoverable: true,
                suggestedAction: 'Check the input files and settings, then try again.',
            },
        };
    }
}

/**
 * Get input files for a node from parent nodes
 */
export function collectInputFiles(
    nodeId: string,
    nodes: WorkflowNode[],
    edges: WorkflowEdge[],
    nodeOutputs: Map<string, (Blob | WorkflowOutputFile)[]>
): (Blob | WorkflowOutputFile)[] {
    const parentEdges = edges.filter(e => e.target === nodeId);

    if (parentEdges.length === 0) {
        const node = nodes.find(n => n.id === nodeId);
        if (node?.data.inputFiles) {
            return node.data.inputFiles;
        }
        return [];
    }

    const inputFiles: (Blob | WorkflowOutputFile)[] = [];
    for (const edge of parentEdges) {
        const parentOutputs = nodeOutputs.get(edge.source);
        if (parentOutputs) {
            inputFiles.push(...parentOutputs);
        }
    }

    return inputFiles;
}
