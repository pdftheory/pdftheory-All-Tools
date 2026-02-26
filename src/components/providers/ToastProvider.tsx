'use client';

import React from 'react';
import { Toast } from '@/components/ui/Toast';
import { useToastStore } from '@/hooks/useToast';

/**
 * ToastProvider
 * Renders the global toast container and managed active toasts.
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { toasts, removeToast } = useToastStore();

    return (
        <>
            {children}
            {/* Toast Portal/Container */}
            <div
                className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 p-6 sm:max-w-[420px] pointer-events-none"
                aria-live="polite"
                role="region"
            >
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                        duration={toast.duration}
                        onClose={removeToast}
                    />
                ))}
            </div>
        </>
    );
};
