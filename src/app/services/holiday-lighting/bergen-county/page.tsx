import type { Metadata } from 'next'
import Script from 'next/script'

import BergenCountyContent from '@/components/services/holiday-lighting/BergenCountyContent'

const pageTitle =
  'Bergen County Holiday Lighting Installation | Jones Pressure Washing'
const pageDescription =
  'Custom Bergen County holiday lighting design, installation, maintenance, and takedown for Ridgewood, Wyckoff, Franklin Lakes, Tenafly, and every nearby town.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting/bergen-county'
  },
  keywords: [
    'Bergen County holiday lighting',
    'Bergen County Christmas light installation',
    'Ridgewood holiday lighting',
    'Wyckoff holiday lighting',
    'Franklin Lakes Christmas lights'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting/bergen-county',
    images: [
      {
        url: '/Holiday Lights Installation at Twilight.png',
        width: 1200,
        height: 630,
        alt: 'Bergen County home with custom holiday lighting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Holiday Lights Installation at Twilight.png']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const cityHighlights = [
  { name: 'Ridgewood' },
  { name: 'Wyckoff' },
  { name: 'Franklin Lakes' },
  { name: 'Mahwah' },
  { name: 'Ramsey' },
  { name: 'Glen Rock' },
  { name: 'Paramus' },
  { name: 'Fair Lawn' },
  { name: 'Tenafly' },
  { name: 'Englewood' },
  { name: 'Fort Lee' },
  { name: 'Cresskill' },
  { name: 'Closter' },
  { name: 'Saddle River & Upper Saddle River' },
  { name: 'Allendale' },
  { name: 'Oakland' },
  { name: 'Oradell' },
  { name: 'River Vale' },
  { name: 'Teaneck' },
  { name: 'Hackensack' }
]

const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  name: 'Bergen County Holiday Lighting Design & Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(973) 486-4403',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergen County',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    image: 'https://www.jonespressurewashingnj.com/images/logo.png',
    priceRange: '$$'
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Bergen County'
    },
    ...cityHighlights.map(city => ({
      '@type': 'City',
      name: city.name.replace(' & ', ' and ')
    }))
  ],
  description:
    'Turn your Bergen County, NJ property into a custom holiday lighting showcase with pro grade LED design, installation, maintenance, and takedown handled by Jones Pressure Washing.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bergen County Custom Holiday Lighting Package'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '699'
      }
    }
  ],
  image: 'https://www.jonespressurewashingnj.com/images/holiday-lighting.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.jonespressurewashingnj.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Bergen County Holiday Lighting Consultation'
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
