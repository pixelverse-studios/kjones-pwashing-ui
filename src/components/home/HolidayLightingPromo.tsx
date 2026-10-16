import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function HolidayLightingPromo() {
  return (
    <aside
      aria-label="Holiday lighting promotion"
      className="relative z-10 w-full bg-secondary">
      <div className="mx-auto flex max-w-custom flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:gap-4 lg:gap-6">
        <div className="relative hidden h-20 w-16 shrink-0 overflow-hidden sm:block">
          <Image
            src="/Holiday Lights Installation at Twilight.png"
            alt=""
            fill
            priority
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Seasonal service
          </p>
          <p className="mb-0 font-poppins text-lg font-bold leading-tight text-white md:text-xl">
            Holiday lighting for your home
          </p>
          <p className="hidden text-sm text-white/80 lg:block">
            Residential Christmas and holiday light installation.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:gap-x-5">
          <Link
            href="/services/holiday-lighting"
            className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Explore holiday lighting{' '}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <Link
            href="/contact?service=holiday-lighting"
            className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-primary underline-offset-4 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Ask about installation
          </Link>
        </div>
      </div>
    </aside>
  )
}
