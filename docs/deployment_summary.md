# Deployment Summary

## Latest deploy summary

- Made the seasonal holiday-lighting promotion and Christmas countdown easier to find on the homepage, with a refreshed service layout that keeps pressure washing and soft washing prominent.
- Updated the holiday-lighting overview with seasonal photography and clearer links to the Bergen and Essex County pages.
- Improved navigation readability while scrolling, added a direct phone action, and made contact links easier to recognize.
- Listed both the sitemap index and its page sitemap directly in `robots.txt` for search-engine discovery.

## Notes for internal team

- Release: DEV-1571 R2 holiday-lighting discoverability and UX follow-up. Production release date: October 16, 2026 (America/New_York). Record Netlify's actual deployment timestamp during the live verification.
- DEV-1572 through DEV-1576, DEV-1579, and DEV-1575 are included. The production build, lint, TypeScript validation, and generated sitemap completed successfully before release.
- Holiday service coverage remains Essex County plus Paramus and Bergen County communities south of Paramus. The overview uses the original graphic with Bergen highlighted; the nearby county links and copy state the precise coverage.
- DEV-1575 predeployment QA evidence is in `docs/tickets/DEV-1575-predeploy-qa.md`. The owner visually accepted the final service-area graphic. A dedicated mobile Lighthouse report and live lead test were not completed before merge; check live performance and the Lavo holiday form after deploy.
- DEV-1580 tracks the externally hosted Lavo form's preselected promotional email checkbox. Verify with the form owner; no Lavo configuration was changed in this release.
- After deployment, confirm the changed URLs, holiday imagery, countdown, county links, contact flow, metadata, canonicals, structured data, `robots.txt`, and both sitemaps. Record the actual deployment time and use it as the annotation for later Google Search Console comparison. Search Console indexing and organic-search impact require later observation.
- GitHub PR merges do not invoke a local pre-push hook. Send this release summary through the PVS deployment reporting workflow separately if that hook did not run.

## Changed URLs

- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/about
- https://www.jonespressurewashingnj.com/contact
- https://www.jonespressurewashingnj.com/contact?service=holiday-lighting
- https://www.jonespressurewashingnj.com/faqs
- https://www.jonespressurewashingnj.com/privacy
- https://www.jonespressurewashingnj.com/services/additional
- https://www.jonespressurewashingnj.com/services/bergen-county
- https://www.jonespressurewashingnj.com/services/essex-county
- https://www.jonespressurewashingnj.com/services/holiday-lighting
- https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county
- https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county
- https://www.jonespressurewashingnj.com/services/pressure-washing
- https://www.jonespressurewashingnj.com/services/pressure-washing/bloomfield
- https://www.jonespressurewashingnj.com/services/pressure-washing/cliffside-park
- https://www.jonespressurewashingnj.com/services/pressure-washing/fort-lee
- https://www.jonespressurewashingnj.com/services/pressure-washing/ridgewood
- https://www.jonespressurewashingnj.com/services/pressure-washing/wyckoff
- https://www.jonespressurewashingnj.com/services/soft-washing
- https://www.jonespressurewashingnj.com/services/soft-washing/bloomfield
- https://www.jonespressurewashingnj.com/services/soft-washing/cliffside-park
- https://www.jonespressurewashingnj.com/services/soft-washing/fort-lee
- https://www.jonespressurewashingnj.com/services/soft-washing/livingston
- https://www.jonespressurewashingnj.com/services/soft-washing/montclair
- https://www.jonespressurewashingnj.com/services/soft-washing/ridgewood
- https://www.jonespressurewashingnj.com/robots.txt
- https://www.jonespressurewashingnj.com/sitemap.xml
- https://www.jonespressurewashingnj.com/sitemap-0.xml
