'use client'

import { ReactNode, useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import CtaModal from '../cta/CtaModal'

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

interface ServiceHeroProps {
  img: string
  h1: string | ReactNode
  description: string
  cta?: string
  explanation?: ReactNode
  dimHeroContent?: boolean
  height?: string
}

const ServiceHero = ({
  cta = 'Request a Free Estimate',
  description,
  explanation,
  h1,
  img,
  dimHeroContent = false,
  height = 'h-screen'
}: ServiceHeroProps) => {
  const showExplanation = useMemo(() => explanation != null, [explanation])

  return (
    <section className="page bg-black">
      <div className={cn('relative min-h-fit', height)}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transform"
          style={{
            backgroundImage: `url('${img}')`
          }}>
          <div className="bg-black-clear h-full w-full"></div>
        </div>

        <div className="nav-offset z-10 relative side-padding h-fit max-w-custom mx-auto">
          <motion.div
            className={cn(
              'page-padding max-w-xl mt-20 rounded-lg space-y-6',
              dimHeroContent ? 'bg-black-clear' : ''
            )}
            variants={container}
            initial="hidden"
            animate="visible">
            <div className="max-w-xl flex flex-col gap-6">
              <motion.h1 className="text-white" variants={item}>
                {h1}
              </motion.h1>
              <motion.p variants={item}>{description}</motion.p>
            </div>
            <motion.div variants={item}>
              <CtaModal
                label={cta}
                variant="default"
                buttonClass="hover:bg-secondary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {showExplanation ? explanation : null}
    </section>
  )
}

export default ServiceHero
