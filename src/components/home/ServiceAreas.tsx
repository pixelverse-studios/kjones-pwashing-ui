import Image from 'next/image'
import { FaHouse } from 'react-icons/fa6'

import { Button } from '../ui/button'

const CountyCard = ({
  county,
  description
}: {
  county: string
  description: string
}) => {
  return (
    <div className="border border-primary bg-black p-5 rounded-lg mb-4 grid grid-cols-[3rem_1fr] items-center gap-4">
      <FaHouse className="text-primary" size={28} />
      <div className="flex flex-col items-start gap-3 mb-2">
        <h3 className="text-white">{county}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  )
}

const ServiceAreas = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-custom px-6 py-8">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Proudly Serving <span className="text-primary">New Jersey</span>
        </h2>

        <p className="text-white text-center max-w-3xl mx-auto mb-12">
          We proudly provide pressure washing and soft washing services across
          New Jersey, with a strong local focus in Bergen County and Essex
          County. Whether you're a homeowner or business, you can count on our
          team for reliable, professional exterior cleaning throughout North
          Jersey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-6">
            <CountyCard
              county="Bergen County"
              description="Residential & commercial soft washing, pressure washing, and more"
            />

            <CountyCard
              county="Essex County"
              description="Residential & commercial soft washing, pressure washing, and more"
            />

            <p className="text-white mt-4">
              Don't see your county listed? Reach out — we may still serve your
              area.
            </p>
            <Button>Check Service Availability</Button>
          </div>
          <Image
            src="/NjGraphic.png"
            alt="New Jersey Service Map"
            width={600}
            height={800}
            className="h-auto w-[20rem] mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
