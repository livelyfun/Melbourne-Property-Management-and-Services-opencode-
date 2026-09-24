export type ServiceSlug = "steam-cleaning" | "strip-and-polish" | "property-maintenance";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  href: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage: string;
  cardImageAlt: string;
  summary: string;
  overview: string[];
  benefits: { title: string; body: string }[];
  whoFor: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "steam-cleaning",
    name: "Steam Cleaning",
    short: "Steam Cleaning",
    href: "/services/steam-cleaning",
    heroImage: "/images/steam-cleaning-hero.jpg",
    heroImageAlt:
      "Professional steam cleaning in progress on a carpet inside a Melbourne property",
    cardImage: "/images/steam-cleaning-detail.jpg",
    cardImageAlt:
      "Close-up of a professional steam cleaning tool lifting dirt from carpet fibres",
    summary:
      "Deep, thorough steam cleaning for carpets, rugs, upholstery, sofas and mattresses — helping refresh high-traffic areas and leave interiors feeling fresher.",
    overview: [
      "Steam cleaning uses hot water and controlled pressure to lift built-up dirt, dust and lingering smells from soft furnishings and surfaces. It is a practical way to refresh homes and rental properties between occupants, before events, or simply as part of regular upkeep.",
      "MPM Services carries out steam cleaning on a range of household items — from carpets and rugs through to upholstery, sofas, dining chairs and mattresses. The right result depends on the material, the condition and the right cleaning approach, which is why a quote starts with a conversation about your job.",
    ],
    benefits: [
      {
        title: "Fresher interiors",
        body: "Steam cleaning helps remove built-up dust, odours and everyday grime from carpets, upholstery and mattresses.",
      },
      {
        title: "Refresh between occupants",
        body: "A practical step when preparing a rental or home between occupancies — helping the property present clean and cared-for.",
      },
      {
        title: "Straightforward process",
        body: "Clear communication before the job, a professional clean on the day and an honest explanation of what to expect afterwards.",
      },
    ],
    whoFor: [
      "Homeowners wanting their carpets, sofas or mattresses refreshed",
      "Landlords and property managers preparing properties between occupancies",
      "Commercial tenants and offices keeping shared spaces presentable",
      "Anyone who would rather talk through the job before booking",
    ],
    process: [
      {
        title: "Tell us what you need",
        body: "Let us know the items and areas to be cleaned and the general condition.",
      },
      {
        title: "Discuss the job",
        body: "We talk through the details and confirm what will be involved before any work begins.",
      },
      {
        title: "Service is completed",
        body: "The cleaning is carried out carefully, with practical guidance on drying times and aftercare.",
      },
      {
        title: "Enjoy the result",
        body: "Walk into a refreshed, cleaner space — and call us again whenever it is needed.",
      },
    ],
    faqs: [
      {
        question: "How long does carpet steam cleaning take?",
        answer:
          "It depends on the room size and the condition of the carpet. As part of your quote we will let you know the expected timeframe for your specific job.",
      },
      {
        question: "How long does a carpet take to dry after steam cleaning?",
        answer:
          "Drying time varies with the carpet type, pile and airflow. We will guide you on realistic drying times for your situation after the clean.",
      },
      {
        question: "Can you remove coffee and kids' stains?",
        answer:
          "Many everyday spills and stains respond well to professional steam cleaning. Because results depend on the stain and the surface, we recommend discussing your specific marks during the quote so we can set honest expectations.",
      },
      {
        question: "Do you clean sofas and dining chairs?",
        answer:
          "Yes — upholstery, sofas and dining chairs are regular steam cleaning jobs for MPM Services. Include them when requesting a quote.",
      },
    ],
    metaTitle: "Steam Cleaning Melbourne | MPM Services",
    metaDescription:
      "Professional steam cleaning for carpets, rugs, upholstery, sofas and mattresses across Melbourne. Get a free quote from MPM Services today.",
  },
  {
    slug: "strip-and-polish",
    name: "Strip & Polish",
    short: "Strip & Polish",
    href: "/services/strip-and-polish",
    heroImage: "/images/strip-polish-floor.jpg",
    heroImageAlt:
      "Professionally stripped and polished hard floor with a clean, subtle shine",
    cardImage: "/images/strip-polish-detail.jpg",
    cardImageAlt:
      "Worker applying polish to a hard floor during a professional strip and polish service",
    summary:
      "Professional stripping and polishing for hard floors — removing old layers of wax and finish and reapplying a clean, level finish that brings tired floors back to life.",
    overview: [
      "Over time, hard floors accumulate layers of old wax, scuff marks and dirt that daily mopping cannot shift. Strip & polish involves removing the old finish with professional equipment, preparing the surface, and applying fresh polish for a cleaner, more presentable floor.",
      "This service is most relevant for commercial and high-traffic hard floors where appearance matters — retail, offices, common areas, and rental properties that need to present well.",
    ],
    benefits: [
      {
        title: "A cleaner-looking floor",
        body: "Stripping removes built-up layers that dull the surface, revealing a cleaner base to work with.",
      },
      {
        title: "Refreshed presentation",
        body: "A freshly polished floor helps a property or business space present professionally.",
      },
      {
        title: "Done on-site with real care",
        body: "Work is carried out on site with attention to preparation and a clear plan before we start.",
      },
    ],
    whoFor: [
      "Businesses with worn, dull-looking hard floors",
      "Landlords and property managers presenting units or common areas",
      "Retail, office and hospitality spaces wanting a professional finish",
      "Anyone with a hard floor that no longer responds to regular cleaning",
    ],
    process: [
      {
        title: "Tell us what you need",
        body: "Describe the floor type, the area and the current condition.",
      },
      {
        title: "Discuss the job",
        body: "We confirm the plan, what is involved and realistic expectations for the outcome.",
      },
      {
        title: "Service is completed",
        body: "The strip and polish is carried out with professional equipment and attention to preparation.",
      },
      {
        title: "Enjoy the result",
        body: "A cleaner, refreshed floor surface ready for everyday use.",
      },
    ],
    faqs: [
      {
        question: "What floors can be stripped and polished?",
        answer:
          "Hard surface flooring that has had a wax or polish finish applied is typically suitable. We will confirm suitability for your specific floor during the quote.",
      },
      {
        question: "How long does a strip and polish take?",
        answer:
          "It depends on the floor area and its condition. We will give you a timeframe for your job when we discuss the details.",
      },
      {
        question: "Can I use the floor while the polish is drying?",
        answer:
          "To protect the fresh finish, we will guide you on how long to keep the area clear after completion.",
      },
    ],
    metaTitle: "Strip & Polish Melbourne | MPM Services",
    metaDescription:
      "Professional floor strip and polish for commercial and hard floors in Melbourne. Bring tired floors back to a clean, presentable finish. Get a free quote.",
  },
  {
    slug: "property-maintenance",
    name: "Property Maintenance",
    short: "Property Maintenance",
    href: "/services/property-maintenance",
    heroImage: "/images/property-maintenance-hero.jpg",
    heroImageAlt:
      "Property maintenance work being carried out on a Melbourne property",
    cardImage: "/images/property-maintenance-detail.jpg",
    cardImageAlt:
      "Maintenance worker with tools carrying out practical upkeep inside a property",
    summary:
      "Practical property maintenance to help keep homes, rentals and commercial spaces clean, presentable and well looked after — so properties stay in good shape year-round.",
    overview: [
      "Properties need regular care to stay clean, presentable and in good working order. MPM Services provides practical property maintenance that supports homeowners, landlords, property managers and business operators in keeping their spaces well maintained.",
      "Every maintenance job starts with a clear conversation about what needs to be done. Whether it is a single task or ongoing upkeep, we aim to make the process straightforward and communicate clearly from quote to completion.",
    ],
    benefits: [
      {
        title: "Properties that present well",
        body: "Regular upkeep helps a property look cared-for, which matters for homes, tenancies and businesses alike.",
      },
      {
        title: "A single point of contact",
        body: "One local team for the practical care of your property, from smaller jobs through to ongoing maintenance.",
      },
      {
        title: "Clear communication",
        body: "We confirm what will be involved before starting, so you always know what to expect.",
      },
    ],
    whoFor: [
      "Homeowners keeping up with practical property care",
      "Landlords and property managers maintaining rental properties",
      "Business operators looking after their premises",
      "Anyone who needs straightforward, reliable property upkeep",
    ],
    process: [
      {
        title: "Tell us what you need",
        body: "Let us know what maintenance tasks your property requires.",
      },
      {
        title: "Discuss the job",
        body: "We review the tasks, confirm the plan and agree the details before work begins.",
      },
      {
        title: "Service is completed",
        body: "Work is carried out carefully, with the property left clean and tidy.",
      },
      {
        title: "Enjoy the result",
        body: "A property that stays clean, presentable and easier to manage.",
      },
    ],
    faqs: [
      {
        question: "What sort of property maintenance do you handle?",
        answer:
          "MPM Services focuses on the practical upkeep that keeps a property clean and presentable. Tell us what you need and we will confirm whether we can help during the quote.",
      },
      {
        question: "Do you work with property managers?",
        answer:
          "Yes. We are set up to support landlords and property managers with practical property care. Get in touch to discuss your portfolio or specific properties.",
      },
      {
        question: "How do I request a quote for maintenance?",
        answer:
          "The quickest way is to request a free quote through the website, or call us on +61 451 460 307 to talk through what you need.",
      },
    ],
    metaTitle: "Property Maintenance Melbourne | MPM Services",
    metaDescription:
      "Practical property maintenance across Melbourne to keep homes, rentals and commercial spaces clean and well maintained. Get a free quote from MPM Services.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};