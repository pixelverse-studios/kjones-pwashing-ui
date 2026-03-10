# Deployment Summary

## Latest deploy summary
- New Contact page with inquiry form, business info, service area, and response time details
- Replaced quote tool provider (Markate to Lavo CRM) for faster, more reliable instant quotes
- Overhauled FAQs page with 20+ real Q&As organized by category (previously 7 generic questions)
- Expanded About page with Kyle's origin story, professional background, equipment details, and core principles
- Added expert content to Pressure Washing page including when to choose pressure washing, what we won't wash, and best time to schedule
- Expanded Soft Washing page with cleaning approach details, surface-specific expertise for vinyl/stucco/roofs, and internal linking
- Expanded Additional Services page with detailed gutter cleaning breakdown, honest gutter guard opinion, and roof cleaning depth content
- Updated homepage trust section with more authentic, specific language about our approach and guarantees
- Added Instagram and Facebook social proof links to service page CTAs
- Standardized all CTA button labels and sizes across the site
- Added Contact link to navigation bar and footer

## Notes for internal team
- DEV-437 Epic: Swapped CTA modal from Markate to Lavo CRM, created /contact page, standardized CTA labels, updated sitemap, finalized animation variant
- DEV-442 Epic: Content enrichment from 42-question client Q&A — FAQs, About, Pressure Washing, Soft Washing, Additional Services, and Homepage trust section
- Button default height normalized from h-10 to h-12 (48px) to match CLAUDE.md standard
- AnimationSwitcher dev widget removed; animation locked to gentle fade variant
- AnimationContext simplified from 4 variants to single production variant
- Social proof uses BusinessInfo.sameAs array from constants.ts
- All JSON-LD schemas updated for new/changed content
- FAQPage schema added to FAQs page for rich snippet eligibility

## Changed URLs
- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/about
- https://www.jonespressurewashingnj.com/contact (NEW)
- https://www.jonespressurewashingnj.com/faqs
- https://www.jonespressurewashingnj.com/services/pressure-washing
- https://www.jonespressurewashingnj.com/services/soft-washing
- https://www.jonespressurewashingnj.com/services/additional
