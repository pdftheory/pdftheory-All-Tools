import HtmlToPDFTool from '@/components/tools/html-to-pdf/HtmlToPdfTool';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'HTML to PDF Converter - Free Online Tool',
    description: 'Convert HTML files or code to PDF online. Preserve CSS styling and layout with our free HTML to PDF converter.',
};

export default function HtmlToPdfPage() {
    return <HtmlToPDFTool />;
}
