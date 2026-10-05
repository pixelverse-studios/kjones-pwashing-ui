# Jones Pressure Washing Agent Guide

## Critical Workflow Rules

- When the agreed work scope is complete and ready for review, commit it, push the review branch, and create or update its PR without requesting separate approval. This also applies to follow-up fixes requested during PR review.
- Never merge a PR without explicit user approval.
- Never push directly to `main` or force-push to `main`. Changes reach `main` through an approved PR merge; a push to `main` triggers production deployment on Netlify immediately.

## Collaboration and Tool Use

- If a request is too vague to determine the intended change, ask a focused clarifying question before starting work based on an assumption.
- When something goes wrong, explain what went wrong and what changed to fix it. If it remains unresolved, explain the cause and propose a concrete fix. Skip apologies that add no useful information.
- Plan tool calls before using them. Batch independent searches and reads where practical, and avoid repeated searches or unnecessary file reads. Keep dependent steps in order.

## Development Server

- Do not start a dev server by default. The user usually already has one running on port `3000`.
- If a server is genuinely required, check whether port `3000` is already in use first.
- Standard command: `npm run dev`

## Deployment Tracking

Before an approved PR merge into `main`, update [docs/deployment_summary.md](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/docs/deployment_summary.md).

Required sections:
- Latest deploy summary: client-facing bullet points.
- Notes for internal team: technical details not sent to the client.
- Changed URLs: full URLs that were modified.

Notes:
- The local pre-push hook sends this file to the PVS API and then resets it when a local push runs. GitHub PR merges do not run local hooks, so include deployment reporting in the approved merge workflow.
- Relevant environment variables are stored in `.env.local`.

```env
PVS_WEBSITE_ID=479bffb4-dd86-44cc-96ce-76690cd24e7b
PVS_API_URL=https://pvs-server-62hx7.ondigitalocean.app
PVS_BASE_URL=https://www.jonespressurewashingnj.com
```

## Project Overview

Jones Pressure Washing is a local service business website for Bergen and Essex County, New Jersey. The site is conversion-focused and should consistently reinforce trust, local expertise, and professional service quality.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| UI Components | Radix UI + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Forms | Lavo CRM iframe embeds |
| Analytics | SiteBehaviour |
| Deployment | Netlify |

## Design System

### Colors

Defined in [src/app/globals.css](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/app/globals.css) and [tailwind.config.ts](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/tailwind.config.ts).

| Token | Value | Usage |
| --- | --- | --- |
| `--gold` / `primary` | `#d4af37` | Brand gold, CTAs, headings |
| `--black` | `#121212` | Backgrounds |
| `--white` | `#f5f5f5` | Text on dark backgrounds |
| `--gray` | `#2a2a2a` | Secondary backgrounds |
| `--blue` | `#374151` | Accent, minimal use |

### Typography

- Headings: `Poppins` via `font-poppins`
- Body: `Inter` via `font-inter`

### Common Patterns

```ts
container: 'max-w-custom mx-auto px-6 py-8'
card: 'bg-black border-primary border p-8 rounded-lg'
overlay: 'bg-black-clear p-8 rounded-lg shadow-xl'
button: 'rounded-full h-12 px-6'
```

## Project Organization

```text
/src
  /app
    /about
    /contact
    /faqs
    /services
      /pressure-washing
        /[city]
      /soft-washing
        /[city]
      /additional
      /holiday-lighting
        /bergen-county
        /essex-county
    globals.css
    layout.tsx
    page.tsx
  /components
    /ui
    /home
    /about
    /contact
    /cta
    /services
      /holiday-lighting
      /location
    Navbar.tsx
    Footer.tsx
  /lib
    /types
    /data
    /services
    AnimationContext.tsx
    utils.ts
    constants.ts
/public
/docs
  /tickets
  deployment_summary.md
```

## Implementation Standards

### Layout

- Container: `max-w-custom mx-auto px-6`
- Section spacing: `py-8 md:py-12 lg:py-16`
- Card padding: `p-8`

### Animations

- Use Framer Motion through `AnimationContext` in [src/lib/AnimationContext.tsx](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/lib/AnimationContext.tsx).
- Prefer gentle fade transitions with staggered delays.
- Follow the existing `AnimationProvider` and `useAnimation()` pattern.

### Performance

- Target Lighthouse score: `90+` on all metrics.
- Use Next.js `Image` for all images.
- Use `next/font` for font loading.
- Keep images under `500KB` where practical.

### Accessibility

- Maintain WCAG 2.1 AA compliance.
- Keep all interactive elements keyboard accessible.
- Preserve proper heading hierarchy.
- Add alt text to all images.
- Add ARIA labels to icon-only buttons.

## SEO Strategy

### Focus

- Local SEO for Bergen and Essex County, NJ.
- Priority service keywords: pressure washing, soft washing, power washing.

### Checklist For New Pages

- Unique title tag (`50-60` chars)
- Meta description (`150-160` chars)
- H1 with the primary keyword
- Internal links to related pages
- Schema markup for `LocalBusiness` and `Service`

### Structured Data

Use JSON-LD for:
- `ProfessionalService` / `LocalBusiness`
- `Service` on service pages
- `BreadcrumbList`

### Sitemap

- Generated with `next-sitemap` via `npm run postbuild`

## Linear Ticket Defaults

When creating or updating Linear work for this repo:

| Field | Value |
| --- | --- |
| Team | Development |
| Assignee | `me` |
| Project | Jones Pressure Washing - Site |
| Milestone | Set per epic or ticket |
| Priority | Medium (`3`) |

Apply one Type label:
- `Feature`
- `Bug`
- `Improvement`
- `Refactor`
- `Maintenance`
- `Research`

## Core Principles

1. Conversion first: every page should move users toward requesting a quote.
2. SEO excellence: prioritize markup quality, local relevance, and page speed.
3. Speed: optimize for sub-3 second loads and efficient assets.
4. Mobile first: most traffic is mobile.
5. Trust building: reinforce licensing, insurance, local ownership, and professionalism.

## Key Integrations

### CTA System

- Primary CTA: "Get an Instant Quote"
  - Opens the quote modal in [src/components/cta/CtaModal.tsx](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/components/cta/CtaModal.tsx)
  - URL: `https://lavocrm.com/quote/d0ea84e6-2337-48b9-8445-f93373361731?embed=true`
- Secondary CTA: "Contact Us"
  - Uses the contact page flow in [src/components/contact/ContactContent.tsx](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/components/contact/ContactContent.tsx)
  - URL: `https://lavocrm.com/request/d0ea84e6-2337-48b9-8445-f93373361731/6b89109a-a584-4a83-8920-ea331b400a4b?embed=true`

### Analytics

- Provider: `SiteBehaviour`
- Location: [src/app/layout.tsx](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/app/layout.tsx)

### Contact Info

Stored in [src/lib/constants.ts](/Users/phil/PVS-local/Projects/clients/kjones-pwashing-ui/src/lib/constants.ts):
- Email: `Hello@jonespressurewashingnj.com`
- Phone: `(973) 486-4403`

## Quick Commands

```bash
npm run dev
npm run build
npm run postbuild
npm run lint
```

<!-- oko:search:start -->
## Oko code search
Use the Oko MCP `search` tool first to locate unfamiliar code or where a behavior is implemented. When the prompt arrives with an `Oko answer for this prompt` block, that search is already done: start from its excerpts. Ask in the user's own terms and scope; do not add guessed frameworks or pipeline stages. For edits, describe the existing code to change; the new text need not exist yet. A function, class or method named in the question is always returned. When the task asks for every use of a name, or its tests, ask "who calls X" or "tests for X". When a task has several separate parts, put all of them in one call's `questions` (2–8) instead of one call each; to see named definitions you have not seen yet, pass their names in `symbols`. When the task asks for every file that depends on a definition, or its specs, ask "who uses X": each row is a path:line you can cite. For a deletion list, ask "unused definitions in <directory>". Use native grep only for literal text.

| Looking for | Use |
| --- | --- |
| Where something happens, how a flow works | Oko `search` |
| Where a function, type, or setting is defined or used | Oko `search` |
| An exact string: error message, log line, config key | grep |
When you hand code search to a subagent, tell it to locate code with the Oko MCP `search` tool first; subagents do not see these instructions.

Oko returns exact, current file contents with real line numbers: the same text a file read would print. Treat each excerpt as a file read you have already done. A `Files using X` or `Callers of X` listing is complete for the indexed code: cite its rows as they are and do not grep for the name again; it names what it cannot see.

After an Oko search, if you can name the exact code to cite or change, act: answer or edit. If the excerpts show more than one definition that could be meant, such as copies of a helper in different packages, decide which one the request names before editing; the first result is the best match, not always the intended one. Usually that is one Oko call and at most one follow-up. Search again only for a part of the task no excerpt shows; do not re-ask shown code through `questions` or `symbols`. For code Oko did not show in full (the rest of a `partial excerpt`, the members of an `outline` or `body abridged` definition, or a definition the excerpts reference), ask Oko for it by name in `symbols`, several names in one call, instead of reading whole files. Read a file only for a line range Oko did not return, such as a path under `Other candidates`. A `possible match` was rated below the relevance cutoff.

- Good: Oko search, then answer with the returned `path:line` ranges.
- Good: Oko search, then edit the returned lines (drop the line-number prefix).
- Bad: Oko search, then `sed`, `nl`, `cat`, or a read of the same range to verify it.
- Bad: Oko search, then grep for a name the excerpts already show.
- Bad: Oko search, then a second Oko call (`questions` or `symbols`) for code the first answer already shows.
- Bad: Oko search, then a read of a whole file whose code the answer already showed.

When you answer in prose from search results, say inside the answer what you did not check: a path you did not follow, a caller you did not read, a file the excerpts only referenced. Do not present a partial trace as complete. When the user asks for a fixed format (JSON, a single value, a patch), return exactly that and nothing after it.

Start with normal search; use deep mode only if it was insufficient. If Oko is unavailable or returns nothing relevant, fall back to native search.
<!-- oko:search:end -->
