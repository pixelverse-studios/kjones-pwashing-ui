import Link from 'next/link'

import citySlugs from '@/lib/data/serviceCitySlugs.json'

type ServiceType = keyof typeof citySlugs

function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const CitiesWeServe = ({ service }: { service: ServiceType }) => {
  const cities = citySlugs[service].map(slug => ({
    name: slugToName(slug),
    slug
  }))

  const serviceName = service.replace('-', ' ')

  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary mb-6">Cities We Serve</h2>
          <p className="text-secondary-lite mb-8">
            We provide professional {serviceName} services across Bergen and
            Essex County. Select your city to learn more about our local
            service.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cities.map(city => (
              <Link
                key={city.slug}
                href={`/services/${service}/${city.slug}`}
                className="border border-white/10 bg-white/5 p-4 rounded-lg text-center transition-colors hover:border-primary hover:bg-primary/10">
                <span className="text-white text-sm font-medium">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CitiesWeServe
