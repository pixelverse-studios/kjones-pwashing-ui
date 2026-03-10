import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Link from 'next/link'

const pageTitle = 'Pressure Washing FAQs | Jones PW Bergen & Essex, NJ'
const pageDescription =
  'Answers to 20+ questions about pressure washing, soft washing, roof cleaning, and gutter cleaning from Jones Pressure Washing in Bergen & Essex County, NJ.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/faqs'
  },
  keywords: [
    'pressure washing FAQs',
    'soft washing FAQs',
    'roof cleaning questions',
    'gutter cleaning FAQ',
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

interface Faq {
  question: string
  answer: string
}

interface FaqCategory {
  name: string
  faqs: Faq[]
}

const faqCategories: FaqCategory[] = [
  {
    name: 'General',
    faqs: [
      {
        question: 'Are you licensed and insured?',
        answer:
          'Yes, Jones Pressure Washing is fully insured. At this time, a contractor license is not required for our services in New Jersey. If demand grows for additional services that require one, we will obtain the appropriate licensing.'
      },
      {
        question: 'What does your satisfaction guarantee mean?',
        answer:
          'We do a walkthrough with you before we leave to make sure you are completely satisfied with the results. If anything needs attention, we will come back out for a re-service at the first opportunity. Our goal is to get it right the first time, every time.'
      },
      {
        question: 'How quickly do you respond to inquiries?',
        answer:
          'Estimates are typically provided the same day. The fastest way to reach us is through our contact form or by text. If you prefer a phone call, please leave a voicemail or send a text letting us know — we receive a high volume of spam calls, so a message ensures a timely response.'
      },
      {
        question: 'How far out are you typically booked?',
        answer:
          'We are usually booked 1 to 2 weeks out. During peak season — especially leading up to Memorial Day and through early summer — we can be booked up to a month in advance. We recommend scheduling early to secure your preferred date.'
      }
    ]
  },
  {
    name: 'Pressure Washing',
    faqs: [
      {
        question: 'When is pressure washing appropriate vs. soft washing?',
        answer:
          'Pressure washing is used on hard surfaces like concrete, stone, and pavers — anything that does not require a delicate touch. Soft washing is reserved for more sensitive surfaces such as siding, roofs, and painted wood, where high pressure could cause damage.'
      },
      {
        question: 'What pressure levels do you use on different surfaces?',
        answer:
          'We always start at a lower pressure and increase only if needed. This approach lets us achieve great results while minimizing the risk of surface damage. Every material responds differently, so we adjust on the fly to match the situation.'
      },
      {
        question: "What surfaces won't you pressure wash?",
        answer:
          'We will not use high pressure on roofs, vinyl siding, wood siding, or Hardie board — those surfaces require soft washing. We also will not pressure wash asphalt driveways, as high pressure can damage the surface. For asphalt, we recommend seal coating to restore a like-new appearance.'
      },
      {
        question: 'How often should I get pressure washing done?',
        answer:
          'It depends on the property and its use. A restaurant patio may need cleaning monthly or quarterly, while a residential patio or driveway can often go one to two years between cleanings. We are happy to recommend a schedule based on your specific situation.'
      }
    ]
  },
  {
    name: 'Soft Washing',
    faqs: [
      {
        question: 'Are your cleaning solutions safe for plants and pets?',
        answer:
          'We always start with the least aggressive cleaning method and only increase strength if needed. After every project, we apply a chemical neutralizing solution to minimize any negative effects on surrounding plants, pets, and people.'
      },
      {
        question: 'Is roof washing different from regular soft washing?',
        answer:
          'Yes. Roof washing uses a higher concentration of cleaning solution compared to a standard house wash. We typically pair a roof wash with a house wash so you do not end up with clean spots next to dirty areas from overspray and runoff.'
      },
      {
        question: 'How long do soft wash results last?',
        answer:
          'Soft washing tends to penetrate deeper into the surface compared to pressure alone when treating organic material like moss, mold, and algae. This means results often last longer because the cleaning solution kills growth at the root rather than just removing it from the surface.'
      }
    ]
  },
  {
    name: 'Roof Cleaning',
    faqs: [
      {
        question: 'What types of roofs do you clean?',
        answer:
          'We clean asphalt shingle, tile, metal, and cedar shake roofs — all using a soft wash method only. The roof must be in reasonable condition. If we spot any damage during our assessment, we will let you know and discuss whether to proceed or have a roofing contractor evaluate it first.'
      },
      {
        question: 'Do insurance companies require roof cleaning?',
        answer:
          'Yes. Many insurance companies will require homeowners to have moss and algae removed from their roof. If the homeowner does not comply, the insurer can drop coverage entirely. A professional roof wash can satisfy that requirement and keep your policy active.'
      },
      {
        question: 'Does roof cleaning extend roof life?',
        answer:
          'It can. Moss, mold, and algae break down roofing materials over time, so removing them helps preserve the roof. There are many variables involved, so it is difficult to give an exact number, but regular cleaning is one of the best things you can do to protect your investment.'
      },
      {
        question: 'How long until I see full roof cleaning results?',
        answer:
          'It can take 4 to 6 months to see the final results. The organic growth changes color once it has been killed, but it takes time for it to dry out and fall away with help from rain and wind. If we do not get the results we are looking for, we will come back and retreat at no additional cost.'
      }
    ]
  },
  {
    name: 'Gutter Cleaning',
    faqs: [
      {
        question: 'How often should gutters be cleaned in NJ?',
        answer:
          'We recommend at least twice a year. If you have trees that shed leaves directly into your gutters, you may need more frequent cleanings to prevent buildup and clogs.'
      },
      {
        question: 'What problems do clogged gutters cause?',
        answer:
          'When gutters are clogged, water cannot be directed away from your home properly. Over time, this can lead to soil erosion around the foundation and even water intrusion into the home — both of which are expensive to repair.'
      },
      {
        question: 'Do you recommend gutter guards?',
        answer:
          'Honestly, no. Most people assume gutter guards are maintenance-free, but smaller debris still gets through and accumulates over time. We removed gutter guards for one of our clients during a roof wash and pulled out two 5-gallon buckets of leaf material that had essentially turned into dirt. After removal and cleaning, the customer told us the water leaking into his house stopped completely. He decided to keep them off.'
      }
    ]
  },
  {
    name: 'Preparation & Scheduling',
    faqs: [
      {
        question: 'What should I do before you arrive?',
        answer:
          'Please move any outdoor furniture, vehicles, potted plants, and pick up any pet droppings from the areas we will be working on. This helps us work efficiently and protects your belongings.'
      },
      {
        question: 'What is the best time of year for pressure washing in NJ?',
        answer:
          'April through September is the ideal window. The warmer months allow cleaning solutions to work most effectively and surfaces to dry properly after cleaning.'
      }
    ]
  }
]

const allFaqs = faqCategories.flatMap(cat => cat.faqs)

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(faq => ({
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
            <p className="text-white mt-8 mb-16 max-w-xl mx-auto">
              Real answers from our team about pressure washing, soft washing,
              roof cleaning, gutter maintenance, and how to prepare for your
              service.
            </p>
            <div className="w-full max-w-4xl mx-auto space-y-12 text-left">
              {faqCategories.map(category => (
                <div key={category.name}>
                  <h2 className="text-primary text-2xl mb-4">
                    {category.name}
                  </h2>
                  <Accordion type="multiple" className="w-full space-y-3">
                    {category.faqs.map(faq => (
                      <AccordionItem
                        value={faq.question}
                        key={faq.question}
                        className="border border-accent rounded-lg mb-0">
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
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
