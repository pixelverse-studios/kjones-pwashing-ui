'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaDroplet,
  FaShieldHalved,
  FaHouse,
  FaCloudRain
} from 'react-icons/fa6'

import ServiceHero from '@/components/services/ServiceHero'
import ServiceCta from '@/components/services/ServiceCta'

const smoothEase = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase }
  }
}

const viewport = { once: true, margin: '-100px' as const }

const services = [
  {
    Icon: FaDroplet,
    title: 'Pressure Washing',
    description:
      'Driveways, patios, pool decks, walkways, and commercial concrete cleaned with adjustable pressure that starts low and increases only when needed.',
    href: '/services/pressure-washing'
  },
  {
    Icon: FaShieldHalved,
    title: 'Soft Washing',
    description:
      'Low-pressure cleaning with specialized solutions for vinyl siding, stucco, painted surfaces, and roofs — kills algae at the root for longer-lasting results.',
    href: '/services/soft-washing'
  },
  {
    Icon: FaCloudRain,
    title: 'Gutter Cleaning',
    description:
      'Debris removal, downspout flushing, visual inspection, and pipe jetting when needed. We recommend at least twice a year to prevent water intrusion.',
    href: '/services/additional'
  },
  {
    Icon: FaHouse,
    title: 'Roof Cleaning',
    description:
      'Soft wash only — we remove moss, mold, and black algae streaks without damaging shingles. Many insurance companies require this to maintain coverage.',
    href: '/services/additional'
  }
]

const cities = [
  { name: 'Ridgewood', href: '/services/pressure-washing/ridgewood' },
  { name: 'Wyckoff', href: '/services/pressure-washing/wyckoff' },
  { name: 'Franklin Lakes' },
  { name: 'Mahwah' },
  { name: 'Ramsey' },
  { name: 'Glen Rock' },
  { name: 'Paramus' },
  { name: 'Fair Lawn' },
  { name: 'Tenafly' },
  { name: 'Englewood' },
  { name: 'Fort Lee' },
  { name: 'Cresskill' },
  { name: 'Closter' },
  { name: 'Saddle River' },
  { name: 'Upper Saddle River' },
  { name: 'Allendale' },
  { name: 'Oakland' },
  { name: 'Oradell' },
  { name: 'River Vale' },
  { name: 'Teaneck' },
  { name: 'Hackensack' }
]

const faqs = [
  {
    question: 'What areas of Bergen County do you serve?',
    answer:
      'We serve every borough, township, and village in Bergen County — from Ridgewood and Wyckoff to Fort Lee and Hackensack. If you are in Bergen County, we can get to you.'
  },
  {
    question: 'How do I know if I need pressure washing or soft washing?',
    answer:
      'Pressure washing is for hard surfaces like concrete, stone, and pavers. Soft washing is for delicate surfaces like siding, roofs, and painted wood. We assess your property and recommend the right approach for each surface.'
  },
  {
    question: 'How often should I have my home exterior cleaned?',
    answer:
      'Most Bergen County homes benefit from an annual exterior wash. Properties near wooded areas or with heavy shade may need more frequent cleaning due to faster algae and mold growth.'
  },
  {
    question: 'Do you work with Bergen County HOAs and property managers?',
    answer:
      'Yes. We provide insurance certificates, before-and-after documentation, and can coordinate multi-unit scheduling for townhome communities and commercial properties.'
  },
  {
    question: 'What is the best time of year for exterior cleaning in NJ?',
    answer:
      'April through September is ideal. Warmer months allow cleaning solutions to work most effectively and surfaces to dry properly. We book up fast leading into Memorial Day and early summer.'
  }
]

export default function BergenCountyHubContent() {
  return (
    <main className="bg-black text-white">
      <ServiceHero
        img="/PressureBG.jpeg"
        h1={
          <>
            Bergen County{' '}
            <span className="text-primary">Exterior Cleaning</span> Services
          </>
        }
        description="Pressure washing, soft washing, gutter cleaning, and roof washing for homes and businesses across every Bergen County neighborhood. Locally owned, fully insured, detail-obsessed."
        cta="Get an Instant Quote"
        dimHeroContent
        height="h-[70vh]"
      />

      {/* Services Overview */}
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4 text-center">
            <motion.h2 variants={item}>
              Our Services in{' '}
              <span className="text-primary">Bergen County</span>
            </motion.h2>
            <motion.p className="max-w-3xl mx-auto" variants={item}>
              We offer a full range of exterior cleaning services tailored to
              Bergen County homes and businesses. Every job starts with an
              assessment — we never apply more pressure than the surface needs.
            </motion.p>
          </header>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={item}>
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3 transition-colors hover:border-primary hover:bg-primary/10 block">
                <div className="flex items-center gap-3">
                  <service.Icon className="text-primary" size={24} />
                  <h3 className="text-white text-lg">{service.title}</h3>
                </div>
                <p className="text-white/80">{service.description}</p>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why JPW */}
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h2 variants={item}>
              Why Bergen County Homeowners{' '}
              <span className="text-primary">Choose Us</span>
            </motion.h2>
            <motion.p variants={item}>
              We started this company because we wanted to bring homeowners the
              same joy we experienced coming home to a spotless exterior. That
              means we take our time, pay attention to the details, and never
              rush to hit a number. We might not be the cheapest option — but
              that is exactly what allows us to deliver results you can see from
              the street.
            </motion.p>
            <motion.p variants={item}>
              Every Bergen County project gets a walkthrough before we leave. If
              anything needs attention, we come back at no extra charge. We are
              fully insured, locally owned, and treat every property like it is
              our own.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Cities */}
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>Bergen County Towns We Serve</motion.h2>
            <motion.p variants={item}>
              We cover every zip code in Bergen County. Cities with dedicated
              pages have detailed information about how we tailor our services
              to local architecture and conditions.
            </motion.p>
          </header>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            variants={item}>
            {cities.map(city =>
              city.href ? (
                <Link
                  key={city.name}
                  href={city.href}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-primary hover:bg-primary/10 block cursor-pointer">
                  <span className="text-primary font-semibold">
                    {city.name}
                  </span>
                </Link>
              ) : (
                <div
                  key={city.name}
                  className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="text-white">{city.name}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-8 md:py-12 lg:py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Bergen County Exterior Cleaning FAQs
            </motion.h2>
          </header>
          <div className="space-y-4">
            {faqs.map(faq => (
              <motion.article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
                variants={item}>
                <h3 className="text-primary">{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <ServiceCta
        header="Ready to Clean Up Your Bergen County Property?"
        description="Get a same-day estimate for pressure washing, soft washing, gutter cleaning, or roof washing anywhere in Bergen County."
        cta="Get an Instant Quote"
        buttonLabel="Contact Us"
        showSocial
      />
    </main>
  )
}
