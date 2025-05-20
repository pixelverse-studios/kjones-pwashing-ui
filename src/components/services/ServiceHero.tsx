import { ReactNode, useMemo } from 'react'
import { cn } from '@/lib/utils'
import CtaModal from '../cta/CtaModal'

interface ServiceHeroProps {
  img: string
  h1: string | ReactNode
  description: string
  cta?: string
  explanation?: ReactNode
  dimHeroContent?: boolean
  height?: string
}

const ServiceHero = ({
  cta = 'Request a Free Estimate',
  description,
  explanation,
  h1,
  img,
  dimHeroContent = false,
  height = 'h-screen'
}: ServiceHeroProps) => {
  const showExplanation = useMemo(() => explanation != null, [])

  return (
    <section className="page bg-black">
      <div className={cn('relative', height)}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transform"
          style={{
            backgroundImage: `url('${img}')`
          }}>
          <div className="bg-black-clear h-full w-full"></div>
        </div>

        <div className="nav-offset z-10 relative side-padding max-w-custom mx-auto">
          <div
            className={cn(
              'page-padding max-w-xl mt-20 rounded-lg space-y-6',
              dimHeroContent ? 'bg-black-clear' : ''
            )}>
            <div className="max-w-xl flex flex-col gap-6">
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
      </div>
      {showExplanation ? explanation : null}
    </section>
  )
}

export default ServiceHero
