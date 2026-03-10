'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF } from 'react-icons/fa6'
import CtaModal from '../cta/CtaModal'
import { BusinessInfo } from '@/lib/constants'

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

interface ServiceCtaProps {
  header: string
  description: string
  cta: string
  buttonLabel: string
  showAfter?: boolean
  showSocial?: boolean
}

export default function ServiceCta({
  header,
  description,
  cta,
  buttonLabel,
  showAfter = false,
  showSocial = false
}: ServiceCtaProps) {
  return (
    <section className="bg-black text-center">
      <motion.div
        className="max-w-custom mx-auto px-6 py-20 flex flex-col gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}>
        <motion.h2 className="text-white" variants={item}>
          {header}
        </motion.h2>
        <motion.p variants={item}>{description}</motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mx-auto w-full sm:w-fit"
          variants={item}>
          <CtaModal label={cta} variant="default" />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full h-12 px-6 border border-primary text-primary hover:bg-primary hover:text-black transition-colors">
            {buttonLabel}
          </Link>
        </motion.div>
        {showSocial ? (
          <motion.p
            className="text-sm text-secondary-lite flex items-center justify-center gap-4"
            variants={item}>
            See our work on
            <a
              href={BusinessInfo.sameAs[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <FaInstagram size={16} />
              Instagram
            </a>
            <a
              href={BusinessInfo.sameAs[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <FaFacebookF size={14} />
              Facebook
            </a>
          </motion.p>
        ) : null}
        {showAfter ? (
          <motion.p className="text-sm text-gray-400" variants={item}>
            Serving Bergen, Essex, and surrounding New Jersey counties.
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  )
}
