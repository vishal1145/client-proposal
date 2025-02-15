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
      answer: "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard Mc Clintock Latin Literature From 45 BC, Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard Mc Clintock Latin Literature From 45 BC."
    },
    {
      question: "What Are The Benefits Of Managed IT Services?",
      answer: "Managed IT services offer numerous benefits including cost-effectiveness, 24/7 system monitoring, proactive maintenance, enhanced security, reduced downtime, and access to expert IT professionals. They allow businesses to focus on core operations while ensuring their technology infrastructure remains reliable and up-to-date."
    },
    {
      question: "How Do IT Services Protect Against Cyber Threats?",
      answer: "IT services protect against cyber threats through multiple layers of security including firewall management, regular security updates, antivirus protection, data encryption, and employee security training. They also implement backup solutions, monitor for suspicious activities, and provide rapid incident response to potential security breaches."
    },
    {
      question: "Can IT Services Design And Implement Networks?",
      answer: "Yes, IT services can design and implement complete network solutions. This includes network architecture planning, hardware selection, cable infrastructure setup, wireless network configuration, and ongoing network maintenance. They ensure networks are secure, scalable, and optimized for business performance."
    }
  ];

  return (
    <>
    <div className='relative'>
      <section className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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
    <div className="   px-44 mt-24    pb-32">
    
    <div className="text-center mb-12">
          <span className="w-[198px] text-black h-[30px] px-4 py-1 border border-1 rounded-[60px]">Latest Updates</span>
          <p className=" font-['Public_Sans'] mt-1 font-semibold text-[40px] leading-[56px] tracking-[0%]">  Frequently Asked Questions</p>
        </div>

 

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="bg-[rgba(246,246,246,1)] rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left flex justify-between items-center px-8 py-6"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <p className="font-['Public_Sans'] font-medium text-[24px] leading-[30px] tracking-normal">{faq.question}</p>
              <span className={`transform transition-transform duration-200 text-gray-400 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {activeIndex === index && (
              <div className="px-8 pb-4">
                <p className="font-['Public_Sans'] font-normal text-[14px] leading-[30px] tracking-normal">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0   z-10 flex flex-col items-end gap-12">
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
          className="w-auto h-auto  "
        />
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default FaqSection;
