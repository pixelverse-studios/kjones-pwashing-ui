'use client'

import { motion } from 'framer-motion'
import {
  FaQuoteLeft,
  FaBullseye,
  FaHouse,
  FaClock,
  FaAward
} from 'react-icons/fa6'

import CtaModal from '@/components/cta/CtaModal'
import {
  AnimationProvider,
  useAnimation,
  viewport
} from '@/lib/AnimationContext'

interface HighlightItemProps {
  title: string
  description: string
  Icon: any
  variants: any
}

function HighlightItem({
  title,
  description,
  Icon,
  variants
}: HighlightItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      variants={variants}>
      <Icon size={40} className="text-primary" />
      <h3 className="mb-0 text-white">{title}</h3>
      <p className="text-secondary-lite">{description}</p>
    </motion.div>
  )
}

function AboutAnimatedContent() {
  const { variants } = useAnimation()

  return (
    <section className="bg-black nav-offset">
      <div className="max-w-custom mx-auto h-dvh px-6 py-8 text-center">
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
            className="text-white mt-8 mb-20 max-w-xl mx-auto"
            variants={variants.item}>
            A pressure washing service created by a homeowner who takes pride in
            keeping things spotless — and showing up when it matters.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6 max-w-2xl mx-auto"
          variants={variants.item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <FaQuoteLeft size={40} className="text-primary" />
          <p className="text-xl text-white">
            &quot;I started off with an obsession for detailing my car — and
            that passion eventually extended to my home. I take pride in keeping
            everything spotless, and I knew I could bring that same care to
            others. Too many contractors are unreliable. I&apos;m here to change
            that.&quot;
          </p>
          <span className="text-primary text-xl">Kyle — JPW Owner</span>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <HighlightItem
            title="Precision-Focused"
            description="We treat every job like it's our own driveway or deck."
            Icon={FaBullseye}
            variants={variants.item}
          />
          <HighlightItem
            title="Locally Owned"
            description="Rooted in Bergen & Essex — serving our neighbors with care."
            Icon={FaHouse}
            variants={variants.item}
          />
          <HighlightItem
            title="Always On Time"
            description="Reliable scheduling. No ghosting. Just results."
            Icon={FaClock}
            variants={variants.item}
          />
          <HighlightItem
            title="Pride in Every Job"
            description="We take our work personally — your home reflects our name."
            Icon={FaAward}
            variants={variants.item}
          />
        </motion.div>

        <motion.div
          className="my-16 space-y-6"
          variants={variants.item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <p className="text-white">
            Ready to work with someone who cares about the details?
          </p>
          <CtaModal
            label="Request Your Free Estimate"
            variant="default"
            buttonClass="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutContent() {
  return (
    <AnimationProvider>
      <AboutAnimatedContent />
    </AnimationProvider>
  )
}
