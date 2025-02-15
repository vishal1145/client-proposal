import Link from 'next/link'

export default function CareerPage() {
  return (
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
          <h2 className="text-[#1e293b] text-[32px] font-bold mb-4">Contact Our Team</h2>
          <button className="px-6 py-2 bg-[#26c6da] text-white rounded-md text-sm">
            view open roles
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flexibility Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/flexibility-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Flexibility</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We provide a hybrid work model- with an ambient mix of in-office and work from home options. We believe in obtaining on-point deliverables rather than on-time card punching.
            </p>
          </div>

          {/* Transparency Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/transparency-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Transparency</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Secrets are for spies- not for us! We are 100% honest and straightforward in all our interactions to boost credibility and confidence among past and present clients.
            </p>
          </div>

          {/* Celebration Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/celebration-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Celebration</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Whether it is a tea party or sit-down dinner, celebrating the small and big wins are equally important- we do it all to keep the morale high, and the efforts acknowledged!
            </p>
          </div>

          {/* Community Outreach Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/community-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Community outreach</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Algofolks, we believe in the concept of community development. Our outreach programs with NGOs and government organizations reflect the Mahatma's belief system, which is instilled among our founders.
            </p>
          </div>

          {/* Communication Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/communication-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Communication</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              There is no gap in communication- if not f2f, then over skype, Google Meet, slack, or emails- all queries are answered and all points debated.
            </p>
          </div>

          {/* Learning Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/learning-icon.svg" alt="" className="w-6 h-6" />
              <h3 className="text-lg font-medium">Learning</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Technology is ever-evolving, and so is team Algofolks. We keep ourselves constantly updated with the latest trends and innovations about tools and software so that our clients can benefit from our knowledge & expertise!
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-blue-600 text-white p-6 md:p-12 rounded-lg mt-16 relative overflow-hidden max-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/blue-waves.jpg" 
            alt="Background Pattern" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-sm mb-2">Who we are</p>
            
            <h2 className="text-4xl font-bold mb-3">
              Crafting a Brighter Tomorrow with Innovation
            </h2>
            
            <p className="text-base mb-4">
              At Algofolks, we are committed to shaping a brighter future through innovation 
              and collective knowledge. Join us on our journey of transformation, where we 
              build the future, one innovative solution at a time.
            </p>
            
            <div className="flex items-center gap-2 text-sm">
              <span>Get to know about us</span>
              <span className="inline-block">→</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="/images/carrer1.jpg" 
              alt="Who We Are" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
