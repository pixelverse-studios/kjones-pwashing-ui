import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { BusinessInfo, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'
import { FaLightbulb, FaRegSnowflake, FaStar } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import { ServiceHighlightType } from '@/lib/types/services'

const pageTitle = 'Holiday Lighting | Bergen & Essex County, NJ'
const pageDescription =
  'Seasonal Christmas light installation for homeowners in Essex County and the Bergen County area through Paramus. Contact Jones Pressure Washing to discuss your display.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting'
  },
  keywords: [
    'holiday lighting installation',
    'Christmas light installation Bergen County',
    'Christmas light installation Essex County',
    'holiday lighting NJ',
    'Jones Pressure Washing holiday lighting'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting'
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
  name: 'Seasonal Christmas Light Installation',
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
    },
    {
      '@type': 'County',
      name: 'Essex County'
    }
  ],
  description:
    'Seasonal Christmas light installation, maintenance, removal, and storage for homeowners in Essex County and Bergen County through Paramus.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.jonespressurewashingnj.com/services/holiday-lighting'
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
    }
  ]
}

const lightingHighlights: ServiceHighlightType[] = [
  {
    Icon: FaStar,
    header: 'Materials and Installation',
    description:
      'Jones Pressure Washing supplies the installation materials and installs seasonal lights at your home.'
  },
  {
    Icon: FaRegSnowflake,
    header: 'In-Season Maintenance',
    description:
      'Maintenance is included during the season. Contact us if your display needs attention so we can review the issue.'
  },
  {
    Icon: FaLightbulb,
    header: 'Removal and Storage',
    description:
      'Removal and storage are included after the season. We will discuss the terms for your project when preparing a quote.'
  }
]

function SeasonalDetails() {
  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto grid gap-8 px-6 py-16 md:grid-cols-[1.4fr,1fr] items-center">
        <div className="space-y-6">
          <h2 className="text-white">
            Seasonal holiday lighting{' '}
            <span className="text-primary">for your home</span>
          </h2>
          <p>
            We install seasonal Christmas and holiday lights for homeowners in
            Essex County and Bergen County communities through Paramus and south
            of Paramus. The service includes company-supplied materials,
            installation, maintenance, removal, and storage.
          </p>
          <p>
            Tell us about your home and the display you have in mind. We will
            discuss the details and current availability when you contact us.
          </p>
        </div>
        <div className="bg-secondary p-6 border border-primary rounded-lg space-y-4">
          <h3 className="text-white">
            Ask About Your Holiday Lighting Project
          </h3>
          <p>
            Share your town, property details, display ideas, and preferred
            timing through the holiday lighting form. Select the phone-call
            option if you would like us to call.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?service=holiday-lighting"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-center font-semibold text-black hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Request Christmas Light Installation
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-6 text-center font-semibold text-primary hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HolidayLightingPage() {
  return (
    <>
      <Script
        id="jpw-holiday-lighting-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="jpw-holiday-lighting-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ServiceHero
          img="/Homepage.jpg"
          h1={
            <>
              Seasonal <span className="text-primary">Holiday Lighting</span>{' '}
              for Bergen &amp; Essex County Homes
            </>
          }
          description="Jones Pressure Washing installs seasonal Christmas and holiday lights for homeowners in Essex County and Bergen County through Paramus. Materials, maintenance, removal, and storage are included."
          cta="Request Christmas Light Installation"
          ctaHref="/contact?service=holiday-lighting"
          dimHeroContent
          height="h-[70vh]"
          explanation={<SeasonalDetails />}
        />
        <ServiceHighlights
          h2="What the Seasonal Service Includes"
          description="The confirmed service covers installation materials, installation, maintenance, removal, and storage. We will explain the details for your property when preparing a quote."
          highlights={lightingHighlights}
          altCard
          altBg
        />
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
            <h2>Holiday Lighting Service Areas</h2>
            <p>
              We serve homeowners throughout Essex County and in Paramus and
              Bergen County communities south of Paramus. Choose your county
              page for details, then contact us to confirm coverage and current
              availability for your home.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/services/holiday-lighting/bergen-county"
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20">
                <h3 className="text-primary">Bergen County Holiday Lighting</h3>
                <p className="mt-3 text-sm md:text-base">
                  Seasonal installation for homeowners in Paramus and Bergen
                  County communities south of Paramus.
                </p>
              </Link>
              <Link
                href="/services/holiday-lighting/essex-county"
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20">
                <h3 className="text-primary">Essex County Holiday Lighting</h3>
                <p className="mt-3 text-sm md:text-base">
                  Seasonal installation for homeowners throughout Essex County.
                </p>
              </Link>
            </div>
          </div>
        </section>
        <ServiceCta
          header="Discuss Holiday Lighting for Your Home"
          description="Tell us about your location, display ideas, and preferred timing so we can discuss the service and current availability."
          cta="Request Christmas Light Installation"
          ctaHref="/contact?service=holiday-lighting"
          buttonLabel={`Call ${PHONE_DISPLAY}`}
          secondaryHref={PHONE_HREF}
        />
      </main>
    </>
  )
}
