# DEV-1353 — Lead attribution, Lavo forms, and privacy audit

**Audited:** September 28, 2026; qualification definition clarified from the Kyle meeting record  
**Scope:** Jones Pressure Washing website, holiday-lighting contact path, and lead-source measurement  
**Mode:** Read-only audit; no site, CRM, analytics, or consent configuration changed

## Decision and business question

Route homeowners interested in seasonal Christmas-light installation to a usable contact path now, then measure separately: website contact intent, confirmed Lavo submissions, qualified leads, booked jobs, and revenue. The website must not count an iframe open or phone-link click as a completed lead. The September 27 Kyle meeting established that holiday lighting is absent from the existing Lavo instant-quote workflow, that Lavo holds booked and revenue outcomes, and that Kyle can distinguish holiday-lighting outcomes from soft washing.

## Evidence and current system inventory

| Finding | Evidence class and source | Consequence |
| --- | --- | --- |
| The site embeds a Lavo pressure-washing instant-quote tool in `CtaModal.tsx`. The live public tool starts with a property-address step under “Pressure Washing Quote Tool.” | Observed in source and the public Lavo form on September 28 | Do not route holiday-lighting traffic to it. |
| `/contact` embeds a separate Lavo request form. The public form shows first and last name, email or phone, optional company name and service address, and a required open project-description field. It has no visible holiday-lighting selector, project-timing field, or request-a-call choice. | Observed in `ContactContent.tsx` and the public Lavo request form on September 28 | A homeowner can describe a holiday-lighting project and ask for a call in free text, but structured holiday qualification and service tagging are not verified. |
| The Lavo request form displays marketing email and SMS choices. In this inspection, the email choice appeared selected and SMS unselected. | Observed public form state on September 28 | Review Lavo's account-level consent configuration and public wording before changing the form or adding tracking. Do not infer that the website controls those choices. |
| The repository loads SiteBehaviour from `src/app/layout.tsx`; no GA4/GTM tag, consent layer, source-persistence code, form-completion listener, or site privacy route was found in `src/`. The footer links to `/privacy`, but no matching route appeared in the source inventory. | Observed repository search on September 28 | GA4, consent, and completion measurement require separate implementation and validation; deployed or externally injected tags remain unverified. Check the footer's privacy destination before adding more tracking. |
| Lavo's public site advertises Custom Forms on its plans and Webhook Integrations on Complete. | [Lavo product page](https://lavocrm.com/) (primary-source capability claim) | A dedicated form is plausible, but Jones's plan, form-builder fields, integration access, and configured events are unknown. |
| No account-level evidence was available for Lavo form analytics, completion URL, `postMessage`, webhooks, API, Zapier, exports, or GA4 integration on Jones's form. | Unknown; public form inspection cannot establish back-office behavior | Do not implement submission tracking or a source-to-CRM join by assumption. |

## Current data flow and attribution break

```text
Search / GBP / referral / direct / campaign
  -> Jones page (GSC sees aggregate Google-search exposure)
  -> holiday CTA or phone link (no GA4 event in repository today)
  -> generic /contact page -> cross-origin Lavo request iframe
       -> possible Lavo lead (receipt and source linkage not visible to parent page)
  -> or phone/text (connected-call and qualification status not visible to site)
  -> Kyle's Lavo lead / quote / job / revenue records (service separation confirmed)
```

The site can identify the clicked page and link after a site-controlled analytics implementation. It cannot observe a completed cross-origin Lavo form submission from the parent page without a documented callback, redirect, webhook, destination-side tag, or supported integration. The present request form does not visibly preserve original landing page, referrer, or campaign fields in the Lavo lead.

## Contact-path decision for DEV-1354

1. **Preferred:** Kyle or an authorized Lavo administrator verifies whether his account can create a dedicated holiday-lighting request form with service fixed to holiday lighting; property location, desired display or project details, preferred timing, and an optional request-for-phone-call choice; and an approved confirmation behavior. Use it only after a no-PII test submission confirms receipt, service classification, and consent behavior.
2. **Approved interim fallback:** Route holiday-lighting CTAs to the existing `/contact` page, with holiday-specific context on that page and guidance to describe the display and request a callback in the project-description field. Preserve the phone link as an alternative. Do not send visitors to the instant-quote modal. A query flag such as `?service=holiday-lighting` may control the page context only after implementation; it must never contain a name, address, phone number, email, or project text. The flag alone does not prove a completed lead or reach Lavo.
3. **Lead receipt:** Kyle checks Lavo for submitted holiday-lighting requests and sent quotes, applying the already agreed homeowner qualification rule. If the form cannot label service, he must classify it from the request; report that classification as a manual process. A redacted monthly aggregate by service is sufficient for the first reporting cycle when event-level export is unavailable. Calls are secondary and are not counted as qualified solely from a phone click.

## Measurement contract

| Stage | Definition | Source of record now / after implementation |
| --- | --- | --- |
| Search visibility | GSC impressions and clicks for the exact holiday-lighting URLs, with dates and filters | GSC aggregate export; it does not identify individual leads |
| Landing session | Visit to a priority page, grouped by acquisition source | GA4 only after installation, consent review, and validation; currently unknown |
| Contact intent | Holiday CTA click, generic contact link click, or `tel:` click | Site-controlled GA4 event after implementation; never a completed lead |
| Confirmed lead | Lavo receipt of a holiday-lighting contact request or a quote request recorded in Lavo | Lavo; do not infer from clicks or calls alone |
| Qualified lead | Homeowner who submits the contact-page form or receives a quote, following the September 27 meeting definition | Lavo and Kyle's service/customer classification; separately count tests, duplicates, and non-homeowner requests |
| Booked job | Customer explicitly accepts the work | Lavo job/quote status confirmed by Kyle |
| Revenue | Quoted, booked, invoiced, and collected amounts must be labeled separately | Lavo or owner aggregate; never infer from traffic |

**Source taxonomy:** Keep GA4's observed source/medium and landing-page evidence as raw values when available. Report Google organic website visits, tagged Google Business Profile visits, referral, named UTM campaigns, direct, and unknown separately. Do not relabel missing source as direct or organic. Do not add UTMs to internal links. GBP-specific tagging is a separate, reviewed change; no current GBP tagging was verified. First touch, current session, and self-reported source must remain distinct if Lavo later supports them.

**Proposed site-controlled events for implementation:** `holiday_contact_click` and `phone_click`, with only fixed non-PII parameters such as `service=holiday_lighting`, `page_path` from a known route allowlist, and `destination=contact|phone`. Deduplicate accidental repeated clicks within an agreed short window for reporting, without suppressing real later sessions. Send `generate_lead` only when a verified completion signal exists. Do not copy full URLs, query strings, referrers, form fields, contact details, property address, or free text into event parameters.

**Identifier and join:** A random non-PII lead ID could connect website and Lavo records only if Lavo supports an approved field or callback and the privacy review permits it. No such join exists today. Until then, report GA4 intent totals and Lavo outcomes side by side rather than implying that they reconcile one-to-one.

## Privacy, consent, and owner review

- [Google's Analytics PII guidance](https://support.google.com/analytics/answer/6366371?hl=en) prohibits sending information that Google can recognize as personally identifiable. Keep names, email addresses, phone numbers, street addresses, precise property coordinates, form contents, and customer photos out of GA4 URLs and events. Review automatic page-location collection so accidental PII query parameters cannot be sent.
- [Google consent guidance](https://support.google.com/analytics/answer/10000067?hl=en) explains that consent mode follows a separate consent banner or choice mechanism. Before installing GA4, the site owner should approve the analytics purpose, notice, retention, and consent behavior for the actual audiences and jurisdictions. Lavo's embedded consent choices require a separate account-level review. This audit does not make a legal determination.
- SiteBehaviour currently loads from the repository even though the approved SEO plan excludes it from future measurement decisions. Removing or changing it belongs to a separately authorized tracking change; do not treat its historical screenshot as a lead baseline.
- Do not copy customer-level Lavo exports into the repository, Linear, or GA4. Request redacted test evidence or monthly aggregates by service and stage. Limit CRM access to authorized operators and record who maintains seasonal availability and monthly reports.
- Preserve the existing canonical phone number. Call tracking, recording, routing, consent, and number changes are outside this ticket.

## Verification needed from Jones's Lavo account

| Decision | Minimum evidence requested | Acceptable redacted format | Work that can proceed |
| --- | --- | --- | --- |
| Dedicated form versus fallback | Account plan; form-builder field types; ability to preselect holiday service and offer callback choice; publish/embed URL | Screenshots of settings with customer data hidden | Implement `/contact` fallback in DEV-1354 |
| Completion measurement | Test confirmation behavior; redirect URL or documented parent-window event; available form analytics and submission export | Screen recording or screenshots from a clearly labeled disposable test request, with test contact details redacted | Track CTA intent only |
| Integration and source fields | Whether Jones has webhook, API, Zapier, GA4 integration, landing-page/source fields, and export permissions | Settings screenshots or vendor documentation; no credentials in the repo | Monthly manual aggregate reporting |
| Lead-to-revenue reporting | Holiday versus soft-washing totals for received, qualified, quoted, booked, invoiced, collected, and duplicates | Monthly counts and aggregate amounts, with no customer identifiers | GSC visibility and future GA4 landing/intent reporting |

## DEV-1354 implementation and acceptance handoff

1. Replace holiday-lighting instant-quote CTAs on the hub and county pages with the chosen holiday-specific form or contextual `/contact` fallback. The current generic contact page's “Quick Quote” card must not draw holiday visitors back into the unsupported quote tool.
2. Make the form destination, phone alternative, label, keyboard focus, mobile layout, loading/failure state, and iframe title clear. Do not submit a real customer request during QA; use a labeled test only with Kyle's consent to receive it.
3. Add only the site-controlled intent events after GA4 and consent setup are authorized. Verify source grouping, no PII in event payloads or URLs, event behavior under consent states, and no duplicate counting. Do not emit completion events without a proven Lavo signal.
4. Compare a labeled test request against the Lavo receipt and source/service fields, if accessible. If not, leave completion attribution unknown and use Kyle's monthly aggregate.
5. Record the release date, exact changed URLs, analytics baseline start, test evidence, owner, and rollback path. Rollback restores the prior working generic contact link, not the holiday-ineligible instant-quote path.

**Attribution confidence:** High for observed GSC aggregate visibility and the public form fields; medium for future GA4 site-controlled intent after validation; low for joining website visits to Lavo submissions and booked revenue until an account-level integration or shared identifier is proven.
