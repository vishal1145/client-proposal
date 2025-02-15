"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  showSubscribe?: boolean;
}

export default function Footer({ showSubscribe = true }: FooterProps) {
  return (
    <footer className="bg-[#0B1B2B] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Side - Logo Section (25%) */}
          <div className="lg:col-span-3 space-y-6">
          <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-[14px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
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
          </div>

          {/* Right Side - Content Section (75%) */}
          <div className="lg:col-span-9">
            {showSubscribe && (
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                <h2 className="text-[24px] font-bold mb-4 lg:mb-0">
                  Enough Talks,
                  <br />
                  Let&apos;s Find The Solutions
                </h2>
                <div className="relative max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full text-[14px] bg-transparent text-white rounded-full py-2 px-6 pr-44 border border-gray-700/30 focus:outline-none focus:border-[#4461F2] placeholder:text-gray-400"
                  />
                  <Button 
                    className="absolute h-[2.6rem] text-[14px] right-0 top-0 bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white rounded-full px-8 py-2.6 flex items-center gap-2 transition-colors"
                  >
                    Submit Now
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            )}

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-[18px] font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Browse Factories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Industry Registrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Industry Registrations
                    </Link>
                  </li>
                  <li>
                    <Link
                     href="/team-member" 
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>

                  <li>
                    <Link
                    href="/gallery"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Gallery
                    </Link>
                  </li>



                  <li>
                    <Link
                     href="/pricing"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                        Pricing
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
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"      
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Mission
                    </Link>
                  </li>

                



                  <li>
                    <Link
                     href="/faq"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>


                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>



                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      News & Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
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

              {/* Social */}
              <div>
                <h3 className="text-[18px] font-semibold mb-6">Social</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Our Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Core Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 text-[14px] hover:text-white transition-colors"
                    >
                      Our Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-gray-600 text-[14px]">Copyright © 2024 ItServices.com</p>
          <div className="space-x-6">
            <Link href="/cancellation-policy" className="text-gray-600 hover:text-blue-600">
              Cancellation Policy
            </Link>
            <Link href="/refund-policy" className="text-gray-600 text-[14px] hover:text-blue-600">
              Refund Policy
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 text-[14px] hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
