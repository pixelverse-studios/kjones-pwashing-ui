import Link from 'next/link'
import CtaModal from '../cta/CtaModal'

const HeroSection = () => {
  return (
    <div className="relative page nav-offset flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Holiday Lights Installation at Twilight.png')"
        }}></div>

      {/* Content */}
      {/* <div className="bg-black-clear text-white relative z-10 p-8 max-w-xl w-full shadow-xl rounded-lg mx-auto"> */}
      <div className="text-white relative z-10 max-w-custom w-full mx-auto  px-6 py-8">
        <div className="h-fit w-fit max-w-xl flex flex-col justify-center shadow-xl rounded-lg p-8 bg-black-clear">
          <h1 className="text-white mb-2">
            Holiday Lighting &amp; Exterior Cleaning for{' '}
            <span className="text-primary">Bergen &amp; Essex</span>
          </h1>

          <p className="text-white/90 my-4 text-lg max-w-lg">
            Custom holiday lighting design, installation, maintenance, and
            takedown — plus pressure and soft washing that keeps your property
            photo ready long after the lights go up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <CtaModal
              label="Reserve My Holiday Lighting Slot"
              variant="default"
              buttonClass="rounded-full h-12"
            />
            <Link
              href="/services/holiday-lighting"
              className="bg-transparent border border-primary hover:bg-primary text-white hover:text-black font-medium py-3 px-6 rounded-full transition-all duration-200 text-center">
              Explore Holiday Lighting
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
