import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import {
  FaLightbulb,
  FaRegSnowflake,
  FaShieldHalved,
  FaTree,
  FaCalendarCheck,
  FaStar
} from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCta from '@/components/services/ServiceCta'
import {
  ProcessStepType,
  ServiceHighlightType,
  ServiceExampleType
} from '@/lib/types/services'

const pageTitle = 'Holiday Lighting Installation | Bergen & Essex County, NJ'
const pageDescription =
  'Custom holiday lighting design, installation, maintenance, and takedown for homes and small businesses throughout Northern New Jersey.'

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
    url: '/services/holiday-lighting',
    images: [
      {
        url: '/Holiday Lights Installation at Twilight.png',
        width: 1200,
        height: 630,
        alt: 'Professional holiday lighting installed on a New Jersey home'
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

const baseUrl = 'https://www.jonespressurewashingnj.com'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  name: 'Custom Holiday Lighting Design & Installation',
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
    image: 'https://www.jonespressurewashingnj.com/logo-black.jpg',
    priceRange: '$$'
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Bergen County'
    },
    {
      '@type': 'County',
      name: 'Essex County'
    }
  ],
  description:
    'Professional, custom holiday lighting design, installation, maintenance, and takedown for homes and small businesses throughout Northern New Jersey.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Custom Holiday Lighting Package'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '499'
      }
    }
  ],
  image:
    'https://www.jonespressurewashingnj.com/Holiday%20Lights%20Installation%20at%20Twilight.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.jonespressurewashingnj.com/services/holiday-lighting'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.jonespressurewashingnj.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Holiday Lighting Consultation'
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
    }
  ]
}

const lightingHighlights: ServiceHighlightType[] = [
  {
    Icon: FaStar,
    header: 'Custom Design Plans',
    description:
      'We map your roofline, windows, and landscape to create a lighting display that fits your architecture and HOA guidelines.'
  },
  {
    Icon: FaShieldHalved,
    header: 'Full-Service Installation',
    description:
      'Our insured technicians handle the ladders, electrical checks, and clip placement so you never leave the ground.'
  },
  {
    Icon: FaRegSnowflake,
    header: 'Maintenance & Takedown',
    description:
      'If a bulb goes out, we fix it. When the season ends, we carefully remove and store your lights for next year.'
  }
]

const lightingProcess: ProcessStepType[] = [
  {
    position: 1,
    header: 'Consult & Design',
    description:
      'Share your vision or Pinterest board. We measure your home and present a tailored design with transparent pricing.'
  },
  {
    position: 2,
    header: 'Professional Installation',
    description:
      'Our crew installs premium LED lighting with commercial-grade clips and timers to ensure an even, dazzling glow.'
  },
  {
    position: 3,
    header: 'Season-Long Care',
    description:
      'We proactively check your display and provide on-call support for repairs, bulb swaps, or weather adjustments.'
  },
  {
    position: 4,
    header: 'Fast Takedown & Storage',
    description:
      'After the holidays, we remove every strand, label your lights, and store them so they are ready for next year.'
  }
]

const lightingExamples: ServiceExampleType[] = [
  {
    img: '/Holiday Lights Installation at Twilight.png',
    header: 'Classic Warm White Rooflines',
    description:
      'Outline your roof, peaks, and dormers with warm white LEDs for a timeless, elegant look that stands out on your block.',
    imgAlt: 'Warm white holiday lights installed along the roofline of a home.'
  },
  {
    img: '/festive-entry.png',
    header: 'Festive Entry & Landscape',
    description:
      'Accent doorways, railings, and shrubs with mixed colors, garlands, and wreath lighting to welcome guests in style.',
    imgAlt:
      'Holiday lights framing the entryway and landscaping of a New Jersey home.'
  },
  {
    img: '/accent-lighting.png',
    header: 'Custom Accent Features',
    description:
      'From window outlines to tree wraps and walkway guides, we design unique touches that show off your property.',
    imgAlt: 'Tree and walkway wrapped in holiday lights.'
  }
]

function SeasonalDetails() {
  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto grid gap-8 px-6 py-16 md:grid-cols-[1.4fr,1fr] items-center">
        <div className="space-y-6">
          <h2 className="text-white">
            Scared of Heights?{' '}
            <span className="text-primary">Let us hang your lights!</span>
          </h2>
          <p>
            Skip the tangled cords, icy gutters, and weekend ladder balancing.
            Our team designs, installs, and maintains a display that matches
            your home, down to the last clip. All you do is plug it in and
            enjoy.
          </p>
          <ul className="grid gap-3 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <FaLightbulb className="mt-1 text-primary" size={18} />
              <span>
                Commercial-grade LED lights, timers, and extension cords
                included.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarCheck className="mt-1 text-primary" size={18} />
              <span>
                Priority scheduling for early bookings-our calendar fills
                quickly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaTree className="mt-1 text-primary" size={18} />
              <span>
                From rooflines to trees and pathways, every element is custom
                measured.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-secondary p-6 border border-primary rounded-lg space-y-4">
          <h3 className="text-white">Book Early & Save Your Spot</h3>
          <p>
            Holiday lighting slots begin in October and sell out fast. Text or
            email us today for your free custom design quote and guaranteed
            installation window.
          </p>
          <div className="bg-black rounded-lg p-4 space-y-2 text-sm">
            <p className="font-semibold text-primary">
              Free Custom Design Consultation
            </p>
            <p>hello@jonespressurewashingnj.com - (973) 486-4403</p>
            <p>
              Serving Bergen &amp; Essex County neighborhoods from Ridgewood to
              Montclair.
            </p>
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
              Custom <span className="text-primary">Holiday Lighting</span>{' '}
              Designed for Your Home
            </>
          }
          description="Let Jones Pressure Washing design, install, maintain, and remove a one-of-a-kind lighting display so you can enjoy the holidays without worrying about ladders or storage."
          cta="Get an Instant Quote"
          dimHeroContent
          height="h-[70vh]"
          explanation={<SeasonalDetails />}
        />
        <ServiceExamples
          h2="Lighting Ideas Our Clients Love"
          description="Whether you prefer classic warm white or vibrant color-changing displays, we'll bring your vision to life with pro-grade LEDs and meticulous installation."
          examples={lightingExamples}
        />
        <ServiceHighlights
          h2="Why Homeowners Choose Our Holiday Lighting Team"
          description="We combine custom design, professional safety standards, and full-season service so your home shines from first snowfall to final takedown."
          highlights={lightingHighlights}
          altCard
          altBg
        />
        <ServiceProcess
          header="How Our Holiday Lighting Service Works"
          steps={lightingProcess}
        />
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
            <h2>Dig Deeper into Our Holiday Lighting Service Areas</h2>
            <p>
              Want details tailored to your neighborhood? Explore our new county
              specific hub for 2000 plus words of Bergen County holiday lighting
              ideas, timelines, and city by city recommendations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/services/holiday-lighting/bergen-county"
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20">
                <h3 className="text-primary">Bergen County Holiday Lighting</h3>
                <p className="mt-3 text-sm md:text-base">
                  See how we customize designs for Ridgewood, Wyckoff, Franklin
                  Lakes, Tenafly, and every Bergen County town.
                </p>
              </Link>
              <Link
                href="/services/holiday-lighting/essex-county"
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary hover:bg-primary/20">
                <h3 className="text-primary">Essex County Holiday Lighting</h3>
                <p className="mt-3 text-sm md:text-base">
                  Explore more than 2000 words of ideas for Montclair,
                  Livingston, Short Hills, Maplewood, and every Essex County
                  neighborhood we serve.
                </p>
              </Link>
            </div>
          </div>
        </section>
        <ServiceCta
          header="Ready to Light Up Your Home?"
          description="Reach out now-holiday installation windows are limited and fill up fast."
          cta="Get an Instant Quote"
          buttonLabel="Contact Us"
        />
      </main>
    </>
  )
}
