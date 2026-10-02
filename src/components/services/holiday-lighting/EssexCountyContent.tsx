import Link from 'next/link'
import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

const contactHref = '/contact?service=holiday-lighting'

const inclusions = [
  {
    title: 'Materials and installation',
    description:
      'Jones Pressure Washing supplies the materials for your seasonal display and installs the lights at your home.'
  },
  {
    title: 'In-season maintenance',
    description:
      'Maintenance is included. If part of the display needs attention, contact us so we can review the issue.'
  },
  {
    title: 'Removal and storage',
    description:
      'Removal and storage are included after the season. We will explain the terms for your project when we prepare your quote.'
  }
]

const faqs = [
  {
    question: 'Is this seasonal or permanent lighting?',
    answer:
      'This page covers seasonal Christmas and holiday light installation for homeowners. It does not describe permanent lighting or other outdoor lighting services.'
  },
  {
    question: 'Do you supply the lights?',
    answer:
      'Jones Pressure Washing supplies the installation materials. Ask us about the specific products and terms for your proposed display when you request a quote.'
  },
  {
    question: 'Are maintenance, removal, and storage included?',
    answer:
      'Yes. All three are included in the seasonal service. The scope and timing for your property will be discussed during quoting.'
  },
  {
    question: 'Which Essex County towns do you serve?',
    answer:
      'Jones Pressure Washing serves homeowners throughout Essex County. Include your town and property details in the contact request so we can discuss your project.'
  },
  {
    question: 'When should I request installation?',
    answer:
      'Contact us to ask about current availability. Installation timing depends on the project and the schedule at the time of your request.'
  },
  {
    question: 'How do I request a quote or phone call?',
    answer: `Use the contact form to describe your home, town, desired display, and timing. You can ask for a phone call in the project description or call ${PHONE_DISPLAY} directly.`
  }
]

function ContactActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
      <Link
        href={contactHref}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-black transition-[background-color,color,transform] duration-200 hover:bg-secondary hover:text-white active:translate-y-px focus-visible:bg-secondary focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        Request Christmas Light Installation
      </Link>
      <a
        href={PHONE_HREF}
        className="inline-flex min-h-12 items-center justify-center border-b border-primary/70 text-center text-sm font-semibold text-white transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        Call {PHONE_DISPLAY}
      </a>
    </div>
  )
}

function HolidayHeroArtwork() {
  return (
    <div className="relative min-h-[380px] overflow-hidden bg-[#1b1b1a] sm:min-h-[480px] lg:-ml-12 lg:min-h-[620px] lg:bg-transparent">
      <Image
        src="/essex-holiday-lighting-illustration.jpg"
        alt="Illustration of a home with warm seasonal lights along the roofline"
        fill
        priority
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover object-center lg:[mask-image:linear-gradient(to_right,transparent,black_22%)]"
      />
    </div>
  )
}

export default function EssexCountyContent() {
  return (
    <main className="bg-black text-white">
      <section className="border-b border-white/10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-custom px-6">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[#b9b9b5]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary focus-visible:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services/holiday-lighting"
                  className="hover:text-primary focus-visible:underline">
                  Holiday Lighting
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Essex County
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:gap-16">
            <div>
              <p className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <span
                  aria-hidden="true"
                  className="h-px w-9 shrink-0 bg-primary"
                />
                <span>Holiday lighting for Essex County homes</span>
              </p>
              <h1 className="mb-7 max-w-[16ch] text-[clamp(2.45rem,4vw,3.75rem)] leading-[1.1] tracking-tight text-white">
                Christmas Light Installation in{' '}
                <span className="text-primary">Essex County, NJ</span>
              </h1>
              <p className="mb-9 max-w-[59ch] text-base leading-7 text-[#c9c9c5] md:text-lg md:leading-8">
                Jones Pressure Washing installs seasonal Christmas and holiday
                lights for homes throughout Essex County. We supply the
                installation materials and include maintenance, removal, and
                storage in the service.
              </p>
              <ContactActions />
            </div>
            <HolidayHeroArtwork />
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 lg:py-28"
        aria-labelledby="included-heading">
        <div className="mx-auto grid max-w-custom gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="max-w-md">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              The service
            </p>
            <h2 id="included-heading" className="mb-5 text-white">
              Everything from installation through takedown
            </h2>
            <p className="leading-7 text-[#b9b9b5]">
              The seasonal service includes the steps below. We will discuss
              your display details and project terms when preparing a quote.
            </p>
          </div>
          <ol className="border-t border-white/20">
            {inclusions.map((inclusion, index) => (
              <li
                key={inclusion.title}
                className="grid gap-3 border-b border-white/20 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6 md:py-9">
                <span className="font-poppins text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-3 text-xl text-white md:text-2xl">
                    {inclusion.title}
                  </h3>
                  <p className="max-w-[58ch] leading-7 text-[#b9b9b5]">
                    {inclusion.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-[#20201e] py-16 md:py-24"
        aria-labelledby="process-heading">
        <div className="mx-auto grid max-w-custom gap-12 px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Getting started
            </p>
            <h2 id="process-heading" className="mb-6 max-w-[16ch] text-white">
              Tell us what you have in mind
            </h2>
            <p className="mb-5 max-w-[55ch] leading-7 text-[#c9c9c5]">
              Share your town, the areas of your home you want to light, and
              your preferred timing. We will review the details and discuss
              current availability and the scope of a quote.
            </p>
            <p className="max-w-[55ch] leading-7 text-[#c9c9c5]">
              The contact form is shared with our other services. Mention
              Christmas or holiday lighting in the project description, and ask
              for a phone call there if you would rather speak with us.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-lg text-white">
              What to include in your request
            </h3>
            <ul className="border-t border-white/20">
              {[
                'Your Essex County town and property address',
                'The areas of your home you want to light',
                'Your preferred installation timing',
                'Whether you would like a phone call'
              ].map((detail, index) => (
                <li
                  key={detail}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-white/20 py-4 leading-6 text-[#e2e2df]">
                  <span className="font-poppins text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="scope-heading">
        <div className="mx-auto max-w-custom px-6">
          <div className="grid gap-8 border-l-2 border-primary pl-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-16 md:pl-10">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Service area
              </p>
              <h2 id="scope-heading" className="mb-5 text-white">
                Seasonal lighting for Essex County homes
              </h2>
              <p className="max-w-[58ch] leading-7 text-[#b9b9b5]">
                We serve homeowners throughout Essex County. The service on this
                page is for removable seasonal displays; it does not cover
                permanent lighting or unrelated outdoor lighting projects.
              </p>
            </div>
            <div className="md:pt-10">
              <h3 className="mb-3 text-lg text-white">
                Ask about current availability
              </h3>
              <p className="leading-7 text-[#b9b9b5]">
                Installation timing varies with the project and the current
                schedule. Send us the details of your home and display so we can
                discuss the next available options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-[#1b1b1a] py-16 md:py-24"
        aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-custom gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Common questions
            </p>
            <h2 id="faq-heading" className="mb-5 max-w-[16ch] text-white">
              Essex County Christmas lighting questions
            </h2>
            <p className="max-w-md leading-7 text-[#b9b9b5]">
              A few details to help you decide whether this seasonal service
              fits your home.
            </p>
          </div>
          <div className="border-t border-white/20">
            {faqs.map(faq => (
              <details
                key={faq.question}
                className="group border-b border-white/20 open:pb-6">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-poppins text-base font-semibold text-white marker:content-none hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary">
                    <span className="absolute h-px w-2.5 bg-current" />
                    <span className="absolute h-2.5 w-px bg-current group-open:hidden" />
                  </span>
                </summary>
                <p className="max-w-[62ch] pr-10 leading-7 text-[#b9b9b5]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-primary/50 py-16 md:py-24 lg:py-28"
        aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-custom gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Your next step
            </p>
            <h2
              id="contact-heading"
              className="mb-0 max-w-[17ch] text-[clamp(2rem,4vw,3.7rem)] leading-[1.13] tracking-tight text-white">
              Tell us about your Essex County home
            </h2>
          </div>
          <div>
            <p className="mb-7 max-w-[52ch] leading-7 text-[#c9c9c5]">
              Describe the seasonal display you want and ask about current
              availability. We will review your request before providing a
              quote. You can also call us directly.
            </p>
            <ContactActions />
          </div>
        </div>
      </section>
    </main>
  )
}
