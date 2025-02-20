"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
export function FooterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false); 
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
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
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
            Empowering businesses with cutting-edge software solutions and digital transformation
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
              <br/>
              C-104 Sector 65 Noida
              </p>
            </div>
            <div className="relative max-w-md">
  <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="max-w-[300px] text-[14px] bg-transparent text-gray-600 rounded-full py-2 px-6 pr-20 border border-gray-700/30 focus:outline-none focus:border-[#4461F2] placeholder:text-gray-400" 
  />
  <Button
            className="absolute h-[2.6rem] text-[12px] -right-20 top-0 bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors"
            onClick={handleSubscribe}
            disabled={loading} // Disable button while loading
          >
            {loading ? ( // Show spinner if loading
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
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
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
                  className="ml-1"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </Button>
  {status.message && (
        <p className={`text-sm mt-4 ${status.type === "success" ? "text-green-300" : "text-red-300"}`}>
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
              <br/>
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
          <div className="hidden">
            <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/cybersecurity-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-it-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-and-infrastructure"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Network And Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-consulting-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  IT Consulting Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/legal-technology-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Legal Technology Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/designing-it-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Designing IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-it-services"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Cloud IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-teams"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Managed Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technology-consulting"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/support-and-maintenance"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Support & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product-development"
                  className="text-[14px] text-gray-600 hover:text-[#0066FF] transition-colors"
                >
                  Product Development
                </Link>
              </li>
            </ul>
          </div>

          {/* News Feeds */}
          <div className="hidden">
            <h3 className="text-[16px] font-bold text-[#0B1B2B] mb-4">
              News Feeds
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="News Feed"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[14px] text-gray-600">
                  Search amanzign individuals
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
                    alt="News Feed"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[14px] text-gray-600">
                  Search amanzign individuals
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
                    alt="News Feed"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[14px] text-gray-600">
                  Search amanzign individuals
                </p>
              </div>
            </div>
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
