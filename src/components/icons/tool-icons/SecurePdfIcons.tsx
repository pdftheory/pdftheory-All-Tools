import React from 'react';
import type { ToolIconProps } from '../ToolIcons';

// ==================== SECURE PDF ICONS (Slate) ====================

// Protect PDF - Lock on document
export const ProtectPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="protectGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#protectGrad1)" opacity="0.3" />
        <path d="M12 14H28M12 22H20" stroke="url(#protectGrad1)" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="16" height="14" rx="3" fill="url(#protectGrad1)" />
        <path d="M32 24V20C32 17.239 34.239 15 37 15C39.761 15 42 17.239 42 20V24" stroke="url(#protectGrad1)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="37" cy="31" r="2" fill="white" />
    </svg>
);

// Unlock PDF - Open padlock
export const UnlockPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="unlockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="28" height="36" rx="3" fill="url(#unlockGrad1)" opacity="0.3" />
        <path d="M12 14H28M12 22H24M12 30H28" stroke="url(#unlockGrad1)" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="24" width="16" height="14" rx="3" fill="url(#unlockGrad1)" />
        <path d="M42 24V16C42 13.239 39.761 11 37 11C34.239 11 32 13.239 32 16" stroke="url(#unlockGrad1)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="36" cy="31" r="2" fill="white" />
    </svg>
);

// Encrypt PDF - Key icon
export const EncryptPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="encryptGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="6" width="26" height="32" rx="3" fill="url(#encryptGrad1)" opacity="0.3" />
        <path d="M12 16H26M12 24H22" stroke="url(#encryptGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="18" r="8" stroke="url(#encryptGrad1)" strokeWidth="4" fill="none" />
        <path d="M38 26V38" stroke="url(#encryptGrad1)" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 32H44" stroke="url(#encryptGrad1)" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 38H42" stroke="url(#encryptGrad1)" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

// Redact PDF - Black bar censoring text
export const RedactPdfIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="redactGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="36" height="40" rx="3" fill="url(#redactGrad1)" opacity="0.2" />
        <path d="M12 14H36" stroke="url(#redactGrad1)" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="20" width="24" height="6" rx="1" fill="#000" />
        <path d="M12 34H30" stroke="url(#redactGrad1)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Sign PDF with cert - Certificate ribbon
export const SignWithCertIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="certGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="32" rx="3" fill="url(#certGrad1)" opacity="0.3" />
        <path d="M12 14H26M12 22H22M12 30H18" stroke="url(#certGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="22" r="10" fill="url(#certGrad1)" />
        <path d="M34 22L37 25L43 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 32L38 36L42 32V44L38 40L34 44V32Z" fill="url(#certGrad1)" opacity="0.7" />
    </svg>
);

// Permissions - Settings gear on document
export const PermissionsIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="permGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="6" y="4" width="26" height="34" rx="3" fill="url(#permGrad1)" opacity="0.3" />
        <path d="M12 14H26M12 22H20" stroke="url(#permGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="32" r="10" fill="url(#permGrad1)" />
        <circle cx="38" cy="32" r="4" stroke="white" strokeWidth="2" fill="none" />
        <path d="M38 22V26M38 38V42M28 32H32M44 32H48M30 24L33 27M43 37L46 40M30 40L33 37M43 27L46 24" stroke="url(#permGrad1)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Remove Metadata - Info with strike/remove
export const RemoveMetadataIcon = ({ className, size = 24 }: ToolIconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="remMetaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </linearGradient>
        </defs>
        <rect x="8" y="4" width="28" height="36" rx="3" fill="url(#remMetaGrad1)" opacity="0.3" />
        <path d="M14 14H30M14 22H26M14 30H30" stroke="url(#remMetaGrad1)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="36" r="10" fill="url(#remMetaGrad1)" />
        <text x="36" y="41" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">i</text>
        <path d="M30 42L42 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
