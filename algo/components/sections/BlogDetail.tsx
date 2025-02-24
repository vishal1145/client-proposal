import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
type BlogDetailProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
};

export function BlogDetail({ title }: BlogDetailProps) {
  const [blogs, setBlogs] = useState<{ htmlContent?: string } | null>(null);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`/api/blog-detail?link=/blog/${slug}`);
        debugger;
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
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

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">{title}</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Blog Detail</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
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
      <div className="prose">
        {blogs?.htmlContent ? (
          parse(blogs.htmlContent)
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </>
  );
}
