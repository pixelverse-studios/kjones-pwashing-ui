import type { Metadata } from 'next'
import Script from 'next/script'

import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/Services'
import TrustSection from '@/components/home/TrustSection'
import ServiceAreas from '@/components/home/ServiceAreas'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const pageTitle =
  'Jones Pressure Washing | Pressure & Soft Washing in Bergen & Essex County, NJ'
const pageDescription =
  'Jones Pressure Washing delivers residential and commercial pressure washing and soft washing services across Bergen and Essex County, NJ. Licensed, insured, and committed to spotless results.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/'
  },
  keywords: [
    'pressure washing',
    'soft washing',
    'power washing',
    'Bergen County NJ',
    'Essex County NJ',
    'exterior cleaning',
    'house washing',
    'Jones Pressure Washing'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/',
    siteName: 'Jones Pressure Washing',
    locale: 'en_US',
    images: [
      {
        url: '/Homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Jones Pressure Washing technician cleaning a New Jersey home exterior'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Homepage.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const businessPhone = ContactMap.get('phone') ?? '(973) 486-4403'

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://www.jonespressurewashingnj.com/#localbusiness',
  name: 'Jones Pressure Washing',
  image: 'https://www.jonespressurewashingnj.com/logo-black.jpg',
  logo: 'https://www.jonespressurewashingnj.com/logo-black.jpg',
  url: 'https://www.jonespressurewashingnj.com',
  telephone: businessPhone,
  description: pageDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BusinessInfo.streetAddress,
    addressLocality: BusinessInfo.addressLocality,
    addressRegion: BusinessInfo.addressRegion,
    postalCode: BusinessInfo.postalCode,
    addressCountry: BusinessInfo.addressCountry
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BusinessInfo.geo.latitude,
    longitude: BusinessInfo.geo.longitude
  },
  hasMap: BusinessInfo.googleMapsUrl,
  sameAs: BusinessInfo.sameAs,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bergen County, NJ' },
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' }
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Residential Pressure Washing',
      url: 'https://www.jonespressurewashingnj.com/services/pressure-washing'
    },
    {
      '@type': 'Offer',
      name: 'Soft Washing',
      url: 'https://www.jonespressurewashingnj.com/services/soft-washing'
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="jpw-home-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ServiceAreas />
      </main>
    </>
  )
}
