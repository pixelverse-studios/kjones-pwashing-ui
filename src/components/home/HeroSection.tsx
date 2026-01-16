'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import CtaModal from '../cta/CtaModal'
import { useAnimation } from '@/lib/AnimationContext'

const HeroSection = () => {
  const { variants, refreshKey } = useAnimation()

  return (
    <div className="relative page nav-offset flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Homepage.jpg')"
        }}
      />

      <div className="text-white relative z-10 max-w-custom w-full mx-auto px-6 py-8">
        <motion.div
          key={`hero-${refreshKey}`}
          className="h-fit w-fit max-w-xl flex flex-col justify-center shadow-xl rounded-lg p-8 bg-black-clear"
          variants={variants.container}
          initial="hidden"
          animate="visible">
          <motion.h1 className="text-white mb-2" variants={variants.item}>
            Professional <span className="text-primary">Pressure</span>
            <span className="text-primary"> & Soft Washing</span> For <br />
            Homes and Businesses <br />
            in New Jersey
          </motion.h1>

          <motion.p
            className="text-white/90 my-4 text-lg max-w-lg"
            variants={variants.item}>
            We treat your property like it&apos;s our own — Proudly serving our
            neighbors in Bergen & Essex County.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            variants={variants.item}>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
