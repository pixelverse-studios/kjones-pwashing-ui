# Deployment Summary

## Latest deploy summary

- Added optional Google Analytics 4 tracking to help measure visits and contact interest across the website.
- Added Microsoft Clarity for consented session insights and updated the existing SiteBehaviour tracking to honor the same choice.
- Added a privacy page and a persistent way for visitors to change their analytics choice.

## Notes for internal team

- Release: DEV-1568 / PR #39. GA4 stream `G-0QVSPPL0VG`; Clarity project `ywkxt0ztcm`.
- The site sends sanitized page views and five intent events: `quote_modal_open`, `contact_click`, `phone_click`, `email_click`, and `form_outbound_click`. None represents a confirmed lead or form submission. Lavo outcomes remain separate.
- GA4, Clarity, and SiteBehaviour load only after optional analytics consent. Clarity and SiteBehaviour also require a known, query-free entry route and a clean referrer so arbitrary inbound URL parameters do not start a session recording. Current internal URL parameters are fixed and nonpersonal.
- Before interpreting GA4 counts, disable history-based enhanced page views and review automatic form/outbound events for duplicates. In Clarity, enable Consent Mode and review masking and captured URLs. Confirm account ownership and obtain Jones owner review of the privacy wording.
- After deployment, verify accepted and rejected network behavior, GA4 DebugView events, Clarity/SiteBehaviour recording behavior, and actual URL parameters. Record the first verified production collection date as a new measurement baseline. Do not compare new GA4 or Clarity totals directly with historical SiteBehaviour totals.
- A GitHub PR merge does not invoke the local pre-push reporting hook. Preserve these details for separate PVS API reporting if that workflow is required.

## Changed URLs

- https://www.jonespressurewashingnj.com/
- https://www.jonespressurewashingnj.com/about
- https://www.jonespressurewashingnj.com/contact
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
