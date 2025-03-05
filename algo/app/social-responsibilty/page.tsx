import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Responsibility - Algofolks",
  description:
    "Acting for the benefit of the society is at the heart of our work culture.",
};

const initiatives = [
  {
    title: "Support for charities",
    description:
      "Since we put a focus on people, social responsibility is an important aspect of initiatives we take part in. We are involved collectively as a company by helping child care homes and the 'Noble Gift' social program for families in difficult financial circumstances, or individually by encouraging employees to spend their birthday gifts on charity of their choice.",
    align: "right",
    image: "/images/Untitled-design.jpg",
  },
  {
    title: "Social impact projects",
    description:
      "We prioritise projects that not solely bring profits but above all contribute to the welfare of society and the environment. We engage in a number of projects that follow this example. To name a few, we develop software for companies like:",
    align: "left",
    image: "/images/social-impact-porjects.jpg",
    subPoints: [
      "Kukbola, a delivery service which provides better access to food for the excluded rural districts in South Africa.",
      "RoadTech is a Norwegian transportation industry startup focused on improving driving efficiency in heavy snows and severe weather conditions for emergency services and other drivers.",
      "Dish is a social network promoting healthy eating habits and choosing quality food products from local businesses.",
    ],
  },
  {
    title: "Health and Safety Initiatives",
    description:
      "Our Health and Safety initiatives are built on a commitment to maintaining the highest standards across all areas of our operations. We prioritize creating a safe work environment through effective safety programs, regular staff training, and continuous monitoring of workplace conditions. We have implemented comprehensive emergency preparedness plans, conduct regular workplace safety audits, and work to protect our teams and ensure the well-being of everyone in our facilities. Through ongoing training and education, we empower our employees to take an active role in maintaining workplace safety. We believe that a safe workplace contributes to overall job satisfaction and creates an environment where safety and health are valued by everyone.",
    align: "right",
    image: "/images/work-safety.jpg",
  },
  {
    title: "Diversity, Equity, and Inclusion (DEI) Programs",
    description:
      "Our Diversity, Equity, and Inclusion (DEI) programs are designed to create a workplace where everyone feels valued and empowered. We are committed to fostering an inclusive environment that celebrates our differences and promotes equal opportunities. Through targeted initiatives, such as DEI training, mentorship programs, and employee resource groups, we aim to build a more diverse and equitable workplace. We actively work to eliminate barriers to advancement and ensure fair hiring practices. By implementing DEI, we are not only to expand social progress but also create stronger teams with rich collaboration and sharing.",
    align: "left",
    image: "/images/DEI.png",
  },
  {
    title: "Employee Volunteering Initiatives",
    description:
      "Employee volunteering is a cornerstone of our commitment to social responsibility. We actively encourage employees to participate in local community initiatives, providing opportunities and resources to support causes that resonate with their values. From environmental clean-ups to mentoring programs and food drives, we strive to offer a range of activities that cater to diverse interests. Volunteering not only positively impacts the communities we serve but also fosters a sense of fulfillment and connection among our team members. We believe that by supporting our employees' passion for giving back, we contribute to a more compassionate and engaged workforce and create a lasting impact beyond the workplace.",
    align: "right",
    image: "/images/Employee Volunteering.jpg",
  },
];

export default function SocialResponsibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Social <span className="text-[#0561FC]">responsibility</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Acting for the benefit of the society is at the heart of our work
              culture.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-6">
              <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#0561FC]">Social Responsibility</span>
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {initiatives.map((initiative, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div
                className={`flex flex-col lg:flex-row items-start gap-12 ${
                  initiative.align === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`lg:w-1/2 space-y-6 ${
                    initiative.align === "right" ? "lg:pl-12" : "lg:pr-12"
                  }`}
                >
                  <h2 className="text-2xl font-bold text-[#0B1B2B]">
                    {initiative.title}
                  </h2>
                  <div className="text-gray-600 space-y-4">
                    <p className="leading-relaxed">{initiative.description}</p>
                    {initiative.subPoints && (
                      <ul className="space-y-4 mt-4">
                        {initiative.subPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 leading-relaxed"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F6F0E4] rounded-full -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
