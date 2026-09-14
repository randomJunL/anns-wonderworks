"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Category } from "@/payload-types";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./use-dropdown-positon";
import { SubcategoryMenu } from "./subcategory-menu";
import Link from "next/link";


interface Props {
    category: Category;
}

export const CategoryDropdown = ({ category }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { getDropdownPosition } = useDropdownPosition(dropdownRef);
    const subcategories = category.subcategories?.docs?.filter(
        (subcategory): subcategory is Category => typeof subcategory !== "string"
    ) ?? [];

    const onMouseEnter = () => {
        if (subcategories.length > 0) {
            setIsOpen(true);
        }
    };
    const onMouseLeave = () => {
        setIsOpen(false);
    };

    const dropdownPosition = getDropdownPosition();

    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Button
                variant="outline"
                asChild
                className={cn("h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black")}
            >
                <Link href={`/category/${category.id}`}>{category.name}</Link>
            </Button>
            <SubcategoryMenu
                category={category}
                subcategories={subcategories}
                isOpen={isOpen}
                position={dropdownPosition}
            />
        </div>

    );
};

