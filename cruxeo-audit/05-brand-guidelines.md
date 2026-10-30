# Observed brand guidelines

Source CSS: https://cruxeo.abinschandran.in/_next/static/immutable/chunks/3rmjgjb1b5mmh.css. Root variables were also checked in the rendered homepage at 1363 × 936. All palette values below are explicit CSS values, not screenshot estimates. These are observed website conventions, not a client-approved brand manual.

## Logo assets

- Primary horizontal logo: `public/assets/logos/logo.svg`; exact source URL in asset inventory.
- Logo icon: `public/assets/logos/logo-icon.webp`.
- Favicons: `public/assets/logos/favicon.svg`, `public/assets/logos/favicon.png`, and `public/assets/icons/favicon.ico`.
- The primary SVG contains embedded raster image data. SVG extension does not make it a fully editable vector master. Keep original bytes and request the original vector artwork if needed.
- No verified light-background, monochrome, vertical lockup, or transparent full-wordmark PNG was found. Do not create implied official variants. See inventory for dimensions and transparency.

## Color palette

| Observed token | Value |
| --- | --- |
| --body | #edecec |
| --border-hover | #ffffff2e |
| --border-light | #ffffff14 |
| --brand | #0b5cff |
| --brand-hover | #0047e0 |
| --brand-text | #5b92ff |
| --ignispectra-accent | #ffb12b |
| --lumen-accent | #00f5d4 |
| --neutral-400 | #a1a1aa |
| --neutral-800 | #27272a |
| --neutral-900 | #18181b |
| --nexplay-accent | #a855f7 |
| --primary | #09090b |
| --secondary | #71717a |
| --synapse-accent | #38b58b |
| --wa | #25d366 |

Brand blue drives core actions; purple identifies NEXPLAY, cyan/turquoise LUMEN LAB, amber IGNISPECTRA, and green SYNAPSE. WhatsApp uses its own green. Background is near-black; cards use dark neutrals and translucent borders. The logo’s X uses blue shading.

## Gradients

| Token | Exact definition |
| --- | --- |
| --brand-gradient | linear-gradient(135deg, #0b5cff 0%, #1f6bff 55%, #0047e0 100%) |
| --gradient-card | linear-gradient(180deg, #ffffff0a 0%, #ffffff03 100%) |
| --gradient-card-hover | linear-gradient(180deg, #ffffff14 0%, #ffffff05 100%) |
| --gradient-ignispectra | linear-gradient(90deg, #e96a16 0%, #ffb12b 100%) |
| --gradient-lumen | linear-gradient(90deg, #00c2ff 0%, #00f5d4 100%) |
| --gradient-nexplay | linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%) |
| --gradient-synapse | linear-gradient(90deg, #009b83 0%, #38b58b 100%) |
| --gradient-text-1 | linear-gradient(180deg, #fff 0%, #ffffffa6 100%) |
| --gradient-text-2 | linear-gradient(135deg, #fff 0%, #a1a1aa 100%) |

## Typography

| Role | Observed family | Details |
| --- | --- | --- |
| Hero | Urbanist | Homepage H1: 76px / 82.08px, weight 300, letter-spacing -3.04px at sampled desktop viewport |
| Section display | Funnel Display | Sample section H2 about 57.246px / 61.826px, weight 300; H3 example 36px / 43.2px, weight 400 |
| Body / navigation | Hanken Grotesk | Header base 17px / 28.05px, weight 350; navigation weight 500 |
| Mono labels | DM Mono | Defined by --font-mono; exact usage varies |
| Additional bundled families | Geist, Geist Mono, Instrument Serif | CSS font-face definitions present; not evidence all are needed for rebuild |
| Arabic fallback declarations | IBM Plex Sans Arabic, Noto Sans Arabic | Fallback names in CSS; no Arabic page or downloaded matching font was discovered |

Fonts are self-hosted WOFF2 files under Next static media. `evidence/font-map.csv` maps every font-face declaration to its original URL, weight and font-display value; downloaded originals are in `public/assets/fonts/`. Font file count includes language subsets. No font license file was discovered.

## Layout, spacing and interaction conventions

| Token | Value |
| --- | --- |
| --container-max | 1320px |
| --radius-lg | 20px |
| --radius-md | 14px |
| --radius-pill | 9999px |
| --radius-sm | 10px |
| --radius-xl | 28px |
| --radius-xs | 6px |
| --section-gap | 96px |
| --section-gap-mobile | 60px |
| --section-padding-desktop | 48px |
| --section-padding-mobile | 30px |
| --transition-base | .28s cubic-bezier(.16, 1, .3, 1) |
| --transition-fast | .15s cubic-bezier(.16, 1, .3, 1) |
| --transition-smooth | .45s cubic-bezier(.16, 1, .3, 1) |

CSS defaults to a 1320px maximum container, increasing to 1480px at min-width 1800px. Layouts use grids, alternating media/text sections, large rounded cards, pill buttons, low-opacity borders, glow shadows and dark photographic/video overlays. Header is fixed. Homepage hero is centered; inner-page title blocks are broader and heavier. Footer contains social links, company/division/contact/legal columns and a shared enquiry banner on inner pages.

Responsive CSS includes breakpoints at 480, 600, 640, 768, 900, 991/992, 1024 and 1800px. The hero division strip stacks/reduces text at smaller breakpoints; section spacing variables define desktop/mobile values. Responsive rendering was not executed at tablet/mobile widths; these are source observations. CSS includes prefers-reduced-motion handling and focus-visible rules for core buttons.

## Recommended token handoff

Retain the semantic names and measured values above as the initial migration map. Do not reinterpret `--primary` as the brand blue: it is the near-black background in this site. Use `--brand` for the blue action color. Audit contrast by actual text/background pairing before approval. Confirm which font families are truly needed and preserve division identity colors. Final styling waits for the reference website and design approval.

## Desktop references

- [Home screenshot](evidence/home-desktop.jpg)
- [About screenshot](evidence/about-desktop.jpg)
- [Services screenshot](evidence/services-desktop.jpg)
- [Works screenshot](evidence/works-desktop.jpg)
- [Contact screenshot](evidence/contact-desktop.jpg)
