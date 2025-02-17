import Image from "next/image";
import Link from "next/link";

export function PlatformsSection() {
  return (
    <section className="bg-[#0B1B2B] relative overflow-x-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 py-16 px-6 md:pl-20 md:pr-10 bg-[#0A1628]">
          <div className="max-w-sm">
            <p className="text-gray-400 text-sm mb-1 border border-gray-800 p-1 rounded-2xl inline-block">
              What We Are Expert In
            </p>
            <h2 className="text-2xl font-medium text-white mb-10">
              Several Platforms
            </h2>

            {/* Platform List */}
            <div className="space-y-4">
              {/* Graphic Design */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl"></div>
                <div
                  className="relative flex items-center justify-between rounded-2xl p-8 transition-colors cursor-pointer"
                  style={{
                    borderImage:
                      "linear-gradient(to right, rgba(22, 36, 50, 1) 60%, rgba(22, 36, 50, 0)) 1",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <span className="text-[17px] text-gray-200">
                    Graphic Design
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FF6B00] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* App Design */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0561FC] via-[#0561FC]/50 to-transparent"></div>
                <div
                  className="relative flex items-center justify-between rounded-2xl p-8 transition-colors cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(to right, #0561FC 40%, #0561FC/30 70%, transparent 100%)",
                  }}
                >
                  <span className="text-[17px] text-white">App Design</span>
                  <div className="w-6 h-6 rounded-full bg-[#FF6B00] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl"></div>
                <div
                  className="relative flex items-center justify-between rounded-2xl p-8 transition-colors cursor-pointer"
                  style={{
                    background: "transparent",
                    borderImage:
                      "linear-gradient(to right, rgba(22, 36, 50, 1) 60%, transparent) 1",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "16px",
                  }}
                >
                  <span className="text-[17px] text-gray-200">
                    Web Development
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FF6B00] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Know More Button */}
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-[13px] text-white px-6 py-3 bg-[#0561FC] rounded-full hover:bg-blue-600 transition-colors"
              >
                Know More
                <svg
                  className="ml-2 w-4 h-4"
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
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
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
