import Head from 'next/head'

import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/Services'
import TrustSection from '@/components/home/TrustSection'
import ServiceAreas from '@/components/home/ServiceAreas'

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jones Pressure Washing',
  image: 'https://jonespressurewashing.com/images/logo.png',
  url: 'https://jonespressurewashing.com',
  telephone: '(555) 555-1234',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Bergen County',
    addressRegion: 'NJ',
    postalCode: '07001',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.9263,
    longitude: -74.077
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '08:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.facebook.com/jonespressurewashing',
    'https://www.instagram.com/jonespressurewashing'
  ],
  priceRange: '$$',
  servesCuisine: 'Pressure Washing Services'
}

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema)
          }}
        />
      </Head>
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ServiceAreas />
      </main>
    </>
  )
}
