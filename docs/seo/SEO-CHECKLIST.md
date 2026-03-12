# SEO Implementation Checklist

> Progress: 38/48 Complete (79%) — Audited 2026-03-11

## Technical SEO

- [x] SSL configured (Netlify HTTPS)
- [x] Mobile-friendly (responsive Tailwind CSS)
- [x] sitemap.xml present (next-sitemap, auto-generated)
- [x] robots.txt configured (public/robots.txt with Host + sitemap)
- [ ] Core Web Vitals passing (needs Lighthouse verification)
- [x] Canonical tags on all pages
- [x] No duplicate content detected
- [ ] Broken link check (needs verification)
- [x] Script strategy consistent — all JSON-LD scripts use `strategy="beforeInteractive"` (fixed DEV-472)
- [~] metadataBase fallback URL — layout.tsx fallback is `jonespressurewashing.com`, production is `jonespressurewashingnj.com`

## On-Page SEO

- [x] Title tags on all pages (unique per page)
- [~] Title tags within 50-60 char target — 6 of 23 pages 1-4 chars over (about 62, contact 63, pressure-washing 63, holiday-lighting 64, montclair SW 61, livingston SW 61)
- [x] Meta descriptions on all pages (unique per page)
- [~] Meta descriptions within 120-160 char target — 5 city landers slightly under 140 chars (opportunity to expand)
- [x] H1 tags present on all pages (single H1 each, verified)
- [x] Heading hierarchy correct (h1 > h2 > h3, no skips, verified)
- [x] Open Graph tags on all pages (customized per page, not fallback)
- [x] Twitter Card tags on all pages
- [x] Image alt text on images (Next.js Image component, no raw `<img>` tags)
- [x] Internal linking between service pages (cross-links verified)
- [x] Internal links from homepage to city lander pages (ServiceAreas component links 4 cities + 2 county hubs)
- [x] Internal links from service pages to city lander pages (CitiesWeServe component, DEV-475)
- [ ] Cross-city linking on city lander pages

## Structured Data / Schema

- [x] LocalBusiness schema on homepage (HomeAndConstructionBusiness with geo, areaServed, openingHours)
- [x] LocalBusiness schema on about page
- [x] LocalBusiness schema on contact page (with ContactPoint, email)
- [x] Service schemas on service pages (with offers, minPrice)
- [x] BreadcrumbList on all inner pages
- [x] FAQPage schema on /faqs page (22 Q&A pairs, verified match UI)
- [x] WebSite schema in global layout (added DEV-471, strategy="beforeInteractive")
- [ ] AggregateRating in LocalBusiness schema (no review data source yet)
- [x] Homepage makesOffer — all 5 services listed (fixed DEV-471)
- [x] JSON-LD format (not microdata)
- [x] Holiday lighting schema image URLs — properly URL-encoded, all files exist in /public

## Content SEO

- [x] FAQ page with 20+ categorized Q&As (22 verified)
- [x] About page with origin story and credentials
- [x] Service pages with depth content (from client Q&A)
- [ ] Blog/article content (not yet created)
- [ ] Content calendar created
- [ ] Seasonal content strategy

## Local SEO

- [ ] Google Business Profile claimed and verified (client responsibility)
- [x] NAP consistent across site (all instances match constants.ts)
- [ ] Local citations built (Google, Yelp, directories)
- [x] City/location-specific lander pages created (11 city pages across 2 services)
- [x] County service hub pages created (Bergen County, Essex County with FAQPage schema)
- [x] Location lander content quality verified — EXCELLENT, fully unique per city with neighborhoods/landmarks
- [x] Internal links from homepage to city pages (4 cities via ServiceAreas)
- [x] Service area mentioned on homepage and service pages
- [x] areaServed in schemas (Bergen County, Essex County, dynamic per city page)
- [x] City lander geo coordinates UNIQUE per city (fixed DEV-473, 7 distinct lat/long values)
- [x] Service page schemas use BusinessInfo for addressLocality (fixed DEV-471)

## Location Keyword Reinforcement

- [x] H1 on homepage includes "New Jersey"
- [x] Service page H1s include "New Jersey" (pressure-washing, soft-washing)
- [x] Body copy mentions Bergen & Essex County on service pages (3+ mentions each)
- [x] City lander H1s include city name (verified: "Ridgewood Pressure Washing Pros" etc.)
- [x] City lander body copy reinforces city name (25+ local references per city, verified)
- [ ] Testimonial attributions include location (no location-tagged testimonials)
- [x] CTA sections reference service area ("Serving Bergen, Essex, and surrounding NJ counties")
- [~] /services/additional H1 has no location keyword ("Additional Services")
- [~] /services/holiday-lighting H1 has no location keyword ("Custom Holiday Lighting Designed for Your Home")

## Off-Page SEO

- [ ] Backlink acquisition strategy
- [x] Social media profiles linked (Instagram, Facebook via sameAs)
- [ ] Review generation strategy
- [ ] Local directory listings
