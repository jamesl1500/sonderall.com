/**
 * Better Auth API Route Handler
 * Handles all authentication-related requests
 * 
 * @module api/auth/[...all]/route
 */
import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@/libs/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Export POST and GET handlers for authentication routes
 * 
 * @exports {Object} - Contains POST and GET handlers
 */
export const { POST, GET } = toNextJsHandler(auth);