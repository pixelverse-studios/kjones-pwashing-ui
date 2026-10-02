# DEV-1511 — Essex County Christmas Light Installation Page Brief

**Linear ticket:** [DEV-1511](https://linear.app/pixelverse-studios/issue/DEV-1511/draft-provisional-essex-county-holiday-lighting-page-brief)  
**Existing page:** `https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county`  
**Research source:** [Holiday-Lighting Keyword Research](./HOLIDAY-LIGHTING-KEYWORD-RESEARCH.md)  
**Brief date:** September 25, 2026; revised September 28, 2026  
**Status:** Final implementation brief based on the September 27 meeting; unknown claims are excluded from the first release  
**Implementation status:** Website changes are in review under DEV-1357; production release and post-release validation are pending

### Approval record

**Approved by Phil on September 26, 2026:** preserve the existing Essex County URL; define the page around residential removable seasonal Christmas-light installation; lead with `Christmas Light Installation` and use `holiday lighting` secondarily; focus on Essex County; and exclude commercial, permanent, landscape, electrical, security, and event-lighting intent from this page.

**Kyle meeting decisions recorded September 27, 2026:** homeowners only; Jones Pressure Washing supplies installation materials; installation, maintenance, removal, and storage are included; Essex County is served; Bergen County is served through Paramus and locations south of Paramus; public holiday-lighting prices are omitted; the primary page action is a holiday-specific contact path because the Lavo instant-quote flow does not support holiday lighting. Kyle owns ongoing availability and pricing facts. Exact products, ownership terms, maintenance limits, safety methods, response promises, and calendar dates remain unverified and are excluded from first-release claims. The shorthand business-name answer in the meeting notes does not establish the exact spaced public and Google Business Profile name.

**Page structure approved by Phil on September 26, 2026, revised for the meeting:** hero; confirmed service inclusions; customer process limited to verified steps; seasonal-versus-permanent clarification; concise Essex County coverage; authentic proof only when verified; truthful booking guidance without a promised date or capacity; buyer-focused FAQs; and a final contact section. Exact public copy still requires a factual review before publication.

**Current-content disposition approved by Phil on September 26, 2026, revised for the meeting:** preserve the URL and county-page role; replace the unsupported instant-quote conversion path with the approved holiday-specific contact path; rewrite and consolidate the hero, service inclusions, process, service area, timeline, FAQs, and final CTA; remove the long municipality descriptions, invented or unconfirmed packages, generic local-event/weather/architecture material, repetition, unsupported project stories, and commercial/storefront positioning; and exclude every unverified material claim.

**Internal-linking and seasonal-promotion strategy approved by Phil on September 26, 2026:** connect the holiday-lighting hub, Essex County page, supported Bergen County page, seasonal homepage promotion, and contact paths deliberately; correct Bergen page claims before promoting it; avoid forced links and town-page expansion; keep the county pages live and indexable year-round; increase promotion during the active season while displaying only current availability; and reduce promotional prominence without retiring the pages after the season.

**Measurement-platform direction approved by Phil on September 26, 2026:** use Google Search Console and GA4 as the active SEO measurement foundation. Do not use SiteBehaviour for ongoing analysis or decision-making. Retain its supplied screenshot only as historical context. A future reporting layer may visualize GA4 and GSC data without replacing them as sources of record.

**Technical page requirements approved by Phil on September 26, 2026, revised for the meeting:** preserve the URL, canonical, and indexability; keep verified `Service` and breadcrumb markup while removing price and unsupported action claims; require visible/schema consistency; maintain logical headings, contrast, alt text, keyboard access, focus visibility, and reduced-motion support; validate the chosen Lavo form or contact fallback, mobile layout, CTA behavior, phone links, privacy-safe GA4 intent events, rendered metadata, structured data, and conversion-path behavior. Contact-flow implementation and attribution are scoped in DEV-1354 after DEV-1353 establishes the supported Lavo path.

## 1. Content decision

**Decision: improve the existing Essex County page.** Preserve its URL, canonical target, and search history. Do not create a replacement URL or new town pages in this iteration.

The page should become the primary owner of residential, removable, seasonal Christmas and holiday light installation intent in Essex County. It should not attempt to rank for permanent lighting, landscape lighting, security lighting, electrical work, or event lighting.

### Why this is the appropriate owner

- The supplied page-filtered GSC export records 609 impressions, 0 clicks, 0% CTR, and an average position of 39.32 over the supplied last-12-month period.
- It is the only supplied Jones Pressure Washing holiday-lighting URL with meaningful explicit seasonal-installation visibility.
- Relevant query evidence already includes Essex County and West Caldwell installation searches.
- Existing visibility is diluted by ambiguous outdoor, permanent, electrical, security, and smart-lighting language.
- Public results include county service pages and town pages, so an authentic county page is a valid result type without requiring immediate town-page expansion.

The purpose of this revision is not to make the page longer. It is to make the service, audience, geography, proof, and next step clearer.

## 2. Page purpose and audience

### Primary audience

Essex County homeowners seeking a company to plan and install a seasonal Christmas light display rather than buying and installing lights themselves.

### Excluded audiences

Commercial property owners, storefronts, municipalities, event organizers, residential property managers, and HOAs are outside this homeowner page and the currently confirmed holiday-lighting acquisition scope.

### Customer task

Determine whether Jones Pressure Washing serves the property, what the seasonal service includes, how the quote-to-removal process works, what the customer must provide, when to book, how problems are handled, and how to request a qualified quote.

### Lead qualification

A qualified web lead provides accurate contact information, the property location, desired service, timing, and enough property or display detail for Jones Pressure Washing to assess the opportunity. Exact required fields remain dependent on the Lavo workflow and Kyle's operating process.

### Conversion hierarchy

1. **Primary:** open the approved holiday-specific contact form, or the approved holiday-specific contact-page fallback if Lavo cannot support a suitable custom form. The existing instant-quote flow must not be used for holiday lighting.
2. **Secondary:** call `(973) 486-4403` for customers who prefer phone contact or cannot use the form.
3. **Form option:** provide a request-for-phone-call choice if the approved form supports it. Do not promise this before the form path is verified.

Use one consistent holiday-contact CTA label, such as `Request Christmas Light Installation`, after the final form destination is chosen. Phone remains visible and tappable. A CTA click is an intent signal, not a completed lead.

## 3. Search intent and language map

| Intent family | Page role | Recommended use | Notes |
| --- | --- | --- | --- |
| Christmas light installation | Primary | Title, H1, introduction, one useful service heading | Strongest combined wording signal from GSC, Keyword Planner, Trends, and public results |
| Holiday light installation / holiday lighting | Supporting | Natural synonym in body copy, navigation, and selected FAQ wording | More inclusive but more ambiguous in public results |
| Professional installation / installer | Supporting commercial intent | Explain who performs the work and why a customer hires the service | Do not make unsupported credential or superiority claims |
| Essex County, NJ | Primary geography | Title, H1, introduction, service-area section, breadcrumb | County page owns this geographic scope |
| Nutley, Livingston, Verona | Priority towns | Mention only if individually reconfirmed for public copy | Essex County coverage is confirmed; town-level proof and page claims remain a separate decision |
| West Caldwell / Fairfield and other Essex towns | Supporting geography | Mention only when useful and accurate | GSC visibility does not itself prove project history or specialized local expertise |
| Near me / company / service | Satisfied through page usefulness | Do not force exact phrases into headings | Local relevance, clear service area, and conversion details answer this intent naturally |
| Cost / price / minimum | Buyer question | Explain that pricing is provided through the inquiry and quote process | Do not publish a number or price schema |
| Maintenance, removal, storage | Buyer questions and service inclusions | State the confirmed high-level inclusions | Omit repair speed, storage conditions, ownership, and following-season terms until verified |
| Commercial installation | Excluded intent | Omit from the residential page | No commercial holiday-lighting positioning is approved |
| Permanent, landscape, security, electrical, smart, or event lighting | Excluded intent | Add a plain-language boundary if needed; otherwise omit | Do not imply services Jones Pressure Washing does not provide |

No keyword-density target, minimum word count, or required repetition count applies.

## 4. Metadata and page identity

These are implementation directions, not final publishable copy. The working public brand is `Jones Pressure Washing`, which is used in the current logo, repository business constants, homepage metadata, and structured data. Kyle must confirm that this is the exact real-world and Google Business Profile name before publication.

Do not shorten the company to `Jones` in public copy. Do not use `JonesPressureWashing` without spaces except where a literal domain, URL, username, or technically constrained handle requires it. If Kyle confirms a genuinely recognized shorter public name such as `JPW`, it may be evaluated as an alternate site name; it should not be invented for SEO.

| Element | Implementation direction |
| --- | --- |
| URL | Preserve `/services/holiday-lighting/essex-county` |
| Canonical | Preserve self-referencing canonical to the existing URL |
| Title | `Christmas Light Installation Essex County, NJ | Jones Pressure Washing` |
| Meta description | `Request seasonal Christmas light installation for your Essex County home. Jones Pressure Washing supplies materials and includes installation, maintenance, removal, and storage.` |
| H1 | `Christmas Light Installation in Essex County, NJ` |
| Breadcrumb label | `Essex County Christmas Light Installation` or concise `Essex County` |
| Primary CTA | Holiday-specific contact request; final label and destination follow DEV-1353's Lavo investigation |
| Secondary CTA | `Call (973) 486-4403` |
| Preferred site/business name | `Jones Pressure Washing` based on current brand surfaces; exact GBP/business formatting still requires verification |

Recheck the title and description after Kyle confirms the exact brand formatting. Final metadata must match approved service facts and the rendered page. Character counts are not ranking requirements, and Google may display a different snippet.

## 5. Recommended page outline

The structure follows the customer's hiring decision rather than a keyword list.

### 1. Hero: identify the service, place, and next step

- H1 from the page-identity table.
- One short explanation stating that this is seasonal residential Christmas light installation in Essex County.
- Primary holiday-specific contact CTA and a tappable phone alternative.
- Use authentic Jones Pressure Washing holiday-lighting media if available. Do not use a pressure-washing image or present stock/AI imagery as a Jones Pressure Washing project.

### 2. What the seasonal service includes

Answer the largest pre-contact uncertainty in a scannable list. Confirmed high-level inclusions are company-supplied installation materials, installation, maintenance, removal, and storage. Do not imply a specific product, repair service level, storage condition, or following-season reinstallation without verification.

Do not claim that the customer owns the lights or that Jones Pressure Washing installs customer-supplied products; both remain unknown.

### 3. How the process works

Use only the stages Jones Pressure Washing actually follows. A likely sequence to verify is:

1. Customer submits the approved holiday-specific contact request; the requested fields depend on the verified Lavo form or fallback.
2. Jones Pressure Washing reviews the request and prepares a quote using its actual process.
3. Customer approves the scope, price, and installation window.
4. Jones Pressure Washing installs and tests the display.
5. Jones Pressure Washing provides the confirmed maintenance inclusion, without a response-time promise.
6. Jones Pressure Washing removes and stores the display under terms Kyle will verify before detailed copy is published.

Do not promise 3D mockups, lift trucks, warehouses, project managers, response times, or materials until confirmed.

### 4. Seasonal versus permanent lighting

Briefly state what Jones Pressure Washing offers and what this page does not cover. This section should prevent the page from implying landscape, architectural, security, smart-home, electrical, or permanent-lighting services.

Permanent lighting is outside the confirmed seasonal offer and this page.

### 5. Essex County service area

- Lead with confirmed Essex County coverage.
- Nutley, Livingston, and Verona can be named within the confirmed county service area once Kyle approves the exact public town list; do not imply completed projects there.
- Add other towns only when they are genuinely served and useful to customers.
- Use a concise service-area statement rather than one templated card per municipality.
- Do not imply an office, warehouse, staff presence, completed project, or specialized town knowledge without evidence.

### 6. Jones Pressure Washing project and trust proof

This should be the page's original-value section. Preferred evidence, in order:

1. Permissioned photos from completed Jones Pressure Washing holiday-lighting projects.
2. Short factual project examples with service, approximate date, town, challenge, work completed, and permission status.
3. Holiday-lighting-specific customer reviews with platform and capture date.
4. Accurate crew, insurance, training, safety, or process evidence.

If no holiday-lighting proof is available, use accurate process information and transparent expectations. Do not preserve invented or unverifiable success stories.

### 7. Booking timing and availability

Invite customers to ask about current availability. The meeting shorthand `asap & 5/week` is not a publishable calendar, cutoff, or capacity promise. Kyle must supply exact current language before dates or urgency are displayed.

Use conditional language for weather and availability. Do not guarantee dates controlled by weather, materials, or crew capacity.

### 8. Buyer-focused FAQs

Include only questions Jones Pressure Washing can answer accurately. Recommended candidates:

- What is included in Christmas light installation?
- Does Jones Pressure Washing supply the lights, and who owns them?
- Do you install customer-owned lights?
- How is a holiday-lighting quote prepared? (No public price or minimum.)
- When should I book, and when are lights installed?
- What happens if part of the display stops working?
- Are takedown and storage included?
- Which Essex County towns do you serve?
- Is this seasonal or permanent lighting?
- What property details or photos are needed for a quote?

Do not add FAQ structured data merely because the questions appear on the page. Any structured data must be eligible, visible, accurate, and consistent with the final copy.

### 9. Final conversion section

- Restate the task and confirmed service area.
- Use the same primary holiday-specific contact CTA.
- Keep the phone link visible.
- Avoid unverified scarcity, one-business-day response, free consultation, or guaranteed availability language.

## 6. Current content disposition

| Current element | Decision | Reason or dependency |
| --- | --- | --- |
| Existing Essex County URL | Preserve | Owns current history and relevant visibility |
| County-level service-page role | Preserve and clarify | Matches the intended market and observed result type |
| `Holiday Lighting Pros` H1 | Improve | Lead with clearer `Christmas Light Installation` task language |
| Long town-by-town cards | Consolidate | Mostly generic local descriptions; risk of unsupported local expertise and diluted purpose |
| Residential and commercial copy mixed together | Remove commercial positioning | The confirmed acquisition scope is homeowners only |
| Named packages | Remove | Existing names and inclusions lack first-party verification |
| July–January timeline | Replace with verified process and dates | Current timeline asserts mockups, procurement, equipment, storage, and operating details |
| Montclair and Maplewood success stories | Remove | Kyle requested replacement with a verified standout project when assets and permission are supplied |
| Event, traffic, weather, and neighborhood descriptions | Remove or sharply reduce | Mostly generic context that does not help the customer verify Jones Pressure Washing's service |
| Customer preparation checklist | Keep only useful verified items | Electrical and safety instructions require accurate operational review |
| FAQs | Rewrite from approved buyer questions | Current answers contain unverified service and guarantee claims |
| Repeated quote CTAs | Replace and consolidate | Use the approved holiday-specific contact path consistently |
| `$699` structured-data minimum and all holiday-lighting price markup | Remove | The approved policy is no public holiday-lighting pricing |
| `ReserveAction` schema | Reassess | A quote request is not necessarily a reservation |
| Service and breadcrumb schema | Retain in principle, revise after approval | Must match visible, verified content and actual coverage |

## 7. Claim-and-proof register

The statuses below reflect the September 27 meeting record and ADM-42. `Approved with narrower wording` means only the stated high-level fact may appear. `Unknown` and `Rejected` claims are excluded from the first release. A factual copy review still checks the final wording before publication.

| ID | Material claim or decision | Current status | Meeting evidence or remaining verification | First-release disposition | Owner / validation |
| --- | --- | --- | --- | --- | --- |
| HL-C01 | Seasonal residential Christmas light installation | Approved with narrower wording | Kyle meeting and ADM-42 confirm seasonal homeowner scope; whether any separate permanent service exists is outside this page | State seasonal homeowner service; do not imply other lighting services | Kyle; final copy review |
| HL-C02 | Essex County coverage, including named priority towns | Approved with narrower wording | Kyle confirmed Essex County; individual town proof and claims remain to be checked | State Essex County coverage; use a short, accurate town list only after copy review | Kyle; visible copy and `areaServed` |
| HL-C03 | Jones Pressure Washing supplies the installation materials and specific products | Approved with narrower wording | Company-supplied materials confirmed; product list unknown | State company-supplied materials without LEDs, timers, wreaths, controls, or grade claims | Kyle; compare final copy with actual offering |
| HL-C04 | Light ownership, leasing, replacement, and customer-owned product policy | Unknown | Meeting confirms supply, not ownership or customer-owned installation | Omit ownership and customer-owned-light claims | Kyle; terms or estimate process |
| HL-C05 | Design consultation or custom design is included or free | Unknown | Exact design and fee process was not recorded | Omit design and free-consultation promises | Kyle; process review |
| HL-C06 | In-season maintenance and repair are included | Approved with narrower wording | Maintenance included; repair scope, exclusions, and response times unknown | State maintenance inclusion only, without repair or speed promise | Kyle; service terms |
| HL-C07 | Removal, labeling, storage, and next-season reinstallation are included | Approved with narrower wording | Removal and storage included; labeling, storage conditions, and reinstallation unknown | State removal and storage only | Kyle; service terms |
| HL-C08 | Installation, maintenance, takedown, or response timing | Unknown | `asap & 5/week` is meeting shorthand, not a public schedule or capacity policy | Ask customers to inquire about availability; publish no dates, cutoff, or capacity promise | Kyle; dated seasonal update |
| HL-C09 | `$699` minimum or other public holiday-lighting price | Rejected for publication | Kyle's decision is no displayed holiday-lighting pricing; internal quoting facts remain private | Remove all visible prices and price schema; explain quote process without a number | Phil; visible copy and JSON-LD check |
| HL-C10 | OSHA-trained technicians or other credentials | Unknown | No training records or applicable wording supplied | Remove credential claims | Kyle; documented training if later requested |
| HL-C11 | Insurance, licensing, bonding, and safety-compliance claims | Approved with narrower wording | Kyle stated holiday-lighting work is insured; policy scope and documentation, licensing, bonding, and safety claims remain unverified | Hold public insurance wording until current evidence and exact phrasing are checked; omit other claims | Kyle; current certificate and copy review |
| HL-C12 | HOA or historic-board coordination and documents | Rejected for this page | Homeowners-only acquisition scope; no coordination capability confirmed | Remove HOA and board-service claims | Phil; copy review |
| HL-C13 | App-controlled, color-changing, custom-cut, or programmable systems | Unknown | Product details not recorded | Omit specific-system claims | Kyle; product list |
| HL-C14 | Commercial, storefront, HOA, municipal, or event work | Rejected for this campaign | Kyle confirmed homeowners only and no commercial positioning | Remove non-homeowner audience claims | Phil; page and schema review |
| HL-C15 | Montclair hillside-home project | Rejected as current proof | Kyle requested removal of existing project stories pending verified replacement | Remove the story; add a project later only with facts and permission | Kyle; asset register |
| HL-C16 | Maplewood storefront project and claimed outcomes | Rejected as current proof | Storefront audience is excluded and outcomes have no direct evidence | Remove story and foot-traffic/social claims | Kyle; asset register |
| HL-C17 | Holiday-lighting reviews, quotes, ratings, and totals | Unknown | Attributable source and capture context not supplied | Omit specific reviews and ratings until verified; request honest reviews without incentives | Kyle/Phil; source review |
| HL-C18 | Completed-job photos and identifiable property or crew images | Unknown | Shared collection folder exists; project context and publication permission pending | Use only verified, permissioned media; first release can proceed without it | Kyle/Phil; asset register |
| HL-C19 | One-business-day response, rapid repair, or same-week service | Unknown | No supported service-level commitment recorded | Remove response and repair-speed promises | Kyle; seasonal review |
| HL-C20 | Every Essex County municipality is served | Approved with narrower wording | Kyle stated all of Essex County is served; no project history in each town was confirmed | State county coverage without implying a local office, completed job, or specialized town expertise | Kyle; visible copy and `areaServed` |
| HL-C21 | Exact public and Google Business Profile name is `Jones Pressure Washing` | Unknown | Meeting shorthand reads `JonesPressureWashing`; current site and logo use spaced `Jones Pressure Washing` | Keep the existing spaced brand in draft copy; verify exact official formatting before publication | Kyle; GBP and controlled brand surfaces |

No protected contracts, customer records, addresses, or private financial details should be copied into the repository. The register should record where authorized evidence can be rechecked.

## 8. Internal-link and site role

### Required relationships

- `/services/holiday-lighting` remains the general service overview and county-navigation hub; it should link clearly to the Essex County page.
- The Essex County page should link back to the holiday-lighting hub through breadcrumbs and a useful contextual path.
- The homepage may feature the Essex County page during the active seasonal promotion window.
- The Essex page should connect directly to the approved holiday-specific contact path and phone alternative.
- The Bergen County page has a distinct county role and confirmed Paramus-and-south boundary; correct its unsupported claims before promoting the link.

### Avoid

- Do not force contextual links from unrelated pressure-washing or soft-washing copy merely to distribute authority.
- Do not create footer-scale town links or city pages from the town list.
- Do not point several pages at the same Essex County seasonal-installation task without a clear ownership distinction.

## 9. Seasonal publishing and promotion behavior

- Keep the Essex County page live, indexable, internally discoverable, and factually maintained throughout the year.
- Do not delete, redirect, canonicalize away, or `noindex` the page after December.
- Increase homepage and holiday-hub prominence in late summer or early fall, before the November acceleration seen in completed Trends cycles.
- During the active season, show current booking timing only when Kyle supplies and maintains it.
- When capacity closes, replace booking urgency with an accurate waitlist, next-season, or contact message rather than leaving an unavailable offer active.
- After the season, reduce promotional prominence while retaining useful evergreen information and an accurate next step.
- Review time-sensitive availability, pricing, cutoff, and scheduling claims before each season.

### Planned reminder-ticket schedule

The 2026 implementation and monitoring tickets have been created from the September 27 meeting. Annual reminder tickets use the following planning dates unless Kyle's operating calendar requires an earlier deadline:

| Timing | Planned reminder ticket | Purpose |
| --- | --- | --- |
| August 1 each year | Verify holiday-lighting offer and proof | Reconfirm services, territory, pricing, products, guarantees, credentials, project proof, media permissions, and Lavo access before editing the page |
| August 15 each year | Refresh and validate the Essex seasonal page | Update approved copy, availability, structured data, images, CTAs, internal links, and tracking before demand accelerates |
| September 1 each year | Activate seasonal homepage promotion | Add or enable the approved homepage path to the Essex page and confirm navigation visibility |
| Weekly from September 1 through December 31 | Review demand, tracking, lead quality, and capacity | Check GSC, GA4, Lavo or owner-reported outcomes, phone leads, availability, and whether the page's active-season message remains accurate |
| When capacity or installation cutoff is reached | Replace availability messaging | Remove misleading urgency or unavailable installation promises and publish the approved waitlist, limited-availability, or next-season message |
| January 5 each year | Remove expired promotion and switch to off-season state | Reduce homepage prominence, remove expired dates, and keep the Essex page live with an accurate next step |
| January 15 each year | Complete seasonal performance review | Compare the completed season with the prior equivalent period, document tracking limitations, and decide what to keep, revise, investigate, or test next |

Do not turn planning dates into public availability promises. Kyle maintains current capacity and cutoff information.

## 10. Structured data, accessibility, mobile, and conversion requirements

### Structured data

- Keep breadcrumb markup aligned with visible breadcrumbs.
- Use `Service` only for the verified service and verified provider information.
- Limit `areaServed` to confirmed coverage; do not use schema to claim every town by default.
- Remove the `$699` `Offer` and all holiday-lighting price markup; pricing is not displayed publicly.
- Reassess `ReserveAction`; the Lavo workflow appears to request a quote, not necessarily create a reservation.
- Do not add review, rating, availability, or FAQ markup without current visible support and eligibility.

### Accessibility and mobile usability

- Use one visible H1 and a logical H2/H3 hierarchy.
- Keep text readable over the hero image with sufficient contrast.
- Provide descriptive alt text for authentic project images; decorative images should use empty alt text.
- Do not place essential service facts only inside images, animation, accordions, or inaccessible iframe content.
- Ensure the selected contact form or fallback, phone link, FAQ controls, and all buttons are keyboard accessible and visibly focused.
- Respect reduced-motion preferences and preserve content when animation is disabled.
- Keep the primary CTA usable on small screens without covering content or creating repeated competing buttons.

### Conversion behavior

- The primary CTA must clearly open the approved holiday-specific contact experience. The existing Lavo instant-quote tool does not support holiday lighting.
- The iframe should have an accurate title and usable focus behavior.
- Failure, loading, close, and return-to-page behavior should be tested on mobile and desktop.
- Phone numbers must use a `tel:` link and display the same approved business number.
- Do not claim a completed contact submission from a button click.

## 11. Measurement contract

### Baseline

| Signal | Baseline or status | Source / limitation |
| --- | --- | --- |
| Essex page Google organic visibility | 609 impressions, 0 clicks, 0% CTR, average position 39.32 | Supplied exact-page, United States-filtered GSC last-12-month export; average position is aggregate and visible queries may exclude anonymized data |
| GA4 | Not yet installed for this site | Required implementation dependency for ongoing website analytics |
| Lavo holiday-contact completion and booked-job data | Access unknown | The dedicated form or fallback is still being investigated; a cross-origin iframe limits site-controlled completion tracking unless Lavo supports access, events, export, or integration |
| Phone leads, booked jobs, and revenue | Not yet connected to page/session evidence | Requires owner process or tooling decision |
| SiteBehaviour historical screenshot | 12-month screenshot reports 622 visits, 520 users, 0 form interactions, and 17 link-click visitors sitewide | Archived context only; excluded from ongoing analytics, baselines, and decision-making |

### Active measurement roles

| System | Role |
| --- | --- |
| Google Search Console | Organic Google Search impressions, clicks, CTR, average position, pages, queries, devices, countries, and comparable date ranges |
| GA4 | Organic landing sessions, user behavior, site-controlled CTA events, phone-link clicks, and other verified on-site interactions |
| Lavo or another authorized source of record | Confirmed holiday-contact submissions and later lead stages when access or integration exists |
| Owner job records or a future CRM/reporting workflow | Qualified leads, booked estimates, booked jobs, job value, and revenue |
| Future reporting layer | Easier visualization of approved GA4, GSC, and outcome data; it does not become the underlying source of record |

SiteBehaviour should not be reconciled against GA4 or used to judge post-launch performance. GA4 begins a new website-analytics baseline from its verified installation date.

### Required events and outcomes

Measure the funnel in separate stages rather than treating traffic or clicks as revenue:

1. GSC impressions and clicks for the exact Essex page and relevant query clusters.
2. Organic landing sessions to the Essex page in GA4 once installed and validated.
3. Site-controlled holiday-contact CTA opens and phone-link clicks in GA4, labeled as intent signals rather than completed leads.
4. Lavo holiday-contact form starts and completed submissions, if Lavo exposes them.
5. Qualified leads, booked estimates, booked jobs, job value, and collected revenue when an authorized system of record is available.

### Tracking dependency

The existing Lavo instant-quote tool does not support holiday lighting. DEV-1353 must determine whether Lavo supports a dedicated holiday form with property details, timing, and an optional phone-call request, then define a holiday-specific contact-page fallback if needed. GA4 can measure a site-controlled CTA click but cannot automatically prove completion inside a third-party iframe. Check Lavo analytics, exports, confirmation redirects, `postMessage` events, webhooks, Zapier/API access, or GA4-compatible events. Tracking or CRM configuration must be separately approved and validated.

### Monitoring window and decision use

- Annotate the exact release date and the page elements changed.
- Verify crawling, indexing, rendered metadata, schema, CTA behavior, and GA4 events immediately after release.
- Monitor weekly during October–December 2026 because the useful seasonal window is short.
- Use GSC for query and page visibility; use GA4 for website behavior and verified site-controlled actions; use Lavo or owner records for lead quality and business outcomes.
- Compare with the prior equivalent seasonal period when available, while disclosing low volume, changing tracking, search-result variation, and incomplete conversion attribution.
- Do not guarantee rankings, traffic, clicks, leads, or revenue by a fixed date.

### Decision gates

- **Keep:** the page gains relevant visibility or qualified activity without increasing ambiguous lighting traffic or misleading leads.
- **Revise:** relevant impressions grow but CTR, engagement, or lead quality indicates the offer or snippet is unclear.
- **Investigate measurement:** CTA activity and Lavo/booking outcomes conflict or completion data remains inaccessible.
- **Advance:** consider town-specific research only after distinct town demand, completed-job proof, operational coverage, and unique local value exist.

## 12. Post-meeting factual follow-ups

The [September 27 Kyle meeting record](./KYLE-MEETING-PUNCHLIST-2026-09-27.md) establishes the first-release boundary recorded in the claim register. Remaining questions narrow future copy or assets; they do not license placeholder claims.

- Verify the exact public and Google Business Profile business-name formatting. The shorthand `JonesPressureWashing` answer is not enough to change the existing spaced brand.
- Confirm the specific products, light ownership, customer-owned-product policy, design/consultation process, customer responsibilities, installation methods, and any repair coverage before describing them.
- Confirm maintenance and storage terms, current insurance wording and documentation, and any credentials or safety claims before adding details beyond the high-level confirmed inclusions.
- Obtain an explicit, dated 2026 installation calendar, booking cutoff, and capacity message before publishing urgency, timing, or availability claims. Kyle maintains these facts.
- In DEV-1353, verify the Lavo holiday-form options and the fallback contact path. The form should offer a phone-call request when supported. Keep completed submissions distinct from CTA intent.
- Obtain one verified standout holiday-lighting project, permissioned images, a factual description, and attributable reviews through ADM-43. Remove the existing Montclair and Maplewood stories in the first release even if replacement assets are still pending.
- Obtain Kyle's factual review of final service, territory, brand, and contact copy before publication. Phil reviews the bounded implementation separately.

## 13. Implementation handoff

1. DEV-1353 records the approved holiday-specific Lavo form or contact-page fallback, required fields, optional phone-call request, and attribution limits.
2. DEV-1354 implements the contact path, FAQs, and privacy-safe intent tracking.
3. DEV-1357 rewrites the Essex page from this brief; DEV-1358 removes unsupported stories and adds verified proof only when available.
4. DEV-1558 corrects the Bergen County page to the confirmed Paramus-and-south service boundary before it is promoted from the hub or Essex page.
5. Preserve the Essex URL, canonical, and indexability. Verify rendered metadata, schema, mobile and keyboard behavior, form and phone paths, and any GA4 events after release.
6. Record deployment dates and changed URLs, then monitor seasonal visibility, contact outcomes, and Kyle's current capacity against the baseline.

## 14. Acceptance-criteria check

- [x] One residential seasonal-installation purpose and one primary holiday-contact path are defined.
- [x] The existing Essex County URL and organic history are preserved.
- [x] Claim IDs HL-C01 through HL-C21 reflect the September 27 meeting, with narrower wording and exclusions where facts remain unknown.
- [x] Public holiday-lighting prices and price schema are excluded.
- [x] Unsupported projects, non-homeowner positioning, products, credentials, timing, and guarantees are excluded from first-release requirements.
- [x] Metadata, outline, structured data, accessibility, mobile, linking, and validation requirements are implementation-ready.
- [x] Lavo form selection and completed-lead attribution remain explicit DEV-1353 dependencies rather than assumed capabilities.
- [x] Permissioned project assets are an enhancement, not a blocker for a truthful first release.
- [x] Kyle's final factual copy review is distinguished from the completed planning brief.
