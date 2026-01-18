'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

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

type CityFaq = {
  question: string
  answer: string
}

interface LocationFaqSectionProps {
  faqHeading: string
  faqDescription: string
  faqs: CityFaq[]
}

export default function LocationFaqSection({
  faqHeading,
  faqDescription,
  faqs
}: LocationFaqSectionProps) {
  return (
    <section className="bg-black">
      <motion.div
        className="max-w-custom mx-auto px-6 py-16 space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}>
        <motion.header className="space-y-3 text-center" variants={item}>
          <h2>{faqHeading}</h2>
          <p className="max-w-2xl mx-auto">{faqDescription}</p>
        </motion.header>
        <motion.div variants={item}>
          <Accordion
            type="multiple"
            className="w-full max-w-4xl mx-auto space-y-4 text-white">
            {faqs.map(faq => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border border-accent rounded-lg">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
