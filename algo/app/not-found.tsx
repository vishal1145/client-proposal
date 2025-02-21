import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <div className="relative">
            <Image
              src="/images/hand.png"
              alt="Hand with Rocket"
              width={300}
              height={200}
              className="w-auto h-auto"
            />
          </div>
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
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              404 Error
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Pages</span>
              <span>-</span>
              <span>404 Error</span>
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
      </div>

      {/* 404 Content Section */}
      <div className="container mx-auto px-4 relative z-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* 404 Image */}
              <div className="relative w-full h-[300px] mb-12">
                <Image
                  src="/images/404.png"
                  alt="404 Error"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <h2 className="text-2xl font-semibold text-[#0B1B2B] mb-4">
                Oops!..Something Went Wrong
              </h2>
              <p className="text-gray-600 mb-12">
                Don&apos;t Worry Our Team is here to help
              </p>

              {/* Support Options */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/404(1).png"
                    alt="Q&A"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Questions & Answers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/404(2).png"
                    alt="Community"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Community Forum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/404(3).png"
                    alt="Support"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-600">Send Support Request</span>
                </div>
              </div>

              {/* Back Home Button */}
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Back Home
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
