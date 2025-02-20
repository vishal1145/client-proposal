import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function CancellationPolicyPage() {
  return (
    <>
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
              <h1 className="text-3xl font-bold text-[#0B1B2B]">
                Cancellation Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Cancellation Policy</span>
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

      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20 relative z-10 py-8">
        <div className="   ">
          <h1 className="text-[24px] font-bold mb-6 text-gray-900">Cancellation Policy</h1>
          
          <div className="space-y-8">
            <p className="text-[14px] text-gray-700 leading-relaxed">
            At Algofolks, we value our customers and aim to provide seamless IT services including QA, web development, app development, and more. However, we understand that there may be instances where you need to cancel an order or terminate a service agreement. Please read the following cancellation policy carefully:
            </p>

            <div className=" ">
              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">1. Service Cancellation:</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    Clients can request to cancel a service by providing written notice via email to support@algofolks.com.
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    Cancellation requests must be submitted at least 10 business days prior to the scheduled service delivery date or project milestone.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">2. Ongoing Projects:</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    For ongoing projects, cancellation will be processed based on the stage of the project. Clients will be charged for the work completed up to the date of cancellation.
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    If cancellation occurs mid-project, Algofolks reserves the right to retain a minimum of 30% of the total project value as compensation for administrative and resource allocation efforts.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">3. Non-Refundable Services:</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    Certain services, such as custom software development or subscriptions, may not be eligible for cancellation once initiated due to the unique and tailored nature of the work.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">4. Termination by Algofolks:</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    We reserve the right to terminate service agreements in cases of non-compliance with terms, non-payment, or unethical behavior by the client. In such cases, no refund will be issued.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
} 