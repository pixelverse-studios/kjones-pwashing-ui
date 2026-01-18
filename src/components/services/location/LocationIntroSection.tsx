'use client'

import { motion } from 'framer-motion'

// Cascade variants (slide up with stagger)
const smoothEase = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase }
  }
}

const viewport = { once: true, margin: '-100px' as const }

type FocusArea = {
  title: string
  description: string
}

interface LocationIntroSectionProps {
  introHeading: string
  introParagraphs: string[]
  focusAreas: FocusArea[]
}

export default function LocationIntroSection({
  introHeading,
  introParagraphs,
  focusAreas
}: LocationIntroSectionProps) {
  return (
    <section className="bg-black">
      <motion.div
        className="max-w-custom mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1.4fr,1fr]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}>
        <div className="space-y-4">
          <motion.h2 variants={item}>{introHeading}</motion.h2>
          {introParagraphs.map(paragraph => (
            <motion.p key={paragraph} variants={item}>
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="grid gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          {focusAreas.map(area => (
            <motion.div
              key={area.title}
              className="border border-white/10 rounded-lg bg-white/5 p-5"
              variants={item}>
              <h3 className="text-primary text-lg">{area.title}</h3>
              <p className="mt-2 text-sm text-white/80">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
