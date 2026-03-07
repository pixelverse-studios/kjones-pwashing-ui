import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const pageTitle =
  'Pressure Washing FAQs | Jones Pressure Washing Bergen & Essex County'
const pageDescription =
  'Answers to the most common pressure washing and soft washing questions for homeowners and businesses across Bergen and Essex County, NJ.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/faqs'
  },
  keywords: [
    'pressure washing FAQs',
    'soft washing FAQs',
    'Jones Pressure Washing questions',
    'Bergen County pressure washing info',
    'Essex County pressure washing info'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/faqs',
    images: [
      {
        url: '/Homepage_Trust.png',
        width: 1200,
        height: 630,
        alt: 'Jones Pressure Washing answering customer questions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Homepage_Trust.png']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
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

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

export default function FaqsPage() {
  return (
    <>
      <Script
        id="jpw-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full h-12 px-6 border border-primary text-primary hover:bg-primary hover:text-black transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
