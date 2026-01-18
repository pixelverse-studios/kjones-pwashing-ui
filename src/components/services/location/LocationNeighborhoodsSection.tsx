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

type Neighborhood = {
  name: string
  description: string
}

interface LocationNeighborhoodsSectionProps {
  neighborhoodHeading: string
  neighborhoodDescription: string
  neighborhoods: Neighborhood[]
}

export default function LocationNeighborhoodsSection({
  neighborhoodHeading,
  neighborhoodDescription,
  neighborhoods
}: LocationNeighborhoodsSectionProps) {
  return (
    <section className="bg-[#0b0b0f]">
      <motion.div
        className="max-w-custom mx-auto px-6 py-16 space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}>
        <motion.header className="space-y-3" variants={item}>
          <h2>{neighborhoodHeading}</h2>
          <p>{neighborhoodDescription}</p>
        </motion.header>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          {neighborhoods.map(area => (
            <motion.div
              key={area.name}
              className="rounded-lg border border-white/5 bg-black/40 p-5"
              variants={item}>
              <h3 className="text-primary">{area.name}</h3>
              <p className="mt-2 text-sm text-white/80">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
