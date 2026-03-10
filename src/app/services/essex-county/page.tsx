import type { Metadata } from 'next'
import Script from 'next/script'

import EssexCountyHubContent from '@/components/services/EssexCountyHubContent'
import { BusinessInfo } from '@/lib/constants'

const pageTitle = 'Essex County Exterior Cleaning | Jones Pressure Washing'
const pageDescription =
  'Professional pressure washing, soft washing, gutter cleaning, and roof washing for Essex County, NJ homes and businesses. Locally owned, fully insured.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/essex-county'
  },
  keywords: [
    'Essex County pressure washing',
    'Essex County soft washing',
    'Essex County gutter cleaning',
    'Essex County roof cleaning',
    'exterior cleaning Essex County NJ',
    'Jones Pressure Washing Essex County'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/essex-county',
    images: [
      {
        url: '/PressureBG.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional exterior cleaning services in Essex County, NJ'
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
  serviceType: 'Exterior Cleaning',
  name: 'Essex County Exterior Cleaning Services',
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
    image: `${baseUrl}/logo-black.jpg`,
    priceRange: '$$'
  },
  areaServed: {
    '@type': 'County',
    name: 'Essex County'
  },
  description: pageDescription,
  image: `${baseUrl}/PressureBG.jpeg`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/essex-county`
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
      name: 'Essex County',
      item: `${baseUrl}/services/essex-county`
    }
  ]
}

export default function EssexCountyHubPage() {
  return (
    <>
      <Script
        id="jpw-essex-county-hub-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-essex-county-hub-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EssexCountyHubContent />
    </>
  )
}
