# 04 - Brand Guidelines & Design Tokens

## 1. Brand Identity Fusion

The brand identity combines **Cruxeo's** position as the Middle East's premier creative technology agency with the refined, atmospheric dark-space design system of **Fyntic**.

---

## 2. Color System & Design Tokens

### Primary Dark Palette
- **Cosmic Black (Base)**: `#030712` (Tailwind `gray-950`) — Main backdrop.
- **Obsidian Surface**: `#080D1A` — Elevated cards and navigation capsules.
- **Subtle Surface Border**: `rgba(255, 255, 255, 0.08)` — Clean divider borders.
- **Active Border Glow**: `rgba(59, 130, 246, 0.4)` — Hover state highlights.

### Brand Accent Palette
- **Electric Neon Blue**: `#2563EB` / `#3B82F6` — Primary interactive CTAs and active states.
- **Cyber Cyan**: `#06B6D4` / `#38BDF8` — Secondary highlights, glowing accents, and badges.
- **Radiant Emerald**: `#10B981` — Success indicators and feature checkmarks.
- **Vibrant Violet Glow**: `#8B5CF6` — Ambient background gradients and lighting accents.

### Text Hierarchy
- **Heading Primary**: `#FFFFFF` — High contrast display typography.
- **Body Text**: `#CBD5E1` (`slate-300`) — Optimal readability against dark backgrounds.
- **Muted Supporting**: `#94A3B8` (`slate-400`) — Subtitles, dates, and metadata.
- **Subtle Tertiary**: `#64748B` (`slate-500`) — Footnotes and form placeholders.

---

## 3. Typography Hierarchy

- **Font Family**: Modern Geometric Sans-Serif (`Inter` / `Geist Sans` / system sans-serif fallback).
- **Headings**:
  - `Hero H1`: `font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl`
  - `Section H2`: `font-semibold tracking-tight text-3xl sm:text-4xl`
  - `Card H3`: `font-medium text-xl sm:text-2xl`
- **Body**:
  - `Body Large`: `text-lg sm:text-xl font-normal leading-relaxed`
  - `Body Regular`: `text-base font-normal leading-normal`
  - `Caption / Badge`: `text-xs sm:text-sm font-medium tracking-wide uppercase`

---

## 4. UI Components & Surfaces

### Frosted Glassmorphism
```css
.glass-pill {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

### Glowing Button Styles
```css
.btn-glow-primary {
  background-color: #2563eb;
  color: #ffffff;
  box-shadow: 0 0 25px rgba(37, 99, 235, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-glow-primary:hover {
  background-color: #1d4ed8;
  box-shadow: 0 0 35px rgba(37, 99, 235, 0.8);
  transform: translateY(-1px);
}
```

---

## 5. Voice & Tone
- **Visionary & Futuristic**: Speaks with confidence about experiential innovation, robotic activations, and drone light shows.
- **Premium & Professional**: Tailored for enterprise clients, global brands, government entities, and high-profile exhibitions.
- **Action-Oriented**: Clear invitations to collaborate ("Book Experience", "Schedule Drone Show", "Explore Activations").

