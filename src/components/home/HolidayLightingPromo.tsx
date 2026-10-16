import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HolidayLightingPromo() {
  return (
    <section
      aria-labelledby="home-holiday-lighting-heading"
      className="bg-black py-8 md:py-12">
      <div className="max-w-custom mx-auto px-6">
        <div className="flex flex-col gap-6 rounded-lg border border-primary bg-gray p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="mb-2 font-semibold text-primary">Seasonal service</p>
            <h2
              id="home-holiday-lighting-heading"
              className="mb-3 font-poppins text-white">
              Holiday lighting for your home
            </h2>
            <p className="text-white">
              Explore our residential Christmas and holiday light installation
              service, then tell us about your project.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="ctaPrimary" size="cta">
              <Link href="/services/holiday-lighting">
                Explore holiday lighting
              </Link>
            </Button>
            <Button asChild variant="ctaOutline" size="cta">
              <Link href="/contact?service=holiday-lighting">
                Ask about installation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
