import Footer from "@/components/sections/Footer";
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
        <div className="container   px-4 relative z-20">
          <div className="text-center  ">
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

      <div className="container   py-16 px-4">
        <div className=" ">
          <h1 className="text-[24px] font-bold mb-6 text-gray-900">Privacy Policy</h1>
          
          <div className="space-y-8">
            <p className="text-[14px] text-gray-700 leading-relaxed">
              Based on Article. 13 of the EU General Data Protection Regulation 2016/679, we would like to inform you that since May 25, 2018, the following information and principles related to the processing of your personal data by the administrator are valid:
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  1. The administrator of your personal data is Algofolks with headquarters in Warsaw, Poland on Zlota 59 street.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  2. The administrator has appointed a data protection officer who can be contacted via email: accounts@algofolks.com in any matter regarding the processing of your personal data.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  3. Your personal data will be processed:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    in order to fulfil the legal obligations incumbent on the administrator on the basis of generally applicable laws, including tax and accounting regulations, the legal basis of the processing is art. 6 par. point c of the Regulation 2016/679;
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    for analytical and statistical purposes – the legal basis for processing is the legitimate interest of the administrator (Article 6 (1) letter f of Regulation 2016/679), it is justified by the administrator&apos;s interest to analyse the results of business operations.
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    in order to collect your data for the purpose of establishing cooperation with a co-worker in the recruitment process.
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    in order to implement the legitimate interest of the administrator regarding the possibility of pursuing claims or defense against claims – the legal basis for processing is the legitimate interest of the administrator (Article 6 (1) letter f of Regulation 2016/679).
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  4. Your personal data will be transferred to:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    entities providing service to the administrator, necessary to perform contracts concluded with you, such as consideration of complaints,
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    accounting services, invoicing and settlement of contracts, quality of service, claim investigation, legal, analytical and marketing services, postal operators and couriers,
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    banks with regard to payment,
                  </li>
                  <li className="text-[14px] text-gray-700 leading-relaxed">
                    authorities entitled to receive your data on the basis of legal provisions.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  5. Your personal data will be processed for the duration of the cooperation, including the duration of the recruitment process, and in the case of optional data – until the consent is withdrawn, but not longer than for the duration of the contract. The period of personal data processing may be extended each time for a period of limitation of claims, if the processing of personal data will be necessary to seek possible claims or defend against such claims by the administrator. After this period, the data will be processed only to the extent and for the time required by law, including accounting regulations. In the case of consent to the processing of personal data for future recruitment processes of employees run by the Administrator, your personal data will be stored for one year from the date of transfer of personal data to the Administrator.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  6. Each consent can be withdrawn at any time. Withdrawal of the consent does not affect the legality of the processing carried out prior to its withdrawal. For evidential purposes, the administrator asks you to withdraw your consent in writing or electronically. You have the right to access the data and demand its rectification, deletion, processing restrictions, the right to transfer data and the right to object to the processing of data.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  7. You also have the right to lodge a complaint to the supervisory body involved in the protection of personal data, if you consider that the processing of your personal data violates the provisions of Regulation 2016/679.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  8. Your personal data will not be profiled and will not be transferred outside the EEA.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  9. You have the right to object to the processing of personal data for directing marketing content to you. In addition to the processing of personal data for the purposes set out in points 3 c) and d) you have the right to raise objections for reasons related to your special situation. For evidential purposes, the administrator asks you to submit objections in writing or electronically.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  10. Providing personal data is required by the administrator in order to conclude and perform the Agreement, with the exception of personal data marked as optional, providing of which is voluntary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
} 