import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { FaLightbulb, FaQuoteLeft } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import additionalServices from '@/lib/services/additionalServices'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const pageTitle =
  'Gutter & Roof Cleaning in Bergen & Essex County, NJ | Jones Pressure Washing'
const pageDescription =
  'Professional gutter cleaning, roof washing, and exterior maintenance in Bergen & Essex County, NJ. Honest advice, thorough service, free retreatment guarantee.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/additional'
  },
  keywords: [
    'gutter cleaning NJ',
    'roof cleaning NJ',
    'gutter cleaning Bergen County',
    'roof soft washing',
    'gutter guard removal',
    'roof moss removal NJ',
    'Bergen County exterior cleaning'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/additional',
    images: [
      {
        url: '/Gutter.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional gutter and exterior cleaning services in New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Gutter.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const businessPhone = ContactMap.get('phone') ?? '(973) 486-4403'
const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Gutter Cleaning and Roof Washing',
  name: 'Gutter Cleaning and Roof Washing Services',
  description: pageDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: BusinessInfo.name,
    telephone: businessPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BusinessInfo.streetAddress,
      addressLocality: BusinessInfo.addressLocality,
      addressRegion: BusinessInfo.addressRegion,
      postalCode: BusinessInfo.postalCode,
      addressCountry: BusinessInfo.addressCountry
    },
    image: `${baseUrl}/logo-black.jpg`,
    priceRange: '$$'
  },
  areaServed: [
    { '@type': 'County', name: 'Bergen County' },
    { '@type': 'County', name: 'Essex County' }
  ],
  offers: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Gutter Cleaning' },
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '149' }
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Roof Cleaning' },
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '299' }
    }
  ],
  image: `${baseUrl}/Gutter.jpg`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/additional`
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: baseUrl
    },
    result: {
      '@type': 'Reservation',
      name: 'Additional Services Booking'
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
      name: 'Additional Services',
      item: `${baseUrl}/services/additional`
    }
  ]
}

export default function AdditionalServicesPage() {
  return (
    <>
      <Script
        id="jpw-additional-services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-additional-services-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          img="/Gutter.jpg"
          h1={<span className="text-primary">Additional Services</span>}
          description="Beyond pressure and soft washing — gutter cleaning, roof washing, and seasonal lighting for homes in Bergen and Essex County."
          dimHeroContent
          height="h-[75vh]"
        />

        {/* Gutter Cleaning */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">Gutter Cleaning</h2>
              <p className="text-white text-center text-lg mb-8">
                Clogged gutters prevent water from being directed away from your
                home properly. Over time, this leads to erosion issues and water
                intrusion — problems that are far more expensive to fix than
                routine cleaning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">Debris Removal</h3>
                  <p className="text-secondary-lite text-sm">
                    By hand or blower — we clear out leaves, dirt, and buildup so
                    water flows freely again.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">Downspout Flush</h3>
                  <p className="text-secondary-lite text-sm">
                    We flush every downspout to make sure water has a clear path
                    away from your foundation.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Visual Inspection
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    We check for damage, sagging, or separation so you know the
                    condition of your gutters before we leave.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Pipe Jetting if Needed
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    For stubborn clogs deeper in the downspout system, we use
                    pipe jetting to clear the line completely.
                  </p>
                </div>
              </div>
              <p className="text-secondary-lite text-center text-sm">
                We recommend gutter cleaning{' '}
                <span className="text-primary font-semibold">
                  at least twice a year
                </span>
                . If you have trees that shed directly into your gutters, you may
                need it more often.
              </p>
            </div>
          </div>
        </section>

        {/* Gutter Guard Opinion */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">
                Our Honest Take on Gutter Guards
              </h2>
              <p className="text-secondary-lite text-center mb-8">
                We do not recommend gutter guards. Most people assume they
                eliminate the need for maintenance entirely — but smaller debris
                still gets through and accumulates over time, leading to the same
                water intrusion problems they were meant to prevent.
              </p>
              <div className="bg-gray border border-accent rounded-lg p-8">
                <div className="flex flex-col items-center gap-6 text-center">
                  <FaQuoteLeft size={28} className="text-primary" />
                  <p className="text-white text-lg italic">
                    &quot;We removed gutter guards for a client during a roof
                    wash and pulled out two 5-gallon buckets of leaf material
                    that had literally turned into dirt. The customer decided to
                    keep the guards off — and later told us he has not had any
                    water leaking into his house since.&quot;
                  </p>
                  <span className="text-primary font-semibold">
                    Kyle — JPW Owner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roof Cleaning */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-center mb-6">Roof Cleaning</h2>
              <p className="text-white text-center text-lg mb-8">
                We use{' '}
                <Link
                  href="/services/soft-washing"
                  className="text-primary hover:underline">
                  soft washing
                </Link>{' '}
                only for roof cleaning — never high pressure. We remove moss,
                mold, and the black streaks caused by algae without damaging your
                shingles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Roof Types We Clean
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    Asphalt shingle, tile, metal, and cedar shake — as long as
                    the roof is in good condition. If we see damage, we will let
                    you know and recommend a roofing contractor if needed.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Extends Roof Life
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    Roof cleaning can extend the life of your roof by removing
                    organic growth before it causes permanent damage. We can only
                    clean and prevent — not repair what has already been done.
                  </p>
                </div>
                <div className="bg-gray border border-accent rounded-lg p-6">
                  <h3 className="text-white text-base mb-2">
                    Insurance Requirements
                  </h3>
                  <p className="text-secondary-lite text-sm">
                    Many insurance companies require roofs to be free of moss. If
                    a homeowner does not comply, they can be dropped from
                    coverage entirely. Our roof wash satisfies those
                    requirements.
                  </p>
                </div>
              </div>

              {/* Results Timeline */}
              <div className="bg-gray border border-accent rounded-lg p-8 text-center">
                <h3 className="text-white text-base mb-3">
                  What to Expect After Roof Cleaning
                </h3>
                <p className="text-secondary-lite text-sm mb-4">
                  Full results can take{' '}
                  <span className="text-primary font-semibold">
                    4 to 6 months
                  </span>{' '}
                  depending on weather. The organics change color when they have
                  been killed, then dry out and fall off naturally with help from
                  rain and wind.
                </p>
                <p className="text-white text-sm font-semibold">
                  If we do not get the results we are looking for, we come back
                  and retreat at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Lighting */}
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <div
                id="holiday-lighting"
                className="bg-gray border border-accent rounded-lg p-8 flex flex-col items-center gap-4 text-center">
                <FaLightbulb size={36} className="text-primary" />
                <h2 className="text-white text-xl mb-0">
                  Holiday Lighting Assistance
                </h2>
                <p className="text-secondary-lite text-sm">
                  Let us safely install, hang, and remove your holiday lights so
                  you can enjoy the season without the stress. Available
                  seasonally (Oct–Jan).
                </p>
                <Link
                  href="/services/holiday-lighting"
                  className="text-primary text-sm hover:underline">
                  Learn more about holiday lighting &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServiceHighlights
          h2="Why Regular Maintenance Matters"
          highlights={additionalServices.highlights}
          altCard
        />
        <ServiceCta
          buttonLabel="Contact Us"
          cta="Get an Instant Quote"
          description=""
          header="Ready to Protect Your Home?"
          showAfter
        />
      </main>
    </>
  )
}
