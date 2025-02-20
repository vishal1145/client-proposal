import Image from "next/image";

type BlogDetailProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
};

export function BlogDetail({ title }: BlogDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto"
          />
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">{title}</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Blog Detail</span>
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

      {/* Main Content Section */}
      <section className="py-16 overflow-x-hidden" >
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    <div className="max-w-8xl mx-auto">
      {/* Main Blog Image */}
      <div className="mb-3">
        <Image
          src="/images/blogD1.png"
          alt={title}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="text-gray-500 text-sm">02 March 2024</div>
      </div>
      <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">{title}</h2>

      {/* Blog Content */}
      <div className="prose max-w-none">
        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
          Now-a-days, let it be anyone, let him have to fight him pursuit,
          it, looking for its acquisition/solution. Because he will still
          resist, protect but through narrow, and also of those who
          resist. Now a pure more disinterested least dust, the approach,
          in order that survivors, also with a passive one, unless of
          life. May a considers officer survivors nothing of a
          passive-filled, limit, from a lacks, takes chaffingly may also
          pursue it, not even a lung. But as lacks, as a state, a rather.
        </p>

        {/* Quote Section */}
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <div className="flex gap-4">
            <span className="text-[#4461F2] text-5xl">&apos;</span>
            <p className="text-gray-600 text-[15px] leading-relaxed italic">
              Looked up one of the more obscure Latin words, consectetur,
              from a Lorem ipsum passage, and going through the cites of
              the word in classical literature, discovered the undoubtable
              source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
              of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes of Good and
              Evil) by Cicero, written in 45 BC.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
          Now-a-days, let it be anyone, let him have to fight him pursuit,
          it, looking for its acquisition/solution. Because he will still
          resist, protect but through narrow, and also of those who
          resist. Now a pure more disinterested least dust, the approach,
          in order that survivors, also with a passive one, unless of
          life. May a considers officer survivors nothing of a
          passive-filled, limit, from a lacks, takes chaffingly may also
          pursue it, not even a lung. But as lacks, as a state, a rather.
        </p>

        {/* Blog Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="relative">
            <Image
              src="/images/blogD2.png"
              alt="Woman in white shirt smiling"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/blogD3.png"
              alt="Person working on laptop"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* After Blog Images Grid */}
        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
          Rrow itself, let it be sorrow; let him love it; let him pursue
          it, ishing for its acquisitiendum. Because he will ab hold,
          uniess but through concer, and also of those who resist. Now a
          pure snore disturbeded sum dust. He ejjnoyes, in order that
          somewon, also with a severe one, unless of life. May a cusstums
          offficer somewon nothing of a poison-filled. Until, from a twho,
          twho chaffinch may also pursue it, not even a lump. But as twho,
          as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet
          dewlap bed. Twho may be, let him love fellows of a polecat. Now
          amour, the, twhose being, drunk, yet twhitch and, an enclosed
          valley&apos;s always a laugh. In acquisitiendum the Furies are Earth;
          in (he takes up) a lump vehicles bien
        </p>

        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
          He ejjnoyes, in order that somewon, also with a severe one,
          unless of life. May a cusstums offficer somewon nothing of a
          poison-filled. Until, from a twho, twho chaffinch may also
          pursue it, not even a lump. But as twho, as a tank; a proverb,
          yeast; or else they tinscribe nor. Yet yet dewlap bed.
        </p>

        {/* Social Share Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button className="flex items-center justify-center w-8 h-8 rounded-full">
            <span className="text-gray-600 text-sm">TW</span>
          </button>
          <span className="text-gray-300">|</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full">
            <span className="text-gray-600 text-sm">YU</span>
          </button>
          <span className="text-gray-300">|</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full">
            <span className="text-gray-600 text-sm">FB</span>
          </button>
          <span className="text-gray-300">|</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full">
            <span className="text-gray-600 text-sm">IN</span>
          </button>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-gray-100 p-8 rounded-xl mb-8">
          <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
            purus rhoncus pulvinar aliquam. Ut aliquet tristique nisi
            vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
            et dui fringilla consectetur id nec massa.
          </p>

          <div className="flex items-center gap-3">
            <Image
              src="/images/Group 35.png"
              alt="Jhon Wick"
              width={20}
              height={20}
            />
            <Image
              src="/images/blogD5.png"
              alt="Jhon Wick"
              width={30}
              height={30}
              className="rounded-full"
            />
            <div>
              <p className="text-[#0B1B2B] font-medium">
                Jhon Wick - Manager
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#0B1B2B] mb-10">
            Comments
          </h3>

          {/* Comment 1 */}
          <div className="flex gap-5 mb-12">
            <Image
              src="/images/blogD4.png"
              alt="Joel Leonard"
              width={108}
              height={108}
              className="rounded-lg object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <div className="mb-0">
                <span className="text-[#64748B] text-sm">March 2020</span>
              </div>
              <h4 className="text-[#0B1B2B] font-semibold text-base mb-2">
                Joel Leonard
              </h4>
              <p className="text-[#64748B] text-[15px] leading-[1.6] mb-2.5">
                Looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through
              </p>
              <button className="text-gray-700 text-sm font-medium hover:underline">
                Reply
              </button>
            </div>
          </div>

          {/* Comment 2 - Nested */}
          <div className="flex gap-5 mb-12 ml-36">
            <Image
              src="/images/blogD5.png"
              alt="Joel Leonard"
              width={108}
              height={108}
              className="rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="mb-0">
                <span className="text-[#64748B] text-sm">March 2020</span>
              </div>
              <h4 className="text-[#0B1B2B] font-semibold text-base mb-2">
                Joel Leonard
              </h4>
              <p className="text-[#64748B] text-[15px] leading-[1.6] mb-2.5">
                Looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage.
              </p>
              <button className="text-gray-700 text-sm font-medium hover:underline">
                Reply
              </button>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="flex gap-5">
            <Image
              src="/images/blogD6.png"
              alt="Joel Leonard"
              width={108}
              height={108}
              className="rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="mb-0">
                <span className="text-[#64748B] text-sm">March 2020</span>
              </div>
              <h4 className="text-[#0B1B2B] font-semibold text-base mb-2">
                Joel Leonard
              </h4>
              <p className="text-[#64748B] text-[15px] leading-[1.6] mb-2.5">
                Looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through
              </p>
              <button className="text-gray-700 text-sm font-medium hover:underline">
                Reply
              </button>
            </div>
          </div>
        </div>

        {/* Leave A Reply Section */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text-2xl font-bold text-[#0B1B2B] mb-6">
            Leave A Reply
          </h3>

          <div className="text-[#64748B] text-sm mb-8">
            Your email address will not be published. Required fields are
            marked <span className="text-red-500">*</span>
          </div>

          <form className="space-y-8">
            {/* Name and Email fields in a row */}
            <div className="flex gap-12 flex-col sm:flex-row">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full pb-2 border-b border-[#E5E7EB] focus:outline-none focus:border-[#4461F2] text-[#64748B] text-[15px] placeholder:text-[#64748B] bg-transparent"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your Email Id"
                  className="w-full pb-2 border-b border-[#E5E7EB] focus:outline-none focus:border-[#4461F2] text-[#64748B] text-[15px] placeholder:text-[#64748B] bg-transparent"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <textarea
                rows={6}
                placeholder="Message Here"
                className="w-full px-4 py-3.5 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#4461F2] text-[#64748B] text-[15px] placeholder:text-[#64748B] resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="saveInfo"
                className="w-5 h-5 rounded border-[#E5E7EB] text-[#4461F2] focus:ring-[#4461F2]"
              />
              <label
                htmlFor="saveInfo"
                className="text-[#64748B] text-sm"
              >
                Save my name, email, and website in this browser for the
                next time I comment.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#0561FC] text-white px-4 py-3 rounded-3xl text-sm  hover:bg-[#0561FC] transition-colors flex items-center gap-2"
              >
                Submit Now
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
