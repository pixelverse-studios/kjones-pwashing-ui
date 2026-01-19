# Ticket: Restore general layout after holiday lighting season

## Metadata

| Field | Value |
|-------|-------|
| **Team** | Kyle Jones |
| **Project** | KPJ 2026 |
| **Milestone** | pressure-washing-revamp |
| **Assignee** | me |
| **Priority** | Medium (3) |
| **Labels** | Front End, Ticket, Improvement |

---

## Title

Restore general layout after holiday lighting season

---

## Description

### What
Revert the homepage from holiday lighting prioritization back to the core pressure & soft washing messaging. The holiday season is over and the site should return to its general year-round layout.

### Why
In late 2025, we prioritized holiday lighting across the site to capture seasonal demand. Now that the season has passed, we need to restore the general service focus while keeping holiday lighting accessible for future seasons.

### Where (Files Affected)
- `src/components/home/HeroSection.tsx` - Hero image, headline, CTAs
- `src/app/page.tsx` - Title, meta description, keywords, schema
- `next-sitemap.config.js` - Priority weights

---

## Acceptance Criteria

- [ ] Homepage hero uses `/Homepage.jpg` background
- [ ] Headline reads "Professional Pressure & Soft Washing For Homes and Businesses in New Jersey"
- [ ] Primary CTA is "Request Your Free Estimate" (opens quote modal)
- [ ] Secondary CTA is "Learn More About Us" → `/about`
- [ ] Page title restored to "Jones Pressure Washing | Pressure & Soft Washing in Bergen & Essex County, NJ"
- [ ] Holiday lighting keywords removed from homepage meta
- [ ] Homepage schema `makesOffer` includes only Pressure Washing and Soft Washing
- [ ] Sitemap priority for `/services/holiday-lighting/*` reduced to 0.7
- [ ] Holiday lighting remains in navigation (no changes to Navbar.tsx)
- [ ] Holiday lighting service pages remain accessible

---

## Implementation Notes

- Reference commit `a2f9e93` for original hero content
- HeroSection.tsx changes: background image, h1 text, CTA labels and links
- page.tsx changes: metadata title, description, keywords array, schema makesOffer
- next-sitemap.config.js: Change holiday lighting priority from 1.0/0.95 to 0.7
- Do NOT delete holiday lighting pages - they'll be reused next season

---

## Dev Branch

`dev/pressure-washing-revamp`
