'use client';

import React from 'react';

interface CriticalStylesProps {
  direction?: 'ltr' | 'rtl';
  locale?: string;
}

/**
 * CriticalStyles component inlines essential CSS variables and layout styles
 * directly into the <head> to prevent FOUC and eliminate render-blocking waterfalls
 * for the most critical design tokens.
 * 
 * Now with RTL and Locale-specific enhancements for professionality.
 */
export function CriticalStyles({ direction = 'ltr', locale = 'en' }: CriticalStylesProps) {
  // Professional font stacks for different languages
  const fontStack = {
    ar: "'IBM Plex Sans Arabic', 'Inter', system-ui, -apple-system, sans-serif",
    ja: "'Noto Sans JP', 'Inter', system-ui, -apple-system, sans-serif",
    ko: "'Noto Sans KR', 'Inter', system-ui, -apple-system, sans-serif",
    zh: "'Noto Sans SC', 'Inter', system-ui, -apple-system, sans-serif",
    'zh-TW': "'Noto Sans TC', 'Inter', system-ui, -apple-system, sans-serif",
    default: "'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
  };

  const activeFontStack = fontStack[locale as keyof typeof fontStack] || fontStack.default;

  return (
    <style dangerouslySetInnerHTML={{
      __html: `
:root {
  --color-primary: 221.2 83.2% 53.3%;
  --color-primary-foreground: 210 40% 98%;
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;
  --color-muted: 210 40% 96.1%;
  --color-muted-foreground: 215.4 16.3% 46.9%;
  --color-border: 214.3 31.8% 91.4%;
  --font-sans: ${activeFontStack};
  --radius-lg: 1rem;
  --radius-md: 0.75rem;
  --radius-sm: 0.5rem;
}

.dark {
  --color-primary: 217.2 91.2% 59.8%;
  --color-background: 222.2 84% 4.9%;
  --color-foreground: 210 40% 98%;
  --color-border: 217.2 32.6% 17.5%;
}

body {
  background-color: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  direction: ${direction};
}

/* Critical Layout Shell */
header { 
  height: 72px; 
  display: flex;
  align-items: center;
  ${direction === 'rtl' ? 'flex-direction: row-reverse;' : ''}
}

.min-h-screen { min-height: 100vh; }
.flex-col { display: flex; flex-direction: column; }

/* RTL specific fixes for flex and positioning */
[dir="rtl"] .flex-row { flex-direction: row-reverse; }
[dir="rtl"] .ml-auto { margin-right: auto; margin-left: 0; }
[dir="rtl"] .mr-auto { margin-left: auto; margin-right: 0; }
[dir="rtl"] .text-left { text-align: right; }
[dir="rtl"] .text-right { text-align: left; }

/* Smooth transitions for a professional feel */
.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
`}} />
  );
}
