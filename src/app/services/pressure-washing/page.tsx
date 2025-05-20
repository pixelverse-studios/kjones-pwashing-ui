'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceExamples from '@/components/services/ServiceExamples'
import ServiceHighlights from '@/components/services/ServiceHighlights'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCta from '@/components/services/ServiceCta'
import pressureWashingServices from '@/lib/services/pressureWashingServices'

export default function PressureWashingServicePage() {
  return (
    <main>
      <ServiceHero
        img="/PressureBG.jpeg"
        h1={
          <>
            Professional{' '}
            <span className="text-primary">Pressure Washing Services</span> in
            New Jersey
          </>
        }
        description="Safe, effective cleaning for homes and businesses in Bergen, Essex, and surrounding counties."
      />
      <ServiceExamples
        h2="Pressure Washing for Homes"
        description="From driveways to pool decks, we remove years of grime, mold and weather damage using safe, effective methods tailored for residential surfaces."
        examples={pressureWashingServices.services}
      />
      <ServiceHighlights
        h2="Pressure Washing for Businesses"
        description="Keep your property looking professional with our commercial pressure
          washing services. We clean storefronts, sidewalks, loading zones, and
          building exteriors - all with minimal disruption to your day-to-day
          operations"
        highlights={pressureWashingServices.highlights}
        altCard={false}
      />
      <ServiceProcess
        header="How Our Pressure Washing Process Works"
        steps={pressureWashingServices.steps}
      />
      <ServiceCta
        header="Ready to Restore Your Property?"
        description="We are ready to make your home or business look like new."
        cta="Request a Free Estimate"
        buttonLabel="Contact Us"
      />
    </main>
  )
}
