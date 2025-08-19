"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Store Modal"
            description="Manage your store settings"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            {/* Modal content goes here */}
        </Modal>
    );

};
