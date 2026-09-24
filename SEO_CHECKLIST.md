# MPM Services — SEO Checklist

Site: **https://mpmservices.com.au** (frontend-only build, Next.js 16 App Router)

Status legend: ✅ implemented · ⚠️ needs action.

---

## 1. Technical foundations

- ✅ `metadataBase` set in root layout (`app/layout.tsx`) → absolute URLs everywhere.
- ✅ `lang="en-AU"` on `<html>`.
- ✅ Single `<h1>` per page; logical heading hierarchy (h1 > h2 > h3).
- ✅ HTML is semantically structured (`<header>`, `<main>`, `<nav>`, `<section>`,
  `<figure>`, `<ol>/<ul>`, `<footer>`).
- ✅ `app/robots.ts` → `/robots.txt` (allow all, disallow `/api/`, `/` + sitemap link).
- ✅ `app/sitemap.ts` → `/sitemap.xml` (11 static routes + 3 service routes, with
  changeFrequency + priority).
- ✅ All routes statically prerendered (SSG) — no SSR/CSR needed for crawl.
- ✅ Custom 404 page.

## 2. On-page metadata (title / description / canonical)

Root template: `"%s | MPM Services"` (root title overrides template where needed).

| Route | Title | Description | Canonical | JSON-LD |
| --- | --- | --- | --- | --- |
| `/` | ✅ steam cleaning… | ✅ | ✅ `/` | ✅ LocalBusiness + Organization + WebSite + OfferCatalog |
| `/services` | Services | ✅ | ✅ | — |
| `/services/*` (×3) | ✅ (absolute, from data) | ✅ | ✅ | ✅ Breadcrumb + Service + FAQ |
| `/gallery` | Gallery | ✅ | ✅ | — |
| `/reviews` | Reviews | ✅ | ✅ | — |
| `/service-areas` | Service Areas | ✅ | ✅ | — |
| `/about` | About | ✅ | ✅ | — |
| `/faq` | FAQs | ✅ | ✅ | ✅ FAQPage |
| `/contact` | Contact | ✅ | ✅ | — |
| `/quote` | Get a Free Quote | ✅ | ✅ | — |
| `/privacy` | Privacy Policy | ✅ | ✅ | — |
| `/terms` | Terms of Service | ✅ | ✅ | — |

## 3. Structured data (JSON-LD)

- ✅ Home page `@graph` with `Organization`, `WebSite`, `LocalBusiness` (+ `OfferCatalog`)
  at `#organization`, `#website`, `#localbusiness` IDs (referenced by other pages).
- ✅ Service pages: `Service` + `BreadcrumbList` + `FAQPage`.
- ✅ FAQ page: `FAQPage` with general FAQs.
- ⚠️ **Pre-launch review**: confirm NAP details (business name, phone, Melbourne VIC 3000)
  all match the client's canonical records; update `lib/site.ts` — JSON-LD derives from it.

## 4. Social / Open Graph

- ✅ Root `openGraph` + `twitter` cards metadata.
- ⚠️ No OG `images` field yet — add a real 1200×630 OG image (branded) before launch.
- ⚠️ `summary_large_image` expects an image; supply one.

## 5. Content & targeting

- ✅ Primary service keywords appear naturally (steam cleaning Melbourne, strip & polish
  Melbourne, property maintenance Melbourne) in titles/descriptions/H1s.
- ✅ Focused, honest copy — no keyword stuffing.
- ✅ Internal links: every card/page links to services, quote, contact.
- ⚠️ No dedicated page targeting suburb-level queries until areas are client-verified
  (see CONTENT_AUDIT §5). Do not add thin suburb pages pre-verification.
- ⚠️ `reviews` page carries an "awaiting reviews" state — fine for now; add real reviews
  + `Review`/`AggregateRating` schema **only** once genuine reviews exist.

## 6. Accessibility & UX (SEO-adjacent)

- ✅ Skip-to-content link.
- ✅ Alt text on all `<Image>`s (descriptive, honest, no stock-photo claims beyond captions).
- ✅ Keyboard-operable lightbox (`Esc`, arrows) and accordion; `aria-` labels.
- ✅ Reduced-motion support; focus-visible styling.
- ✅ Semantic form labels + validation errors.

## 7. Performance

- ✅ `next/image` for all imagery (priority on LCP hero).
- ✅ Self-hosted fonts via `next/font` (no render-blocking Google Fonts links).
- ✅ No analytics/trackers currently loaded.
- ⚠️ Run Lighthouse / PageSpeed on the deployed URL; compress/convert stock JPGs if
  needed. (Imagery is download-dependent — validate sizes before "live".)

## 8. Launch checklist (not code)

1. Resolve Content Audit §5 (areas, legal, forms backend, analytics cookie choice).
2. Deploy, then verify: `GET /sitemap.xml` + `GET /robots.txt` from the live domain.
3. Submit sitemap in Google Search Console and Bing Webmaster Tools.
4. Confirm `mpmservices.com.au` serves HTTPS and the canonical host redirects cleanly.
5. Add branded OG image; re-run Lighthouse.
6. Confirm no `/images/*.jpg` 404s in Search Console after launch; update "illustrative
   image" captions when real photos ship.
7. Keep `lib/site.ts` as the single source of truth for NAP + socials.