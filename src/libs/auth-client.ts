import { createAuthClient } from 'better-auth/react';

/**
 * Initialize Better Auth Client (Client-side only)
 * @returns {BetterAuth} - An instance of BetterAuth for client-side usage
 */
export const authClient = createAuthClient();