import { ReactNode, useMemo } from 'react'
import { cn } from '@/lib/utils'
import CtaModal from '../cta/CtaModal'

interface ServiceHeroProps {
  img: string
  h1: string | ReactNode
  description: string
  cta?: string
  explanation?: ReactNode
}

const ServiceHero = ({
  img,
  h1,
  description,
  cta = 'Request a Free Estimate',
  explanation
}: ServiceHeroProps) => {
  const showExplanation = useMemo(() => explanation != null, [])

  return (
    <section className="page bg-black">
      <div
        className={cn('relative', showExplanation ? 'h-[80dvh]' : 'h-screen')}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transform"
          style={{
            backgroundImage: `url('${img}')`
          }}>
          <div className="bg-black-clear h-full w-full"></div>
        </div>

        <div className="nav-offset z-10 relative page-padding max-w-custom mx-auto">
          <div className="max-w-xl py-20 flex flex-col gap-6">
            <h1 className="text-white">{h1}</h1>
            <p>{description}</p>
          </div>
          <CtaModal
            label={cta}
            variant="default"
            buttonClass="hover:bg-secondary"
          />
        </div>
      </div>
      {showExplanation ? explanation : null}
    </section>
  )
}

export default ServiceHero
