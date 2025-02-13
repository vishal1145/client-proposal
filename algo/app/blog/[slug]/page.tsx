import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { BlogDetail } from "@/components/sections/BlogDetail";

// Define blog details type
type BlogDetail = {
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
};

// Define blog details object
const blogDetails: Record<string, BlogDetail> = {
  "future-of-it-legal-field": {
    title: "The Future Of IT In The Legal Field Trends To Watch",
    category: "App Development",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/man.jpg",
    content:
      "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text...",
  },
  "cybersecurity-tips": {
    title: "Cybersecurity Tips For Law Firms & Its Legal Aids",
    category: "Cybersecurity",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/man.jpg",
    content:
      "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text...",
  },
  "it-compliance": {
    title: "IT Compliance And Data Protection For Law Firms",
    category: "IT Compliance",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/man.jpg",
    content:
      "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text...",
  },
};

// Define correct params type for Next.js
type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogDetails[params.slug];

  return {
    title: blog
      ? `${blog.title} - IT Services Blog`
      : "Blog Not Found - IT Services",
    description: blog?.description || "Blog post not found",
  };
}

export default function Page({ params }: Props) {
  const blog = blogDetails[params.slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
            404 - Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <BlogDetail {...blog} />
      <Footer />
    </main>
  );
}
