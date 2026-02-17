
import { supabaseAdmin } from '@/lib/supabase/admin';
import crypto from 'crypto';

export interface ApiKey {
    id: string;
    user_id: string;
    key_hash: string;
    name: string;
    created_at: string;
    last_used_at: string | null;
    status: 'active' | 'revoked';
}

export class ApiService {
    /**
     * Validate an API key
     * Returns true if valid, false otherwise
     */
    static async validateApiKey(apiKey: string): Promise<boolean> {
        if (!apiKey || !apiKey.startsWith('sk_live_')) {
            return false;
        }

        const keyHash = this.hashKey(apiKey);

        const { data: key, error } = await supabaseAdmin
            .from('api_keys')
            .select('id, status')
            .eq('key_hash', keyHash)
            .single();

        if (error || !key || key.status !== 'active') {
            return false;
        }

        // Update last used asynchronously (floating promise)
        this.updateLastUsed(key.id);

        return true;
    }

    /**
     * Create a new API key for a user
     * Returns the plaintext key (only time it's visible)
     */
    static async createApiKey(userId: string, name: string): Promise<{ key: string; id: string }> {
        const rawKey = `sk_live_${crypto.randomBytes(24).toString('hex')}`;
        const keyHash = this.hashKey(rawKey);

        const { data, error } = await supabaseAdmin
            .from('api_keys')
            .insert({
                user_id: userId,
                key_hash: keyHash,
                name,
                status: 'active',
            })
            .select('id')
            .single();

        if (error) {
            throw new Error(`Failed to create API key: ${error.message}`);
        }

        return { key: rawKey, id: data.id };
    }

    /**
     * Revoke an API key
     */
    static async revokeApiKey(keyId: string, userId: string): Promise<void> {
        const { error } = await supabaseAdmin
            .from('api_keys')
            .update({ status: 'revoked' })
            .eq('id', keyId)
            .eq('user_id', userId); // Ensure user owns the key

        if (error) {
            throw new Error(`Failed to revoke API key: ${error.message}`);
        }
    }

    /**
     * List API keys for a user
     */
    static async listApiKeys(userId: string): Promise<ApiKey[]> {
        const { data, error } = await supabaseAdmin
            .from('api_keys')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) {
            throw new Error(`Failed to list API keys: ${error.message}`);
        }

        return data as ApiKey[];
    }

    /**
     * Update last used timestamp
     */
    private static async updateLastUsed(keyId: string): Promise<void> {
        await supabaseAdmin
            .from('api_keys')
            .update({ last_used_at: new Date().toISOString() })
            .eq('id', keyId);
    }

    /**
     * Hash the API key using SHA-256
     */
    private static hashKey(key: string): string {
        return crypto.createHash('sha256').update(key).digest('hex');
    }
}
