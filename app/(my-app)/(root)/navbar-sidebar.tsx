import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarSidebarProps {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}


export const NavbarSidebar = ({ items, open, onOpenChange }: NavbarSidebarProps) => {

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="w-64">
                <SheetHeader>
                    <div>
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea >
                    {items.map((item) => (
                        <Link key={item.href} href={item.href}
                            className={"w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"}>
                            {item.children}
                        </Link>

                    ))}
                </ScrollArea>
            </SheetContent>
        </Sheet >
    );
};