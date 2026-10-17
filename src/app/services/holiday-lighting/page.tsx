import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BusinessInfo, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'
import { FaLightbulb, FaRegSnowflake, FaStar } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import { Button } from '@/components/ui/button'
import { ServiceHighlightType } from '@/lib/types/services'

const pageTitle = 'Residential Holiday Lighting | Jones Pressure Washing'
const pageDescription =
  'Seasonal Christmas and holiday light installation for homes, with materials, maintenance, removal, and storage. Explore our service areas and request a quote.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting'
  },
  keywords: [
    'holiday lighting installation',
    'Christmas light installation',
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
    'Seasonal Christmas and holiday light installation, maintenance, removal, and storage for homeowners.',
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
            We provide the installation materials and handle installation,
            in-season maintenance, removal, and storage for residential
            displays.
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
            <Button asChild variant="ctaPrimary" size="cta">
              <Link href="/contact?service=holiday-lighting">
                Request Christmas Light Installation
              </Link>
            </Button>
            <Button asChild variant="ctaOutline" size="cta">
              <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HolidayLightingPage() {
  return (
    <>
      <script
        id="jpw-holiday-lighting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c')
        }}
      />
      <script
        id="jpw-holiday-lighting-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c')
        }}
      />
      <main>
        <ServiceHero
          img="/holiday-lighting-hero.jpg"
          imgAlt="Two-story home decorated with colorful roofline lights and warm holiday wreaths at dusk"
          imageOverlayClassName="bg-black/40 lg:bg-gradient-to-r lg:from-black/65 lg:via-black/40 lg:to-black/20"
          h1={
            <>
              Seasonal <span className="text-primary">Holiday Lighting</span>{' '}
              for Your Home
            </>
          }
          description="Jones Pressure Washing installs seasonal Christmas and holiday lights for homeowners. Materials, maintenance, removal, and storage are included."
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
            <h2>Find Holiday Lighting in Your Area</h2>
            <p>
              We serve homeowners throughout Essex County and in Paramus and
              Bergen County communities south of Paramus. Choose your county
              page for local details, then contact us to confirm coverage and
              current availability for your home.
            </p>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/services/holiday-lighting/bergen-county"
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <h3 className="text-primary">
                    Bergen County Holiday Lighting
                  </h3>
                  <p className="mt-3 text-sm md:text-base">
                    For homes in Paramus and communities south of Paramus. Check
                    local coverage and service details.
                  </p>
                  <span className="mt-5 inline-block font-semibold text-primary underline underline-offset-4 group-hover:text-white">
                    View service area →
                  </span>
                </Link>
                <Link
                  href="/services/holiday-lighting/essex-county"
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <h3 className="text-primary">
                    Essex County Holiday Lighting
                  </h3>
                  <p className="mt-3 text-sm md:text-base">
                    For homeowners throughout the county. Check local coverage
                    and service details.
                  </p>
                  <span className="mt-5 inline-block font-semibold text-primary underline underline-offset-4 group-hover:text-white">
                    View service area →
                  </span>
                </Link>
              </div>
              <figure className="mx-auto max-w-56 text-center">
                <Image
                  src="/NjGraphic.png"
                  alt=""
                  width={285}
                  height={508}
                  sizes="(min-width: 1024px) 176px, 112px"
                  loading="lazy"
                  className="mx-auto h-auto w-28 brightness-0 invert opacity-25 lg:w-44"
                />
                <figcaption className="mt-4 text-sm text-white/70">
                  Check the county pages for coverage details.
                </figcaption>
              </figure>
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
