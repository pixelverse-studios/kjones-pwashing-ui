import type { Metadata } from 'next'
import Script from 'next/script'

import EssexCountyContent from '@/components/services/holiday-lighting/EssexCountyContent'
import { BusinessInfo } from '@/lib/constants'

const pageTitle = 'Essex County Holiday Lighting | Jones Pressure Washing'
const pageDescription =
  'Custom holiday lighting design, installation, maintenance, and takedown in Essex County, NJ — Montclair, Livingston, Short Hills, Maplewood, and more.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting/essex-county'
  },
  keywords: [
    'Essex County holiday lighting',
    'Montclair holiday lighting',
    'Short Hills Christmas light installation',
    'Maplewood holiday lighting',
    'Essex County Christmas lights'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting/essex-county',
    images: [
      {
        url: '/Holiday%20Lights%20Installation%20at%20Twilight.png',
        width: 1200,
        height: 630,
        alt: 'Essex County home with custom holiday lighting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Holiday%20Lights%20Installation%20at%20Twilight.png']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const cityHighlights = [
  { name: 'Montclair' },
  { name: 'Livingston' },
  { name: 'Short Hills' },
  { name: 'Millburn' },
  { name: 'Maplewood' },
  { name: 'South Orange' },
  { name: 'West Orange' },
  { name: 'Verona' },
  { name: 'Cedar Grove' },
  { name: 'Glen Ridge' },
  { name: 'Bloomfield' },
  { name: 'Nutley' },
  { name: 'Belleville' },
  { name: 'Roseland' },
  { name: 'Essex Fells' },
  { name: 'North Caldwell' },
  { name: 'West Caldwell' },
  { name: 'Caldwell' },
  { name: 'Fairfield' },
  { name: 'Newark Ironbound' },
  { name: 'East Orange' },
  { name: 'Orange' },
  { name: 'Irvington' }
]

const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  name: 'Essex County Holiday Lighting Design and Installation',
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
    image: 'https://www.jonespressurewashingnj.com/logo-black.jpg',
    priceRange: '$$'
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Essex County'
    },
    ...cityHighlights.map(city => ({
      '@type': 'City',
      name: city.name.replace(' & ', ' and ')
    }))
  ],
  description:
    'Essex County holiday lighting specialists delivering custom LED design, installation, maintenance, and takedown for Montclair, Livingston, Short Hills, Millburn, Maplewood, and every surrounding town.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Essex County Custom Holiday Lighting Package'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '699'
      }
    }
  ],
  image:
    'https://www.jonespressurewashingnj.com/Holiday%20Lights%20Installation%20at%20Twilight.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.jonespressurewashingnj.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Essex County Holiday Lighting Consultation'
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
      name: 'Holiday Lighting',
      item: `${baseUrl}/services/holiday-lighting`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Essex County',
      item: `${baseUrl}/services/holiday-lighting/essex-county`
    }
  ]
}

export default function EssexCountyHolidayLightingPage() {
  return (
    <>
      <Script
        id="jpw-holiday-lighting-essex-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-holiday-lighting-essex-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EssexCountyContent />
    </>
  )
}
