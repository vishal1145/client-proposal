"use client";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  content: string;
  mainImage: string;
  link: string;
  date: string;
  category: string;
  displayOnHome: boolean;
}

export function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/addBlogData');
        if (response.data.success) {
          const homeBlogs = response.data.data
            .filter((blog: Blog) => blog.displayOnHome)
            .slice(0, 4);
          setBlogs(homeBlogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to truncate text to a specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 bg-[#FDF8F3] overflow-x-hidden">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <span className="text-sm text-gray-600 mb-2 block">Recent Updated</span>
          <h2 className="text-4xl font-bold text-[#0B1B2B]">Articles And Blog Updates</h2>
        </div>

        {blogs.length > 0 && (
          <>
            {/* Featured Blog Post */}
            <div className="mb-16">
              <div className="overflow-hidden rounded-3xl bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex flex-col justify-center p-8">
                    <div className="mb-4 text-sm text-gray-600">{blogs[0].date}</div>
                    <h3 className="text-xl font-bold mb-4 text-[#0B1B2B]">
                      {blogs[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      {truncateText(blogs[0].content, 200)}
                    </p>
                    <Link href={blogs[0].link} passHref>
                      <Button 
                        variant="default"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-6 py-2 flex items-center gap-2"
                      >
                        Know More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-[400px]">
                    <Image
                      src={blogs[0].mainImage}
                      alt={blogs[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Grid - Equal sized cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.slice(1).map((blog) => (
                <Link key={blog._id} href={blog.link} passHref>
                  <div className="bg-white rounded-3xl overflow-hidden group hover:bg-[#E0EFFF] h-full flex flex-col">
                    <div className="relative h-[240px]"> {/* Fixed height for images */}
                      <Image
                        src={blog.mainImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow"> {/* Flex grow to push button to bottom */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-600">{blog.date}</span>
                        <span className="text-sm text-gray-600">{blog.category}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-[#0B1B2B] group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                        {blog.content}
                      </p>
                      <div className="mt-auto"> {/* Push button to bottom */}
                        <Button 
                          variant="default"
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
                        >
                          Know More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}