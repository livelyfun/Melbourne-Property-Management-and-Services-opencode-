# MPM Services — Content Audit

This document audits **every piece of content** on the MPM Services frontend against
the source material (client-supplied business facts, task-plan rules and MPM's social
presence). It flags everything that is **placeholder, inferred or awaiting client
confirmation** so nothing goes live that we can't stand behind.

Scope: `web/` (Next.js 16 App Router). Audit date: signal-based, documented as of build.

---

## 1. Verified business facts (safe to publish — from source material)

| Fact | Value used in site | Where used |
| --- | --- | --- |
| Legal name | Melbourne Property Management and Services | `lib/site.ts`, footer, JSON-LD |
| Brand / trading name | MPM Services | Everywhere |
| Phone (display) | +61 451 460 307 / 0451 460 307 | Navbar, footer, CTA, hero, contact, quote |
| Phone (tel link) | +61451460307 | `tel:` links |
| Email | info@mpmservices.com.au | Footer, contact, reviews, privacy, terms |
| Website | https://mpmservices.com.au | Metadata base, canonical, JSON-LD |
| Location (no street address) | Melbourne, VIC 3000 | Contact, JSON-LD address |
| Area served | Melbourne, VIC, Australia | Coverage sections, JSON-LD |
| Facebook | facebook.com/Melbournepropertymanagementandservices | Social links |
| Instagram | instagram.com/mpm_services | Social links |
| Core services (only 3) | Steam Cleaning, Strip & Polish, Property Maintenance | Nav, home, services, about, JSON-LD |

## 2. Rules applied (from task plan)

- ✅ **Only 3 core services.** No additional services invented.
- ✅ **No fabricated reviews.** Reviews page ships a truthful "no verified reviews yet"
  state, with links to socials and an invitation to submit real feedback.
- ✅ **No invented business facts** such as founding year, headcount, certifications,
  awards, guarantees, ABR/ABN, hours of operation, `fully insured` claims, or founding story.
- ✅ **No pricing** quoted anywhere (quote form collects requirements only).
- ✅ **Stock imagery is labelled** as illustrative/stock — never presented as completed
  MPM work (see section 4).
- ✅ **Forms are frontend-ready**: validation works; submission is mocked (`setTimeout`)
  with success/error states and surfaced clearly to the user; backend hook-up is
  documented in the success message and in `CONTACT_HANDOFF` notes below.

## 3. Content inventory & status

### Global / layout
- Navbar: brand logo (svg), 9 items + Services dropdown, phone link, "Get a Free Quote"
  button, mobile menu. ✅
- Footer: brand + 3 services, explore links, contact, socials, privacy/terms. ✅
- Mobile bottom bar (Call / Quote) — visible < 768 px only. ✅

### Pages
| Route | Content | Status |
| --- | --- | --- |
| `/` | Hero, trust strip, services, results, why, process, reviews teaser, coverage, FAQ teaser, CTA | ✅ copy from service data |
| `/services` | Index + 3 cards | ✅ |
| `/services/steam-cleaning` | Full detail template | ✅ |
| `/services/strip-and-polish` | Full detail template | ✅ |
| `/services/property-maintenance` | Full detail template | ✅ |
| `/gallery` | Filters + lightbox, 9 stock items | ✅ |
| `/reviews` | Empty/awaiting-state only | ✅ |
| `/service-areas` | Melbourne verified; Brunswick / Hoppers Crossing shown as "under review" | ⚠️ see 5 |
| `/about` | Story (no invented facts), services, values | ✅ |
| `/faq` | 8 general FAQs + service links | ✅ |
| `/contact` | Contact info + mock message form | ✅ |
| `/quote` | Multi-step quote form | ✅ |
| `/privacy`, `/terms` | Plain-language legal | ⚠️ boilerplate — legal review needed |
| `/not-found` | 404 with helpful CTAs | ✅ |

## 4. Imagery audit

All 16 photos are **stock images** downloaded from Unsplash (see session log for IDs) and
copied to `web/public/images/`. Each gallery caption ends with "(illustrative image)" and
the gallery/service pages state the imagery is stock until real MPM photos exist.

| File | Used on | Caption/alt says |
| --- | --- | --- |
| `steam-cleaning-hero.jpg` | Home hero, JSON-LD image | Hero bg (no MPM claim) |
| `steam-cleaning-detail.jpg` | Service card | "Steam cleaning tool at work" (context) |
| `strip-polish-floor.jpg` | Strip & polish hero/detail | "Polished floor" (context) |
| `strip-polish-detail.jpg` | Service card | "Worker polishing floor" (context) |
| `property-maintenance-hero.jpg` | Maintenance hero | "Maintenance work" (context) |
| `property-maintenance-detail.jpg` | Service card | "Maintenance worker" (context) |
| `gallery-sc-01..04.jpg` | Gallery | "… (illustrative image)" |
| `gallery-sp-01..03.jpg` | Gallery | "… (illustrative image)" |
| `gallery-pm-01..02.jpg` | Gallery | "… (illustrative image)" |
| `about-work.jpg` | Home why / about | Context only |
| `website_logo.svg` | Navbar / footer | Brand logo (provided asset) |

⚠️ **Pre-launch:** replace stock with real, approved MPM photos; every caption/alt that
mentions "(illustrative image)" must then be updated.

## 5. Open items — needs client confirmation before launch

1. **Service-area expansion**: Brunswick and Hoppers Crossing are referenced in public
   social posts but not client-verified. Currently rendered on `/service-areas` as "under
   review" (never as confirmed coverage). Confirm → move to published list.
2. **Service copy**: overview paragraphs, benefits and FAQs were written from the task
   plan's brief. All should be read by the client and approved/adjusted.
3. **Reviews**: none exist yet. Reviews page intentionally reads as a waiting state.
4. **Legal pages**: `/privacy` and `/terms` are plain-language drafts and need legal sign-off.
5. **Forms**: `/quote` and `/contact` forms capture + validate locally, then mock-submit.
   Wire to real endpoint (API route, email service, or CRM) before "live".
6. **Analytics / cookies**: `/privacy` mentions basic analytics; no cookie banner or
   analytics script is installed. Decide + implement before production.
7. **Logo SVG**: confirm the provided `website_logo.svg` is the final brand asset
   (visual review is a manual step — image rendering can't be validated programmatically here).
8. **Phone number formatting** ("0451 460 307" vs "+61 451 460 307") — both appear; confirm
   one canonical display form.

## 6. Placeholder / honest-state markers (intentional)

- Reviews empty state + dashed-border placeholder module.
- Gallery "illustrative image" labels on every stock item.
- Quote/contact success messages explain the backend is not yet connected and give the
  phone number for immediate contact.
- Service-areas "under review" list.

## 7. What is deliberately absent (do not add without source)

Pricing, packages, insurance claims, licences/certifications, ABN/ACN, hours of operation,
founding date, years of experience, team size, named staff, service guarantees, awards,
fake testimonials, and any extra services beyond the three core ones.

---

**Handoff note (developer→client):** resolve the eight items in section 5, review the
copy in `web/lib/mock-data/`, and keep gallery captions honest. After backend connection,
remove the "frontend-first" notes from quote/contact success copy.