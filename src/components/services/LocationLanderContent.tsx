import Link from 'next/link'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import LocationIntroSection from '@/components/services/location/LocationIntroSection'
import LocationNeighborhoodsSection from '@/components/services/location/LocationNeighborhoodsSection'
import LocationFaqSection from '@/components/services/location/LocationFaqSection'
import { CityLandingContent } from '@/lib/data/locationServiceLanders'
import citySlugs from '@/lib/data/serviceCitySlugs.json'

interface LocationLanderContentProps {
  data: CityLandingContent
  serviceKey: 'pressure-washing' | 'soft-washing'
}

function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function LocationLanderContent({
  data,
  serviceKey
}: LocationLanderContentProps) {
  const otherCities = citySlugs[serviceKey].filter(s => s !== data.slug)
  const serviceLabel = serviceKey
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())

  return (
    <>
      <ServiceHero
        img={data.heroImage}
        h1={
          <>
            {data.city}{' '}
            <span className="text-primary">{data.heroHighlight}</span>
          </>
        }
        description={data.heroDescription}
        cta={data.heroCta}
        dimHeroContent
        height="h-[70vh]"
      />

      <LocationIntroSection
        introHeading={data.introHeading}
        introParagraphs={data.introParagraphs}
        focusAreas={data.focusAreas}
      />

      <LocationNeighborhoodsSection
        neighborhoodHeading={data.neighborhoodHeading}
        neighborhoodDescription={data.neighborhoodDescription}
        neighborhoods={data.neighborhoods}
      />

      <ServiceHighlights
        h2={data.highlightHeading}
        description={data.highlightDescription}
        highlights={data.highlights}
        altCard
      />

      <LocationFaqSection
        faqHeading={data.faqHeading}
        faqDescription={data.faqDescription}
        faqs={data.faqs}
      />

      {otherCities.length > 0 && (
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary mb-6">
                {serviceLabel} in Other Cities
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {otherCities.map(slug => (
                  <Link
                    key={slug}
                    href={`/services/${serviceKey}/${slug}`}
                    className="border border-white/10 bg-white/5 px-4 py-2 rounded-lg text-sm text-white transition-colors hover:border-primary hover:bg-primary/10">
                    {slugToName(slug)}
                  </Link>
                ))}
              </div>
              <Link
                href={`/services/${serviceKey}`}
                className="inline-block mt-6 text-primary text-sm hover:underline">
                View all {serviceLabel.toLowerCase()} services &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <ServiceCta
        header={data.cta.header}
        description={data.cta.description}
        cta={data.cta.cta}
        buttonLabel={data.cta.buttonLabel}
        showAfter
      />
    </>
  )
}
