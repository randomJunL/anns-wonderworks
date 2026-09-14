import configPromise from "@payload-config"
import { getPayload } from "payload"
import { notFound } from "next/navigation"

interface Props {
    params: Promise<{ id: string }>;
}

async function getCategory(id: string) {
    try {
        const payload = await getPayload({ config: configPromise });
        return await payload.findByID({
            collection: "categories",
            id,
            depth: 1,
        });
    } catch {
        notFound();
    }
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params;
    const category = await getCategory(id);

    return (
        <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight">{category.name}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">{category.description}</p>
        </section>
    );
}
