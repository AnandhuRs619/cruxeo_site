# 10 - Testing and Deployment Runbook

## 1. Quality Assurance Protocol

Before any code is delivered or packaged into the final ZIP distribution, it must pass the following verification steps:

### 1.1 Automated Checks
1. **TypeScript Typecheck**:
   ```bash
   npx tsc --noEmit
   ```
   Ensures zero missing types, no unresolved imports, and strict type safety across all components and pages.
2. **ESLint Static Analysis**:
   ```bash
   npm run lint
   ```
   Verifies adherence to React Hooks rules, Next.js best practices, and code hygiene.
3. **Production Build**:
   ```bash
   npm run build
   ```
   Validates static generation, route compilation, server/client component boundaries, and asset bundling.

---

## 2. Interactive & Functional Testing Checklist

- [ ] **Navigation & Links**: All internal routes (`/`, `/about`, `/services`, `/projects`, `/blog`, `/contact`) resolve with HTTP 200 and maintain responsive navigation.
- [ ] **Mobile Drawer**: Hamburger menu opens smoothly, traps focus or allows easy exit, and closes upon link selection.
- [ ] **Background Video**: Particle video auto-plays silently on desktop and mobile, with instant poster fallback.
- [ ] **Ticker Pill Controls**: Pause/play toggle button effectively freezes and resumes ticker marquee.
- [ ] **Contact Form Validation**:
  - Submitting empty inputs flags required field messages.
  - Invalid email formatting is blocked.
  - Valid submission demonstrates loading indicator and success confirmation screen.
- [ ] **External Links**: Phone and WhatsApp links trigger standard URI schemes (`tel:` and `https://wa.me/`).
- [ ] **404 Route**: Visiting an unknown route correctly serves the custom styled 404 page with return actions.

---

## 3. Packaging & ZIP Distribution

To package the project for download, excluding bloated generated folders:

```bash
zip -r company-website-nextjs.zip . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x ".DS_Store"
```

Verify archive integrity:
```bash
unzip -t company-website-nextjs.zip
```

