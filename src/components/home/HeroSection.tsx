'use client'

import Link from 'next/link'
import Image from 'next/image'
import HolidayLightingPromo from '@/components/home/HolidayLightingPromo'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import CtaModal from '../cta/CtaModal'
import { useAnimation } from '@/lib/AnimationContext'

const HeroSection = () => {
  const { variants, refreshKey } = useAnimation()

  return (
    <div className="relative page nav-offset flex min-h-[700px] flex-col md:min-h-[760px]">
      <Image
        src="/Driveway.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-[#121212]/65 to-[#121212]/20 lg:bg-gradient-to-r lg:from-[#121212]/95 lg:via-[#121212]/60 lg:to-[#121212]/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-custom flex-1 flex-col justify-center gap-5 px-6 py-6 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16">
        <motion.div
          key={`hero-${refreshKey}`}
          className="flex w-full max-w-[620px] flex-col items-start"
          variants={variants.container}
          initial="hidden"
          animate="visible">
          <motion.h1
            className="mb-3 max-w-[17ch] text-[2rem] leading-[1.08] tracking-tight text-white min-[360px]:mb-5 min-[360px]:text-4xl sm:text-5xl lg:text-[3.25rem]"
            variants={variants.item}>
            <span className="text-primary">Pressure Washing</span> &amp; Soft
            Washing in North Jersey
          </motion.h1>

          <motion.p
            className="max-w-lg text-base leading-relaxed text-white/90 min-[360px]:text-lg"
            variants={variants.item}>
            Residential and commercial exterior cleaning across Bergen and Essex
            County. We treat your property like it&apos;s our own.
          </motion.p>

          <div className="mt-2 min-[375px]:hidden">
            <HolidayLightingPromo compact />
          </div>

          <motion.div
            className="mt-3 flex flex-col gap-3 min-[360px]:mt-6 sm:mt-8 sm:flex-row"
            variants={variants.item}>
            <CtaModal
              label="Get an Instant Quote"
              variant="default"
              buttonClass="rounded-full h-12"
            />
            <Button
              asChild
              variant="ctaOutline"
              size="cta"
              className="shrink-0 whitespace-nowrap">
              <Link href="#home-services-heading">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
        <div className="max-[374px]:hidden">
          <HolidayLightingPromo />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
