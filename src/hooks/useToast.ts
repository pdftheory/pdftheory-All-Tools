'use client';

import { create } from 'zustand';
import type { ToastVariant } from '@/components/ui/Toast';

export interface ToastMessage {
    id: string;
    message: string;
    variant: ToastVariant;
    duration?: number;
}

interface ToastStore {
    toasts: ToastMessage[];
    addToast: (message: string, variant?: ToastVariant, duration?: number) => void;
    removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    addToast: (message, variant = 'info', duration = 5000) => {
        const id = Math.random().toString(36).substring(2, 9);
        set((state) => ({
            toasts: [...state.toasts, { id, message, variant, duration }],
        }));
    },
    removeToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
        }));
    },
}));

/**
 * Hook to use the toast system
 */
export const useToast = () => {
    const addToast = useToastStore((state) => state.addToast);

    return {
        toast: addToast,
        success: (msg: string, duration?: number) => addToast(msg, 'success', duration),
        error: (msg: string, duration?: number) => addToast(msg, 'error', duration),
        warning: (msg: string, duration?: number) => addToast(msg, 'warning', duration),
        info: (msg: string, duration?: number) => addToast(msg, 'info', duration),
    };
};
