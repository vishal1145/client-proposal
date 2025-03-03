"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState,useEffect } from "react";

interface Service {
  title: string;
  slug: string;
  detailContent?: string;  
}

interface Blog {
  _id: string;
  title: string;
  mainImage: string;
  content: string;
  displayOnFooter: boolean;
  link:string;
  slug?:string;
}
export function FooterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
   
  const [services, setServices] = useState<Service[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();

        if (data.success) {
          // Filter services to only include items where `detailcontent` exists and is not empty
          const filteredServices = data.data.filter(
            (service: Service) => service.detailContent && service.detailContent.trim() !== ''
          );
          setServices(filteredServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
}, []);


  // Services list loading skeleton
  const ServicesSkeleton = () => (
    <div className="animate-pulse space-y-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-700 rounded w-3/4"></div>
      ))}
    </div>
  );
  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Please enter an email address" });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setStatus({
        type: result.success ? "success" : "error",
        message: result.message,
      });

      if (result.success) setEmail(""); // Clear input on success

      // Hide message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.log(error);
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/addBlogData');
        const data = await response.json();
  
        if (data.success) {
          // Filter blogs where displayOnFooter is true and limit to 3
          const footerBlogs = data.data
            .filter((blog: Blog) => blog.displayOnFooter)
            .slice(0, 3);
          setBlogs(footerBlogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setBlogsLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);
  
  // Add BlogsSkeleton component
  const BlogsSkeleton = () => (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 animate-pulse">
          <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-6">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/logo(1).png"
                alt="Logo"
                width={80}
                height={35}
                className="mb-6"
              />
            </Link>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Empowering businesses with cutting-edge software solutions and
              digital transformation
            </p>
            <div className="mt-4">
              <a
                href="mailto:hi@algofolks.com"
                className="text-[#0B1B2B] font-semibold text-[14px]"
              >
                hi@algofolks.com
              </a>
              <p className="text-[14px] text-gray-600 mt-2">
                Algofolks Private Limited,
                <br />
                C-104 Sector 65 Noida
              </p>
            </div>
            <div className="relative w-full sm:w-[400px]">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full text-[14px] bg-transparent text-gray-600 
      rounded-full h-[40px] pl-6 pr-[140px]
      border border-gray-700/30 
      focus:outline-none focus:border-[#4461F2] 
      placeholder:text-gray-400"
  />
  <Button
    className={`
      absolute 
      right-0 
      top-0
      h-[40px]
      text-[12px] 
      bg-[#0D6EFD] 
      hover:bg-[#0B5ED7] 
      text-white 
      rounded-full 
      px-4
      flex 
      items-center 
      justify-center 
      gap-2
      transition-colors
      disabled:opacity-50
      disabled:cursor-not-allowed
    `}
    onClick={handleSubscribe}
    disabled={loading}
  >
    {loading ? (
      <svg
        className="animate-spin h-5 w-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    ) : (
      <>
        Subscribe Now
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8H15M15 8L8 1M15 8L8 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    )}
  </Button>
  {status.message && (
    <p
      className={`text-sm mt-2 ${
        status.type === "success" ? "text-green-300" : "text-red-300"
      }`}
    >
      {status.message}
    </p>
  )}
</div>
          </div>

          {/* Branch Address */}
          <div>
            <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">
              Branch Address
            </h3>
            <p className="text-[14px] text-gray-600 mb-3">
              Algofolks Private Limited,
              <br />
              C-104 Sector 65 Noida
            </p>
            <div className="space-y-1.5">
              <a
                href="mailto:hi@algofolks.com"
                className="text-[#0B1B2B] font-semibold text-[16px] hover:text-[#0066FF] transition-colors"
              >
                hi@algofolks.com
              </a>
              <p className="text-[14px] text-gray-600">Ph: +91 8743045170</p>
            </div>
            <div className="mt-5">
              <h4 className="text-[16px] font-bold text-[#0B1B2B] mb-2">
                Call Centre:
              </h4>
              <p className="text-[14px] text-gray-600">+91 8743045170</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">
              About Us
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team-member"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="">
          <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">Services</h3>
          {servicesLoading ? (
            <ServicesSkeleton />
          ) : (
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
       

          <div className="">
            <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">Expert</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/developers"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="/designers"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Designers
                </Link>
              </li>
              <li>
                <Link
                  href="/skill-directory"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Skills Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* News Feeds */}
          <div className="md:col-span-1"> {/* Remove hidden class */}
  <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">
    News Feeds
  </h3>
  {blogsLoading ? (
    <BlogsSkeleton />
  ) : (
    <div className="space-y-4">
    <div className="space-y-4">
            {blogs.map((blog) => (
              <Link 
                href={blog.link || `/blog/${blog.slug}`} // Use blog.link if available, fallback to constructed slug URL
                key={blog._id}
              >
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 mb-2">
                    <Image
                      src={blog.mainImage}
                      alt={blog.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <p className="text-[14px] text-gray-600 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                    {blog.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
    </div>
  )}
</div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-gray-600">
            ©{new Date().getFullYear()} Algofolks Private Limited
          </p>
          <div className="space-x-6">
            <Link
              href="/cancellation-policy"
              className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
            >
              Cancellation Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
