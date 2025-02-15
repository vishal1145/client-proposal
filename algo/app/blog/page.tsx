import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}

        {/* Left Side Illustration */}
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

        {/* Right Side Chat Icon */}
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
              New Articles & Blog
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Articles & Blog</span>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 left-1/4 z-0">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={80}
            height={80}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              New Articles & Blogs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    App Development
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    The Future Of IT In The Legal Field Trends To Watch
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                    href={`/blog/the-future-of-it-in-the-legal-field-trends-to-watch`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Cybersecurity
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    Cybersecurity Tips For Law Firms & Its Legal Aids
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                    href={`/blog/Cybersecurity-Tips-For-Law-Firms&Its-Legal-Aids`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    IT Compliance
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    IT Compliance And Data Protection For Law Firms
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                                 href={`/blog/IT-Compliance-And-Data-Protection-For-Law-Firms`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    App Development
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    The Future Of IT In The Legal Field Trends To Watch
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                    href={`/blog/the-future-of-it-in-the-legal-field-trends-to-watch`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 5 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Cybersecurity
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    Cybersecurity Tips For Law Firms & Its Legal Aids
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                    href={`/blog/Cybersecurity-Tips-For-Law-Firms&Its-Legal-Aids`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 6 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/man.jpg"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="bg-[#F5F6FE] text-[#4461F2] text-xs px-3 py-1 rounded-full inline-block mb-3">
                    IT Compliance
                  </div>
                  <h3 className="text-[#0B1B2B] font-semibold text-base mb-2">
                    IT Compliance And Data Protection For Law Firms
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy.
                  </p>
                  <Link
                    href={`/blog/IT-Compliance-And-Data-Protection-For-Law-Firms`}
                    className="text-[#4461F2] text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? "bg-[#4461F2]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
