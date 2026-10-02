# ADM-47 — Organic, local, lead, and revenue baseline

**Captured:** September 28, 2026  
**Purpose:** Starting point before the 2026 holiday-lighting website release and the later residential soft-washing work  
**Status:** Search visibility and user-reported GBP Performance captured; holiday-lighting Lavo tracking starts from scratch; GA4 planned for installation

## Measurement definitions from Kyle's September 27 meeting

The campaign prioritizes homeowners. A qualified lead is a homeowner who submits the contact-page form or receives a quote, following the operational answer in the [meeting record](./KYLE-MEETING-PUNCHLIST-2026-09-27.md). Holiday-lighting requests must use the contact path because the current Lavo instant-quote tool does not support that service. Phone contact remains an option, but a phone-link click alone is not a lead or a qualified lead. Lavo records booked work and revenue, and Kyle confirmed that holiday-lighting outcomes can be separated from soft-washing outcomes. Kyle maintains current availability and pricing facts and reviews the monthly SEO report.

For reporting, keep these stages separate: GSC visibility; website landing and contact intent after GA4 installation; Lavo contact submissions and sent quotes; qualified homeowner leads; accepted/booked jobs; completed work; invoiced value; and collected revenue. Count tests, spam, duplicates, and non-homeowner requests separately when the source permits. Do not interpret a missing count as zero.

## Source register and coverage

| Source | Current evidence | Baseline status and limit |
| --- | --- | --- |
| Google Search Console | Supplied exact-page exports for three holiday-lighting URLs; Web search, United States, “Last 12 months”; chart dates October 5, 2025–September 23, 2026 | Captured below. Search Console records Google Search visibility, not individual visits or leads. Query exports may omit anonymized queries. |
| Residential soft-washing GSC | Existing [keyword research](./RESIDENTIAL-SOFT-WASHING-KEYWORD-RESEARCH.md) summarizes exact-page exports for the main soft-washing, Livingston, and Montclair pages over October 5, 2025–September 23, 2026 | Directional page-level baseline below. The three other decision-relevant exact-page exports are still assigned to DEV-1505. |
| Google Business Profile | Phil reported Performance totals on September 28 for the requested September 1–27 window: 48 views, 0 website clicks, and 3 calls. Messages did not appear as a metric option in the view he checked. A direct account view or screenshot was not captured in this repository. | User-reported GBP interaction baseline captured below. Messages are unavailable in the checked view, not zero. A repeatable local-visibility snapshot is still pending. GBP calls are not confirmed leads and may overlap with other records. |
| GA4 | Phil confirmed installation is part of this project. No GA4 tag was found in the repository at capture time. | There is **no historical GA4 website baseline**. Start a new GA4 baseline on the first verified production collection date; record the measurement ID, time zone, consent behavior, and release annotation without credentials. |
| Lavo CRM | Phil confirmed access and reported on September 28 that there are no existing holiday-lighting records in Kyle's Lavo CRM. Phil clarified that this campaign should be treated as starting from scratch. This is an owner-side report, not an account export. | Start Lavo holiday-lighting measurement with the first new record. Historical Lavo counts are unavailable; this does not mean there were zero earlier holiday-lighting jobs. Do not infer leads from CTA clicks. |
| SiteBehaviour | A historical screenshot is summarized in the [page brief](./DEV-1511-ESSEX-HOLIDAY-LIGHTING-PAGE-BRIEF.md). | Historical context only. The approved plan excludes it from ongoing measurement and it cannot verify Lavo form completion or qualified leads. |

## Google Search Console holiday-lighting baseline

The raw exports are preserved in Phil's supplied Downloads folders named `:services:holiday-lighting`, `:services:holiday-lighting:essex-county`, and `:services:holiday-lighting:bergen-county`. The `Filters.csv`, `Pages.csv`, and `Chart.csv` files were checked on September 28. The exact URL filter is recorded in each folder. These are page totals from the Pages exports, not a sum of visible query rows.

| Exact page | Clicks | Impressions | CTR | Aggregate average position |
| --- | ---: | ---: | ---: | ---: |
| `/services/holiday-lighting` hub | 0 | 2 | 0% | 5.00 |
| `/services/holiday-lighting/essex-county` | 0 | 609 | 0% | 39.32 |
| `/services/holiday-lighting/bergen-county` | 0 | 106 | 0% | 65.37 |

The Essex page is the only one of these three with meaningful observed seasonal-installation query visibility in the supplied export. The Bergen export has no clear explicit seasonal-installation query in the reviewed rows. The hub's two impressions came from a `site:` query. Average position is an aggregate, not a stable rank for a particular town or query. The exact-page exports establish visibility; they are not a current URL Inspection or indexing-status report. Indexing status therefore remains **unknown** until checked separately.

For a later seasonal comparison, retain the daily chart and compare equivalent 2026 and 2025 windows only where both exist. The supplied export begins October 5, 2025, so it cannot supply a full September 2025 comparison. The Essex page recorded 50 impressions in November 2025 and 106 in December 2025, with zero clicks in each month; the broader annual totals also include substantial ambiguous outdoor-lighting intent. Do not use these counts to forecast 2026 leads.

## Residential soft-washing visibility already documented

The [working keyword research](./RESIDENTIAL-SOFT-WASHING-KEYWORD-RESEARCH.md) records the following exact-page, United States-filtered GSC observations for October 5, 2025–September 23, 2026. These figures are transcribed from that analysis; the source exports were not copied into this repository for this baseline.

| Page | Clicks | Impressions | Aggregate average position | Limitation |
| --- | ---: | ---: | ---: | --- |
| `/services/soft-washing` | 0 | 571 | 29.44 | Core service-page baseline |
| `/services/soft-washing/livingston` | 0 | 76 | Not used as a decision metric | Small volume |
| `/services/soft-washing/montclair` | 1 | 733 | Not used as a campaign metric | Comparison page; leading pressure/power-washing language is outside the approved soft-washing campaign |

DEV-1505 still needs exact-page exports for `/services/additional`, `/services/essex-county`, and the homepage before roof-cleaning and county-hub ownership decisions are finalized. The baseline can remain open to those additions without delaying truthful holiday-lighting content changes.

## Owner-reported holiday-lighting history and pricing context

On September 28, Phil reported Kyle's recollection of **about five holiday-lighting jobs in 2025**, before Kyle began using Lavo for this work. Phil recalled that those jobs were **roughly $500–$700 each**. These are second-hand, approximate job and per-job price estimates, not Lavo-verified counts, invoiced amounts, collected revenue, or SEO-attributed leads. The exact job dates, amounts, and source channels are unknown. Do not turn the range into a revenue baseline or compare it directly with later CRM totals.

Phil also reported that Kyle's **2026 minimum holiday-lighting job price is $800**. This is internal quoting context, not a sale, average job value, or approved public price. The Essex page brief's direction to omit public holiday-lighting prices and price schema still applies.

## Google Business Profile Performance baseline

On September 28, Phil supplied the following figures in response to the request for **September 1–27, 2026** GBP Performance totals. The requested date window is the working period; the exact profile, account time zone, and on-screen date filter were not independently verified in this record.

| Metric | User-reported value | Interpretation |
| --- | ---: | --- |
| Views | 48 | GBP visibility; not website visits or leads |
| Website clicks | 0 | GBP-reported website interaction for the selected view |
| Calls | 3 | GBP-reported call interactions; connected calls, unique callers, qualification, and bookings are unknown |
| Messages | Unavailable | Phil did not see a messages option; do not record zero |

These are profile-level totals, not holiday-lighting-specific outcomes or evidence that the three calls came from SEO. Retain the selected date range and a screenshot if one becomes available; no customer-level call details are needed.

## GBP and Lavo collection contract

Use a single dated pre-release cutoff, currently September 27, 2026, and record the account time zone. Request aggregate reports with no customer names, phone numbers, email addresses, street addresses, free text, or photos.

| Source | Minimum pre-release evidence | Required setting or classification |
| --- | --- | --- |
| GBP Performance | September 1–27, 2026 views, website clicks, and calls were reported by Phil; messages were absent from the checked view. Retain a screenshot or export if convenient. | Exact profile, on-screen date filter, and account time zone remain unverified. Do not add GBP calls to Lavo leads without deduplication. |
| Local visibility | Dated, reproducible search or grid snapshot for approved Essex and Bergen holiday-lighting markets | Query, searcher location or grid, device, date, and result type. A casual unpinned search is research context, not a ranking baseline. |
| Lavo | Begin a new holiday-lighting reporting series with the first record entered after this baseline. From then on, collect submitted contact requests, quotes sent, qualified homeowner leads, booked and completed jobs, invoiced amount, and collected amount by month where available. Soft-washing aggregates belong to later work. | Record the first collection date, service classification, date field, currency, and duplicate/test exclusions. Pre-CRM fields stay unavailable rather than being backfilled as zero. |
| Calls | Only if Kyle already records them: count of connected inquiries, service, and whether a contact form or quote also exists | Preserve as a separate lane until duplicates and qualification are verified. Phone-link clicks are intent only. |

Phil can provide screenshots or redacted exports from accounts he already accesses. No password, customer-level data, or new CRM integration is needed to establish this baseline. Kyle's existing homeowner and quote/contact-form qualification definition should be applied; it does not need to be asked again.

## Attribution and comparison rules

- Keep GSC visibility, GBP interactions, future GA4 sessions/events, and Lavo business outcomes in separate evidence lanes. A matching trend is not a record-level join or proof that SEO caused a sale.
- Preserve organic website, GBP, referral, UTM campaign, direct, and unknown as distinct source labels when supported. Do not assign missing Lavo source values to organic or direct.
- GA4 will begin at installation. Mark that date as a measurement-system break and do not compare its new session or event totals with SiteBehaviour as a like-for-like trend.
- Use lead-created date for inquiry cohorts; label booking, invoice, and collection dates separately. Recent cohorts may not yet have matured into booked or collected work.
- Record the exact holiday-lighting release date and changed URLs. Compare equivalent seasonal windows, accounting for capacity, weather, availability, response time, and any concurrent promotions.

## Current decision

**Proceed with the holiday-lighting implementation handoff.** Search visibility is recorded and reproducible from the supplied exports. User-reported GBP Performance totals are captured with their verification limits. Holiday-lighting Lavo tracking starts from scratch, while the approximately five pre-CRM jobs and their $500–$700 per-job prices remain unverified historical recollections. GA4 has no pre-install history. A repeatable local-visibility snapshot and exact GBP screen settings remain useful follow-ups; they do not block correcting the unsupported quote path or starting new measurement. No further historical Lavo search is needed for this holiday-lighting baseline.
