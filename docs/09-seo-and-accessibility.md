# 09 - SEO and Accessibility Specifications

## 1. Search Engine Optimization (SEO)

### 1.1 Metadata Architecture
Next.js App Router metadata is structured hierarchically. The root layout provides baseline OpenGraph tags, canonical URLs, and favicon links, while child routes override specific titles and descriptions.

```typescript
// Example metadata definition
export const metadata: Metadata = {
  title: {
    default: "Cruxeo | Experiential Marketing & Creative Technology Agency Dubai",
    template: "%s | Cruxeo",
  },
  description: "Cruxeo engineers futuristic brand activations, drone light shows, AI photo booths, robotics, and 3D holograms for visionary brands across Dubai and the Middle East.",
  keywords: [
    "Experiential Marketing Dubai",
    "Drone Light Shows UAE",
    "AI Photo Booth",
    "Robotics Brand Activations",
    "Interactive Event Technology",
    "3D Hologram Exhibition",
    "Cruxeo Experience"
  ],
  authors: [{ name: "Cruxeo Experience" }],
  creator: "Cruxeo",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://cruxeo.com",
    title: "Cruxeo | Experiential Marketing & Creative Technology Agency",
    description: "Transforming events into unforgettable spectacles with drone shows, AI activations, and immersive robotics.",
    siteName: "Cruxeo",
    images: [
      {
        url: "/assets/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cruxeo Experiential Marketing & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruxeo | Next-Gen Experiential Technology",
    description: "Next-generation brand activations in Dubai.",
    images: ["/assets/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 1.2 Structured Data (JSON-LD)
Schema.org JSON-LD will be injected in the root layout to classify Cruxeo as a `ProfessionalService` and `Organization` in Dubai:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cruxeo",
  "url": "https://cruxeo.com",
  "logo": "https://cruxeo.com/assets/brand/cruxeo-logo.svg",
  "image": "https://cruxeo.com/assets/brand/og-image.jpg",
  "description": "Experiential marketing and creative technology agency in Dubai providing drone light shows, AI photo experiences, and interactive robotics.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "telephone": "+971545454891",
  "priceRange": "$$$$"
}
```

---

## 2. Accessibility (WCAG 2.1 AA Compliance)

### 2.1 Contrast Ratios
- Primary text on pure dark background: `#FFFFFF` on `#030712` exceeds 18:1 (far exceeding the 4.5:1 minimum).
- Body copy: `#CBD5E1` on `#030712` provides an 11.2:1 contrast ratio.
- Interactive buttons: Electric blue (`#2563EB`) with white text provides a 4.6:1 contrast ratio.

### 2.2 Semantic Elements & Keyboard Navigation
- Logical heading order (`h1` -> `h2` -> `h3`) with no skipped levels.
- Focus rings: All focusable elements include visible outline states (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none`).
- Screen reader aids: Decorative icons use `aria-hidden="true"`, and icon-only buttons include descriptive `aria-label` tags.
- Motion reduction: Motion animations respect the user's OS preference (`@media (prefers-reduced-motion)`).

