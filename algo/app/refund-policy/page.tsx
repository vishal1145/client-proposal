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

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[24px] font-bold mb-6 text-gray-900">Refund Policy</h1>
          
          <div className="space-y-8">
            <p className="text-[14px] text-gray-700 leading-relaxed">
              At Algofolks, we strive to ensure complete satisfaction with our services. Our refund policy is designed to be fair and transparent while maintaining the quality of our service delivery.
            </p>

            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">1. Eligibility for Refunds</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  Refund requests are evaluated on a case-by-case basis and must be submitted within 30 days of service delivery. Valid reasons for refund requests include significant deviation from agreed-upon deliverables or failure to meet specified quality standards.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">2. Refund Process</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  To request a refund, please email support@algofolks.com with your order details and reason for the refund. Our team will review your request and respond within 5 business days.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">3. Non-Refundable Items</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  Certain services, including but not limited to custom development work, consultation fees, and completed milestone deliverables, are non-refundable unless otherwise specified in the service agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">4. Refund Processing</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  Approved refunds will be processed using the original payment method. Please allow 7-14 business days for the refund to appear in your account after approval.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
