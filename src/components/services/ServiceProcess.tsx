'use client'

import { motion } from 'framer-motion'
import { ProcessStepType } from '@/lib/types/services'

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

interface ServiceProcessProps {
  header: string
  steps: ProcessStepType[]
}

export default function ServiceProcess({ header, steps }: ServiceProcessProps) {
  return (
    <section className="bg-secondary text-center">
      <div className="max-w-custom mx-auto space-y-12 px-6 py-20">
        <motion.h2
          className="text-white"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          {header}
        </motion.h2>
        <motion.div
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          {steps.map(step => (
            <motion.div
              className="flex flex-col gap-2"
              key={step.header}
              variants={item}>
              <div className="bg-primary text-white p-4 w-16 h-16 mx-auto rounded-full font-bold text-lg flex justify-center items-center">
                {step.position}
              </div>
              <span>{step.header}</span>
              <span className="text-gray-400">{step.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
