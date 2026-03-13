# Deployment Summary

## Latest deploy summary
- Added city-specific landing pages for pressure washing and soft washing (Ridgewood, Wyckoff, Fort Lee, Cliffside Park, Bloomfield, Montclair, Livingston)
- Added Bergen County and Essex County general service hub pages
- Added "Cities We Serve" sections on pressure washing and soft washing pages linking to all city landers
- Added cross-city linking on every city lander page for improved navigation
- Added "Explore Our Services" section on About page linking to all 4 service categories
- Fixed favicon showing default React icon instead of business logo
- Optimized title tags across all pages to stay within 50-60 character SEO best practice
- Enhanced H1 headings with location keywords on Holiday Lighting and Additional Services pages
- Fixed structured data schemas (geo coordinates, breadcrumbs, service types)
- Added real Instagram and Facebook social links to footer and service CTAs
- Fixed metadataBase URL to match production domain

## Notes for internal team
- DEV-449 Epic: SEO & local service optimization — 9 commits covering DEV-471 through DEV-484
- SEO audit score improved from 76/100 to 87/100
- City lander pages use dynamic routes: /services/pressure-washing/[city] and /services/soft-washing/[city]
- City data sourced from serviceCitySlugs.json (single source of truth)
- Per-city geo coordinates added to LocalBusiness schema for each city lander
- Social links updated from placeholder URLs to real Instagram (@jpw_nj) and Facebook profiles
- Default Next.js favicon.ico deleted — logo-black.jpg now serves correctly via metadata config
- SEO documentation created in docs/seo/ (scope, keywords, checklist, competitors, changelog)

## Changed URLs
- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/about
- https://www.jonespressurewashingnj.com/services/pressure-washing
- https://www.jonespressurewashingnj.com/services/soft-washing
- https://www.jonespressurewashingnj.com/services/additional
- https://www.jonespressurewashingnj.com/services/holiday-lighting
- https://www.jonespressurewashingnj.com/services/bergen-county (NEW)
- https://www.jonespressurewashingnj.com/services/essex-county (NEW)
- https://www.jonespressurewashingnj.com/services/pressure-washing/ridgewood (NEW)
- https://www.jonespressurewashingnj.com/services/pressure-washing/wyckoff (NEW)
- https://www.jonespressurewashingnj.com/services/pressure-washing/fort-lee (NEW)
- https://www.jonespressurewashingnj.com/services/pressure-washing/cliffside-park (NEW)
- https://www.jonespressurewashingnj.com/services/pressure-washing/bloomfield (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/montclair (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/livingston (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/ridgewood (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/fort-lee (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/cliffside-park (NEW)
- https://www.jonespressurewashingnj.com/services/soft-washing/bloomfield (NEW)
- https://www.jonespressurewashingnj.com/services/holiday-lighting/bergen-county
- https://www.jonespressurewashingnj.com/services/holiday-lighting/essex-county
- https://www.jonespressurewashingnj.com/contact
- https://www.jonespressurewashingnj.com/faqs
