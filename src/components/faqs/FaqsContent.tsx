'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import CtaModal from '@/components/cta/CtaModal'
import { useAnimation, viewport } from '@/lib/AnimationContext'

interface FaqItem {
  question: string
  answer: string
}

interface FaqsContentProps {
  faqs: FaqItem[]
}

export default function FaqsContent({ faqs }: FaqsContentProps) {
  const { variants, refreshKey } = useAnimation()

  return (
    <section className="bg-black nav-offset">
      <div className="max-w-custom mx-auto px-6 py-10 text-center">
        <motion.div
          key={`faqs-header-${refreshKey}`}
          variants={variants.container}
          initial="hidden"
          animate="visible">
          <motion.h1 variants={variants.item}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-white mt-8 mb-20 max-w-xl mx-auto"
            variants={variants.item}>
            Got questions before booking your service? Here's everything you
            need to know - from how we work to how to prepare your property.
          </motion.p>
        </motion.div>

        <motion.div
          key={`faqs-accordion-${refreshKey}`}
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <Accordion
            type="multiple"
            className={cn('w-full max-w-4xl mx-auto space-y-4')}>
            {faqs.map(faq => (
              <motion.div key={faq.question} variants={variants.item}>
                <AccordionItem
                  value={faq.question}
                  className="border border-accent rounded-lg mb-0">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          key={`faqs-cta-${refreshKey}`}
          className="mt-20 space-y-4"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h3 className="text-white" variants={variants.item}>
            Still have questions?
          </motion.h3>
          <motion.p className="pb-6" variants={variants.item}>
            Reach out and we'll be happy to help.
          </motion.p>
          <motion.div variants={variants.item}>
            <CtaModal label="Contact Us" variant="ghost" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
