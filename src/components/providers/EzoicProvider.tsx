'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function EzoicProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Refresh Ezoic ads on route change
    if (typeof window !== 'undefined' && (window as any).ezstandalone) {
      try {
        const ez = (window as any).ezstandalone;
        if (ez.enabled) {
          ez.refresh();
        } else {
          ez.enable();
          ez.displayContent();
        }
      } catch (e) {
        console.error('Ezoic refresh error:', e);
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
