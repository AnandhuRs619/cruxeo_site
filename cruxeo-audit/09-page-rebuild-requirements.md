# Page rebuild requirements — specification only

No implementation was started. The following separates existing requirements from improvements requiring approval. Exact content is in the page corpus; exact asset mappings are in the inventory.

## Shared requirements

Shared components: responsive navigation/header, logo, footer/legal links, division identity, CTA links, accessible accordion pattern, contact/assistant dock, page metadata, reusable media cards and reduced-motion behavior. Preserve source URLs or define approved redirects. Use the requested future Next.js App Router / React / TypeScript / Tailwind baseline after design approval; no version selection or dependency installation was performed.

Data entities to plan later: company contacts, divisions, capabilities, projects, metrics with evidence, team roles/people, FAQ items and legal content. CMS choice and editing roles are unresolved; do not invent an administration portal.

## Home

Source: https://cruxeo.abinschandran.in/

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Explain four divisions and convert enquiries |
| Required content | Keep original hero, division overview, about summary, work cards, process, benefits, systems, team roles, metrics, quotation models, FAQs and contact copy. |
| Required assets | Logo, hero poster/video, division media, work images/videos, partner marks, role imagery, Dubai skyline. |
| Functional requirements | Responsive header; motion fallback/pause; division accordion; section links; FAQ; contact dock. |
| Dependencies | Confirm metrics, partner marks and staff imagery; approve assistant scope. |
| Potential improvements | Simplify long-page hierarchy only after reference/design approval; correct nested interactions and optimize media. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## About

Source: https://cruxeo.abinschandran.in/about

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Explain company model and delivery team |
| Required content | Keep original company narrative, three value points, role cards, metrics and enquiry CTA. |
| Required assets | Studio image, logo, partner SVGs, team images. |
| Functional requirements | Navigation and enquiry links; shared contact dock. |
| Dependencies | Actual company history, legal name, staff names/portraits and relationship proof. |
| Potential improvements | Add only client-approved company background; distinguish role illustrations from real staff. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Services

Source: https://cruxeo.abinschandran.in/services

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Describe the scope of each division |
| Required content | All four division names/taglines, full descriptions, four core-capability bullets each, tags, delivery stages, systems and FAQ. |
| Required assets | Four division posters and both video encodings where needed. |
| Functional requirements | Preserve #nexplay, #lumen-lab, #ignispectra, #synapse; proper anchor offsets; enquiry messages per division. |
| Dependencies | Confirm exact scope, service geography and operational/permit statements. |
| Potential improvements | Improve heading hierarchy and media loading; optional future detail routes require approval/redirect plan. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Works

Source: https://cruxeo.abinschandran.in/works

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Present portfolio examples and drive comparable briefs |
| Required content | Four named examples, original descriptions, displayed metrics and deliverable lists; do not present metrics as verified without approval. |
| Required assets | Four project image/video sets. |
| Functional requirements | All/four category filters; preserve four project IDs; reliable direct-anchor entry; WhatsApp context. |
| Dependencies | Client/event/date evidence, image rights and accuracy of results. |
| Potential improvements | Unique SEO/social metadata; consider genuine detailed case studies only with approved evidence. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Contact

Source: https://cruxeo.abinschandran.in/contact

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Help visitors reach the Dubai team |
| Required content | Existing email/phone, Dubai location, short-brief guidance and FAQ. |
| Required assets | Contact skyline and logo. |
| Functional requirements | Working mailto/tel/WhatsApp links; assistant dock; no new form assumed. |
| Dependencies | Confirm recipient ownership, response expectations, assistant routing and whether form/upload is actually required. |
| Potential improvements | Add explicit enquiry alternative only after agreed requirements; make touch targets and keyboard focus clear. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Privacy

Source: https://cruxeo.abinschandran.in/privacy

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Publish approved privacy information |
| Required content | Preserve current five sections as audit baseline, including collection categories and assistant handling claims. |
| Required assets | Shared logo/icons only. |
| Functional requirements | Readable policy page; privacy links from assistant/footer; consistent canonical. |
| Dependencies | Owner-approved privacy text, processors, storage/retention and explicit submission definition. |
| Potential improvements | Align public policy with actual implementation and division ownership; legal review is an owner dependency. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Terms

Source: https://cruxeo.abinschandran.in/terms

| Requirement | Baseline / action |
| --- | --- |
| Purpose | Publish approved commercial conditions |
| Required content | Preserve current five sections covering engagement, quotations, aviation clearances, hardware hire and jurisdiction. |
| Required assets | Shared logo/icons only. |
| Functional requirements | Readable legal page, contact CTA, canonical and footer links. |
| Dependencies | Approved contracting entity, commercial terms and specialist validation of published operational parameters. |
| Potential improvements | Owner-approved corrections only; avoid treating website safety values as universal requirements. |

Shared components: header, footer, logo, contact dock, metadata and brand tokens.

## Acceptance gates for the later build

- Approved content mapped to every retained route, with no fabricated services, metrics or testimonials.
- Asset rights/provenance confirmed; original files preserved separately from optimized derivatives.
- All retained internal links, anchors, contact links and filter states pass functional checks.
- Keyboard navigation, visible focus, dialogs, accordion semantics and reduced-motion behavior validated.
- Mobile/tablet/desktop layouts tested with representative devices and long content.
- Canonical/robots/sitemap/social URLs align with the approved production domain.
- Assistant or enquiry backend, if retained, has approved data handling, errors, consent/retention and human escalation requirements.
- Lighthouse and real device testing conducted at implementation time; performance budgets agreed before acceptance.

Proceed only after the user supplies the new reference website and explicitly approves the design/development phase.
