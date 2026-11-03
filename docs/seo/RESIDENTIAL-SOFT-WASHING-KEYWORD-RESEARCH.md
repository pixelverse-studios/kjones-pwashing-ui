# Jones Pressure Washing Residential Soft-Washing Keyword Research

**Status:** In progress for client review  
**Research dates:** 2026-09-25–2026-09-26; evidence update 2026-11-02 (remaining GSC pages, Keyword Planner, pinned competitors)  
**Campaign:** Residential soft washing  
**Primary market:** Essex County, New Jersey  
**Priority towns:** Nutley, Livingston, and Verona

## 1. Research question

Which customer search needs should the existing soft-washing, Essex County, additional-services, and Livingston pages own, and which needs—if any—justify a new Nutley, Verona, house-washing, or roof-cleaning page?

The business objective is qualified residential inquiries and booked work. Search volume, visibility, and rankings are supporting evidence rather than the final objective.

## 2. Collection record

| Source | Coverage and settings | Evidence supplied | Limitations |
| --- | --- | --- | --- |
| Google Search Console site export | Jones property; 2025-10-05 through 2026-09-23; supplied CSV exports | Site queries, pages, countries, devices, dates, and search appearance | Ordinary exports are not exhaustive and omit anonymized queries. Historical conversion outcomes are not joined. |
| Exact-page GSC exports | Main soft-washing, Livingston, and Montclair URLs; United States filter; 2025-10-05 through 2026-09-23 | Query and visibility evidence tied to specific URLs | Small totals can be materially affected by query omission and filtering. |
| Exact-page GSC exports, round 2 | Homepage and `/services/additional`; Web; 2025-10-05 through 2026-09-23; exact URL filter; **no country filter**; exported 2026-11-02. `/services/essex-county` checked with the same settings and returned no rows. | Queries, pages, chart, countries, devices, search appearance, filters | All countries rather than US only, so not exactly comparable with round 1. In the country tables the US is 97.1% of homepage impressions (3,093 of 3,187) and 96.2% for `/services/additional` (701 of 729); against chart totals it is only 67% and 70%. Query rows below therefore include some non-US impressions and cannot be reduced to US-only. The unzipped exports are kept on the collector's machine in the git-excluded `docs/seo/data/private/r3-soft-washing/` folder because this repository is public; only derived figures are recorded here. The Essex result rests on the collector's Search Console screenshot; no file exists. |
| Pinned competitor research | Google Maps pinned to Nutley, Livingston, Verona, and the Essex County center, plus signed-out web search; 2026-11-02 | Map and local-pack competitors, organic result types, where Jones appears | See [R3-SOFT-WASHING-COMPETITORS-2026-11-02.md](R3-SOFT-WASHING-COMPETITORS-2026-11-02.md). One day, desktop only. |
| SiteBehaviour | Last 12 months; screenshot supplied 2026-09-25 | Directional page activity, traffic sources, devices, countries, clicks, and configured form interactions | Image only; no useful row-level CSV. It cannot establish confirmed Lavo iframe submissions or qualified leads. |
| Client scope | Confirmed 2026-09-17 through 2026-09-25 | Residential soft washing; Essex County; Nutley, Livingston, Verona; homeowner primary; residential property manager and HOA secondary; pressure washing and holiday lighting excluded | Roof-cleaning offer and page ownership remain a Kyle question. First-party project proof by town is pending. |
| Competitor and public-result research | Public web and limited unsigned map snapshots dated 2026-08-27 | Representative providers, result types, terminology, and page-purpose patterns | Searcher location was not physically pinned; position and local-pack conclusions are not supported. |
| Public-result refresh | Queries sampled 2026-09-25; provider-default web search; approximate geography not pinned; device and personalization unknown | Current result composition for Essex County and priority-town service language | Demonstrates result and language patterns, not search volume or stable rankings. |
| Google Trends | New Jersey; past five years; Web Search; literal terms; collected 2026-08-27 | Relative comparison among `soft washing`, `house washing`, and `roof cleaning` | Normalized sampled index, not search volume. Sparse terms and shifting series limit precise conclusions. |
| Google Keyword Planner | Collected 2026-11-02; settings and results in §6a | Range-bucketed historical estimates for the approved seed set and discovery suggestions, by geography | No active ad spend, so values are coarse ranges and monthly breakdowns are blank. Advertising competition and bids are not organic difficulty. |

Raw supplied exports should remain unchanged. Derived concepts and page decisions belong in this document rather than replacing the source files.

## 3. First-party visibility baseline

| Evidence ID | Page / query | Clicks | Impressions | Average position | Interpretation |
| --- | --- | ---: | ---: | ---: | --- |
| GSC-SW-01 | Exact US-filtered `/services/soft-washing` page | 0 | 571 | 29.44 | Google has measurable relevance evidence for the page, but the page produced no observed click in the filtered period. Improve the existing owner before creating a competing county-service URL. |
| GSC-SW-02 | `vinyl siding cleaning essex county nj` observed for the main page | 0 | 96 | 9.90 | Existing page-one visibility makes siding-task alignment a near-term opportunity. Preserve the exact export spelling in the raw source; normalize only in analysis. |
| GSC-SW-03 | `stucco siding cleaning essex county nj` observed for the main page | 0 | 95 | 9.53 | Surface-specific intent is already associated with the correct core page but has not produced an observed click. |
| GSC-LIV-01 | Exact US-filtered `/services/soft-washing/livingston` page | 0 | 76 | Not used as a decision metric | The existing URL has limited but real US visibility and should be preserved while improved. |
| GSC-LIV-02 | `soft washing livingston` on the Livingston page | 0 | 4 | 7.75 | The query demonstrates alignment, but four impressions do not establish strong demand. |
| GSC-MON-01 | Exact US-filtered Montclair soft-washing page | 1 | 733 | Not used as a campaign target | Montclair is a useful comparison page, but leading pressure- and power-washing language is outside this campaign. Preserve and monitor. |

| GSC-HOME-01 | Exact homepage, all countries | 38 | 4,608 | Not used | Chart totals. The US row of the country table shows 20 clicks and 3,093 impressions. Brand queries (`jones …`) account for all 21 clicks attributed to listed queries. |
| GSC-HOME-02 | Essex residential house, soft-wash, roof, and siding queries on the homepage | 0 | 197 | 10.4–16.5 | Six queries: `residential power washing company in essex county nj` (72, 11.3), `soft wash residential pressure washing in essex county nj` (42, 10.4), `house power washing essex county nj` (38, 11.3), `house washing essex county nj` (23, 11.4), `residential roof power washing in essex county nj` (16, 11.1), `stucco siding cleaning essex county nj` (6, 16.5). **The homepage collects overlapping Essex residential intent** that the campaign wants `/services/soft-washing` to own. Only one query matches the soft-washing page's evidence exactly (`stucco siding cleaning essex county nj`: homepage 16.5, soft-washing page 9.53 in GSC-SW-03), and three of the six use power- or pressure-washing wording (control vocabulary). Includes some non-US impressions. |
| GSC-HOME-03 | Out-of-campaign homepage queries | 0 | about 1,120 listed | Mostly 20–100 | South Jersey and out-of-state place queries (Galloway, Smithville, West Windsor, Georgia, and others): about 24–31 queries and 640–650 impressions depending on which places are counted, mostly positions 60–100. Bergen County queries: about 40 queries and 480 impressions. No Nutley, Livingston, or Verona query appears. |
| GSC-ADD-01 | Exact `/services/additional`, all countries | 0 | 1,008 | Not used | Chart totals; US row 701 impressions. **It behaves as a gutter-cleaning page:** 48 of 75 listed queries and 559 of 729 listed impressions contain `gutter`. |
| GSC-ADD-02 | Roof queries without `gutter` on `/services/additional` | 0 | 161 | 7.75–91 | 23 queries. Only one Essex query is near page one: `roof cleaning essex county nj` (16 impressions, 7.75). The rest are Bergen County (`roof cleaning bergen county nj`, 20 at 32.1), regional (`roof cleaning northern nj`, 38 at 42.6), or out of market (St. Johns, Jackson, Tinton Falls). |
| GSC-ESX-01 | Exact `/services/essex-county`, Web, no country filter | 0 | 0 | — | No rows for the full 12 months (checked 2026-11-02). The route is set to index, self-canonical, in the sitemap, and linked from the homepage service-area section, so zero impressions most likely means Google has not indexed or chosen to show it. Confirm with URL Inspection before relying on the county hub. |

Missing values are unknown, not zero. Chart totals differ from the sum of device or query rows because Search Console aggregates and omits rows differently per table; use the chart for page totals and the tables for breakdowns.

## 4. Public-result observations refreshed September 25

- Essex County results include broad soft-washing providers, county exterior-cleaning hubs, and pages that separate house washing and roof cleaning into distinct customer tasks.
- Priority-town results show dedicated house-washing pages in Livingston and Verona, broader pressure-washing pages that include house washing, and local providers without sophisticated service pages.
- `house washing` can also surface interior house-cleaning results, especially where local exterior-cleaning supply is thin. Page titles and descriptions should make **exterior** and **soft-wash siding** intent unambiguous.
- Result composition supports using `house washing`, `siding cleaning`, and `roof cleaning` as customer-task language while retaining `soft washing` as the method and service-category language.
- The sampled results do not justify a new URL by themselves. A new town or roof page still requires business value, first-party proof, distinct purpose, and clean internal ownership.

Representative refreshed results:

- [Softwash Ranger Essex County roof and exterior soft washing](https://www.softwashranger.com/essex-county-nj-roof-exterior-soft-pressure-washing/)
- [Rinse Prince Livingston house washing](https://www.callrinseprince.com/locations/essex-county/livingston/house-washing/)
- [Under Pressure Verona house washing](https://www.underpressurehw.com/local-services/house-washing-verona)
- [Pure Blue Essex County exterior cleaning hub](https://www.pureblueservices.com/service-areas/essex-county-nj)

These pages are evidence of result types and customer language only. Their claims, length, structure, and tactics are not assumed to cause visibility and should not be copied.

## 5. Initial intent and opportunity map

| Cluster ID | Customer task and representative language | Existing owner | Decision before Keyword Planner | Business fit | Main risk or dependency |
| --- | --- | --- | --- | --- | --- |
| SW-HOUSE-01 | Hire someone to wash the home's exterior: `house washing`, `exterior house washing`, `soft wash house`, `residential house washing` | `/services/soft-washing` | **Improve** | Primary residential offer and direct quote intent | Kyle must confirm exact scope, exclusions, preparation, and method claims. |
| SW-SIDING-01 | Clean a named siding or exterior surface: `siding cleaning`, `vinyl siding cleaning`, `stucco cleaning`, `painted siding cleaning`, `fiber cement siding cleaning` | `/services/soft-washing` | **Improve** | Directly supported by existing GSC visibility and approved campaign direction | Avoid promising compatibility or outcomes for surfaces Kyle has not approved. Oxidation may require a separate service decision. |
| SW-METHOD-01 | Understand or hire the method: `soft washing`, `soft wash service`, `soft washing company`, `soft washing near me` | `/services/soft-washing` | **Improve** | Useful category and comparison language | Industry terminology may be less familiar than the customer task; do not let method language obscure the offer. |
| SW-PROBLEM-01 | Remove organic exterior growth: `algae on siding`, `green siding`, `mold or mildew on siding`, `black exterior stains` | `/services/soft-washing` initially | **Support / investigate** | Can explain when the service is relevant and improve task recognition | Kyle must approve diagnosis, safety, chemistry, and outcome language. Avoid medical, environmental, or complete-removal claims without support. |
| ROOF-01 | Hire roof cleaning: `roof cleaning`, `roof washing`, `soft wash roof cleaning`, `black streak removal`, `roof moss removal` | Competing signals from `/services/additional` and `/services/soft-washing` | **Investigate** | Potentially valuable residential soft-wash task | Kyle must define whether this is standalone, core, or an add-on (decision log D1). `/services/additional` is effectively a gutter page with weak, mostly out-of-market roof signals (GSC-ADD-01/02), so it is not a strong existing owner. |
| INFO-01 | Compare cleaning methods and safety: `soft washing vs pressure washing`, `is soft washing safe for siding`, `can you pressure wash a roof` | Core page plus selected FAQ content | **Improve selectively** | Supports trust and method selection | Answers must reflect actual Jones operations; pressure-washing promotion remains out of scope. |
| GEO-ESSEX-01 | Find exterior-cleaning coverage in Essex County | `/services/essex-county` for geography; `/services/soft-washing` for service expertise and conversion | **Preserve two-hub model / improve; investigate the Essex hub's indexing first** | Primary campaign county | Avoid creating `/services/soft-washing/essex-county` until expansion evidence makes the split useful. The Essex hub had zero impressions in 12 months (GSC-ESX-01), while the homepage and the soft-washing page collect the Essex queries (GSC-HOME-02, GSC-SW-02/03). |
| GEO-LIV-01 | Hire residential house or soft washing in Livingston | `/services/soft-washing/livingston` | **Preserve and improve** | Priority town with an existing indexed route | Requires unique project proof and removal of conflicting commercial positioning. |
| GEO-NUT-01 | Hire residential house or soft washing in Nutley | Core service and county hub until justified | **Investigate** | Priority town and geographically relevant local competition | No dedicated page without unique Jones proof, useful distinction, and demand evidence. |
| GEO-VER-01 | Hire residential house or soft washing in Verona | Core service and county hub until justified | **Investigate** | Priority town with dedicated competitor pages in sampled results | Same proof, differentiation, ownership, and conversion requirements as Nutley. |
| AUD-RES-01 | Homeowner needs estimate, preparation, safety, timing, and expected outcome information | Relevant service or location owner | **Support** | Primary audience | Do not create a separate page for each question by default. |
| AUD-HOA-01 | Residential HOA or property manager needs scope, communication, insurance, scheduling, and property coordination | Soft-washing or Essex hub section | **Support; no standalone page by default** | Approved secondary audience | Kyle must confirm capabilities, documentation, and project examples. Avoid drifting into generic commercial positioning. |

### 5a. November 2 changes to the opportunity map

| Cluster | Change | Evidence |
| --- | --- | --- |
| SW-HOUSE-01, SW-SIDING-01 | No change in decision. Add a page-ownership note: the homepage collects overlapping Essex residential intent (mostly in power-washing wording), so the soft-washing page needs clearer signals (titles, internal links from the homepage) to be the one Google picks. Use **exterior** explicitly, because `house washing` returns interior cleaning in some towns. | GSC-HOME-02; competitor doc §5; Keyword Planner discovery shows interior terms beside exterior ones (§6a) |
| ROOF-01 | Still **Investigate**, but `/services/additional` is no longer treated as a real candidate owner. Keyword Planner reports roof terms in all four geographies, and roof suggestions are the largest relevant group. Roofers compete in results, and specialists win with dedicated roof pages. | GSC-ADD-01/02; KWP-03, KWP-05; competitor doc §5–6 |
| GEO-ESSEX-01 | Add a prerequisite: confirm why `/services/essex-county` has no impressions before the plan relies on it as the county hub. | GSC-ESX-01 |
| GEO-NUT-01, GEO-VER-01 | No change. Keyword Planner reports no data for any town-suffixed soft-washing, house-washing, siding, or roof term, so it neither supports nor rules out town pages. The proof and differentiation gates still decide. | KWP-02 |
| SW-METHOD-01, INFO-01 | No change. `soft washing vs pressure washing` and `can you pressure wash a roof` are reported in most geographies; comparison and how-to suggestions are plentiful but mostly DIY intent, so they suit FAQ support rather than new pages. | KWP-01, KWP-05 |
| Out of campaign | Gutter cleaning is the only suggestion group that reaches the second range bucket in Essex, and it drives most `/services/additional` visibility. It is outside this campaign; record it for Kyle (D4) instead of acting on it here. | GSC-ADD-01; KWP-05 |

Competitor evidence for these changes is in [R3-SOFT-WASHING-COMPETITORS-2026-11-02.md](R3-SOFT-WASHING-COMPETITORS-2026-11-02.md).

## 6. Keyword Planner collection set

Run two separate workflows so discovery suggestions do not overwrite the approved seed evidence.

### Settings to preserve

- Google Ads account context: record the account used
- Language: English
- Network: Google only
- Date range: export the longest useful historical range available and preserve monthly breakdowns; use the latest 12 months as the comparable campaign summary
- Geography exports:
  1. Essex County, New Jersey
  2. Nutley, New Jersey
  3. Livingston, New Jersey
  4. Verona, New Jersey
- Preserve the raw export for each geography separately
- Record whether Google accepts the town/county target directly or substitutes a broader location
- Keep average monthly searches, monthly searches, competition, competition index, and bid columns in their original units
- Label competition and bids as paid-search metrics, not organic ranking difficulty

### Core uploaded seed set

#### Service and method

- soft washing
- soft washing service
- soft washing company
- residential soft washing
- exterior soft washing
- soft wash house
- house soft washing
- house washing
- exterior house washing
- home exterior cleaning

#### Siding and surfaces

- siding cleaning
- vinyl siding cleaning
- stucco cleaning
- stucco house washing
- painted siding cleaning
- fiber cement siding cleaning
- hardie board cleaning
- brick house washing
- fence soft washing

#### Roof task — retain as a separate unresolved cluster

- roof cleaning
- roof washing
- soft wash roof cleaning
- black streak removal roof
- roof algae removal
- roof moss removal

#### Problem and comparison language

- algae removal siding
- green algae siding cleaning
- mold removal siding
- mildew removal house exterior
- soft washing vs pressure washing
- is soft washing safe for siding
- can you pressure wash a roof

#### Audience language

- HOA exterior cleaning
- condo exterior cleaning
- residential property exterior cleaning
- property manager exterior cleaning

For each service seed, create county and town variants for Essex County, Nutley, Livingston, and Verona where Keyword Planner does not reliably produce the local combinations through location targeting alone.

### Observation-only control terms

Collect a small separate control group for `pressure washing`, `power washing`, `pressure wash house`, and local variants. These phrases are excluded from active promotion, but comparing them can explain customer vocabulary and existing GSC visibility. Do not merge them into the campaign opportunity totals or use their volume to reverse the approved service scope.

## 6a. Keyword Planner results (collected 2026-11-02)

### Collection settings

| Setting | Value |
| --- | --- |
| Account | The Google Ads account used for Jones research (customer ID kept in the internal execution record, not in this public repository); no active campaign spend |
| Workflows | **Get search volume and forecasts** (plan "JPW Softwashing", Saved keywords tab, downloaded as Plan historical metrics) with the 136 core and 15 control seeds pasted together; **Discover new keywords** with the 10 discovery seeds and no website |
| Language / network | English (confirmed by the collector) / Google only |
| Date range | October 2024 – September 2026 (24 months) |
| Locations | Essex County NJ, Nutley NJ, Livingston NJ, Verona NJ, one export each. Google accepted each target directly; the export's segmentation row names the location. No substitution. |
| Collected | 2026-11-02, about 6:03–6:12 PM ET (from export timestamps) |
| Raw files | `docs/seo/data/raw/r3-soft-washing/kwp-<place>-volume.csv` and `kwp-<place>-discovery.csv`, unchanged (UTF-16, tab-separated). Seed lists sit beside them. |
| Derived file | `docs/seo/data/processed/r3-soft-washing-kwp-discovery-labeled-2026-11-02.csv`: every discovery suggestion with a rule-based relevance label, modifiers, and each geography's value |

### Limitations

- **Values are range buckets, not counts.** Without ad spend, the export records one placeholder per range: `0`, `50`, or `500`. Read them as roughly "0–10", "10–100", and "100–1,000" (inferred from the range display in the Ads interface). Blank means Google reported no data; it is unknown, not zero.
- **Monthly columns are empty** in every file, so seasonality cannot be read from Keyword Planner. Three-month and year-over-year changes are computed from buckets (values like ∞ and −100%) and are not used.
- `house soft washing` is missing from the volume exports, most likely merged with `soft wash house`. It does appear in discovery.
- Competition and bids describe paid search only. They are recorded as signals of commercial value, never as organic difficulty.
- Discovery labels are a first-pass keyword-rule classification and include some noise (for example, competitor brand names inside the soft-wash label). Use them to size groups, not as a final keyword list.

### Results

| ID | Finding | Evidence |
| --- | --- | --- |
| KWP-01 | **Everything relevant sits in the lowest reported range.** In Essex, 23 of the 35 core base terms (no town suffix) report about 10–100 searches; none is higher. The towns report fewer: Nutley 16, Livingston 16, Verona 11. Only the control terms `pressure washing` and `power washing` reach the next range, and only in Essex. Keyword Planner cannot rank the core terms against each other. | Volume exports |
| KWP-02 | **No town-suffixed core term has data in any geography.** Of the 112 town-suffixed variants, the only ones with data are `power washing` and `pressure washing` variants (control group). | Volume exports |
| KWP-03 | **Roof terms are consistently present.** `roof cleaning`, `roof algae removal`, `roof moss removal`, and `soft wash roof cleaning` report data in all four geographies. In Essex, `roof cleaning` has the highest bid range in the set ($12.00–$25.72, Medium competition) and `roof washing` is $11.03–$19.98 (High). | Essex volume export (paid metrics) |
| KWP-04 | **House and siding terms are present in most geographies:** `siding cleaning`, `vinyl siding cleaning`, `soft wash house`, `soft washing`, and `soft washing service` in all four; `house washing` in three (Verona reports 0–10). | Volume exports |
| KWP-05 | **Discovery returned 3,166 suggestions per geography** (the same set each time). After labeling, 1,131 are core customer tasks (roof 408, siding or surface 386, house or exterior 203, soft-wash method 127, problem 7), 282 are how-to or comparison questions, and 332 are pressure or power washing control terms. Excluded or labeled: 810 DIY, product, or equipment; 331 other services (gutters, windows, decks, driveways, roofing work, and similar); 157 interior cleaning; 101 out-of-market places or other brands; 15 commercial; 5 employment; 2 left unlabeled. Core suggestions with any reported value (including 0–10): Essex 730, Nutley 205, Livingston 236, Verona 172; in the 10–100 range: Essex 518, Nutley 135, Livingston 149, Verona 88. | Derived labeled file |
| KWP-06 | **Distinct customer tasks in discovery worth carrying into the plan:** cost and price questions (75 core suggestions, for example `cost to soft wash house`, `house washing cost`, `roof cleaning cost`), near-me provider searches (96), surface-specific roof and siding needs (cedar shake, metal and tile roofs; aluminum siding oxidation; brick; Hardie board), and problem language (`black streaks on roof`, moss, mildew on vinyl siding). | Derived labeled file |

### What this changes

Keyword Planner adds little to page-ownership decisions for this market. Its main contributions are negative or confirming: no reported town-level data for any core term (KWP-02), roof cleaning is a real and commercially valuable task in every geography (KWP-03), and customers ask about cost often enough that pricing guidance belongs in the plan (KWP-06). Search Console and the pinned competitor research remain the stronger evidence. None of these metrics is blended with GSC, Trends, or public-result evidence.

## 7. Decisions available before volume estimates

Keyword Planner is helpful but does not block these conclusions:

1. Improve the existing `/services/soft-washing` page before creating a competing county-service page.
2. Use customer-task language—especially house washing and siding cleaning—alongside the soft-washing method.
3. Preserve and improve the existing Livingston URL rather than replacing it.
4. Keep the Essex County geographic hub and soft-washing service hub distinct.
5. Hold Nutley and Verona behind proof, differentiation, and demand gates.
6. Keep roof-cleaning ownership unresolved until Kyle's operational answer and additional page-level GSC evidence are reviewed.
7. Do not promote pressure washing or holiday lighting within this campaign merely because related phrases show demand.

## 8. September 26 completion checklist

Status as of 2026-11-02:

- Done: Import Keyword Planner exports with their settings and raw locations (§6a).
- Done: Add metrics without blending town, county, GSC, Trends, or paid-search units (§6a).
- Done: Review Keyword Planner suggestions for genuinely distinct customer tasks; reject or label irrelevant commercial, DIY, equipment, employment, interior-cleaning, and out-of-market terms (§6a, derived labeled file).
- Done: Re-check representative result composition for material clusters whose ownership remains ambiguous ([pinned competitor research](R3-SOFT-WASHING-COMPETITORS-2026-11-02.md)).
- Next phase: Produce the client-facing priority summary for Kyle: lead offer, supporting tasks, page owner, proof needed, and unresolved questions.
- Next phase: Update the SEO roadmap only where the new evidence changes priority or sequencing.

## 9. Next-phase decision log

Questions the November 2 evidence raises for the next-phase plan. Items marked **Kyle** need his answer; the others are SEO plan items that need no client decision.

| ID | Question | Owner | Why it matters now | Evidence |
| --- | --- | --- | --- | --- |
| D1 | Is roof cleaning a standalone service, part of the core soft-wash offer, or an add-on? Which page should own it? | **Kyle** | Roof terms show up in every geography, carry the highest paid bids, and competitors win with dedicated roof pages. The current page with roof signals is a gutter page. | GSC-ADD-01/02; KWP-03; competitor doc §6 item 5 |
| D2 | Should the homepage or `/services/soft-washing` own Essex residential house, soft-wash, and siding queries? | SEO plan | The homepage sits around position 10–16 for Essex residential house, soft-wash, and siding intent that the soft-washing page (about 9.5–9.9 on its own Essex siding queries) should own, which risks splitting signals. Recommended default: the soft-washing page owns them and the homepage links to it clearly. | GSC-HOME-02; GSC-SW-02/03 |
| D3 | Why does `/services/essex-county` have no impressions, and does the plan still rely on it as the county hub? | SEO plan | GEO-ESSEX-01 assumes a working county hub. Run URL Inspection first. | GSC-ESX-01 |
| D4 | Is gutter cleaning an active service Kyle wants found in search? | **Kyle** | It drives most `/services/additional` visibility and is the highest-range suggestion group in Essex, but it is outside this campaign. The answer decides whether that page is improved, left alone, or reshaped. | GSC-ADD-01; KWP-05 |
| D5 | How much effort goes into reviews and the Business Profile during this campaign? | **Kyle** | Jones is absent from all 11 pinned map searches and all 9 local packs; recurring competitors have 12–441 reviews against Jones's 6. | Competitor doc §2–3 and §6 item 1 |
| D6 | Can Kyle supply pricing guidance (ranges or factors) for house and roof washing? | **Kyle** | Cost questions are one of the clearest distinct tasks in Keyword Planner discovery. | KWP-06 |

