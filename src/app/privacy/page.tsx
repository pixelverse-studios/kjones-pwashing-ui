import type { Metadata } from 'next'
import AnalyticsSettingsButton from '@/components/analytics/AnalyticsSettingsButton'

export const metadata: Metadata = {
  title: 'Privacy Policy | Jones Pressure Washing',
  description:
    'How Jones Pressure Washing handles website inquiries and optional analytics.'
}

export default function PrivacyPage() {
  return (
    <main className="nav-offset bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="mb-8">Privacy Policy</h1>
        <div className="space-y-8 leading-relaxed text-white/85">
          <section>
            <h2 className="mb-3 text-primary">Contact requests</h2>
            <p>
              When you use a contact or quote form, the information you enter is
              sent to Lavo CRM so Jones Pressure Washing can respond to your
              request. The forms are embedded from lavocrm.com. You can also
              contact us by phone or email using the links on this site.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-primary">Optional website analytics</h2>
            <p>
              With your choice, this website loads Google Analytics 4 and
              SiteBehaviour to understand page visits and actions such as
              opening the quote tool or selecting a contact link. SiteBehaviour
              also provides heatmaps and session recordings. These actions are
              recorded as interest, not as confirmed form submissions or calls.
              We do not intentionally send contact form answers or customer
              details to these analytics tools.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-primary">Your analytics choice</h2>
            <p className="mb-3">
              You can accept or reject optional analytics when the choice
              appears. To change your choice later, select the button below.
              Contact and quote forms remain available if you reject analytics.
            </p>
            <AnalyticsSettingsButton />
          </section>
          <section>
            <h2 className="mb-3 text-primary">Questions</h2>
            <p>
              For questions about information you submitted through the site,
              email{' '}
              <a
                href="mailto:Hello@jonespressurewashingnj.com"
                className="text-primary underline">
                Hello@jonespressurewashingnj.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
