'use client'

import { FaStore, FaBuilding, FaWarehouse } from 'react-icons/fa6'
import CtaModal from '../cta/CtaModal'
import { Button } from '../ui/button'
import { ContactMap } from '@/lib/constants'

function HomeItems() {
  return (
    <section className="bg-secondary text-center">
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <h2 className="max-w-2xl mx-auto">Pressure Washing for Homes</h2>
        <p className="max-w-2xl mx-auto">
          From driveways to pool decks, we remove years of grime, mold and
          weather damage using safe, effective methods tailored for residential
          surfaces.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 bg-black rounded-lg p-6 text-left">
            <img
              className="w-full h-[12rem] rounded-lg object-cover"
              src="/Driveway.jpg"
              alt="home driveway image"
            />
            <h4 className="mb-0">Concrete</h4>
            <p>
              Remove stains, grime, and mildew from driveways, patios and
              walkways with high-powered concrete cleaning.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-black rounded-lg p-6 text-left">
            <img
              className="w-full h-[12rem] rounded-lg object-cover"
              src="/Pool deck.jpg"
              alt="home pool deck image"
            />
            <h4 className="mb-0">Pool Decks</h4>
            <p>
              Safely clean pool decks by removing algae, dirt, and buildup for a
              slip-resistant, refreshed surface.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-black rounded-lg p-6 text-left">
            <img
              className="w-full h-[12rem] rounded-lg object-cover"
              src="/wall clean.jpg"
              alt="home wall clean image"
            />
            <h4 className="mb-0">Walls</h4>
            <p>
              Restore the look of concrete or stone walls by removing stains,
              algae, and weather buildup.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}

function BusinessItems() {
  return (
    <section className="bg-black text-center">
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <h2 className="max-w-2xl mx-auto">Pressure Washing for Businesses</h2>
        <p className="max-w-2xl mx-auto">
          Keep your property looking professional with our commercial pressure
          washing services. We clean storefronts, sidewalks, loading zones, and
          building exteriors - all with minimal disruption to your day-to-day
          operations
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg text-left space-y-6">
            <div className="flex items-center gap-6">
              <FaStore size={30} className="text-primary" />
              <span className="font-semibold">Storefronts</span>
            </div>
            <p>Professional cleaning for windows, awnings, and entryways.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-left space-y-6">
            <div className="flex items-center gap-6">
              <FaBuilding size={30} className="text-primary" />
              <span className="font-semibold">Building Exteriors</span>
            </div>
            <p>Complete exterior cleaning for commercial buildings.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-left space-y-6">
            <div className="flex items-center gap-6">
              <FaWarehouse size={30} className="text-primary" />
              <span className="font-semibold">Warehouses</span>
            </div>
            <p>Industrial-grade cleaning for large facilities.</p>
          </div>
        </section>
      </div>
    </section>
  )
}

const steps = [
  {
    position: 1,
    label: 'Fill Out Contact Form',
    description: 'Quick and easy process'
  },
  {
    position: 2,
    label: 'Schedule Estimate',
    description: 'Free virtual or on-site'
  },
  {
    position: 3,
    label: 'Review Estimate',
    description: 'Clear pricing details'
  },
  {
    position: 4,
    label: 'Book Service',
    description: 'Choose your date'
  },
  {
    position: 5,
    label: 'Enjoy Results',
    description: 'Satisfaction guaranteed'
  }
]

function PressureProcess() {
  return (
    <section className="bg-secondary text-center">
      <div className="max-w-custom mx-auto space-y-12 px-6 py-20">
        <h2 className="text-white">How Our Pressure Washing Process Works</h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
          {steps.map(step => (
            <div className="flex flex-col gap-2" key={step.label}>
              <div className="bg-primary text-white p-4 w-16 h-16 mx-auto rounded-full font-bold text-lg flex justify-center items-center">
                {step.position}
              </div>
              <span>{step.label}</span>
              <span className="text-gray-400">{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  const onEmailClick = () => {
    const subject = 'General Inquiry for JonesPressureWashingNJ'
    window.location.href = `mailto:${ContactMap.get(
      'email'
    )}?subject=${subject}`
  }

  return (
    <section className="bg-black text-center">
      <div className="max-w-custom mx-auto px-6 py-20 flex flex-col gap-6">
        <h2 className="text-white">Ready to Restore Your Property?</h2>
        <p>We are ready to make your home or business look like new.</p>
        <div className="flex flex-col sm:flex-row gap-6 mx-auto">
          <CtaModal label="Request a Free Estimate" variant="default" />
          <Button
            variant="ghost"
            className="border-white"
            onClick={() => onEmailClick()}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function PressureWashingDemographics() {
  return (
    <>
      <HomeItems />
      <BusinessItems />
      <PressureProcess />
      <CallToAction />
    </>
  )
}
