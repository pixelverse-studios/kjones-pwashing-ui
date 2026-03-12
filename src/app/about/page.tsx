import type { Metadata } from 'next'
import Script from 'next/script'

import AboutContent from '@/components/about/AboutContent'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const pageTitle = 'About Jones Pressure Washing | Bergen & Essex, NJ'
const pageDescription =
  'Meet Kyle Jones — from automotive detailing to founding JPW. Our origin story, credentials, and specialized equipment in Bergen & Essex County, NJ.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/about'
  },
  keywords: [
    'Jones Pressure Washing',
    'about Jones Pressure Washing',
    'locally owned pressure washing',
    'Bergen County exterior cleaning',
    'Essex County exterior cleaning'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/about',
    images: [
      {
        url: '/Homepage_Trust.png',
        width: 1200,
        height: 630,
        alt: 'Jones Pressure Washing owner speaking with a homeowner'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Homepage_Trust.png']
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
  '@type': 'LocalBusiness',
  name: BusinessInfo.name,
  description: pageDescription,
  telephone: businessPhone,
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
  areaServed: [
    { '@type': 'County', name: 'Bergen County' },
    { '@type': 'County', name: 'Essex County' }
  ],
  image: `${baseUrl}/logo-black.jpg`,
  priceRange: '$$',
  sameAs: BusinessInfo.sameAs,
  url: `${baseUrl}/about`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/about`
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
      name: 'About Us',
      item: `${baseUrl}/about`
    }
  ]
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="jpw-about-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-about-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <AboutContent />
      </main>
    </>
  )
}
