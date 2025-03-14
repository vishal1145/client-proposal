import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "The Future Of IT In The Legal Field Trends To Watch",
    category: "App Development",
    content:
      "Technology is transforming the legal industry, enabling automation, AI-driven research, and cloud-based legal services.",
    imageUrl: "/images/man.jpg",
    link: "/blog/the-future-of-it-in-the-legal-field-trends-to-watch",
    htmlContent: ` <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">The Future Of IT In The Legal Field Trends To Watch</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 2,
    title: "Cybersecurity Tips For Law Firms & Its Legal Aids",
    category: "Cybersecurity",
    content:
      "Law firms are prime targets for cyber threats. Strong security policies ensure the protection of sensitive legal data.",
    imageUrl: "/images/man.jpg",
    link: "/blog/Cybersecurity-Tips-For-Law-Firms-Its-Legal-Aids",
    htmlContent: ` <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">Cybersecurity Tips For Law Firms & Its Legal Aids</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 3,
    title: "Modern Authentication in Node.js: Passkeys, Biometrics, and Beyond",
    category: "IT Security",
    content:
      "Passkeys and biometrics are transforming Node.js authentication. Say goodbye to passwords and hello to seamless security.",
    imageUrl: "/images/muskan.jpeg",
    link: "/blog/modern-authentication-nodejs",
    htmlContent: `  <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
            <div className="mb-3">
              <Image
                src="/images/Mblog1.webp"
                alt={title}
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-gray-500 text-sm">02 February 2024</div>
            </div>
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">Modern Authentication in Node.js: Passkeys, Biometrics, and Beyond
            </h2>

            <div className="prose max-w-none">
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              As cyber threats rise, Node.js now supports advanced authentication techniques like passkeys, biometrics, and passwordless authentication for better security and user experience.Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.


              </p>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                   Traditional passwords are increasingly vulnerable to phishing, credential stuffing, and brute-force attacks. To enhance security and user experience, modern authentication methods have emerged, leveraging advanced cryptographic techniques and device-based authentication.Passkeys use public-key cryptography to authenticate users without requiring a traditional password, making them resistant to phishing attacks. 
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
               Biometric authentication, such as fingerprint or facial recognition, provides both security and ease of use. Node.js supports this through the WebAuthn API, which enables secure key-based authentication. Additionally, third-party services like Auth0, Firebase, and Okta simplify biometric authentication implementation.Passwordless authentication methods eliminate the need for passwords entirely. Magic links allow users to log in via a one-time link sent through email or SMS. One-time passwords (OTP) provide temporary access codes, while Single Sign-On (SSO) enables authentication via Google, Apple, or other providers.
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="relative">
                  <Image
                    src="/images/mblog5.webp"
                    alt="Woman in white shirt smiling"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/mblog6.webp"
                    alt="Person working on laptop"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
               To implement modern authentication in Node.js, developers should set up WebAuthn for passkeys, integrate biometric authentication, and leverage passwordless providers such as Auth0, Firebase, or Okta. These methods enhance security by removing weak passwords, improve user experience with faster logins, and reduce maintenance costs by eliminating password management overhead.
               Passkeys, biometrics, and passwordless authentication are shaping the future of digital security. Implementing these techniques in Node.js ensures safe and seamless access to applications.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>
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

              <div className="bg-gray-100 p-8 rounded-xl mb-8">
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  Modern authentication methods such as passkeys, biometrics, and multi-factor authentication (MFA) offer a more secure and seamless alternative to traditional passwords. By leveraging public-key cryptography and device-based authentication, Node.js applications can enhance security while improving user experience. 
                </p>

                <div className="flex items-center gap-3">
                 <Image
                  src="/images/Group 35.png"
                  alt="Jhon Wick"
                  width={100}
                  height={100}
                  className="w-[20px] h-[20px]"
                  />
                 <Image
                  src="/images/blogD5.png"
                  alt="Jhon Wick"
                  width={50}
                  height={50}
                  className="w-[30px] h-[30px] rounded-full"
                  />


                  <div>
                    <p className="text-[#0B1B2B] font-medium">
                      Jhon Wick - Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 4,
    title:
      "Node.js and AI: How to Build Intelligent Apps with Machine Learning",
    category: "Artificial Intelligence",
    content:
      "With AI integration, Node.js can build predictive, data-driven applications, enhancing efficiency and decision-making.",
    imageUrl: "/images/muskan.jpeg",
    link: "/blog/nodejs-ai-intelligent-apps",
    htmlContent: `  <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">Node.js and AI: How to Build Intelligent Apps with Machine Learning</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 5,
    title: "IT Compliance And Data Protection For Law Firms",
    category: "IT Compliance",
    content:
      "Law firms must follow strict compliance standards to ensure data privacy and regulatory adherence.",
    imageUrl: "/images/man.jpg",
    link: "/blog/IT-Compliance-And-Data-Protection-For-Law-Firms",
    htmlContent: `  <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">IT Compliance And Data Protection For Law Firms</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 6,
    title: "Learning Flask: The Python Micro Web Framework",
    category: "Web Development",
    content:
      "Flask simplifies Python web development, offering flexibility and scalability for developers.",
    imageUrl: "/images/rajat.jpg",
    link: "/blog/learning-flask-the-python-micro-web-framework",
    htmlContent: `    <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">Web Development
Learning Flask: The Python Micro Web Framework</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    id: 7,
    title:
      "The Future of Intelligence - How Python Powers Artificial Intelligence",
    category: "Artificial Intelligence",
    content:
      "Python is the backbone of AI, enabling the development of machine learning models and automation solutions.",
    imageUrl: "/images/rajat.jpg",
    link: "/blog/the-future-of-intelligence-how-python-powers-ai",
    htmlContent: `    <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="max-w-8xl mx-auto">
    
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
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">The Future of Intelligence - How Python Powers Artificial Intelligence</h2>

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

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex gap-4">
                  <span className="text-[#4461F2] text-5xl">&apos;</span>
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    Looked up one of the more obscure Latin words, consectetur,
                    from a Lorem ipsum passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source. Lorem ipsum comes from sections 1.10.32 and 1.10.33
                    of &apos;de Finibus Bonorum et Malorum&apos; (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC.
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
                valley&apos;s always a laugh. In acquisitiendum the Furies are
                Earth; in (he takes up) a lump vehicles bien
              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                He ejjnoyes, in order that somewon, also with a severe one,
                unless of life. May a cusstums offficer somewon nothing of a
                poison-filled. Until, from a twho, twho chaffinch may also
                pursue it, not even a lump. But as twho, as a tank; a proverb,
                yeast; or else they tinscribe nor. Yet yet dewlap bed.
              </p>

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
            </div>
          </div>
        </div>
      </section>`,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blogLink = searchParams.get("link");

  if (blogLink) {
    // Find the blog by its link
    const blog = blogs.find((b) => b.link === blogLink);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  }

  // If no specific blog is requested, return all blogs
  return NextResponse.json(blogs, { status: 200 });
}
