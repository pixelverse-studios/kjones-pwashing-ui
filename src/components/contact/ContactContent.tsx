'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6'

import { ContactMap } from '@/lib/constants'
import CtaModal from '@/components/cta/CtaModal'
import {
  AnimationProvider,
  useAnimation,
  viewport
} from '@/lib/AnimationContext'

function ContactAnimatedContent() {
  const { variants } = useAnimation()

  const phone = ContactMap.get('phone') ?? '(973) 486-4403'
  const email =
    ContactMap.get('email') ?? 'Hello@jonespressurewashingnj.com'

  return (
    <section className="bg-black nav-offset">
      <div className="max-w-custom mx-auto px-6 py-8">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible"
          className="text-center mb-12">
          <motion.h1 variants={variants.item}>Contact Us</motion.h1>
          <motion.p
            className="text-white mt-4 max-w-2xl mx-auto"
            variants={variants.item}>
            Have a question or need more details about our services? Reach
            out and we&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            variants={variants.item}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <div className="bg-gray rounded-lg p-6">
              <h2 className="text-xl mb-4">Send Us a Message</h2>
              <iframe
                id="lavo-contact-iframe"
                src="https://lavocrm.com/request/d0ea84e6-2337-48b9-8445-f93373361731/6b89109a-a584-4a83-8920-ea331b400a4b?embed=true"
                width="100%"
                height="800"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <motion.div
              className="bg-gray rounded-lg p-6"
              variants={variants.item}>
              <div className="flex items-start gap-4">
                <FaPhone size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="text-white text-lg mb-1">Phone</h3>
                  <Link
                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                    className="text-secondary-lite hover:text-primary transition-colors">
                    {phone}
                  </Link>
                  <p className="text-secondary-lite text-sm mt-1">
                    Text or leave a voicemail for the fastest response.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray rounded-lg p-6"
              variants={variants.item}>
              <div className="flex items-start gap-4">
                <FaEnvelope size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="text-white text-lg mb-1">Email</h3>
                  <Link
                    href={`mailto:${email}`}
                    className="text-secondary-lite hover:text-primary transition-colors break-all">
                    {email}
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray rounded-lg p-6"
              variants={variants.item}>
              <div className="flex items-start gap-4">
                <FaLocationDot size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="text-white text-lg mb-1">Service Area</h3>
                  <p className="text-secondary-lite">
                    Bergen County, Essex County &amp; surrounding areas in
                    New Jersey
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray rounded-lg p-6"
              variants={variants.item}>
              <div className="flex items-start gap-4">
                <FaClock size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="text-white text-lg mb-1">Response Time</h3>
                  <p className="text-secondary-lite text-sm">
                    Estimates are usually provided same day. Text or use the
                    contact form for the fastest response.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-black border border-primary rounded-lg p-6"
              variants={variants.item}>
              <h3 className="text-white text-lg mb-2">
                Need a Quick Quote?
              </h3>
              <p className="text-secondary-lite text-sm mb-4">
                Use our instant quote tool for a fast estimate on your
                project.
              </p>
              <CtaModal variant="default" label="Get an Instant Quote" />
            </motion.div>
          </motion.div>
        </div>

        {/* What to Expect */}
        <motion.div
          className="mt-16"
          variants={variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2
            className="text-center mb-10"
            variants={variants.item}>
            What to Expect
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray rounded-lg p-6 text-center"
              variants={variants.item}>
              <div className="flex justify-center mb-4">
                <span className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </span>
              </div>
              <h3 className="text-white text-lg mb-2">Reach Out</h3>
              <p className="text-secondary-lite text-sm">
                Send us a message through the form, text, or voicemail. We
                receive many calls throughout the day, so a text or form
                submission ensures a timely response.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray rounded-lg p-6 text-center"
              variants={variants.item}>
              <div className="flex justify-center mb-4">
                <span className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </span>
              </div>
              <h3 className="text-white text-lg mb-2">Get Your Estimate</h3>
              <p className="text-secondary-lite text-sm">
                We typically provide estimates the same day. During peak
                season (pre-Memorial Day through early summer), we may be
                booked 2&ndash;4 weeks out.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray rounded-lg p-6 text-center"
              variants={variants.item}>
              <div className="flex justify-center mb-4">
                <span className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </span>
              </div>
              <h3 className="text-white text-lg mb-2">We Get to Work</h3>
              <p className="text-secondary-lite text-sm">
                Once scheduled, we handle everything. We take our time to
                make sure the job gets done right, safe, and damage-free.
                Your satisfaction is our number one priority.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ContactContent() {
  return (
    <AnimationProvider>
      <ContactAnimatedContent />
    </AnimationProvider>
  )
}
