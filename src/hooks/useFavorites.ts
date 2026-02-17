'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'pdftheory-favorite-tools';
const EVENT_KEY = 'pdftheory-favorites-changed';

/**
 * Custom hook to manage favorite tools
 * Uses localStorage for persistent storage and custom events for cross-component synchronization
 */
export function useFavorites() {
    // Initialize state function to avoid hydration mismatch
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Helper to get favorites from storage
    const getStoredFavorites = (): string[] => {
        if (typeof window === 'undefined') return [];
        try {
            const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Failed to parse favorites:', error);
            return [];
        }
    };

    // Load initial favorites and set up listeners
    useEffect(() => {
        // Initial load
        setFavorites(getStoredFavorites());
        setIsLoaded(true);

        // Handler for updates
        const handleStorageChange = () => {
            setFavorites(getStoredFavorites());
        };

        // Listen for storage events (cross-tab) and custom events (same-tab)
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener(EVENT_KEY, handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener(EVENT_KEY, handleStorageChange);
        };
    }, []);

    /**
     * Update favorites in localStorage and dispatch event
     */
    const updateFavorites = useCallback((newFavorites: string[]) => {
        try {
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
            setFavorites(newFavorites);
            // Dispatch custom event to notify other components
            window.dispatchEvent(new Event(EVENT_KEY));
        } catch (error) {
            console.error('Failed to save favorites:', error);
        }
    }, []);

    /**
     * Check if a tool is in favorites
     */
    const isFavorite = useCallback((toolId: string): boolean => {
        return favorites.includes(toolId);
    }, [favorites]);

    /**
     * Toggle a tool's favorite status
     */
    const toggleFavorite = useCallback((toolId: string): void => {
        const currentFavorites = getStoredFavorites(); // Always get fresh state for actions
        let newFavorites: string[];

        if (currentFavorites.includes(toolId)) {
            newFavorites = currentFavorites.filter(id => id !== toolId);
        } else {
            newFavorites = [...currentFavorites, toolId];
        }
        updateFavorites(newFavorites);
    }, [updateFavorites]);

    /**
     * Add a tool to favorites
     */
    const addFavorite = useCallback((toolId: string): void => {
        const currentFavorites = getStoredFavorites();
        if (!currentFavorites.includes(toolId)) {
            updateFavorites([...currentFavorites, toolId]);
        }
    }, [updateFavorites]);

    /**
     * Remove a tool from favorites
     */
    const removeFavorite = useCallback((toolId: string): void => {
        const currentFavorites = getStoredFavorites();
        updateFavorites(currentFavorites.filter(id => id !== toolId));
    }, [updateFavorites]);

    /**
     * Clear all favorites
     */
    const clearFavorites = useCallback((): void => {
        updateFavorites([]);
    }, [updateFavorites]);

    return {
        favorites,
        isLoaded,
        isFavorite,
        toggleFavorite,
        addFavorite,
        removeFavorite,
        clearFavorites,
        favoritesCount: favorites.length,
    };
}

export default useFavorites;
