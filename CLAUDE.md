# Jones Pressure Washing — 2026

## CRITICAL: Git Workflow

- **NEVER commit without explicit user approval**
- **NEVER push without explicit user approval**
- **NEVER force-push to main** — this branch triggers production deployment
- Pushing to `main` deploys to Netlify production immediately

## CRITICAL: Development Server

- **DO NOT start dev servers** — user typically has one running on port 3000
- If you must start a server: `npm run dev`
- Always check if port 3000 is in use before starting

## CRITICAL: Deployment Tracking

Before pushing to main, update `docs/deployment_summary.md`:

### Required Sections:
- **Latest deploy summary**: Client-facing bullet points
- **Notes for internal team**: Technical details (not sent to client)
- **Changed URLs**: Full URLs that were modified

The pre-push hook sends this to the PVS API and resets the file.

### Environment Variables (in .env.local):
```
PVS_WEBSITE_ID=479bffb4-dd86-44cc-96ce-76690cd24e7b
PVS_API_URL=https://pvs-server-62hx7.ondigitalocean.app
PVS_BASE_URL=https://www.jonespressurewashingnj.com
```

---

## Project Overview

Local service business website for Jones Pressure Washing, showcasing professional pressure washing and soft washing services in Bergen and Essex County, New Jersey. Conversion-focused marketing site emphasizing trust, local expertise, and professional service quality.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| UI Components | Radix UI + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Forms | Lavo CRM (iframe embeds) |
| Analytics | SiteBehaviour |
| Deployment | Netlify |

---

## Design System

### Colors (defined in `src/app/globals.css` and `tailwind.config.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` / `primary` | #d4af37 | Brand gold, CTAs, headings |
| `--black` | #121212 | Backgrounds |
| `--white` | #f5f5f5 | Text on dark backgrounds |
| `--gray` | #2a2a2a | Secondary backgrounds |
| `--blue` | #374151 | Accent (minimal use) |

### Typography

- **Headings**: Poppins (`font-poppins`)
- **Body**: Inter (`font-inter`)

### Common Patterns

```typescript
container: 'max-w-custom mx-auto px-6 py-8'  // max-w-custom = 1400px
card: 'bg-black border-primary border p-8 rounded-lg'
overlay: 'bg-black-clear p-8 rounded-lg shadow-xl'  // black-clear = rgba(0,0,0,0.65)
button: 'rounded-full h-12 px-6'
```

---

## Project Organization

```
/src
  /app                    # Next.js App Router pages
    /about
    /contact
    /faqs
    /services
      /pressure-washing
        /[city]          # Dynamic city lander pages
      /soft-washing
        /[city]          # Dynamic city lander pages
      /additional
      /holiday-lighting
        /bergen-county
        /essex-county
    globals.css          # CSS variables & global styles
    layout.tsx           # Root layout with metadata
    page.tsx             # Homepage
  /components
    /ui                  # shadcn/ui components
    /home                # Homepage sections (HeroSection, HomeWrapper, etc.)
    /about               # About page content
    /contact             # Contact page content
    /cta                 # CTA modal (instant quote)
    /services            # Service page components
      /holiday-lighting  # Holiday lighting content components
      /location          # Location lander section components
    Navbar.tsx
    Footer.tsx
  /lib
    /types               # TypeScript interfaces
    /data                # Content data (locationServiceLanders, city slugs)
    /services            # Service content arrays
    AnimationContext.tsx  # Animation state provider (Framer Motion)
    utils.ts             # cn() utility
    constants.ts         # Contact info map
/public                  # Static assets, images
/docs                    # Documentation
  /tickets               # Ticket spec files
  deployment_summary.md  # Pre-push deployment tracking
```

---

## Implementation Standards

### Layout
- **Container**: `max-w-custom mx-auto px-6` (1400px max)
- **Section spacing**: `py-8 md:py-12 lg:py-16`
- **Card padding**: `p-8`

### Animations
- **Provider**: Framer Motion via `AnimationContext` (`src/lib/AnimationContext.tsx`)
- **Style**: Gentle fade — soft opacity transitions with staggered delays
- **Pattern**: `AnimationProvider` wraps page content, `useAnimation()` provides variants

### Performance
- Target Lighthouse score: 90+ on all metrics
- Use Next.js `Image` component for all images
- Use `next/font` for font loading
- Compress images to < 500KB

### Accessibility
- WCAG 2.1 AA compliance
- All interactive elements keyboard accessible
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on icon-only buttons

---

## SEO Strategy

### Focus
- Local SEO targeting Bergen & Essex County, NJ
- Service keywords: pressure washing, soft washing, power washing

### Checklist for New Pages
- [ ] Unique title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 with primary keyword
- [ ] Internal links to related pages
- [ ] Schema markup (LocalBusiness, Service)

### Structured Data
Use JSON-LD for:
- ProfessionalService / LocalBusiness
- Service (per service page)
- BreadcrumbList

### Sitemap
Generated via `next-sitemap` on build (`npm run postbuild`)

---

## Linear Ticket Creation

When creating Linear tickets for this project:

| Field     | Value                          |
| --------- | ------------------------------ |
| Team      | Development                    |
| Assignee  | `me`                           |
| Project   | Jones Pressure Washing - Site  |
| Milestone | *(set per epic/ticket)*        |
| Priority  | Medium (3)                     |

**Labels:** Apply one from the Type group:

- **Type:** `Feature`, `Bug`, `Improvement`, `Refactor`, `Maintenance`, `Research`

---

## Core Principles

1. **Conversion First** — Every element should guide users toward quote requests
2. **SEO Excellence** — Proper markup, fast loads, local schema
3. **Speed** — Sub-3s load times, optimized assets
4. **Mobile First** — 60%+ traffic is mobile; design accordingly
5. **Trust Building** — Showcase licensing, insurance, local ownership

---

## Key Integration Details

### CTA System (Dual CTA)
- **Provider**: Lavo CRM (embedded iframes)
- **Primary CTA** ("Get an Instant Quote"): Opens modal with quote tool
  - URL: `https://lavocrm.com/quote/d0ea84e6-2337-48b9-8445-f93373361731?embed=true`
  - Location: `src/components/cta/CtaModal.tsx`
- **Secondary CTA** ("Contact Us"): Links to `/contact` page with contact form
  - URL: `https://lavocrm.com/request/d0ea84e6-2337-48b9-8445-f93373361731/6b89109a-a584-4a83-8920-ea331b400a4b?embed=true`
  - Location: `src/components/contact/ContactContent.tsx`

### Analytics
- **Provider**: SiteBehaviour
- **Secret**: `368a4814-73ce-42ec-82ee-7d929fde4209`
- **Location**: `src/app/layout.tsx`

### Contact Info
Stored in `src/lib/constants.ts` via ContactMap:
- Email: Hello@jonespressurewashingnj.com
- Phone: (973) 486-4403

---

## Quick Reference

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Build for production
npm run postbuild # Generate sitemap
npm run lint      # Run ESLint
```
