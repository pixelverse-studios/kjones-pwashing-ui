'use client'
import Head from 'next/head'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCta from '@/components/services/ServiceCta'
import pressureWashingServices from '@/lib/services/pressureWashingServices'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pressure Washing',
  name: 'Professional Pressure Washing Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(555) 555-1234',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergen County',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    image: 'https://jonespressurewashing.com/images/logo.png',
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
  description:
    'Professional pressure washing services for driveways, walkways, patios, and concrete surfaces in Bergen and Essex County, NJ. Our high-pressure cleaning effectively removes stubborn dirt, grime, oil stains, and mildew.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: '199'
    }
  },
  image: 'https://jonespressurewashing.com/images/pressure-washing.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://jonespressurewashing.com/services/pressure-washing'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://jonespressurewashing.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Pressure Washing Service Booking'
    }
  }
}

export default function PressureWashingServicePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
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
