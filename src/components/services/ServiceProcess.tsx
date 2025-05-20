import { ProcessStepType } from '@/lib/types/services'

interface ServiceProcessProps {
  header: string
  steps: ProcessStepType[]
}

export default function ServiceProcess({ header, steps }: ServiceProcessProps) {
  return (
    <section className="bg-secondary text-center">
      <div className="max-w-custom mx-auto space-y-12 px-6 py-20">
        <h2 className="text-white">{header}</h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
          {steps.map(step => (
            <div className="flex flex-col gap-2" key={step.header}>
              <div className="bg-primary text-white p-4 w-16 h-16 mx-auto rounded-full font-bold text-lg flex justify-center items-center">
                {step.position}
              </div>
              <span>{step.header}</span>
              <span className="text-gray-400">{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
