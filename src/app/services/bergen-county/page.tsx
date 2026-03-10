import type { Metadata } from 'next'
import Script from 'next/script'

import BergenCountyHubContent from '@/components/services/BergenCountyHubContent'
import { BusinessInfo } from '@/lib/constants'

const pageTitle = 'Bergen County Exterior Cleaning | Jones Pressure Washing'
const pageDescription =
  'Professional pressure washing, soft washing, gutter cleaning, and roof washing for Bergen County, NJ homes and businesses. Locally owned, fully insured.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/bergen-county'
  },
  keywords: [
    'Bergen County pressure washing',
    'Bergen County soft washing',
    'Bergen County gutter cleaning',
    'Bergen County roof cleaning',
    'exterior cleaning Bergen County NJ',
    'Jones Pressure Washing Bergen County'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/services/bergen-county',
    images: [
      {
        url: '/PressureBG.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional exterior cleaning services in Bergen County, NJ'
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
  name: 'Bergen County Exterior Cleaning Services',
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
    name: 'Bergen County'
  },
  description: pageDescription,
  image: `${baseUrl}/PressureBG.jpeg`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}/services/bergen-county`
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas of Bergen County do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve every borough, township, and village in Bergen County — from Ridgewood and Wyckoff to Fort Lee and Hackensack. If you are in Bergen County, we can get to you.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need pressure washing or soft washing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressure washing is for hard surfaces like concrete, stone, and pavers. Soft washing is for delicate surfaces like siding, roofs, and painted wood. We assess your property and recommend the right approach for each surface.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often should I have my home exterior cleaned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Bergen County homes benefit from an annual exterior wash. Properties near wooded areas or with heavy shade may need more frequent cleaning due to faster algae and mold growth.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work with Bergen County HOAs and property managers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide insurance certificates, before-and-after documentation, and can coordinate multi-unit scheduling for townhome communities and commercial properties.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for exterior cleaning in NJ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April through September is ideal. Warmer months allow cleaning solutions to work most effectively and surfaces to dry properly. We book up fast leading into Memorial Day and early summer.'
      }
    }
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Bergen County',
      item: `${baseUrl}/services/bergen-county`
    }
  ]
}

export default function BergenCountyHubPage() {
  return (
    <>
      <Script
        id="jpw-bergen-county-hub-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-bergen-county-hub-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="jpw-bergen-county-hub-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BergenCountyHubContent />
    </>
  )
}
