"use client"
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";
interface Blog {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  content: string;
  link: string;
}
export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;


  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blog-detail"); 
        debugger
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

    // Pagination Logic
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}

        {/* Left Side Illustration */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <div className="relative">
            <Image
              src="/images/hand.png"
              alt="Hand with Rocket"
              width={300}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Right Side Chat Icon */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              New Articles & Blog
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Articles & Blog</span>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 left-1/4 z-0">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={80}
            height={80}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16 bg-[#F8F9FF]">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              New Articles & Blogs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  {currentBlogs.map((blog:Blog) => (
    <div
      key={blog.id}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:bg-[#E0EFFF]"
    >
      <div className="relative h-48">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={400}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
          {blog.category}
        </div>
        <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {blog.content}
        </p>
        <Link
          href={blog.link}
          className="text-[#4461F2] text-sm font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  ))}
</div>


        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-3 h-3 rounded-full ${
                    currentPage === i + 1 ? "bg-[#4461F2]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
