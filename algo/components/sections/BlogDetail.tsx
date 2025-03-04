"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "next/navigation";
interface BlogDetailProps {
  slug: string;
}
interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  mainImage: string;
  link: string;
  date: string;
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
}

// Loading Skeleton Component
const BlogSkeleton = () => (
  <>
    {/* Hero Section Skeleton */}
    <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-8 bg-gray-300 rounded-lg w-3/4 animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Content Skeleton */}
    <section className="py-16 overflow-x-hidden">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="max-w-8xl mx-auto">
          {/* Image Skeleton */}
          <div className="mb-3">
            <div className="w-full h-[400px] bg-gray-300 rounded-2xl animate-pulse"></div>
          </div>

          {/* Date Skeleton */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
          </div>

          {/* Title Skeleton */}
          <div className="h-8 bg-gray-300 rounded-lg w-3/4 mb-6 animate-pulse"></div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-300 rounded w-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Quote Skeleton */}
          <div className="bg-gray-50 p-8 rounded-xl my-8">
            <div className="h-20 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Additional Content Skeleton */}
          <div className="space-y-4 mb-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-300 rounded w-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Images Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="h-[300px] bg-gray-300 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

// Helper to render different types of content
const renderContentItem = (text: string, index: number) => {
  if (text.startsWith("# ")) {
    return (
      <h3 key={index} className="text-xl font-bold text-[#0B1B2B] mb-4">
        {text.replace("# ", "")}
      </h3>
    );
  } else if (text.startsWith("```")) {
    return (
      <pre
        key={index}
        className="bg-gray-100 p-4 rounded-xl text-[14px] text-[#0B1B2B] font-mono overflow-x-auto mb-4"
      >
        {text.replace(/```/g, "")}
      </pre>
    );
  } else if (text.startsWith("- ")) {
    return (
      <li key={index} className="ml-6 list-disc text-gray-600 text-[15px] leading-relaxed">
        {text.replace("- ", "")}
      </li>
    );
  } else {
    return (
      <p key={index} className="text-gray-600 text-[15px] leading-relaxed mb-4">
        {text}
      </p>
    );
  }
};

export function BlogDetail({ slug }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const params = useParams();
  // const slug = params.slug;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/addBlogData?link=/blog/${slug}`);
        setBlog(response.data.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <BlogSkeleton />;
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {error || "Blog post not found"}
        </h2>
        <p className="text-gray-600">
          Please try again later or check another blog post.
        </p>
      </div>
    );
  }

  return (
    <>
    
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">
                {blog.title}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Blog Detail</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
            <div className="mb-3">
              <Image
                src={blog.mainImage}
                alt={blog.title}
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-gray-500 text-sm">{blog.date}</div>
            </div>

            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              {blog.title}
            </h2>

            <div className="prose max-w-none">
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                {blog.fullContent}
              </p>

              {/* Quote Section */}
              {blog.quote?.text && (
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <div className="flex gap-4">
                    <span className="text-[#4461F2] text-5xl">&apos;</span>
                    <p className="text-gray-600 text-[15px] leading-relaxed italic">
                      {blog.quote.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Before Additional Images Content */}
              <div className="mb-8">
                {blog.beforeAdditionalImage.map(renderContentItem)}
              </div>

              {/* Additional Images Grid */}
              {blog.additionalImages?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {blog.additionalImages.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image}
                        alt={`Additional image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-[300px] object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* After Additional Images Content */}
              {blog.afterAdditionalImage &&
                blog.afterAdditionalImage.length > 0 && (
                  <div className="mb-8">
                    {blog.afterAdditionalImage.map(renderContentItem)}
                  </div>
                )}

              {/* Social Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button className="flex items-center justify-center w-8 h-8 rounded-full">
                  <span className="text-gray-600 text-sm">TW</span>
                </button>
                <span className="text-gray-300">|</span>
                <button className="flex items-center justify-center w-8 h-8 rounded-full">
                  <span className="text-gray-600 text-sm">YU</span>
                </button>
                <span className="text-gray-300">|</span>
                <button className="flex items-center justify-center w-8 h-8 rounded-full">
                  <span className="text-gray-600 text-sm">FB</span>
                </button>
                <span className="text-gray-300">|</span>
                <button className="flex items-center justify-center w-8 h-8 rounded-full">
                  <span className="text-gray-600 text-sm">IN</span>
                </button>
              </div>

              {/* Testimonial Section */}
              {blog.testimonial?.text && (
                <div className="bg-gray-100 p-8 rounded-xl mb-8">
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                    {blog.testimonial.text}
                  </p>

                  {/* <div className="flex items-center gap-3">
                    <Image
                      src="/images/Group 35.png"
                      alt="Jhon Wick"
                      width={100}
                      height={100}
                      className="w-[20px] h-[20px]"
                    />
                    <Image
                      src="/images/blogD5.png"
                      alt="Jhon Wick"
                      width={50}
                      height={50}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <div>
                      <p className="text-[#0B1B2B] font-medium">
                        Jhon Wick - Manager
                      </p>
                    </div>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
