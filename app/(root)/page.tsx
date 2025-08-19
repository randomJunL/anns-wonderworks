"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { Children, use, useEffect } from "react";

import { useStore } from "zustand";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);


    return (
        <div className="p-4">

        </div>

    );
}

export default SetupPage;