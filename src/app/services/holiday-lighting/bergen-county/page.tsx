import type { Metadata } from 'next'
import Script from 'next/script'

import BergenCountyContent from '@/components/services/holiday-lighting/BergenCountyContent'
import { BusinessInfo, PHONE_DISPLAY } from '@/lib/constants'

const pageTitle = 'Bergen County Holiday Lighting | Jones Pressure Washing'
const pageDescription =
  'Seasonal Christmas light installation for homeowners in Paramus and Bergen County communities south of Paramus. Request a quote from Jones Pressure Washing.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting/bergen-county'
  },
  keywords: [
    'Bergen County holiday lighting',
    'Bergen County Christmas light installation',
    'Paramus Christmas light installation',
    'Bergen County seasonal holiday lighting'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting/bergen-county'
  },
  twitter: {
    card: 'summary',
    title: pageTitle,
    description: pageDescription
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
  serviceType: 'Holiday Lighting Installation',
  name: 'Seasonal Christmas Light Installation in Bergen County, NJ',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BusinessInfo.addressLocality,
      addressRegion: BusinessInfo.addressRegion,
      postalCode: BusinessInfo.postalCode,
      addressCountry: BusinessInfo.addressCountry
    },
    image: 'https://www.jonespressurewashingnj.com/logo-black.jpg'
  },
  areaServed: [
    {
      '@type': 'Place',
      name: 'Paramus and Bergen County communities south of Paramus, New Jersey'
    }
  ],
  description:
    'Seasonal Christmas light installation, maintenance, removal, and storage for homeowners in Paramus and Bergen County communities south of Paramus.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county'
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
      name: 'Bergen County',
      item: `${baseUrl}/services/holiday-lighting/bergen-county`
    }
  ]
}

export default function BergenCountyHolidayLightingPage() {
  return (
    <>
      <Script
        id="jpw-holiday-lighting-bergen-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-holiday-lighting-bergen-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BergenCountyContent />
    </>
  )
}
