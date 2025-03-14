"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  link: string;
  date: string;
  mainImage: string;
  fullContent: string[];
  quote: {
    text: string;
  };
  beforeAdditionalImage: string[];
  additionalImages: string[];
  afterAdditionalImage: string[];
  testimonial: {
    text: string;
  };
  createdAt: string;
}

export default function BlogTable() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();
  const [expandedContent, setExpandedContent] = useState<{ [key: string]: boolean }>({});

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/addBlogData");
      if (res.data.success) {
        setBlogs(res.data.data);
      } else {
        alert("Failed to fetch blog posts");
      }
    } catch (error) {
      console.error("Error fetching blog posts", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete("/api/addBlogData", {
        params: { id },
      });
      if (res.data.success) {
        alert("Blog post deleted successfully!");
        fetchBlogs();
      } else {
        alert("Failed to delete blog post");
      }
    } catch (error: unknown) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEdit = (blog: Blog) => {
    router.push(`/admin/editBlog/${blog._id}`);
  };

  const toggleContent = (blogId: string, field: string) => {
    setExpandedContent(prev => ({
      ...prev,
      [`${blogId}-${field}`]: !prev[`${blogId}-${field}`]
    }));
  };

  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Modified renderContent function to handle both strings and arrays
  const renderContent = (blogId: string, content: string | string[], field: string) => {
    const isExpanded = expandedContent[`${blogId}-${field}`];
    
    if (Array.isArray(content)) {
      const displayText = content.join(' | ');
      const shouldShowButton = displayText.length > 100;
      
      return (
        <div className="relative max-w-[200px]">
          <div className={`${!isExpanded && shouldShowButton ? 'line-clamp-1' : ''} text-sm`}>
            {isExpanded ? displayText : truncateText(displayText)}
          </div>
          {shouldShowButton && (
            <button
              onClick={() => toggleContent(blogId, field)}
              className="text-blue-600 hover:text-blue-800 text-xs mt-1"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>
      );
    } else {
      const shouldShowButton = content.length > 100;
      
      return (
        <div className="relative max-w-[200px]">
          <div className={`${!isExpanded && shouldShowButton ? 'line-clamp-1' : ''} text-sm`}>
            {isExpanded ? content : truncateText(content)}
          </div>
          {shouldShowButton && (
            <button
              onClick={() => toggleContent(blogId, field)}
              className="text-blue-600 hover:text-blue-800 text-xs mt-1"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>
      );
    }
  };
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-[235px]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Blog Posts
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Admin</span>
              <span>-</span>
              <span>Blog Data</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Manage Blogs</h2>
            <Link
              href="/admin/addBlog"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Blog
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead>
                <tr className="bg-gray-50">
                  {[
                    ["Title", "15%"],
                    ["Category", "8%"],
                    ["Content", "10%"],
                    ["Thumbnail", "8%"],
                    ["Main Image", "8%"],
                    ["Link", "10%"],
                    ["Date", "8%"],
                    ["Full Content", "10%"],
                    ["Quote", "10%"],
                    ["Before Images", "10%"],
                    ["Additional Images", "8%"],
                    ["After Images", "10%"],
                    ["Testimonial", "10%"],
                    ["Actions", "8%"]
                  ].map(([header, width]) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      style={{ width }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog, index) => (
                  <tr
                    key={blog._id}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-gray-100 transition-colors duration-150`}
                  >
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.title, 'title')}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {blog.category}
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.content, 'content')}
                    </td>
                    <td className="px-4 py-3">
                      {blog.imageUrl && (
                        <Image
                          src={blog.imageUrl}
                          alt="Thumbnail"
                          width={50}
                          height={50}
                          className="rounded object-cover"
                        />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {blog.mainImage && (
                        <Image
                          src={blog.mainImage}
                          alt={blog.title}
                          width={50}
                          height={50}
                          className="rounded object-cover"
                        />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm truncate max-w-[150px] block"
                      >
                        {blog.link}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {blog.date}
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.fullContent, 'fullContent')}
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.quote.text, 'quote')}
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.beforeAdditionalImage, 'beforeImage')}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 flex-wrap max-w-[150px]">
                        {blog.additionalImages.slice(0, 2).map((img, idx) => (
                          <Image
                            key={idx}
                            src={img}
                            alt={`Additional ${idx + 1}`}
                            width={40}
                            height={40}
                            className="rounded object-cover"
                          />
                        ))}
                        {blog.additionalImages.length > 2 && (
                          <span className="text-sm text-gray-500">
                            +{blog.additionalImages.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.afterAdditionalImage, 'afterImage')}
                    </td>
                    <td className="px-4 py-3">
                      {renderContent(blog._id, blog.testimonial.text, 'testimonial')}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {blogs.length === 0 && (
                  <tr>
                    <td
                      colSpan={14}
                      className="px-4 py-3 text-center text-gray-500"
                    >
                      No blog posts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}