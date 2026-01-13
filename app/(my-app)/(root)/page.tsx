import configPromise from '@payload-config'
import { getPayload } from "payload";

export default async function Home() {
    const payload = await getPayload({
        config: configPromise
    });

    const data = await payload.find({
        collection: 'users',
    });

    return (
        <pre className="p-4 bg-gray-50 rounded">{JSON.stringify(data, null, 2)}</pre>
    )
}