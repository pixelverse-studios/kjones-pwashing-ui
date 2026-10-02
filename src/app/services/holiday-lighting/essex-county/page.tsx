import type { Metadata } from 'next'
import Script from 'next/script'

import EssexCountyContent from '@/components/services/holiday-lighting/EssexCountyContent'
import { BusinessInfo, PHONE_DISPLAY } from '@/lib/constants'

const pageTitle =
  'Christmas Light Installation Essex County, NJ | Jones Pressure Washing'
const pageDescription =
  'Request seasonal Christmas light installation for your Essex County home. Jones Pressure Washing supplies materials and includes maintenance, removal, and storage.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting/essex-county'
  },
  keywords: [
    'Essex County Christmas light installation',
    'Essex County holiday lighting'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting/essex-county'
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
  serviceType: 'Seasonal Christmas Light Installation',
  name: 'Christmas Light Installation in Essex County, NJ',
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
  areaServed: {
    '@type': 'County',
    name: 'Essex County, New Jersey'
  },
  description:
    'Seasonal Christmas light installation, maintenance, removal, and storage for homeowners throughout Essex County, New Jersey.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county'
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
