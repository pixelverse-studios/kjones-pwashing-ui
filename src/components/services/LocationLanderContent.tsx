import ServiceHero from '@/components/services/ServiceHero'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
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

      <section className="bg-black">
        <div className="max-w-custom mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4">
            <h2>{data.introHeading}</h2>
            {data.introParagraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {data.focusAreas.map(area => (
              <div
                key={area.title}
                className="border border-white/10 rounded-lg bg-white/5 p-5">
                <h3 className="text-primary text-lg">{area.title}</h3>
                <p className="mt-2 text-sm text-white/80">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0f]">
        <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
          <header className="space-y-3">
            <h2>{data.neighborhoodHeading}</h2>
            <p>{data.neighborhoodDescription}</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {data.neighborhoods.map(area => (
              <div
                key={area.name}
                className="rounded-lg border border-white/5 bg-black/40 p-5">
                <h3 className="text-primary">{area.name}</h3>
                <p className="mt-2 text-sm text-white/80">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceHighlights
        h2={data.highlightHeading}
        description={data.highlightDescription}
        highlights={data.highlights}
        altCard
      />

      <section className="bg-black">
        <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
          <header className="space-y-3 text-center">
            <h2>{data.faqHeading}</h2>
            <p className="max-w-2xl mx-auto">{data.faqDescription}</p>
          </header>
          <Accordion
            type="multiple"
            className="w-full max-w-4xl mx-auto space-y-4 text-white">
            {data.faqs.map(faq => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border border-accent rounded-lg">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

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
