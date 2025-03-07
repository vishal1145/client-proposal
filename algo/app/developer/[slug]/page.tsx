"use client";

// import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
export default function DeveloperProfile() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const role = searchParams.get("role") || "";
  const image = searchParams.get("image") || "";
  // This would come from your API or database
  const developer = {
    name: name,
    role: role,
    image: image, // Image from the clicked developer
    description: [
      "Professional Symfony and PHP developer with over five years of experience in software development.",
      "Khadija has extensive, robust problem-solving skills and proven experience creating and designing web applications in a test-driven environment.",
      "Experienced in all five stages of the web development process, including information gathering, planning, design, development, testing, delivery, and maintenance.",
      "Has profound experience in Shopware 5 and 6, grounded on solid skills in Symfony and Vue.js frameworks.",
      "Khadija has excellent communication skills and places passion in her work. She is a very enthusiastic Symfony and PHP developer, bringing great spirit to a team.",
    ],
    experience: [
      {
        company: "BLMEDIA GmbH",
        duration: "1 year",
        role: "Senior Web Developer",
        responsibilities: [
          "Develop easy-to-manage and configurable Shopware plugins",
          "Fully migrate existing Shopware 5 plugins to a brand new Shopware 6 system",
        ],
        technologies: ["Zend", "Symfony", "PHP"],
      },
      {
        company: "Spread Content - Choueiri Group",
        duration: "3 years 11 months",
        role: "Senior Web Developer",
        responsibilities: [
          "Actively contributed to creating a powerful content management system (CMS) to serve as an interface for clients using the Symfony framework.",
          "Launched Related engine microservice returns related articles",
          "Achieved a reusable code structure with CMS that supports multiple projects.",
          "Set up an API token authentication system using Symfony Custom Authentication System",
          "Integrated Redis database to create quick access to any needed configuration for the web app.",
          "Helped design an extensive graph database (Neo4j) to store the live matches score results, teams, players, and stadium details for the Eurosport Arabia website.",
          "Integrated Webpack Encore for managing the front-end assets and minifying the CSS and JavaScript files.",
        ],
      },
    ],
  };

  if (!developer) {
    return <div>Developer not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
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

        {/* Right Side Icon */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Message Icon"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Developer Profile
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
              <span>-</span>
              <Link href="/hire-developers" className="hover:text-[#0561FC]">
                Developers
              </Link>
              <span>-</span>
              <span className="text-[#0561FC]">{developer.name}</span>
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            {/* Header Section */}
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
      DEVELOPER PROFILE
    </span>
  </div>
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-[#0B1B2B] mb-2">
                {developer.name}
              </h3>
              <h5 className="text-lg text-[#0561FC] font-medium">
                {developer.role}
              </h5>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Description */}
              <div className="space-y-4">
                {developer.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-8 bg-[#F8F9FC] p-8 rounded-xl mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B2B] mb-4">
                    Main expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white text-[#0561FC] rounded-full text-sm border border-[#0561FC]/20">
                      PHP
                    </span>
                    <span className="px-4 py-2 bg-white text-[#0561FC] rounded-full text-sm border border-[#0561FC]/20">
                      Symfony
                    </span>
                    <span className="px-4 py-2 bg-white text-[#0561FC] rounded-full text-sm border border-[#0561FC]/20">
                      Vue.js
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1B2B] mb-4">
                    Other skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-gray-200">
                      Shopware
                    </span>
                    <span className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-gray-200">
                      MySQL
                    </span>
                    <span className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-gray-200">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="sticky top-12">
              <Image
                src={developer.image}
                alt={developer.name}
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-[600px] object-cover"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-[#0B1B2B]">
                  {developer.name}
                </h3>
                <p className="text-gray-600">Noida</p>
                <Link href="/payment" className="block mt-4">
                  <Button className="bg-[#0561FC] text-white px-8 py-3 rounded-full hover:bg-[#0561FC] transition-colors w-full">
                    BOOK {developer.name.toUpperCase()}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section - Below the two columns */}
        <div className="flex justify-center">
          <div className="mt-28 ">
            <div className="text-center">
              {/* Centered Chip */}
              <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
                <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                  EXPERIENCE
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#0B1B2B] mb-2">
                Selected experience
              </h2>
            </div>
            <h3 className="text-lg text-gray-600 mb-8">Employment</h3>
            <div className="space-y-8 max-w-3xl">
              {developer.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-[#0561FC]"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0561FC]" />

                  {/* Role Title in Blue */}
                  <div className="text-[#0561FC] text-sm font-medium mb-1">
                    Senior Web developer
                  </div>

                  {/* Company and Duration */}
                  <div className="text-gray-700 text-sm mb-4">
                    {exp.company} - {exp.duration}
                  </div>

                  {/* Responsibilities */}
                  <div className="text-gray-700 text-sm mb-2">
                    Roles and responsibilities:
                  </div>
                  <ul className="list-none space-y-2 text-gray-600 text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {index === 0 && (
                    <div className="mt-4">
                      <div className="text-gray-700 text-sm mb-2">
                        Technologies:
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/zend.png"
                          alt="Zend"
                          width={20}
                          height={20}
                          className="h-5"
                        />
                        <Image
                          src="/images/symfony.png"
                          alt="Symfony"
                          width={20}
                          height={20}
                          className="h-5"
                        />
                        <Image
                          src="/images/php.png"
                          alt="PHP"
                          width={20}
                          height={20}
                          className="h-5"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Web Developer Section */}
              <div className="relative pl-8 border-l-2 border-[#0561FC]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0561FC]" />

                {/* Role Title in Blue */}
                <div className="text-[#0561FC] text-sm font-medium mb-1">
                  Web developer
                </div>

                {/* Company and Duration */}
                <div className="text-gray-700 text-sm mb-4">
                  THALES IT - 1 year 2 months
                </div>

                {/* Responsibilities */}
                <div className="text-gray-700 text-sm mb-2">
                  Roles and responsibilities:
                </div>
                <ul className="list-none space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">
                      Developed a Swiss transport platform between one
                      advertiser and several carriers on the Zend framework and
                      fully designed the MySQL database tables based on the
                      project and the client requirements; serve as an interface
                      for clients using the Symfony framework.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">
                      Developed custom modules using Zend Forms, Validations,
                      and Layouts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">
                      Worked in a multilingual e-commerce website based on the
                      Prestashop platform, customized the theme, plugins,
                      modules, and various functionality to set all the
                      requested payment gateway.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">
                      Designed and built a WordPress theme from scratch and
                      created several plugins based on the client&apos;s
                      requirements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">
                      Created a WordPress custom post type and transformed the
                      WordPress site from a blogging platform into a powerful
                      Content Management System (CMS).
                    </span>
                  </li>
                </ul>

                {/* Technologies */}
                <div className="mt-4">
                  <div className="text-gray-700 text-sm mb-2">
                    Technologies:
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/zend.png"
                      alt="Zend"
                      width={20}
                      height={20}
                      className="h-5"
                    />
                    <Image
                      src="/images/symfony.png"
                      alt="Symfony"
                      width={20}
                      height={20}
                      className="h-5"
                    />
                    <Image
                      src="/images/wordpress.png"
                      alt="WordPress"
                      width={20}
                      height={20}
                      className="h-5"
                    />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8">
                  Education
                </h2>
                <div className="relative pl-8 border-l-2 border-[#0561FC]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0561FC]" />
                  <div className="text-[#0561FC] text-sm font-medium mb-1">
                    BSc Information Technology
                  </div>
                  <div className="text-gray-700 text-sm">
                    Lebanese University - Faculty of Sciences - 2012 - 2016
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
