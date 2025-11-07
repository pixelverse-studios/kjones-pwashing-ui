import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { FaHouse } from 'react-icons/fa6'

import CtaModal from '../cta/CtaModal'

const CountyCard = ({
  county,
  description,
  href
}: {
  county: string
  description: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className="border border-primary bg-black p-5 rounded-lg mb-4 grid grid-cols-[3rem_1fr] items-center gap-4 transition-colors hover:border-white/80">
      <FaHouse className="text-primary" size={28} />
      <div className="flex flex-col items-start gap-3 mb-2">
        <h3 className="text-white">{county}</h3>
        <p className="text-white">{description}</p>
      </div>
    </Link>
  )
}

const CityCard = ({
  title,
  description,
  href
}: {
  title: string
  description: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className="border border-white/10 bg-white/5 p-4 rounded-lg flex flex-col gap-2 transition-colors hover:border-primary hover:bg-primary/10">
      <span className="text-primary text-sm uppercase tracking-wide">
        Featured City
      </span>
      <h4 className="text-white text-lg">{title}</h4>
      <p className="text-white/80 text-sm">{description}</p>
    </Link>
  )
}

const siteUrl = (
  process.env.SITE_URL || 'https://www.jonespressurewashing.com'
).replace(/\/$/, '')

const countyLinks = [
  {
    county: 'Bergen County',
    description: 'Holiday lighting + exterior cleaning for every neighborhood',
    href: '/services/holiday-lighting/bergen-county',
    name: 'Bergen County Holiday Lighting'
  },
  {
    county: 'Essex County',
    description: 'Holiday lighting + exterior cleaning for every township',
    href: '/services/holiday-lighting/essex-county',
    name: 'Essex County Holiday Lighting'
  }
]

const cityLinks = [
  {
    title: 'Ridgewood Pressure Washing',
    description: 'Custom plans for Graydon, Heights Road, and downtown blocks.',
    href: '/services/pressure-washing/ridgewood'
  },
  {
    title: 'Wyckoff Pressure Washing',
    description: 'Estate-ready driveway, patio, and fence cleaning.',
    href: '/services/pressure-washing/wyckoff'
  },
  {
    title: 'Montclair Soft Washing',
    description:
      'Gentle cleaning for stucco, slate, and Church Street storefronts.',
    href: '/services/soft-washing/montclair'
  },
  {
    title: 'Livingston Soft Washing',
    description:
      'Low-pressure roof, siding, and pergola care for every cul-de-sac.',
    href: '/services/soft-washing/livingston'
  }
]

const serviceLinkEntries = [
  ...countyLinks.map(link => ({ name: link.name, href: link.href })),
  ...cityLinks.map(link => ({ name: link.title, href: link.href }))
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: serviceLinkEntries.map((entry, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: entry.name,
    url: `${siteUrl}${entry.href}`
  }))
}

const ServiceAreas = () => {
  return (
    <section className="bg-black">
      <Script
        id="jpw-service-area-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="mx-auto max-w-custom px-6 py-8">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Proudly Serving <span className="text-primary">New Jersey</span>
        </h2>

        <p className="text-white text-center max-w-3xl mx-auto mb-12">
          We proudly provide pressure washing and soft washing services across
          New Jersey, with a strong local focus in Bergen County and Essex
          County. Whether you're a homeowner or business, you can count on our
          team for reliable, professional exterior cleaning throughout North
          Jersey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <p className="text-white/70 uppercase tracking-wide text-sm mb-3">
                County Service Hubs
              </p>
              {countyLinks.map(link => (
                <CountyCard
                  key={link.county}
                  county={link.county}
                  description={link.description}
                  href={link.href}
                />
              ))}
            </div>

            <div>
              <p className="text-white/70 uppercase tracking-wide text-sm mb-3">
                Featured City Pages
              </p>
              <div className="grid gap-4">
                {cityLinks.map(link => (
                  <CityCard
                    key={link.title}
                    title={link.title}
                    description={link.description}
                    href={link.href}
                  />
                ))}
              </div>
            </div>

            <p className="text-white mt-4">
              Don't see your county listed? Reach out — we may still serve your
              area.
            </p>
            <CtaModal label="Check Service Availability" />
          </div>
          <Image
            src="/NjGraphic.png"
            alt="New Jersey Service Map"
            width={600}
            height={800}
            className="h-auto w-[20rem] mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
