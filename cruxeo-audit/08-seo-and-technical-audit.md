# SEO, accessibility and technical audit

Evidence: saved HTML, response headers, CSS, asset files and desktop browser observations. This is not a penetration test, legal certification, automated WCAG audit or Lighthouse run.

## Prioritized findings

| Priority | Finding | Evidence / consequence | Recommended next action |
| --- | --- | --- | --- |
| High | Domain configuration mixed | robots/sitemap/schema/OG point to cruxeo.com; supplied host serves all content | Confirm production vs staging; configure one indexable host and staging indexing policy |
| High | Main-page canonicals absent | /, /about, /services, /works, /contact have no rel=canonical | Add correct per-page canonical after host decision |
| Medium | Duplicate portfolio metadata | /works title and description equal homepage | Give Work a unique truthful title/description |
| Medium | Shared social metadata | All seven pages use homepage OG title, description and og:url | Provide per-page URL/title/description; verify production social image resolves |
| Medium | Sitemap coverage incomplete | Five declared production-host URLs; linked legal routes omitted | Decide intentional indexing for legal pages and align sitemap/canonicals |
| High content approval | Project/team proof unverified | AI-labelled image paths and unsubstantiated metrics | Obtain client confirmation and authentic rights-cleared evidence |
| Medium | Heading levels skip | Work H1 to H3; service capability H2 to H4 | Use logical heading levels independent of appearance |
| Medium | Partner alt text generic | Partner 1 … Partner 10 | Use real entity names when meaningful; decorative alternatives if appropriate |
| Medium | Accordion interactivity nesting | Homepage has 8 links within role=button containers in source | Separate trigger and panel links; test keyboard and screen readers |
| Medium | Potential anchor occlusion | /services#ignispectra target measured above viewport with fixed header | Add appropriate scroll margin/padding and verify |
| Review | Logo SVG contains raster payload | logo.svg contains data:image | Request vector master; optimize only with approval and preserve original |


## Metadata coverage

| Route | Title chars | Description chars | H1 count | Canonical |
| --- | --- | --- | --- | --- |
| / | 53 | 156 | 1 | Absent |
| /about | 52 | 149 | 1 | Absent |
| /services | 50 | 153 | 1 | Absent |
| /works | 53 | 156 | 1 | Absent |
| /contact | 52 | 139 | 1 | Absent |
| /privacy | 40 | 131 | 1 | https://cruxeo.com/privacy |
| /terms | 44 | 140 | 1 | https://cruxeo.com/terms |


Character counts are measurements, not search-engine pass/fail thresholds. Full titles, descriptions, all meta tags and Organization JSON-LD are in `03-page-content.md` and `evidence/pages.json`. All pages share Organization schema pointing to cruxeo.com and social profiles. No per-project or FAQ structured data was found in retrieved JSON-LD. No meta robots directive was found in the extracted meta records; robots.txt allows `/`. Do not assume the supplied subdomain is deliberately blocked from indexing.

## URL coverage and links

All seven discovered page requests and robots.txt/sitemap.xml returned 200. No redirect was recorded for those nine requests. All 48 extracted internal fragment-link occurrences resolve to IDs in the destination HTML. Fragment existence does not establish visibility after filtering or correct scrolling. No linked internal page returned a failure in this crawl. The independent negative-route probe is saved in `evidence/not-found.*` and reported in the summary. Social links and cruxeo.com were inventoried, not crawled; their availability remains unverified. No arbitrary hidden-route guessing or authenticated crawling was performed.

## Accessibility observations

Every retrieved img element has an alt attribute. Homepage includes two empty alt values; these can be valid for decorative images and were not automatically classified as defects. Partner alt text is generic. Main/navigation landmarks and labelled contact controls exist. FAQ uses aria-expanded and responds to Enter in the sampled test. Native focus outline on the sampled FAQ was `rgb(16,16,16) auto 1px`, potentially hard to see against the dark surface; visual acceptance remains open. Button focus-visible CSS and reduced-motion media rules are present. Full tab order, screen reader behavior, modal focus trapping, contrast ratios, zoom/reflow and mobile touch targets were not comprehensively tested. No accessibility conformance claim is made.

## Framework and delivery evidence

`/_next/` scripts/media, Next Image optimizer URLs, React server-component payloads and response headers `x-nextjs-prerender`/`x-nextjs-stale-time` indicate a Next.js/React implementation. Vercel-specific cache/id headers indicate Vercel delivery. Exact dependency versions, CMS, database, source organization, build pipeline and hosting account configuration were not established. The future user-requested stack must not be confused with verified current dependencies.

## Performance observations (not lab or field scores)

Homepage HTML response body was 160703 bytes; saved global CSS is 48876 bytes. The archive contains 24,280,185 bytes of downloaded original assets including alternative video encodings and font subsets; this is NOT a page-load transfer total. Several originals are near 1 MB; Next Image URLs show image optimization is used. Multiple image elements declare broad `100vw` sizing and 3840-wide fallback src URLs; check rendered slot-specific sizes rather than infer that all browsers download those large variants. Background/portfolio videos can add transfer and decoding work. CSS declares seven font families across multiple subsets; remove unused faces only after confirming design requirements.

| Largest downloaded originals | Bytes | Type |
| --- | --- | --- |
| work-aerial-symphony.mp4 | 1355086 | video |
| lumen-lab.mp4 | 1278313 | video |
| work-radar-arena.mp4 | 1239242 | video |
| synapse.mp4 | 1207530 | video |
| work-aerial-symphony.webm | 1182071 | video |
| ignispectra.mp4 | 1115618 | video |
| work-radar-arena.webm | 1108625 | video |
| work-radar-arena.jpg | 1016485 | image |
| work-aerial-symphony.jpg | 1015688 | image |
| synapse.webm | 906574 | video |


No Lighthouse score, TTFB benchmark, LCP, CLS, INP, user traffic or field Core Web Vitals was measured. Curl timings are single environment-dependent retrieval timings and are not reported as performance benchmarks.

## Headers and integrations

HTTPS response headers include HSTS, nosniff, frame denial, referrer policy, permissions policy and CSP. CSP includes unsafe-inline/unsafe-eval script allowances and specific permitted external domains; these are review points, not proof of an exploitable vulnerability. The site’s privacy claim about TLS 1.3 was not independently protocol-validated. Browser extension console errors were excluded from site findings. No origin-attributed application error was established in the sampled console inspection.
