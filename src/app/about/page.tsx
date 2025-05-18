import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="bg-primary-black text-white px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Story
          </h1>

          <p className="text-white/90 text-lg mb-10">
            What started as a personal obsession with keeping things spotless
            quickly grew into a business focused on bringing the same level of
            detail and pride to our community. At Jones Pressure Washing, we
            don’t just clean — we care. We believe every home and property
            deserves to be treated with the same respect we’d give our own.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-4 text-primary">
                Built on Detailing. Backed by Reliability.
              </h2>
              <p className="text-white/80 mb-4">
                From showing up on time to leaving your property sparkling
                clean, our mission is to make sure every interaction exceeds
                expectations. We proudly serve Bergen and Essex County and have
                become known for our commitment to customer satisfaction and
                consistent results.
              </p>
              <p className="text-white/80">
                When you hire Jones Pressure Washing, you&apos;re not just
                getting a cleaning service — you&apos;re partnering with someone
                who truly cares about doing things the right way.
              </p>
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/about-image.jpg"
                alt="About Jones Pressure Washing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
