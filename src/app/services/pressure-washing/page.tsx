import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCta from '@/components/services/ServiceCta'
import pressureWashingServices from '@/lib/services/pressureWashingServices'
import { BusinessInfo } from '@/lib/constants'

const pageTitle = 'Pressure Washing Services | Bergen & Essex County, NJ'
const pageDescription =
  'Professional pressure washing for driveways, patios, and concrete in Bergen & Essex County, NJ. We start low-pressure and work up — safe, thorough results.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/pressure-washing'
  },
  keywords: [
    'pressure washing',
    'driveway cleaning',
    'commercial pressure washing',
    'Bergen County NJ pressure washing',
    'Essex County NJ pressure washing',
    'concrete cleaning NJ',
    'patio pressure washing'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/pressure-washing',
    images: [
      {
        url: '/PressureBG.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pressure washing service cleaning a driveway in New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/PressureBG.jpeg']
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
  serviceType: 'Pressure Washing',
  name: 'Professional Pressure Washing Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(973) 486-4403',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BusinessInfo.addressLocality,
      addressRegion: BusinessInfo.addressRegion,
      postalCode: BusinessInfo.postalCode,
      addressCountry: BusinessInfo.addressCountry
    },
    image: `${baseUrl}/logo-black.jpg`,
    priceRange: '$$'
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Bergen County'
    },
    {
      '@type': 'County',
      name: 'Essex County'
    }
  ],
  description: pageDescription,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: '199'
    }
  },
  image: `${baseUrl}/PressureBG.jpeg`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/pressure-washing`
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: baseUrl
    },
    result: {
      '@type': 'Reservation',
      name: 'Pressure Washing Service Booking'
    }
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
      name: 'Pressure Washing',
      item: `${baseUrl}/services/pressure-washing`
    }
  ]
}

export default function PressureWashingServicePage() {
  return (
    <>
      <Script
        id="jpw-pressure-washing-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-pressure-washing-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          img="/PressureBG.jpeg"
          h1={
            <>
              Professional{' '}
              <span className="text-primary">Pressure Washing Services</span> in
              New Jersey
            </>
          }
          description="We might not be the cheapest option, but that allows us to take our time and pay attention to the small details — instead of rushing to hit a number."
        />

        {/* When to Choose Pressure Washing */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary mb-6">
                When to Choose Pressure Washing
              </h2>
              <p className="text-white text-lg mb-4">
                Pressure washing is the right choice for hard surfaces —
                concrete, stone, and pavers. Anything that does not require a
                delicate touch. We also use controlled, lighter pressure for
                wood restoration on decks and fences.
              </p>
              <p className="text-secondary-lite">
                We always start at a lower pressure and increase only if needed.
                We can always add more, but this approach minimizes the chance
                for damage that can result from applying too much pressure.
              </p>
            </div>
          </div>
        </section>

        <ServiceExamples
          h2="Pressure Washing for Homes"
          description="From driveways to pool decks, we remove years of grime, mold and weather damage using safe, effective methods tailored for residential surfaces."
          examples={pressureWashingServices.services}
        />
        <ServiceHighlights
          h2="Pressure Washing for Businesses"
          description="Keep your property looking professional with our commercial pressure
          washing services. We clean storefronts, sidewalks, loading zones, and
          building exteriors - all with minimal disruption to your day-to-day
          operations"
          highlights={pressureWashingServices.highlights}
          altCard={false}
        />

        {/* What We Won't Pressure Wash */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">
                What We Won&apos;t Pressure Wash
              </h2>
              <p className="text-secondary-lite text-center mb-8">
                Knowing what not to pressure wash is just as important as
                knowing what to. We are upfront about our limits because your
                property&apos;s safety comes first.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Roofs &amp; Siding
                  </h3>
                  <p className="text-secondary-lite text-sm mb-3">
                    We will not use high pressure on roofs, vinyl siding, wood
                    siding, or Hardie board. These surfaces require a gentler
                    approach.
                  </p>
                  <Link
                    href="/services/soft-washing"
                    className="text-primary text-sm hover:underline">
                    Learn about our soft washing service &rarr;
                  </Link>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Asphalt Driveways
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    High pressure can damage asphalt surfaces. We recommend
                    having your asphalt driveway seal coated to restore a
                    like-new appearance instead.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Delicate Surfaces
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    Painted wood, stucco, and other sensitive materials get our{' '}
                    <Link
                      href="/services/soft-washing"
                      className="text-primary hover:underline">
                      soft wash treatment
                    </Link>{' '}
                    — low pressure with specialized cleaning solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Note */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary mb-4">Best Time to Schedule</h2>
              <p className="text-white">
                The ideal window for pressure washing in New Jersey is{' '}
                <span className="text-primary font-semibold">
                  April through September
                </span>
                . Warmer months allow cleaning solutions to work most
                effectively and surfaces to dry properly after service.
              </p>
            </div>
          </div>
        </section>

        <ServiceProcess
          header="How Our Pressure Washing Process Works"
          steps={pressureWashingServices.steps}
        />

        {/* Cities We Serve */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary mb-6">Cities We Serve</h2>
              <p className="text-secondary-lite mb-8">
                We provide professional pressure washing services across Bergen
                and Essex County. Select your city to learn more about our local
                service.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { name: 'Ridgewood', slug: 'ridgewood' },
                  { name: 'Wyckoff', slug: 'wyckoff' },
                  { name: 'Fort Lee', slug: 'fort-lee' },
                  { name: 'Cliffside Park', slug: 'cliffside-park' },
                  { name: 'Bloomfield', slug: 'bloomfield' }
                ].map(city => (
                  <Link
                    key={city.slug}
                    href={`/services/pressure-washing/${city.slug}`}
                    className="border border-white/10 bg-white/5 p-4 rounded-lg text-center transition-colors hover:border-primary hover:bg-primary/10">
                    <span className="text-white text-sm font-medium">
                      {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceCta
          header="Ready to Restore Your Property?"
          description="We are ready to make your home or business look like new."
          cta="Get an Instant Quote"
          buttonLabel="Contact Us"
          showSocial
        />
      </main>
    </>
  )
}
