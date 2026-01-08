"use client";

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const Navbar = () => {
    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                    className="h-16 flex items-center justify-between"
                    aria-label="Main navigation"
                >
                    {/* Left: brand */}
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center">
                            <span
                                className={`${poppins.className} text-lg font-semibold tracking-tight text-slate-900`}
                            >
                                Ann's Wonderworks
                            </span>
                        </Link>
                    </div>

                    {/* Center: nav links (hidden on small screens) */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6">
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/story"
                            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                        >
                            Story
                        </Link>
                    </div>

                    {/* Right: auth actions */}
                    <div className="flex items-center space-x-3">
                        <SignedOut>
                            <SignInButton>
                                <Button variant="ghost" className="hidden sm:inline-flex">
                                    Sign in
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className="hidden sm:inline-flex">Sign up</Button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
};
