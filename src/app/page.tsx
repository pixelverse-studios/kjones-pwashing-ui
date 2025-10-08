import type { Metadata } from 'next'
import Script from 'next/script'

import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/Services'
import TrustSection from '@/components/home/TrustSection'
import ServiceAreas from '@/components/home/ServiceAreas'

const pageTitle =
  'Jones Pressure Washing | Pressure & Soft Washing in Bergen & Essex County, NJ'
const pageDescription =
  'Jones Pressure Washing delivers residential and commercial pressure washing, soft washing, and exterior cleaning across Bergen and Essex County, NJ. Licensed, insured, and committed to spotless results.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/'
  },
  keywords: [
    'pressure washing',
    'soft washing',
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

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://www.jonespressurewashing.com/#localbusiness',
  name: 'Jones Pressure Washing',
  image: 'https://www.jonespressurewashing.com/logo-black.jpg',
  logo: 'https://www.jonespressurewashing.com/logo-black.jpg',
  url: 'https://www.jonespressurewashing.com',
  telephone: '(973) 486-4403',
  description: pageDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bergen County',
    addressRegion: 'NJ',
    addressCountry: 'US'
  },
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
      url: 'https://www.jonespressurewashing.com/services/pressure-washing'
    },
    {
      '@type': 'Offer',
      name: 'Soft Washing',
      url: 'https://www.jonespressurewashing.com/services/soft-washing'
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
