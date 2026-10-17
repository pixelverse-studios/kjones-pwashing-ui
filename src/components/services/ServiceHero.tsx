'use client'

import { ReactNode, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
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
  imgAlt?: string
  imageOverlayClassName?: string
  h1: string | ReactNode
  description: string
  cta?: string
  ctaHref?: string
  explanation?: ReactNode
  dimHeroContent?: boolean
  height?: string
}

const ServiceHero = ({
  cta = 'Get an Instant Quote',
  ctaHref,
  description,
  explanation,
  h1,
  img,
  imgAlt,
  imageOverlayClassName,
  dimHeroContent = false,
  height = 'h-screen'
}: ServiceHeroProps) => {
  const showExplanation = useMemo(() => explanation != null, [explanation])

  return (
    <section className="page bg-black">
      <div className={cn('relative min-h-fit', height)}>
        <div className="absolute inset-0 z-0">
          {imgAlt !== undefined ? (
            <Image
              src={img}
              alt={imgAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            />
          )}
          <div
            className={cn(
              'absolute inset-0',
              imageOverlayClassName ?? 'bg-black-clear'
            )}
          />
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
              {ctaHref ? (
                <Button asChild variant="ctaPrimary" size="cta">
                  <Link href={ctaHref}>{cta}</Link>
                </Button>
              ) : (
                <CtaModal
                  label={cta}
                  variant="default"
                  buttonClass="hover:bg-secondary"
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      {showExplanation ? explanation : null}
    </section>
  )
}

export default ServiceHero
