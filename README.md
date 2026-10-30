# Cruxeo — Next-Gen Experiential Technology Website

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Design Reference](https://img.shields.io/badge/Design%20System-Fyntic%20Reference-2563EB)](https://fyntic.webflow.io/)

A modern, high-performance web platform built for **Cruxeo**, Dubai's premier experiential marketing and creative technology agency. Rebuilt with Next.js App Router, TypeScript, and Tailwind CSS, the platform models the dark-mode cosmic aesthetic and interactive precision of the **Fyntic** design reference.

---

## 🚀 Key Features

- **Fyntic Design Fidelity**: Deep cosmic space palette (`#030712`), frosted glassmorphism capsules, ambient radial gradient lighting, and electric royal blue buttons with custom drop-shadow glows.
- **AeroShards Interactive Background**: GPU-driven wind sculpture of folded glass-like foil shards streaming across procedural depth pathways with pointer parallax, click ripple shockwaves, and hold-to-gather physics.
- **Interactive Ticker with Controls**: Seamless horizontal feature pill marquee with an accessible, interactive pause/play control toggle button.
- **Interactive Drone Swarm Flight & Telemetry Showcase**: 60 FPS hardware-accelerated aerial UAV swarm simulation with real-time formation morphing (Falcon Wing, Kinetic Helix, Orbital Core, Cursor Free Flight), dynamic propeller motion blur, downward volumetric laser cones, and live telemetry HUD.
- **Bento Capability Grid**: Asymmetric responsive bento layout detailing Cruxeo's 4 core technology pillars (**Ignispectra**, **Nexplay**, **Synapse**, **Lumen Lab**).
- **Filterable Case Studies Gallery**: Interactive tabbed project gallery featuring metrics, technology tags, and client profiles.
- **Full Route Ecosystem**:
  - Home (`/`)
  - About (`/about`)
  - Services & Tech Suites (`/services`)
  - Projects & Case Studies (`/projects`)
  - Blog & Research Index (`/blog`) and individual articles (`/blog/[slug]`)
  - Contact & RFP Inquiry (`/contact`)
  - Custom 404 Void (`/not-found`)
- **Validated RFP Form**: Client-side form management powered by React Hook Form and Zod schema validation, complete with loading states, error highlights, and success feedback.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Image & Video Optimization**: Next.js Native `next/image` & HTML5 Video with poster fallbacks

---

## 📁 Project Structure

```
cruxeo_site/
├── docs/                             # Complete project documentation suite
│   ├── 01-project-overview.md
│   ├── 02-original-website-audit.md
│   ├── 03-fyntic-reference-analysis.md
│   ├── 04-brand-guidelines.md
│   ├── 05-sitemap-and-content.md
│   ├── 06-asset-inventory.csv
│   ├── 07-component-specification.md
│   ├── 08-technical-architecture.md
│   ├── 09-seo-and-accessibility.md
│   ├── 10-testing-and-deployment.md
│   └── 11-content-gaps-and-assumptions.md
├── public/                           # Static assets
│   └── assets/
│       ├── brand/                    # Logos, icons, partner SVGs
│       ├── images/                   # Project artwork, avatars
│       └── video/                    # Hero particle video & poster
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── services/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/                   # Reusable modular components
│   │   ├── blog/BlogCard.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── FAQAccordion.tsx
│   │   ├── hero/
│   │   │   ├── DroneFlightShowcase.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── TickerPills.tsx
│   │   ├── navigation/
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Navbar.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectGallery.tsx
│   │   ├── services/
│   │   │   ├── BentoGrid.tsx
│   │   │   └── PricingPlans.tsx
│   │   └── ui/
│   │       ├── AeroShards.css
│   │       ├── AeroShards.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       └── CtaBanner.tsx
│   ├── data/siteData.ts              # Centralized verified content data
│   ├── lib/utils.ts                  # Class merger utility (cn)
│   └── types/index.ts                # TypeScript interfaces
├── .env.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚡ Quickstart & Development

### 1. Prerequisites
Ensure you have Node.js 18.17+ or 20+ installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Assurance & Build Commands

- **Typecheck**:
  ```bash
  npm run typecheck
  ```
- **Linting**:
  ```bash
  npm run lint
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. The framework preset will automatically detect Next.js with zero configuration needed.

### Deploy to Custom Node.js Server / Docker
1. Build the application: `npm run build`
2. Start the production instance: `npm run start`

---

## 📜 Documentation Reference

For in-depth design audits, component specifications, and accessibility reviews, explore the documents in [`docs/`](./docs/):
- Design System: [`docs/03-fyntic-reference-analysis.md`](./docs/03-fyntic-reference-analysis.md)
- Brand Guidelines: [`docs/04-brand-guidelines.md`](./docs/04-brand-guidelines.md)
- Component Specs: [`docs/07-component-specification.md`](./docs/07-component-specification.md)
- Architecture: [`docs/08-technical-architecture.md`](./docs/08-technical-architecture.md)

---

© 2026 Cruxeo LLC. Dubai, United Arab Emirates. All rights reserved.

