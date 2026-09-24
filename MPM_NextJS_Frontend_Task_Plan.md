# MPM Services — Next.js Frontend-First Build Plan

## Project
**Company:** Melbourne Property Management and Services (MPM Services)
**Location:** Melbourne, VIC, Australia 3000
**Phone:** +61 451 460 307
**Email:** info@mpmservices.com.au

## Core services — ONLY these three
1. Steam Cleaning
2. Strip & Polish
3. Property Maintenance

Do not introduce additional service categories unless explicitly approved by the client.

---

# Architecture Direction

Build the website as a **Next.js full-stack application**, but the current development phase is **frontend only**.

Use the Next.js App Router and a clean component-based structure. The backend, database, API routes/server actions for real submissions, authentication, CMS, analytics ingestion, and external service integrations will be implemented later.

For now:
- Use strongly typed local/mock data.
- Build realistic UI states.
- Make forms visually and interactively complete, but do not connect them to a production backend.
- Keep the data/component structure backend-ready.
- Use local assets in `/public` wherever possible.
- Do not present stock or generated imagery as MPM customer work.

Next.js App Router uses file-system routing and supports shared layouts/components; Next.js also provides built-in image optimization through `next/image`. Use these conventions rather than inventing a separate routing system.

---

# MAIN TASK 1 — Project Foundation + Visual System

## 1.1 Inspect the project
- Inspect the repository before changing anything.
- Identify whether a Next.js project already exists.
- Preserve useful existing work.
- Do not rebuild unrelated infrastructure.
- Confirm package manager and existing scripts.

## 1.2 Establish frontend architecture
Create a clean structure similar to:

```text
app/
  layout.tsx
  page.tsx
  services/
    page.tsx
    steam-cleaning/page.tsx
    strip-and-polish/page.tsx
    property-maintenance/page.tsx
  gallery/page.tsx
  reviews/page.tsx
  service-areas/page.tsx
  contact/page.tsx
components/
  layout/
  navigation/
  sections/
  services/
  gallery/
  reviews/
  forms/
  ui/
lib/
  mock-data/
public/
  images/
```

Adjust the structure to the existing repository when appropriate.

## 1.3 Establish design system
Create reusable tokens for:
- typography
- spacing
- radii
- shadows
- containers
- buttons
- section spacing
- responsive breakpoints

Visual direction:
- premium Australian service company
- clean, trustworthy and modern
- warm neutral base
- charcoal/dark text
- restrained accent colour
- strong photography
- generous whitespace
- subtle motion
- no cheap cleaning-template appearance

## 1.4 Build core reusable UI
Create and test:
- Button
- LinkButton
- SectionHeading
- ServiceCard
- ImageCard
- ReviewCard
- CTA section
- Badge / eyebrow
- Container
- Responsive image wrapper

## 1.5 Build asset strategy
Create a clear image library in `/public/images`.
Use descriptive filenames such as:
- steam-cleaning-hero.webp
- steam-cleaning-detail.webp
- strip-polish-floor.webp
- property-maintenance.webp
- mpm-results-01.webp

Use `next/image` for UI imagery.

### Done when
- App runs cleanly.
- Base design system exists.
- Reusable components are established.
- No backend work has been introduced.
- No fake business claims are hardcoded.

---

# MAIN TASK 2 — Global Navigation + Homepage Frontend

## 2.1 Navbar
Create:
- MPM Services branding
- Home
- Services
- Gallery / Results
- Reviews
- Service Areas
- About
- Contact
- prominent Get a Quote CTA
- click-to-call phone action

Mobile:
- polished mobile menu
- sticky/fixed quote/call actions where appropriate

## 2.2 Hero
Hero must immediately communicate:
- Melbourne
- professional property services
- the three core services
- clear CTA

Suggested direction:
**Eyebrow:** MELBOURNE PROPERTY SERVICES

**Headline:**
Professional Property Services Across Melbourne

**Supporting copy:**
A polished, trustworthy description covering Steam Cleaning, Strip & Polish and Property Maintenance without inventing unsupported claims.

CTA:
- Get a Free Quote
- Call +61 451 460 307

Hero must use a strong, high-quality image.

## 2.3 Three-services section
Create exactly three featured service cards:

### Steam Cleaning
Use an appropriate cleaning image.

### Strip & Polish
Use a polished commercial/residential floor image.

### Property Maintenance
Use a property maintenance image.

Each card should have:
- image
- title
- short description
- learn-more link

## 2.4 Results/proof section
Build a visual section showing real-looking work imagery.
Prefer before/after treatment where legitimate assets exist.
Do not invent customer results.

## 2.5 Why MPM section
Use factual, defensible messaging such as:
- professional service
- local Melbourne service
- clear communication
- residential and/or commercial capability only if confirmed by source material

Avoid unsupported statistics.

## 2.6 Process section
Create a simple visual process:
1. Tell us what you need
2. Discuss the job
3. Service is completed
4. Enjoy the result

Keep copy concise.

## 2.7 Homepage CTA + footer
Create a strong closing CTA with:
- Get a Quote
- phone
- email
- social links

Footer should include:
- company name
- core services
- navigation
- contact information
- social links
- copyright

### Done when
- Homepage feels like a finished business website.
- Hero, services, imagery and CTA are visually strong.
- Desktop/tablet/mobile layouts work.

---

# MAIN TASK 3 — Core Service Pages

Build individual pages for exactly the three services.

## 3.1 Reusable service-page template
Create a template supporting:
- hero image
- service title
- introductory copy
- service overview
- benefits/features
- process
- relevant images
- FAQ UI
- CTA
- related navigation

## 3.2 Steam Cleaning page
Include appropriate imagery and content focused only on Steam Cleaning.
Do not add unrelated service categories.

## 3.3 Strip & Polish page
Include:
- strong floor imagery
- explanation of the service
- where it may be relevant
- visual process
- CTA

Do not make technical claims that have not been verified.

## 3.4 Property Maintenance page
Include:
- property/service imagery
- clear overview
- practical value proposition
- process
- CTA

Do not invent a long list of maintenance subservices. Only use approved content.

## 3.5 Services overview page
Create a polished `/services` page containing only the three services.

## 3.6 Navigation
Ensure service cards, navigation and CTAs consistently link to the correct pages.

### Done when
- All three pages are distinct and visually complete.
- Shared components are actually reused.
- Each service has strong imagery.

---

# MAIN TASK 4 — Gallery, Reviews, Service Areas + Contact Frontend

## 4.1 Gallery / Results
Create a polished visual gallery.
Possible filters:
- All
- Steam Cleaning
- Strip & Polish
- Property Maintenance

Only show approved/available imagery.

## 4.2 Before/after component
Create a reusable before/after slider component.
Use it only where actual before/after assets exist.

## 4.3 Reviews page
Build review cards and a review section.
Use provided/verified review content only.
Do not fabricate names, ratings or testimonials.

## 4.4 Service Areas page
Create a local Melbourne-focused page.
Do not generate huge numbers of thin suburb pages in the frontend phase.
Use verified locations only.

## 4.5 Contact page
Include:
- phone
- email
- location
- contact form UI
- quote CTA
- social links

## 4.6 Quote form frontend
Build a polished multi-step form UI.
Potential fields:
- Name
- Phone
- Email
- Service
- Property type
- Preferred date
- Message
- Optional image upload UI

For now:
- validate on the client
- show loading/success/error states
- do not send to a real server
- keep submission handler structured so backend can be added later

### Done when
- All customer-facing frontend routes are complete.
- Quote flow feels real even though submission is mocked.
- Gallery and reviews do not contain fabricated content.

---

# MAIN TASK 5 — Interaction, Responsive Design + Visual Polish

## 5.1 Responsive behavior
Test:
- mobile
- tablet
- laptop
- large desktop

Pay special attention to:
- navbar
- hero height
- image crops
- cards
- forms
- buttons
- footer

## 5.2 Motion
Add subtle professional motion:
- fade/slide entrance
- image hover
- button transitions
- mobile menu transition
- before/after slider interaction

Do not over-animate.

## 5.3 Accessibility
Implement:
- semantic HTML
- keyboard navigation
- visible focus states
- correct labels
- meaningful alt text
- sufficient contrast
- reduced-motion consideration

## 5.4 Loading states
Create appropriate loading/skeleton states where needed.

## 5.5 Error/empty states
Create polished UI for:
- empty gallery
- unavailable image
- form error
- form success

### Done when
The site feels polished, intentional and production-quality rather than like a first-pass template.

---

# MAIN TASK 6 — Frontend SEO + QA + Backend-Ready Handoff

## 6.1 Metadata
Implement unique metadata for:
- Home
- Services
- Steam Cleaning
- Strip & Polish
- Property Maintenance
- Gallery
- Reviews
- Service Areas
- Contact

Use Next.js metadata conventions.

## 6.2 Technical frontend SEO
Prepare:
- semantic headings
- clean URLs
- internal linking
- sitemap structure
- robots structure
- Open Graph/social metadata
- canonical strategy where appropriate

## 6.3 Image SEO/performance
- use `next/image`
- avoid giant uncompressed assets
- use modern formats where possible
- descriptive alt text
- avoid layout shift

## 6.4 QA
Verify:
- every navigation link
- every CTA
- phone link
- email link
- form validation
- mobile menu
- image loading
- service routes
- 404 behavior
- console errors

## 6.5 Production build
Run the available lint/typecheck/build commands.
Fix errors rather than ignoring them.

## 6.6 Backend-ready architecture review
Do not build the backend yet.
Instead document:
- where future API routes/server actions will live
- expected quote data shape
- expected image-upload flow
- future database entities
- future email/CRM integration points

### Final rule
Stop after frontend completion. Do not add:
- PostgreSQL
- Prisma/Drizzle database setup
- authentication
- API integrations
- n8n integration
- CRM integration
- production email sending
- admin dashboard

Those belong to the next project phase.
