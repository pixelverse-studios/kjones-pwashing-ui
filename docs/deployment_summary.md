# Deployment Summary

## Latest deploy summary

- Expanded the holiday-lighting overview page into a general guide to seasonal Christmas light installation in New Jersey: how the season works from request to takedown, tips for planning a display, and answers to common questions.
- Made it easier to choose between the Essex County and Bergen County holiday-lighting pages.
- The county holiday-lighting pages are unchanged.

## Notes for internal team

- Release: SEO-36 follow-up. `/services/holiday-lighting` has never been indexed ("URL is unknown to Google") despite passing the live test, being in the sitemap, and being linked from the homepage. The likely cause is thin content; main text grows from about 286 to about 737 words, with 2–7% shared text with the county pages.
- Title, meta description, H1, canonical, and the Service and BreadcrumbList schema are unchanged. A FAQPage schema now mirrors the visible FAQ.
- All copy uses only owner-approved facts from the DEV-1511 claim register. No prices, dates, capacity, product, insurance, or design-process claims. Open questions for Kyle are in `docs/seo/SEO-36-KYLE-QUESTIONS.md`; answers can be added in a later change.
- After deployment: record the deploy time in SEO-36, run one URL Inspection live test and one indexing request for the overview, and do not resubmit. Re-inspect about 7 days later; if it is still not indexed, record the exact status and escalate in SEO-32.
- GitHub PR merges do not invoke a local pre-push hook. Send this release summary through the PVS deployment reporting workflow separately if that hook did not run.

## Changed URLs

- https://www.jonespressurewashingnj.com/services/holiday-lighting
