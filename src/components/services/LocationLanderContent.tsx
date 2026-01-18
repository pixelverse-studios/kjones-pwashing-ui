import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import LocationIntroSection from '@/components/services/location/LocationIntroSection'
import LocationNeighborhoodsSection from '@/components/services/location/LocationNeighborhoodsSection'
import LocationFaqSection from '@/components/services/location/LocationFaqSection'
import { CityLandingContent } from '@/lib/data/locationServiceLanders'

interface LocationLanderContentProps {
  data: CityLandingContent
}

export default function LocationLanderContent({
  data
}: LocationLanderContentProps) {
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
