import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import CtaModal from '../cta/CtaModal'

const TrustFeature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-3 mb-4">
      <CheckCircle className="text-primary min-w-5" size={20} />
      <p className="text-white">{text}</p>
    </li>
  )
}

const TrustSection = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-custom mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-white text-balance max-w-md">
            Why Homeowners and Businesses Trust Us
            <div className="w-full h-1 bg-primary mt-2"></div>
          </h2>

          <p className="text-white">
            We're your neighbors—providing exceptional service with neighborly
            care. We always show up on time, treat your property with care, and
            deliver results that speak for themselves!
          </p>

          <ul className="">
            <TrustFeature text="Locally owned & operated" />
            <TrustFeature text="Eco-friendly cleaning methods" />
            <TrustFeature text="On-time & reliable service" />
            <TrustFeature text="100% satisfaction guaranteed" />
          </ul>
          <CtaModal variant="ghost" label="Request a Quote Today" />
        </div>

        <div className="flex-1 relative h-[400px] lg:h-[500px]">
          <Image
            alt="Professional pressure washing service"
            className="object-cover rounded-lg"
            fill
            src="/Homepage_Trust.png"
          />
        </div>
      </div>
    </section>
  )
}

export default TrustSection
