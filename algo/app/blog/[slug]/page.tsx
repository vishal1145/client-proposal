"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogDetail } from "@/components/sections/BlogDetail";
import Footer from "@/components/sections/Footer";

type BlogData = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  htmlContent: string;
};

export default function BlogPostPage() {
  const { slug } = useParams(); // Get the slug from URL
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Prevent early fetch

    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/blog-detail?link=/blog/${slug}`
        );
        if (!response.ok) throw new Error("Failed to fetch blog data");

        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blogData) return <p>Blog not found</p>;

  return (
    <main className="min-h-screen bg-white">
      <BlogDetail
        title={blogData.title}
        category={blogData.category}
        description={blogData.description}
        image={blogData.imageUrl} // Use correct API field
        content={blogData.htmlContent} // Use htmlContent instead of content
      />
      <Footer />
    </main>
  );
}
