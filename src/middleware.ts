/**
 * Middleware for handling authentication and routing.
 * Utilizes Better Auth for authentication management.
 * 
 * @module middleware
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';
/**
 * Middleware function to handle authentication and routing.
 * @param {NextRequest} request - The incoming request object
 * @returns {NextResponse} - The response object after processing
 */
export function middleware(request: NextRequest) {
    const session = getSessionCookie(request);

    // Redirect to login if not authenticated and trying to access a protected route
    if(!session || session == null)
    {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If authenticated and trying to access login or signup, redirect to dashboard
    if(session)
    {
        if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') {
            const url = request.nextUrl.clone();
            url.pathname = '/dashboard';
            return NextResponse.redirect(url);
        }
    }

    // Continue to the requested page if no redirection is needed (User is authenticated or accessing a public route)
    return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard"], // Specify the routes the middleware applies to
};