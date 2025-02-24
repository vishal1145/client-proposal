"use client";
import Image from "next/image";
import { useState, ChangeEvent,FormEvent,useEffect} from "react";
export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null); // Remove message after 5 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup on re-render
    }
  }, [status]);
  // Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    }
  };
  return (
    <section className="py-16 bg-[#0B1628] relative overflow-x-hidden" >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Layer_1.png"
          alt="World Map Background"
          fill
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20 relative z-10 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          {/* Left Side - Contact Info */}
          <div>
            <p className="text-sm text-gray-500 border border-gray-400 font-medium mb-4 inline-block px-3 py-1 rounded-full">
              Contact Address
            </p>

            <h2 className="text-4xl font-bold text-[#fcfeff] leading-tight mb-6">
              We&apos;re The Future Of{" "}
              <span className="text-[#0561FC]">IT Industry</span>,
              <br />
              Further Contact Us
            </h2>
            <p className="text-white text-sm leading-relaxed mb-12">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
            </p>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative">
  {/* Address */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#f7f8f9]"
      >
        <path
          d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 22s8-6 8-12a8 8 0 00-16 0c0 6 8 12 8 12z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div>
      <h4 className="text-base font-medium text-white mb-2">Address</h4>
      <p className="text-sm text-white leading-relaxed">
  <a
    href="https://www.google.com/maps/search/?api=1&query=C-104+Sector+65+Noida"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-gray-300 transition-all"
  >
    C-104 Sector 65 Noida
  </a>
</p>

    </div>
  </div>

  {/* Phone Number */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#f9fafb]"
      >
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div>
      <h4 className="text-base font-medium text-[#f4f5f7] mb-2">Phone Number</h4>
      <p className="text-sm text-white leading-relaxed">
  <a href="tel:+918743045170" className=" hover:text-gray-300 transition-all">
    +91 8743045170
  </a>
</p>

    </div>
  </div>

  {/* Email Id */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#ffffff]"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 6l-10 7L2 6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div>
      <h4 className="text-base font-medium text-white mb-2">Email Id</h4>
      <p className="text-sm text-white leading-relaxed">
  <a href="mailto:hi@algofolks.com" className=" hover:text-gray-300 transition-all">
    hi@algofolks.com
  </a>
</p>

    </div>
  </div>

  {/* Opening Hours */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div>
      <h4 className="text-base font-medium text-white mb-2">Opening Hours</h4>
      <p className="text-sm text-white leading-relaxed">
      Mon - Sat
      <br/>
       9 AM to 6 PM
      </p>
    </div>
  </div>

  {/* Vertical Divider (Visible on Medium screens and larger) */}
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden sm:block"></div>

  {/* Horizontal Divider (Visible on all screens) */}
  <div className="absolute left-0 right-0 top-[45%] h-px bg-gray-300 hidden sm:block "></div>
</div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#0561FC] rounded-3xl p-10 ">
            <h3 className="text-2xl font-bold text-white mb-2">Get Quotes</h3>
            <p className="text-white/80 text-sm mb-8">
              The Point Of Using Lorem Ipsum Is That It Has More-Or-Less Normal
            </p>

            <form className="space-y-6"onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="relative">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                />
              </div>

              {/* Email Id */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                />
              </div>

             
              

              {/* Message */}
              <div className="relative">
                <textarea
                   name="message"
                   placeholder="Message"
                   rows={4}
                   value={formData.message}
                   onChange={handleChange}
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
  type="submit"
  disabled={status?.type === "loading"}
  className="flex items-center justify-center gap-2 text-white border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
  {status?.type === "loading" ? (
    <span className="flex items-center gap-2">
      <svg
        className="animate-spin h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
        ></path>
      </svg>
      Sending...
    </span>
  ) : (
    <>
      Submit Now <span className="ml-1">→</span>
    </>
  )}
</button>

              {status && status.message && (
        <p
          className={`text-sm mt-4 ${
            status.type === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {status.message}
        </p>
      )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
