"use client";

import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface PaymentDetails {
  name: string;
  amount: string;
  description: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => Promise<void>;
  prefill: {
    name: string;
  };
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}
export default function PaymentPage() {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    name: "",
    amount: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      // Create order
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(paymentDetails.amount),
          name: paymentDetails.name,
          description: paymentDetails.description,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to create payment");
      }

      if (data.success) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: "Algo Trading",
          description:
            paymentDetails.description || "Payment for Algo Trading Services",
          order_id: data.order.id,
          handler: async function (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) {
            try {
              // Verify payment
              const verifyResponse = await fetch("/api/payment/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              });

              const verifyData = await verifyResponse.json();

              if (verifyData.success) {
                alert("Payment successful!");
                // Add your success logic here (e.g., redirect to success page)
              }
            } catch (err) {
              console.error(err);
              alert("Payment verification failed");
            }
          },
          prefill: {
            name: paymentDetails.name,
          },
          theme: {
            color: "#0561FC",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Payment error:", error);
        alert(error.message || "Payment failed to initialize");
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
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
      <div className="container mx-auto px-4 max-w-3xl text-center mb-10 py-16">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
          <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
            SECURE PAYMENT PROCESS
          </span>
        </div>

        <h2 className="text-xl md:text-3xl font-bold mb-6">
          <span className="text-gray-900">Simple & Secure</span>{" "}
          <span className="text-[#0561FC]">Payment Solutions</span>
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Experience hassle-free transactions with our secure payment gateway.
          We ensure your payments are processed with the highest level of
          security and efficiency.
        </p>
      </div>

      {/* Payment Form Section */}
      <div className="py-16 mb-10 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className=" p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Secure Your Partnership with Us
              </h2>

              <p className="text-white mb-8">
                Invest in success with reliable IT solutions. Let&apos;s create
                something extraordinary together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">
                      Secure Transactions
                    </h5>
                    <p className="text-sm text-white">
                      Your payment is processed with state-of-the-art encryption
                      for complete safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">
                      Streamlined Process
                    </h5>
                    <p className="text-sm text-white">
                      Simple and fast to save your time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">
                      Dedicated Support
                    </h5>
                    <p className="text-sm text-white">
                      Our team is always available to help you during and after
                      the payment process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Have Questions? We&apos;re Here to Help
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-white">
                    For Business enquiries:
                    <a
                      href="mailto:hr@algofolks.com"
                      className="text-[#0561FC] ml-2"
                    >
                      hi@algofolks.com
                    </a>
                  </p>
                  <p className="text-sm text-white">
                    For Careers:
                    <a
                      href="mailto:hr@algofolks.com"
                      className="text-[#0561FC] ml-2"
                    >
                      hi@algofolks.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="bg-[#0561FC] p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Payment Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={paymentDetails.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0561FC_inset]"
                    required
                    style={{ WebkitTextFillColor: "white" }}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                    placeholder="Amount (₹)"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0561FC_inset]"
                    required
                  />
                </div>

                <div className="">
                  <textarea
                    id="description"
                    name="description"
                    value={paymentDetails.description}
                    onChange={handleInputChange}
                    placeholder="Payment Description"
                    rows={7}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0561FC_inset]"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-white mb-4">
                    I hereby provide my consent and agree to proceed with the
                    payment and understand that the transaction will be
                    processed securely.
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 text-white border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Pay Now
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 text-center">
        <h3 className="text-2xl font-semibold text-[#0B1B2B] mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 text-[14px] mb-8 max-w-2xl mx-auto">
          Let&apos;s collaborate to build innovative solutions using the latest
          technologies and best coding practices. Our team is ready to help you
          achieve your goals.
        </p>

        <Link href="/contact">
          <Button
            variant="default"
            className="bg-[#0066FF] hover:bg-blue-700 text-white rounded-full px-8 py-3 flex items-center gap-2 mx-auto"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
