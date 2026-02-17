import { TextItem } from 'pdfjs-dist/types/src/display/api';

// Types for our semantic analysis
export interface SemanticElement {
    type: 'text' | 'heading' | 'paragraph' | 'list' | 'table' | 'image' | 'form-field';
    x: number;
    y: number;
    width: number;
    height: number;
    content?: string | SemanticElement[];
    style?: TextStyle;
    attributes?: Record<string, string>;
    children?: SemanticElement[];
}

export interface TextStyle {
    fontFamily: string;
    fontSize: number;
    fontWeight: number | string;
    color: string;
    isItalic: boolean;
    isBold: boolean;
}

export interface VectorLine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    type: 'stroke' | 'fill';
    color?: string;
}

export interface FormField {
    id: string;
    type: 'text' | 'checkbox' | 'radio' | 'select' | 'button';
    name: string;
    value?: string;
    options?: string[];
    rect: number[]; // [x, y, w, h]
    isReadOnly?: boolean;
}

export class StructureAnalyzer {
    private page: any;
    private operatorList: any;
    private viewport: any;

    constructor(page: any) {
        this.page = page;
        // Get standard viewport at scale 1.0 to normalize coordinates
        this.viewport = page.getViewport({ scale: 1.0 });
    }

    async analyze(): Promise<SemanticElement[]> {
        // 1. Get all raw data
        const textContent = await this.page.getTextContent();
        const annotations = await this.page.getAnnotations();
        this.operatorList = await this.page.getOperatorList();

        // 2. Extract specific structures
        const vectorLines = await this.extractVectorLines();
        const images = await this.extractImages();
        const formFields = this.extractFormFields(annotations);
        const textItems = this.processTextItems(textContent.items);

        // 3. Structural Analysis
        const tables = this.detectTables(textItems, vectorLines);

        // 4. Content Clustering (Paragraphs, Headings, Lists)
        const nonTableText = textItems.filter(item => !this.isTextInTable(item, tables));
        const structuredText = this.clusterText(nonTableText);

        // 5. Merge and Sort by Layout
        const allElements = [
            ...tables,
            ...structuredText,
            ...this.convertFormsToElements(formFields),
            ...images
        ];

        // Sort by Y position (top to bottom), then X (left to right)
        return allElements.sort((a, b) => {
            if (Math.abs(a.y - b.y) > 10) return a.y - b.y;
            return a.x - b.x;
        });
    }

    private processTextItems(rawItems: any[]): any[] {
        return rawItems.map(item => {
            const tx = item.transform;
            return {
                str: item.str,
                x: tx ? tx[4] : 0,
                y: tx ? tx[5] : 0,
                width: item.width,
                height: item.height,
                fontSize: tx ? Math.sqrt(tx[0] * tx[0] + tx[1] * tx[1]) : 0,
                fontName: item.fontName,
                hasEOL: item.hasEOL
            };
        }).filter(i => i.str.trim().length > 0);
    }

    private async extractVectorLines(): Promise<VectorLine[]> {
        const lines: VectorLine[] = [];
        const ops = this.operatorList;
        const h = this.viewport.height;

        let currentX = 0;
        let currentY = 0;

        for (let i = 0; i < ops.fnArray.length; i++) {
            const fn = ops.fnArray[i];
            const args = ops.argsArray[i];

            if (fn === 13) { // moveTo
                currentX = args[0];
                currentY = h - args[1]; // Flip Y
            } else if (fn === 14) { // lineTo
                const nextX = args[0];
                const nextY = h - args[1]; // Flip Y
                lines.push({ x1: currentX, y1: currentY, x2: nextX, y2: nextY, type: 'stroke' });
                currentX = nextX;
                currentY = nextY;
            } else if (fn === 19) { // rect (x, y, w, h)
                // rect args in PDF are (x, y, w, h) where y is bottom-left of rect
                const x = args[0];
                const pdfY = args[1];
                const w = args[2];
                const rectH = args[3];

                // HTML coords: Top-Left of rect.
                // PDF Top of Rect = pdfY + rectH
                // HTML Y = PageHeight - (pdfY + rectH)
                const y = h - (pdfY + rectH);

                // Actually, let's keep it simple: 
                // Top-Left corner in HTML is (x, h - (y+rectH))
                // Bottom-Right is (x+w, h - y)

                const topY = h - (pdfY + rectH);
                const bottomY = h - pdfY;

                // Top
                lines.push({ x1: x, y1: topY, x2: x + w, y2: topY, type: 'stroke' });
                // Right
                lines.push({ x1: x + w, y1: topY, x2: x + w, y2: bottomY, type: 'stroke' });
                // Bottom
                lines.push({ x1: x + w, y1: bottomY, x2: x, y2: bottomY, type: 'stroke' });
                // Left
                lines.push({ x1: x, y1: bottomY, x2: x, y2: topY, type: 'stroke' });
            }
        }
        return lines;
    }

    private extractFormFields(annotations: any[]): FormField[] {
        const h = this.viewport.height;
        return annotations
            .filter(ann => ann.subtype === 'Widget')
            .map(ann => {
                const rect = ann.rect; // [x1, y1, x2, y2]
                // PDF: x1, y1 (bottom-left), x2, y2 (top-right)
                // HTML: need x, y, w, h (Top-Left based)

                const pdfX1 = rect[0];
                const pdfY1 = rect[1];
                const pdfX2 = rect[2];
                const pdfY2 = rect[3];

                // Flip Y
                const htmlX = pdfX1;
                const htmlY = h - pdfY2; // Top of rect
                const htmlW = pdfX2 - pdfX1;
                const htmlH = pdfY2 - pdfY1;

                return {
                    id: ann.id,
                    type: this.getFormType(ann),
                    name: ann.fieldName || '',
                    value: ann.fieldValue,
                    rect: [htmlX, htmlY, htmlX + htmlW, htmlY + htmlH], // Now normalized
                    isReadOnly: ann.readOnly
                };
            });
    }

    private getFormType(ann: any): FormField['type'] {
        if (ann.checkBox) return 'checkbox';
        if (ann.radioButton) return 'radio';
        if (ann.combo) return 'select';
        if (ann.buttonWidgetAnnotation) return 'button';
        return 'text';
    }

    private detectTables(textItems: any[], lines: VectorLine[]): SemanticElement[] {
        const TOLERANCE = 2;
        const vLines = lines.filter(l => Math.abs(l.x1 - l.x2) < TOLERANCE).map(l => ({ ...l, x1: Math.round(l.x1), x2: Math.round(l.x1) }));
        const hLines = lines.filter(l => Math.abs(l.y1 - l.y2) < TOLERANCE).map(l => ({ ...l, y1: Math.round(l.y1), y2: Math.round(l.y1) }));

        if (vLines.length < 2 || hLines.length < 2) return [];

        const xCoords = Array.from(new Set(vLines.map(l => l.x1))).sort((a, b) => a - b);
        const yCoords = Array.from(new Set(hLines.map(l => l.y1))).sort((a, b) => a - b);

        const cells: SemanticElement[] = [];

        for (let i = 0; i < xCoords.length - 1; i++) {
            for (let j = 0; j < yCoords.length - 1; j++) {
                const x1 = xCoords[i];
                const x2 = xCoords[i + 1];
                const y1 = yCoords[j];
                const y2 = yCoords[j + 1];

                const hasLeft = vLines.some(l => Math.abs(l.x1 - x1) < TOLERANCE && l.y1 <= y1 + TOLERANCE && l.y2 >= y2 - TOLERANCE);
                const hasRight = vLines.some(l => Math.abs(l.x1 - x2) < TOLERANCE && l.y1 <= y1 + TOLERANCE && l.y2 >= y2 - TOLERANCE);
                const hasBottom = hLines.some(l => Math.abs(l.y1 - y1) < TOLERANCE && l.x1 <= x1 + TOLERANCE && l.x2 >= x2 - TOLERANCE);
                const hasTop = hLines.some(l => Math.abs(l.y1 - y2) < TOLERANCE && l.x1 <= x1 + TOLERANCE && l.x2 >= x2 - TOLERANCE);

                if (hasLeft && hasRight && hasBottom && hasTop) {
                    cells.push({
                        type: 'text',
                        x: x1,
                        y: y1,
                        width: x2 - x1,
                        height: y2 - y1,
                        content: [],
                        style: { fontFamily: '', fontSize: 0, fontWeight: 400, color: '', isBold: false, isItalic: false },
                        attributes: { role: 'cell' }
                    });
                }
            }
        }

        if (cells.length === 0) return [];

        cells.forEach(cell => {
            const cellText = textItems.filter(item =>
                item.x >= cell.x - TOLERANCE &&
                item.x + item.width <= cell.x + cell.width + TOLERANCE &&
                item.y >= cell.y - TOLERANCE &&
                item.y + item.height <= cell.y + cell.height + TOLERANCE
            );

            if (cellText.length > 0) {
                cellText.sort((a, b) => b.y - a.y || a.x - b.x);
                const contentStr = cellText.map(t => t.str).join(' ');
                cell.content = contentStr;
                cell.style = {
                    fontFamily: cellText[0].fontName,
                    fontSize: cellText[0].fontSize,
                    fontWeight: 400,
                    color: '#000000',
                    isBold: false,
                    isItalic: false
                };
            }
        });

        const activeCells = cells.filter(c => typeof c.content === 'string' && c.content.length > 0 || true);
        if (activeCells.length === 0) return [];

        const minX = Math.min(...activeCells.map(c => c.x));
        const minY = Math.min(...activeCells.map(c => c.y));
        const maxX = Math.max(...activeCells.map(c => c.x + c.width));
        const maxY = Math.max(...activeCells.map(c => c.y + c.height));

        return [{
            type: 'table',
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
            children: activeCells.sort((a, b) => (a.y - b.y) || (a.x - b.x))
        }];
    }

    private isTextInTable(item: any, tables: SemanticElement[]): boolean {
        // Check if item falls within any table bounding box
        return tables.some(table =>
            item.x >= table.x &&
            item.x <= table.x + table.width &&
            item.y >= table.y &&
            item.y <= table.y + table.height
        );
    }

    private clusterText(items: any[]): SemanticElement[] {
        if (items.length === 0) return [];

        const sorted = [...items].sort((a, b) => {
            if (Math.abs(a.y - b.y) > (Math.min(a.height, b.height) / 2)) {
                return a.y - b.y;
            }
            return a.x - b.x;
        });

        const lines: any[][] = [];
        let currentLine: any[] = [];
        let lastY = sorted[0].y;

        for (const item of sorted) {
            if (Math.abs(item.y - lastY) < (item.height / 2)) {
                currentLine.push(item);
            } else {
                currentLine.sort((a, b) => a.x - b.x);
                lines.push(currentLine);
                currentLine = [item];
                lastY = item.y;
            }
        }
        if (currentLine.length > 0) {
            currentLine.sort((a, b) => a.x - b.x);
            lines.push(currentLine);
        }

        const blocks: SemanticElement[] = [];
        let currentBlockItems: any[] = [];

        const allFontSizes = items.map(i => i.fontSize);
        const avgFontSize = allFontSizes.reduce((a, b) => a + b, 0) / (allFontSizes.length || 1);

        lines.forEach((line, index) => {
            const lineY = line[0].y;
            const prevLine = lines[index - 1];
            const prevLineY = prevLine ? prevLine[0].y : lineY;
            const lineHeight = line[0].height;

            const gap = Math.abs(prevLineY - lineY) - lineHeight;

            const isNewBlock = !prevLine ||
                gap > lineHeight * 1.5 ||
                line[0].fontSize !== prevLine[0].fontSize;

            if (isNewBlock && currentBlockItems.length > 0) {
                blocks.push(this.createBlockElement(currentBlockItems, avgFontSize));
                currentBlockItems = [];
            }
            currentBlockItems.push(...line);
        });

        if (currentBlockItems.length > 0) {
            blocks.push(this.createBlockElement(currentBlockItems, avgFontSize));
        }

        return blocks;
    }

    private createBlockElement(items: any[], avgFontSize: number): SemanticElement {
        const firstItem = items[0];
        const fontSize = firstItem.fontSize;
        const textContent = items.map(i => i.str).join('');

        let type: SemanticElement['type'] = 'paragraph';
        if (fontSize > avgFontSize * 1.5) type = 'heading';

        if (/^[•\-\*]\s/.test(textContent) || /^\d+\.\s/.test(textContent)) {
            type = 'list';
        }

        const minX = Math.min(...items.map(i => i.x));
        const maxX = Math.max(...items.map(i => i.x + i.width));
        const minY = Math.min(...items.map(i => i.y));
        const maxY = Math.max(...items.map(i => i.y + i.height));

        return {
            type,
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
            content: this.reconstructSentence(items),
            style: {
                fontFamily: firstItem.fontName,
                fontSize: fontSize,
                fontWeight: 400,
                color: '#000000',
                isBold: false,
                isItalic: false
            }
        };
    }

    private reconstructSentence(items: any[]): string {
        let str = '';
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (i > 0) {
                const prev = items[i - 1];
                if (Math.abs(prev.y - item.y) > item.height / 2) {
                    str += ' ';
                } else {
                    const dist = item.x - (prev.x + prev.width);
                    if (dist > item.height * 0.2) {
                        str += ' ';
                    }
                }
            }
            str += item.str;
        }
        return str.trim();
    }

    private convertFormsToElements(fields: FormField[]): SemanticElement[] {
        return fields.map(f => ({
            type: 'form-field',
            x: f.rect[0],
            y: f.rect[1],
            width: f.rect[2] - f.rect[0],
            height: f.rect[3] - f.rect[1],
            attributes: {
                inputType: f.type,
                name: f.name,
                value: f.value || ''
            }
        }));
    }

    private async extractImages(): Promise<SemanticElement[]> {
        return [];
    }
}
