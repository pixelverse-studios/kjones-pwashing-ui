# Deployment Summary

## Latest deploy summary

- Added the residential soft-washing research for Essex County, Nutley, Livingston, and Verona: competitor findings, Google Search data for key pages, and keyword estimates by area.
- Added the proposed next-phase soft-washing plan and a meeting agenda for Kyle's review.
- No website pages, content, or settings changed in this release.

## Notes for internal team

- Release: R3 residential soft-washing research and plan (SEO-37, SEO-38, SEO-39, SEO-40, SEO-42), promoted from `dev/r3-residential-soft-washing-research-and-plan` (PRs #49 and #50). Documentation only. Merging to `main` still triggers a Netlify production build; the site's pages and sitemap output are unchanged.
- Raw Search Console exports are deliberately not in the repository because it is public; they are kept locally in the git-excluded `docs/seo/data/private/` folder. Keyword Planner exports are committed under `docs/seo/data/raw/r3-soft-washing/`.
- Nothing in the plan is approved for implementation. The next website change (soft-washing page brief and release) waits on Kyle's answers to `docs/seo/R3-SOFT-WASHING-KYLE-AGENDA.md`.
- Open follow-ups outside this release: SEO-36 holiday-lighting overview content fix (due November 6), URL Inspection for `/services/essex-county` (zero impressions in 12 months), and confirming GA4 production collection.
- GitHub PR merges do not invoke a local pre-push hook. Send this release summary through the PVS deployment reporting workflow separately if that hook did not run.

## Changed URLs

- None. Documentation-only release.
