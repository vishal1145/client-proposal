import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { getMetadata } from "../utils/metadata";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return getMetadata("terms");
};
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
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

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Terms and Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Terms and Conditions</span>
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
      </div>

      {/* Terms Content */}
      <section className="">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20 relative z-10 py-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              Introduction
            </h2>
            <p className="text-gray-600 mb-8">
              These Website Standard Terms And Conditions contained herein on
              this webpage, shall govern your use of this website, including all
              pages within this website (collectively referred to herein below
              as this &quot;Website&quot;). These Terms apply in full force and
              effect to your use of this Website and by using this Website, you
              expressly accept all terms and conditions contained herein in
              full. You must not use this Website, if you have any objection to
              any of these Website Standard Terms And Conditions.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-600 mb-8">
              Other than content you own, which you may have opted to include on
              this Website, under these Terms, Algofolks and/or its licensors
              own all rights to the intellectual property and material contained
              in this Website, and all such rights are reserved. You are granted
              a limited license only, subject to the restrictions provided in
              these Terms, for purposes of viewing the material contained on
              this Website.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              Your Content
            </h2>
            <p className="text-gray-600 mb-8">
              In these Website Standard Terms And Conditions, &quot;Your
              Content&quot; shall mean any audio, video, text, images or other
              material you choose to display on this Website. With respect to
              Your Content, by displaying it, you grant Algofolks a
              non-exclusive, worldwide, irrevocable, royalty-free, sublicensable
              license to use, reproduce, adapt, publish, translate and
              distribute it in any and all media.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              Limitation of liability
            </h2>
            <p className="text-gray-600 mb-8">
              In no event shall Algofolks, nor any of its officers, directors
              and employees, be liable to you for anything arising out of or in
              any way connected with your use of this Website, whether such
              liability is under contract, tort or otherwise, and Algofolks,
              including its officers, directors and employees shall not be
              liable for any indirect, consequential or special liability
              arising out or in any way related to your use of this Website.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
              Entire Agreement
            </h2>
            <p className="text-gray-600 mb-8">
              These Terms, including any legal notices and disclaimers contained
              on this Website, constitute the entire agreement between Algofolks
              and you in relation to your use of this Website, and supersede all
              prior agreements and understandings with respect to the same.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
