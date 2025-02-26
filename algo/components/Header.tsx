"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import { useActiveLink } from "@/hooks/useActiveLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const isActive = useActiveLink();
  const [isClient, setIsClient] = useState(false);

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="hidden lg:block  bg-[#0B1B2B] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex  justify-between items-center">
           
          <div className="flex items-center gap-6">
       

        {/* Company Tagline */}
        <span className="text-sm opacity-80">Innovating the Future of IT Solutions</span>
      </div>
            {/* Contact Info */}
            <div className="flex  gap-8 text-sm">
            <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {isClient ? (
          <a href="tel:+918743045170" className="hover:underline">
            +91 8743045170
          </a>
        ) : (
          <span>+91 8743045170</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {isClient ? (
          <a href="mailto:hi@algofolks.com" className="hover:underline">
            hi@algofolks.com
          </a>
        ) : (
          <span>hi@algofolks.com</span>
        )}
      </div>

      <div className="flex items-center gap-2">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  <a
    href="https://www.google.com/maps?q=C-104+Sector+65+Noida"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline"
  >
    C-104 Sector 65 Noida
  </a>
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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo(1).png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
             
              {/* <Link 
                href="/services" 
                className={`font-medium ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                Services
              </Link>
              <Link href="/pages" className="text-gray-600 hover:text-blue-600 transition-colors">Pages</Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors ">Projects</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</Link> */}
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
            
                    <Link
                      href="/developers"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Developers
                    </Link>
                 
                    <Link
                      href="/designers"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Designers
                    </Link>
                
                    <Link
                      href="/skill-directory"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Skills Directory
                    </Link>
                
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-6">
            
              {/* <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
              </button>

              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button> */}

              {/* Get Quote Button */}
              <Button 
                className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-6 transition-colors"
                onClick={() => window.location.href = '/get-quote'}
              >
                Get Quote
              </Button>

              {/* Mobile Menu Button */}
              <button 
  className="lg:hidden text-gray-600 hover:text-blue-600 transition-colors"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
    />
  </svg>
</button>
{isMobileMenuOpen && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    onClick={() => setIsMobileMenuOpen(false)}
  />
)}

{/* Mobile Menu Sidebar */}
<div className={`
  fixed top-0 right-0 h-full w-[300px] bg-white z-50 
  transform transition-transform duration-300 ease-in-out
  ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  lg:hidden
`}>
  <div className="p-6 space-y-6">
    {/* Mobile Menu Header */}
    <div className="flex justify-between items-center">
      <Image
        src="/images/logo(1).png"
        alt="Logo"
        width={100}
        height={35}
        className="h-8 w-auto"
      />
      <button 
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-gray-500 hover:text-gray-700"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Mobile Menu Links */}
    <nav className="space-y-4 flex flex-col">
      <Link 
        href="/contact" 
        className="block text-gray-600 hover:text-blue-600 transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact Us
      </Link>
      <Link
                      href="/developers"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Developers
                    </Link>
                 
                    <Link
                      href="/designers"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Designers
                    </Link>
                
                    <Link
                      href="/skill-directory"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Skills Directory
                    </Link>
                
    </nav>

    {/* Mobile Contact Info */}
    <div className="space-y-4 pt-6 border-t">
      <a href="tel:+918743045170" className="flex items-center gap-2 text-gray-600">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 8743045170
      </a>
      <a href="mailto:hi@algofolks.com" className="flex items-center gap-2 text-gray-600">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        hi@algofolks.com
      </a>
      <a href="https://www.google.com/maps?q=C-104+Sector+65+Noida" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-gray-600"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        C-104 Sector 65 Noida
      </a>
    </div>

    {/* Mobile Get Quote Button */}
    <Button 
      className="w-full bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-6 transition-colors"
      onClick={() => {
        window.location.href = '/get-quote';
        setIsMobileMenuOpen(false);
      }}
    >
      Get Quote
    </Button>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 