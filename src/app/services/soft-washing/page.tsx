import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import softWashingServices from '@/lib/services/softWashingServices'
import { BusinessInfo } from '@/lib/constants'

const pageTitle = 'Professional Soft Washing | Bergen & Essex County, NJ'
const pageDescription =
  'Professional soft washing for siding, roofs, and delicate surfaces in Bergen & Essex County, NJ. Low pressure, specialized solutions, lasting results.'
const serviceImagePath = '/Jones_Pressure_Washing_Roof_Cleaning.png'
const baseUrl = 'https://www.jonespressurewashingnj.com'
const serviceImageUrl = `${baseUrl}/Jones_Pressure_Washing_Roof_Cleaning.png`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/soft-washing'
  },
  keywords: [
    'soft washing',
    'roof cleaning',
    'house washing',
    'vinyl siding cleaning',
    'stucco cleaning NJ',
    'Bergen County NJ soft washing',
    'Essex County NJ soft washing'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/soft-washing',
    images: [
      {
        url: serviceImagePath,
        width: 1200,
        height: 630,
        alt: 'Soft washing professional cleaning a New Jersey roof'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [serviceImagePath]
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Soft Washing',
  name: 'Professional Soft Washing Services',
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
      minPrice: '249'
    }
  },
  image: serviceImageUrl,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/soft-washing`
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: baseUrl
    },
    result: {
      '@type': 'Reservation',
      name: 'Soft Washing Service Booking'
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
      name: 'Soft Washing',
      item: `${baseUrl}/services/soft-washing`
    }
  ]
}

function HeroExplanation() {
  return (
    <section className="bg-black text-center">
      <div className="space-y-6 py-8 md:py-12 lg:py-16 max-w-3xl mx-auto px-6">
        <h2>What is Soft Washing?</h2>
        <p className="text-lg text-white">
          Soft washing uses low pressure and specialized cleaning solutions to
          do all the cleaning in areas where high pressure would cause more harm
          than good — like your roof, siding, and painted surfaces.
        </p>
        <p className="text-secondary-lite">
          Unlike{' '}
          <Link
            href="/services/pressure-washing"
            className="text-primary hover:underline">
            pressure washing
          </Link>
          , which relies on force, soft washing lets the cleaning solution do
          the work. It penetrates deeper into the surface to kill organic growth
          like moss, mold, and algae at the root — so results last longer than
          surface-level cleaning alone.
        </p>
      </div>
    </section>
  )
}

export default function SoftWashingServicePage() {
  return (
    <>
      <Script
        id="jpw-soft-washing-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-soft-washing-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          img="/Fence Cleaning.jpg"
          h1={
            <>
              Professional{' '}
              <span className="text-primary">Soft Washing Services</span> in New
              Jersey
            </>
          }
          description="Low-pressure cleaning with specialized solutions — for surfaces where high pressure would do more harm than good."
          explanation={<HeroExplanation />}
          height="h-[75vh]"
        />
        <ServiceExamples
          h2="Some surfaces we soft wash include"
          examples={softWashingServices.services}
        />

        {/* Cleaning Solutions & Safety */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">
                Our Cleaning Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Tailored Solutions
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    We use different cleaning solutions depending on the job.
                    Every situation is different — sometimes a more aggressive
                    solution is required for heavily soiled areas. We always
                    start with the least aggressive method first and work our
                    way up if needed.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Safe for Your Property
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    After every project, we apply a chemical neutralizing
                    solution to minimize any negative effects on surrounding
                    plants, pets, and people. Your landscape and family&apos;s
                    safety are always a priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surface-Specific Detail */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">
                Surface-Specific Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">Vinyl Siding</h3>
                  <p className="text-secondary-lite text-sm">
                    We softwash or downstream vinyl siding. The most common
                    issues we see are physical damage from landscaping and
                    oxidation caused by UV light, age, or neglect.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">Stucco Homes</h3>
                  <p className="text-secondary-lite text-sm">
                    Similar process to vinyl, but more time-consuming and
                    requires a stronger mix of cleaning solution to get into the
                    textured surface properly.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">Roof Washing</h3>
                  <p className="text-secondary-lite text-sm">
                    Roof cleaning uses a higher concentration of solution. We
                    typically pair it with a house wash so you do not end up
                    with clean spots among dirty areas from overspray and
                    runoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceHighlights
          h2="Why Soft Washing Matters"
          highlights={softWashingServices.highlights}
          altCard
        />

        {/* Cities We Serve */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary mb-6">Cities We Serve</h2>
              <p className="text-secondary-lite mb-8">
                We provide professional soft washing services across Bergen and
                Essex County. Select your city to learn more about our local
                service.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Montclair', slug: 'montclair' },
                  { name: 'Livingston', slug: 'livingston' },
                  { name: 'Ridgewood', slug: 'ridgewood' },
                  { name: 'Fort Lee', slug: 'fort-lee' },
                  { name: 'Cliffside Park', slug: 'cliffside-park' },
                  { name: 'Bloomfield', slug: 'bloomfield' }
                ].map(city => (
                  <Link
                    key={city.slug}
                    href={`/services/soft-washing/${city.slug}`}
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
          header="Ready to Safely Clean Your Home Exterior?"
          description=""
          showAfter
          showSocial
          cta="Get an Instant Quote"
          buttonLabel="Contact Us"
        />
      </main>
    </>
  )
}
