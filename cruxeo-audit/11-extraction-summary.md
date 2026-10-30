# Extraction summary

29 October 2026 • https://cruxeo.abinschandran.in/

| Measure | Result |
| --- | --- |
| Discovered content pages | 7 |
| Successfully HTTP/source inspected | 7 / 7 |
| Browser-inspected main page types | 5 (Home, About, Divisions, Work, Contact) |
| Discovery resources | robots.txt and sitemap.xml, both HTTP 200 |
| Sitemap declared pages | 5 on cruxeo.com; all 5 pathnames covered on supplied host |
| Legal pages omitted from sitemap | 2 |
| Asset URLs identified | 76 |
| Asset files downloaded and retained | 75 |
| Reusable files under public/assets | 74 |
| CSS evidence files included in downloaded count | 1 |
| Asset URL not downloaded | 1 cross-domain social-image reference |
| Internal fragment-link occurrences checked | 48 |
| Fragment targets missing | 0 |
| Intentional nonexistent-route test | HTTP 404; excluded from discovered-page count |
| Desktop screenshots | 5 |
| Implementation started | No |


Reusable asset breakdown: 25 font, 3 icon, 29 image, 17 video. Image/font/video validity was checked with Pillow, XML parsing, WOFF2 signatures and ffprobe as applicable. All paths in the inventory refer to actual files or are blank for the out-of-scope reference. SHA-256 hashes are supplied for downloaded public assets; CSS retained separately.

Primary logo: `public/assets/logos/logo.svg` (contains embedded raster data). Source: https://cruxeo.abinschandran.in/assets/images/logo/logo.svg.

Brand blue: #0B5CFF; near-black: #09090B; text: #EDECEC. Division accents: NEXPLAY #A855F7, LUMEN LAB #00F5D4, IGNISPECTRA #FFB12B, SYNAPSE #38B58B. Body: Hanken Grotesk; hero: Urbanist; section display: Funnel Display.

Important features: fixed navigation, animated/video hero, division accordion, hash navigation, portfolio filters, FAQs, back-to-top, WhatsApp/phone/email conversion and AI assistant panel. Filter and sampled accordion/dock states were directly checked. Assistant responses and external submissions were not tested.

Principal gaps: deployment-domain decision, canonical/social metadata, project/team/partner proof, logo master and asset rights, assistant data handling, owner-approved legal copy, mobile/tablet and comprehensive accessibility/performance testing.

This package completes documentation of the accessible baseline within the stated scope. It does not claim collection of every server asset or verification of every dynamic/backend behavior. Wait for the new reference URL and explicit approval before design or development.
