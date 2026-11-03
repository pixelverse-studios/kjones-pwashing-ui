import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BusinessInfo, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'
import { FaLightbulb, FaRegSnowflake, FaStar } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import { Button } from '@/components/ui/button'
import { ServiceHighlightType } from '@/lib/types/services'

const pageTitle = 'Holiday Lighting | Bergen & Essex County, NJ'
const pageDescription =
  'Seasonal Christmas light installation for homeowners in Essex County and the Bergen County area through Paramus. Contact Jones Pressure Washing to discuss your display.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting'
  },
  keywords: [
    'holiday lighting installation',
    'Christmas light installation Bergen County',
    'Christmas light installation Essex County',
    'holiday lighting NJ',
    'Jones Pressure Washing holiday lighting'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting'
  },
  twitter: {
    card: 'summary',
    title: pageTitle,
    description: pageDescription
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  name: 'Seasonal Christmas Light Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BusinessInfo.addressLocality,
      addressRegion: BusinessInfo.addressRegion,
      postalCode: BusinessInfo.postalCode,
      addressCountry: BusinessInfo.addressCountry
    },
    image: 'https://www.jonespressurewashingnj.com/logo-black.jpg'
  },
  areaServed: [
    {
      '@type': 'Place',
      name: 'Paramus and Bergen County communities south of Paramus, New Jersey'
    },
    {
      '@type': 'County',
      name: 'Essex County'
    }
  ],
  description:
    'Seasonal Christmas and holiday light installation, maintenance, removal, and storage for homeowners.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.jonespressurewashingnj.com/services/holiday-lighting'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Holiday Lighting',
      item: `${baseUrl}/services/holiday-lighting`
    }
  ]
}

const lightingHighlights: ServiceHighlightType[] = [
  {
    Icon: FaStar,
    header: 'Materials and Installation',
    description:
      'Jones Pressure Washing supplies the installation materials and installs seasonal lights at your home.'
  },
  {
    Icon: FaRegSnowflake,
    header: 'In-Season Maintenance',
    description:
      'Maintenance is included during the season. Contact us if your display needs attention so we can review the issue.'
  },
  {
    Icon: FaLightbulb,
    header: 'Removal and Storage',
    description:
      'Removal and storage are included after the season. We will discuss the terms for your project when preparing a quote.'
  }
]

const seasonSteps = [
  {
    title: 'Send your request',
    description:
      'Use the holiday lighting form to tell us your town, the parts of your home you want lit, and your preferred timing. Select the phone-call option if you would rather talk it through.'
  },
  {
    title: 'Free estimate',
    description:
      'We review your request and prepare a free estimate. Most estimates can be done virtually, without a visit, and there is no charge until you agree to the job.'
  },
  {
    title: 'Installation',
    description:
      'We supply the materials and install lights on your rooflines, windows, and doors and entryways. If something needs attention while the display is up, contact us.'
  },
  {
    title: 'End of season',
    description: 'After the holidays, we take the display down and store it.'
  }
]

const planningTips = [
  {
    title: 'Decide what you want lit',
    description:
      'Walk around the front of your home and note which rooflines, windows, and doors or entryways you want lit. Include them in your request.'
  },
  {
    title: 'Note your outdoor outlets',
    description:
      'If you know where your exterior outlets are, you can mention them in your request.'
  },
  {
    title: 'Book by December 10',
    description:
      'To have lights installed this season, send your request by December 10.'
  }
]

const faqs = [
  {
    question: 'Where do you install Christmas lights in New Jersey?',
    answer:
      'We install seasonal holiday lighting for homeowners throughout Essex County, and in Paramus and Bergen County communities south of Paramus. If your town is not listed, include it in your request and ask about coverage.'
  },
  {
    question: 'What parts of my home do you decorate?',
    answer: 'We install lights on rooflines, windows, and doors and entryways.'
  },
  {
    question: 'When do I need to book by?',
    answer:
      'Send your request by December 10 to have lights installed this season.'
  },
  {
    question: 'Is the estimate free?',
    answer:
      'Yes. Estimates are free, most can be done virtually, and there is no charge until you agree to the job.'
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes. Jones Pressure Washing is fully insured for all of its services, including holiday lighting.'
  },
  {
    question: 'Do you decorate businesses or commercial properties?',
    answer:
      'Our holiday lighting service is for homeowners. It does not cover commercial, storefront, or event lighting.'
  },
  {
    question: 'How much does Christmas light installation cost?',
    answer:
      'Every home and display is different, so we do not publish prices. Send us your town, the areas you want lit, and your timing, and we will prepare a free estimate for your property.'
  },
  {
    question: 'Do I need to know exactly what I want before I ask?',
    answer:
      'No. Share your ideas, even rough ones, in your request and we will discuss them with you.'
  },
  {
    question: 'Which page should I use, Bergen or Essex?',
    answer:
      'Use the Essex County page if you live anywhere in Essex County. Use the Bergen County page if you live in Paramus or a Bergen County community south of Paramus. Both lead to the same holiday lighting request form.'
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
}

function SeasonSteps() {
  return (
    <section className="bg-black" aria-labelledby="season-heading">
      <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
        <div className="space-y-4">
          <h2 id="season-heading">
            How a holiday lighting season{' '}
            <span className="text-primary">works with us</span>
          </h2>
          <p className="max-w-3xl">
            Christmas light installation is more than putting lights up once.
            Here is what happens from your first request to the end of the
            season.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {seasonSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-white/10 bg-white/5 p-6">
              <span
                aria-hidden="true"
                className="font-poppins text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-white">{step.title}</h3>
              <p className="mt-3 text-sm md:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function PlanningTips() {
  return (
    <section className="bg-secondary" aria-labelledby="planning-heading">
      <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
        <div className="space-y-4">
          <h2 id="planning-heading">
            Planning your <span className="text-primary">holiday display</span>
          </h2>
          <p className="max-w-3xl">
            A few minutes of planning makes your request easier to quote and
            helps the display suit your home.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {planningTips.map(tip => (
            <div key={tip.title} className="border-l-2 border-primary pl-5">
              <h3 className="text-white">{tip.title}</h3>
              <p className="mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HolidayFaqs() {
  return (
    <section className="bg-black" aria-labelledby="holiday-faq-heading">
      <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
        <h2 id="holiday-faq-heading">
          Holiday lighting <span className="text-primary">questions</span>
        </h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map(faq => (
            <div key={faq.question} className="py-6">
              <h3 className="text-xl text-primary">{faq.question}</h3>
              <p className="mt-3">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeasonalDetails() {
  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto grid gap-8 px-6 py-16 md:grid-cols-[1.4fr,1fr] items-center">
        <div className="space-y-6">
          <h2 className="text-white">
            Seasonal holiday lighting{' '}
            <span className="text-primary">for your home</span>
          </h2>
          <p>
            We provide the installation materials and handle installation,
            in-season maintenance, removal, and storage for residential
            displays.
          </p>
          <p>
            Tell us about your home and the display you have in mind. We will
            discuss the details and current availability when you contact us.
          </p>
        </div>
        <div className="bg-secondary p-6 border border-primary rounded-lg space-y-4">
          <h3 className="text-white">
            Ask About Your Holiday Lighting Project
          </h3>
          <p>
            Share your town, property details, display ideas, and preferred
            timing through the holiday lighting form. Select the phone-call
            option if you would like us to call.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="ctaPrimary" size="cta">
              <Link href="/contact?service=holiday-lighting">
                Request Christmas Light Installation
              </Link>
            </Button>
            <Button asChild variant="ctaOutline" size="cta">
              <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HolidayLightingPage() {
  return (
    <>
      <script
        id="jpw-holiday-lighting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c')
        }}
      />
      <script
        id="jpw-holiday-lighting-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        id="jpw-holiday-lighting-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')
        }}
      />
      <main>
        <ServiceHero
          img="/holiday-lighting-hero.jpg"
          imgAlt="Two-story home decorated with colorful roofline lights and warm holiday wreaths at dusk"
          imageOverlayClassName="bg-black/40 lg:bg-gradient-to-r lg:from-black/65 lg:via-black/40 lg:to-black/20"
          h1={
            <>
              Seasonal <span className="text-primary">Holiday Lighting</span>{' '}
              for Your Home
            </>
          }
          description="Jones Pressure Washing installs seasonal Christmas and holiday lights for homeowners. Materials, maintenance, removal, and storage are included."
          cta="Request Christmas Light Installation"
          ctaHref="/contact?service=holiday-lighting"
          dimHeroContent
          height="h-[70vh]"
          explanation={<SeasonalDetails />}
        />
        <ServiceHighlights
          h2="What the Seasonal Service Includes"
          description="The confirmed service covers installation materials, installation, maintenance, removal, and storage. We will explain the details for your property when preparing a quote."
          highlights={lightingHighlights}
          altCard
          altBg
        />
        <SeasonSteps />
        <PlanningTips />
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
            <h2>Find Holiday Lighting in Your Area</h2>
            <p>
              We serve homeowners throughout Essex County and in Paramus and
              Bergen County communities south of Paramus. Choose your county
              page for local details, then contact us to confirm coverage and
              current availability for your home.
            </p>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/services/holiday-lighting/bergen-county"
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <h3 className="text-primary">
                    Bergen County Holiday Lighting
                  </h3>
                  <p className="mt-3 text-sm md:text-base">
                    For homes in Paramus and communities south of Paramus. Check
                    local coverage and service details.
                  </p>
                  <span className="mt-5 inline-block font-semibold text-primary underline underline-offset-4 group-hover:text-white">
                    View service area →
                  </span>
                </Link>
                <Link
                  href="/services/holiday-lighting/essex-county"
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <h3 className="text-primary">
                    Essex County Holiday Lighting
                  </h3>
                  <p className="mt-3 text-sm md:text-base">
                    For homeowners throughout the county. Check local coverage
                    and service details.
                  </p>
                  <span className="mt-5 inline-block font-semibold text-primary underline underline-offset-4 group-hover:text-white">
                    View service area →
                  </span>
                </Link>
              </div>
              <div className="mx-auto max-w-56">
                <Image
                  src="/NjGraphic.png"
                  alt="Map of New Jersey with Bergen County highlighted in gold"
                  width={285}
                  height={508}
                  sizes="(min-width: 1024px) 176px, 112px"
                  loading="lazy"
                  className="mx-auto h-auto w-28 lg:w-44"
                />
              </div>
            </div>
          </div>
        </section>
        <HolidayFaqs />
        <ServiceCta
          header="Discuss Holiday Lighting for Your Home"
          description="Tell us about your location, display ideas, and preferred timing so we can discuss the service and current availability."
          cta="Request Christmas Light Installation"
          ctaHref="/contact?service=holiday-lighting"
          buttonLabel={`Call ${PHONE_DISPLAY}`}
          secondaryHref={PHONE_HREF}
        />
      </main>
    </>
  )
}
