# Holiday-Lighting Keyword Research

**Related Linear ticket:** [DEV-1510 — Complete holiday-lighting keyword, GSC, and seasonal demand research](https://linear.app/pixelverse-studios/issue/DEV-1510)  
**Current stage:** Step 4 — Public search and competitor research complete  
**Analysis date:** September 25, 2026  
**Implementation status:** No website changes approved or made

## 1. Scope of this step

This research combines the three supplied Google Search Console exports, Essex County and New Jersey Google Keyword Planner exports, New Jersey Google Trends comparisons, the current Jones Essex County page and repository implementation, and a recorded public search-result and competitor review.

The raw exports remain unchanged. The working files preserve each exact query or keyword and add separate normalized concepts, review flags, and classifications for analysis.

## 2. Source inventory

| Source ID | Exact page filter | Search type | Country | Date setting | Page totals | Raw source location |
| --- | --- | --- | --- | --- | --- | --- |
| `GSC-HL-HUB` | `https://www.jonespressurewashingnj.com/services/holiday-lighting` | Web | United States | Last 12 months | 0 clicks, 2 impressions, 0% CTR, position 5.00 | `/Users/phil/Downloads/:services:holiday-lighting/` |
| `GSC-HL-ESX` | `https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county` | Web | United States | Last 12 months | 0 clicks, 609 impressions, 0% CTR, position 39.32 | `/Users/phil/Downloads/:services:holiday-lighting:essex-county/` |
| `GSC-HL-BER` | `https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county` | Web | United States | Last 12 months | 0 clicks, 106 impressions, 0% CTR, position 65.37 | `/Users/phil/Downloads/:services:holiday-lighting:bergen-county/` |
| `GKP-HL-ESX` | Discover new keywords; keyword seeds only; website filter blank | Google; English | Essex County, New Jersey, United States | September 1, 2024–August 31, 2026 | 1,155 keyword ideas; 24 monthly columns present but blank | `docs/seo/data/raw/holiday-lighting-keyword-planner-essex-2026-09-25.csv` |
| `GKP-HL-NJ` | Discover new keywords; same keyword seeds; website filter blank | Google; English | New Jersey, United States | September 1, 2024–August 31, 2026 | Same 1,155 keyword ideas; 24 monthly columns present but blank | `docs/seo/data/raw/holiday-lighting-keyword-planner-new-jersey-2026-09-25.csv` |
| `GTR-HL-NJ-UNQUOTED` | Search terms: `christmas light installation` and `holiday light installation` | Web Search; All Categories | New Jersey, United States | Past five years; monthly rows from September 2021–September 2026 | 61 monthly relative-interest rows | `docs/seo/data/raw/google-trends-new-jersey-holiday-lighting-unquoted-2021-2026.csv` |
| `GTR-HL-NJ-QUOTED` | Quoted search terms: `"christmas light installation"` and `"holiday light installation"` | Web Search; All Categories | New Jersey, United States | Past five years; monthly rows from September 2021–September 2026 | 61 monthly relative-interest rows | `docs/seo/data/raw/google-trends-new-jersey-holiday-lighting-quoted-2021-2026.csv` |
| `GTR-HL-NJ-REFERENCE` | Same quoted installation terms plus quoted `"christmas lights"` reference | Web Search; All Categories | New Jersey, United States | Past five years; monthly rows from September 2021–September 2026 | 61 monthly relative-interest rows | `docs/seo/data/raw/google-trends-new-jersey-holiday-lighting-with-seasonal-reference-2021-2026.csv` |

### Source limitations

- GSC query exports can omit anonymized queries. Page totals and visible query rows must not be assumed to provide exhaustive query coverage.
- Average position is an aggregate observation, not a fixed rank.
- Zero clicks are observed for the filtered period. They do not establish zero leads from other channels or untracked conversions.
- The `Last 12 months` UI setting was preserved. The daily chart begins October 5, 2025; the exact ending date should remain tied to the raw export rather than inferred from this classification table.
- The Keyword Planner export uses Google Ads metrics. `Competition` is advertiser competition, not organic-ranking difficulty.
- The Essex County export contains 554 rows with average monthly searches reported as `50`, 188 as `0`, and 413 blank. These rounded or unavailable values are not precise demand estimates.
- The New Jersey export contains 33 rows reported as `500`, 968 as `50`, 105 as `0`, and 49 blank. Statewide metrics must not be presented as Essex County demand.
- All 24 month-level search columns are blank in both exports. Neither file can establish seasonality or support month-by-month comparisons.
- Both top-of-page bid columns are blank for every Essex County row. The New Jersey export provides bid values for 54 rows.
- Keyword Planner suggestions demonstrate possible customer language and relationships; they do not prove that every suggestion has qualified local demand.
- Google Trends values are sampled, normalized relative-interest indexes from 0 to 100, not search volumes.
- The first Trends comparison used unquoted multi-word search terms. Google documents that this can include searches containing every word in any order. A second comparison used quoted exact phrases; the unusual 2026 pattern persisted.
- Adding a broader quoted `christmas lights` reference term rescaled the two installation phrases from apparent peaks near 100 to values of 0–2. Trends indexes must only be interpreted within the exact comparison set that produced them.
- Customer language from calls or estimates, lead quality, booked jobs, and revenue are not yet included.

## 3. Classification rules

| Classification | Meaning in this analysis |
| --- | --- |
| Relevant seasonal installation | Explicit holiday or Christmas installation intent that plausibly matches the offered seasonal service |
| Seasonal-adjacent; verify | Could describe a holiday installation, but the wording is not explicit enough to assume the service |
| Ambiguous nonseasonal lighting | Could describe landscape, permanent, architectural, electrical, security, smart, storefront, or general outdoor lighting |
| Mixed or irrelevant | Pressure washing, chimney work, additions, site-operator searches, or another task that should not inform the holiday-lighting offer |
| Out of confirmed market | The geography is outside the currently approved Essex focus or requires Kyle to confirm active holiday-lighting coverage |

No query is converted into a target solely because it contains `lighting`. Geography, service task, seasonality, and likely customer intent remain distinct.

## 4. Page-level classification summary

### Essex County page

The Essex County export contains 609 visible-query impressions. Eight queries totaling 193 impressions, or 31.7% of the page total, are explicit seasonal-installation or seasonal-adjacent searches. The remaining visibility is dominated by general outdoor, permanent, electrical, security, smart, and unrelated lighting language.

The strongest explicit seasonal observations are:

| Exact query | Impressions | Position | Classification |
| --- | ---: | ---: | --- |
| `christmas light installation essex` | 93 | 19.46 | Relevant seasonal installation |
| `west caldwell holiday lighting installation` | 61 | 6.51 | Relevant seasonal installation |
| `west caldwell christmas light installation` | 24 | 9.79 | Relevant seasonal installation |
| `holiday lighting installation services essex county` | 4 | 6.50 | Relevant seasonal installation |
| `christmas light installation essex county nj` | 4 | 11.75 | Relevant seasonal installation |
| `commercial christmas light installation essex county` | 3 | 6.33 | Relevant only if Kyle confirms commercial eligibility |
| `roofline lighting short hills` | 3 | 11.00 | Seasonal-adjacent; verify |
| `holiday lighting installation fairfield` | 1 | 97.00 | Relevant seasonal installation; Fairfield coverage requires confirmation |

### Bergen County page

The Bergen County export contains 106 impressions and no explicit `Christmas light installation`, `holiday light installation`, or equivalent customer-service query. Its visibility is primarily general lighting, outdoor lighting, out-of-scope northern Bergen geography, and phrases that mix `holiday` with pressure-washing language.

This does not prove that Bergen County lacks demand. It means the current page-level GSC evidence does not yet show meaningful seasonal-installation relevance.

### Main holiday-lighting hub

The main hub contains only two impressions from a `site:` operator query. It has no observed non-branded customer-demand query in the supplied export.

## 5. Normalized Essex County query evidence

| Source row | Exact query | Normalized concept | Clicks | Impressions | CTR | Position | Classification | Geography or audience note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `GSC-HL-ESX-001` | `christmas light installation essex` | Christmas-light installation — Essex | 0 | 93 | 0% | 19.46 | Relevant seasonal installation | County intent |
| `GSC-HL-ESX-002` | `lighting installation maplewood` | General lighting installation — Maplewood | 0 | 85 | 0% | 57.55 | Ambiguous nonseasonal lighting | Could be electrical, landscape, or seasonal |
| `GSC-HL-ESX-003` | `west caldwell holiday lighting installation` | Holiday-light installation — West Caldwell | 0 | 61 | 0% | 6.51 | Relevant seasonal installation | Essex town intent |
| `GSC-HL-ESX-004` | `outdoor lighting essex fells nj` | Outdoor lighting — Essex Fells | 0 | 49 | 0% | 86.63 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-005` | `outdoor lighting essex county` | Outdoor lighting — Essex County | 0 | 48 | 0% | 15.69 | Ambiguous nonseasonal lighting | Not explicitly seasonal |
| `GSC-HL-ESX-006` | `exterior lighting west orange` | Exterior lighting — West Orange | 0 | 29 | 0% | 31.34 | Ambiguous nonseasonal lighting | Not explicitly seasonal |
| `GSC-HL-ESX-007` | `permanent outdoor lighting essex county nj` | Permanent outdoor lighting — Essex County | 0 | 27 | 0% | 46.44 | Ambiguous nonseasonal lighting | Exclude unless Kyle confirms the service |
| `GSC-HL-ESX-008` | `west caldwell christmas light installation` | Christmas-light installation — West Caldwell | 0 | 24 | 0% | 9.79 | Relevant seasonal installation | Essex town intent |
| `GSC-HL-ESX-009` | `essex county nj addition and dormer` | Home addition and dormer — Essex County | 0 | 20 | 0% | 76.15 | Mixed or irrelevant | Not a lighting task |
| `GSC-HL-ESX-010` | `outdoor lighting glen ridge nj` | Outdoor lighting — Glen Ridge | 0 | 18 | 0% | 33.22 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-011` | `chimney sweeping branchburg park` | Chimney sweeping — Branchburg Park | 0 | 18 | 0% | 62.11 | Mixed or irrelevant | Different service and geography |
| `GSC-HL-ESX-012` | `smart lighting control essex county nj` | Smart-lighting controls — Essex County | 0 | 15 | 0% | 91.67 | Ambiguous nonseasonal lighting | Electrical or permanent-lighting intent |
| `GSC-HL-ESX-013` | `lighting services montclair nj` | General lighting services — Montclair | 0 | 12 | 0% | 27.33 | Ambiguous nonseasonal lighting | Service type unknown |
| `GSC-HL-ESX-014` | `electrical lighting short hills` | Electrical lighting — Short Hills | 0 | 12 | 0% | 38.83 | Ambiguous nonseasonal lighting | Electrical intent |
| `GSC-HL-ESX-015` | `lighting essex fells nj` | General lighting — Essex Fells | 0 | 11 | 0% | 33.64 | Ambiguous nonseasonal lighting | Service type unknown |
| `GSC-HL-ESX-016` | `security lighting installation jones` | Security-light installation — Jones | 0 | 11 | 0% | 56.82 | Ambiguous nonseasonal lighting | Security/electrical intent; `Jones` is ambiguous |
| `GSC-HL-ESX-017` | `west caldwell outdoor lighting installers` | Outdoor-light installers — West Caldwell | 0 | 7 | 0% | 17.57 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-018` | `outdoor lighting installation jones` | Outdoor-light installation — Jones | 0 | 7 | 0% | 49.71 | Ambiguous nonseasonal lighting | `Jones` may be brand or unrelated geography |
| `GSC-HL-ESX-019` | `business lighting services in newark` | Business lighting services — Newark | 0 | 7 | 0% | 58.29 | Ambiguous nonseasonal lighting | Commercial/electrical intent |
| `GSC-HL-ESX-020` | `west caldwell outdoor lighting installation` | Outdoor-light installation — West Caldwell | 0 | 6 | 0% | 16.83 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-021` | `lighting installation montclair` | General lighting installation — Montclair | 0 | 6 | 0% | 80.67 | Ambiguous nonseasonal lighting | Service type unknown |
| `GSC-HL-ESX-022` | `lighting service montclair nj` | General lighting service — Montclair | 0 | 5 | 0% | 29.00 | Ambiguous nonseasonal lighting | Service type unknown |
| `GSC-HL-ESX-023` | `holiday lighting installation services essex county` | Holiday-light installation — Essex County | 0 | 4 | 0% | 6.50 | Relevant seasonal installation | County intent |
| `GSC-HL-ESX-024` | `christmas light installation essex county nj` | Christmas-light installation — Essex County | 0 | 4 | 0% | 11.75 | Relevant seasonal installation | County intent |
| `GSC-HL-ESX-025` | `commercial christmas light installation essex county` | Commercial Christmas-light installation — Essex County | 0 | 3 | 0% | 6.33 | Relevant seasonal installation | Commercial eligibility requires Kyle confirmation |
| `GSC-HL-ESX-026` | `roofline lighting short hills` | Roofline lighting — Short Hills | 0 | 3 | 0% | 11.00 | Seasonal-adjacent; verify | Could be seasonal or permanent |
| `GSC-HL-ESX-027` | `pressure washing maplewood` | Pressure washing — Maplewood | 0 | 3 | 0% | 92.67 | Mixed or irrelevant | Different campaign and service intent |
| `GSC-HL-ESX-028` | `lighting installations companies east orange nj` | Lighting-installation companies — East Orange | 0 | 2 | 0% | 13.00 | Ambiguous nonseasonal lighting | Service type unknown |
| `GSC-HL-ESX-029` | `smart lighting essex fells borough nj` | Smart lighting — Essex Fells | 0 | 2 | 0% | 16.00 | Ambiguous nonseasonal lighting | Electrical or permanent-lighting intent |
| `GSC-HL-ESX-030` | `uplighting for parties nutley nj` | Event uplighting — Nutley | 0 | 2 | 0% | 44.50 | Ambiguous nonseasonal lighting | Event-service intent, not assumed seasonal exterior lighting |
| `GSC-HL-ESX-031` | `west caldwell house lighting exterior` | Exterior house lighting — West Caldwell | 0 | 1 | 0% | 10.00 | Ambiguous nonseasonal lighting | Could be permanent or seasonal |
| `GSC-HL-ESX-032` | `site:http://jonespressurewashingnj.com` | Site-operator query — Jones domain | 0 | 1 | 0% | 13.00 | Mixed or irrelevant | Navigational/testing query, not customer demand |
| `GSC-HL-ESX-033` | `chimney sweeping north ironbound` | Chimney sweeping — North Ironbound | 0 | 1 | 0% | 24.00 | Mixed or irrelevant | Different service |
| `GSC-HL-ESX-034` | `outdoor light installation west orange nj` | Outdoor-light installation — West Orange | 0 | 1 | 0% | 24.00 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-035` | `storefront lighting installation brick nj` | Storefront-light installation — Brick | 0 | 1 | 0% | 35.00 | Out of confirmed market | Commercial/electrical intent and out-of-market geography |
| `GSC-HL-ESX-036` | `energy-efficient lighting installation in west orange nj` | Energy-efficient lighting — West Orange | 0 | 1 | 0% | 38.00 | Ambiguous nonseasonal lighting | Electrical/permanent intent |
| `GSC-HL-ESX-037` | `commercial led lighting installers brick nj` | Commercial LED installation — Brick | 0 | 1 | 0% | 55.00 | Out of confirmed market | Commercial/electrical intent and out-of-market geography |
| `GSC-HL-ESX-038` | `holiday pressure cleaning` | Holiday pressure cleaning | 0 | 1 | 0% | 65.00 | Mixed or irrelevant | Does not express lighting intent |
| `GSC-HL-ESX-039` | `outdoor lighting repair south orange nj` | Outdoor-light repair — South Orange | 0 | 1 | 0% | 79.00 | Ambiguous nonseasonal lighting | Repair intent, not explicitly seasonal |
| `GSC-HL-ESX-040` | `chimney repair essex fells` | Chimney repair — Essex Fells | 0 | 1 | 0% | 82.00 | Mixed or irrelevant | Different service |
| `GSC-HL-ESX-041` | `landscape lighting essex fells nj` | Landscape lighting — Essex Fells | 0 | 1 | 0% | 87.00 | Ambiguous nonseasonal lighting | Landscape-lighting intent |
| `GSC-HL-ESX-042` | `outdoor lighting millburn nj` | Outdoor lighting — Millburn | 0 | 1 | 0% | 90.00 | Ambiguous nonseasonal lighting | Landscape or permanent intent possible |
| `GSC-HL-ESX-043` | `security lighting jones county` | Security lighting — Jones County | 0 | 1 | 0% | 93.00 | Mixed or irrelevant | Wrong geography and security-lighting intent |
| `GSC-HL-ESX-044` | `pressure washing twinbrook` | Pressure washing — Twinbrook | 0 | 1 | 0% | 96.00 | Mixed or irrelevant | Different service |
| `GSC-HL-ESX-045` | `holiday lighting installation fairfield` | Holiday-light installation — Fairfield | 0 | 1 | 0% | 97.00 | Relevant seasonal installation | Confirm Fairfield coverage |

## 6. Normalized Bergen County query evidence

| Source row | Exact query | Normalized concept | Clicks | Impressions | CTR | Position | Classification | Geography or audience note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `GSC-HL-BER-001` | `lighting installation upper saddle river` | General lighting installation — Upper Saddle River | 0 | 34 | 0% | 61.85 | Ambiguous nonseasonal lighting | Northern Bergen; outside the earlier Paramus-southward boundary |
| `GSC-HL-BER-002` | `holiday pressure cleaning` | Holiday pressure cleaning | 0 | 31 | 0% | 72.55 | Mixed or irrelevant | Does not express lighting intent |
| `GSC-HL-BER-003` | `lighting installation ridgewood` | General lighting installation — Ridgewood | 0 | 17 | 0% | 50.06 | Ambiguous nonseasonal lighting | Not explicitly seasonal; coverage requires confirmation |
| `GSC-HL-BER-004` | `outdoor lighting installation jones` | Outdoor-light installation — Jones | 0 | 5 | 0% | 75.80 | Ambiguous nonseasonal lighting | `Jones` may be brand or unrelated geography |
| `GSC-HL-BER-005` | `holiday soft pressure washing` | Holiday soft pressure washing | 0 | 3 | 0% | 75.67 | Mixed or irrelevant | Does not express lighting intent |
| `GSC-HL-BER-006` | `outdoor lighting service franklin lakes, nj` | Outdoor-light service — Franklin Lakes | 0 | 3 | 0% | 93.67 | Ambiguous nonseasonal lighting | Northern Bergen; outside earlier boundary |
| `GSC-HL-BER-007` | `smart home company bergen county nj` | Smart-home company — Bergen County | 0 | 2 | 0% | 57.00 | Ambiguous nonseasonal lighting | Smart-home intent |
| `GSC-HL-BER-008` | `outdoor lighting installation ridgewood` | Outdoor-light installation — Ridgewood | 0 | 2 | 0% | 59.00 | Ambiguous nonseasonal lighting | Not explicitly seasonal; coverage requires confirmation |
| `GSC-HL-BER-009` | `holiday roof pressure washing` | Holiday roof pressure washing | 0 | 2 | 0% | 59.50 | Mixed or irrelevant | Does not express lighting intent |
| `GSC-HL-BER-010` | `site:http://jonespressurewashingnj.com` | Site-operator query — Jones domain | 0 | 1 | 0% | 12.00 | Mixed or irrelevant | Navigational/testing query, not customer demand |
| `GSC-HL-BER-011` | `lighting system design and installation bergen beach` | Lighting-system installation — Bergen Beach | 0 | 1 | 0% | 56.00 | Out of confirmed market | Bergen Beach is in Brooklyn, not Bergen County, New Jersey |
| `GSC-HL-BER-012` | `lighting stores bergen county nj` | Lighting stores — Bergen County | 0 | 1 | 0% | 67.00 | Mixed or irrelevant | Retail/product intent |
| `GSC-HL-BER-013` | `outdoor lighting glen rock nj` | Outdoor lighting — Glen Rock | 0 | 1 | 0% | 82.00 | Ambiguous nonseasonal lighting | Not explicitly seasonal; coverage requires confirmation |
| `GSC-HL-BER-014` | `outdoor lighting franklin lakes, nj` | Outdoor lighting — Franklin Lakes | 0 | 1 | 0% | 84.00 | Ambiguous nonseasonal lighting | Northern Bergen; outside earlier boundary |
| `GSC-HL-BER-015` | `outdoor lighting upper saddle river nj` | Outdoor lighting — Upper Saddle River | 0 | 1 | 0% | 88.00 | Ambiguous nonseasonal lighting | Northern Bergen; outside earlier boundary |
| `GSC-HL-BER-016` | `outdoor lighting bergen county nj` | Outdoor lighting — Bergen County | 0 | 1 | 0% | 99.00 | Ambiguous nonseasonal lighting | Not explicitly seasonal |

## 7. Normalized main-hub query evidence

| Source row | Exact query | Normalized concept | Clicks | Impressions | CTR | Position | Classification | Note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `GSC-HL-HUB-001` | `site:http://jonespressurewashingnj.com` | Site-operator query — Jones domain | 0 | 2 | 0% | 5.00 | Mixed or irrelevant | Navigational/testing query, not observed customer demand |

## 8. Keyword Planner expansion and normalization

### Collection settings

| Setting | Recorded value |
| --- | --- |
| Workflow | Discover new keywords |
| Seed method | Keyword seeds only |
| Website filter | Blank |
| Location | Essex County, New Jersey, United States |
| Comparison location | New Jersey, United States |
| Language | English |
| Network | Google |
| Date range | September 1, 2024–August 31, 2026 |
| Export date | September 25, 2026 |
| Raw rows | 1,155 |
| Raw format | UTF-16, tab-separated Google Ads CSV export |
| Normalized working copies | `docs/seo/data/processed/holiday-lighting-keyword-planner-essex-normalized-2026-09-25.csv`; `docs/seo/data/processed/holiday-lighting-keyword-planner-new-jersey-normalized-2026-09-25.csv` |

The first nine rows in the export match nine supplied seed phrases. The planned phrase `christmas light installers` does not appear as an exact row, so the export does not establish whether Google merged it into a close variant or it was omitted from the submitted seed set.

### Transformations

1. Preserved the original export unchanged in `docs/seo/data/raw/`.
2. Converted a working copy from UTF-16 tab-separated data to UTF-8 comma-separated data.
3. Assigned stable row IDs from `GKP-HL-0001` through `GKP-HL-1155`.
4. Preserved every exact keyword and every original Google Ads field.
5. Added a separate lowercase, whitespace-normalized concept field.
6. Added deterministic flags for seasonal, service, local, cost, residential, commercial, permanent-lighting, and product-or-DIY language.
7. Added preliminary review buckets. These are screening aids, not final intent classifications; manual review still controls page decisions.

### Export limitations

- The export contains 24 monthly columns but no month-level values in any row. It cannot support the planned seasonal-demand comparison.
- The average-monthly-search field is highly compressed: 554 rows report `50`, 188 report `0`, and 413 are blank.
- The file therefore supports language discovery and intent expansion more strongly than demand ranking.
- A value of `0` or blank is not treated as proof of no demand.
- Keyword-idea row counts are not search counts and must not be presented as demand.

### Essex County versus New Jersey comparison

- Google returned the same 1,155 exact keyword ideas in the same order for both locations. The unchanged idea count is not evidence that location targeting failed.
- Location changed the attached metrics: 845 rows changed in at least one core field covering average searches, change percentages, advertiser competition, competition index, or bid range.
- Thirty-three statewide rows report `500` average monthly searches, while the Essex County export contains no value above `50`.
- Fifty-four statewide rows include bid data, while no Essex County row does.
- Every monthly column remains blank in both files, so broadening to New Jersey did not recover the required seasonal series.

The statewide export can help compare broad language families and confirm that the location setting affected the metrics. It cannot be substituted for Essex County demand or used to allocate local forecasts.

### Representative service-language evidence

| Source row | Exact keyword | Essex avg. monthly searches | New Jersey avg. monthly searches | New Jersey Google Ads competition | NJ indexed competition | Use in planning |
| --- | --- | ---: | ---: | --- | ---: | --- |
| `GKP-HL-0001` | `holiday light installation` | 50 | 500 | Medium | 54 | Core service language |
| `GKP-HL-0002` | `christmas light installation` | 50 | 500 | Medium | 35 | Core service language |
| `GKP-HL-0003` | `professional christmas light installation` | 50 | 50 | Low | 22 | Professional-service modifier |
| `GKP-HL-0010` | `christmas lights installation near me` | 50 | 500 | Medium | 58 | Local hiring intent |
| `GKP-HL-0014` | `holiday lights installation near me` | 50 | 500 | High | 78 | Local hiring intent |
| `GKP-HL-0020` | `holiday light installers near me` | 50 | 500 | High | 78 | Local provider intent |
| `GKP-HL-0017` | `christmas light installation cost` | 50 | 500 | Medium | 43 | Pricing research that can support an FAQ or process section |
| `GKP-HL-0102` | `holiday light installation cost` | 50 | 500 | Medium | 43 | Pricing research that can support an FAQ or process section |
| `GKP-HL-0004` | `residential holiday light installation` | 50 | 50 | Unknown |  | Residential-audience modifier |
| `GKP-HL-0006` | `commercial holiday light installation` | 50 | 50 | Unknown |  | Commercial-audience modifier; requires Kyle's confirmation |

The statewide metrics separate some broad language families more clearly than the Essex export, but they still use coarse values and close-variant aggregation. The combined evidence supports a natural language family centered on professional Christmas and holiday-light installation; it does not justify treating advertiser competition as organic difficulty or declaring a winner from volume alone.

### Initial cluster decisions

| Cluster | Representative language | Current page owner | Decision | Reason |
| --- | --- | --- | --- | --- |
| Core seasonal installation | holiday light installation; Christmas light installation; professional Christmas light installation | Essex County holiday-lighting page | Improve | Matches the offered task and the page already has GSC visibility |
| Local provider | installers near me; installation near me; local Christmas-light installers | Essex County holiday-lighting page | Improve | Same hiring task and conversion path; no separate `near me` page |
| Residential installation | residential; home; house; roofline; outdoor Christmas lights | Essex County holiday-lighting page | Improve | Matches the stated residential priority; use only services Kyle confirms |
| Cost and pricing research | installation cost; price to put up Christmas lights | Essex County holiday-lighting page | Improve with bounded pricing guidance or FAQ if Kyle approves the facts | Same commercial task, not a separate thin page |
| Commercial installation | commercial holiday or Christmas-light installation | Essex County holiday-lighting page | Investigate | Keyword language exists, but service eligibility and proof require Kyle |
| Removal, maintenance, and storage | installation and removal; takedown; storage; repairs | Essex County holiday-lighting page | Investigate | Operational inclusions are not yet confirmed; the export provides little usable evidence |
| Permanent lighting | permanent Christmas or exterior lighting; branded permanent-light systems | None for current seasonal scope | Exclude unless Kyle confirms the service | Different product, fulfillment model, and likely intent |
| Products, DIY, and displays | clips; bulbs; how-to; retailers; neighborhood displays | None | Exclude | Does not share the professional-installation conversion task |

## 9. Google Trends comparison

### Collection settings

| Setting | Recorded value |
| --- | --- |
| Terms | `christmas light installation`; `holiday light installation` |
| Term type | Search term; unquoted multi-word terms |
| Geography | New Jersey |
| Period | Past five years; export rows September 2021–September 2026 |
| Category | All Categories |
| Surface | Web Search |
| Export granularity | Monthly |
| Raw rows | 61 |
| Normalized working copy | `docs/seo/data/processed/google-trends-new-jersey-holiday-lighting-unquoted-normalized-2021-2026.csv` |

### Observed pattern

- `christmas light installation` peaks in November in each completed 2021–2025 holiday cycle: 29, 36, 43, 44, and 66 on the within-comparison Trends index.
- The same term has no January–August interest in 2021–2024, then records 48 total index points across those months in 2025 and 433 in 2026.
- `holiday light installation` records no interest before late 2024 in this sample, then appears in both the 2024 and 2025 seasonal windows.
- The 2026 values for both terms rise sharply from April through August, conflicting with the earlier seasonal pattern.
- Across the full comparison, the displayed average relative-interest indexes are approximately 15 for `christmas light installation` and 9 for `holiday light installation`. These values are relative indexes, not average monthly searches.

### Interpretation

The repeated November peaks provide evidence of recurring seasonal interest and support preparing the offer before the demand peak. The off-season 2026 pattern is not yet reliable enough to interpret as sustained demand growth. It may reflect a real change, broad term matching, sampling effects, or a combination of those factors.

Google's official search guidance states that unquoted multiple-word Trends searches can match searches containing the words in any order, while quoted searches require the exact phrase with possible words before or after: [Google Trends search tips](https://support.google.com/trends/answer/4359582?hl=en).

### Quoted exact-phrase validation

| Setting | Recorded value |
| --- | --- |
| Terms | `"christmas light installation"`; `"holiday light installation"` |
| Term type | Quoted search terms |
| Geography | New Jersey |
| Period | Past five years; export rows September 2021–September 2026 |
| Category | All Categories |
| Surface | Web Search |
| Export granularity | Monthly |
| Raw rows | 61 |
| Normalized working copy | `docs/seo/data/processed/google-trends-new-jersey-holiday-lighting-quoted-normalized-2021-2026.csv` |

The quoted comparison changed 23 of 61 monthly values for `christmas light installation` and 15 of 61 for `holiday light installation`, confirming that quoting affected match behavior and normalization. It did not remove the 2026 anomaly.

For the quoted `christmas light installation` term:

- November remains the peak month in every completed 2021–2025 seasonal cycle, with index values of 34, 29, 37, 39, and 58.
- January–August totals are zero for 2021–2024, 13 in 2025, and 434 in 2026.
- The 2026 maximum occurs in April at 100 rather than in the holiday window.

For the quoted `holiday light installation` term:

- The export contains no measurable values before the 2024 seasonal window.
- The 2024 and 2025 seasonal-window totals are 40 and 62.
- The 2026 January–August total is 355, with an April maximum of 97.

### Broader seasonal-reference validation

| Setting | Recorded value |
| --- | --- |
| Terms | `"christmas light installation"`; `"holiday light installation"`; `"christmas lights"` |
| Term type | Quoted search terms |
| Geography | New Jersey |
| Period | Past five years; export rows September 2021–September 2026 |
| Category | All Categories |
| Surface | Web Search |
| Export granularity | Monthly |
| Raw rows | 61 |
| Normalized working copy | `docs/seo/data/processed/google-trends-new-jersey-holiday-lighting-with-seasonal-reference-normalized-2021-2026.csv` |

The broader `christmas lights` reference changes the interpretation materially:

- `christmas lights` peaks in December in every completed 2021–2025 cycle, with relative-interest indexes of 100, 78, 88, 91, and 69.
- The September–December total for that reference is 126–157 index points in each completed cycle, compared with only 13–16 across January–August in 2022–2025.
- `christmas light installation` falls to a maximum of 2 when measured beside the broader reference; `holiday light installation` also has a maximum of 2.
- The installation phrases' apparent 2026 peaks near 100 in the two-term comparison were a normalization effect inside a low-volume comparison set. They do not demonstrate a large off-season demand surge.
- The reference comparison supports strong recurring consumer seasonality while also showing that exact installation phrases are a small share of the broader Christmas-lights search universe in this sampled dataset.

### Trends decision

Use completed 2021–2025 cycles as directional timing evidence: interest becomes visible by September or October and repeatedly peaks in November. Prepare and publish seasonal improvements before the peak rather than waiting for December.

Use `Christmas light installation` as the leading service-language family and `holiday light installation` as supporting language. This is supported by both the Trends comparison and the statewide Keyword Planner difference, but it is not a search-volume guarantee.

Do not interpret the 2026 off-season values as proven year-round demand or a sustained growth trend. The broader reference shows that the apparent spike was driven by normalization of a low-volume comparison set.

The combined timing signal is now sufficient for planning: broad consumer interest accelerates in November and peaks in December, while the narrower installation term repeatedly appears in November in the completed cycles. The page and campaign should therefore be prepared before November, ideally in September or early October, leaving the peak period for lead capture and fulfillment.

## 10. Public search-result and competitor research

### Search snapshot settings

| Setting | Recorded value |
| --- | --- |
| Research date | September 25, 2026 |
| Query geography | Explicit Essex County, Livingston, Nutley, and Verona, New Jersey wording |
| Google snapshot | Signed-out in-app browser; desktop layout; Google labeled the result area `Essex County, NJ`; personalization and exact search origin remain unknown |
| Public search expansion | English web search results using explicit geographic queries |
| Result types separated | Sponsored results, AI overview, local pack, direct-business organic pages, directories, government/event documents, and adjacent nonseasonal lighting pages |
| Rank limitation | No stable rank claims are made from this single, localized snapshot |

### Query and result-set observations

| Query group | Observed result composition | Planning implication |
| --- | --- | --- |
| `christmas light installation essex county nj` | Google displayed sponsored results, an AI overview, a three-business local pack, and direct installer pages. Seasonal installers included LIT Christmas Lights, Smitty's Christmas Décor, Holiday Lights Decor New Jersey, and Christmas Decorators of NJ. Permanent-lighting and pressure-washing advertisers also appeared. | The page must state removable seasonal installation clearly and avoid broad outdoor-lighting language unless Jones offers permanent systems. Local-pack competition is material and separate from organic-page competition. |
| `holiday light installation essex county nj` | County service pages, town pages, direct installers, a lead-generation directory, and some nonseasonal outdoor-lighting pages appeared. | `Holiday` is useful supporting language but produces more ambiguous results than `Christmas light installation`. |
| Livingston service searches | A dedicated Livingston page from Home Light Up appeared alongside broader Essex County providers. | Town-level competitors exist, but a Jones town page should not be created until there is real town-specific proof and sufficient distinct value. |
| Nutley service searches | LIT Christmas Lights has a dedicated Nutley service page with residential scope, service inclusions, maintenance, removal, booking guidance, and a direct estimate CTA. | Nutley can be emphasized authentically on the Essex page now; a separate page remains a later evidence-gated decision. |
| Verona service searches | LIT and Christmas Decorators of NJ have dedicated Verona pages with housing, roofline, maintenance, takedown, and storage details. | Localized copy must be based on Jones's real work and operating knowledge, not generic housing descriptions copied from competitors. |
| Commercial service searches | Direct installers such as Smitty's and Holiday Lights Decor expose commercial and municipal service tiers. Permanent and general outdoor-lighting providers also overlap. | Commercial, HOA, storefront, and municipal claims require separate confirmation of capability, equipment, insurance, and capacity. |

### Competitor classification

| Business or result | Classification | Observed strengths | Caution for Jones |
| --- | --- | --- | --- |
| LIT Christmas Lights | Direct business; local-pack and organic competitor | Essex and town-specific pages, visible review proof, local phone number, residential focus, maintenance and removal language, early-booking guidance | Do not reproduce town-page templates or claim local work without project proof |
| Smitty's Christmas Décor | Direct business; local-pack and organic competitor | Cedar Grove location, long operating history, residential/commercial/municipal scope, detailed process, training and insurance claims, maintenance, takedown, storage, physical address | Jones should compete with verified proof and clarity, not unsupported years, credentials, or service tiers |
| Holiday Lights Decor New Jersey | Direct business; local-pack and organic competitor; franchise | County hub plus town pages, review and insurance presentation, gallery, explicit process, service segmentation, some visible pricing | Its statewide scale and permanent-light offering are not automatically appropriate models for Jones |
| Home Light Up | Direct organic competitor | Focused Livingston page, text-a-photo quote path, explicit maintenance response and returning-customer proposition | Town-specific proof and service guarantees must be real before Jones adopts similar claims |
| Christmas Decorators of NJ | Direct organic competitor | Multiple Essex town pages, turnkey service explanation, local property descriptions | Avoid scaled city copy that lacks Jones-specific experience |
| Lights Local | Directory or lead-generation competitor | County coverage and quote-matching flow | Do not model Jones's first-party service page on a directory or expose leads unnecessarily |
| Gallo Bros Power Washing and other permanent-light advertisers | Adjacent paid competitor | Demonstrates that pressure-washing brands can sell lighting and that paid results mix seasonal and permanent intent | Brand adjacency is feasible, but seasonal and permanent services must not be conflated |

Representative pages inspected include [Jones's current Essex County page](https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county), [LIT's Nutley page](https://www.litchristmaslights.com/nutley-nj/), [Home Light Up's Livingston page](https://homelightup.com/services/christmas-light-installation/livingston), [Smitty's Essex County page](https://smittyslandscaping.com/christmas-decoration-essex-county/), and [Holiday Lights Decor's Essex County page](https://holidaylightsdecornj.com/essex-county).

### User expectations across representative pages

The recurring service model is turnkey: design consultation, company-supplied commercial-grade lights and hardware, safe installation, in-season maintenance, post-season takedown, and often storage. Common decision questions cover price, what is included, who owns the lights, installation timing, repairs, property protection, insurance, removal, storage, and next-year service.

Common conversion paths include a short quote form, phone call, and text-a-photo estimate. Competitors frequently support those paths with real project galleries, review counts, years in business, local addresses, insurance statements, and explicit service guarantees.

These recurring features describe user expectations; their presence does not prove that any individual feature caused ranking.

### Jones page strengths to preserve

1. The existing Essex County URL is already indexed and has relevant GSC visibility.
2. The page contains a direct quote CTA, phone number, county coverage, and a full-service narrative.
3. It already mentions design, installation, maintenance, takedown, storage, LEDs, timers, rooflines, and several Essex communities.
4. The pressure-washing brand does not prevent holiday-lighting visibility; adjacent pressure-washing companies are also present in paid and public results.

### Jones page gaps and risks

1. The title and H1 lead with `Holiday Lighting`, while the combined GSC, Keyword Planner, Trends, and public-result evidence supports leading with `Christmas Light Installation` and using `holiday lighting` secondarily.
2. The page is substantially longer and broader than needed for the core residential hiring task. Large blocks of town-by-town descriptions, packages, event references, weather claims, and checklists dilute the service decision.
3. The page contains claims that require explicit owner verification, including OSHA-trained technicians, commercial and storefront service, HOA and historic-board coordination, app-controlled color changes, climate-controlled storage, rapid maintenance, free design consultations, all-town coverage, and one-business-day response.
4. The visible `Success Stories` describe Montclair and Maplewood client work and outcomes. Those should remain only if Kyle confirms the projects and the team can supply supporting photos or records.
5. Structured data includes a `$699` minimum-price offer that is not presented as a verified visible offer on the page. It should be confirmed or removed during implementation.
6. The page presents every Essex municipality as established service coverage. The approved scope currently prioritizes Nutley, Livingston, and Verona; the final service-area statement must match actual holiday-lighting operations.
7. The current page lacks strong visible first-party proof comparable to competitor galleries, reviews, team credentials, and clearly documented completed installations.
8. Broad lighting terminology and permanent-adjacent content risk reinforcing the existing GSC ambiguity around landscape, electrical, security, smart, and permanent lighting.

### Page ownership decision

Improve the existing Essex County URL as the owner of the residential seasonal-installation cluster. Do not create Nutley, Livingston, Verona, cost, `near me`, removal, storage, or commercial pages during the first step.

The revised county page should lead with the residential task, use concise verified service inclusions, explain the quote-to-takedown process, distinguish seasonal lighting from permanent lighting, feature authentic project and review evidence, name confirmed priority towns, answer material buying questions, and retain a clear quote and phone conversion path.

Town pages remain a later option only when a town has distinct demand evidence, real project proof, operational coverage, and enough unique value to avoid doorway-style repetition.

## 11. GSC, Keyword Planner, Trends, and search-result findings

### Observed facts

1. The Essex County page is the only supplied holiday-lighting URL with meaningful explicit seasonal-installation visibility.
2. The Essex County page has several relevant queries with average positions near or within the first page, but it recorded no clicks in the filtered period.
3. Most Essex impressions are attached to general or nonseasonal lighting language rather than explicit holiday-installation language.
4. The Bergen County page has no explicit seasonal-installation query in the supplied query rows.
5. The main hub has no observed customer-demand query in the supplied export.

### Supported interpretation

The existing Essex County URL is the strongest candidate for the first seasonal improvement. The immediate relevance problem is not whether a pressure-washing domain can mention holiday lighting. It is that the current county pages are being interpreted broadly enough to match permanent, outdoor, landscape, electrical, security, and smart-lighting searches.

Keyword Planner strengthens the language case for a professional holiday-light installation offer, while Trends provides directional seasonal timing and public results confirm that a focused county service page matches the result landscape. Kyle's operating facts and proof remain necessary before the final brief can convert current claims into approved page requirements.

## 12. Questions that require Kyle

1. Does Jones provide only removable seasonal holiday lighting, or also permanent exterior lighting?
2. Does Jones provide landscape, architectural, security, smart, or electrical-lighting work?
3. Are commercial and storefront holiday-lighting installations accepted?
4. Is Fairfield within the active holiday-lighting territory?
5. Is Bergen County still active, and is the real boundary Paramus southward?
6. Are Ridgewood, Franklin Lakes, Glen Rock, and Upper Saddle River intentionally excluded?
7. Are maintenance, repairs, takedown, storage, timers, and return-season service included?
8. Does Jones supply and retain ownership of the lights, or install customer-owned products?
9. Are commercial-grade LEDs, custom-cut strands, timers, clips, wreaths, garland, tree wrapping, and color-changing systems actually available?
10. Are technicians OSHA-trained, and what insurance, training, or safety claims can Jones document?
11. Is there a true minimum price, and is the `$699` value currently placed in structured data accurate and owner-approved?
12. Is the design consultation free, and what information is needed before Jones can quote accurately?
13. What is the normal maintenance response time, installation window, takedown window, and storage process?
14. Are the Montclair hillside-home and Maplewood storefront success stories real Jones projects? If so, can Kyle provide photos and permission to use them?
15. Which completed holiday-lighting projects, reviews, before-and-after photos, crew photos, or customer testimonials can support the page?
16. Can Lavo provide quote starts, completed submissions, booked estimates, booked jobs, job value, and service type, either through account access, exports, webhooks, or GA4-compatible events?

## 13. Content-planning handoff

The research has been converted into the [DEV-1511 provisional Essex County page brief](./DEV-1511-ESSEX-HOLIDAY-LIGHTING-PAGE-BRIEF.md). The brief separates structural recommendations from material claims that must be removed, narrowed, or approved during the Kyle meeting. Trends and public-result research are complete unless new first-party evidence materially conflicts with the conclusions.
