"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { Children, use, useEffect } from "react";

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
        <div className="flex flex-col gap-y-4">
            <div>
                <p>Root Page</p>
            </div>
            <div>
                <Button onClick={onOpen}>Create Store</Button>
            </div>
            <div>
                <Input placeholder="Store Name" />
            </div>
        </div>

    );
}

export default SetupPage;