# 07 - Component Specification

## 1. Overview

This document specifies the props, state, interactive behaviors, and responsive adaptations for all core components in the rebuilt application.

---

## 2. Navigation Components

### 2.1 `Navbar` (`src/components/navigation/Navbar.tsx`)
- **Props**: None (reads current route via `usePathname()`).
- **State**:
  - `isScrolled`: boolean (triggers background opacity and border intensity on scroll `> 20px`).
  - `mobileMenuOpen`: boolean (controls mobile drawer toggle).
- **DOM Structure**:
  - Top wrapper fixed at `top-4 inset-x-0 z-50 flex justify-center px-4`.
  - Floating capsule container: `glass-pill rounded-full px-6 py-3 flex items-center justify-between max-w-6xl w-full`.
  - Left: Cruxeo brand logo with gradient icon.
  - Center: Navigation pill links with active indicator underline / glow.
  - Right: Contact CTA button (`Get In Touch`) with glowing electric blue styling.
- **Micro-Interactions**: Hover states on links show a soft cyan glow and gentle font brightness increase.

### 2.2 `MobileMenu` (`src/components/navigation/MobileMenu.tsx`)
- **Props**: `isOpen: boolean`, `onClose: () => void`.
- **Behavior**: AnimatePresence slide-down or full-screen overlay with frosted backdrop (`backdrop-blur-xl bg-black/80`).

---

## 3. Hero & Display Components

### 3.1 `HeroSection` (`src/components/hero/HeroSection.tsx`)
- **Visuals**:
  - Background HTML5 `<video>` playing `particles.mp4` with `autoPlay loop muted playsInline`.
  - Radial atmospheric vignette overlay (`bg-gradient-to-b from-transparent via-black/40 to-black`).
- **Children**:
  - Announcement badge pill (`New • Automated Drone & AI Activations 2026`).
  - Headline H1: Dynamic responsive text sizing (`text-4xl sm:text-6xl lg:text-7xl`).
  - Subhead description paragraph with max width.
  - Button cluster (Dual CTAs: primary glowing blue and secondary white).
  - Social proof avatars and live metric counter.

### 3.2 `TickerPills` (`src/components/hero/TickerPills.tsx`)
- **Props**: `items: string[]`, `speed?: number`.
- **State**: `isPaused: boolean`.
- **Behavior**: Continuous horizontal marquee animation powered by CSS or Motion. Clicking the pause toggle at the bottom right pauses the loop.
- **Accessibility**: Includes `aria-live="polite"` and responds to user pause toggle.

---

## 4. Capability & Service Components

### 4.1 `BentoGrid` & `BentoCard` (`src/components/services/BentoGrid.tsx`)
- **Props**: `title: string`, `description: string`, `icon: LucideIcon`, `tag: string`, `size?: 'col-span-1' | 'col-span-2'`.
- **Interactivity**:
  - Radial mouse-follow hover highlight (`onMouseMove` updates CSS variables `--mouse-x` and `--mouse-y` for dynamic spotlight border).
  - Subtle card lift (`y: -4px`) on hover.

### 4.2 `ProjectCard` (`src/components/projects/ProjectCard.tsx`)
- **Props**:
  ```ts
  interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    client: string;
    metrics: string;
    image: string;
    description: string;
    featured?: boolean;
    onSelect?: (id: string) => void;
  }
  ```
- **Visuals**: High-resolution image banner with dark gradient overlay, category pill, client badge, and key impact metric.

---

## 5. Form & Utility Components

### 5.1 `ContactForm` (`src/components/contact/ContactForm.tsx`)
- **Libraries**: `react-hook-form` and `zod` for schema validation.
- **Fields**:
  - `name`: string (min 2 chars)
  - `email`: string (valid email address)
  - `phone`: string (optional international format)
  - `service`: enum (`'Drone Shows' | 'AI Photobooth' | 'Robotics' | 'Holograms' | 'Other'`)
  - `budget`: string
  - `message`: string (min 10 chars)
- **State**: `isSubmitting: boolean`, `isSuccess: boolean`, `errorMessage: string | null`.
- **UX**: Visual feedback on submission, inline error messages with red-400 styling, and a success confirmation banner with reset action.

### 5.2 `Footer` (`src/components/navigation/Footer.tsx`)
- 4-column responsive grid with brand mission, navigation links, service links, and newsletter subscription form.
- Bottom copyright, legal privacy links, and back-to-top scroll trigger.

