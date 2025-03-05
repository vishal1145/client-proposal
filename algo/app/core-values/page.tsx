import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Core Values - Algofolks | Our Beliefs",
  description: "Discover the core beliefs that inspire and guide us at Algofolks.",
};

const coreValues = [
  {
    title: "Integrity",
    description: "At Algofolks, integrity is the foundation of our work. We build trust through transparency, honesty, and ethical conduct, creating and maintaining long-term relationships. Our commitment to integrity shapes every aspect of our approach: straight goals, open communication, proactive problem-solving, and a sincere drive to understand what is best for our clients.",
    image: "/images/Integrity.jpg"
  },
  {
    title: "Excellence",
    description: "Excellence is not just about meeting standards; it's about professional teams to deliver high-quality work as fast as possible because client satisfaction is key. We stay motivated, push our intellectual curiosity to deliver and continuously improve our expertise to achieve set objectives in the most efficient way.",
    image: "/images/Excellence.jpg"
  },
  {
    title: "Collaboration",
    description: "At Algofolks, collaboration is at the heart of our success. We believe in the power of teamwork, fostering a culture where individuals work together seamlessly to achieve common goals. Through open communication and mutual respect, we create an innovative mindset and human-friendly solutions tailored to client needs.",
    image: "/images/Collaboration.jpg"
  },
  {
    title: "Customer-Centricity",
    description: "At Algofolks, customer-centricity is fundamental. We prioritize understanding our clients' deeper needs and challenges, taking that shared knowledge to provide the best possible solutions. By actively listening, we aim to exceed expectations with innovative, tailored approaches.",
    image: "/images/Customer-Centricity .jpg"
  },
  {
    title: "Continuous Learning",
    description: "In the ever-evolving tech landscape, we embrace continuous learning. Our team is deeply committed to ongoing professional development and sharing gained knowledge. We foster an environment where curiosity thrives and innovation flourishes.",
    image: "/images/Continuous-Learning.jpg"
  }
];

export default function CoreValuesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Core Beliefs That <span className="text-[#0561FC]">Inspire Us</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Home</span>
              <span>/</span>
              <span className="text-[#0561FC]">Core Values</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F6F0E4] rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
              </div>

              {/* Content Column */}
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm">
                  <span className="w-2 h-2 bg-[#0561FC] rounded-full"></span>
                  <span className="text-sm font-medium text-gray-600">Core Value {index + 1}</span>
                </div>

                <h2 className="text-3xl font-bold text-[#0B1B2B]">
                  {value.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}