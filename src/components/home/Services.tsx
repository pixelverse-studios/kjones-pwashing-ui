import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import CtaModal from '@/components/cta/CtaModal'

const serviceLinkClass =
  'inline-flex min-h-11 items-center gap-2 self-start font-semibold text-primary underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="home-services-heading"
      className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-custom px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Exterior cleaning
          </p>
          <h2
            id="home-services-heading"
            className="mb-5 scroll-mt-28 text-3xl leading-tight text-white md:text-5xl">
            The right care for every surface.
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Pressure washing for durable surfaces. Soft washing for the ones
            that need a gentler touch. Explore how we care for homes and
            businesses across Bergen and Essex County.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-[16/11]">
            <Image
              src="/PressureBG.jpeg"
              alt="Technician pressure washing a paved outdoor surface"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              01 / Pressure washing
            </p>
            <h3 className="mb-5 text-2xl leading-tight text-white md:text-4xl">
              Pressure washing for homes and businesses.
            </h3>
            <p className="mb-6 leading-relaxed text-white/80">
              From residential driveways, walkways, and patios to commercial
              sidewalks and storefronts, we match the cleaning approach to the
              property and surface.
            </p>
            <Link
              href="/services/pressure-washing"
              className={serviceLinkClass}>
              Explore pressure washing{' '}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 md:mt-24 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden lg:order-2 lg:col-span-7 lg:aspect-[16/11]">
            <Image
              src="/Jones_Pressure_Washing_Roof_Cleaning.png"
              alt="Roof being cleaned with a spray application"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start lg:order-1 lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              02 / Soft washing
            </p>
            <h3 className="mb-5 text-2xl leading-tight text-white md:text-4xl">
              Soft washing for delicate exteriors.
            </h3>
            <p className="mb-6 leading-relaxed text-white/80">
              Low-pressure cleaning helps remove buildup from siding, roofs, and
              other delicate surfaces without the force used on concrete and
              hardscape.
            </p>
            <Link href="/services/soft-washing" className={serviceLinkClass}>
              Explore soft washing <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/20 pt-8 md:mt-24 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              More ways we can help
            </p>
            <Link href="/services/additional" className={serviceLinkClass}>
              Explore additional services{' '}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <CtaModal
            variant="default"
            label="Get an Instant Quote"
            buttonClass="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
