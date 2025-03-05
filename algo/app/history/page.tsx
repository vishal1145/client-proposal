import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History - Algofolks | Get to Know Us Better",
  description: "Learn about Algofolks's journey, our values, and what makes us unique in the technology landscape.",
};

interface HistoryCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const historyCards: HistoryCard[] = [
  {
    title: "Newsroom",
    description: "Stay connected and up to date with our events and Algofolks news",
    image: "/images/history-1.jpg",
    link: "/newsroom",
  },
  {
    title: "CSR",
    description: "Our efforts are directed toward education, skilling, and empowerment",
    image: "/images/history-2.jpg",
    link: "/csr",
  },
  {
    title: "Diversity, equality, inclusion",
    description: "A world where we can be proud to be here",
    image: "/images/history-3.jpg",
    link: "/diversity",
  },
  {
    title: "Sports sponsorships",
    description: "Official partners of passion and purpose",
    image: "/images/history-4.jpg",
    link: "/sports",
  },
  {
    title: "Corporate Sustainability",
    description: "A responsible approach to business",
    image: "/images/history-5.jpg",
    link: "/sustainability",
  },
  {
    title: "The Algofolks Way",
    description: "We master it ourselves, so we can do it for you",
    image: "/images/history-6.jpg",
    link: "/our-way",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Get to know us <span className="text-[#0561FC]">better</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">Home</Link>
              <span>/</span>
              <span className="text-[#0561FC]">Our History</span>
            </div>
          </div>
        </div>

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

      {/* History Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-3">
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 bg-[#0561FC] rounded-full"></span>
                <span className="text-sm font-medium text-gray-600">Our Journey</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B2B]">
                Building the <span className="text-[#0561FC]">future</span> of technology
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Algofolks was founded in Noida in 2018 as a custom software development house.
                </p>
                <p>
                  Throughout the years the firm continued to expand its range of services and we became a full-fledged IT consultancy company. Since the origin we have been combining Scandinavian innovations with tech talents from Poland.
                </p>
                <p>
                  We know that excellence requires constant improvement. Therefore we are continuously building our expertise and multidisciplinary approach to help our clients overcome any business challenges they may be faced with.
                </p>
                <p>
                  Work in a creative environment empowers us to undertake projects that have a profound impact on the way we live and use technology.
                </p>
                <p>
                  When growing our team we always take the extra step to look for people who share our core values.
                </p>
                <p>
                  As a result our team is a well-balanced mixture of tech and soft skilled professionals with a bold problem solving attitude. It enables us to provide our clients with human-oriented tech solutions.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/history-bg.jpg"
                  alt="Our History"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F6F0E4] rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {historyCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group block relative overflow-hidden rounded-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative w-full h-64">
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10"></div>
                  {/* Text Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                    <h3 className="text-xl font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-500">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-200 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
