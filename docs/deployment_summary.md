# Deployment Summary

## Latest deploy summary

- Updated the holiday-lighting overview and Bergen and Essex County pages to describe Jones Pressure Washing's confirmed residential seasonal service and supported locations.
- Added a dedicated holiday-lighting request path with a form that collects project details and offers a phone-call option.
- Improved holiday-lighting navigation and calls to action, and removed unsupported project, pricing, and service claims.

## Notes for internal team

- Release: DEV-1346 holiday-lighting epic branch, including DEV-1357, DEV-1354, DEV-1565 packet, and the consolidated DEV-1557/DEV-1558/DEV-1358 corrections.
- The dedicated Lavo form was verified by a labeled request: the request appeared in Lavo; Phil received the customer email and SMS confirmations; Kyle received the business alert. Desktop and narrow mobile validation, confirmation sizing, and fallback link were checked.
- Holiday pages have self-referencing canonicals, index/follow metadata, server-rendered Service and BreadcrumbList JSON-LD, and sitemap entries. Netlify deploy previews receive an X-Robots-Tag noindex/nofollow header; production must not receive that header.
- The business facts used in the narrow copy were recorded in ADM-42. DEV-1565 still tracks Kyle's separate itemized final public-copy sign-off; no unverified project proof, specific product promise, availability date, or public holiday price was added.
- After deployment, verify production HTTP status, robots directives, canonical URLs, structured data, internal links, and the holiday form. Record the release in search and lead-measurement monitoring. Search indexing and rankings are not guaranteed by deployment.

## Changed URLs

- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/about
- https://www.jonespressurewashingnj.com/contact
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
