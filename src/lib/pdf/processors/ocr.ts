/**
 * OCR PDF Processor
 * Requirements: 5.1
 * 
 * Performs Optical Character Recognition on PDF pages.
 * Uses Tesseract.js for client-side OCR processing.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs, loadPdfLib } from '../loader';

/**
 * Supported OCR languages
 */
export type OCRLanguage = 'eng' | 'chi_sim' | 'chi_tra' | 'jpn' | 'kor' | 'spa' | 'fra' | 'deu' | 'por' | 'ara';

/**
 * OCR options
 */
export interface OCROptions {
  /** OCR language(s) */
  languages: OCRLanguage[];
  /** Scale factor for rendering (higher = better OCR but slower) */
  scale: number;
  /** Specific pages to OCR (empty = all pages) */
  pages: number[];
  /** Output format */
  outputFormat: 'text' | 'searchable-pdf';
  /** Preserve original layout in text output */
  preserveLayout: boolean;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: OCROptions = {
  languages: ['eng'],
  scale: 2,
  pages: [],
  outputFormat: 'text',
  preserveLayout: false,
};

/**
 * Language display names
 */
export const OCR_LANGUAGE_NAMES: Record<OCRLanguage, string> = {
  eng: 'English',
  chi_sim: 'Chinese (Simplified)',
  chi_tra: 'Chinese (Traditional)',
  jpn: 'Japanese',
  kor: 'Korean',
  spa: 'Spanish',
  fra: 'French',
  deu: 'German',
  por: 'Portuguese',
  ara: 'Arabic',
};

// Tesseract worker type
type TesseractWorker = {
  loadLanguage: (lang: string) => Promise<void>;
  initialize: (lang: string) => Promise<void>;
  recognize: (image: string | HTMLCanvasElement) => Promise<{ data: { text: string } }>;
  terminate: () => Promise<void>;
};


/**
 * OCR PDF Processor
 * Performs OCR on PDF pages using Tesseract.js.
 */
export class OCRProcessor extends BasePDFProcessor {
  private tesseractWorker: TesseractWorker | null = null;

  /**
   * Process PDF with OCR
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const ocrOptions: OCROptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<OCROptions>),
    };

    // Validate we have exactly 1 PDF file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    // Validate file type
    if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
      return this.createErrorOutput(
        PDFErrorCode.FILE_TYPE_INVALID,
        'Invalid file type. Please upload a PDF file.',
        `Received: ${file.type || 'unknown'}`
      );
    }

    try {
      this.updateProgress(5, 'Initializing OCR engine...');

      if (ocrOptions.outputFormat === 'searchable-pdf') {
        // Optimized path for Searchable PDF using PyMuPDF + Tesseract
        // This avoids double-rendering and uses the new robust implementation
        const blob = await this.createSearchablePDF(file, ocrOptions);

        await this.terminateTesseract();
        this.updateProgress(100, 'Complete!');

        const baseName = file.name.replace(/\.pdf$/i, '');
        return this.createSuccessOutput(blob, `${baseName}_searchable.pdf`, {
          languages: ocrOptions.languages,
          outputFormat: ocrOptions.outputFormat,
        });
      }

      // Legacy path for Text output (uses pdf.js rendering)
      this.updateProgress(10, 'Loading libraries...');
      const pdfjs = await loadPdfjs();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      await this.initializeTesseract(ocrOptions.languages);
      this.updateProgress(20, 'Loading PDF document...');

      // Load the PDF document
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;

      // Determine which pages to OCR
      const pagesToOCR = ocrOptions.pages.length > 0
        ? ocrOptions.pages.filter(p => p >= 1 && p <= totalPages)
        : Array.from({ length: totalPages }, (_, i) => i + 1);

      if (pagesToOCR.length === 0) {
        await this.terminateTesseract();
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PAGE_RANGE,
          'No valid pages to OCR.',
          `PDF has ${totalPages} pages.`
        );
      }

      this.updateProgress(25, `Processing ${pagesToOCR.length} page(s)...`);

      const textResults: string[] = [];
      const progressPerPage = 70 / pagesToOCR.length;

      for (let i = 0; i < pagesToOCR.length; i++) {
        if (this.checkCancelled()) {
          await this.terminateTesseract();
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const pageNum = pagesToOCR[i];
        const pageProgress = 25 + (i * progressPerPage);

        this.updateProgress(
          pageProgress,
          `OCR processing page ${pageNum} of ${totalPages}...`
        );

        try {
          const pageText = await this.ocrPage(pdf, pageNum, ocrOptions);
          textResults.push(`--- Page ${pageNum} ---\n${pageText}`);
        } catch (error) {
          textResults.push(`--- Page ${pageNum} ---\n[OCR Error: ${error instanceof Error ? error.message : 'Unknown error'}]`);
        }
      }

      await this.terminateTesseract();
      this.updateProgress(95, 'Generating output...');

      const fullText = textResults.join('\n\n');
      const blob = new Blob([fullText], { type: 'text/plain' });
      const baseName = file.name.replace(/\.pdf$/i, '');

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `${baseName}_ocr.txt`, {
        pageCount: pagesToOCR.length,
        languages: ocrOptions.languages,
        outputFormat: ocrOptions.outputFormat,
      });

    } catch (error) {
      await this.terminateTesseract();
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to perform OCR on PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Initialize Tesseract worker
   */
  private async initializeTesseract(languages: OCRLanguage[]): Promise<void> {
    // Dynamically import Tesseract.js
    const Tesseract = await import('tesseract.js');

    const langString = languages.join('+');
    this.tesseractWorker = await Tesseract.createWorker(langString) as unknown as TesseractWorker;
  }

  /**
   * Terminate Tesseract worker
   */
  private async terminateTesseract(): Promise<void> {
    if (this.tesseractWorker) {
      await this.tesseractWorker.terminate();
      this.tesseractWorker = null;
    }
  }

  /**
   * Perform OCR on a single page
   */
  private async ocrPage(
    pdf: Awaited<ReturnType<Awaited<ReturnType<typeof loadPdfjs>>['getDocument']>['promise']>,
    pageNum: number,
    options: OCROptions
  ): Promise<string> {
    if (!this.tesseractWorker) {
      throw new Error('Tesseract worker not initialized');
    }

    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: options.scale });

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    // Fill with white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render PDF page to canvas
    await page.render({
      canvasContext: ctx,
      viewport: viewport,
    }).promise;

    // Perform OCR
    const result = await this.tesseractWorker.recognize(canvas);
    return result.data.text;
  }

  /**
   * Create a searchable PDF with OCR text layer using PyMuPDF
   */
  public async createSearchablePDF(
    originalFile: File,
    options: OCROptions
  ): Promise<Blob> {
    const { loadPyMuPDF } = await import('../pymupdf-loader');
    const pymupdf = await loadPyMuPDF();
    const { pyodide } = pymupdf;

    // Write input file to virtual FS
    const arrayBuffer = await originalFile.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    pyodide.FS.writeFile('/ocr_input.pdf', pdfData);

    const language = options.languages[0] || 'eng';

    // We process in Python for PDF manipulation, but JS for Tesseract
    // 1. Get total pages
    const totalPages = await pyodide.runPythonAsync(`
import pymupdf
doc = pymupdf.open("/ocr_input.pdf")
count = len(doc)
doc.close()
count
    `);

    // Determine target pages
    const pagesToProcess = options.pages.length > 0
      ? options.pages.filter(p => p >= 1 && p <= totalPages)
      : Array.from({ length: totalPages }, (_, i) => i + 1);

    // Initialize Tesseract worker if not ready
    if (!this.tesseractWorker) {
      await this.initializeTesseract(options.languages);
    }

    if (!this.tesseractWorker) throw new Error("Failed to init Tesseract");

    // We collect text data to insert later
    // Structure: { pageNum: [ { text, bbox: [x,y,w,h], confidence } ] }
    const ocrData: Record<number, any[]> = {};

    for (let i = 0; i < pagesToProcess.length; i++) {
      const pageNum = pagesToProcess[i];
      const pageIndex = pageNum - 1;

      this.updateProgress(
        25 + (i / pagesToProcess.length) * 50,
        `Analyzing text on page ${pageNum}...`
      );

      // Render page to image using PyMuPDF
      // We render at 2x scale (144 DPI) for better OCR accuracy
      const scale = options.scale || 2;

      // Execute Python to render page and return image bytes
      // We return both image and page dimensions to normalize coordinates
      const renderResult = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/ocr_input.pdf")
page = doc[${pageIndex}]
rect = page.rect
mat = pymupdf.Matrix(${scale}, ${scale})
pix = page.get_pixmap(matrix=mat)
png_data = pix.tobytes("png")
doc.close()

f"{base64.b64encode(png_data).decode('ascii')}|||{rect.width}|||{rect.height}"
      `);

      const [base64Img, pdfPageWidthStr, pdfPageHeightStr] = renderResult.split('|||');
      const pdfPageWidth = parseFloat(pdfPageWidthStr);
      const pdfPageHeight = parseFloat(pdfPageHeightStr);

      // Run Tesseract
      // We use base64 check to avoid huge console logs if we logged it
      const result = await this.tesseractWorker.recognize(`data:image/png;base64,${base64Img}`);

      const data = result.data as any;

      if (data && data.words) {
        // Transform coordinates
        // Tesseract coords are based on the scaled image size
        // PyMuPDF expects PDF points (1/72 inch)
        // Image width = pdfPageWidth * scale
        const words = data.words.map((tessWord: any) => {
          const bbox = tessWord.bbox; // x0, y0, x1, y1
          const text = tessWord.text;
          const confidence = tessWord.confidence;

          // Normalize to PDF coordinates
          // x = (x / scale)
          // y = (y / scale)
          // w = (width / scale)
          // h = (height / scale)
          const x = bbox.x0 / scale;
          const y = bbox.y0 / scale;
          const w = (bbox.x1 - bbox.x0) / scale;
          const h = (bbox.y1 - bbox.y0) / scale;

          return { text, x, y, w, h, confidence };
        });

        ocrData[pageIndex] = words;
      }
    }

    this.updateProgress(80, 'Creating searchable PDF...');

    // Now inject text back into PDF using PyMuPDF
    // We pass the data as JSON to Python
    const ocrDataJson = JSON.stringify(ocrData);

    // Write data to file to avoid command line length limits
    pyodide.FS.writeFile('/ocr_data.json', new TextEncoder().encode(ocrDataJson));

    await pyodide.runPythonAsync(`
import pymupdf
import json

doc = pymupdf.open("/ocr_input.pdf")

with open('/ocr_data.json', 'r') as f:
    ocr_data = json.load(f)

for page_idx_str, words in ocr_data.items():
    page_idx = int(page_idx_str)
    if page_idx >= len(doc): continue
    
    page = doc[page_idx]
    
    # Insert invisible text
    # render_mode=3 (invisible)
    
    for w in words:
        text = w['text']
        x, y, width, height = w['x'], w['y'], w['w'], w['h']
        confidence = w['confidence']
        
        if confidence < 30: continue # Skip low confidence garbage
        
        # Create a rect for the word
        rect = pymupdf.Rect(x, y, x + width, y + height)
        
        # Insert text
        # fontsize is approximated by height
        page.insert_textbox(
            rect,
            text,
            fontsize=height * 0.9, # Slight adjustment
            color=(0, 0, 0),
            render_mode=3
        )

# Save output
doc.save("/ocr_output.pdf", garbage=4, deflate=True)
doc.close()
    `);

    // Read back the file
    const outputPdfParams = pyodide.runPython(`
import base64
with open("/ocr_output.pdf", "rb") as f:
    data = base64.b64encode(f.read()).decode('ascii')
data
    `);

    // Cleanup
    try {
      pyodide.FS.unlink('/ocr_input.pdf');
      pyodide.FS.unlink('/ocr_output.pdf');
      pyodide.FS.unlink('/ocr_data.json');
    } catch (e) { }

    const binary = atob(outputPdfParams);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], { type: 'application/pdf' });
  }
}

/**
 * Create a new instance of the OCR processor
 */
export function createOCRProcessor(): OCRProcessor {
  return new OCRProcessor();
}

/**
 * Perform OCR on PDF (convenience function)
 */
export async function ocrPDF(
  file: File,
  options?: Partial<OCROptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createOCRProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}
