import connectDB from "@/lib/DB";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const services = [
    {
      _id: "67b71c32bda5a81522122ef3",
      title: "Designing IT Services",
      description: "Contrary to popular belief, Lorem Ipsum is",
      slug: "designing-it-services",
      featured: false,
      icon: "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'/></svg>",
      __v: 0,
    },
    {
      _id: "67b71cb9bda5a81522122ef5",
      title: "Cloud IT Services",
      description: "Contrary to popular belief, Lorem Ipsum is",
      slug: "cloud-it-services",
      featured: false,
      icon: "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'/></svg>",
      __v: 0,
    },
    {
      _id: "67b71ce0bda5a81522122ef7",
      title: "Cybersecurity Services",
      description: "Contrary To Popular Belief, Lorem Ipsum is",
      slug: "cybersecurity-services",
      featured: false,
      icon: "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'/></svg>",
      __v: 0,
    },
    {
      _id: "67b71d8bbda5a81522122ef9",
      title: "Managed Team",
      description: "Empower your projects with Algofolks' dedicated expert teams for seamless, high-quality development.",
      slug: "managed-Team",
      featured: true,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'/></svg>",
      __v: 0,
      detailContent: `<section className="py-16">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-9xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1B2B] ">
              Monitoring And Maintaining Your Firm&apos; Network For Uptime And
              Security.
            </h2>

         
            <div className="">
          
              <div className="p-8 flex items-start gap-4"></div>

            
              <div className="w-full">
                <Image
                  src="/images/service 1.png"
                  alt="Service Main"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              
              <div className="py-8">
                <h4 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                  Managed Team
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-12">
                  Hire a team of Developers, Designers, Quality Assurance Specialists, DevOps Engineers, and other experts you may need to work hand-in-hand on your digital product. Our Managed Team approach ensures that you have a dedicated, skilled workforce committed to turning your vision into reality.rom frontend and backend development to UI/UX design, testing, and deployment, we bring together top industry talent to build innovative and scalable solutions. Our designers craft visually appealing and user-friendly interfaces, while our developers ensure seamless functionality and performance. Meanwhile, our Quality Assurance (QA) specialists meticulously test your product to eliminate bugs and optimize usability.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                  <div>
                    <Image
                      src="/images/service 2.png"
                      alt="Service 2"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>

                 
                  <div>
                    <Image
                      src="/images/service 3.png"
                      alt="Service 3"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Here&apos;s what our clients say about our services.
                  We&apos;re proud to have helped businesses achieve their
                  goals.
                </p>
              </div>
            </div>

            <hr></hr>
           
            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
                
                  <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                   
                    <div className="col-span-2">
                    
                      <div className="grid grid-cols-3 gap-6 mb-12">
                         ${[...Array(9)].map(() => `
      <div class="flex items-start gap-2">
        <span class="text-[#0561FC] text-lg font-bold mt-1">
          <img
            src="/images/sd1.png"
            alt="Service Illustration"
            width="100"
            height="100"
            class="w-9 h-9"
          />
        </span>
        <p class="text-gray-600 text-[13px] leading-relaxed">
          Lorem Ipsum Is Not
        </p>
      </div>
    `).join('')}
                      </div>

                     
                      <div>
                        <h3 className="text-[28px] font-bold text-[#0B1B2B] mb-6">
                          Proin Non Eros Elementumtibulum Vehicula
                        </h3>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
                          Our team crafts tailored digital product strategies that align with your company's vision, driving sustainable growth and ensuring long-term business success.
                        </p>
 <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
                        We bring your brand to life by creating a compelling visual identity, from logos to bespoke typography, ensuring your business stands out with a cohesive, professional look
                        </p>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
We transform your brand identity into a practical and intuitive digital interface, delivering user-friendly designs that help clients navigate and succeed in the digital landscape.                        </p>
                     
 <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
Our experts design systems that grow with your business. We implement scalable infrastructure that adapts to demand, ensuring smooth operations without compromising performance or security. </p>
<p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
We accelerate your business’s digital journey by modernizing legacy systems, improving workflows, and enabling innovative solutions to create more value and efficiency in your operations.</p>
<p className="text-gray-600 text-[13px] leading-[1.8] mb-10">
We ensure seamless integration of various technologies across your platform, enabling smooth communication between systems, reducing downtime, and enhancing overall operational efficiency.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        
                          <div className=" p-6 rounded-xl">
                            <Image
                              src="/images/service 4.png"
                              alt="Service Illustration"
                              width={400}
                              height={300}
                              className="w-full h-auto"
                              priority
                            />
                          </div>

                          <div className="mb-8">
                            <div className="mt-6 space-y-3">
                               ${[
          "Strategy",
          "Visual identity",
          "User interface",
          "Scalable Solutions",
          "Digital Transformation",
          "Seamless Integration"
        ].map(title => `
            <div class="flex items-start ">
              <img 
                src="/images/sd1.png"
                alt="bullet point"
                width="24"
                height="24"
                class=""
              />
              <div>
                <p class="text-gray-600 text-[13px] ">
                  ${title}
                </p>
              </div>
            </div>
          `).join('')}
                        </div>
                          </div>
                        </div>

                    
                        <div>
                          <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                            Requirements
                          </h4>
                          <p className="text-gray-600 text-[13px] leading-[1.8] mb-6">
                            Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                            Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                            Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                            Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                            Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                            Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                          </p>

                          <div>
                            <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                              How to hire Managed Teams
                            </h4>
                            <div className="space-y-3">
                              ${[
          {
            title: "Define Your Project Goals",
            description: "Clarify your project objectives and requirements. By understanding your needs, we ensure a tailored team selection that aligns perfectly with your vision and business objectives."
          },
          {
            title: "Select Specialized Talent",
            description: "Choose from a curated pool of highly skilled professionals. We connect you with experts in web development, app development, DevOps, and more, all selected to meet your specific project demands."
          },
          {
            title: "Flexible Engagement Models",
            description: "Enjoy flexibility with our customized hiring options. We offer project-based, hourly, or long-term engagement models, allowing you to choose what works best for your business and budget."
          },
          {
            title: "Seamless Onboarding",
            description: "Experience a streamlined onboarding process. Our team ensures smooth integration into your project with immediate productivity and minimal setup time, so your project progresses quickly."
          },
          {
            title: "Ongoing Support & Management",
            description: "We provide continuous support and team management, handling logistics, performance monitoring, and updates so you can focus on achieving project milestones without administrative burdens."
          }
        ].map((item) => `
                            <div class="flex items-start gap-3">
                              <img 
                                src="/images/sd1.png"
                                alt="bullet point"
                                width="24"
                                height="24"
                                class="mt-1"
                              />
                              <div>
                                <h3 class="text-[#0B1B2B] text-lg font-semibold mb-2">
                                  ${item.title}
                                </h3>
                                <p class="text-gray-600 text-[13px] leading-relaxed">
                                  ${item.description}
                                </p>
                              </div>
                            </div>
                          `).join('')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                   
                    <div className="mb-12">
                      <h2 className="text-center text-[32px] font-bold mb-2">
                        Why <span className="text-[#0066FF]">Algofolks?</span>
                      </h2>
                      <p className="text-center text-gray-500 text-sm mb-8">
                        Choose us for our expertise and commitment to excellence
                      </p>

                      <div className="space-y-4">
                        
                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">01</span>
                            </div>
                            <h4 className="text-base font-medium">Professional</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            At Algofolks, we believe in the power of expertise. That's why we meticulously choose our specialists based on their deep knowledge and proven track record. We're confident in the skills and experience they bring, allowing you to focus on what matters most.
                          </p>
                        </div>

                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">02</span>
                            </div>
                            <h4 className="text-base font-medium">Teammates</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            Beyond individual expertise, we foster a collaborative environment. Our specialists are carefully screened for their soft skills, ensuring they can work seamlessly as teammates. We believe in building strong teams that deliver results efficiently.
                          </p>
                        </div>

                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">03</span>
                            </div>
                            <h4 className="text-base font-medium">Self-managed</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We empower our specialists to take ownership. Our self-organized agile teams are designed to function independently, ensuring effectiveness and project success. This structure enables fast decision-making and streamlined workflows, allowing you to stay ahead of the curve.
                          </p>
                        </div>

                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">04</span>
                            </div>
                            <h4 className="text-base font-medium">Financial control</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We understand the importance of budget-conscious solutions. At Algofolks, you gain access to specialized expertise without the overhead costs associated with full-time employees. This allows you to maintain financial flexibility and focus resources where they're needed most.
                          </p>
                        </div>

                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">05</span>
                            </div>
                            <h4 className="text-base font-medium">Scandinavian work culture</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We've adopted a Scandinavian work culture that prioritizes well-being and productivity. This fosters a sense of happiness and ensures a high quality of life for our specialists. We believe a happy and engaged team is a successful team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
                 
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-sm text-gray-600 mb-2  border border-gray-300 p-1 rounded-3xl inline-block">
                        Recently Viewed It Services
                      </span>
                      <h2 className="text-[28px] font-bold text-[#0B1B2B]">
                        Exclusive Technology To Provide IT Solutions
                      </h2>
                    </div>
                     <a
    href="/services"
    className="inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-blue-700 transition-colors"
  >
    VIEW ALL
    <span className="text-lg">→</span>
  </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   
                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 5.png"
                          alt="Graphics Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Graphics Designs
                      </h3>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 6.png"
                          alt="Web Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Web Designs
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>`
    },
    {
      _id: "67b71de8bda5a81522122efd",
      title: "Technology Consulting",
      description: "Solve IT challenges with Algofolks' expert consulting for optimized infrastructure and digital growth.",
      slug: "Technology-Consulting",
      featured: true,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z'/></svg>",
      __v: 0,
      detailContent: `<section className="py-16">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1B2B] ">
            Monitoring And Maintaining Your Firm&apos; Network For Uptime And
            Security.
          </h2>

          <div className="">
          
            <div className="p-8 flex items-start gap-4"></div>

            <div className="w-full">
              <Image
                src="/images/service 1.png"
                alt="Service Main"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="py-8">
              <h4 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                Technology Consulting
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-12">
               Empower your business with expert technology consulting. Our team guides you through strategic tech decisions, from web and app development to cloud solutions, ensuring scalable, future-ready systems tailored to your unique needs.
              </p>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
                <div>
                  <Image
                    src="/images/service 2.png"
                    alt="Service 2"
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                </div>

              
                <div>
                  <Image
                    src="/images/service 3.png"
                    alt="Service 3"
                    width={600}
                    height={300}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Here&apos;s what our clients say about our services.
                We&apos;re proud to have helped businesses achieve their
                goals.
              </p>
            </div>
          </div>

          <hr></hr>
      
          <section className="py-16">
            <div className="">
              <div className="max-w-6xl mx-auto">
              
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                 
                  <div className="col-span-2">
                
                    <div className="grid grid-cols-3 gap-6 mb-12">
                        ${[...Array(9)].map(() => `
      <div class="flex items-start gap-2">
        <span class="text-[#0561FC] text-lg font-bold mt-1">
          <img
            src="/images/sd1.png"
            alt="Service Illustration"
            width="100"
            height="100"
            class="w-9 h-9"
          />
        </span>
        <p class="text-gray-600 text-[13px] leading-relaxed">
          Lorem Ipsum Is Not
        </p>
      </div>
    `).join('')}
                    </div>

                      <div>
                        <h3 className="text-[28px] font-bold text-[#0B1B2B] mb-6">
                          Proin Non Eros Elementumtibulum Vehicula
                        </h3>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
                        Transform your brand with strategic visual design. Our designers specialize in branding, logo creation, and product redesign, ensuring every element resonates with your audience for a powerful, cohesive identity.
                        </p>
 <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
                       Amplify your reach with our marketing specialists. From lifecycle marketing to creative content and digital advertising, we optimize your strategy to attract, engage, and convert your target audience.
                        </p>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
Ensure flawless functionality with meticulous QA. Our specialists focus on performance, security, and usability testing, rigorously analyzing every feature for seamless user experiences and reliable performance. </p>
                     
 <p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
Optimize your infrastructure for growth and agility. Our DevOps engineers streamline integration, monitoring, and scaling, ensuring continuous deployment and robust cloud solutions tailored to your specific needs.</p>
<p className="text-gray-600 text-[13px] leading-[1.8] mb-3">
Bring ideas to life with our versatile developers. From front-end to back-end and mobile applications, we create dynamic, responsive solutions with automation and best practices for every platform.</p>
<p className="text-gray-600 text-[13px] leading-[1.8] mb-10">
Drive your projects forward with our skilled project managers. They coordinate resources, timelines, and communication to ensure seamless project execution, aligning every team's efforts with your strategic goals.

</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        
                          <div className=" p-6 rounded-xl">
                            <Image
                              src="/images/service 4.png"
                              alt="Service Illustration"
                              width={400}
                              height={300}
                              className="w-full h-auto"
                              priority
                            />
                          </div>

                          <div className="mb-8">
                            <div className="mt-6 space-y-3">
                               ${[
          "Designers",
          "Marketing Specialists",
          "Quality Assurance Specialists",
          "DevOps Engineers",
          "Developers",
          "Project Managers"
        ].map(title => `
            <div class="flex items-start ">
              <img 
                src="/images/sd1.png"
                alt="bullet point"
                width="24"
                height="24"
                class=""
              />
              <div>
                <p class="text-gray-600 text-[13px] ">
                  ${title}
                </p>
              </div>
            </div>
          `).join('')}
                          </div>
                        </div>
                      </div>

                     
                      <div>
                        <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                          Requirements
                        </h4>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-6">
                          Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                          Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                          Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                          Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                          Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                          Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                        </p>

                      
                        <div>
                          
                          <div className="space-y-3">
                            ${[
          {
            title: "Identify Your Business Needs",
            description: "Define the specific areas where you need technology support, such as web or app development. Our experts help you pinpoint pain points and opportunities, aligning technology solutions to drive your business forward."
          },
          {
            title: "Evaluate Expertise and Experience",
            description: "Seek consultants with a proven track record in your industry. Our team brings years of experience in custom software, web development, and app solutions to ensure a knowledgeable and hands-on approach."
          },
          {
            title: "Assess Technology Alignment",
            description: "Choose consultants who understand modern tech trends and align them with your goals. We prioritize scalable, cutting-edge solutions, using the latest frameworks and tools to future-proof your business."
          },
          {
            title: "Tailor Engagement Models",
            description: "Find a flexible consulting engagement that matches your budget and project scope. We offer options from project-based consulting to ongoing support, ensuring you get the right level of expertise when you need it."
          },
          {
            title: "Ensure Seamless Collaboration",
            description: "Effective consulting requires strong communication and collaboration. Our team works closely with yours, integrating seamlessly into your workflows and delivering clear, actionable insights every step of the way."
          },
          {
            title: "Evaluate Ongoing Support and Optimization",
            description: "Technology is ever-evolving, and support shouldn't end at launch. We provide continuous monitoring, optimization, and consulting to keep your solutions competitive, efficient, and aligned with your business objectives."
          }
        ].map((item) => `
<div class="flex items-start gap-3">
  <img 
    src="/images/sd1.png"
    alt="bullet point"
    width="24"
    height="24"
    class="mt-1"
  />
  <div>
    <h3 class="text-[#0B1B2B] text-lg font-semibold mb-2">
      ${item.title}
    </h3>
    <p class="text-gray-600 text-[13px] leading-relaxed">
      ${item.description}
    </p>
  </div>
</div>
`).join('')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              
                  <div className="mb-12">
                    <h2 className="text-center text-[32px] font-bold mb-2">
                      Why <span className="text-[#0066FF]">Algofolks?</span>
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-8">
                      Choose us for our expertise and commitment to excellence
                    </p>

                    <div className="space-y-4">
                     
                      <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">01</span>
                          </div>
                          <h4 className="text-base font-medium">Professional</h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          At Algofolks, we believe in the power of expertise. That's why we meticulously choose our specialists based on their deep knowledge and proven track record. We're confident in the skills and experience they bring, allowing you to focus on what matters most.
                        </p>
                      </div>

                      <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">02</span>
                          </div>
                          <h4 className="text-base font-medium">Teammates</h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          Beyond individual expertise, we foster a collaborative environment. Our specialists are carefully screened for their soft skills, ensuring they can work seamlessly as teammates. We believe in building strong teams that deliver results efficiently.
                        </p>
                      </div>

                      <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">03</span>
                          </div>
                          <h4 className="text-base font-medium">Self-managed</h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          We empower our specialists to take ownership. Our self-organized agile teams are designed to function independently, ensuring effectiveness and project success. This structure enables fast decision-making and streamlined workflows, allowing you to stay ahead of the curve.
                        </p>
                      </div>

                      <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">04</span>
                          </div>
                          <h4 className="text-base font-medium">Financial control</h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          We understand the importance of budget-conscious solutions. At Algofolks, you gain access to specialized expertise without the overhead costs associated with full-time employees. This allows you to maintain financial flexibility and focus resources where they're needed most.
                        </p>
                      </div>

                      <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">05</span>
                          </div>
                          <h4 className="text-base font-medium">Scandinavian work culture</h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          We've adopted a Scandinavian work culture that prioritizes well-being and productivity. This fosters a sense of happiness and ensures a high quality of life for our specialists. We believe a happy and engaged team is a successful team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />

          <section className="py-16">
            <div className="">
              <div className="max-w-6xl mx-auto">
             
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-sm text-gray-600 mb-2  border border-gray-300 p-1 rounded-3xl inline-block">
                      Recently Viewed It Services
                    </span>
                    <h2 className="text-[28px] font-bold text-[#0B1B2B]">
                      Exclusive Technology To Provide IT Solutions
                    </h2>
                  </div>
                    <a
    href="/services"
    className="inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-blue-700 transition-colors"
  >
    VIEW ALL
    <span className="text-lg">→</span>
  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                  <div className="group cursor-pointer">
                    <div className="rounded-2xl overflow-hidden mb-4">
                      <Image
                        src="/images/service 5.png"
                        alt="Graphics Designs"
                        width={600}
                        height={400}
                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B1B2B]">
                      Graphics Designs
                    </h3>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="rounded-2xl overflow-hidden mb-4">
                      <Image
                        src="/images/service 6.png"
                        alt="Web Designs"
                        width={600}
                        height={400}
                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B1B2B]">
                      Web Designs
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>`

    },
    {
      _id: "67b71e05bda5a81522122eff",
      title: "IT Consulting Services",
      description: "Contrary To Popular Belief, Lorem Ipsum",
      slug: "it-consulting-services",
      featured: false,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'/></svg>",
      __v: 0,
    },
    {
      _id: "67b71e35bda5a81522122f01",
      title: "Legal Technology Services",
      description: "Contrary To Popular Belief, Lorem Ipsum",
      slug: "legal-technology-services",
      featured: false,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'/></svg>",
      __v: 0,
    },
    {
      _id: "67b71e53bda5a81522122f03",
      title: "Software Development",
      description: "Contrary To Popular Belief, Lorem Ipsum",
      slug: "software-development",
      featured: false,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'/></svg>",
      __v: 0,
    },

    {
      _id: "67b71e53bda5a81522122f03",
      title: "Support & Maintenance",
      description: "Ensure smooth operations with Algofolks' proactive support and maintenance services.",
      slug: "support-and-maintenance",
      featured: false,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'/></svg>",
      __v: 0,
      detailContent: `<section className="py-16">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-9xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1B2B] ">
              Monitoring And Maintaining Your Firm&apos; Network For Uptime And
              Security.
            </h2>

            <div className="">
             
              <div className="p-8 flex items-start gap-4"></div>

              <div className="w-full">
                <Image
                  src="/images/service 1.png"
                  alt="Service Main"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

             
              <div className="py-8">
                <h4 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                 Support & Maintenance
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-12">
                 At Algofolks, we ensure your digital platforms run smoothly and stay secure with our dedicated support and maintenance services. Our team of experts is ready to address your needs, from web and app maintenance to robust DevOps support, so you can focus on growth while we handle the technical side.


                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                  <div>
                    <Image
                      src="/images/service 2.png"
                      alt="Service 2"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>

                 
                  <div>
                    <Image
                      src="/images/service 3.png"
                      alt="Service 3"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Here&apos;s what our clients say about our services.
                  We&apos;re proud to have helped businesses achieve their
                  goals.
                </p>
              </div>
            </div>

            <hr></hr>
          
            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                   
                    <div className="col-span-2">
                   
                      <div className="grid grid-cols-3 gap-6 mb-12">
                          ${[...Array(9)].map(() => `
      <div class="flex items-start gap-2">
        <span class="text-[#0561FC] text-lg font-bold mt-1">
          <img
            src="/images/sd1.png"
            alt="Service Illustration"
            width="100"
            height="100"
            class="w-9 h-9"
          />
        </span>
        <p class="text-gray-600 text-[13px] leading-relaxed">
          Lorem Ipsum Is Not
        </p>
      </div>
    `).join('')}
                      </div>

                    
                     <div>
    <h3 class="text-[28px] font-bold text-[#0B1B2B] mb-6">
      Proin Non Eros Elementumtibulum Vehicula
    </h3>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Bug fixing and troubleshooting are essential to maintaining software stability. Bugs are usually identified through user feedback, testing, or automated monitoring systems. The main goals in this process include reproducing the issue, identifying its root cause, and implementing a fix without introducing new problems.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Optimizing performance can significantly enhance the user experience by reducing load times, improving responsiveness, and lowering resource usage. This process involves analyzing and identifying bottlenecks, refining code, and improving data handling techniques.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Security patching is critical for protecting software from vulnerabilities that could be exploited by malicious actors. Regular updates keep systems compliant with the latest security standards and reduce risks.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Feature enhancements aim to improve software functionality, often based on user feedback, market trends, or technological advances. This keeps software competitive and responsive to user needs.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-10">
      UX refinements involve improving software interactions to make them more intuitive, accessible, and satisfying. A positive user experience increases adoption, satisfaction, and retention.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
      <div class="p-6 rounded-xl">
        <img
          src="/images/service 4.png"
          alt="Service Illustration"
          width="400"
          height="300"
          class="w-full h-auto"
        />
      </div>

      <div class="mb-8">
        <div class="mt-6 space-y-3">
          ${[
          "Bug Fixes and Troubleshooting",
          "Performance Optimization",
          "Security Patching and Updates",
          "Feature Enhancements",
          "User Experience (UX) Refinements"
        ].map(title => `
            <div class="flex items-start">
              <img 
                src="/images/sd1.png"
                alt="bullet point"
                width="24"
                height="24"
                class=""
              />
              <div>
                <p class="text-gray-600 text-[13px]">
                  ${title}
                </p>
              </div>
            </div>
          `).join('')}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                            Requirements
                          </h4>
                          <p className="text-gray-600 text-[13px] leading-[1.8] mb-6">
                            Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                            Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                            Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                            Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                            Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                            Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                          </p>

                       
                        <div>
    <h4 class="text-[22px] font-bold text-[#0B1B2B] mb-4">
      DevOps Support & Maintenance
    </h4>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-6">
      Streamline your development and operations with our expert DevOps services. We help you achieve smoother deployments, automated workflows, and efficient infrastructure management, enabling your team to deliver build and more reliably.
    </p>

    <div class="space-y-6">
      ${[
          {
            title: "Continuous Integration & Continuous Deployment (CI/CD) Setup and Support",
            description: "CI/CD enables continuous development and testing, and money move quickly ensuring faster release cycles and more stable builds. By automating the integration and deployment process, CI/CD improves software quality and reduces manual errors."
          },
          {
            title: "Infrastructure Monitoring and Management",
            description: "Monitoring and managing infrastructure is crucial for maintaining system health, ensuring optimal performance, and preventing downtime. Real-time monitoring helps teams identify and address issues before they impact users."
          },
          {
            title: "Cloud Services Management (AWS, Azure, Google Cloud)",
            description: "Cloud services management involves configuring, managing, and scaling applications in cloud environments like AWS, Azure, or Google Cloud. This includes optimizing cloud costs, ensuring compliance, and optimizing resources."
          },
          {
            title: "Automation of Repetitive Tasks",
            description: "Automating repetitive tasks improves productivity, reduces errors, and frees up teams to focus on more complex activities. Automation can apply to various areas, from infrastructure management to code testing and deployment."
          },
          {
            title: "Security and Compliance Checks",
            description: "Security and compliance checks ensure that systems and applications meet regulatory standards and industry best practices. These checks reduce the risk of breaches, protect sensitive data, and help organizations stay compliant."
          }
        ].map((item) => `
        <div class="flex items-start gap-3">
          <img 
            src="/images/sd1.png"
            alt="bullet point"
            width="24"
            height="24"
            class="mt-1"
          />
          <div>
            <h3 class="text-[#0B1B2B] text-lg font-semibold mb-2">
              ${item.title}
            </h3>
            <p class="text-gray-600 text-[13px] leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>
      `).join('')}
                            </div>
                             <div>
    <h4 class="text-[22px] font-bold text-[#0B1B2B] my-6">
      Experts
    </h4>
   

    <div class="space-y-6">
      ${[
          {
            title: "Designers",
            description: "Transform your brand with strategic visual design. Our designers specialize in branding, logo creation, and product redesign, ensuring every element resonates with your audience for a powerful, cohesive identity."
          },
          {
            title: "Marketing Specialists",
            description: "Amplify your reach with our marketing specialists. From lifecycle marketing to creative content and digital advertising, we optimize your strategy to attract, engage, and convert your target audience."
          },
          {
            title: "Quality Assurance Specialists",
            description: "Ensure flawless functionality with meticulous QA. Our specialists focus on performance, security and usability testing, rigorously analyzing every feature for seamless user experiences and reliable performance."
          },
          {
            title: "DevOps Engineers",
            description: "Optimize your infrastructure for growth and agility. Our DevOps engineers streamline integration, monitoring, and scaling, ensuring continuous deployment and robust cloud solutions tailored to your specific needs."
          },
          {
            title: "Developers",
            description: "Bring ideas to life with our versatile developers. From front-end to back-end and mobile applications, we create dynamic, responsive solutions with automation and best practices for every platform."
          },
          {
            title: "Project Managers",
            description: "Drive your projects forward with our skilled project managers. They coordinate resources, timelines, and communication to ensure seamless project execution, aligning every team's efforts with your strategic goals."
          }
        ].map((item) => `
        <div class="flex items-start gap-3">
          <img 
            src="/images/sd1.png"
            alt="bullet point"
            width="24"
            height="24"
            class="mt-1"
          />
          <div>
            <h3 class="text-[#0B1B2B] text-lg font-semibold mb-2">
              ${item.title}
            </h3>
            <p class="text-gray-600 text-[13px] leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                    

                    <div className="mb-12">
                      <h2 className="text-center text-[32px] font-bold mb-2">
                        Why <span className="text-[#0066FF]">Choose Us?</span>
                      </h2>
                      <p className="text-center text-gray-500 text-sm mb-8">
                        Choose us for our expertise and commitment to excellence
                      </p>

                      <div className="space-y-4">
                      
                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">01</span>
                            </div>
                            <h4 className="text-base font-medium">Professional</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            At Algofolks, we believe in the power of expertise. That's why we meticulously choose our specialists based on their deep knowledge and proven track record. We're confident in the skills and experience they bring, allowing you to focus on what matters most.
                          </p>
                        </div>

                     
                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">02</span>
                            </div>
                            <h4 className="text-base font-medium">Teammates</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            Beyond individual expertise, we foster a collaborative environment. Our specialists are carefully screened for their soft skills, ensuring they can work seamlessly as teammates. We believe in building strong teams that deliver results efficiently.
                          </p>
                        </div>

                        
                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">03</span>
                            </div>
                            <h4 className="text-base font-medium">Self-managed</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We empower our specialists to take ownership. Our self-organized agile teams are designed to function independently, ensuring effectiveness and project success. This structure enables fast decision-making and streamlined workflows, allowing you to stay ahead of the curve.
                          </p>
                        </div>

                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">04</span>
                            </div>
                            <h4 className="text-base font-medium">Financial control</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We understand the importance of budget-conscious solutions. At Algofolks, you gain access to specialized expertise without the overhead costs associated with full-time employees. This allows you to maintain financial flexibility and focus resources where they're needed most.
                          </p>
                        </div>

                       
                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">05</span>
                            </div>
                            <h4 className="text-base font-medium">Experienced Team of Experts</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                          Our support team comprises skilled developers, DevOps engineers, and quality assurance specialists with extensive experience across various industries. We ensure your projects receive dedicated attention, expert handling, and swift problem resolution.
                          </p>
                        </div>

                         <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">06</span>
                            </div>
                            <h4 className="text-base font-medium">Contact Us for Reliable Support</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            Whether you’re looking for a full-scale support solution or specialized assistance in DevOps, web, or app development, [Your Company Name] is here to help. Get in touch with us to learn more about how our support and maintenance services can keep your digital infrastructure performing at its best.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

      
            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
                
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-sm text-gray-600 mb-2  border border-gray-300 p-1 rounded-3xl inline-block">
                        Recently Viewed It Services
                      </span>
                      <h2 className="text-[28px] font-bold text-[#0B1B2B]">
                        Exclusive Technology To Provide IT Solutions
                      </h2>
                    </div>
                     <a
    href="/services"
    className="inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-blue-700 transition-colors"
  >
    VIEW ALL
    <span className="text-lg">→</span>
  </a>
                  </div>

                
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  
                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 5.png"
                          alt="Graphics Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Graphics Designs
                      </h3>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 6.png"
                          alt="Web Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Web Designs
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>`
    },
    {
      _id: "67b71e53bda5a81522122f03",
      title: "Product Development",
      description: "Turn ideas into market-ready products with Algofolks' end-to-end development services.",
      slug: "product-development",
      featured: false,
      icon: "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'/></svg>",
      __v: 0,
      detailContent: `<section className="py-16">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-9xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1B2B] ">
              Monitoring And Maintaining Your Firm&apos; Network For Uptime And
              Security.
            </h2>

            <div className="">

              <div className="p-8 flex items-start gap-4"></div>

              <div className="w-full">
                <Image
                  src="/images/service 1.png"
                  alt="Service Main"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="py-8">
                <h4 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                 Product Development
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-12">
                Full-cycle software product development services from design to development, launch, and marketing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                  <div>
                    <Image
                      src="/images/service 2.png"
                      alt="Service 2"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>

                  <div>
                    <Image
                      src="/images/service 3.png"
                      alt="Service 3"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Here&apos;s what our clients say about our services.
                  We&apos;re proud to have helped businesses achieve their
                  goals.
                </p>
              </div>
            </div>

            <hr></hr>
         
            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
                
                  <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                   
                    <div className="col-span-2">
                    
                      <div className="grid grid-cols-3 gap-6 mb-12">
                           ${[...Array(9)].map(() => `
      <div class="flex items-start gap-2">
        <span class="text-[#0561FC] text-lg font-bold mt-1">
          <img
            src="/images/sd1.png"
            alt="Service Illustration"
            width="100"
            height="100"
            class="w-9 h-9"
          />
        </span>
        <p class="text-gray-600 text-[13px] leading-relaxed">
          Lorem Ipsum Is Not
        </p>
      </div>
    `).join('')}
                      </div>

                     <div>
    <h3 class="text-[28px] font-bold text-[#0B1B2B] mb-6">
      Proin Non Eros Elementumtibulum Vehicula
    </h3>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Transform your brand with strategic visual design. Our designers specialize in branding, logo creation, and product redesign, ensuring every element resonates with your audience for a powerful, cohesive identity.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Amplify your reach with our marketing specialists. From lifecycle marketing to creative content and digital advertising, we optimize your strategy to attract, engage, and convert your target audience.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Ensure flawless functionality with meticulous QA. Our specialists focus on performance, security, and usability testing, rigorously analyzing every feature for seamless user experiences and reliable performance.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Optimize your infrastructure for growth and agility. Our DevOps engineers streamline integration, monitoring, and scaling, ensuring continuous deployment and robust cloud solutions tailored to your specific needs.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-3">
      Bring ideas to life with our versatile developers. From front-end to back-end and mobile applications, we create dynamic, responsive solutions with automation and best practices for every platform.
    </p>
    <p class="text-gray-600 text-[13px] leading-[1.8] mb-10">
      Drive your projects forward with our skilled project managers. They coordinate resources, timelines, and communication to ensure seamless project execution, aligning every team's efforts with your strategic goals.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
      <div class="p-6 rounded-xl">
        <img
          src="/images/service 4.png"
          alt="Service Illustration"
          width="400"
          height="300"
          class="w-full h-auto"
        />
      </div>

      <div class="mb-8">
        <div class="mt-6 space-y-3">
          ${[
          "Designers",
          "Marketing Specialists",
          "Quality Assurance Specialists",
          "DevOps Engineers",
          "Developers",
          "Project Managers"
        ].map(title => `
            <div class="flex items-start">
              <img 
                src="/images/sd1.png"
                alt="bullet point"
                width="24"
                height="24"
                class=""
              />
              <div>
                <p class="text-gray-600 text-[13px]">
                  ${title}
                </p>
              </div>
            </div>
          `).join('')}
        </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                            Requirements
                          </h4>
                          <p className="text-gray-600 text-[13px] leading-[1.8] mb-6">
                            Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                            Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                            Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                            Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                            Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                            Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                          </p>

                    
                          <div>
                            <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                              How to hire Managed Teams
                            </h4>
                            <div className="space-y-3">
                              ${[
          "Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds Asf.",
          "Ut, Vehicula A Erat. Phasellus Ac Sem Sed Erat Pos Se",
          "Feugiat, Nisi Nec Dapibusass A Gas Dictum, Ligula Nulla",
          "Odio Elit Ac Orci. Curabitnc. Nunc Eu Rhoncus Justo.",
          "Consequat Viverra Sapien Id Lobortis. Vivamus Auctor",
        ].map((item) => `
                            <div class="flex items-start gap-3">
                              <img 
                                src="/images/sd1.png"
                                alt="bullet point"
                                width="24"
                                height="24"
                                class="mt-1"
                              />
                              <div>
<p className="text-gray-600 text-[13px] leading-relaxed">
        ${item}
      </p>
                              </div>
                            </div>
                          `).join('')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-12">
                      <h2 className="text-center text-[32px] font-bold mb-2">
                        Why <span className="text-[#0066FF]">Algofolks?</span>
                      </h2>
                      <p className="text-center text-gray-500 text-sm mb-8">
                        Choose us for our expertise and commitment to excellence
                      </p>

                      <div className="space-y-4">
                
                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">01</span>
                            </div>
                            <h4 className="text-base font-medium">Professional</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            At Algofolks, we believe in the power of expertise. That's why we meticulously choose our specialists based on their deep knowledge and proven track record. We're confident in the skills and experience they bring, allowing you to focus on what matters most.
                          </p>
                        </div>

                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">02</span>
                            </div>
                            <h4 className="text-base font-medium">Teammates</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            Beyond individual expertise, we foster a collaborative environment. Our specialists are carefully screened for their soft skills, ensuring they can work seamlessly as teammates. We believe in building strong teams that deliver results efficiently.
                          </p>
                        </div>

                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">03</span>
                            </div>
                            <h4 className="text-base font-medium">Self-managed</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We empower our specialists to take ownership. Our self-organized agile teams are designed to function independently, ensuring effectiveness and project success. This structure enables fast decision-making and streamlined workflows, allowing you to stay ahead of the curve.
                          </p>
                        </div>

                        <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">04</span>
                            </div>
                            <h4 className="text-base font-medium">Financial control</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We understand the importance of budget-conscious solutions. At Algofolks, you gain access to specialized expertise without the overhead costs associated with full-time employees. This allows you to maintain financial flexibility and focus resources where they're needed most.
                          </p>
                        </div>

                        <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                              <span className="text-base font-medium">05</span>
                            </div>
                            <h4 className="text-base font-medium">Scandinavian work culture</h4>
                          </div>
                          <p className="text-[13px] text-white/70 leading-relaxed">
                            We've adopted a Scandinavian work culture that prioritizes well-being and productivity. This fosters a sense of happiness and ensures a high quality of life for our specialists. We believe a happy and engaged team is a successful team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            <section className="py-16">
              <div className="">
                <div className="max-w-6xl mx-auto">
        
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-sm text-gray-600 mb-2  border border-gray-300 p-1 rounded-3xl inline-block">
                        Recently Viewed It Services
                      </span>
                      <h2 className="text-[28px] font-bold text-[#0B1B2B]">
                        Exclusive Technology To Provide IT Solutions
                      </h2>
                    </div>
                     <a
    href="/services"
    className="inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-blue-700 transition-colors"
  >
    VIEW ALL
    <span className="text-lg">→</span>
  </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    
                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 5.png"
                          alt="Graphics Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Graphics Designs
                      </h3>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 6.png"
                          alt="Web Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Web Designs
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>`
    },
  ];

  if (slug) {
    const service = services.find(service => service.slug === slug);

    if (!service) {
      return NextResponse.json(
        { success: false, message: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: service },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: true, data: services },
    { status: 200 }
  );
}