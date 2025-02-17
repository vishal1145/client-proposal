import Image from 'next/image'
import Link from 'next/link'

export default function CareerPage() {
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
                Career
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Career</span>
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
    <div className="min-h-screen p-8 md:p-16 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Left Content Section */}
        <div className="md:w-1/2">
          <h1 className="text-[50px] font-bold mb-4">Algofolks</h1>
          <h2 className="text-[50px] font-bold mb-8">Talent Network</h2>
          
          <p className="text-gray-600 text-[14px] mb-8">
            Are you ready to be part of one of the fastest-growing software quality assurance
            companies? We help create opportunities for deserving candidates. You will get global
            exposure, opportunities to learn from both SMEs and Enterprise projects and work on the
            latest technologies.
          </p>

          <Link 
            href="/open-roles" 
            className="inline-block text-[14px] px-6 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
          >
            view open roles
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2">
          <img 
            src="/images/career.jpg" 
            alt="Talent Network"
            className="w-full h-auto"
          />
        </div>
      </div>

   

      {/* Services Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/system.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-[20px] font-bold">Web development</h3>
            </div>
            <p className="text-gray-600 text-[14px] mb-4">
              A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies.
            </p>
            <a href="#" className="text-blue-500 text-[14px]">Explore</a>
          </div>

          {/* QA Card */}
          <div className="flex flex-col border-l border-r px-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Qa.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-[20px] font-bold">QA</h3>
            </div>
            <p className="text-gray-600 text-[14px] mb-4">
              A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies.
            </p>
            <a href="#" className="text-blue-500">Explore</a>
          </div>

          {/* UI/UX Card */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/ui.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-[20px] font-bold">UI/UX</h3>
            </div>
            <p className="text-gray-600 text-[14px] mb-4">
              A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies.
            </p>
            <a href="#" className="text-blue-500 text-[14px]">Explore</a>
          </div>
        </div>
      </div>

         {/* Growth Accelerator Section */}
         <div className="max-w-4xl mt-24 mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          We are growth accelerator partners for startups and small businesses
        </h2>
        <p className="text-gray-600">
          At Algofolks we believe that if we don't deliver 1000% for every project, then it's not worth doing. This makes us an industry favorite with organizations- big and small.
        </p>
      </div>

      {/* Policy Cards Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employee First Policy Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="/images/employee-first.jpg" 
              alt="Employee First Policy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Employee First Policy
              </h3>
            </div>
          </div>

          {/* Diversity & Inclusion Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="/images/diversity.jpg" 
              alt="Diversity & Inclusion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Diversity & Inclusion
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Cards Section - 2 cards */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* ... existing policy cards code ... */}
      </div>

      {/* Additional Features Section - 3 cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Future Goals Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img 
              src="/images/future-goals.jpg" 
              alt="Future Goals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Future Goals
              </h3>
            </div>
          </div>

          {/* Leadership Training Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img 
              src="/images/leadership-training.jpg" 
              alt="Leadership Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Leadership Training
              </h3>
            </div>
          </div>

          {/* Awards & Recognition Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img 
              src="/images/awards-recognition.jpg" 
              alt="Awards & Recognition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Awards & Recognition
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Joy Ride Section */}
      <div className="max-w-6xl mx-auto mb-16 mt-16">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-[600] mb-4">
            Working at Algofolks is a joy ride
          </h2>
          <p className="text-gray-600 opacity-75 text-[14px]">
            Be part of our organization and be involved in the following experiences:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sustainability Ambassador */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                  <img src="/images/algo1.jpg" alt="" className="w-8 h-8" />
              <h3 className="text-[17px] font-[500]">Sustainability Ambassador</h3>
            </div>
            <p className="leading-[16px] text-[13px] font-normal text-black opacity-75">
              Robbing the future will hamper our own growth- at Algofolks, we believe in creating an environmentally viable ambiance. We encourage every member to take the pledge to do their bit towards the environment.
            </p>
          </div>

          {/* Champion the Camaraderie */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/algo2.jpg" alt="" className="w-8 h-8" />
                      <h3 className="text-[17px] font-[500]">Champion the Camaraderie</h3>
            </div>
            <p className="leading-[16px] text-[13px] font-normal text-black opacity-75">
              There is no lonewolf in the team. We believe in respect, equality and honesty, and owning up to one's mistakes. As part of the team, these core values help foster a happy and positive workplace.
            </p>
          </div>

          {/* Be An Ideapreneur */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/algo3.jpg" alt="" className="w-8 h-8" />
               <h3 className="text-[17px] font-[500]">Be An<br />Ideapreneur</h3>
            </div>
            <p className="leading-[16px] text-[13px] font-normal text-black opacity-75">
              Do you think out of the box? You have come to the right place. We encourage you to think tangentially and help nurture every talent.
            </p>
          </div>

          {/* Be Adventurous */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/algo4.jpg" alt="" className="w-8 h-8" />
              <h3 className="text-[17px] font-[500]">Be Adventurous</h3>
            </div>
            <p className="leading-[16px] text-[13px] font-normal text-black opacity-75">
              Taking the lead in client calls to sitting in meetings with stakeholders- you will have a 360-degree experience in every facet of corporate life very early on in your career.
            </p>
          </div>
        </div>
      </div>

      {/* Contact and Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* Contact Header */}
        <div className="text-center border rounded-lg p-8 mb-12">
          <h2 className="text-[#1e293b] text-[32px] font-[22px] mb-4">Contact Our Team</h2>
          <button className="px-6 py-2 bg-[#26c6da] text-white rounded-md text-[14px]">
            view open roles
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flexibility Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/algo5.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-[17px]">Flexibility</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              We provide a hybrid work model- with an ambient mix of in-office and work from home options. We believe in obtaining on-point deliverables rather than on-time card punching.
            </p>
          </div>

          {/* Transparency Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/algo6.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-[17px]">Transparency</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              Secrets are for spies- not for us! We are 100% honest and straightforward in all our interactions to boost credibility and confidence among past and present clients.
            </p>
          </div>

          {/* Celebration Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/algo7.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-[17px]">Celebration</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              Whether it is a tea party or sit-down dinner, celebrating the small and big wins are equally important- we do it all to keep the morale high, and the efforts acknowledged!
            </p>
          </div>

          {/* Community Outreach Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/algo8.jpg" alt="" className="w-6 h-6" />
                <h3 className="text-lg font-medium">Community outreach</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              At Algofolks, we believe in the concept of community development. Our outreach programs with NGOs and government organizations reflect the Mahatma's belief system, which is instilled among our founders.
            </p>
          </div>

          {/* Communication Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/algo9.jpg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-[17px]">Communication</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              There is no gap in communication- if not f2f, then over skype, Google Meet, slack, or emails- all queries are answered and all points debated.
            </p>
          </div>

          {/* Learning Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
                <img src="/images/algo10.jpg" alt="" className="w-6 h-6" />
                <h3 className="text-lg font-[17px]">Learning</h3>
            </div>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              Technology is ever-evolving, and so is team Algofolks. We keep ourselves constantly updated with the latest trends and innovations about tools and software so that our clients can benefit from our knowledge & expertise!
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className='px-8'>
        
      <div className="bg-[#0066FF] text-white p-16 rounded-[24px] mt-16 relative overflow-hidden">
        <div className="max-w-[650px] relative z-10">
          <p className="text-[13px] mb-6">Who we are</p>
          
          <h2 className="text-[36px] font-normal leading-[1.15] mb-8">
            Crafting a Brighter<br />
            Tomorrow with Innovation<br />
            and Collective Wisdom
          </h2>
          
          <p className="text-[13px] leading-[1.5] mb-16 opacity-80 max-w-[600px]">
            At Algofolks, we are committed to shaping a brighter future through the relentless pursuit of 
            innovation and harnessing the collective knowledge of our dedicated team. We thrive on the 
            frontiers of technology, continually pushing the boundaries of what's possible. Join us on our 
            journey of transformation, where we build the future, one innovative solution at a time.
          </p>
          
          <div className="flex items-center">
            <div className="flex-1">
              <div className="border-t border-white/10"></div>
            </div>
            <div className="flex items-center gap-3 ml-6 text-[14px]">
              Get to know about us
              <div className="bg-white/10 rounded-full p-2">
                <svg width="30" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-[url('/images/carrer1.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
      </div>
      </div>

    </div>
    </>
  )
}
