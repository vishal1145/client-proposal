import Image from "next/image";
import { Button } from '@/components/ui/button';

// Replace all instances of single quotes with &apos;
// In the text content
const text = "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard";
const text2 = "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy";

export function BlogSection() {
  return (
    <section className="py-12 bg-[#FDF8F3] overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-sm text-gray-600 mb-2 block">Recent Updated</span>
          <h2 className="text-4xl font-bold text-[#0B1B2B]">Articles And Blog Updates</h2>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-16">
          <div className=" overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8">
                <div className="mb-4 text-sm text-gray-600">22 March-2024</div>
                <h3 className="text-xl font-bold mb-4 text-[#0B1B2B]">
                  Legal Practice Automation: Boosting Efficiency And Productivity
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {text}
                </p>
                <Button 
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-6 py-2 flex items-center gap-2"
                >
                  Know More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
                  alt="Legal Practice Automation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-[#FFE9E9] rounded-3xl overflow-hidden group">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071"
                alt="The Future of IT"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">22 March-2024</span>
                <span className="text-sm text-gray-600">By Krishna</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-[#0B1B2B] group-hover:text-blue-600 transition-colors">
                The Future Of IT In The Legal Field: Trends To Watch
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {text2}
              </p>
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-[#E9F4FF] rounded-3xl overflow-hidden group">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070"
                alt="Cybersecurity Tips"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">22 March-2024</span>
                <span className="text-sm text-gray-600">By Krishna</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-[#0B1B2B] group-hover:text-blue-600 transition-colors">
                Cybersecurity Tips For Law Firms & Its Legal Ads
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {text2}
              </p>
              <Button 
                variant="default"
                className="bg-[#0B1B2B] hover:bg-blue-900 text-white rounded-full px-6 py-2 flex items-center gap-2"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden group">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832"
                alt="IT Compliance"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">22 March-2024</span>
                <span className="text-sm text-gray-600">By Krishna</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-[#0B1B2B] group-hover:text-blue-600 transition-colors">
                IT Compliance And Data Protection For Law Firms
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {text2}
              </p>
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 