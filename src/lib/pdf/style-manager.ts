export class StyleManager {
    private styles: Map<string, string> = new Map();
    private ruleCounter = 1;

    public getStyleClass(style: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: string | number;
        color?: string;
    }): string {
        const key = JSON.stringify(style);

        if (this.styles.has(key)) {
            return this.styles.get(key)!;
        }

        const className = `s${this.ruleCounter++}`;
        this.styles.set(key, className);
        return className;
    }

    public getCss(): string {
        let css = `
      .pdf-page {
        position: relative;
        overflow: hidden;
        background: white;
      }
      .pdf-text {
        position: absolute;
        white-space: pre;
        line-height: 1.2;
      }
    `;

        this.styles.forEach((className, key) => {
            const style = JSON.parse(key);
            css += `.${className} {
        font-family: "${style.fontFamily || 'sans-serif'}";
        font-size: ${style.fontSize ? `${style.fontSize}px` : 'inherit'};
        font-weight: ${style.fontWeight || 'normal'};
        color: ${style.color || 'inherit'};
      }\n`;
        });

        return css;
    }
}
