/**
 * PDF Remove Annotations Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface RemoveAnnotationsOptions {
  removeComments?: boolean;
  removeHighlights?: boolean;
  removeLinks?: boolean;
  removeShapes?: boolean;
  removeImages?: boolean;
  removeForms?: boolean;
  removeJS?: boolean;
  removeMetadata?: boolean;
  removeBookmarks?: boolean;
  removeRedactions?: boolean;
  removeUnderline?: boolean;
  removeStrikeOut?: boolean;
  removeSquiggly?: boolean;
  removeDrawings?: boolean;
  removeAll?: boolean;
  pages?: number[] | 'all';
}

export class RemoveAnnotationsProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removeOptions: RemoveAnnotationsOptions = {
      removeAll: false,
      pages: 'all',
      ...options as RemoveAnnotationsOptions,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();
      const { PDFName } = pdfLib;

      this.updateProgress(20, 'Loading PDF...');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = pdf.getPageCount();
      const pagesToProcess = removeOptions.pages === 'all'
        ? Array.from({ length: totalPages }, (_, i) => i)
        : (removeOptions.pages as number[]).map(p => p - 1);

      this.updateProgress(30, 'Removing content...');

      // 1. Remove JavaScript & Actions
      if (removeOptions.removeJS) {
        try {
          const catalogDict = (pdf.catalog as any).dict;
          // Names/JavaScript
          const namesRef = catalogDict.get(PDFName.of('Names'));
          if (namesRef) {
            const namesDict = pdf.context.lookup(namesRef) as any;
            if (namesDict.has(PDFName.of('JavaScript'))) {
              namesDict.delete(PDFName.of('JavaScript'));
            }
          }
          // OpenAction, AA
          catalogDict.delete(PDFName.of('OpenAction'));
          catalogDict.delete(PDFName.of('AA'));
        } catch (e) {
          console.warn('Failed to remove JS:', e);
        }
      }

      // 2. Remove Bookmarks (Outlines)
      if (removeOptions.removeBookmarks) {
        try {
          (pdf.catalog as any).dict.delete(PDFName.of('Outlines'));
        } catch (e) {
          console.warn('Failed to remove bookmarks:', e);
        }
      }

      // 3. Remove Form Fields
      if (removeOptions.removeForms) {
        try {
          const form = pdf.getForm();
          const fields = form.getFields();
          if (fields.length > 0) {
            form.flatten(); // Flatten is usually safer than just deleting the dict
          } else {
            (pdf.catalog as any).dict.delete(PDFName.of('AcroForm'));
          }
        } catch (e) {
          console.warn('Failed to remove forms:', e);
        }
      }

      // 4. Remove Metadata
      if (removeOptions.removeMetadata) {
        try {
          pdf.setTitle('');
          pdf.setAuthor('');
          pdf.setSubject('');
          pdf.setKeywords([]);
          pdf.setProducer('PDFCraft');
          pdf.setCreator('PDFCraft');
          (pdf.catalog as any).dict.delete(PDFName.of('Metadata'));
        } catch (e) {
          console.warn('Failed to remove metadata:', e);
        }
      }

      // 5. Per-page removal (Annots, Images)
      for (let i = 0; i < pagesToProcess.length; i++) {
        const pageIndex = pagesToProcess[i];
        const page = pdf.getPage(pageIndex);

        // --- Remove Annotations (Comments, Links, Shapes, Highlights) ---
        const annotsRef = page.node.get(PDFName.of('Annots'));
        if (annotsRef) {
          if (removeOptions.removeAll) {
            page.node.delete(PDFName.of('Annots'));
          } else {
            try {
              const annotsArray = pdf.context.lookup(annotsRef) as any;
              const annotRefs = annotsArray.asArray();
              const annotsToKeep = [];

              for (const ref of annotRefs) {
                const annot = pdf.context.lookup(ref) as any;
                const subtype = annot.get(PDFName.of('Subtype'))?.toString().substring(1);

                let shouldRemove = false;
                if (removeOptions.removeComments && ['Text', 'FreeText', 'StickyNote'].includes(subtype)) shouldRemove = true;
                if (removeOptions.removeHighlights && subtype === 'Highlight') shouldRemove = true;
                if (removeOptions.removeLinks && subtype === 'Link') shouldRemove = true;
                if (removeOptions.removeShapes && ['Square', 'Circle', 'Line', 'PolyLine', 'Polygon', 'Ink'].includes(subtype)) shouldRemove = true;
                if (removeOptions.removeRedactions && subtype === 'Redact') shouldRemove = true;
                if (removeOptions.removeUnderline && subtype === 'Underline') shouldRemove = true;
                if (removeOptions.removeStrikeOut && subtype === 'StrikeOut') shouldRemove = true;
                if (removeOptions.removeSquiggly && subtype === 'Squiggly') shouldRemove = true;
                if (removeOptions.removeDrawings && ['Ink', 'FreeText', 'Stamp'].includes(subtype)) shouldRemove = true;

                if (!shouldRemove) annotsToKeep.push(ref);
              }

              if (annotsToKeep.length === 0) {
                page.node.delete(PDFName.of('Annots'));
              } else {
                const newAnnotsArray = pdf.context.obj(annotsToKeep);
                page.node.set(PDFName.of('Annots'), newAnnotsArray);
              }
            } catch (e) {
              console.warn(`Failed selective removal on page ${pageIndex + 1}:`, e);
            }
          }
        }

        // --- Remove Images ---
        if (removeOptions.removeImages) {
          try {
            const resources = page.node.get(PDFName.of('Resources')) as any;
            if (resources) {
              const xObjects = pdf.context.lookup(resources.get(PDFName.of('XObject'))) as any;
              if (xObjects) {
                const xObjectKeys = xObjects.keys();
                for (const key of xObjectKeys) {
                  const xObject = pdf.context.lookup(xObjects.get(key)) as any;
                  const subtype = xObject.get(PDFName.of('Subtype'))?.toString();
                  if (subtype === '/Image') {
                    xObjects.delete(key);
                  }
                }
              }
            }
          } catch (e) {
            console.warn(`Failed image removal on page ${pageIndex + 1}:`, e);
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / pagesToProcess.length), `Cleaning page ${pageIndex + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_cleaned.pdf'), {
        pageCount: totalPages,
        pagesProcessed: pagesToProcess.length,
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to clean PDF content.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createRemoveAnnotationsProcessor(): RemoveAnnotationsProcessor {
  return new RemoveAnnotationsProcessor();
}

export async function removeAnnotations(file: File, options: RemoveAnnotationsOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createRemoveAnnotationsProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}
