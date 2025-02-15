"use client"
import { BlogDetail } from "@/components/sections/BlogDetail";
import Footer from "@/components/sections/Footer";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { slug } = useParams(); // Get the slug from URL
  const formattedTitle = Array.isArray(slug) 
    ? slug.join(" ").replace(/-/g, " ") 
    : (slug ? slug.replace(/-/g, " ") : "Untitled");

  // Sample data (Replace with API call if needed)
  const blogData = {
    title: formattedTitle,
    category: "Tech",
    description: "An insightful look into the topic.",
    image: "/images/blogD1.png",
    content: `
      Now-a-days, let it be anyone, let him have to fight his pursuit, looking for its acquisition/solution. 
      Because he will still resist, protect but through narrow, and also of those who resist.
    `,
  };

  return (
    <main className="min-h-screen bg-white ">
      <BlogDetail {...blogData} />
      <Footer/>
    </main>
  );
}
