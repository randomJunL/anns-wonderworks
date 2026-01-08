"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { Children, use, useEffect } from "react";
import { SignInButton } from "@clerk/nextjs";

import { useStore } from "zustand";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    // useEffect(() => {
    //     if (!isOpen) {
    //         onOpen();
    //     }
    // }, [isOpen, onOpen]);


    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold">Welcome to Ann's Wonderworks</h1>
            <Button onClick={onOpen}>Add Item</Button>
        </div>
    );
}

export default SetupPage;