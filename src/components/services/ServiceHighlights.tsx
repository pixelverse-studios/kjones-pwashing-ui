import { ServiceHighlightType } from '@/lib/types/services'
import { cn } from '@/lib/utils'

interface ServiceHighlightProps {
  h2: string
  description?: string
  highlights: ServiceHighlightType[]
  altCard: boolean
}

export default function ServiceHighlights({
  h2,
  description,
  highlights,
  altCard
}: ServiceHighlightProps) {
  return (
    <section className="bg-black text-center">
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <h2 className="max-w-2xl mx-auto">{h2}</h2>
        <p className="max-w-2xl mx-auto">{description}</p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
