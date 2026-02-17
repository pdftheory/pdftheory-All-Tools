'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface LicenseModalProps {
    isOpen: boolean;
    onClose: () => void;
    locale: string;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose, locale }) => {
    const t = useTranslations('common');

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="License Information"
            size="sm"
        >
            <div className="space-y-4 text-sm">
                <div className="bg-[hsl(var(--color-muted))/0.5] p-3 rounded-lg border border-[hsl(var(--color-border))] text-center">
                    <p className="font-bold text-[hsl(var(--color-foreground))]">
                        AGPL-3.0
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <Link
                        href={`/${locale}/source-code`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-black text-white rounded-md">
                                <Code size={16} />
                            </div>
                            <span className="font-medium">Source Code</span>
                        </div>
                        <ExternalLink size={14} className="text-[hsl(var(--color-muted-foreground))] group-hover:text-[hsl(var(--color-foreground))]" />
                    </Link>
                </div>

                <div className="pt-2 flex justify-end">
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
