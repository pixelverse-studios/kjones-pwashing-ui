import type { Metadata } from 'next'
import Script from 'next/script'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCta from '@/components/services/ServiceCta'
import pressureWashingServices from '@/lib/services/pressureWashingServices'

const pageTitle =
  'Pressure Washing in Bergen & Essex County, NJ | Jones Pressure Washing'
const pageDescription =
  'Restore curb appeal with Jones Pressure Washing. We deliver residential and commercial pressure washing for driveways, walkways, patios, and concrete surfaces across Bergen and Essex County, NJ.'

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
    'Essex County NJ pressure washing'
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
          description="Safe, effective cleaning for homes and businesses in Bergen, Essex, and surrounding counties."
        />
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
        <ServiceProcess
          header="How Our Pressure Washing Process Works"
          steps={pressureWashingServices.steps}
        />
        <ServiceCta
          header="Ready to Restore Your Property?"
          description="We are ready to make your home or business look like new."
          cta="Request a Free Estimate"
          buttonLabel="Contact Us"
        />
      </main>
    </>
  )
}
