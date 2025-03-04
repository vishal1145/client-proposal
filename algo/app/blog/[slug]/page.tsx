// @ts-nocheck

import type { Metadata } from "next";
import { BlogDetail } from "@/components/sections/BlogDetail";
import Footer from "@/components/sections/Footer";

interface PageProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = params.slug;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    try {
        const response = await fetch(`${baseUrl}/api/addBlogData?link=/blog/${slug}`, { cache: "no-store" });

        if (!response.ok) {
            throw new Error("Failed to fetch blog data");
        }

        const data = await response.json();
        const blog = data.data;

        const imageUrl = blog.mainImage.startsWith("http")
            ? blog.mainImage
            : `${baseUrl}${blog.mainImage}`;

        return {
            metadataBase: new URL(baseUrl),
            title: blog.title,
            description: blog.content,
            openGraph: {
                title: blog.title,
                description: blog.content,
                type: "article",
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: blog.title,
                description: blog.content,
                images: [imageUrl],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "Blog Post",
            description: "Read our latest blog post",
        };
    }
}

export default function BlogPostPage({ params }: PageProps) {
    return (
        <main className="min-h-screen bg-white">
            <BlogDetail slug={params.slug} />
            <Footer />
        </main>
    );
}
