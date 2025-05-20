import { ServiceHighlightType } from '@/lib/types/services'
import { cn } from '@/lib/utils'

interface ServiceHighlightProps {
  h2: string
  description?: string
  highlights: ServiceHighlightType[]
  altCard: boolean
  altBg?: boolean
}

export default function ServiceHighlights({
  h2,
  description,
  highlights,
  altCard,
  altBg
}: ServiceHighlightProps) {
  return (
    <section className={cn('text-center', altBg ? 'bg-secondary' : 'bg-black')}>
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <h2 className="max-w-2xl mx-auto">{h2}</h2>
        <p className="max-w-2xl mx-auto">{description}</p>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-6">
          {highlights.map(highlight => (
            <div
              key={highlight.header}
              className={cn(
                'p-6 rounded-lg space-y-6',
                altCard ? 'text-center' : 'bg-secondary text-left'
              )}>
              <div
                className={cn(
                  'flex gap-6 items-center',
                  altCard ? 'flex-col' : ''
                )}>
                <highlight.Icon size={30} className="text-primary" />
                <span className="font-semibold">{highlight.header}</span>
              </div>
              <p>{highlight.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}
