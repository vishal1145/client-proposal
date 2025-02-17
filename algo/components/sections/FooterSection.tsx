import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function FooterSection() {
  return (
    <>
    
    <footer className="bg-white text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className="mb-4"
            />
            </Link>
            <p className="text-gray-600">
              Search amanzign individuals around the globe, find a mentor,
              expand your network,
            </p>
            <div>
              <a
                href="mailto:  hr@algofolks.com"
                className="text-[#0B1B2B] font-semibold text-lg"
              >
            hr@algofolks.com
              </a>
              <p className="text-gray-600 mt-2">
              Algofolks Private Limited, C-104 Sector 65 Noida


              </p>
            </div>
            <div className="relative w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-full py-3 px-6 pr-36 focus:outline-none"
              />
              <Button className="absolute right-1 top-1 bg-[#0066FF] hover:bg-[#0066FF] text-white rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2">
                Submit Now <span className="text-lg">→</span>
              </Button>
            </div>
          </div>

          {/* Branch Address */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
              Branch Address
            </h3>
            <p className="text-gray-600 mb-4">
            Algofolks Private Limited, C-104 Sector 65 Noida
            </p>
            <div className="space-y-2">
            <a
                href="mailto:  hr@algofolks.com"
                className="text-[#0B1B2B] font-semibold text-lg"
              >
            hr@algofolks.com
              </a>
              <p className="text-gray-600">Ph : 
              +91 8743045170</p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-[#0B1B2B] mb-2">
                Call Centre:
              </h4>
              <p className="text-gray-600">
              +91 8743045170</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">About Us</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team-member" className="text-gray-600 hover:text-blue-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
              Information
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Expert Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  A Sustainable Future
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Fresh Start
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Clean Spaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Tips & Strategies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* News Feeds */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
              News Feeds
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="News Feed"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">Search amanzign individuals</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
                    alt="News Feed"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">Search amanzign individuals</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
                    alt="News Feed"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">Search amanzign individuals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-gray-600">©2024 Algofolks Private Limited</p>
          <div className="space-x-6">
            <Link href="/cancellation-policy" className="text-gray-600 hover:text-blue-600">
              Cancellation Policy
            </Link>
            <Link href="/refund-policy" className="text-gray-600 hover:text-blue-600">
              Refund Policy
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
