'use client'
import { useState } from 'react';

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
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-8">
        <p className="text-sm mb-2">Latest Updates</p>
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left flex justify-between items-center px-8 py-6"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <p className="font-['Public_Sans'] font-medium text-[30px] leading-[30px] tracking-[0%]">{faq.question}</p>
              <span className="transform transition-transform duration-200">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {activeIndex === index && (
              <div className=" py-4">
                <p className="font-['Public_Sans'] font-normal text-[16px] leading-[30px] tracking-[0%]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
