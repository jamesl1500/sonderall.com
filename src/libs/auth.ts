/**
 * Auth library
 * Makes use of Better Auth for authentication
 * 
 * @module libs/auth
 */
import { betterAuth } from 'better-auth';
import { pool } from '@/libs/db';

/**
 * Initialize Better Auth (Server-side only)
 * 
 * @returns {BetterAuth} - An instance of BetterAuth
 */
export const auth = betterAuth({
    database: pool,
    emailAndPassword: {
        enabled: true,
    },
    secret: process.env.BETTER_AUTH_SECRET,
});