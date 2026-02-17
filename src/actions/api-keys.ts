
'use server';

import { ApiService } from '@/lib/server/api-service';

import { createClient } from '@/lib/supabase/server';

async function getUserId(): Promise<string | null> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return user?.id ?? null;
}

export async function createApiKeyAction(name: string) {
    try {
        const userId = await getUserId();

        if (!userId) {
            throw new Error('Unauthorized');
        }

        const result = await ApiService.createApiKey(userId, name);
        return { success: true, ...result };
    } catch (error) {
        console.error('Failed to create API key:', error);
        return { success: false, error: 'Failed to create API key' };
    }
}

export async function listApiKeysAction() {
    try {
        const userId = await getUserId();

        if (!userId) {
            throw new Error('Unauthorized');
        }

        const keys = await ApiService.listApiKeys(userId);
        return { success: true, keys };
    } catch (error) {
        console.error('Failed to list API keys:', error);
        return { success: false, error: 'Failed to retrieve API keys' };
    }
}

export async function revokeApiKeyAction(keyId: string) {
    try {
        const userId = await getUserId();

        if (!userId) {
            throw new Error('Unauthorized');
        }

        await ApiService.revokeApiKey(keyId, userId);
        return { success: true };
    } catch (error) {
        console.error('Failed to revoke API key:', error);
        return { success: false, error: 'Failed to revoke API key' };
    }
}
