'use client'

import CtaModal from '../cta/CtaModal'
import { Button } from '../ui/button'
import { ContactMap } from '@/lib/constants'

interface ServiceCtaProps {
  header: string
  description: string
  cta: string
  buttonLabel: string
  showAfter?: boolean
}

export default function ServiceCta({
  header,
  description,
  cta,
  buttonLabel,
  showAfter = false
}: ServiceCtaProps) {
  const onEmailClick = () => {
    const subject = 'General Inquiry for JonesPressureWashingNJ'
    window.location.href = `mailto:${ContactMap.get(
      'email'
    )}?subject=${subject}`
  }

  return (
    <section className="bg-black text-center">
      <div className="max-w-custom mx-auto px-6 py-20 flex flex-col gap-6">
        <h2 className="text-white">{header}</h2>
        <p>{description}</p>
        <div className="flex flex-col sm:flex-row gap-6 mx-auto">
          <CtaModal label={cta} variant="default" />
          <Button
            variant="ghost"
            className="border-white"
            onClick={() => onEmailClick()}>
            {buttonLabel}
          </Button>
        </div>
        {showAfter ? (
          <p className="text-sm text-gray-400">
            Serving Bergen, Essex, and surrounding New Jersey counties.
          </p>
        ) : null}
      </div>
    </section>
  )
}
