'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ServiceExampleType } from '@/lib/types/services'

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

interface ServiceExamplesProps {
  h2: string
  description?: string
  examples: ServiceExampleType[]
}

export default function ServiceExamples({
  h2,
  description,
  examples
}: ServiceExamplesProps) {
  const hasDescription = useMemo(() => description != null, [description])

  return (
    <section className="bg-secondary">
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <motion.div
          className={cn(hasDescription ? 'text-center' : 'text-left')}
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <h2 className="text-white">{h2}</h2>
          {hasDescription ? <p>{description}</p> : null}
        </motion.div>
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          {examples.map(example => (
            <motion.div
              key={example.header}
              className="flex flex-col gap-4 bg-black rounded-lg p-6 text-left"
              variants={item}>
              <img
                className="w-full h-[12rem] rounded-lg object-cover"
                src={example.img}
                alt={example.imgAlt}
              />
              <h4 className="mb-0">{example.header}</h4>
              <p>{example.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </section>
  )
}
