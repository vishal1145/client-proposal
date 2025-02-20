import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function RefundPolicyPage() {
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
                Refund Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Refund Policy</span>
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
        <div className=" ">
          <h1 className="text-[24px] font-bold mb-6 text-gray-900">Refund Policy</h1>
          
          <p className="text-[14px] text-gray-700 leading-relaxed mb-8">
            At Algofolks, we strive to deliver high-quality IT services tailored to your business needs. However, in the event of cancellations or disputes, the following refund policy applies:
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">1. Eligibility for Refunds:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  Refunds will only be considered for services not delivered or milestones not met due to issues caused by Algofolks.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">2. Partial Refunds:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  If a project is canceled midway, a partial refund may be provided after deducting charges for completed work and any applicable administrative fees.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">3. Non-Refundable Fees:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  Setup fees, consultation charges, and any third-party service fees paid on behalf of the client are non-refundable.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">4. Refund Request Process:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  Refund requests must be submitted in writing to billing@algofolks.com within 14 days of cancellation or service termination.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">5. Timeframe for Refund Processing:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  Refunds will be processed within 15-20 business days upon approval of the request.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">6. Force Majeure:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  Refunds will not be granted for delays or interruptions caused by factors beyond Algofolks&apos; control, such as natural disasters, technical failures, or third-party disruptions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900 mb-2">7. Agreement:</h2>
              <ul className="list-disc pl-6">
                <li className="text-[14px] text-gray-700 leading-relaxed">
                  By engaging with Algofolks, clients agree to adhere to these policies. For any questions, please contact our support team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
