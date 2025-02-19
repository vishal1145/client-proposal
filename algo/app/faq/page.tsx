'use client'
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Why Are IT Services Important For Businesses?",
      answer: "IT services are crucial for businesses as they ensure smooth operations, enhance productivity, and maintain cybersecurity. They provide essential technical support, system maintenance, and strategic guidance for digital transformation. Modern businesses rely heavily on technology, making IT services fundamental for staying competitive and efficient in today's digital landscape."
    },
    {
      question: "What's Included In Managed IT Services?",
      answer: "Managed IT services include system monitoring, data backup, cybersecurity solutions, and IT support. They ensure businesses run efficiently with minimal downtime."
    },
    {
      question: "What Are The Benefits Of Managed IT Services?",
      answer: "Managed IT services offer cost-effectiveness, proactive maintenance, enhanced security, reduced downtime, and access to expert IT professionals."
    },
    {
      question: "How Do IT Services Protect Against Cyber Threats?",
      answer: "IT services implement firewalls, regular security updates, data encryption, and employee training to protect against cyber threats."
    },
    {
      question: "Can IT Services Design And Implement Networks?",
      answer: "Yes, IT services design and implement secure, scalable network solutions, including hardware setup and wireless configuration."
    }
  ];

  return (
    <>
      <div className="relative">
        <section className="relative bg-[#F6F0E4] py-20 px-4 sm:px-8 overflow-x-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto opacity-90"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto opacity-80"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-[36px] font-bold text-[#0B1B2B]">
              Frequently Asked Questions
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>FAQ</span>
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
      </section>
        {/* FAQ Section */}
        <div className="px-4 sm:px-8 md:px-20 lg:px-44 mt-12 sm:mt-24 pb-20">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block text-black px-4 py-1 border border-1 rounded-full text-xs">
              Latest Updates
            </span>
            <p className="font-['Public_Sans'] mt-2 font-semibold text-[30px]">
              Frequently Asked Questions
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-5 sm:px-8 py-4 sm:py-6 text-left"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <p className="font-['Public_Sans'] text-[20px]  font-medium">
                    {faq.question}
                  </p>
                  <span className={`transition-transform duration-200 text-gray-400 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 sm:px-8 pb-4">
                    <p className="font-light text-[14px] leading-[26px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0  z-10  flex-col items-end gap-8 sm:gap-12 hidden sm:flex">
          <Image
            src="/images/triangle.png"
            alt="Triangle decoration"
            width={30}
            height={59}
            className="w-auto h-auto"
          />
          <Image
            src="/images/dot.png"
            alt="Dots pattern decoration"
            width={100}
            height={60}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqSection;
