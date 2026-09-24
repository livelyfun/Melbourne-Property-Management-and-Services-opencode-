# Melbourne Property Management and Services — Antigravity Build Prompt

You are a senior product designer, UX strategist, frontend engineer, SEO engineer, conversion-rate specialist, accessibility engineer, and technical lead.

You are working on a real client website for:

**Business:** Melbourne Property Management and Services
**Public/short brand:** MPM Services
**Location:** Melbourne, VIC, Australia 3000
**Phone:** +61 451 460 307
**Email:** info@mpmservices.com.au
**Current website:** https://mpmservices.com.au
**Facebook:** https://www.facebook.com/Melbournepropertymanagementandservices/
**Instagram:** https://www.instagram.com/mpm_services
**Business type:** Property Management and Services
**Core services:** Steam Cleaning, Strip & Polish, Property Maintenance

## Primary business goal

Rebuild the website into a premium, modern, high-converting Melbourne service-business website that:

1. Generates more qualified quote requests and phone enquiries.
2. Makes the business look established, trustworthy, professional, and worth contacting.
3. Makes services instantly understandable on mobile and desktop.
4. Turns real before/after work and real customer feedback into visible proof.
5. Establishes a stronger local SEO foundation for Melbourne cleaning and related property-service searches.
6. Creates a scalable content structure for future service-area and service-specific SEO pages.
7. Is fast, accessible, responsive, maintainable, and production-ready.

## Important truth / content rules

Do not invent business facts, guarantees, certifications, staff, prices, service areas, testimonials, review counts, operating hours, awards, ABNs, physical addresses, or claims about cleaning performance.

Use the existing site/repository content and the verified business information available below. Where a fact is missing, use a clear placeholder in code/content rather than fabricating it.

The current business positioning to preserve in the redesign is centered on three main services:

1. **Steam Cleaning**
2. **Strip & Polish**
3. **Property Maintenance**

Do not expand the primary service architecture into a long list of unrelated cleaning services. Historical social content may mention individual cleaning jobs or sub-services, but the new site should organise the customer-facing experience around these three core services unless the client explicitly asks to add more later. Any specific sub-service should be presented as part of one of the three core services only when the existing source material supports that relationship.

The public web footprint is inconsistent about the business naming/address. Some indexed material uses “MPM Services” and also references “SMR Cleaning & Maintenance”; postcode/address information also varies. Do not silently merge brands or publish conflicting address data. Keep “Melbourne Property Management and Services” as the full business name and “MPM Services” as the short brand unless the existing repo clearly defines a different official brand. Flag address/postcode inconsistencies in a TODO/content verification file and use only the client-provided public location until confirmed.

Do not fabricate Google reviews. If review data is not directly connected to an authoritative source in the repo, build the UI so real review data can be inserted later.

## Step 0 — Inspect before changing anything

Before writing code:

- Inspect the entire repository structure.
- Identify the framework, build tool, routing system, styling approach, component system, data layer, existing assets, and deployment configuration.
- Start the existing project and inspect the current site in the browser.
- Determine which current pages/components can be reused.
- Preserve useful existing infrastructure. Do not replace the stack just because you prefer another one.
- Do not rebuild unrelated infrastructure.
- Read package.json, environment examples, README, deployment files, and all current site entry points.
- Identify every existing image and determine whether it is a real client asset, a stock asset, or a placeholder.
- Keep secrets out of source control.

If the project is incomplete or broken, repair it in-place before implementing the redesign.

## Current website baseline

The existing site is known to expose these main features/pages:

- Home
- Services
- Gallery
- Reviews
- Contact Us

Do not discard useful existing content simply because the new design is more modern. Migrate valuable copy and real images where appropriate.

## New information architecture

Use this as the target architecture, but keep the implementation proportional to the real content available.

### Primary navigation

- Home
- Services ▼
  - Steam Cleaning
  - Strip & Polish
  - Property Maintenance
- Gallery / Results
- Reviews
- Service Areas
- About
- FAQ
- Contact

Primary CTA in the navbar:

**Get a Free Quote**

Secondary high-intent action:

**Call 0451 460 307**

Desktop: keep navigation clean and restrained.
Mobile: use a polished slide-over menu with clear hierarchy.

On mobile, add a fixed bottom action bar with:

- Call Now
- Get a Quote

Do not make the mobile UI feel like an app dashboard. It should still feel like a premium service website.

## Homepage strategy

The homepage must answer these questions in the first screen or two:

- What does MPM Services do?
- What are the **three core services**?
- Where do they operate?
- Why should I trust them?
- What should I do next?

The homepage should feel image-led. Every core service should be represented by a strong service image, and the page should include a dedicated visual results/gallery section.

### Hero section

Make the hero substantially better than a generic cleaning-company hero.

Recommended content direction:

Eyebrow:
**MELBOURNE PROPERTY SERVICES**

H1 direction:
**Steam Cleaning, Strip & Polish, and Property Maintenance in Melbourne**

Supporting copy direction:
**MPM Services helps keep Melbourne properties clean, presentable and well maintained with practical property services tailored to homes, rentals and commercial spaces.**

Primary CTA:
**Get a Free Quote**

Secondary CTA:
**Call 0451 460 307**

Include a compact service proof row below the CTA:

**Steam Cleaning · Strip & Polish · Property Maintenance**

Do not use generic stock-photo text overlays. The hero visual must reinforce the three core services and feel like a real, established Melbourne property-services business.

### Hero visual

Images are mandatory. Prefer authentic MPM work photography from the current site/social assets when rights/ownership are clear.

Create a visually strong hero using a high-quality real property-services image, preferably showing one of the following:

- professional steam-cleaning in action
- a visibly improved floor or surface
- polished hard flooring
- a clean, well-maintained property interior
- an MPM team member performing work, when an authentic image exists

Use layered image composition or a restrained photo collage if it improves storytelling, but keep the design premium and uncluttered.

Do not present generated or stock imagery as client work. If approved MPM imagery is unavailable for a specific visual, use licensed/approved stock imagery only as generic service-context imagery and do not imply it is an MPM job.

## Homepage sections

Build the homepage in this flow:

1. Hero / primary conversion
2. Trust/proof strip
3. Three core services
4. Featured work / before-and-after transformations
5. Why MPM / value proposition
6. How MPM works
7. Reviews/testimonials
8. Service-area coverage
9. FAQ
10. Final CTA
11. Full footer

### Trust/proof strip

Use real facts only.

Good proof themes should focus on documented business qualities and real evidence, such as:

- professional and reliable service
- property-service capability
- real completed work
- real before/after results
- genuine customer reviews
- clear communication and quote process

Only mention residential, commercial, end-of-lease, receipts/EFT, sanitation/deodorisation, or similar specifics when the current client materials verify them.

Do not create fake badges such as “licensed”, “certified”, “insured”, “award-winning”, or “same-day guaranteed” without evidence.

## Services architecture

The website must be organised around **exactly three primary service pillars**:

### 1. Steam Cleaning

Cover relevant supported cleaning work under this pillar only when evidenced by the current website or approved business assets. Examples may include carpets, upholstery, sofas, chairs, rugs, mattresses, vehicles, or other surfaces, but do not turn these into separate primary services unless the client requests it.

### 2. Strip & Polish

Present this as a dedicated service pillar focused on professional floor/surface preparation, stripping and polishing work supported by the client's actual service details.

### 3. Property Maintenance

Present this as the broader property-care service pillar. Only describe maintenance tasks that are actually supported by existing business materials or client-provided information.

Use three large, premium service cards/blocks with:

- service name
- concise explanation
- strong real/approved image
- key benefit or outcome
- View Service CTA

**Do not add additional primary services.**

Sub-services or examples may appear inside one of these three pages when supported, but the top-level navigation, homepage service section, service landing pages, and primary SEO architecture must remain centered on the three core services.

## Service detail pages

Build a reusable service-page template and create only these three primary service pages:

- `/services/steam-cleaning`
- `/services/strip-and-polish`
- `/services/property-maintenance`

Each service page should have:

- unique title
- unique meta description
- clear H1
- **large service-specific hero image**
- problem → solution explanation
- what is included, based only on verified information
- who it is for
- preparation tips where relevant
- process / workflow
- supporting project imagery or before/after evidence where available
- real FAQs
- quote CTA
- call CTA
- links to the other two core services
- internal links to service areas

Image requirements:
- each service page must contain multiple meaningful images when approved assets exist
- use authentic MPM work first
- optimise every image for responsive loading
- add accurate alt text
- never create fake project photography or fake before/after evidence

Do not pad pages with repetitive SEO copy.

## High-intent lead / quote experience

The largest productivity improvement should be the quote flow.

Build a polished multi-step quote form if the existing architecture supports it.

Suggested flow:

### Step 1 — What do you need cleaned?

Selectable service cards.

### Step 2 — Tell us about the job

Collect only useful information, such as:

- property type
- suburb/postcode
- number of rooms/seats/items where relevant
- preferred date/time
- additional notes

### Step 3 — Contact details

- name
- phone
- email

Optional:

- photo upload for stain/job assessment

### Step 4 — Confirmation

Show:

**Thanks — your request is on its way.**

Then show call-now option:

**Need a faster answer? Call 0451 460 307.**

Form requirements:

- strong validation
- accessible labels
- keyboard support
- inline error messages
- success state
- spam protection / honeypot where appropriate
- no secrets in client-side code
- privacy-conscious data collection

If a backend/email service already exists, integrate with it.
If no backend exists, create a clean, replaceable API integration layer and document the required environment variables rather than hardcoding credentials.

Track conversion events where analytics is available:

- quote_start
- quote_step_complete
- quote_submit
- click_call
- click_email
- service_view
- social_click

## Gallery / Results

Turn the existing gallery into a major conversion asset and make imagery a core part of the website experience.

Build:

- filterable categories for the **three core services**
- before/after slider or paired comparison cards where genuine pairs exist
- full-screen image viewer / lightbox
- captions with service type and suburb when factual
- optional short project story

Recommended gallery filters:

**All · Steam Cleaning · Strip & Polish · Property Maintenance**

Prioritise actual MPM work from the website and approved social assets.

Do not create fake before/after pairs.

Use image alt text that describes the actual image naturally.

Example:

“Steam cleaning result on carpet in Brunswick”

not:

“Best cheap carpet cleaning Melbourne carpet cleaning service”

If the current gallery contains too few real images, build a visually complete gallery layout with clearly marked image placeholders that can be replaced by approved MPM photography. Do not fill the gaps with misleading fake work.

## Reviews section

Make reviews visually strong, but truthful.

Layout:

- rating summary area only when verified
- 3–6 featured real testimonials
- link to the external review source
- optional scrolling review carousel
- no invented names or quotes

Do not use fake review cards simply to make the design look full.

## Service area strategy

Create a service-area page and a reusable location module.

Primary location:

Melbourne, VIC, Australia

Build the UI so verified suburbs can be added later.

Use existing social evidence carefully: public posts mention jobs including Brunswick and Hoppers Crossing and state that MPM services most of Melbourne. This should be presented as service coverage only when consistent with current client information.

Do not generate hundreds of near-identical suburb pages. Only create a suburb page when there is enough unique, useful local content and a real reason for the page to exist.

## About section

Position the company around:

- reliable service
- attention to detail
- practical property care
- customer communication
- real cleaning outcomes

Use a short, human brand story.

Some public indexed material describes the business as family owned and also contains a legacy reference to “SMR Cleaning & Maintenance”. Because that public naming is inconsistent with the client-provided company name, do not publish either claim until verified.

## FAQ section

Create useful questions based on actual customer intent, such as:

- How long does carpet steam cleaning take?
- How long does a carpet take to dry?
- Can you remove coffee and kids’ stains?
- Do you clean sofas and dining chairs?
- Do you provide end-of-lease carpet cleaning?
- Do you service commercial properties?
- Do you provide receipts?
- How can I request a quote?

Only answer questions using verified business processes. Do not promise exact outcomes or drying times without source material.

## Contact page

Make contact frictionless.

Show:

- phone
- email
- Melbourne VIC location text supplied by the client
- quote form
- social links
- optional map, but do not invent a street address

Phone should use a tel: link.
Email should use a mailto: link.

## Visual design direction

The redesign should feel like a premium Australian local-service brand, not a cheap template.

Design qualities:

- clean
- confident
- modern
- warm
- trustworthy
- photographic
- spacious
- high contrast
- subtle motion

Avoid:

- excessive gradients
- giant blobs
- cheap-looking neon colours
- overuse of glassmorphism
- excessive rounded cards
- cartoon cleaning icons everywhere
- stock-photo overload
- text-heavy hero sections
- autoplay video that hurts performance

### Typography

Use a high-quality modern sans-serif stack already present in the project if possible. Prefer a professional pairing such as Inter + Manrope or a similarly restrained system.

Large headings should be strong but not oversized to the point of becoming a visual gimmick.

### Colour

If an existing MPM brand palette exists in the repo/assets/social material, derive the redesign from it.

Otherwise use a premium neutral system:

- warm white / soft neutral background
- deep charcoal text
- restrained eucalyptus/teal or blue-green accent
- subtle grey borders
- one primary accent colour only

Do not introduce a random multicolour palette.

## Image and visual content requirements

Images are a **required part of the redesign**, not optional decoration. The website must feel photographic and evidence-led.

### Image priorities

Use this order of preference:

1. Real MPM-owned work photography from the current website, Facebook, Instagram, or client-supplied assets.
2. Approved/licensed stock photography for generic service-context imagery when real MPM imagery is unavailable.
3. Clearly labelled placeholders only during development when no suitable approved image exists.

Never present stock, generated, or placeholder images as completed MPM work. Never manufacture before/after results.

### Required image coverage

Include meaningful imagery in:

- Hero section
- Each of the three core service cards
- Each of the three service detail pages
- Gallery / Results page
- Before/after section where genuine pairs exist
- About/brand section where authentic business imagery exists
- Selected CTA sections when it improves the visual composition

### Image UX

- Use responsive `<picture>`/`srcset` patterns where appropriate.
- Prefer AVIF/WebP when supported by the existing stack.
- Reserve image dimensions to prevent layout shift.
- Lazy-load below-the-fold images.
- Use descriptive alt text based on what is actually visible.
- Keep focal points composed well on mobile.
- Never use huge background images that make text unreadable.
- Do not hotlink random third-party images.
- Keep image treatment consistent across the site.

The visual story should reinforce these three service pillars throughout: **Steam Cleaning · Strip & Polish · Property Maintenance**.

## Motion and interactions

Use motion to communicate hierarchy and quality, not to show off.

Good interactions:

- subtle hero entrance
- image reveal on scroll
- before/after slider
- service-card hover elevation
- sticky navbar transition
- mobile menu transition
- quote-form step animation

Respect prefers-reduced-motion.

Never make essential information depend on animation.

## SEO requirements

Implement technical and on-page SEO from the start.

### Titles

Every indexable page must have a unique, descriptive title.

Examples:

Home:
**Steam Cleaning, Strip & Polish & Property Maintenance Melbourne | MPM Services**

Steam Cleaning page:
**Steam Cleaning Melbourne | MPM Services**

Strip & Polish page:
**Strip & Polish Melbourne | MPM Services**

Property Maintenance page:
**Property Maintenance Melbourne | MPM Services**

Use concise, human-readable titles. Do not stuff keywords.

### Meta descriptions

Write unique, useful descriptions for every page. Focus on service + location + value + action.

### Headings

Use one clear H1 per page.
Use logical H2/H3 structure.
Do not use headings purely for styling.

### URLs

Use clean URLs such as:

/services
/services/steam-cleaning
/services/strip-and-polish
/services/property-maintenance
/gallery
/reviews
/service-areas
/about
/faq
/contact

Keep redirects for any existing indexed URLs that change.

### Canonical

Add canonical URLs to indexable pages.

### Sitemap

Generate sitemap.xml automatically from the real route list.

### Robots

Create a correct robots.txt.
Do not block important assets or pages needed for rendering and indexing.

### Structured data

Implement appropriate JSON-LD where supported and factually accurate, including:

- LocalBusiness / appropriate local business subtype
- Organization data where relevant
- WebSite
- BreadcrumbList on nested pages
- Service on service pages when appropriate

Include only real business facts.

Potential sameAs links:

- https://www.facebook.com/Melbournepropertymanagementandservices/
- https://www.instagram.com/mpm_services

Do not mark up third-party reviews as an aggregate rating unless the implementation is compliant with Google's current review/structured-data rules and the site actually qualifies.

### Local SEO

Optimise around the three actual service pillars and genuine Melbourne search intent, for example:

- steam cleaning Melbourne
- professional steam cleaning Melbourne
- strip and polish Melbourne
- floor strip and polish Melbourne
- property maintenance Melbourne
- property maintenance services Melbourne

Specific service terms such as carpet, upholstery, sofa, or similar cleaning phrases can be used **within the Steam Cleaning pillar** only where the current business content supports them.

Use these phrases naturally. Do not keyword-stuff or create separate pages for every minor cleaning variation.

Create strong internal links between service pages, the main service-area page, and relevant content.

## Search-friendly content strategy

Provide a content/data structure that can later support useful articles around the three core service pillars, for example:

- How to prepare for professional steam cleaning
- How professional steam cleaning can help refresh high-traffic areas
- What to expect during a professional strip and polish service
- How often should commercial floors be professionally maintained?
- Practical property maintenance tips for Melbourne property owners and managers
- When to schedule cleaning and maintenance between property occupancies

Do not auto-generate dozens of thin SEO pages.

## Social integration

Use the existing Facebook and Instagram presence as a trust signal, not as the main content source.

Add:

- Instagram link
- Facebook link
- “See more transformations” CTA

Do not load a heavy social feed API just for decoration.
Prefer a curated gallery with external links for performance and stability.

## Accessibility

Meet WCAG 2.2 AA-oriented implementation standards where practical.

Required:

- semantic HTML
- keyboard navigability
- visible focus states
- accessible form labels
- adequate colour contrast
- descriptive alt text
- button/link distinction
- skip-to-content link
- logical heading hierarchy
- no essential text embedded only in images
- reduced motion support
- accessible mobile navigation

## Performance

Treat performance as a feature.

Goals:

- fast first render on mobile
- optimised images
- WebP/AVIF where appropriate
- responsive image sizes
- lazy loading below the fold
- no unnecessary JavaScript
- code splitting where useful
- avoid layout shift
- reserve image dimensions
- preload only truly critical assets
- avoid giant hero videos

Aim for strong Lighthouse scores and good real-world Core Web Vitals rather than optimising for a synthetic score alone.

## Analytics and measurement

Create a clean integration point for:

- Google Analytics 4
- Google Search Console

Do not hardcode unknown IDs.
Use environment variables.

Create conversion event hooks for:

- quote submission
- phone click
- email click
- service page engagement
- gallery interaction

## Trust and conversion psychology

Use concrete proof instead of generic marketing fluff.

Prioritise:

- real results
- real reviews
- real photos
- visible contact information
- clear service descriptions
- fast quote flow
- transparent next steps

Avoid empty phrases such as:

“Number one in Melbourne”
“Best cleaning company”
“Unbeatable prices”
“Guaranteed perfect results”

unless the client can substantiate them.

## Footer

Include:

- full business name
- short business description
- quick links
- services
- contact details
- Facebook
- Instagram
- Privacy Policy
- Terms if available
- copyright

Keep it professional, not enormous.

## Content migration

Before replacing current content:

- extract useful page copy
- identify existing image assets
- preserve meaningful URLs where possible
- preserve real testimonials
- preserve real service details
- note anything outdated or contradictory

Create a `CONTENT_AUDIT.md` file containing:

- content migrated
- content removed
- content needing client verification
- missing business facts
- old claims that should not be republished without verification

## Technical quality

Use reusable components rather than page-specific duplicated markup.

Create shared components for:

- Navbar
- MobileNav
- CTAButton
- QuoteForm
- ServiceCard
- TestimonialCard
- BeforeAfterSlider
- ServiceAreaList
- FAQAccordion
- SocialLinks
- Footer
- SEO metadata

Use typed data objects for services, testimonials, FAQs, gallery items, and service areas when the framework supports TypeScript.

## Security / privacy

Never expose API keys or email-service secrets to the browser.
Validate and sanitise submitted data.
Avoid collecting unnecessary personal information.
Add a privacy link near the lead form.

## SEO implementation checklist

The final build must include:

- unique title per indexable route
- unique meta description per indexable route
- canonical URL
- Open Graph metadata
- Twitter/X card metadata
- favicon/site icon
- semantic HTML
- crawlable anchor links
- XML sitemap
- robots.txt
- structured data
- internal links
- descriptive image alt attributes
- 404 page
- redirect strategy for changed legacy URLs

## Mobile-first requirements

Test at minimum:

- 360px width
- 390px width
- 430px width
- 768px width
- 1024px width
- 1280px width
- 1440px width

The mobile experience is a first-class experience, not a shrunken desktop page.

## Browser testing

Test in current:

- Chrome
- Firefox
- Safari-equivalent rendering where available

Check:

- navigation
- forms
- phone/email links
- image loading
- responsive states
- focus states
- reduced motion
- 404
- all internal links

## Final validation

Before finishing:

1. Run the production build.
2. Fix all build errors.
3. Fix console errors and warnings that affect the user experience.
4. Confirm every internal link works.
5. Confirm forms validate correctly.
6. Confirm mobile navigation works.
7. Confirm SEO metadata is present on every intended indexable page.
8. Confirm sitemap and robots files exist and reference the correct domain.
9. Confirm structured data is valid JSON-LD.
10. Confirm no secrets are committed.
11. Confirm no fake testimonials/images/claims were introduced.
12. Confirm real client assets are used wherever available.
13. Check that old URLs either still work or have proper redirects.

## Definition of done

The project is complete only when:

- The website feels like a premium Melbourne service company.
- The hero immediately communicates service + location + CTA.
- Users can request a quote without friction.
- Phone contact is one tap away on mobile.
- Services are clearly organised.
- Real work is presented as proof.
- Reviews feel credible and easy to verify.
- The site is fast, responsive, accessible, and SEO-ready.
- The implementation fits the existing repository architecture.
- No business facts were invented.
- A future developer can easily add new services, suburbs, testimonials, and gallery items.

## Execution style

Do not stop after producing a mockup.
Implement the actual site in the repository.

Work in this order:

1. Audit repo/current site.
2. Build information architecture.
3. Build design system.
4. Build reusable layout/components.
5. Implement homepage.
6. Implement service pages.
7. Implement gallery/results.
8. Implement reviews/about/service areas/FAQ/contact.
9. Implement quote funnel.
10. Implement SEO and structured data.
11. Implement analytics hooks.
12. Test responsive/accessibility/performance.
13. Run production build.
14. Create `CONTENT_AUDIT.md` and `SEO_CHECKLIST.md`.

At the end, report:

- what you changed
- which routes were created/updated
- which integrations are connected
- which business details still need client verification
- how to run the project locally
- how to build for production
- any remaining TODOs

Do not ask for permission after every step. Inspect, decide, implement, test, and document. Ask a question only when a missing fact would force you to invent something or would materially change the architecture.
