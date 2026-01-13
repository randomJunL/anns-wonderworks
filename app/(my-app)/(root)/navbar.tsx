"use client";

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavItemProps) => {
    return (
        <Button variant="outline" asChild className={cn("rounded-full hover:bg-transparent hover:border-primary border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white",)}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/contact", children: "Contact" }
]
export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

                    {/* Navbar Sidebar */}

                    <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

                    {/* Center: nav items */}
                    <div className="items-center gap-4 hidden lg:flex">
                        {
                            navbarItems.map((item) => (
                                <NavbarItem key={item.href} href={item.href} isActive={item.href === pathname}>
                                    {item.children}
                                </NavbarItem>
                            ))
                        }
                    </div>
                    {/* Right: auth actions (placeholder for Payload auth) */}
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" onClick={() => window.location.href = '/auth/sign-in'} className="hidden sm:inline-flex">
                            Sign in
                        </Button>
                        <Button variant="ghost" onClick={() => fetch('/api/auth/logout', { method: 'POST' }).then(() => window.location.reload())} className="hidden sm:inline-flex">
                            Sign out
                        </Button>
                    </div>

                    <div className="flex lg:hidden size-center justify-center">
                        <Button onClick={() => setIsSidebarOpen(true)} variant="ghost" className="size-12 border-transparent bg-white">
                            <MenuIcon />
                        </Button>
                    </div>
                </nav>
            </div >
        </header >
    );
};
