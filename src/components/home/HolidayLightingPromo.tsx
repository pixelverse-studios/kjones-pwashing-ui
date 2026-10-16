'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
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

    let timeoutId: number
    const scheduleNextUpdate = () => {
      const delay = 60_000 - (Date.now() % 60_000) + 50
      timeoutId = window.setTimeout(() => {
        updateCountdown()
        scheduleNextUpdate()
      }, delay)
    }

    const updateOnVisibility = () => {
      if (document.visibilityState === 'visible') {
        window.clearTimeout(timeoutId)
        updateCountdown()
        scheduleNextUpdate()
      }
    }

    updateCountdown()
    scheduleNextUpdate()
    document.addEventListener('visibilitychange', updateOnVisibility)

    return () => {
      window.clearTimeout(timeoutId)
      document.removeEventListener('visibilitychange', updateOnVisibility)
    }
  }, [])

  const countdownActive = daysUntilChristmas !== null && daysUntilChristmas > 0
  const countdownPending = daysUntilChristmas === null
  let countdownCaption = 'Seasonal service'
  if (daysUntilChristmas === 0) {
    countdownCaption = 'Christmas Day'
  } else if (countdownActive) {
    countdownCaption =
      daysUntilChristmas === 1 ? 'Day until Christmas' : 'Days until Christmas'
  }
  const numberVisibility = countdownPending ? 'invisible' : ''

  if (compact) {
    return (
      <aside
        aria-label="Holiday lighting promotion"
        className="holiday-promo-glow flex min-h-[58px] w-full items-center gap-2 rounded-lg px-2 py-0.5 text-white">
        <span
          aria-hidden={!countdownActive}
          className={`inline-flex h-[1em] w-[2ch] shrink-0 items-center justify-end font-poppins text-[2.25rem] font-bold leading-none tabular-nums text-primary ${numberVisibility}`}>
          {countdownActive ? (
            daysUntilChristmas
          ) : countdownPending ? (
            '00'
          ) : (
            <Sparkles aria-hidden="true" className="h-[0.7em] w-[0.7em]" />
          )}
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
      className="holiday-promo-glow w-full max-w-xs shrink-0 rounded-xl p-2 text-white lg:mb-2 lg:max-w-[340px] lg:p-6">
      <div className="flex min-h-[96px] items-center gap-2 lg:min-h-0 lg:flex-col lg:items-start lg:gap-0">
        <span
          aria-hidden={!countdownActive}
          className={`inline-flex h-[1em] w-[2ch] shrink-0 items-center justify-end font-poppins text-[3.75rem] font-bold leading-none tabular-nums text-primary lg:mb-1 lg:text-[4.5rem] xl:text-[5.5rem] ${numberVisibility}`}>
          {countdownActive ? (
            daysUntilChristmas
          ) : countdownPending ? (
            '00'
          ) : (
            <Sparkles aria-hidden="true" className="h-[0.7em] w-[0.7em]" />
          )}
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
