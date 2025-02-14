import Image from "next/image";
import Link from "next/link";

export function PlatformsSection() {
  return (
    <section className="bg-[#0B1B2B] relative">
      <div className="flex">
        {/* Left Content */}
        <div className="w-1/2 py-16 pl-20 pr-10 bg-[#0A1628]">
          <div className="max-w-sm">
            <p className="text-gray-400 text-sm mb-1">What We Are Expert In</p>
            <h2 className="text-2xl font-medium text-white mb-10">
              Several Platforms
            </h2>

            {/* Platform List */}
            <div className="space-y-4">
              {/* Graphic Design */}
              <div className="flex items-center justify-between bg-[#162432] rounded-lg p-3 hover:bg-[#1C2C3C] transition-colors cursor-pointer group">
                <span className="text-[15px] text-gray-200">
                  Graphic Design
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] group-hover:bg-white transition-colors"></div>
              </div>

              {/* App Design */}
              <div className="flex items-center justify-between bg-[#0561FC] rounded-lg p-3 hover:bg-blue-600 transition-colors cursor-pointer group">
                <span className="text-[15px] text-white">App Design</span>
                <div className="w-2.5 h-2.5 rounded-full bg-white transition-colors"></div>
              </div>

              {/* Web Development */}
              <div className="flex items-center justify-between bg-[#162432] rounded-lg p-3 hover:bg-[#1C2C3C] transition-colors cursor-pointer group">
                <span className="text-[15px] text-gray-200">
                  Web Development
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] group-hover:bg-white transition-colors"></div>
              </div>
            </div>

            {/* Read More Button */}
            <Link
              href="#"
              className="inline-flex items-center text-[13px] text-white mt-8 px-5 py-2 bg-[#0561FC] rounded-full hover:bg-blue-600 transition-colors"
            >
              Read More
              <svg
                className="ml-1 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 relative">
          <Image
            src="/images/platform1.png"
            alt="Platform Illustration"
            fill
            className="object-cover"
            priority
          />
          {/* Orange Circle Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center hover:bg-[#ff8533] transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
