# Deployment Summary

## Latest deploy summary

- Added the owner-confirmed details to the holiday-lighting overview page: free estimates (usually done virtually, with no charge until the job is agreed), a December 10 booking deadline for this season, the parts of the home decorated (rooflines, windows, doors and entryways), and that Jones Pressure Washing is fully insured.
- Added four matching questions to the page's FAQ.
- The county holiday-lighting pages are unchanged.

## Notes for internal team

- Release: SEO-36 follow-up to PR #52 (deployed November 2, 2026). Kyle's answers were relayed by Phil on November 2 and are recorded in `docs/seo/SEO-36-KYLE-QUESTIONS.md` and the DEV-1511 claim register.
- Still not on the page: takedown timing, design-consultation claims, a product list, and real install photos. The existing hero stays a generic illustrative image; the unused `public/Holiday Lights Installation at Twilight.png` appears AI-generated and must not be presented as a Jones project.
- The December 10 date is season-specific. Refresh or remove it before the 2027 season.
- Title, meta description, H1, canonical, and the Service and BreadcrumbList schema are unchanged. The FAQPage schema mirrors the visible FAQ.
- Search Console: this change does not reset the SEO-36 plan. Run the one live test and one indexing request after this deploy if they haven't been done yet; don't resubmit after that. Re-inspect about 7 days later.
- GitHub PR merges do not invoke a local pre-push hook. Send this release summary through the PVS deployment reporting workflow separately if that hook did not run.

## Changed URLs

- https://www.jonespressurewashingnj.com/services/holiday-lighting
