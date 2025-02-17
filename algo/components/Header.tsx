"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useActiveLink } from "@/hooks/useActiveLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = useActiveLink();

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = 40; // Height of the top bar
      setIsScrolled(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-[#0B1B2B] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="hover:text-blue-400">Fb</Link>
              <span>·</span>
              <Link href="#" className="hover:text-blue-400">Tw</Link>
              <span>·</span>
              <Link href="#" className="hover:text-blue-400">In</Link>
              <span>·</span>
              <Link href="#" className="hover:text-blue-400">Yt</Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@Services.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>112 W 34th St, New York</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`sticky top-0 z-50 bg-white border-b shadow-lg transition-all duration-300 ${
        isScrolled ? 'fixed left-0 right-0' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className={`font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`font-medium ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                Services
              </Link>
              <Link href="/pages" className="text-gray-600 hover:text-blue-600 transition-colors">Pages</Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Search */}
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
              </button>

              {/* User */}
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Get Quote Button */}
              <Button 
                className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-6 transition-colors"
                onClick={() => window.location.href = '/get-quote'}
              >
                Get Quote
              </Button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 