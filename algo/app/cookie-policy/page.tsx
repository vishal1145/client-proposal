import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function CookiePolicy() {
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
              Cookie Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Cookie  Policy</span>
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

    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-[24px] font-bold mb-6">Cookie Policy</h1>
      
      <div className="space-y-6">
        <p className="text-gray-800 text-[14px]">
        Algofolks (collectively, “Algofolks”, “us” or “we”) understand that your privacy is important to you and are committed to being transparent about the technologies it uses. This Cookie Policy explains how and why cookies, web beacons, pixels, clear gifs, and other similar technologies (collectively “Cookies and Other Tracking Technologies”) may be stored on and accessed from your device when you use or visit any website or app that posts a link to this Policy (collectively, “the Sites”). This Cookie Policy should be read together with our Privacy Policy and our Terms & Conditions.
        </p>

        <section>
          <h2 className="text-[24px] font-semibold mb-4">What are Cookies and Other Tracking Technologies?</h2>
          <p className="text-gray-800 text-[14px]">
            A cookie is a small text file that can be stored on and accessed from your device when you visit one of our Sites, to the extent you agree. The other tracking technologies work similarly to cookies and place small data files on your devices or monitor your website activity to enable us to collect information about how you use our Sites. This allows our Sites to recognise your device from those of other users of the Sites. The information provided below about cookies also applies to these other tracking technologies. You can find more information at{' '}
            <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>
            {' '}and{' '}
            <a href="http://www.youronlinechoices.eu" className="text-blue-600 hover:underline">www.youronlinechoices.eu</a>.
          </p>
        </section>

        <section>
          <h2 className="text-[24px] font-semibold mb-4">How do our Sites use Cookies and Other Tracking Technologies?</h2>
          <p className="text-gray-800 text-[14px]">
            
          Algofolks uses Cookies and Other Tracking Technologies to identify you and your interests, to remember your preferences, and to track your use of our Sites. We also use Cookies and Other Tracking Technologies to control access to certain content on our Sites, protect the Sites, and to process any requests that you make of us.
          </p>
          <p className="text-gray-800 mt-4 text-[14px]">
          To administer our Sites and for research purposes, Algofolks also has contracted with third party service providers to track and analyse statistical usage and volume information from our Site users. These third party service providers use persistent Cookies to help us to improve the user experience, manage our Site content, and analyse how users navigate and utilise the Sites.
          </p>
        </section>

        <section>
          <h2 className="text-[24px] font-semibold mb-4">First and Third Party Cookies</h2>
          <p className="text-gray-800 text-[14px]">
          “First party Cookies” are cookies that belong to Algofolks and that Algofolks places on your device. “Third party Cookies” are cookies that another party places on your device through our Site. Algofolks Sp. z o.o. may contract with third party service providers to send emails to users who have provided us with their contact information. To help measure and improve the effectiveness of our email communications, and/or to determine whether messages have been opened and links clicked on, the third party service providers may place Cookies on the devices of these users.
          </p>
        </section>
      </div>
    </div>

    <Footer/>
    </>
  );
}
