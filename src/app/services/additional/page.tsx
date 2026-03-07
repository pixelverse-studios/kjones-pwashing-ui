import type { Metadata } from 'next'
import Script from 'next/script'
import { FaLightbulb, FaHouse } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import additionalServices from '@/lib/services/additionalServices'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const pageTitle = 'Deck, Fence & Gutter Cleaning | Bergen & Essex County, NJ'
const pageDescription =
  'Professional deck restoration, fence cleaning, gutter cleaning, and roof maintenance services across Bergen and Essex County, NJ. Jones Pressure Washing handles the extras.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/additional'
  },
  keywords: [
    'deck cleaning',
    'fence cleaning',
    'gutter cleaning',
    'roof cleaning',
    'deck restoration NJ',
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
  serviceType: 'Additional Cleaning Services',
  name: 'Specialized Exterior Cleaning Services',
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
      itemOffered: { '@type': 'Service', name: 'Deck Restoration' },
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '299' }
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Fence Cleaning' },
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '199' }
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Gutter Cleaning' },
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '149' }
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

function Explanation() {
  return (
    <section className="bg-black h-full">
      <div className="py-12 px-6 max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="h-full bg-secondary p-6 border border-primary rounded-lg flex flex-col gap-4">
          <FaHouse size={42} className="text-primary" />
          <h3 className="text-white">Roof & Gutter Cleaning</h3>
          <p>
            Remove debris, algae, and buildup from your roof and gutters to
            protect your home from water damage and costly repairs.
          </p>
        </div>
        <div
          id="holiday-lighting"
          className="h-full bg-secondary p-6 border border-primary rounded-lg flex flex-col gap-4">
          <FaLightbulb size={42} className="text-primary" />
          <h3 className="text-white">Holiday Lighting Assistance</h3>
          <p>
            Let us safely install, hang, and remove your holiday lights so you
            can enjoy the season without the stress. Available seasonally
            (Oct–Jan)
          </p>
        </div>
      </div>
    </section>
  )
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
          description="Low-pressure soft wash cleaning for siding, fences, roofs, and decks in Bergen, Essex, and surrounding counties."
          dimHeroContent
          explanation={<Explanation />}
          height="h-[75vh]"
        />

        <ServiceHighlights
          h2="Benefits of Adding These Services"
          highlights={additionalServices.highlights}
          altCard
          altBg
        />
        <ServiceCta
          buttonLabel="Contact Us"
          cta="Get an Instant Quote"
          description="Whether it's keeping water flowing or lighting up your home, we've got it covered."
          header="Let's Handle the Extras for You"
          showAfter
        />
      </main>
    </>
  )
}
