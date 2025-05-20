import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceCta from '@/components/services/ServiceCta'
import softWashingServices from '@/lib/services/softWashingServices'

function HeroExplanation() {
  return (
    <section className="bg-black text-center">
      <div className="space-y-6 py-12 max-w-2xl mx-auto">
        <h2>What is Soft Washing?</h2>
        <p>
          Soft washing uses low-pressure water and eco-safe cleaning solutions
          to eliminate mold, algae, and grime from delicate surfaces. It's the
          ideal method for safely cleaning your home's exterior without the risk
          of damage caused by high-pressure washing.
        </p>
      </div>
    </section>
  )
}

export default function SoftWashingServicePage() {
  return (
    <main>
      <ServiceHero
        img="/Fence Cleaning.jpg"
        h1={
          <>
            Professional{' '}
            <span className="text-primary">Soft Washing Services</span> in New
            Jersey
          </>
        }
        description="Low-pressure soft wash cleaning for siding, fences, roofs, and decks in Bergen, Essex, and surrounding counties."
        explanation={<HeroExplanation />}
        height="h-[75vh]"
      />
      <ServiceExamples
        h2="Some surfaces we soft wash include"
        examples={softWashingServices.services}
      />
      <ServiceHighlights
        h2="Why Soft Washing Matters"
        highlights={softWashingServices.highlights}
        altCard
      />
      <ServiceCta
        header="Ready to Safely Clean Your Home Exterior?"
        description=""
        showAfter
        cta="Request a Free Estimate"
        buttonLabel="Contact Us"
      />
    </main>
  )
}
