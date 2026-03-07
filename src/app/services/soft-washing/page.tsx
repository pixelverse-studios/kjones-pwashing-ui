import type { Metadata } from 'next'
import Script from 'next/script'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import softWashingServices from '@/lib/services/softWashingServices'

const pageTitle =
  'Soft Washing in Bergen & Essex County, NJ | Jones Pressure Washing'
const pageDescription =
  'Protect delicate exteriors with Jones Pressure Washing. Our soft washing service safely cleans siding, roofs, fences, and decks throughout Bergen and Essex County, NJ.'
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
      addressLocality: 'Bergen County',
      addressRegion: 'NJ',
      addressCountry: 'US'
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
      <div className="space-y-6 py-12 max-w-2xl mx-auto">
        <h2>What is Soft Washing?</h2>
        <p>
          Soft washing uses low-pressure water and eco-safe cleaning solutions
          to eliminate mold, algae, and grime from delicate surfaces. It's the
          ideal method for safely cleaning your home's exterior without the risk
          of damage caused by high-pressure washing.
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
          description="Low-pressure soft wash cleaning for siding, fences, roofs, and decks in Bergen, Essex, and surrounding counties."
          explanation={<HeroExplanation />}
          height="h-[75vh]"
        />
        <ServiceExamples
          h2="Some surfaces we soft wash include"
          examples={softWashingServices.services}
        />
        <ServiceHighlights
          h2="Why Soft Washing Matters"
          highlights={softWashingServices.highlights}
          altCard
        />
        <ServiceCta
          header="Ready to Safely Clean Your Home Exterior?"
          description=""
          showAfter
          cta="Get an Instant Quote"
          buttonLabel="Contact Us"
        />
      </main>
    </>
  )
}
