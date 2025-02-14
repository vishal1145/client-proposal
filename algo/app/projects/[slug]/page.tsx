import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Footer from "@/components/sections/Footer";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <Image
            src="/images/world-map-dots.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* Left Side Illustration */}
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

        {/* Right Side Chat Icon */}
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
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>-</span>
              <Link href="/projects" className="hover:text-blue-600">
                Project-Details
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 left-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={80}
            height={80}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </div>

      {/* Project Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Main Full Width Image */}
          <div className="rounded-3xl overflow-hidden bg-[#FBF2EA] mb-16">
            <div className="relative h-[400px] w-full">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Project Details */}
            <div>
              {/* App Development Label */}
              <p className="text-sm text-[#64748B] mb-2">{project.category}</p>
              <h2 className="text-[22px] font-bold text-[#1B224B] mb-8">
                {project.title}
              </h2>

              {/* Description Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1B224B] mb-3">
                    Description :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Client Section */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B224B] mb-3">
                    Client :
                  </h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>

                {/* Category Section */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B224B] mb-3">
                    Category :
                  </h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>

                {/* Social Share Section */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B224B] mb-3">
                    Social Share :
                  </h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#0561FC]"
                    >
                      Fb, Tw, In
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Image */}
            <div className="overflow-hidden ">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/projectd1.jpeg"
                  alt="Additional Project View"
                  fill
                  className="object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Background Section */}
      <section className="bg-[#0561FC] py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-48">
            {/* Left Column - Text and Image */}
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">
                IT Services Cover The Actual Software & Designing Process.
              </h2>
              <div className="mt-8">
                <Image
                  src="/images/projectd2.jpeg"
                  alt="Service Process"
                  width={400}
                  height={200}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Right Column - List */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <p>Phasellus Consults Metus & Justo Iaculis Odio.</p>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <p>Sed Varius Ipsum Pellentesque Vulputate.</p>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-yellow-400  rounded-full"></span>
                  <p>Pellentesque Mollis Mattus Quis Lacus Pulvinar.</p>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-yellow-400  rounded-full"></span>
                  <p>Porta Urna Ve Eros Vulputate Egestas.</p>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-2 h-2 bg-yellow-400  rounded-full"></span>
                  <p>Curabitur Nec Leo Nec Est Vestibulum Tincidunt.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Mockups Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-[#1B224B] mb-16">
            IT Service Solution Are Essential For Bringing
          </h2>

          {/* App Mockup - Single Image */}
          <div className="relative max-w-6xl mx-auto mb-6">
            <div className="bg-[#F5F6FE] rounded-3xl ">
              <Image
                src="/images/projectd6.png"
                alt="App Interface Mockup"
                width={1200}
                height={300}
                className="w-full h-auto object-contain rounded-3xl "
                priority
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto text-center text-gray-600 mb-16">
            <p className="leading-relaxed">
              Mauris imperdiet eu sed efficitur convalis. Vestibulum tempus diam
              a porta venenatis sed Suspendisse. Donec accumsan imperdiet
              tortor. Cum sociis natoque penatibus et magnis dis parturient
              montes. Aenean mollis mauris quis leo facilisis. Proin elementum
              velit eu tellus blandit cursus. Ut quis leo nec. Ut quis leo nec.
            </p>
          </div>
          <hr />
          {/* Navigation Links */}
          <div className="flex justify-between items-center max-w-4xl mx-auto pt-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/images/about7.png"
                  alt="Previous Project"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg font-medium">Previous Service</span>
              </div>
            </Link>

            <Link href="#" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">Next Service</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/images/about8.png"
                  alt="Next Project"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
