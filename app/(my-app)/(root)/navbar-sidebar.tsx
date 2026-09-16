import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingBag, User } from "lucide-react";

interface NavbarSidebarProps {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}


export const NavbarSidebar = ({ items, open, onOpenChange, children }: NavbarSidebarProps) => {

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent side="left" className="w-64">
                <SheetHeader>
                    <div>
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <SheetDescription className="sr-only">
                    Browse the store, visit your account, or view your cart.
                </SheetDescription>
                <ScrollArea className="min-h-0 flex-1">
                    {items.map((item) => (
                        <SheetClose asChild key={item.href}>
                        <Link href={item.href}
                            className={"w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"}>
                            {item.children}
                        </Link>
                        </SheetClose>

                    ))}
                    <div className="mt-4 border-t pt-4">
                        <SheetClose asChild>
                            <Link href="/account" className="flex min-h-11 items-center gap-3 p-4 text-base font-medium hover:bg-black hover:text-white">
                                <User className="size-5" aria-hidden="true" />
                                Your account
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/cart" className="flex min-h-11 items-center gap-3 p-4 text-base font-medium hover:bg-black hover:text-white">
                                <ShoppingBag className="size-5" aria-hidden="true" />
                                Shopping cart
                            </Link>
                        </SheetClose>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet >
    );
};
