import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

// Fallback Icon
export const DefaultToolIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="defaultGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9E9E9E" />
                <stop offset="100%" stopColor="#616161" />
            </linearGradient>
        </defs>
        <rect x="10" y="6" width="28" height="36" rx="3" fill="url(#defaultGrad1)" />
        <path d="M16 14H32M16 22H32M16 30H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
