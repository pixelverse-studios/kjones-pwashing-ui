import Link from 'next/link'
import { FaHouse, FaBuilding, FaDroplet, FaLayerGroup } from 'react-icons/fa6'

const ServiceCard = ({
  title,
  description,
  icon: Icon
}: {
  title: string
  description: string
  icon: any
}) => {
  return (
    <div className="bg-black border-primary border p-8 rounded-lg flex flex-col gap-6 h-full shadow-md text-center items-center">
      <Icon className="text-primary mb-4" size={40} />
      <h3 className="mb-3">{title}</h3>
      <p className="text-white mb-4 flex-grow">{description}</p>
      <Link
        href="/services"
        className="text-primary hover:text-primary/80 font-medium transition-colors mt-2">
        Learn More
      </Link>
    </div>
  )
}

const ServicesSection = () => {
  return (
    <section className="page bg-black">
      <div className="max-w-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Our Pressure & Soft Washing Services
          </h2>
          <p className="text-white mx-auto">
            We provide a full range of professional exterior cleaning services
            for homes and businesses across New Jersey — from deep pressure
            washing to gentle soft wash treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <ServiceCard
            title="Residential Pressure Washing"
            description="Refresh your home's exterior with our specialized service. We clean driveways, decks, concrete, and more — safe, effective, and cost-applied easily."
            icon={FaHouse}
          />
          <ServiceCard
            title="Commercial Pressure Washing"
            description="Make a great first impression with spotless sidewalks, storefronts, driveways, and commercial buildings."
            icon={FaBuilding}
          />
          <ServiceCard
            title="Soft Washing"
            description="Our soft washing safely removes algae, mold, and stains from roofs and siding without damaging delicate surfaces."
            icon={FaDroplet}
          />
          <ServiceCard
            title="Other Services"
            description="We also offer help with holiday lighting and roof & gutter cleaning."
            icon={FaLayerGroup}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
