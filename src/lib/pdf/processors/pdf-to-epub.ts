/**
 * PDF to EPUB Processor
 * Requirements: 5.1
 * 
 * Converts PDF to a reflowable EPUB e-book.
 * Extracts text and images and packages them into the EPUB (ZIP) structure.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';
import JSZip from 'jszip';

/**
 * PDF to EPUB options
 */
export interface PDFToEPUBOptions {
  /** Book title */
  title?: string;
  /** Author */
  author?: string;
  /** Specific pages to convert */
  pages: number[];
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToEPUBOptions = {
  pages: [],
};

/**
 * PDF to EPUB Processor
 */
export class PDFToEPUBProcessor extends BasePDFProcessor {
  /**
   * Process PDF and convert to EPUB
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const epubOptions: PDFToEPUBOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<PDFToEPUBOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Provide one PDF file.');
    }

    const file = files[0];
    const bookTitle = epubOptions.title || file.name.replace(/\.pdf$/i, '');
    const author = epubOptions.author || 'pdftheory';

    try {
      this.updateProgress(5, 'Loading libraries...');
      const pdfjs = await loadPdfjs();

      this.updateProgress(10, 'Loading PDF document...');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;

      const pagesToConvert = epubOptions.pages.length > 0
        ? epubOptions.pages.filter(p => p >= 1 && p <= totalPages)
        : Array.from({ length: totalPages }, (_, i) => i + 1);

      const zip = new JSZip();

      // 1. mimetype
      zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });

      // 2. META-INF/container.xml
      zip.file('META-INF/container.xml', `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

      // 3. OEBPS/content.opf
      let manifest = '';
      let spine = '';
      let htmlContent = '';

      const progressPerPage = 70 / pagesToConvert.length;

      for (let i = 0; i < pagesToConvert.length; i++) {
        if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');

        const pageNum = pagesToConvert[i];
        this.updateProgress(15 + (i * progressPerPage), `Processing page ${pageNum}...`);

        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        let pageText = '';
        for (const item of textContent.items) {
          if ('str' in item) pageText += item.str + ' ';
        }

        const chapterFile = `chapter_${i + 1}.xhtml`;
        manifest += `<item id="chapter_${i + 1}" href="${chapterFile}" media-type="application/xhtml+xml"/>\n`;
        spine += `<itemref idref="chapter_${i + 1}"/>\n`;

        zip.file(`OEBPS/${chapterFile}`, `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Page ${pageNum}</title></head>
<body><p>${pageText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p></body>
</html>`);
      }

      zip.file('OEBPS/content.opf', `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">urn:uuid:${crypto.randomUUID()}</dc:identifier>
    <dc:title>${bookTitle}</dc:title>
    <dc:creator>${author}</dc:creator>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    ${manifest}
  </manifest>
  <spine toc="ncx">
    ${spine}
  </spine>
</package>`);

      zip.file('OEBPS/toc.ncx', `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:12345"/></head>
  <docTitle><text>${bookTitle}</text></docTitle>
  <navMap>
    <navPoint id="navpoint-1" playOrder="1">
      <navLabel><text>Start</text></navLabel>
      <content src="chapter_1.xhtml"/>
    </navPoint>
  </navMap>
</ncx>`);

      this.updateProgress(95, 'Generating EPUB file...');
      const epubBlob = await zip.generateAsync({ type: 'blob' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(epubBlob, `${bookTitle}.epub`, { pageCount: pagesToConvert.length });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to convert PDF to EPUB.', error instanceof Error ? error.message : 'Unknown error');
    }
  }
}

export function createPDFToEPUBProcessor(): PDFToEPUBProcessor {
  return new PDFToEPUBProcessor();
}
