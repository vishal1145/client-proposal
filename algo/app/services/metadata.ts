import type { Metadata } from "next";

async function fetchMetadata() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/metadata.json`);
    if (!res.ok) {
        throw new Error("Failed to fetch metadata");
    }
    return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
    const metadataConfig = await fetchMetadata();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const pageMetadata = metadataConfig["services"] || metadataConfig["default"];
    const imageUrl = `${baseUrl}${pageMetadata.image}`;

    return {
        title: pageMetadata.title,
        description: pageMetadata.description,
        openGraph: {
            title: pageMetadata.title,
            description: pageMetadata.description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: pageMetadata.title
                }
            ],
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: pageMetadata.title,
            description: pageMetadata.description,
            images: [imageUrl]
        }
    };
}
