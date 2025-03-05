import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/Footer'

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Decorative Element"
            width={300}
            height={200}
            className="w-auto h-auto opacity-90"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Decorative Element"
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
                Apply
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">Home</Link>
              <span>-</span>
              <span className="text-[#0561FC]">Apply</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="md:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B2B] mb-6">
                  Jump-start your career with Algofolks
                </h2>
                <p className="text-gray-600 mb-8">
                  Want to shine change in one of the largest, most important industries in the world? Then 
                  consider a career at Indo Valley Partners. For 20-plus years Algofolks has challenged the 
                  operating model of the global asset management industry and our work continues to 
                  transform the world of capital markets.
                </p>
                <Link 
                  href="/job-openings"
                  className="inline-block px-8 py-4 bg-[#0561FC] text-white rounded-lg hover:bg-blue-600 transition-colors text-base font-medium"
                >
                  VIEW JOB OPENINGS
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/award.jpg"
                  alt="Career at Algofolks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
    {/* Values Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-[13px] text-gray-600 uppercase tracking-wider">
        VALUES DESIGNED FOR YOUR SUCCESS
      </span>
      
      <h2 className="text-[26px] font-normal leading-[1.15] mt-4 mb-8">
        Reshaped the operating model of the global <br />asset
        management industry and our work continues to<br />
        <span className="bg-[#0561FC] text-white px-1">transform the world of capital markets.</span>
      </h2>

      <Link 
        href="/about" 
        className="inline-flex items-center text-[13px] text-[#0561FC] hover:underline"
      >
        Learn more about Algofolks&apos;s values
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>

      <p className="text-[13px] leading-[1.5] mt-8 text-gray-600">
        We seek talented, passionate, ambitious individuals who are ready to make big things 
        happen. Algofolks is agnostic to race, gender, orientation, ethnicity or nationality. We are 
        committed to making our workplace inclusive, open, and fair and one that will uphold our 
        values for all employees globally.
      </p>
    </div>
  </div>
</section>
{/* Life at Algofolks Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-[36px] font-normal mb-6">
        Life at Algofolks
      </h2>

      <p className="text-[13px] leading-[1.5] text-gray-600 mb-16">
        As Algofolksians, we are committed to making our workplace 
        inclusive, open, and fair. We take the job of upholding our values 
        among all employees seriously. Working at Algofolks, you&apos;ll be 
        part of a global team comprised of smart, innovative, analytical, 
        and forward-thinking people who are passionately focused on 
        using their skills and expertise to move FinanceForeward®.
      </p>

      <div className="mb-16">
        <h3 className="text-[13px] uppercase tracking-wider text-gray-600 mb-8">
          ARE YOU READY TO WORK WITH US?
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* We Offer Column */}
          <div className="border rounded-lg p-8">
            <h4 className="text-[17px] font-medium mb-6">We Offer</h4>
            <ul className="space-y-4">
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Significant client exposure at an early stage in your career
              </li>
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Exposure to the alternative asset management industry across trading strategies, financial products and leading-edge hedge funds and private equity firms
              </li>
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Non-linear growth trajectory for potential high performers
              </li>
              <li className="text-[13px] leading-relaxed text-gray-600">
                • A dynamic, entrepreneurial work culture with a flat organizational hierarchy
              </li>
            </ul>
          </div>

          {/* We ask for Column */}
          <div className="border rounded-lg p-8">
            <h4 className="text-[17px] font-medium mb-6">We ask for..</h4>
            <ul className="space-y-4">
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Smart, ambitious, self-starters and autodidacts (look it up.. :)
              </li>
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Domain aptitude & individuals with an eye for detail both quantitative & qualitative. An ability to simplify and describe complexity
              </li>
              <li className="text-[13px] leading-relaxed text-gray-600">
                • Coachable, life learners who realize they know less than they think they do.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Job Openings Section */}
<section className="pb-10">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-[13px] text-gray-600 uppercase tracking-wider ">
        JOB OPENINGS
      </span>

      <h2 className="text-[36px] font-normal mt-4 mb-8">
        Join us and Move Finance Forward
      </h2>

      {/* Search Box */}
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Search by keyword.."
          className="w-full p-4 bg-gray-100 rounded-lg text-[13px]"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          <svg 
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Card 1 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Junior Business Analyst
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Dallas, TX, USA
          </p>
        </div>

        {/* Job Card 2 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Associate Director Internal Application Development
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Noida, Uttar Pradesh, India
          </p>
        </div>

        {/* Job Card 3 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Team Lead - Tech Application Support
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Noida, Uttar Pradesh, India
          </p>
        </div>

        {/* Job Card 4 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Team Lead
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Noida, Uttar Pradesh, India
          </p>
        </div>

        {/* Job Card 5 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Scrum Master
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Noida, Uttar Pradesh, India
          </p>
        </div>

        {/* Job Card 6 */}
        <div className="bg-white p-8 rounded-[20px] shadow-sm hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer">
          <h3 className="text-[17px] font-medium text-gray-900 group-hover:text-white mb-2">
            Senior Engineer / Team Lead
          </h3>
          <p className="text-[13px] text-gray-600 group-hover:text-white/90">
            Noida, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <Footer />
    </main>
  )
}