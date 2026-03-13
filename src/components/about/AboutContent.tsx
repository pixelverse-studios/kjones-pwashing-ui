'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaQuoteLeft,
  FaBullseye,
  FaShieldHalved,
  FaStar,
  FaHandshake,
  FaGaugeHigh,
  FaDroplet,
  FaLayerGroup,
  FaSprayCanSparkles
} from 'react-icons/fa6'
import { IconType } from 'react-icons'

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

const equipment: { name: string; description: string; Icon: IconType }[] = [
  {
    name: 'Dedicated Pressure Washer',
    description: 'For hardscapes like concrete, stone, and pavers',
    Icon: FaGaugeHigh
  },
  {
    name: 'High-Flow Rinse System',
    description: 'Low-pressure rinsing for post-treatment cleanup',
    Icon: FaDroplet
  },
  {
    name: 'Surface Cleaner',
    description:
      'For large concrete and stone areas — even, streak-free results',
    Icon: FaLayerGroup
  },
  {
    name: 'Dedicated Soft Wash System',
    description:
      'For delicate surfaces like siding and roofs that require a gentle touch',
    Icon: FaSprayCanSparkles
  }
]

const background = [
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
    detail: 'Current career — precision wiring and problem-solving every day'
  },
  {
    title: 'Owner-Operated',
    detail: 'Entering our 3rd season, fully insured, and looking to expand'
  }
]

function AboutAnimatedContent() {
  const { variants } = useAnimation()

  return (
    <div className="bg-black">
      {/* Hero — full-width image with overlay */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Homepage.jpg"
          alt="Jones Pressure Washing at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 max-w-custom mx-auto px-6 text-center"
          variants={variants.container}
          initial="hidden"
          animate="visible">
          <motion.div
            className="bg-black-clear backdrop-blur-sm rounded-lg px-8 py-10 md:px-12 md:py-14 inline-block"
            variants={variants.item}>
            <h1 className="text-white mb-4">
              BUILT ON DETAILING.
              <br />
              <span className="text-primary">BACKED BY RELIABILITY</span>
            </h1>
            <p className="text-white/90 max-w-xl mx-auto text-lg">
              A pressure washing service created by a homeowner who takes pride
              in keeping things spotless — and showing up when it matters.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Origin Story — editorial asymmetric layout */}
      <section className="max-w-custom mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-16 items-start max-w-4xl mx-auto"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.div
            className="hidden md:flex flex-col items-center gap-4 pt-2"
            variants={variants.item}>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary" />
            <FaQuoteLeft size={28} className="text-primary" />
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
          <motion.div variants={variants.item}>
            <h2 className="text-primary mb-8">How It Started</h2>
            <blockquote className="border-l-2 border-primary/30 pl-6 mb-8">
              <p className="text-lg text-white italic leading-relaxed">
                &quot;When I purchased my first house, I quickly became obsessed
                with making my lawn and yard look the best in the neighborhood.
                Spending time outside, I noticed my house was filthy. I borrowed
                a pressure washer from a friend and set out to clean everything
                up one weekend. When I was finished, I was very happy with the
                results.&quot;
              </p>
              <footer className="mt-4 text-primary font-poppins font-semibold">
                Kyle — JPW Owner
              </footer>
            </blockquote>
            <p className="text-secondary-lite leading-relaxed">
              That one weekend changed everything. Driving around the
              neighborhood, Kyle noticed house after house covered in algae and
              mold — and realized he could not be the only one who would love
              coming home to a clean exterior. In 2023, Jones Pressure Washing
              was born to bring that same satisfaction to homeowners across
              Bergen and Essex County.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Professional Background — timeline style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray via-black to-gray opacity-60" />
        <div className="relative max-w-custom mx-auto px-6 py-16 md:py-24">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <motion.div className="text-center mb-12" variants={variants.item}>
              <h2 className="text-primary mb-4">More Than a Pressure Washer</h2>
              <p className="text-white max-w-2xl mx-auto">
                Kyle brings years of hands-on technical experience from
                industries where precision and attention to detail are
                non-negotiable.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={variants.item}>
              {background.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-black/60 backdrop-blur-sm border border-white/5 rounded-lg p-6 transition-all duration-300 hover:border-primary/40">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-primary/40 font-poppins text-sm font-bold">
                    0{i + 1}
                  </span>
                  <h3 className="text-white text-base mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-secondary-lite text-sm">{item.detail}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipment — horizontal cards with accent */}
      <section className="max-w-custom mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
            variants={variants.item}>
            <div>
              <h2 className="text-primary mb-2">Specialized Equipment</h2>
              <p className="text-secondary-lite max-w-lg">
                We do not use one machine for everything. Each piece of
                equipment is purpose-built for the job at hand.
              </p>
            </div>
            <div className="hidden md:block w-32 h-[2px] bg-gradient-to-r from-primary to-primary/10 rounded-full" />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={variants.item}>
            {equipment.map(item => (
              <div
                key={item.name}
                className="relative bg-gray rounded-lg p-6 border border-transparent hover:border-primary/30 transition-colors duration-300 overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <item.Icon size={22} className="text-primary mb-3" />
                <h3 className="text-white text-base mb-2">{item.name}</h3>
                <p className="text-secondary-lite text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Principles — contrasting background */}
      <section className="relative bg-gray/50 border-y border-white/5">
        <div className="max-w-custom mx-auto px-6 py-16 md:py-24">
          <motion.div
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <motion.h2
              className="text-primary text-center mb-10"
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
        </div>
      </section>

      {/* Explore Our Services */}
      <section className="max-w-custom mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2 className="text-primary mb-6" variants={variants.item}>
            Explore Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={variants.item}>
            <Link
              href="/services/pressure-washing"
              className="border border-white/10 bg-white/5 p-5 rounded-lg transition-colors hover:border-primary hover:bg-primary/10">
              <h3 className="text-white text-base mb-2">Pressure Washing</h3>
              <p className="text-secondary-lite text-sm">
                Driveways, patios, concrete, and pavers
              </p>
            </Link>
            <Link
              href="/services/soft-washing"
              className="border border-white/10 bg-white/5 p-5 rounded-lg transition-colors hover:border-primary hover:bg-primary/10">
              <h3 className="text-white text-base mb-2">Soft Washing</h3>
              <p className="text-secondary-lite text-sm">
                Siding, roofs, and delicate surfaces
              </p>
            </Link>
            <Link
              href="/services/additional"
              className="border border-white/10 bg-white/5 p-5 rounded-lg transition-colors hover:border-primary hover:bg-primary/10">
              <h3 className="text-white text-base mb-2">Gutter &amp; Roof</h3>
              <p className="text-secondary-lite text-sm">
                Cleaning, maintenance, and seasonal care
              </p>
            </Link>
            <Link
              href="/services/holiday-lighting"
              className="border border-white/10 bg-white/5 p-5 rounded-lg transition-colors hover:border-primary hover:bg-primary/10">
              <h3 className="text-white text-base mb-2">Holiday Lighting</h3>
              <p className="text-secondary-lite text-sm">
                Custom design, installation, and takedown
              </p>
            </Link>
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
