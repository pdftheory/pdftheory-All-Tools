import { useCallback } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { HistoryService } from '@/lib/services/history';

/**
 * Hook to easily log tool usage to user history.
 * Returns a logToolUsage function that can be called after successful processing.
 * Usage example:
 *   const { logToolUsage } = useHistoryLogger();
 *   // After processing completes:
 *   logToolUsage('merge_pdf', 'my-document.pdf', { page_count: 5 });
 */
export function useHistoryLogger() {
    const { user } = useAuth();

    const logToolUsage = useCallback(
        async (actionType: string, fileName: string, metadata: Record<string, any> = {}) => {
            if (!user) {
                console.debug('History logging skipped: no user logged in');
                return { success: false, reason: 'no_user' };
            }

            try {
                const result = await HistoryService.addToHistory(
                    user.id,
                    actionType,
                    fileName,
                    metadata
                );
                return result;
            } catch (error) {
                console.error('Failed to log history:', error);
                return { success: false, error };
            }
        },
        [user]
    );

    return { logToolUsage, user };
}
