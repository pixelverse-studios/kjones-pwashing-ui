import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HolidayLightingPromo() {
  return (
    <aside
      aria-label="Holiday lighting promotion"
      className="relative z-10 w-full bg-[#121212]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-custom flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:gap-4 lg:gap-5">
        <div className="relative hidden h-16 w-28 shrink-0 overflow-hidden md:block">
          <Image
            src="/festive-entry.png"
            alt=""
            fill
            priority
            sizes="112px"
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
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:gap-x-5">
          <Button
            asChild
            variant="ctaOutline"
            size="cta"
            className="min-h-10 px-3 py-2 text-sm">
            <Link href="/services/holiday-lighting">View holiday lighting</Link>
          </Button>
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
