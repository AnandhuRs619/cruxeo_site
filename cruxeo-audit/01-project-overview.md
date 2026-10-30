# CRUXEO existing website audit

Audit date: 29 October 2026 (India time). Supplied website: https://cruxeo.abinschandran.in/.

## Purpose and evidence standard

Document the existing public website as the baseline for a later rebuild. No new website, redesign, rewritten company copy, account, form submission, AI enquiry or outbound message was created. “Observed” means retrieved source or a direct browser observation; “website claim” is not independent verification. Recommendations and client questions are explicitly separated.

CRUXEO Experience describes itself as a creative technology company based in Dubai, United Arab Emirates. Its four divisions are NEXPLAY, LUMEN LAB, IGNISPECTRA and SYNAPSE. The central proposition is coordinated delivery through one team, with either one division or several engaged for a project. Sources: homepage, /about and /services.

## Purpose and audiences

The website explains capabilities, presents selected work and converts enquiries primarily through WhatsApp, telephone and email. Likely audiences, inferred from the service copy: brands, event agencies, venue operators, exhibition teams, production buyers and businesses seeking software/AI projects. No audience research was supplied.

## Discovered structure

| Route | Purpose |
| --- | --- |
| / | Homepage |
| /about | Company / about |
| /services | Service divisions |
| /works | Portfolio listing |
| /contact | Contact |
| /privacy | Legal / privacy |
| /terms | Legal / terms |


Divisions and work examples use hash anchors, not separate detail pages. Seven pages were discovered from navigation and footer. Sitemap declares five URLs on `cruxeo.com`; all five pathnames have inspected equivalents on the supplied host. Privacy and Terms are linked but absent from that sitemap. No linked blog, news, resource library, pagination, login, shop or account section was discovered.

## Main findings

- All seven discovered HTML pages and both discovery resources returned HTTP 200; no redirect was recorded for them.
- Confirm intended deployment domain: robots, sitemap, schema and social URLs point to `cruxeo.com`, while the audit target is the supplied subdomain.
- Main five pages have no canonical tag in retrieved HTML; legal pages canonicalize to `cruxeo.com`.
- Work page reuses homepage title/description; all seven reuse the same social metadata.
- Project claims, partner associations and team depictions need owner verification. Several images have `ai-generated` paths; this is a provenance signal, not proof of how every asset was produced.
- Contact dock and assistant panel open, portfolio category filter works, and FAQ keyboard activation works. AI response/submission and messaging delivery were not tested.
- Desktop inspection and CSS analysis completed; mobile/tablet device behavior, Lighthouse and field Core Web Vitals remain unmeasured.

## Handoff

Use the original content and unchanged assets as the baseline. Resolve `10-open-questions-and-gaps.md`, then supply the design reference and explicit approval before implementation. Planned future stack from the user brief: Next.js App Router, React, TypeScript and Tailwind CSS. Versions and any additional libraries must be selected at implementation time, not inferred from this audit.
