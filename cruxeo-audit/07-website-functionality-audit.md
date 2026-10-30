# Website functionality and UX audit

Scope: desktop Chrome, 1363 × 936, 29 October 2026; source inspection on all seven pages. No real forms, assistant requests, WhatsApp messages, calls, emails, purchases or accounts were submitted.

| Feature / source | Observed behavior | Result or limitation |
| --- | --- | --- |
| Main navigation, all pages | Home/About/Divisions/Work/Contact; browser navigation observed | Pass for sampled navigation; no desktop dropdown found |
| Fixed header, /services | Computed position fixed | Anchor offset needs attention: IGNISPECTRA target top measured -64.3px after jump; top can sit above viewport/under header |
| Mobile navigation | Responsive source markup/CSS present | Not exercised at mobile/tablet width; touch behavior and focus trapping remain open |
| Homepage division accordion | LUMEN LAB activation expands it, collapses NEXPLAY, changes media/copy | Working sampled state; section roles contain nested links, requiring keyboard review |
| FAQs, /services | Enter on second question expands it and collapses previously open answer | Keyboard activation verified. Pointer sampling during scrolling/animation opened a neighboring item; reproduce on a stable viewport before classifying as a site defect |
| Portfolio, /works | All + four division filters; NEXPLAY shows one radar-arena card; All restores four | Verified. Deep links identify card sections, not separate detailed case studies |
| Back to top, / | Control appears after scrolling; click returns scrollY to 0 | Verified |
| Quick contact dock, / | Opens options for Ask CRUXEO, WhatsApp, call | Verified opening; outbound links inspected only |
| AI assistant, / | Opens dialog, greeting, five suggested prompts, labelled textbox, disabled empty Send; close works | UI inspected; model responses, rate limits, persistence, qualification and backend not exercised |
| Assistant privacy copy | Panel says chats may be stored for follow-up; links Privacy | Compare with policy statement that chats are transient and saved only upon explicit submission; clarify exact trigger/retention |
| Contact, /contact | Email, telephone, prefilled WhatsApp links, brief tips, FAQs | No standard enquiry form observed; no upload or submission validation to test |
| Hero animation, / | Video background, changing division-oriented phrase, pause-style control | Motion observed; reduced-motion CSS present, actual user-preference and pause behavior not exhaustively tested |
| Partner strip | Ten numbered partner images | Names/associations unclear from alt text; verify actual entities |
| Search/login/shop/pagination/cookie banner | Not found in inspected public surface | Not evidence these do not exist in unlinked or private areas |


## Assistant panel content baseline

Observed opening message: “Hi, I’m the CRUXEO assistant. I can answer questions about our four divisions and help you send a brief to the team. What are you planning?” Suggested questions: Event activation; Display or film; Drone or fireworks show; AI or software; Talk to the team. Controls: Restart conversation, Close chat assistant, Send message, Talk to team, Continue on WhatsApp, email, privacy policy. No message was sent and no personal data was entered.

## Conversion and UX improvements to consider after approval

1. Confirm whether WhatsApp is intentionally the primary enquiry channel and define a fallback for users without it.
2. Correct fixed-header anchor offsets and test all eight division/project hash destinations across devices.
3. Use focused accordion trigger buttons separate from nested CTA links; ensure focus is visible on dark surfaces.
4. Improve portfolio credibility with approved project context, rights-cleared images and measurable evidence.
5. Confirm assistant ownership, retention, escalation and failure states before making it a rebuild dependency.
6. Validate no motion/cursor effects impair touch users, keyboard users or reduced-motion preferences.

External integrations: wa.me, mailto, tel, Instagram and YouTube are link destinations. CSP permits Anthropic, Google Analytics/Tag Manager and Cloudflare challenges; permission in a CSP does not prove any specific runtime service is active or configured. API/backend source was not accessed.
