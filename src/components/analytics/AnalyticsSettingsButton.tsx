'use client'

import { ANALYTICS_CHOICE_KEY } from '@/lib/analytics'

export default function AnalyticsSettingsButton() {
  return (
    <button
      type="button"
      className="text-white/60 text-xs hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      onClick={() => {
        try {
          window.localStorage.removeItem(ANALYTICS_CHOICE_KEY)
        } catch {
          // Reload still stops any analytics scripts already on the page.
        }
        window.location.reload()
      }}>
      Analytics choices
    </button>
  )
}
