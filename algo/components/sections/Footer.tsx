"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface FooterProps {
  showSubscribe?: boolean;
}

export default function Footer({ showSubscribe = true }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Please enter an email address" });
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setStatus({ type: result.success ? "success" : "error", message: result.message });

      if (result.success) setEmail(""); // Clear input on success

      // Hide message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.log(error)
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    }
    finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <footer className="bg-[#0B1B2B] text-white py-10 overflow-x-hidden">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Side - Logo Section (25%) */}
          <div className="relative lg:col-span-4 space-y-6 ">
          <Link href="/">
              <Image
                src="/images/logo(1).png"
                alt="Logo"
                width={80}
                height={35}
                className="mb-6"
              />
            </Link>
           
            <p className="text-gray-400 text-[14px] pb-8 border-b border-b-gray-700">
            Empowering businesses with cutting-edge software solutions and digital transformation
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#4461F2] hover:border-[#4461F2] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#4461F2] hover:border-[#4461F2] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#4461F2] hover:border-[#4461F2] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
            <div className="absolute -top-28 right-0 h-[698px] w-[1px] bg-gray-700"></div>
          </div>

          {/* Right Side - Content Section (75%) */}
          <div className="lg:col-span-8 ">
            {showSubscribe && (
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 pb-10 border-b border-b-gray-700">
                <h2 className="text-[24px] font-bold mb-4 lg:mb-0">
                  Enough Talks,
                  <br />
                  Let&apos;s Find The Solutions
                </h2>
            
                  <div className="relative w-full sm:w-[400px]">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full text-[14px] bg-transparent text-white
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
            )}

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div className="hidden">
                <h3 className="text-[18px] font-semibold mb-6">Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/services/cybersecurity-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Cybersecurity Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/managed-it-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Managed IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/network-and-infrastructure"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Network And Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/it-consulting-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      IT Consulting Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/legal-technology-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Legal Technology Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/software-development"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/designing-it-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Designing IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud-it-services"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Cloud IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/managed-teams"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Managed Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/technology-consulting"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Technology Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/support-and-maintenance"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Support & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/product-development"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Product Development
                    </Link>
                  </li>
                </ul>
              </div>
              {/* About Us */}
              <div>
                <h3 className="text-[18px] font-semibold mb-6">About Us</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team-member"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Blog & News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="text-gray-400 text-[14px] hover:text-white"
                    >
                      
Cookies Policy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Information */}
              <div className="hidden">
                <h3 className="text-[18px] font-semibold mb-6">Information</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Expert Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      A Sustainable Future
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Fresh Start
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Clean Spaces
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Tips & Strategies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-[18px] font-semibold mb-6">Expert</h3>
                <ul className="space-y-4">
                 
                  <li>
                    <Link
                      href="/developers"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/designers"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Designers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/skill-directory"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Skills Directory
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex justify-between items-center">
          <p className="text-gray-600 text-[14px]">
          ©{new Date().getFullYear()} Algofolks Private Limited
          </p>
          <div className="space-x-6">
            <Link
              href="/cancellation-policy"
              className="text-gray-600 hover:text-blue-600"
            >
              Cancellation Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-gray-600 text-[14px] hover:text-blue-600"
            >
              Refund Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 text-[14px] hover:text-blue-600"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
