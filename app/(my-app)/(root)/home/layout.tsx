import configPromise from '@payload-config'
import type { Category } from "@/payload-types";
import { getPayload } from "payload";

interface Props {
    children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
    let formattedData: Category[] = [];

    try {
        const payload = await getPayload({
            config: configPromise
        });

        const data = await payload.find({
            collection: 'categories',
            depth: 1,
            where: { parent: { exists: false } },
        });

        formattedData = data.docs;
    } catch (error) {
        console.warn("Categories are unavailable; rendering without them.", error);
    }

    return (
        <>
            <main className="flex-1 flex flex-col min-h-screen">
                {children}
            </main>
        </>
    );
};

export default Layout;
