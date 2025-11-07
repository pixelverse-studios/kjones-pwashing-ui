import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import LocationLanderContent from '@/components/services/LocationLanderContent'
import {
  getCityLandingContent,
  getCitySlugs
} from '@/lib/data/locationServiceLanders'

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
    }
  }
}

export default function SoftWashingCityPage({ params }: PageProps) {
  const cityContent = resolveCity(params.city)

  if (!cityContent) {
    notFound()
  }

  return <LocationLanderContent data={cityContent} />
}
