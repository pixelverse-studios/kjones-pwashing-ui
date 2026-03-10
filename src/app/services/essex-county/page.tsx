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
    type: 'website',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas of Essex County do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve every town and township in Essex County — from Montclair and Livingston to Bloomfield and the Caldwells. If you are in Essex County, we can get to you.'
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
      name: 'Is soft washing safe for the stucco and painted homes common in Essex County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Soft washing is the recommended method for stucco, painted wood, and fiber cement siding. We apply cleaning solutions at low pressure, let them dwell, then rinse gently to avoid damage.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work with Essex County HOAs and property managers?',
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
      <Script
        id="jpw-essex-county-hub-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EssexCountyHubContent />
    </>
  )
}
