import CtaModal from '@/components/cta/CtaModal'
import {
  FaQuoteLeft,
  FaBullseye,
  FaHouse,
  FaClock,
  FaAward
} from 'react-icons/fa6'

interface HighlightItemProps {
  title: string
  description: string
  Icon: any
}

function HighlightItem({ title, description, Icon }: HighlightItemProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Icon size={40} className="text-primary" />
      <h3 className="mb-0 text-white">{title}</h3>
      <p className="text-secondary-lite">{description}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-black page nav-offset">
        <div className="page-content text-center">
          <h1>
            BUILT ON DETAILING.
            <br />
            BACKED BY RELIABILITY
          </h1>
          <p className="text-white mt-8 mb-20 max-w-xl mx-auto">
            A pressure washing service created by a homeowner who takes pride in
            keeping things spotless — and showing up when it matters.
          </p>
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <FaQuoteLeft size={40} className="text-primary" />
            <p className="text-xl text-white">
              &quot;I started off with an obsession for detailing my car — and
              that passion eventually extended to my home. I take pride in
              keeping everything spotless, and I knew I could bring that same
              care to others. Too many contractors are unreliable. I&apos;m here
              to change that.&quot;
            </p>
            <span className="text-primary text-xl">— JPW Owner</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <HighlightItem
              title="Precision-Focused"
              description="We treat every job like it’s our own driveway or deck."
              Icon={FaBullseye}
            />
            <HighlightItem
              title="Locally Owned"
              description="Rooted in Bergen & Essex — serving our neighbors with care."
              Icon={FaHouse}
            />
            <HighlightItem
              title="Always On Time"
              description="Reliable scheduling. No ghosting. Just results."
              Icon={FaClock}
            />
            <HighlightItem
              title="Pride in Every Job"
              description="We take our work personally — your home reflects our name."
              Icon={FaAward}
            />
          </div>
          <div className="my-16 space-y-6">
            <p className="text-white">
              Ready to work with someone who cares about the details?
            </p>
            <CtaModal
              label="Request Your Free Estimate"
              variant="default"
              buttonClass="rounded-full"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
