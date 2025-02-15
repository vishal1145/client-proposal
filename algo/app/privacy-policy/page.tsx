import Image from "next/image";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Privacy Policy</span>
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
          <h1 className="text-[24px] font-bold mb-6 text-gray-900">Privacy Policy</h1>
          
          <div className="space-y-8">
            <p className="text-[14px] text-gray-700 leading-relaxed">
              At Algofolks, we take your privacy seriously and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
            </p>

            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">1. Information Collection</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  We collect information that you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when using our services or communicating with us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">2. Use of Information</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  We use the collected information to provide, maintain, and improve our services, communicate with you about our services, and protect our legal rights and interests.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">3. Data Security</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-[24px] font-semibold text-gray-900">4. Your Rights</h2>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us at privacy@algofolks.com to exercise these rights.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 