import type { Metadata } from 'next'
import Script from 'next/script'

import ContactContent from '@/components/contact/ContactContent'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const pageTitle = 'Contact Jones Pressure Washing | Bergen & Essex County, NJ'
const pageDescription =
  'Get in touch with Jones Pressure Washing for questions, service inquiries, or custom requests. Serving homes and businesses across Bergen and Essex County, NJ.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/contact'
  },
  keywords: [
    'contact Jones Pressure Washing',
    'pressure washing quote NJ',
    'Bergen County pressure washing contact',
    'Essex County pressure washing contact',
    'exterior cleaning inquiry NJ'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/contact',
    images: [
      {
        url: '/Homepage_Trust.png',
        width: 1200,
        height: 630,
        alt: 'Contact Jones Pressure Washing'
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
const businessEmail =
  ContactMap.get('email') ?? 'Hello@jonespressurewashingnj.com'
const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BusinessInfo.name,
  description: pageDescription,
  telephone: businessPhone,
  email: businessEmail,
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
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: businessPhone,
    email: businessEmail,
    contactType: 'customer service',
    areaServed: [
      { '@type': 'County', name: 'Bergen County' },
      { '@type': 'County', name: 'Essex County' }
    ],
    availableLanguage: 'English'
  },
  areaServed: [
    { '@type': 'County', name: 'Bergen County' },
    { '@type': 'County', name: 'Essex County' }
  ],
  image: `${baseUrl}/logo-black.jpg`,
  priceRange: '$$',
  sameAs: BusinessInfo.sameAs,
  url: `${baseUrl}/contact`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/contact`
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
      name: 'Contact Us',
      item: `${baseUrl}/contact`
    }
  ]
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="jpw-contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ContactContent />
      </main>
    </>
  )
}
