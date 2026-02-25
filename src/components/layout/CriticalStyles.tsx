'use client';

import React from 'react';

/**
 * CriticalStyles component inlines essential CSS variables and layout styles
 * directly into the <head> to prevent FOUC and eliminate render-blocking waterfalls
 * for the most critical design tokens.
 */
export function CriticalStyles() {
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
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --radius-lg: 1rem;
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
}

/* Critical Header/Layout Shell */
header { height: 72px; }
.min-h-screen { min-height: 100vh; }
.flex-col { display: flex; flex-direction: column; }
`}} />
    );
}
