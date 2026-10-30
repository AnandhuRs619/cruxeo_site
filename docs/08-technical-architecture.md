# 08 - Technical Architecture

## 1. System Overview

The application is built on the **Next.js App Router** framework, maximizing server-side rendering (SSR), static site generation (SSG) for performance and SEO, and client-side hydration for rich micro-interactions.

```
cruxeo_site/
├── docs/                     # Comprehensive documentation package
├── public/                   # Static media assets (video, icons, brand)
│   ├── assets/
│   │   ├── brand/
│   │   ├── video/
│   │   └── images/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with fonts, metadata, global styles
│   │   ├── page.tsx          # Homepage
│   │   ├── about/page.tsx    # About Us
│   │   ├── services/page.tsx # Services & Capabilities
│   │   ├── projects/page.tsx # Portfolio & Case Studies
│   │   ├── blog/             # Insights & Articles
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx  # Inquiries & RFP Form
│   │   ├── not-found.tsx     # Custom 404 handler
│   │   └── globals.css       # Global styles & Tailwind utilities
│   ├── components/           # Modular Reusable React Components
│   │   ├── navigation/       # Navbar, MobileMenu, Footer
│   │   ├── hero/             # HeroSection, TickerPills
│   │   ├── services/         # BentoGrid, ServiceCard
│   │   ├── projects/         # ProjectCard, ProjectGallery
│   │   ├── contact/          # ContactForm, FAQAccordion
│   │   └── ui/               # Button, Badge, Modal, Card
│   ├── data/                 # Structured content data (services, projects, blogs)
│   ├── lib/                  # Utility functions (cn, animations, schema)
│   └── types/                # TypeScript interfaces & types
├── package.json              # Dependency declarations
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.mjs           # Next.js configuration
```

---

## 2. Core Dependencies & Versions

- **Framework**: `next` (Latest stable App Router)
- **Language**: `typescript` (>= 5.x)
- **UI & Styling**:
  - `react` & `react-dom`
  - `tailwindcss`
  - `postcss` & `autoprefixer`
  - `clsx` & `tailwind-merge` (for dynamic class utilities)
- **Icons**: `lucide-react`
- **Animations**: `framer-motion` (Motion)
- **Forms & Validation**: `react-hook-form` & `zod`

---

## 3. Server vs. Client Component Strategy

- **Server Components (Default)**:
  - Layout wrappers (`RootLayout`, page metadata).
  - Static marketing copy, content data rendering, sitemap generation, and SEO schemas.
- **Client Components (`'use client'`)**:
  - `Navbar` & `MobileMenu` (scroll detection, drawer state).
  - `HeroSection` (video play state, interactive buttons).
  - `TickerPills` (marquee animation & pause toggle).
  - `BentoGrid` (interactive cursor spotlight).
  - `ContactForm` (client validation, input state).
  - `FAQAccordion` (expand/collapse state).

---

## 4. Performance & Asset Optimization

1. **Background Video Optimization**:
   - Compressed MP4 with muted audio track to allow unprompted mobile autoplay.
   - Fallback poster image (`particles-poster.jpg`) to avoid layout shift before video buffers.
2. **Font Loading**:
   - Next.js `next/font` for zero-layout-shift Google Font delivery (`Inter` or `Plus Jakarta Sans`).
3. **Image Optimization**:
   - Next.js `<Image />` component with explicit width, height, and modern AVIF/WebP formats.
4. **Code Splitting & Bundle Size**:
   - Motion components isolated into lightweight islands.

