import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Payment - Algofolks | Secure Payment",
  description: "Make a secure payment for Algofolks services. Simple, fast, and reliable payment processing.",
};

export default function PaymentPage() {
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

        {/* Right Side Payment Icon */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Payment Icon"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Secure Payment
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
             <span>Home</span>
              <span>/</span>
              <span className="text-[#0561FC]">Payment</span>
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

      {/* Payment Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="bg-[#F6F0E4] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
                Secure Your Partnership with Us
              </h2>
              
              <p className="text-gray-600 mb-8">
                Invest in success with reliable IT solutions. Let&apos;s create something extraordinary together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#0B1B2B] mb-1">Secure Transactions</h5>
                    <p className="text-sm text-gray-600">Your payment is processed with state-of-the-art encryption for complete safety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#0B1B2B] mb-1">Streamlined Process</h5>
                    <p className="text-sm text-gray-600">Simple and fast to save your time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#0B1B2B] mb-1">Dedicated Support</h5>
                    <p className="text-sm text-gray-600">Our team is always available to help you during and after the payment process.</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                  Have Questions? We&apos;re Here to Help
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    For Business enquiries:
                    <a href="mailto:hr@algofolks.com" className="text-[#0561FC] ml-2">
                      hi@algofolks.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    For Careers:
                    <a href="mailto:hr@algofolks.com" className="text-[#0561FC] ml-2">
                      hi@algofolks.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
                Payment Details
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0561FC] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0561FC] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0561FC] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I hereby provide my consent and agree to proceed with the payment and understand that the transaction will be processed securely.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#0561FC] text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}