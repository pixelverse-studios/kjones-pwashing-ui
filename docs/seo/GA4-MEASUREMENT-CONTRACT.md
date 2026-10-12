# Jones Pressure Washing GA4 measurement contract

**Status:** Implementation prepared for review; production collection is not yet verified.
**GA4 web stream:** `G-0QVSPPL0VG`
**Website:** `https://www.jonespressurewashingnj.com`

## Question and sources

Measure which organic and local visits reach the priority service and location pages and take a site-controlled contact action. Compare those signals with confirmed inquiries, qualified leads, quotes, booked work, and revenue from Lavo or owner-approved aggregates. A click or iframe load is not a lead.

| Stage | Source |
| --- | --- |
| Google Search exposure | Search Console, by exact page and query where available |
| Landing sessions and site actions | GA4 from the first verified production collection date |
| Confirmed form receipts, qualification, jobs, revenue | Lavo or owner-approved aggregate reporting |
| Google Business Profile interactions | GBP Performance, separate from organic website visits |

GA4 has no pre-install history. Annotate the first verified collection date as a measurement break. Keep SiteBehaviour history separate rather than comparing its totals directly with GA4.

## Collection and consent

The site loads neither GA4 nor SiteBehaviour until the visitor accepts optional analytics. A visitor can reject analytics and use the forms normally. The footer and privacy page provide a way to change the choice. A rejected choice removes first-party GA4 cookies that the site can access; it cannot erase data already received by the vendors.

The `/privacy` page contains a draft explanation of Lavo, GA4, and SiteBehaviour. The business owner must review that text and the consent behavior before a production merge. Review Lavo's own form consent settings separately.

The site sends only known route paths to GA4. Unknown paths become `/404`; full query strings and hashes are not sent. For inbound tagged visits, it accepts allowlisted source, medium, and campaign values, then passes those as GA4 campaign fields. Other values are dropped. Source and medium are taken from GA4's observed acquisition data; do not classify missing data as direct or organic. Do not place UTMs on internal links. GBP-specific tagging and a broader campaign taxonomy need separate review.

## Event contract

| Event | Trigger | Parameters | Stage |
| --- | --- | --- | --- |
| `page_view` | Initial known page and client route change | Sanitized `page_location`, `page_path` | Visit |
| `quote_modal_open` | Instant quote dialog opens | Known `page_path`, fixed `service` | Intent |
| `contact_click` | Link to the site contact page is activated | Known `page_path`, fixed `service` | Intent |
| `phone_click` | `tel:` link is activated | Known `page_path`, fixed `service` | Intent; not a connected call |
| `email_click` | `mailto:` link is activated | Known `page_path`, fixed `service` | Intent |
| `form_outbound_click` | Link to a Lavo form in a new tab is activated | Known `page_path`, fixed `service` | Intent |

`service` is one of `holiday_lighting`, `soft_washing`, `pressure_washing`, or `general`. No contact details, form answers, full URLs, query strings, or customer identifiers are sent. None of these intent events should be marked as a GA4 key event representing a lead.

Do not emit `generate_lead` until Lavo provides a documented and tested completion signal or a confirmed CRM receipt integration. Do not infer submission from iframe loading, resizing, modal opening, or a CTA click. Qualification and revenue stay in Lavo unless a later, separately reviewed integration can transmit them safely.

## GA4 admin settings required before release

1. Confirm that `G-0QVSPPL0VG` belongs to the Jones-owned or Jones-accessible property and the intended production web stream.
2. In the web stream's enhanced measurement settings, turn off **Page changes based on browser history events**. The site sends its own sanitized page views; leaving history page views on may double count navigation.
3. Review automatic form-interaction and outbound-click collection. Disable any setting that duplicates these site events or captures unreviewed Lavo URLs. Keep only features whose parameters have been inspected.
4. Do not mark intent events as lead key events. Configure key events only when a verified completion event exists.
5. Confirm the property reporting time zone, currency, user access, data-retention setting, and internal/developer traffic treatment.

## Verification before and after deployment

- In a preview build, no GA4 or SiteBehaviour request occurs before a choice or after rejection. Both scripts load after acceptance. Changing the choice to reject stops future collection after reload.
- In GA4 DebugView, one sanitized `page_view` appears for initial load and one for each client route change, including a holiday page, `/contact`, and a city page. No query string or customer data appears in event parameters.
- Each quote open, contact link, phone link, email link, and Lavo outbound form link produces one correctly labeled intent event after acceptance and none after rejection.
- Forms, quote modal, phone links, keyboard access, and mobile layout still work with analytics accepted, rejected, or blocked.
- Confirm the correct property receives test events, then record the first production collection date and changed URLs in the release annotation. Mark test traffic separately from the business baseline.

Rollback is to remove or disable the analytics loader and intent handlers while preserving the site's contact flows. Any later Lavo or GBP integration is a separate measured change.
