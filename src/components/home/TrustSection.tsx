'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

import CtaModal from '../cta/CtaModal'
import { useAnimation, viewport } from '@/lib/AnimationContext'

const TrustFeature = ({ text, variants }: { text: string; variants: any }) => {
  return (
    <motion.li className="flex items-center gap-3 mb-4" variants={variants}>
      <CheckCircle className="text-primary min-w-5" size={20} />
      <p className="text-white">{text}</p>
    </motion.li>
  )
}

const TrustSection = () => {
  const { variants, refreshKey } = useAnimation()

  return (
    <section className="bg-secondary overflow-hidden">
      <div className="max-w-custom mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          key={`trust-left-${refreshKey}`}
          className="flex flex-col justify-center gap-6"
          variants={variants.slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <h2 className="text-white text-balance max-w-md">
            Why Homeowners and Businesses Trust Us
            <div className="w-full h-1 bg-primary mt-2"></div>
          </h2>

          <p className="text-white">
            We are not the cheapest option — but that lets us take our time and
            pay attention to the small details instead of rushing to hit a
            number.
          </p>

          <motion.ul
            key={`trust-list-${refreshKey}`}
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <TrustFeature
              text="Owner-operated since 2023 — entering our 3rd season in Bergen & Essex County"
              variants={variants.item}
            />
            <TrustFeature
              text="Specialized equipment for every task — not one machine for everything"
              variants={variants.item}
            />
            <TrustFeature
              text="We take our time to get it right — the details matter"
              variants={variants.item}
            />
            <TrustFeature
              text="Walk-around inspection before we leave. Not satisfied? We re-service at the first chance."
              variants={variants.item}
            />
          </motion.ul>
          <CtaModal variant="ghost" label="Get an Instant Quote" />
        </motion.div>

        <motion.div
          key={`trust-right-${refreshKey}`}
          className="flex-1 relative h-[400px] lg:h-[500px]"
          variants={variants.slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <Image
            alt="Professional pressure washing service"
            className="object-cover rounded-lg"
            fill
            src="/Homepage_Trust.png"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
