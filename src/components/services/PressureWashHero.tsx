import Link from 'next/link'
import CtaModal from '../cta/CtaModal'

const PressureWashHero = () => {
  return (
    <section className="page bg-black">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transform scale-x-[-1]"
          style={{
            backgroundImage: "url('/PressureBG.jpeg')"
          }}>
          <div className="bg-black-clear h-full w-full"></div>
        </div>

        <div className="nav-offset z-10 relative page-padding max-w-custom mx-auto">
          <div className="max-w-xl py-20 flex flex-col gap-6">
            <h1 className="text-white">
              Professional{' '}
              <span className="text-primary">Pressure Washing Services</span> in
              New Jersey
            </h1>
            <p>
              Safe, effective cleaning for homes and businesses in Bergen,
              Essex, and surrounding counties.
            </p>
          </div>
          <CtaModal
            label="Request a Free Estimate"
            variant="default"
            buttonClass="hover:bg-secondary"
          />
        </div>
      </div>
    </section>
  )
}

export default PressureWashHero
