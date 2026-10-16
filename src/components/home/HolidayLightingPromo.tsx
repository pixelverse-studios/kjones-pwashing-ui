import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HolidayLightingPromo({
  compact = false
}: {
  compact?: boolean
}) {
  if (compact) {
    return (
      <aside aria-label="Holiday lighting promotion" className="text-white">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
          Seasonal service
        </p>
        <Link
          href="/services/holiday-lighting"
          className="inline-flex min-h-11 items-center gap-1 font-poppins text-sm font-semibold text-primary underline decoration-primary underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          Holiday lighting for your home
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </aside>
    )
  }

  return (
    <aside
      aria-label="Holiday lighting promotion"
      className="w-full max-w-xs shrink-0 text-white lg:mb-2 lg:self-end">
      <div aria-hidden="true" className="mb-2 h-0.5 w-12 bg-primary lg:mb-4" />
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary lg:mb-2">
        Seasonal service
      </p>
      <p className="mb-1 font-poppins text-lg font-bold leading-snug text-white md:text-xl">
        Holiday lighting for your home
      </p>
      <Link
        href="/services/holiday-lighting"
        className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary underline decoration-primary underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        Explore holiday lighting
        <ArrowRight aria-hidden="true" size={18} />
      </Link>
    </aside>
  )
}
