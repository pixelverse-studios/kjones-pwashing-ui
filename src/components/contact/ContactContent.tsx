'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6'

import { ContactMap, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'
import CtaModal from '@/components/cta/CtaModal'
import {
  AnimationProvider,
  useAnimation,
  viewport
} from '@/lib/AnimationContext'

const generalFormUrl =
  'https://lavocrm.com/request/d0ea84e6-2337-48b9-8445-f93373361731/6b89109a-a584-4a83-8920-ea331b400a4b'
const holidayFormUrl =
  'https://lavocrm.com/request/d0ea84e6-2337-48b9-8445-f93373361731/1f3dc471-2e9b-493e-b722-ee82b2341f65'
const lavoOrigin = new URL(holidayFormUrl).origin
const holidayFormHeightBuffer = 64
const holidayFormResizeThreshold = 128

function ContactAnimatedContent({
  isHolidayLighting
}: {
  isHolidayLighting: boolean
}) {
  const { variants } = useAnimation()
  const [formLoaded, setFormLoaded] = useState(false)
  const [holidayFormHeight, setHolidayFormHeight] = useState(600)
  const formRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!isHolidayLighting) return

    const handleFormResize = (event: MessageEvent) => {
      if (
        event.origin !== lavoOrigin ||
        event.source !== formRef.current?.contentWindow ||
        !event.data ||
        event.data.type !== 'lavo-resize'
      ) {
        return
      }

      const height = Number(event.data.height)
      if (Number.isFinite(height) && height > 600) {
        setHolidayFormHeight(currentHeight => {
          // Lavo may report the iframe viewport after we grow it. Only a
          // larger content change should trigger another resize.
          const threshold =
            currentHeight === 600 ? 0 : holidayFormResizeThreshold
          if (height <= currentHeight + threshold) return currentHeight
          return Math.min(height + holidayFormHeightBuffer, 4000)
        })
      }
    }

    window.addEventListener('message', handleFormResize)
    return () => window.removeEventListener('message', handleFormResize)
  }, [isHolidayLighting])

  const phone = PHONE_DISPLAY
  const email = ContactMap.get('email') ?? 'Hello@jonespressurewashingnj.com'
  const formUrl = isHolidayLighting ? holidayFormUrl : generalFormUrl

  return (
    <section className="bg-black nav-offset">
      <div className="max-w-custom mx-auto px-6 py-8">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible"
          className="text-center mb-12">
          <motion.h1 variants={variants.item}>
            {isHolidayLighting
              ? 'Request Christmas Light Installation'
              : 'Contact Us'}
          </motion.h1>
          <motion.p
            className="text-white mt-4 max-w-2xl mx-auto"
            variants={variants.item}>
            {isHolidayLighting
              ? 'Tell us about the seasonal lighting you want for your home in Essex County or Bergen County through Paramus and points south.'
              : "Have a question or need more details about our services? Reach out and we'll get back to you as soon as possible."}
          </motion.p>
        </motion.div>

        <div
          className={
            isHolidayLighting
              ? 'mx-auto grid max-w-[1240px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,780px)_minmax(0,1fr)] lg:gap-10'
              : 'grid grid-cols-1 lg:grid-cols-3 gap-8'
          }>
          <motion.div
            className={isHolidayLighting ? 'min-w-0' : 'lg:col-span-2'}
            variants={variants.item}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <div
              className={isHolidayLighting ? 'pt-2' : 'bg-gray rounded-lg p-6'}>
              <h2 className="text-xl mb-4">
                {isHolidayLighting
                  ? 'Tell Us About Your Holiday Lighting Project'
                  : 'Send Us a Message'}
              </h2>
              {isHolidayLighting ? (
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white">
                  Tell us about your home, the display you have in mind, and
                  your preferred timing. You can request a phone call on the
                  form.
                </p>
              ) : null}
              {!formLoaded ? (
                <p
                  role="status"
                  className={
                    isHolidayLighting ? 'sr-only' : 'mb-3 text-sm text-white'
                  }>
                  Loading {isHolidayLighting ? 'holiday lighting' : 'contact'}{' '}
                  form…
                </p>
              ) : null}
              <iframe
                key={formUrl}
                ref={formRef}
                id={
                  isHolidayLighting
                    ? 'lavo-form-1f3dc471-2e9b-493e-b722-ee82b2341f65'
                    : 'lavo-contact-iframe'
                }
                title={`Jones Pressure Washing ${isHolidayLighting ? 'holiday lighting' : 'contact'} request form`}
                src={`${formUrl}?embed=true`}
                className={
                  isHolidayLighting
                    ? 'block w-full max-w-[780px] rounded-xl border border-white/10 bg-[#f4f5f7]'
                    : 'block w-full border-0'
                }
                width="100%"
                height={isHolidayLighting ? holidayFormHeight : 800}
                onLoad={() => setFormLoaded(true)}
              />
              <p className="mt-4 text-sm text-white">
                {isHolidayLighting
                  ? 'Prefer a separate tab?'
                  : 'Form not loading?'}{' '}
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {`Open the ${isHolidayLighting ? 'holiday lighting' : 'contact'} form in a new tab`}
                </a>{' '}
                or{' '}
                {isHolidayLighting ? (
                  <a
                    href={PHONE_HREF}
                    className="text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    call {phone}
                  </a>
                ) : (
                  'call us'
                )}{' '}
                instead.
              </p>
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
                    href={PHONE_HREF}
                    className="text-secondary-lite hover:text-primary transition-colors">
                    {phone}
                  </Link>
                  <p className="text-secondary-lite text-sm mt-1">
                    {isHolidayLighting
                      ? 'Call or text us about your holiday lighting request.'
                      : 'Text or leave a voicemail for the fastest response.'}
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
                    {isHolidayLighting
                      ? 'Essex County, plus Paramus and Bergen County communities south of Paramus.'
                      : 'Bergen County, Essex County & surrounding areas in New Jersey'}
                  </p>
                </div>
              </div>
            </motion.div>

            {!isHolidayLighting ? (
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
            ) : null}

            {!isHolidayLighting ? (
              <motion.div
                className="bg-black border border-primary rounded-lg p-6"
                variants={variants.item}>
                <h3 className="text-white text-lg mb-2">Need a Quick Quote?</h3>
                <p className="text-secondary-lite text-sm mb-4">
                  Use our instant quote tool for a fast estimate on your
                  project.
                </p>
                <CtaModal variant="default" label="Get an Instant Quote" />
              </motion.div>
            ) : null}
          </motion.div>
        </div>

        {/* What to Expect */}
        {!isHolidayLighting ? (
          <motion.div
            className="mt-16"
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}>
            <motion.h2 className="text-center mb-10" variants={variants.item}>
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
                  Once scheduled, we handle everything. We take our time to make
                  sure the job gets done right, safe, and damage-free. Your
                  satisfaction is our number one priority.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}

export default function ContactContent({
  isHolidayLighting = false
}: {
  isHolidayLighting?: boolean
}) {
  return (
    <AnimationProvider>
      <ContactAnimatedContent
        key={isHolidayLighting ? 'holiday' : 'general'}
        isHolidayLighting={isHolidayLighting}
      />
    </AnimationProvider>
  )
}
