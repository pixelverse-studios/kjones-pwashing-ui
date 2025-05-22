import Head from 'next/head'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import CtaModal from '@/components/cta/CtaModal'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I have my house pressure washed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most homes in New Jersey, we recommend pressure washing once a year to remove built-up dirt, mold, and mildew. However, homes in heavily wooded areas or those near water may benefit from cleaning twice a year.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is pressure washing safe for all surfaces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, high-pressure washing isn't suitable for all surfaces. We use soft washing techniques for delicate surfaces like roofs, vinyl siding, and painted surfaces to prevent damage while still achieving excellent cleaning results."
      }
    },
    {
      '@type': 'Question',
      name: 'Do you serve both residential and commercial properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide professional pressure washing services for both residential homes and commercial properties throughout Bergen and Essex County, New Jersey.'
      }
    }
  ]
}

const faqs = [
  {
    question: "Do you use the customer's water?",
    answer:
      "Yes, we typically use the customer's water supply. We connect to your outdoor spigot using our professional-grade equipment."
  },
  {
    question: "Why do you have a water tank if you don't bring your own water?",
    answer:
      'Our water tanks serve to feed our hungry machines. In many instances, a water source is not able to keep up with the demand of our machines, this allows us to continue uninterrupted.'
  },
  {
    question:
      "What's the difference between soft washing and pressure washing?",
    answer:
      'Soft washing uses lower pressure and specialized cleaning solutions for delicate surfaces, while pressure washing uses high-pressure water for tough stains on durable surfaces.'
  },
  {
    question: 'How should I prepare my property before service?',
    answer:
      'Please remove any valuable items, close all windows and doors, and ensure easy access to the areas that need cleaning.'
  },
  {
    question: "What's the best way to reach you?",
    answer:
      'You can reach us through our contact form, email, or by phone during business hours (8AM–6PM EST).'
  },
  {
    question: 'How do I get an estimate?',
    answer:
      "Fill out our online quote form or give us a call. We'll need some basic information about your property and the services you're interested in."
  },
  {
    question: 'Do you clean roofs?',
    answer:
      "Yes, we offer professional roof cleaning services using safe and effective methods that won't damage your shingles."
  }
]

export default function FaqsPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <main>
        <section className="bg-black nav-offset">
          <div className="max-w-custom mx-auto px-6 py-10 text-center">
            <h1>Frequently Asked Questions</h1>
            <p className="text-white mt-8 mb-20 max-w-xl mx-auto">
              Got questions before booking your service? Here's everything you
              need to know - from how we work to how to prepare your property.
            </p>
            <Accordion
              type="multiple"
              className={cn('w-full max-w-4xl mx-auto space-y-4')}>
              {faqs.map(faq => (
                <AccordionItem
                  value={faq.question}
                  key={faq.question}
                  className="border border-accent rounded-lg mb-0">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-20 space-y-4">
              <h3 className="text-white">Still have questions?</h3>
              <p className="pb-6">Reach out and we'll be happy to help.</p>
              <CtaModal label="Contact Us" variant="ghost" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
