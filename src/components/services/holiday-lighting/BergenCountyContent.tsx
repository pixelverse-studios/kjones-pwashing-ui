import Link from 'next/link'

import ServiceCta from '@/components/services/ServiceCta'
import ServiceHero from '@/components/services/ServiceHero'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

const contactHref = '/contact?service=holiday-lighting'

const inclusions = [
  {
    title: 'Materials and installation',
    description:
      'Jones Pressure Washing supplies the materials for your seasonal display and installs the lights at your home.'
  },
  {
    title: 'In-season maintenance',
    description:
      'Maintenance is included. Contact us if your display needs attention so we can review the issue.'
  },
  {
    title: 'Removal and storage',
    description:
      'Removal and storage are included after the season. We will explain the terms for your project when preparing a quote.'
  }
]

const faqs = [
  {
    question: 'Which Bergen County areas do you serve?',
    answer:
      'We serve homeowners in Paramus and Bergen County communities south of Paramus. Include your town and property details in the contact request so we can confirm coverage.'
  },
  {
    question: 'Is this seasonal or permanent lighting?',
    answer:
      'This page covers seasonal Christmas and holiday light installation for homeowners. It does not describe permanent lighting or other outdoor lighting services.'
  },
  {
    question: 'Do you supply the lights?',
    answer:
      'Jones Pressure Washing supplies the installation materials. Ask about the specific products and terms for your display when requesting a quote.'
  },
  {
    question: 'Are maintenance, removal, and storage included?',
    answer:
      'Yes. All three are included in the seasonal service. We will discuss the scope and timing for your property during quoting.'
  },
  {
    question: 'When should I request installation?',
    answer:
      'Contact us to ask about current availability. Installation timing depends on your project and the schedule when you inquire.'
  },
  {
    question: 'How can I request a quote or phone call?',
    answer: `Use the contact form to describe your home, town, desired display, and timing. Ask for a phone call in the project description or call ${PHONE_DISPLAY} directly.`
  }
]

export default function BergenCountyContent() {
  return (
    <main className="bg-black text-white">
      <ServiceHero
        img="/Holiday%20Lights%20Installation%20at%20Twilight.png"
        h1={
          <>
            Christmas Light Installation in{' '}
            <span className="text-primary">Bergen County, NJ</span>
          </>
        }
        description="Jones Pressure Washing installs seasonal Christmas and holiday lights for homeowners in Paramus and Bergen County communities south of Paramus. Materials, maintenance, removal, and storage are included."
        cta="Request Christmas Light Installation"
        ctaHref={contactHref}
        dimHeroContent
        height="h-[70vh]"
      />

      <section className="py-16 md:py-24" aria-labelledby="bergen-included">
        <div className="mx-auto max-w-custom px-6">
          <div className="mb-10 max-w-3xl">
            <h2 id="bergen-included" className="mb-5">
              What the seasonal service includes
            </h2>
            <p className="text-white/80">
              We supply the installation materials and handle installation,
              in-season maintenance, removal, and storage for your home. Details
              for your display are discussed when we prepare your quote.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {inclusions.map(inclusion => (
              <div
                key={inclusion.title}
                className="rounded-lg border border-primary/50 bg-gray p-8">
                <h3 className="mb-4 text-xl text-primary">{inclusion.title}</h3>
                <p className="text-white/80">{inclusion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-secondary py-16 md:py-24"
        aria-labelledby="bergen-area">
        <div className="mx-auto grid max-w-custom gap-10 px-6 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="bergen-area" className="mb-5">
              Holiday lighting in Paramus and south Bergen County
            </h2>
            <p className="text-white/80">
              This Bergen County service area includes Paramus and communities
              south of Paramus. Tell us your town and property location when you
              contact us so we can confirm coverage for your home.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl text-primary">
              Planning a seasonal display?
            </h3>
            <p className="mb-6 text-white/80">
              Tell us about your home, the display you have in mind, and when
              you hope to have it installed. We will discuss the project and
              current availability with you. This page covers seasonal lighting
              for homeowners; it does not offer permanent lighting.
            </p>
            <Link
              href={contactHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-center font-semibold text-black hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Request Christmas Light Installation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="bergen-faqs">
        <div className="mx-auto max-w-custom px-6">
          <h2 id="bergen-faqs" className="mb-10">
            Bergen County holiday lighting questions
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map(faq => (
              <article
                key={faq.question}
                className="rounded-lg border border-white/15 bg-gray p-8">
                <h3 className="mb-4 text-xl text-primary">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta
        header="Discuss Holiday Lighting for Your Bergen County Home"
        description="Share your location and display ideas so we can discuss the service and current availability."
        cta="Request Christmas Light Installation"
        ctaHref={contactHref}
        buttonLabel={`Call ${PHONE_DISPLAY}`}
        secondaryHref={PHONE_HREF}
      />
    </main>
  )
}
