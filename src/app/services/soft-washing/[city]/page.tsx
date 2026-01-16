import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import LocationLanderContent from '@/components/services/LocationLanderContent'
import {
  getCityLandingContent,
  getCitySlugs,
  CityLandingContent
} from '@/lib/data/locationServiceLanders'
import { BusinessInfo, ContactMap } from '@/lib/constants'

const SERVICE_KEY = 'soft-washing' as const

type PageProps = {
  params: {
    city: string
  }
}

const resolveCity = (slug: string) =>
  getCityLandingContent(SERVICE_KEY, slug) ?? null

export function generateStaticParams() {
  return getCitySlugs(SERVICE_KEY).map(city => ({
    city
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cityContent = resolveCity(params.city)

  if (!cityContent) {
    return {
      title: 'Soft Washing Locations | Jones Pressure Washing'
    }
  }

  const url = `/services/${SERVICE_KEY}/${cityContent.slug}`

  return {
    title: cityContent.metaTitle,
    description: cityContent.metaDescription,
    alternates: {
      canonical: url
    },
    keywords: cityContent.keywords,
    openGraph: {
      title: cityContent.metaTitle,
      description: cityContent.metaDescription,
      type: 'article',
      url,
      images: [
        {
          url: cityContent.heroImage,
          width: 1200,
          height: 630,
          alt: `${cityContent.city} ${cityContent.serviceName}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: cityContent.metaTitle,
      description: cityContent.metaDescription,
      images: [cityContent.heroImage]
    },
    robots: {
      index: true,
      follow: true
    },
    category: 'Professional Services'
  }
}

const baseUrl = 'https://www.jonespressurewashingnj.com'

function buildSchema(cityContent: CityLandingContent) {
  const businessPhone = ContactMap.get('phone') ?? '(973) 486-4403'

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: cityContent.serviceName,
    name: `${cityContent.serviceName} in ${cityContent.city}, ${cityContent.state}`,
    description: cityContent.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: BusinessInfo.name,
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
      image: `${baseUrl}/logo-black.jpg`,
      priceRange: '$$'
    },
    areaServed: {
      '@type': 'City',
      name: cityContent.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${cityContent.county}, ${cityContent.state}`
      }
    },
    image: `${baseUrl}${cityContent.heroImage}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/services/${SERVICE_KEY}/${cityContent.slug}`
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: baseUrl
      },
      result: {
        '@type': 'Reservation',
        name: `${cityContent.serviceName} Service Booking in ${cityContent.city}`
      }
    }
  }
}

function buildBreadcrumbSchema(cityContent: CityLandingContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Soft Washing',
        item: `${baseUrl}/services/soft-washing`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityContent.city,
        item: `${baseUrl}/services/soft-washing/${cityContent.slug}`
      }
    ]
  }
}

export default function SoftWashingCityPage({ params }: PageProps) {
  const cityContent = resolveCity(params.city)

  if (!cityContent) {
    notFound()
  }

  const schema = buildSchema(cityContent)
  const breadcrumbSchema = buildBreadcrumbSchema(cityContent)

  return (
    <>
      <Script
        id={`jpw-${SERVICE_KEY}-${cityContent.slug}-schema`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id={`jpw-${SERVICE_KEY}-${cityContent.slug}-breadcrumb-schema`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationLanderContent data={cityContent} />
    </>
  )
}
