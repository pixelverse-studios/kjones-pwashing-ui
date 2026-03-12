# SEO Changelog

> Track all SEO changes and their impact

## How to Use

Record every SEO change with: Date, Category, Change, Rationale, Impact

---

## 2026 Changes

### 2026-03-11 — Post-Epic Re-Audit (DEV-449)
**Category:** Audit
**Type:** Full re-audit (4 parallel codebase scanners)
**Overall Score:** 87/100 (B+) — up from 76/100

**Scores by Category:**
| Category | Score | vs Last |
|----------|-------|---------|
| Technical | 92/100 | +14 |
| On-Page | 89/100 | +15 |
| Content | 82/100 | 0 |
| Local | 83/100 | +13 |

**Epic Work Completed (DEV-449):**
- DEV-471: Fixed structured data schema issues (WebSite schema, makesOffer, holiday image URLs, Script strategy)
- DEV-472: Optimized title tags to 50-60 char range, fixed Script strategy on /about and /faqs
- DEV-473: Added per-city geo coordinates to all 11 city lander schemas
- DEV-474: Created 7 new city lander pages (Fort Lee PW/SW, Cliffside Park PW/SW, Ridgewood SW, Bloomfield PW/SW)
- DEV-484: Created Bergen & Essex County general service hub pages with FAQPage schema
- DEV-475: Added CitiesWeServe internal linking component on service pages

**Previous Critical Actions — Resolution:**
- [x] Fix holiday lighting schema image URLs → Fixed DEV-471
- [x] Add strategy="beforeInteractive" to /about and /faqs → Fixed DEV-472
- [x] Add dynamic geo coordinates to city lander schemas → Fixed DEV-473
- [~] Shorten title tags to 50-60 char range → Improved DEV-472; 6 pages still 1-4 chars over
- [x] Add WebSite schema to layout.tsx → Fixed DEV-471
- [x] Expand homepage makesOffer to all services → Fixed DEV-471

**Remaining Issues:**
- [~] 6 title tags 1-4 chars over 60 (minor, non-critical)
- [~] metadataBase fallback URL mismatch in layout.tsx (jonespressurewashing.com vs jonespressurewashingnj.com)
- [~] 5 city lander descriptions under 140 chars (opportunity, not critical)
- [ ] Cross-city linking on city lander pages
- [ ] About page has no outbound internal links
- [ ] AggregateRating schema (needs review data source)
- [~] /services/additional and /services/holiday-lighting H1s lack location keywords

**Checklist Progress:** 79% complete (38/48) — up from 66%

---

### 2026-03-10 — SEO Scope Initialized
**Category:** Foundation
**Change:** Created /docs/seo/ documentation suite (SEO-SCOPE, SEO-KEYWORDS, SEO-COMPETITORS, SEO-CHECKLIST, SEO-CHANGELOG)
**Rationale:** Establish baseline SEO documentation to guide audit and optimization work
**Files Affected:** docs/seo/*.md
**Expected Impact:** Structured foundation for systematic SEO improvement

### 2026-03-10 — pw-seo Milestone Deployed
**Category:** Content / Technical / On-Page
**Change:** Major content enrichment across all pages (FAQs, About, service pages, trust section), Lavo CRM integration, contact page, CTA standardization, animation finalization
**Rationale:** Depth-of-value content from 42-question client Q&A; CRM migration for better lead capture
**Files Affected:** 30 files across app/, components/, lib/
**Expected Impact:** Improved keyword targeting, richer structured data, better conversion funnel
**Actual Impact:** TBD (measure after 2-4 weeks)

### 2026-03-10 — First Full SEO Audit
**Category:** Audit
**Type:** Full (4 parallel codebase scanners)
**Overall Score:** 76/100 (C+)

**Scores by Category:**
| Category | Score |
|----------|-------|
| Technical | 78/100 |
| On-Page | 74/100 |
| Content | 82/100 |
| Local | 70/100 |

**Key Findings:**
- 8 of 14 title tags exceed 60-char target (truncated in SERPs)
- WebSite schema missing from layout.tsx
- City lander schemas use static Wyckoff geo coords for all cities
- Holiday lighting schemas reference non-existent image paths
- Script strategy inconsistent on /about and /faqs
- City lander content is excellent — fully unique per city
- NAP consistency perfect across 17+ instances

**Critical Actions:**
- [ ] Fix holiday lighting schema image URLs (3 files)
- [ ] Add strategy="beforeInteractive" to /about and /faqs Script tags
- [ ] Add dynamic geo coordinates to city lander schemas
- [ ] Shorten 8 title tags to 50-60 char range
- [ ] Add WebSite schema to layout.tsx
- [ ] Expand homepage makesOffer to all services

**Checklist Progress:** 66% complete (31/47)
**Full Report:** [audits/audit-2026-03-10.md](./audits/audit-2026-03-10.md)

### Prior work (pre-documentation)
- JSON-LD schemas added to all pages (LocalBusiness, Service, BreadcrumbList)
- Meta tags and OG tags established on all pages
- Sitemap and robots.txt configured
- City lander pages created for pressure washing and soft washing
- Holiday lighting pages created (seasonal)

---

## Milestones

| Date | Milestone | Metrics Before | Metrics After |
|------|-----------|----------------|---------------|
| 2026-03-10 | SEO Scope Initialized | N/A | Baseline |
| 2026-03-10 | pw-seo Milestone Deployed | N/A | TBD |
