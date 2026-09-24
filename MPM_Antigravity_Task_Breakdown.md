# MPM Services — Antigravity Task Breakdown

## How to use this

Run these prompts **one main task at a time**, in order.

Do not paste the giant original prompt anymore. Each task is intentionally smaller so Antigravity can focus on one area without wasting context/tokens.

Before every task:
- Inspect the work already completed.
- Do not replace the existing stack.
- Continue from the current repository state.
- Keep existing useful functionality unless the task explicitly changes it.
- Never invent business facts, testimonials, certifications, prices, addresses, guarantees, or project results.

---

# PROJECT CONTEXT — use this once at the start of the Antigravity conversation

You are rebuilding a real client website for:

**Business:** Melbourne Property Management and Services  
**Short brand:** MPM Services  
**Location:** Melbourne, VIC, Australia 3000  
**Phone:** +61 451 460 307  
**Email:** info@mpmservices.com.au  
**Current website:** https://mpmservices.com.au  
**Facebook:** https://www.facebook.com/Melbournepropertymanagementandservices/  
**Instagram:** https://www.instagram.com/mpm_services

The new website must focus on exactly these **three primary services**:

1. Steam Cleaning
2. Strip & Polish
3. Property Maintenance

Do not create additional top-level services.

The redesign goals are:
- substantially improve the current website
- better UX and visual quality
- stronger hero section
- better navbar/navigation
- stronger lead generation and productivity
- stronger local SEO foundation
- strong mobile experience
- image-led design using real/approved MPM imagery where available

Images are required throughout the website. Never present stock/generated/placeholder imagery as real MPM work, and never fabricate before/after results.

The website should feel like a **premium, modern Australian local-service company** rather than a generic cleaning template.

The development process is divided into 6 main tasks below.

---

# MAIN TASK 1 — Audit, Architecture & Design Foundation

## Goal
Understand the existing project and establish the structure and visual system before building the full website.

## Small Task 1.1 — Repository audit

Inspect the entire repository before changing code.

Identify:
- framework
- build tool
- routing
- styling system
- reusable components
- existing pages
- current images/assets
- forms/backend/API integrations
- analytics
- deployment configuration
- package manager

Start the current project and inspect the existing website in a browser if possible.

Do not rebuild unrelated infrastructure.

## Small Task 1.2 — Content and asset audit

Review the current website/repository content and identify:
- useful existing copy
- existing service information
- real image assets
- testimonials/reviews
- existing URLs
- outdated/contradictory content

Create:
`CONTENT_AUDIT.md`

Include:
- keep
- migrate
- remove
- verify with client
- missing information

Pay special attention to conflicting business names, addresses, claims, review data and unsupported marketing statements.

## Small Task 1.3 — Information architecture

Create the target site structure:

- Home
- Services
  - Steam Cleaning
  - Strip & Polish
  - Property Maintenance
- Gallery / Results
- Reviews
- Service Areas
- About
- FAQ
- Contact

Primary CTA: **Get a Free Quote**  
Secondary CTA: **Call +61 451 460 307**

Mobile navigation must be simple and premium.

## Small Task 1.4 — Design system

Create a reusable design foundation for:
- typography
- colours
- spacing
- buttons
- cards
- sections
- borders
- shadows
- form fields
- image treatments
- responsive breakpoints

Visual direction:
- premium
- modern
- warm
- clean
- photographic
- trustworthy
- restrained

Avoid:
- excessive gradients
- cartoon cleaning icons
- glassmorphism overload
- giant rounded cards
- cheap-template appearance
- unnecessary animation

## Small Task 1.5 — Shared UI components

Build/reuse shared components for:
- Navbar
- MobileNav
- CTA buttons
- Section headings
- Service cards
- Image blocks
- Footer
- Container/layout primitives

Do not create duplicated markup for the same pattern.

## Deliverable
Stop after the foundation is stable. Do not build every page in this task.

---

# MAIN TASK 2 — Global UI, Navbar & Homepage

## Goal
Build the core customer-facing experience and make the homepage immediately explain the business.

## Small Task 2.1 — Navbar

Build a polished responsive navbar.

Desktop:
- logo/brand
- Home
- Services dropdown
- Gallery / Results
- Reviews
- Service Areas
- About
- FAQ
- Contact
- Get a Free Quote CTA
- phone action

Mobile:
- hamburger button
- smooth slide/fade menu
- clear hierarchy
- Quote CTA
- Call action

Add a fixed mobile bottom bar:
- Call Now
- Get a Quote

## Small Task 2.2 — Hero

Build a strong image-led hero.

Use:
**MELBOURNE PROPERTY SERVICES**

H1 direction:
**Steam Cleaning, Strip & Polish, and Property Maintenance in Melbourne**

Supporting copy should clearly explain the company without making unsupported claims.

Primary CTA:
**Get a Free Quote**

Secondary CTA:
**Call +61 451 460 307**

Show the three services as a compact supporting row.

Hero image is mandatory.
Prefer real MPM imagery.

## Small Task 2.3 — Trust/proof strip

Create a compact proof section using only facts that can be verified.

Use themes such as:
- professional service
- property-service capability
- real work
- genuine customer feedback
- clear quote process

Do not create fake badges or unsupported claims.

## Small Task 2.4 — Three-service section

Create a major visual section containing exactly three service cards:

1. Steam Cleaning
2. Strip & Polish
3. Property Maintenance

Each card must contain:
- meaningful image
- service name
- concise explanation
- outcome/benefit
- View Service CTA

Do not add additional primary service cards.

## Small Task 2.5 — Featured work section

Build a visual “Real Results” section.

Use:
- real work images
- before/after pairs where authentic pairs exist
- service label
- suburb only when verified

Include a CTA to the full Gallery / Results page.

## Small Task 2.6 — Why MPM + How It Works

Create concise sections showing:
- why customers should understand the service clearly
- how the enquiry/quote process works
- what happens after contacting MPM

Use real, defensible statements only.

## Small Task 2.7 — Homepage CTA + footer

Add a strong final CTA:
**Ready to improve your property? Request a quote.**

Footer should contain:
- business name
- short description
- phone
- email
- social links
- navigation
- Privacy Policy
- Terms if available

## Deliverable
Finish the homepage and global shell. Do not start the detailed service pages yet.

---

# MAIN TASK 3 — Three Core Service Pages

## Goal
Build strong dedicated pages for the three actual services and keep the whole site centred on them.

## Small Task 3.1 — Reusable service-page template

Create a reusable service-page layout with:
- hero
- service introduction
- service details
- process
- who it is for
- supporting images
- FAQ
- quote CTA
- related core services
- service area links

The template must be reusable but content must remain unique per service.

## Small Task 3.2 — Steam Cleaning page

Route:
`/services/steam-cleaning`

Explain Steam Cleaning as the primary cleaning pillar.

Where supported by existing MPM content, sub-services can be mentioned inside this page, such as carpet/upholstery/furniture cleaning, but do not turn those into new top-level services.

Mandatory:
- strong hero image
- multiple meaningful supporting images when approved assets exist
- clear CTA
- real/verified service details
- useful FAQs

## Small Task 3.3 — Strip & Polish page

Route:
`/services/strip-and-polish`

Create a dedicated, premium service page focused on strip and polish work.

Use:
- floor/surface imagery
- process explanation
- benefits/outcomes that are factually supportable
- CTA
- FAQs

Do not invent technical specifications or guarantees.

## Small Task 3.4 — Property Maintenance page

Route:
`/services/property-maintenance`

Create a dedicated page explaining the broader property-maintenance offering.

Only describe actual maintenance tasks supported by current client materials.

Mandatory:
- strong service image
- supporting images when available
- enquiry CTA
- practical explanation of the service

## Small Task 3.5 — Internal linking

Link the three service pages together.

Also connect them to:
- Home
- Gallery / Results
- Service Areas
- FAQ
- Contact

## Small Task 3.6 — Service-page SEO basics

Give each service page:
- unique title
- unique meta description
- one H1
- semantic H2/H3 structure
- canonical URL
- OG metadata
- descriptive image alt text

Target the actual service + Melbourne intent naturally.

## Deliverable
Three polished service pages, visually consistent but clearly differentiated.

---

# MAIN TASK 4 — Gallery, Reviews, Service Areas & Quote Funnel

## Goal
Turn the website into a stronger lead-generation system and use real work as proof.

## Small Task 4.1 — Gallery / Results

Route:
`/gallery`

Build an image-first results page.

Filters:
- All
- Steam Cleaning
- Strip & Polish
- Property Maintenance

Include:
- before/after slider where genuine pairs exist
- image lightbox
- captions
- service labels
- suburb only when verified

Do not fabricate projects.

## Small Task 4.2 — Reviews

Route:
`/reviews`

Build a trustworthy review experience.

Use only real testimonials/review data available from authoritative sources or the current repository.

Include:
- featured reviews
- external review link when available
- rating summary only when verified

Do not invent names, quotes, ratings or review counts.

## Small Task 4.3 — Service Areas

Route:
`/service-areas`

Build a local SEO-friendly service-area page centred on:
**Melbourne, VIC, Australia**

Create a structure where verified suburbs can be added later.

Do not generate hundreds of thin suburb pages.

## Small Task 4.4 — Quote CTA entry points

Make the quote CTA available from:
- navbar
- hero
- service cards
- service pages
- gallery
- footer
- mobile bottom bar

## Small Task 4.5 — Multi-step quote form

Build a polished quote flow.

Step 1:
Choose one of:
- Steam Cleaning
- Strip & Polish
- Property Maintenance

Step 2:
Collect only useful job information, such as:
- property type
- suburb/postcode
- relevant quantity/details
- preferred date/time
- notes

Step 3:
- name
- phone
- email
- optional photo upload

Step 4:
Show confirmation and phone CTA.

Use strong validation and accessible labels.

## Small Task 4.6 — Form architecture

If an existing backend/email integration exists, use it.

If none exists:
- create a clean replaceable API layer
- use environment variables
- document required credentials
- keep secrets out of client code

Add spam protection/honeypot where appropriate.

## Small Task 4.7 — Conversion tracking hooks

Prepare hooks/events for:
- quote_start
- quote_step_complete
- quote_submit
- click_call
- click_email
- service_view
- gallery_interaction
- social_click

Do not hardcode unknown analytics IDs.

## Deliverable
The site should now have a complete proof + conversion journey.

---

# MAIN TASK 5 — SEO, Accessibility, Performance & Technical Quality

## Goal
Make the completed website technically strong for search, usability and performance.

## Small Task 5.1 — SEO metadata

Implement unique metadata for every indexable route.

Suggested titles:

Home:
**Steam Cleaning, Strip & Polish & Property Maintenance Melbourne | MPM Services**

Steam Cleaning:
**Steam Cleaning Melbourne | MPM Services**

Strip & Polish:
**Strip & Polish Melbourne | MPM Services**

Property Maintenance:
**Property Maintenance Melbourne | MPM Services**

Write natural unique meta descriptions.

## Small Task 5.2 — Technical SEO

Implement:
- canonical URLs
- sitemap.xml
- robots.txt
- clean URLs
- Open Graph metadata
- Twitter/X cards
- favicon/site icon
- 404 page
- redirect strategy for changed legacy URLs

## Small Task 5.3 — Structured data

Implement appropriate JSON-LD where factually valid:
- LocalBusiness / suitable subtype
- Organization where appropriate
- WebSite
- BreadcrumbList
- Service on relevant service pages

Use only real business information.

Social sameAs:
- Facebook
- Instagram

Do not mark up third-party reviews as aggregate ratings unless current rules and eligibility are satisfied.

## Small Task 5.4 — Content structure

Ensure the website naturally targets:
- steam cleaning Melbourne
- strip and polish Melbourne
- property maintenance Melbourne

Related cleaning terms can appear within the Steam Cleaning pillar when supported by MPM's actual services.

Avoid keyword stuffing.

## Small Task 5.5 — Accessibility

Check:
- semantic HTML
- keyboard navigation
- focus states
- accessible forms
- heading hierarchy
- image alt text
- button/link distinction
- skip link
- reduced motion
- mobile menu accessibility
- contrast

Aim for WCAG 2.2 AA-oriented implementation.

## Small Task 5.6 — Image optimisation

Audit every image.

Use when supported by the stack:
- AVIF/WebP
- srcset/picture
- responsive sizing
- explicit dimensions
- lazy loading below fold
- sensible compression

Do not use huge unoptimised images.

## Small Task 5.7 — Performance

Improve:
- first render
- JavaScript usage
- image loading
- layout stability
- code splitting where useful
- critical asset loading

Avoid heavy autoplay video and unnecessary client-side libraries.

## Deliverable
The whole site should be SEO-ready, accessible and performant without changing the visual direction.

---

# MAIN TASK 6 — QA, Polish & Production Readiness

## Goal
Do a final professional review and fix real issues instead of adding random features.

## Small Task 6.1 — Responsive QA

Test at minimum:
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

Check every major section and every route.

## Small Task 6.2 — Navigation QA

Verify:
- desktop navbar
- mobile navbar
- Services dropdown
- internal links
- logo link
- quote CTA
- call link
- email link
- footer links
- social links

## Small Task 6.3 — Form QA

Test:
- empty state
- invalid phone
- invalid email
- missing required fields
- multi-step navigation
- back button
- successful submission
- error state
- photo upload if implemented
- mobile keyboard behaviour

## Small Task 6.4 — Image QA

Verify:
- every important section has appropriate imagery
- service images correspond to the correct service
- no broken images
- no fake before/after
- no stock image is presented as MPM work
- alt text is meaningful
- mobile crops are correct

## Small Task 6.5 — Browser/runtime QA

Check current browser environments available to you.

Fix:
- console errors
- hydration errors
- broken states
- layout issues
- missing assets
- accessibility issues

## Small Task 6.6 — Production build

Run the production build.

Fix all build errors.

Confirm:
- sitemap works
- robots works
- routes work
- 404 works
- metadata exists
- structured data is valid JSON-LD
- no secrets are committed

## Small Task 6.7 — Final business-content review

Before declaring completion, verify that the website does not contain invented:
- services
- claims
- testimonials
- review counts
- certifications
- awards
- prices
- guarantees
- addresses
- operating hours
- customer numbers

Keep any unresolved items in:
`CONTENT_AUDIT.md`

## Small Task 6.8 — Final documentation

Create/update:
`README.md`

Document:
- local setup
- development command
- production build
- deployment notes
- environment variables
- quote-form integration
- analytics integration
- content update locations

Also create/update:
`SEO_CHECKLIST.md`

## Final deliverable
Report:
- pages created/updated
- major components created
- quote flow status
- SEO work completed
- image work completed
- integrations connected
- unresolved client-verification items
- local run instructions
- production build instructions

Do not add unnecessary features just to make the project look bigger.

The final result should feel like a polished, premium Melbourne property-services website built around the three core services:

**Steam Cleaning · Strip & Polish · Property Maintenance**
