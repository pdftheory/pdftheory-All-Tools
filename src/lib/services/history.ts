import { createClient } from '@/lib/supabase/client';

export interface HistoryItem {
    id: string;
    user_id: string;
    action_type: string;
    file_name: string;
    metadata: any;
    created_at: string;
}

// Flag to track if history table is available (avoids repeated error logs)
let historyTableAvailable: boolean | null = null;

export const HistoryService = {
    /**
     * Log a new activity to the user's history
     * Fails silently if the user_history table doesn't exist
     */
    async addToHistory(userId: string, action: string, fileName: string, metadata: any = {}) {
        // Skip if we already know the table doesn't exist
        if (historyTableAvailable === false) {
            return { success: false, error: 'History table not configured' };
        }

        const supabase = createClient();
        try {
            const { error } = await supabase
                .from('user_history')
                .insert({
                    user_id: userId,
                    action_type: action,
                    file_name: fileName,
                    metadata
                });

            if (error) {
                // Check if it's a "table not found" error
                if (error.code === 'PGRST205' || error.message?.includes('user_history')) {
                    historyTableAvailable = false;
                    // Only log in development
                    if (process.env.NODE_ENV === 'development') {
                        console.debug('History logging disabled: user_history table not found');
                    }
                    return { success: false, error: 'History table not configured' };
                }
                // Log other errors only in development
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Error logging history:', error.message);
                }
                return { success: false, error };
            }
            historyTableAvailable = true;
            return { success: true };
        } catch (err) {
            // Fail silently in production
            if (process.env.NODE_ENV === 'development') {
                console.warn('Unexpected error logging history:', err);
            }
            return { success: false, error: err };
        }
    },

    /**
     * Fetch recent history for a user
     * Returns empty array if the user_history table doesn't exist
     */
    async getUserHistory(userId: string, limit: number = 20) {
        // Skip if we already know the table doesn't exist
        if (historyTableAvailable === false) {
            return { success: false, error: 'History table not configured', data: [] };
        }

        const supabase = createClient();
        try {
            const { data, error } = await supabase
                .from('user_history')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false })
                .limit(limit);

            if (error) {
                // Check if it's a "table not found" error
                if (error.code === 'PGRST205' || error.message?.includes('user_history')) {
                    historyTableAvailable = false;
                    return { success: false, error: 'History table not configured', data: [] };
                }
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Error fetching history:', error.message);
                }
                return { success: false, error, data: [] };
            }
            historyTableAvailable = true;
            return { success: true, data: data as HistoryItem[] };
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('Unexpected error fetching history:', err);
            }
            return { success: false, error: err, data: [] };
        }
    }
};

