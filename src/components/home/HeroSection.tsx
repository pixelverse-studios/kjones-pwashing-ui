import Link from 'next/link'
import CtaModal from '../cta/CtaModal'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full nav-offset side-padding flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Homepage.jpg')"
        }}></div>

      {/* Content */}
      <div className="bg-black-clear text-white relative z-10 h-fit flex flex-col justify-center p-8 max-w-xl shadow-xl rounded-lg">
        <h1 className="text-white mb-2">
          Professional <span className="text-primary">Pressure</span>
          <span className="text-primary">& Soft Washing</span> For <br />
          Homes and Businesses <br />
          in New Jersey
        </h1>

        <p className="text-white/90 my-4 text-lg max-w-lg">
          We treat your property like it&apos;s our own — Proudly serving our
          neighbors in Bergen & Essex County.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <CtaModal
            label="Request Your Free Estimate"
            variant="default"
            buttonClass="rounded-full h-12"
          />
          <Link
            href="/about"
            className="bg-transparent border border-primary hover:bg-primary text-white hover:text-black font-medium py-3 px-6 rounded-full transition-all duration-200 text-center">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
