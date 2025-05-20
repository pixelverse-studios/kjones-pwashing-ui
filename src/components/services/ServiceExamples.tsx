'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { ServiceExampleType } from '@/lib/types/services'

interface ServiceExamplesProps {
  h2: string
  description?: string
  examples: ServiceExampleType[]
}

export default function ServiceExamples({
  h2,
  description,
  examples
}: ServiceExamplesProps) {
  const hasDescription = useMemo(() => description != null, [description])

  return (
    <section className="bg-secondary">
      <div className="max-w-custom mx-auto flex flex-col gap-6 px-6 py-10">
        <div className={cn(hasDescription ? 'text-center' : 'text-left')}>
          <h2 className="text-white">{h2}</h2>
          {hasDescription ? <p>{description}</p> : null}
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map(example => (
            <div
              key={example.header}
              className="flex flex-col gap-4 bg-black rounded-lg p-6 text-left">
              <img
                className="w-full h-[12rem] rounded-lg object-cover"
                src={example.img}
                alt={example.imgAlt}
              />
              <h4 className="mb-0">{example.header}</h4>
              <p>{example.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}
