import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import Footer from "@/components/sections/Footer";
import { BlogDetail } from "@/components/sections/BlogDetail";

// Blog details type
type BlogDetail = {
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
};

// Blog details object
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

// Generate metadata dynamically for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogDetails[params.slug];

  return {
    title: blog
      ? `${blog.title} - IT Services Blog`
      : "Blog Not Found - IT Services",
    description: blog?.description || "Blog post not found",
  };
}

// Generate static paths dynamically
export async function generateStaticParams() {
  return Object.keys(blogDetails).map((slug) => ({
    slug,
  }));
}

// Page component using use hook
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  if (!slug) {
    notFound();
  }

  const blog = blogDetails[slug];

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <BlogDetail {...blog} />
      <Footer />
    </main>
  );
}
