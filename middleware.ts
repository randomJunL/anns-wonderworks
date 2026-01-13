

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};

import { NextResponse } from 'next/server';

// Minimal pass-through middleware. Replace with real auth logic (Payload) as needed.
export function middleware(request: Request) {
    return NextResponse.next();
}
