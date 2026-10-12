'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

import {
  ANALYTICS_CHOICE_KEY,
  CLARITY_PROJECT_ID,
  GA4_MEASUREMENT_ID,
  currentService,
  safeCampaignFields,
  safePagePath,
  serviceForPath,
  trackIntent
} from '@/lib/analytics'

type Choice = 'pending' | 'accepted' | 'rejected' | null

function removeAnalyticsCookies() {
  const host = window.location.hostname
  const domains = [
    host,
    `.${host}`,
    host.replace(/^www\./, ''),
    `.${host.replace(/^www\./, '')}`
  ]
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.trim().split('=')[0]
    if (!name.startsWith('_ga') && name !== '_clck' && name !== '_clsk') return
    domains.forEach(domain => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`
    })
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
  })
}

function safeReferrer(referrer: string): string | undefined {
  if (!referrer) return undefined
  try {
    const url = new URL(referrer)
    return url.origin === window.location.origin
      ? `${url.origin}${safePagePath(url.pathname)}`
      : url.origin
  } catch {
    return undefined
  }
}

function canStartSessionRecorders(): boolean {
  // Both vendors can observe the browser URL and referrer outside GA4's sanitizer.
  const { pathname, search, hash, origin } = window.location
  if (safePagePath(pathname) !== pathname || search || hash) return false
  if (!document.referrer) return true

  try {
    const referrer = new URL(document.referrer)
    if (referrer.search || referrer.hash) return false
    return referrer.origin === origin
      ? safePagePath(referrer.pathname) === referrer.pathname
      : referrer.pathname === '/'
  } catch {
    return false
  }
}

export default function AnalyticsConsent() {
  const pathname = usePathname()
  const [choice, setChoice] = useState<Choice>('pending')
  const [initialized, setInitialized] = useState(false)
  const [recordingEligible, setRecordingEligible] = useState(false)
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(ANALYTICS_CHOICE_KEY)
      setChoice(saved === 'accepted' || saved === 'rejected' ? saved : null)
    } catch {
      // Storage unavailable: keep analytics disabled and offer the choice again.
      setChoice(null)
    }
  }, [])

  useEffect(() => {
    if (choice !== 'accepted' || initialized) return
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      // Google's gtag command queue expects the arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA4_MEASUREMENT_ID, {
      send_page_view: false,
      page_location: `${window.location.origin}${safePagePath(window.location.pathname)}`,
      page_referrer: safeReferrer(document.referrer),
      ...safeCampaignFields(window.location.search)
    })
    setRecordingEligible(canStartSessionRecorders())
    setInitialized(true)
  }, [choice, initialized])

  useEffect(() => {
    if (!initialized || choice !== 'accepted') return
    const path = safePagePath(pathname)
    if (previousPath.current === path) return
    const pageLocation = `${window.location.origin}${path}`
    const pageReferrer = previousPath.current
      ? `${window.location.origin}${previousPath.current}`
      : safeReferrer(document.referrer)
    window.gtag?.('config', GA4_MEASUREMENT_ID, {
      send_page_view: false,
      page_location: pageLocation,
      page_referrer: pageReferrer
    })
    window.gtag?.('event', 'page_view', {
      page_location: pageLocation,
      page_referrer: pageReferrer,
      page_path: path
    })
    previousPath.current = path
  }, [choice, initialized, pathname])

  useEffect(() => {
    if (choice !== 'accepted') return

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a[href]')
      if (!(link instanceof HTMLAnchorElement)) return

      const href = link.getAttribute('href') || ''
      const sourcePath = safePagePath(window.location.pathname)
      if (href.startsWith('tel:')) {
        trackIntent('phone_click')
      } else if (href.startsWith('mailto:')) {
        trackIntent('email_click')
      } else if (href.startsWith('/contact')) {
        trackIntent(
          'contact_click',
          href.includes('service=holiday-lighting')
            ? 'holiday_lighting'
            : serviceForPath(sourcePath)
        )
      } else if (href.startsWith('https://lavocrm.com/')) {
        trackIntent(
          'form_outbound_click',
          href.includes('/1f3dc471-2e9b-493e-b722-ee82b2341f65')
            ? 'holiday_lighting'
            : currentService()
        )
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [choice])

  const saveChoice = (nextChoice: 'accepted' | 'rejected') => {
    try {
      window.localStorage.setItem(ANALYTICS_CHOICE_KEY, nextChoice)
    } catch {
      return
    }

    if (nextChoice === 'rejected') {
      window.clarity?.('consentv2', {
        ad_Storage: 'denied',
        analytics_Storage: 'denied'
      })
      removeAnalyticsCookies()
      if (choice === 'accepted') {
        window.location.reload()
        return
      }
    }
    setChoice(nextChoice)
  }

  return (
    <>
      {initialized ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          {recordingEligible ? (
            <>
              <Script
                id="clarity-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      c[a]('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
                      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, 'clarity', 'script', '${CLARITY_PROJECT_ID}');
                  `
                }}
              />
              <Script
                id="sitebehavior-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      var sbSiteSecret = '368a4814-73ce-42ec-82ee-7d929fde4209';
                      window.sitebehaviourTrackingSecret = sbSiteSecret;
                      var scriptElement = document.createElement('script');
                      scriptElement.async = true;
                      scriptElement.id = 'site-behaviour-script-v2';
                      scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                      document.head.appendChild(scriptElement);
                    })();
                  `
                }}
              />
            </>
          ) : null}
        </>
      ) : null}

      {choice === null ? (
        <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-lg border border-primary bg-black p-5 text-white shadow-xl sm:inset-x-6 sm:flex sm:items-center sm:gap-6">
          <p className="flex-1 text-sm leading-relaxed">
            We use optional analytics to understand visits and contact actions.
            You can choose whether Google Analytics, Microsoft Clarity, and
            SiteBehaviour load. Read our{' '}
            <Link href="/privacy" className="text-primary underline">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => saveChoice('rejected')}
              className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Reject
            </button>
            <button
              type="button"
              onClick={() => saveChoice('accepted')}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Accept analytics
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
