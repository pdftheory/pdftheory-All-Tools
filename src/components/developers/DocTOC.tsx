'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export function DocTOC() {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const scanHeadings = () => {
            const items = Array.from(document.querySelectorAll('h2, h3'))
                .map((element) => ({
                    id: element.id,
                    text: element.textContent || '',
                    level: parseInt(element.tagName.substring(1)),
                }))
                .filter(item => item.id);

            setHeadings(items);
        };

        scanHeadings();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0% -80% 0%' }
        );

        document.querySelectorAll('h2, h3').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Header height + some margin
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className="text-sm space-y-1">
            {headings.map((heading) => (
                <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={cn(
                        "block py-1.5 px-3 transition-all duration-200 rounded-md",
                        heading.level === 3 ? "ml-4" : "ml-0",
                        activeId === heading.id
                            ? "bg-blue-50 text-blue-600 font-semibold dark:bg-blue-900/20"
                            : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    )}
                >
                    {heading.text}
                </a>
            ))}
        </nav>
    );
}
