'use client'
import Head from 'next/head'
import { FaLightbulb, FaHouse } from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import additionalServices from '@/lib/services/additionalServices'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Additional Cleaning Services',
  name: 'Specialized Exterior Cleaning Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(555) 555-1234',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergen County',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    image: 'https://jonespressurewashing.com/images/logo.png',
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
    'Comprehensive exterior cleaning services including deck restoration, fence cleaning, gutter cleaning, and commercial property maintenance throughout New Jersey. Our specialized equipment and techniques ensure optimal results for all exterior surfaces.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Deck Restoration'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '299'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Fence Cleaning'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '199'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Gutter Cleaning'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '149'
      }
    }
  ],
  image: 'https://jonespressurewashing.com/images/additional-services.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://jonespressurewashing.com/services/additional-services'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://jonespressurewashing.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Additional Services Booking'
    }
  }
}

function Explanation() {
  return (
    <section className="bg-black h-full">
      <div className="py-12 px-6 max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="h-full bg-secondary p-6 border border-primary rounded-lg flex flex-col gap-4">
          <FaHouse size={42} className="text-primary" />
          <h3 className="text-white">Roof & Gutter Cleaning</h3>
          <p>
            Remove debris, algae, and buildup from your roof and gutters to
            protect your home from water damage and costly repairs.
          </p>
        </div>
        <div className="h-full bg-secondary p-6 border border-primary rounded-lg flex flex-col gap-4">
          <FaLightbulb size={42} className="text-primary" />
          <h3 className="text-white">Holiday Lighting Assistance</h3>
          <p>
            Let us safely install, hang, and remove your holiday lights so you
            can enjoy the season without the stress. Available seasonally
            (Oct–Jan)
          </p>
        </div>
      </div>
    </section>
  )
}

export default function AdditionalServicesPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <main>
        <ServiceHero
          img="/Gutter.jpg"
          h1={<span className="text-primary">Additional Services</span>}
          description="Low-pressure soft wash cleaning for siding, fences, roofs, and decks in Bergen, Essex, and surrounding counties."
          dimHeroContent
          explanation={<Explanation />}
          height="h-[75vh]"
        />

        <ServiceHighlights
          h2="Benefits of Adding These Services"
          highlights={additionalServices.highlights}
          altCard
          altBg
        />
        <ServiceCta
          buttonLabel="Contact Us"
          cta="Request a Quote"
          description="Whether it\'s keeping water flowing or lighting up your home, we\'ve got it covered."
          header="Let's Handle the Extras for You"
          showAfter
        />
      </main>
    </>
  )
}
