import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function ServicesSection() {
  const stats = [
    {
      number: "25",
      text: "Years Experience",
      icon: (
        <div className="absolute -top-8 md:-top-12 -right-1 overflow-visible">
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            <Image
              src="/images/Icons.png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "8K",
      text: "Skilled Professional",
      icon: (
        <div className="absolute -top-12 -right-1 overflow-visible">
          <div className="w-12 h-12 relative">
            <Image
              src="/images/Icons (1).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "32",
      text: "Visited Conferences",
      icon: (
        <div className="absolute -top-12 -right-1 overflow-visible">
          <div className="w-12 h-12 relative">
            <Image
              src="/images/Icons (2).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "1K",
      text: "Software Worldwide",
      icon: (
        <div className="absolute -top-12 -right-1 overflow-visible">
          <div className="w-12 h-12 relative">
            <Image
              src="/images/Icons (3).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium text-[#0B1B2B] mb-4">
            We Have Been Processing
            <br className="hidden sm:block" />
            For Over <span className="text-[#0561FC]">25 Years</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-20">
            {stats.map((stat, index) => (
              <div key={index} className="w-full">
                <div className="relative flex items-end justify-center">
                  {/* Number (Left Side) */}
                  <span className="text-4xl sm:text-[80px] text-[#0B1B2B] font-light leading-none">
                    {stat.number}
                  </span>

                  {/* Right Side: Icon + Text */}
                  <div className="flex flex-col items-center ml-4 relative">
                    {/* Icon Above Text */}
                    <div className="absolute -top-8 left-14">{stat.icon}</div>

                    {/* Text (Right Bottom of Number) */}
                    <div className="text-gray-500 text-xs sm:text-sm">
                      {stat.text}
                    </div>
                  </div>

                  {/* Vertical Divider (Only visible on larger screens) */}
                  {index < stats.length - 1 && (
                    <div className="hidden sm:block w-[1px] h-16 bg-gray-200 absolute right-[-25px] sm:right-[-30px] top-1/2 -translate-y-1/2"></div>
                  )}
                </div>

                {/* Horizontal Divider (Only visible on mobile) */}
                {index < stats.length - 1 && (
                  <div className="sm:hidden w-full h-[1px] bg-gray-200 my-7"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          {/* Graphic Design Card */}
          <div className="col-span-1 sm:col-span-6 group">
            <Link href="services/Graphic-Design">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/homes1.png"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B]">
                Graphic Designing
              </h3>
              
              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-full bg-[#0561FC] text-white hover:bg-blue-700 hover:text-white transition-colors px-4 sm:px-6 py-2 text-xs sm:text-sm w-fit"
                >
                  Explore More →
                </Button>
              </Link>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
          <Link href="services/Web-development">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/home2.png"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              Web development
            </h3>
          </div>

          {/* App Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
          <Link href="services/software-development">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/homes3.png"
                alt="App Development"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              Software development
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
