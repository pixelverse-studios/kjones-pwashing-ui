'use client'

import { motion } from 'framer-motion'
import {
  FaQuoteLeft,
  FaBullseye,
  FaShieldHalved,
  FaStar,
  FaHandshake
} from 'react-icons/fa6'

import CtaModal from '@/components/cta/CtaModal'
import {
  AnimationProvider,
  useAnimation,
  viewport
} from '@/lib/AnimationContext'

interface PrincipleCardProps {
  title: string
  description: string
  Icon: any
  variants: any
}

function PrincipleCard({
  title,
  description,
  Icon,
  variants
}: PrincipleCardProps) {
  return (
    <motion.div
      className="bg-gray border border-accent rounded-lg p-6 flex flex-col items-center gap-4 text-center"
      variants={variants}>
      <Icon size={36} className="text-primary" />
      <h3 className="mb-0 text-white text-lg">{title}</h3>
      <p className="text-secondary-lite text-sm">{description}</p>
    </motion.div>
  )
}

const equipment = [
  {
    name: 'Dedicated Pressure Washer',
    description: 'For hardscapes like concrete, stone, and pavers'
  },
  {
    name: 'High-Flow Rinse System',
    description: 'Low-pressure rinsing for post-treatment cleanup'
  },
  {
    name: 'Surface Cleaner',
    description:
      'For large concrete and stone areas — even, streak-free results'
  },
  {
    name: 'Dedicated Soft Wash System',
    description:
      'For delicate surfaces like siding and roofs that require a gentle touch'
  }
]

function AboutAnimatedContent() {
  const { variants } = useAnimation()

  return (
    <div className="bg-black nav-offset">
      {/* Hero */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16 text-center">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible">
          <motion.h1 variants={variants.item}>
            BUILT ON DETAILING.
            <br />
            BACKED BY RELIABILITY
          </motion.h1>
          <motion.p
            className="text-white mt-8 mb-12 max-w-xl mx-auto"
            variants={variants.item}>
            A pressure washing service created by a homeowner who takes pride in
            keeping things spotless — and showing up when it matters.
          </motion.p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2
            className="text-primary text-center mb-8"
            variants={variants.item}>
            How It Started
          </motion.h2>
          <motion.div
            className="flex flex-col items-center gap-6 mb-8"
            variants={variants.item}>
            <FaQuoteLeft size={32} className="text-primary" />
            <p className="text-lg text-white text-center italic">
              &quot;When I purchased my first house, I quickly became obsessed
              with making my lawn and yard look the best in the neighborhood.
              Spending time outside, I noticed my house was filthy. I borrowed a
              pressure washer from a friend and set out to clean everything up
              one weekend. When I was finished, I was very happy with the
              results.&quot;
            </p>
            <span className="text-primary">Kyle — JPW Owner</span>
          </motion.div>
          <motion.p
            className="text-secondary-lite text-center"
            variants={variants.item}>
            That one weekend changed everything. Driving around the
            neighborhood, Kyle noticed house after house covered in algae and
            mold — and realized he could not be the only one who would love
            coming home to a clean exterior. In 2023, Jones Pressure Washing was
            born to bring that same satisfaction to homeowners across Bergen and
            Essex County.
          </motion.p>
        </motion.div>
      </section>

      {/* Professional Background */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2
            className="text-primary text-center mb-8"
            variants={variants.item}>
            More Than a Pressure Washer
          </motion.h2>
          <motion.p
            className="text-white text-center mb-8"
            variants={variants.item}>
            Kyle brings years of hands-on technical experience from industries
            where precision and attention to detail are non-negotiable.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={variants.item}>
            {[
              {
                title: 'Automotive Detailing',
                detail:
                  'Specialized in paint correction and PPF installs at a well-known NJ shop'
              },
              {
                title: 'Ducati Technician',
                detail: 'Electrical diagnostics on high-performance motorcycles'
              },
              {
                title: 'IBEW Electrician',
                detail:
                  'Current career — precision wiring and problem-solving every day'
              },
              {
                title: 'Owner-Operated',
                detail:
                  'Entering our 3rd season, fully insured, and looking to expand'
              }
            ].map(item => (
              <div
                key={item.title}
                className="bg-gray border border-accent rounded-lg p-5">
                <h3 className="text-white text-base mb-1">{item.title}</h3>
                <p className="text-secondary-lite text-sm">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Equipment */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2
            className="text-primary text-center mb-4"
            variants={variants.item}>
            Specialized Equipment for Every Task
          </motion.h2>
          <motion.p
            className="text-secondary-lite text-center mb-8"
            variants={variants.item}>
            We do not use one machine for everything. Each piece of equipment is
            purpose-built for the job at hand.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={variants.item}>
            {equipment.map(item => (
              <div
                key={item.name}
                className="bg-gray border border-accent rounded-lg p-5">
                <h3 className="text-white text-base mb-1">{item.name}</h3>
                <p className="text-secondary-lite text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
        <motion.div
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2
            className="text-primary text-center mb-8"
            variants={variants.item}>
            What We Stand For
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={variants.container}>
            <PrincipleCard
              title="Detail-Obsessed"
              description="We are not spray and pray. We take our time to get every job done right, safe, and damage-free. The details matter."
              Icon={FaBullseye}
              variants={variants.item}
            />
            <PrincipleCard
              title="Fully Insured"
              description="Real coverage for real peace of mind. Your property is protected from start to finish."
              Icon={FaShieldHalved}
              variants={variants.item}
            />
            <PrincipleCard
              title="Quality Over Volume"
              description="We might not be the cheapest option, but that lets us pay attention to the small details instead of rushing to hit a number."
              Icon={FaStar}
              variants={variants.item}
            />
            <PrincipleCard
              title="Satisfaction First"
              description="We do a walkthrough with you before we leave. If anything needs a second look, we come back at the first chance we get."
              Icon={FaHandshake}
              variants={variants.item}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16 text-center">
        <motion.div
          className="space-y-6"
          variants={variants.item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <p className="text-white">
            Ready to work with someone who cares about the details?
          </p>
          <CtaModal
            label="Get an Instant Quote"
            variant="default"
            buttonClass="rounded-full"
          />
        </motion.div>
      </section>
    </div>
  )
}

export default function AboutContent() {
  return (
    <AnimationProvider>
      <AboutAnimatedContent />
    </AnimationProvider>
  )
}
