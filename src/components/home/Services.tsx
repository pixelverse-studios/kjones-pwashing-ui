'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHouse, FaBuilding, FaDroplet, FaLayerGroup } from 'react-icons/fa6'

import { useAnimation, viewport, cardHover } from '@/lib/AnimationContext'

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  route,
  variants
}: {
  title: string
  description: string
  icon: any
  route: string
  variants: any
}) => {
  return (
    <motion.div
      className="bg-black border-primary border p-8 rounded-lg flex flex-col gap-6 h-full shadow-md text-center items-center"
      variants={variants}
      whileHover={cardHover}>
      <Icon className="text-primary mb-4" size={40} />
      <h3 className="mb-3">{title}</h3>
      <p className="text-white mb-4 flex-grow">{description}</p>
      <Link
        href={route}
        className="text-primary hover:text-white hover:underline font-medium transition-colors mt-2">
        Learn More
      </Link>
    </motion.div>
  )
}

const ServicesSection = () => {
  const { variants, refreshKey } = useAnimation()

  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto px-6 py-8">
        <motion.div
          key={`services-header-${refreshKey}`}
          className="text-center mb-12"
          variants={variants.item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <h2 className="text-white mb-4">
            Our Pressure & Soft Washing Services
          </h2>
          <p className="text-white mx-auto">
            We provide a full range of professional exterior cleaning services
            for homes and businesses across New Jersey — from deep pressure
            washing to gentle soft wash treatments.
          </p>
        </motion.div>

        <motion.div
          key={`services-grid-${refreshKey}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <ServiceCard
            title="Residential Pressure Washing"
            description="Refresh your home's exterior with our specialized service. We clean driveways, decks, concrete, and more — safe, effective, and cost-efficient."
            icon={FaHouse}
            route="/services/pressure-washing"
            variants={variants.item}
          />
          <ServiceCard
            title="Commercial Pressure Washing"
            description="Make a great first impression with spotless sidewalks, storefronts, driveways, and commercial buildings."
            icon={FaBuilding}
            route="/services/pressure-washing"
            variants={variants.item}
          />
          <ServiceCard
            title="Soft Washing"
            description="Our soft washing safely removes algae, mold, and stains from roofs and siding without damaging delicate surfaces."
            icon={FaDroplet}
            route="/services/soft-washing"
            variants={variants.item}
          />
          <ServiceCard
            title="Other Services"
            description="We also offer help with holiday lighting and roof & gutter cleaning."
            icon={FaLayerGroup}
            route="/services/additional"
            variants={variants.item}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
