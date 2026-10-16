'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getDaysUntilChristmas } from '@/lib/christmasCountdown'

export default function HolidayLightingPromo({
  compact = false
}: {
  compact?: boolean
}) {
  const [daysUntilChristmas, setDaysUntilChristmas] = useState<number | null>(
    null
  )

  useEffect(() => {
    const updateCountdown = () => {
      setDaysUntilChristmas(getDaysUntilChristmas(new Date()))
    }

    updateCountdown()
    const interval = window.setInterval(updateCountdown, 60_000)

    return () => window.clearInterval(interval)
  }, [])

  const countdownActive = daysUntilChristmas !== null && daysUntilChristmas > 0
  const countdownNumber = daysUntilChristmas
  let countdownCaption = 'Seasonal service'
  if (daysUntilChristmas === 0) {
    countdownCaption = 'Christmas Day'
  } else if (countdownActive) {
    countdownCaption =
      daysUntilChristmas === 1 ? 'Day until Christmas' : 'Days until Christmas'
  }
  const numberVisibility = countdownActive
    ? ''
    : daysUntilChristmas === null
      ? 'invisible'
      : 'hidden'

  if (compact) {
    return (
      <aside
        aria-label="Holiday lighting promotion"
        className="flex min-h-[58px] w-full items-center gap-2 rounded-lg border border-black border-l-[3px] border-l-primary bg-[#1b1b1b] px-2 py-0.5 text-white shadow-[0_12px_28px_-16px_rgba(0,0,0,0.75)]">
        <span
          aria-hidden={!countdownActive}
          className={`shrink-0 font-poppins text-[2.25rem] font-bold leading-none tabular-nums text-primary ${numberVisibility}`}>
          {countdownNumber ?? '00'}
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">
            {countdownCaption}
          </p>
          <Link
            href="/services/holiday-lighting"
            className="inline-flex min-h-11 items-center gap-1 font-poppins text-sm font-semibold text-primary underline decoration-primary underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Holiday lighting for your home
            <ArrowRight aria-hidden="true" className="shrink-0" size={16} />
          </Link>
        </div>
      </aside>
    )
  }

  return (
    <aside
      aria-label="Holiday lighting promotion"
      className="w-full max-w-xs shrink-0 rounded-xl border border-black border-l-[3px] border-l-primary bg-[#1b1b1b] p-2 text-white shadow-[0_18px_38px_-20px_rgba(0,0,0,0.8)] lg:mb-2 lg:max-w-[340px] lg:p-6">
      <div className="flex min-h-[96px] items-center gap-2 lg:min-h-0 lg:flex-col lg:items-start lg:gap-0">
        <span
          aria-hidden={!countdownActive}
          className={`shrink-0 font-poppins text-[3.75rem] font-bold leading-none tabular-nums text-primary lg:mb-1 lg:text-[4.5rem] xl:text-[5.5rem] ${numberVisibility}`}>
          {countdownNumber ?? '00'}
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary">
            {countdownCaption}
          </p>
          <p className="font-poppins text-sm font-bold leading-snug text-white lg:mt-2 lg:text-lg">
            Holiday lighting for your home
          </p>
          <Link
            href="/services/holiday-lighting"
            className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary underline decoration-primary underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:text-base">
            Explore holiday lighting
            <ArrowRight aria-hidden="true" className="shrink-0" size={18} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
