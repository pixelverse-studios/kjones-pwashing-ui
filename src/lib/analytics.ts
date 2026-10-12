import citySlugs from '@/lib/data/serviceCitySlugs.json'

export const GA4_MEASUREMENT_ID = 'G-0QVSPPL0VG'
export const ANALYTICS_CHOICE_KEY = 'jpw-analytics-choice-v1'

const campaignSources = new Set([
  'google',
  'bing',
  'facebook',
  'instagram',
  'newsletter',
  'email',
  'qr',
  'flyer'
])
const campaignMedia = new Set([
  'organic',
  'social',
  'email',
  'referral',
  'qr',
  'print',
  'cpc'
])
const campaignNames = new Set([
  'gbp',
  'holiday_lighting_2026',
  'soft_washing_2026'
])

type AnalyticsEvent =
  | 'quote_modal_open'
  | 'contact_click'
  | 'phone_click'
  | 'email_click'
  | 'form_outbound_click'

type Service =
  | 'holiday_lighting'
  | 'soft_washing'
  | 'pressure_washing'
  | 'general'

declare global {
  interface Window {
    dataLayer?: unknown[]
    // ESLint's base rule treats parameters in ambient signatures as unused.
    // eslint-disable-next-line no-unused-vars
    gtag?: (...args: unknown[]) => void
  }
}

const fixedPaths = new Set([
  '/',
  '/about',
  '/contact',
  '/faqs',
  '/privacy',
  '/services/additional',
  '/services/bergen-county',
  '/services/essex-county',
  '/services/holiday-lighting',
  '/services/holiday-lighting/bergen-county',
  '/services/holiday-lighting/essex-county',
  '/services/pressure-washing',
  '/services/soft-washing'
])

export function safePagePath(pathname: string): string {
  const path = pathname.replace(/\/$/, '') || '/'
  if (fixedPaths.has(path)) return path

  const match = path.match(
    /^\/services\/(pressure-washing|soft-washing)\/([a-z-]+)$/
  )
  if (match) {
    const service = match[1] as keyof typeof citySlugs
    if (citySlugs[service].includes(match[2])) return path
  }

  // Unknown routes may contain customer information; never send them to GA4.
  return '/404'
}

export function serviceForPath(path: string): Service {
  if (path.includes('holiday-lighting')) return 'holiday_lighting'
  if (path.includes('soft-washing')) return 'soft_washing'
  if (path.includes('pressure-washing')) return 'pressure_washing'
  return 'general'
}

export function currentService(): Service {
  if (typeof window === 'undefined') return 'general'
  if (
    window.location.pathname === '/contact' &&
    new URLSearchParams(window.location.search).get('service') ===
      'holiday-lighting'
  ) {
    return 'holiday_lighting'
  }
  return serviceForPath(safePagePath(window.location.pathname))
}

export function safeCampaignFields(search: string) {
  const params = new URLSearchParams(search)
  const source = params.get('utm_source')?.toLowerCase()
  const medium = params.get('utm_medium')?.toLowerCase()
  const name = params.get('utm_campaign')?.toLowerCase()

  if (
    !source ||
    !medium ||
    !campaignSources.has(source) ||
    !campaignMedia.has(medium)
  ) {
    return {}
  }

  return {
    campaign_source: source,
    campaign_medium: medium,
    ...(name && campaignNames.has(name) ? { campaign_name: name } : {})
  }
}

export function trackIntent(event: AnalyticsEvent, service?: Service) {
  if (typeof window === 'undefined' || !window.gtag) return
  try {
    if (window.localStorage.getItem(ANALYTICS_CHOICE_KEY) !== 'accepted') return
  } catch {
    return
  }

  const pagePath = safePagePath(window.location.pathname)
  window.gtag('event', event, {
    page_path: pagePath,
    service: service ?? currentService()
  })
}
