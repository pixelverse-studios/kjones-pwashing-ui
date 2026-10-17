# DEV-1575 — Holiday lighting follow-up release QA

**Review date:** October 16, 2026 (America/New_York)  
**Scope:** DEV-1571 release branch, tested locally from its merged work plus this QA branch  
**Environment:** Next.js production build served locally on port 3100; headless Chrome at 320, 375, and 1440 CSS px. This is predeployment evidence, not a live-site signoff.

## Result

The release is ready for PR review. Local rendering, navigation, crawl controls, and accessible interaction checks passed after the fixes below. Production deployment, live crawling, Search Console indexing, and live lead delivery remain postmerge checks.

| Area | Result | Evidence and limit |
| --- | --- | --- |
| Build and lint | Pass | `npm run build` generated 27 static pages and the sitemap; `npm run lint` found no warnings or errors. |
| Home promotion | Pass | At 320, 375, and 1440 px, the holiday promotion is visible above the fold without horizontal overflow. On October 16 in Eastern time it displays 70 days until Christmas. Keyboard Enter opens the holiday overview. |
| Holiday overview | Pass | Hero image loaded with descriptive alt text. Bergen and Essex service-area links rendered and worked with keyboard navigation. Holiday CTA opened the dedicated contact route. |
| County landing pages | Pass | Bergen and Essex pages rendered at mobile and desktop widths with county-specific H1s, self canonicals, index/follow directives, Service and Breadcrumb JSON-LD, and holiday contact links. |
| Holiday inquiry path | Partial | `/contact?service=holiday-lighting` rendered the dedicated Lavo iframe with a descriptive title and working external-form fallback. No test lead was submitted. Cross-origin form contents were outside the automated site accessibility scan. |
| Navbar and layout | Pass | Header readably transitions from translucent at top to solid on scroll; no horizontal overflow on the checked routes and widths. Visible primary links have names, images have alt text, and the inspected interactive paths worked with keyboard Enter. |
| Automated accessibility | Pass with manual-review limits | axe-core WCAG 2 A/AA and 2.1 A/AA scan across the home, holiday overview, both county pages, and holiday contact at 375 and 1440 px. One contact phone link finding was fixed by adding a persistent underline; final scan had zero violations. axe could not resolve some closed Radix `aria-controls` references or calculate contrast over image/gradient backgrounds. Visual inspection found legible text at tested sizes, but this does not certify full WCAG compliance or cover the cross-origin Lavo iframe. |
| Metadata and discovery | Pass locally | Home, holiday overview, and county pages have their expected titles, H1s, canonical URLs, index/follow directives, and internal links. Both `/sitemap.xml` and `/sitemap-0.xml` served HTTP 200; the child sitemap contained all four release page URLs. `robots.txt` now names both sitemap URLs directly. |
| Assets and motion | Pass in checked scope | Holiday hero JPG is 298 KB and the Essex illustration is 383 KB. Reduced-motion CSS suppresses the promotion animation. No Lighthouse field or lab score was produced. |

## Fixes made during QA

1. `next-sitemap.config.js` now sets `robotsTxtOptions.includeNonIndexSitemaps: true`, causing generated `robots.txt` to list the sitemap index and the child sitemap directly. This addresses the previously requested explicit sitemap listing.
2. The phone and email links in the contact sidebar now have persistent underlines and visible keyboard focus treatment. The first axe run found the phone link was identifiable only through its color; the final scan cleared that finding.

## Open follow-up and postdeployment gate

- [DEV-1580](https://linear.app/pixelverse-studios/issue/DEV-1580/review-preselected-promotional-email-consent-on-holiday-lighting-form): The externally hosted Lavo form showed its promotional email checkbox selected on a fresh load; its owner should verify the setting and intended behavior. This observation did not block website rendering QA.
- After an approved merge/deploy, confirm HTTP 200 and expected rendered content for the URLs below, inspect the live generated `robots.txt` and both sitemaps, exercise the holiday form according to the agreed lead-test procedure, and record the deployment annotation. Search Console indexing and search performance require later observation; they are not validated by this local test.
- Before the approved merge into `main`, put the approved client-facing summary, internal notes, and full changed URLs into `docs/deployment_summary.md` and run the repository's required reporting flow. This file was left untouched during review-branch pushes because the local pre-push hook sends and resets it.

## Draft deployment annotation

**Client-facing:** Improved holiday lighting discovery on the homepage; refreshed holiday lighting visuals and county service links; clearer contact links; explicit sitemap listings for search engines.

**Internal:** DEV-1571 follow-up release with local QA under DEV-1575. Confirm the live form, crawl files, and analytics after deployment. Track the Lavo consent setting in DEV-1580.

**Changed URLs to review after deploy:**

- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/services/holiday-lighting
- https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county
- https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county
- https://www.jonespressurewashingnj.com/contact
- https://www.jonespressurewashingnj.com/contact?service=holiday-lighting
- https://www.jonespressurewashingnj.com/robots.txt
- https://www.jonespressurewashingnj.com/sitemap.xml
- https://www.jonespressurewashingnj.com/sitemap-0.xml

The shared navbar and contact sidebar affect other routes, but the URLs above are the release's primary verification set.
