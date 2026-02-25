import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getToolBySlug, getAllTools } from '@/config/tools';
import { getToolContent, type Locale } from '@/config/tool-content';
import { ToolPage } from '@/components/tools/ToolPage';
import dynamic from 'next/dynamic';

const MergePDFTool = dynamic(() => import('@/components/tools/merge').then(mod => mod.MergePDFTool));
const SplitPDFTool = dynamic(() => import('@/components/tools/split').then(mod => mod.SplitPDFTool));
const DeletePagesTool = dynamic(() => import('@/components/tools/delete').then(mod => mod.DeletePagesTool));
const RotatePDFTool = dynamic(() => import('@/components/tools/rotate').then(mod => mod.RotatePDFTool));
const AddBlankPageTool = dynamic(() => import('@/components/tools/add-blank-page').then(mod => mod.AddBlankPageTool));
const ReversePagesTool = dynamic(() => import('@/components/tools/reverse').then(mod => mod.ReversePagesTool));
const NUpPDFTool = dynamic(() => import('@/components/tools/n-up').then(mod => mod.NUpPDFTool));
const AlternateMergeTool = dynamic(() => import('@/components/tools/alternate-merge').then(mod => mod.AlternateMergeTool));
const DividePagesTool = dynamic(() => import('@/components/tools/divide').then(mod => mod.DividePagesTool));
const CombineSinglePageTool = dynamic(() => import('@/components/tools/combine-single-page').then(mod => mod.CombineSinglePageTool));
const GridCombineTool = dynamic(() => import('@/components/tools/grid-combine').then(mod => mod.GridCombineTool));
const PosterizePDFTool = dynamic(() => import('@/components/tools/posterize').then(mod => mod.PosterizePDFTool));
const PDFMultiTool = dynamic(() => import('@/components/tools/pdf-multi-tool').then(mod => mod.PDFMultiTool));
const AddAttachmentsTool = dynamic(() => import('@/components/tools/add-attachments').then(mod => mod.AddAttachmentsTool));
const ExtractAttachmentsTool = dynamic(() => import('@/components/tools/extract-attachments').then(mod => mod.ExtractAttachmentsTool));
const ExtractImagesTool = dynamic(() => import('@/components/tools/extract-images').then(mod => mod.ExtractImagesTool));
const EditAttachmentsTool = dynamic(() => import('@/components/tools/edit-attachments').then(mod => mod.EditAttachmentsTool));
const ViewMetadataTool = dynamic(() => import('@/components/tools/view-metadata').then(mod => mod.ViewMetadataTool));
const AddMetadataTool = dynamic(() => import('@/components/tools/add-metadata').then(mod => mod.AddMetadataTool));
const EditMetadataTool = dynamic(() => import('@/components/tools/edit-metadata').then(mod => mod.EditMetadataTool));
const PDFsToZipTool = dynamic(() => import('@/components/tools/pdf-to-zip').then(mod => mod.PDFsToZipTool));
const ComparePDFsTool = dynamic(() => import('@/components/tools/compare-pdfs').then(mod => mod.ComparePDFsTool));
const EditPDFTool = dynamic(() => import('@/components/tools/edit-pdf').then(mod => mod.EditPDFTool));
const ImageToPDFTool = dynamic(() => import('@/components/tools/image-to-pdf').then(mod => mod.ImageToPDFTool));
const TextToPDFTool = dynamic(() => import('@/components/tools/text-to-pdf').then(mod => mod.TextToPDFTool));
const PSDToPDFTool = dynamic(() => import('@/components/tools/psd-to-pdf').then(mod => mod.PSDToPDFTool));
const JSONToPDFTool = dynamic(() => import('@/components/tools/json-to-pdf').then(mod => mod.JSONToPDFTool));
const FixPageSizeTool = dynamic(() => import('@/components/tools/fix-page-size').then(mod => mod.FixPageSizeTool));
const SignPDFTool = dynamic(() => import('@/components/tools/sign').then(mod => mod.SignPDFTool));
const CropPDFTool = dynamic(() => import('@/components/tools/crop').then(mod => mod.CropPDFTool));
const OrganizePDFTool = dynamic(() => import('@/components/tools/organize').then(mod => mod.OrganizePDFTool));
const ExtractPagesTool = dynamic(() => import('@/components/tools/extract').then(mod => mod.ExtractPagesTool));
const BookmarkTool = dynamic(() => import('@/components/tools/bookmark').then(mod => mod.BookmarkTool));
const PageNumbersTool = dynamic(() => import('@/components/tools/page-numbers').then(mod => mod.PageNumbersTool));
const WatermarkTool = dynamic(() => import('@/components/tools/watermark').then(mod => mod.WatermarkTool));
const HeaderFooterTool = dynamic(() => import('@/components/tools/header-footer').then(mod => mod.HeaderFooterTool));
const InvertColorsTool = dynamic(() => import('@/components/tools/invert-colors').then(mod => mod.InvertColorsTool));
const BackgroundColorTool = dynamic(() => import('@/components/tools/background-color').then(mod => mod.BackgroundColorTool));
const StampsTool = dynamic(() => import('@/components/tools/stamps').then(mod => mod.StampsTool));
const RemoveAnnotationsTool = dynamic(() => import('@/components/tools/remove-annotations').then(mod => mod.RemoveAnnotationsTool));
const FormFillerTool = dynamic(() => import('@/components/tools/form-filler').then(mod => mod.FormFillerTool));
const FormCreatorTool = dynamic(() => import('@/components/tools/form-creator').then(mod => mod.FormCreatorTool));
const RemoveBlankPagesTool = dynamic(() => import('@/components/tools/remove-blank-pages').then(mod => mod.RemoveBlankPagesTool));
const CompressPDFTool = dynamic(() => import('@/components/tools/compress').then(mod => mod.CompressPDFTool));
const PDFToImageTool = dynamic(() => import('@/components/tools/pdf-to-image').then(mod => mod.PDFToImageTool));
const PDFToGreyscaleTool = dynamic(() => import('@/components/tools/pdf-to-greyscale').then(mod => mod.PDFToGreyscaleTool));
const PDFToJSONTool = dynamic(() => import('@/components/tools/pdf-to-json').then(mod => mod.PDFToJSONTool));
const OCRPDFTool = dynamic(() => import('@/components/tools/ocr').then(mod => mod.OCRPDFTool));
const LinearizePDFTool = dynamic(() => import('@/components/tools/linearize').then(mod => mod.LinearizePDFTool));
const PageDimensionsTool = dynamic(() => import('@/components/tools/page-dimensions').then(mod => mod.PageDimensionsTool));
const RemoveRestrictionsTool = dynamic(() => import('@/components/tools/remove-restrictions').then(mod => mod.RemoveRestrictionsTool));
const EncryptPDFTool = dynamic(() => import('@/components/tools/encrypt').then(mod => mod.EncryptPDFTool));
const DecryptPDFTool = dynamic(() => import('@/components/tools/decrypt').then(mod => mod.DecryptPDFTool));
const SanitizePDFTool = dynamic(() => import('@/components/tools/sanitize').then(mod => mod.SanitizePDFTool));
const FlattenPDFTool = dynamic(() => import('@/components/tools/flatten').then(mod => mod.FlattenPDFTool));
const RemoveMetadataTool = dynamic(() => import('@/components/tools/remove-metadata').then(mod => mod.RemoveMetadataTool));
const ChangePermissionsTool = dynamic(() => import('@/components/tools/change-permissions').then(mod => mod.ChangePermissionsTool));
const RepairPDFTool = dynamic(() => import('@/components/tools/repair').then(mod => mod.RepairPDFTool));
const TableOfContentsTool = dynamic(() => import('@/components/tools/table-of-contents').then(mod => mod.TableOfContentsTool));
const TextColorTool = dynamic(() => import('@/components/tools/text-color').then(mod => mod.TextColorTool));
const PDFToDocxTool = dynamic(() => import('@/components/tools/pdf-to-docx').then(mod => mod.PDFToDocxTool));
const PDFToPptxTool = dynamic(() => import('@/components/tools/pdf-to-pptx').then(mod => mod.PDFToPptxTool));
const PDFToExcelTool = dynamic(() => import('@/components/tools/pdf-to-excel').then(mod => mod.PDFToExcelTool));
const RotateCustomTool = dynamic(() => import('@/components/tools/rotate-custom/RotateCustomTool').then(mod => mod.RotateCustomTool));
const WordToPDFTool = dynamic(() => import('@/components/tools/word-to-pdf').then(mod => mod.WordToPDFTool));
const ExcelToPDFTool = dynamic(() => import('@/components/tools/excel-to-pdf').then(mod => mod.ExcelToPDFTool));
const PPTXToPDFTool = dynamic(() => import('@/components/tools/pptx-to-pdf').then(mod => mod.PPTXToPDFTool));
const XPSToPDFTool = dynamic(() => import('@/components/tools/xps-to-pdf').then(mod => mod.XPSToPDFTool));
const RTFToPDFTool = dynamic(() => import('@/components/tools/rtf-to-pdf').then(mod => mod.RTFToPDFTool));
const EPUBToPDFTool = dynamic(() => import('@/components/tools/epub-to-pdf').then(mod => mod.EPUBToPDFTool));
const MOBIToPDFTool = dynamic(() => import('@/components/tools/mobi-to-pdf').then(mod => mod.MOBIToPDFTool));
const FB2ToPDFTool = dynamic(() => import('@/components/tools/fb2-to-pdf').then(mod => mod.FB2ToPDFTool));
const DJVUToPDFTool = dynamic(() => import('@/components/tools/djvu-to-pdf').then(mod => mod.DJVUToPDFTool));
const PDFToSVGTool = dynamic(() => import('@/components/tools/pdf-to-svg').then(mod => mod.PDFToSVGTool));
const DeskewPDFTool = dynamic(() => import('@/components/tools/deskew').then(mod => mod.DeskewPDFTool));
const PDFBookletTool = dynamic(() => import('@/components/tools/pdf-booklet').then(mod => mod.PDFBookletTool));
const RasterizePDFTool = dynamic(() => import('@/components/tools/rasterize').then(mod => mod.RasterizePDFTool));
const MarkdownToPDFTool = dynamic(() => import('@/components/tools/markdown-to-pdf').then(mod => mod.MarkdownToPDFTool));
const EmailToPDFTool = dynamic(() => import('@/components/tools/email-to-pdf').then(mod => mod.EmailToPDFTool));
const CBZToPDFTool = dynamic(() => import('@/components/tools/cbz-to-pdf').then(mod => mod.CBZToPDFTool));
const PDFToPDFATool = dynamic(() => import('@/components/tools/pdf-to-pdfa').then(mod => mod.PDFToPDFATool));
const FontToOutlineTool = dynamic(() => import('@/components/tools/font-to-outline').then(mod => mod.FontToOutlineTool));
const ExtractTablesTool = dynamic(() => import('@/components/tools/extract-tables').then(mod => mod.ExtractTablesTool));
const OCGManagerTool = dynamic(() => import('@/components/tools/ocg-manager').then(mod => mod.OCGManagerTool));
const PDFReaderTool = dynamic(() => import('@/components/tools/pdf-reader').then(mod => mod.PDFReaderTool));
const HtmlToPDFTool = dynamic(() => import('@/components/tools/html-to-pdf').then(mod => mod.HtmlToPDFTool));
const PdfToHtmlTool = dynamic(() => import('@/components/tools/pdf-to-html').then(mod => mod.PdfToHtmlTool));
const PdfToTxtTool = dynamic(() => import('@/components/tools/pdf-to-txt').then(mod => mod.PdfToTxtTool));
const PDFToHEICTool = dynamic(() => import('@/components/tools/pdf-to-heic').then(mod => mod.PDFToHEICTool));
const PDFToPSDTool = dynamic(() => import('@/components/tools/pdf-to-psd').then(mod => mod.PDFToPSDTool));
const PDFToXPSTool = dynamic(() => import('@/components/tools/pdf-to-xps').then(mod => mod.PDFToXPSTool));
const PDFToRTFTool = dynamic(() => import('@/components/tools/pdf-to-rtf').then(mod => mod.PDFToRTFTool));
const PDFToEPUBTool = dynamic(() => import('@/components/tools/pdf-to-epub').then(mod => mod.PDFToEPUBTool));
const PDFToMOBITool = dynamic(() => import('@/components/tools/pdf-to-mobi').then(mod => mod.PDFToMOBITool));
const PDFToDJVUTool = dynamic(() => import('@/components/tools/pdf-to-djvu').then(mod => mod.PDFToDJVUTool));
const PDFToFB2Tool = dynamic(() => import('@/components/tools/pdf-to-fb2').then(mod => mod.PDFToFB2Tool));
const PDFToEmailTool = dynamic(() => import('@/components/tools/pdf-to-email').then(mod => mod.PDFToEmailTool));
const PDFToCBZTool = dynamic(() => import('@/components/tools/pdf-to-cbz').then(mod => mod.PDFToCBZTool));

import { generateToolMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';

import {
  generateSoftwareApplicationSchema,
  generateFAQPageSchema,
  generateHowToSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '@/lib/seo/structured-data';

import type { Metadata } from 'next';

const SUPPORTED_LOCALES: Locale[] = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-TW', 'pt', 'ar'];

interface ToolPageParams {
  params: Promise<{
    locale: string;
    tool: string;
  }>;
}

export const revalidate = 3600; // Revalidate every hour

/**
 * Generate static params for all tool pages
 */
export async function generateStaticParams() {
  const tools = getAllTools();

  return SUPPORTED_LOCALES.flatMap(locale =>
    tools.map(tool => ({
      locale,
      tool: tool.slug,
    }))
  );
}

/**
 * Generate metadata for tool pages
 */
export async function generateMetadata({ params }: ToolPageParams): Promise<Metadata> {
  const { locale, tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  const content = getToolContent(locale as Locale, tool?.id || '');

  if (!tool || !content) {
    return {
      title: 'Tool Not Found',
    };
  }

  return generateToolMetadata({ tool, content, locale: locale as Locale });
}

/**
 * Tool Page Component
 * Renders the appropriate tool interface based on the tool slug
 */
export default async function ToolPageRoute({ params }: ToolPageParams) {
  try {
    const { locale: localeParam, tool: toolSlug } = await params;
    const locale = localeParam as Locale;

    // Enable static rendering for this locale - MUST be called before getTranslations
    setRequestLocale(locale);

    const t = await getTranslations();

    // Get tool data
    const tool = getToolBySlug(toolSlug);

    if (!tool) {
      notFound();
    }

    // Get tool content for the locale (falls back to English)
    const content = getToolContent(locale, tool.id);

    if (!content) {
      notFound();
    }

    // Generate structured data
    const toolStructuredData = generateSoftwareApplicationSchema(tool, content, locale);
    const faqStructuredData = content.faq && content.faq.length > 0
      ? generateFAQPageSchema(content.faq)
      : null;
    const howToStructuredData = generateHowToSchema(tool, content, locale);
    const webPageStructuredData = generateWebPageSchema(tool, content, locale);
    const breadcrumbStructuredData = generateBreadcrumbSchema(
      [
        { name: 'Home', path: '' },
        { name: 'Tools', path: '/tools' },
        { name: content.title, path: `/tools/${tool.slug}` },
      ],
      locale
    );

    // Prepare localized content for related tools
    const localizedRelatedTools = tool.relatedTools.reduce((acc, relatedId) => {
      const relatedContent = getToolContent(locale, relatedId);
      if (relatedContent) {
        acc[relatedId] = {
          title: relatedContent.title,
          description: relatedContent.metaDescription
        };
      }
      return acc;
    }, {} as Record<string, { title: string; description: string }>);

    // Render the appropriate tool interface
    const renderToolInterface = () => {
      switch (tool.id) {

        case 'merge-pdf':
          return <MergePDFTool />;
        case 'split-pdf':
          return <SplitPDFTool />;
        case 'delete-pages':
          return <DeletePagesTool />;
        case 'rotate-pdf':
          return <RotatePDFTool />;
        case 'rotate-custom':
          return <RotateCustomTool />;
        case 'add-blank-page':
          return <AddBlankPageTool />;
        case 'reverse-pages':
          return <ReversePagesTool />;
        case 'n-up-pdf':
          return <NUpPDFTool />;
        case 'grid-combine':
          return <GridCombineTool />;
        case 'alternate-merge':
          return <AlternateMergeTool />;
        case 'divide-pages':
          return <DividePagesTool />;
        case 'combine-single-page':
          return <CombineSinglePageTool />;
        case 'posterize-pdf':
          return <PosterizePDFTool />;
        case 'pdf-multi-tool':
          return <PDFMultiTool />;
        case 'add-attachments':
          return <AddAttachmentsTool />;
        case 'extract-attachments':
          return <ExtractAttachmentsTool />;
        case 'extract-images':
          return <ExtractImagesTool />;
        case 'edit-attachments':
          return <EditAttachmentsTool />;
        case 'view-metadata':
          return <ViewMetadataTool />;
        case 'add-metadata':
          return <AddMetadataTool />;
        case 'edit-metadata':
          return <EditMetadataTool />;
        case 'pdf-to-zip':
          return <PDFsToZipTool />;
        case 'compare-pdfs':
          return <ComparePDFsTool />;
        case 'edit-pdf':
          return <EditPDFTool />;
        // Convert to PDF tools
        case 'image-to-pdf':
          return <ImageToPDFTool />;
        case 'jpg-to-pdf':
          return <ImageToPDFTool imageType="jpg" />;
        case 'png-to-pdf':
          return <ImageToPDFTool imageType="png" />;
        case 'webp-to-pdf':
          return <ImageToPDFTool imageType="webp" />;
        case 'bmp-to-pdf':
          return <ImageToPDFTool imageType="bmp" />;
        case 'tiff-to-pdf':
          return <ImageToPDFTool imageType="tiff" />;
        case 'svg-to-pdf':
          return <ImageToPDFTool imageType="svg" />;
        case 'heic-to-pdf':
          return <ImageToPDFTool imageType="heic" />;
        case 'psd-to-pdf':
          return <PSDToPDFTool />;
        case 'txt-to-pdf':
          return <TextToPDFTool />;
        case 'json-to-pdf':
          return <JSONToPDFTool />;
        // Optimize & Repair tools

        case 'sign-pdf':
          return <SignPDFTool />;
        case 'crop-pdf':
          return <CropPDFTool />;
        case 'fix-page-size':
          return <FixPageSizeTool />;
        case 'organize-pdf':
          return <OrganizePDFTool />;
        case 'extract-pages':
          return <ExtractPagesTool />;
        case 'bookmark':
          return <BookmarkTool />;
        case 'page-numbers':
          return <PageNumbersTool />;
        case 'add-watermark':
          return <WatermarkTool />;
        case 'header-footer':
          return <HeaderFooterTool />;
        case 'invert-colors':
          return <InvertColorsTool />;
        case 'background-color':
          return <BackgroundColorTool />;
        case 'text-color':
          return <TextColorTool />;
        case 'table-of-contents':
          return <TableOfContentsTool />;
        case 'add-stamps':
          return <StampsTool />;
        case 'remove-annotations':
          return <RemoveAnnotationsTool />;
        case 'form-filler':
          return <FormFillerTool />;
        case 'form-creator':
          return <FormCreatorTool />;
        case 'remove-blank-pages':
          return <RemoveBlankPagesTool />;
        case 'compress-pdf':
          return <CompressPDFTool />;
        case 'pdf-to-jpg':
          return <PDFToImageTool outputFormat="jpg" />;
        case 'pdf-to-png':
          return <PDFToImageTool outputFormat="png" />;
        case 'pdf-to-webp':
          return <PDFToImageTool outputFormat="webp" />;
        case 'pdf-to-bmp':
          return <PDFToImageTool outputFormat="bmp" />;
        case 'pdf-to-tiff':
          return <PDFToImageTool outputFormat="tiff" />;
        case 'pdf-to-svg':
          return <PDFToSVGTool />;
        case 'pdf-to-greyscale':
          return <PDFToGreyscaleTool />;
        case 'pdf-to-json':
          return <PDFToJSONTool />;
        case 'pdf-to-docx':
          return <PDFToDocxTool />;
        case 'pdf-to-pptx':
          return <PDFToPptxTool />;
        case 'pdf-to-excel':
          return <PDFToExcelTool />;
        case 'ocr-pdf':
          return <OCRPDFTool />;
        case 'linearize-pdf':
          return <LinearizePDFTool />;
        case 'page-dimensions':
          return <PageDimensionsTool />;
        case 'remove-restrictions':
          return <RemoveRestrictionsTool />;
        case 'repair-pdf':
          return <RepairPDFTool />;
        case 'encrypt-pdf':
          return <EncryptPDFTool />;
        case 'decrypt-pdf':
          return <DecryptPDFTool />;
        case 'sanitize-pdf':
          return <SanitizePDFTool />;
        case 'flatten-pdf':
          return <FlattenPDFTool />;
        case 'remove-metadata':
          return <RemoveMetadataTool />;
        case 'change-permissions':
          return <ChangePermissionsTool />;
        // Office to PDF conversion tools
        case 'word-to-pdf':
          return <WordToPDFTool />;
        case 'excel-to-pdf':
          return <ExcelToPDFTool />;
        case 'pptx-to-pdf':
          return <PPTXToPDFTool />;
        case 'xps-to-pdf':
          return <XPSToPDFTool />;
        case 'rtf-to-pdf':
          return <RTFToPDFTool />;
        case 'epub-to-pdf':
          return <EPUBToPDFTool />;
        case 'mobi-to-pdf':
          return <MOBIToPDFTool />;
        case 'fb2-to-pdf':
          return <FB2ToPDFTool />;
        case 'djvu-to-pdf':
          return <DJVUToPDFTool />;
        // New tools
        case 'deskew-pdf':
          return <DeskewPDFTool />;
        case 'pdf-booklet':
          return <PDFBookletTool />;
        case 'rasterize-pdf':
          return <RasterizePDFTool />;
        case 'markdown-to-pdf':
          return <MarkdownToPDFTool />;
        case 'email-to-pdf':
          return <EmailToPDFTool />;
        case 'cbz-to-pdf':
          return <CBZToPDFTool />;
        case 'pdf-to-pdfa':
          return <PDFToPDFATool />;
        case 'font-to-outline':
          return <FontToOutlineTool />;
        case 'extract-tables':
          return <ExtractTablesTool />;
        case 'ocg-manager':
          return <OCGManagerTool />;
        case 'pdf-reader':
          return <PDFReaderTool />;
        case 'html-to-pdf':
          return <HtmlToPDFTool />;
        case 'pdf-to-html':
          return <PdfToHtmlTool />;
        case 'pdf-to-txt':
          return <PdfToTxtTool />;
        case 'pdf-to-heic':
          return <PDFToHEICTool />;
        case 'pdf-to-psd':
          return <PDFToPSDTool />;
        case 'pdf-to-xps':
          return <PDFToXPSTool />;
        case 'pdf-to-rtf':
          return <PDFToRTFTool />;
        case 'pdf-to-epub':
          return <PDFToEPUBTool />;
        case 'pdf-to-mobi':
          return <PDFToMOBITool />;
        case 'pdf-to-djvu':
          return <PDFToDJVUTool />;
        case 'pdf-to-fb2':
          return <PDFToFB2Tool />;
        case 'pdf-to-email':
          return <PDFToEmailTool />;
        case 'pdf-to-cbz':
          return <PDFToCBZTool />;
        // Add more tool cases here as they are implemented
        default:
          return (
            <div className="p-8 text-center text-[hsl(var(--color-muted-foreground))]">
              <p>{t('tools.comingSoon')}</p>
            </div>
          );
      }
    };

    return (
      <>
        {/* Structured Data */}
        <JsonLd data={toolStructuredData} />
        <JsonLd data={webPageStructuredData} />
        <JsonLd data={breadcrumbStructuredData} />
        {faqStructuredData && <JsonLd data={faqStructuredData} />}
        {howToStructuredData && <JsonLd data={howToStructuredData} />}

        {/* Tool Page */}
        <ToolPage
          tool={tool}
          content={content}
          locale={locale}
          localizedRelatedTools={localizedRelatedTools}
        >
          {renderToolInterface()}
        </ToolPage>
      </>
    );
  } catch (err: any) {
    console.error('========== ToolPageRoute ERROR ==========');
    console.error('Error:', err?.message || String(err));
    console.error('Stack:', err?.stack);
    console.error('=========================================');
    throw err;
  }
}
