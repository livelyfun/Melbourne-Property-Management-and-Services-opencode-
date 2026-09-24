import type { ServiceSlug } from "./services";

export type GalleryCategory = "all" | ServiceSlug;

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: ServiceSlug;
  caption: string;
  /** Stock imagery is shown as generic service-context illustration, never as completed MPM work. */
  isStock: true;
  aspect: "wide" | "tall" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "sc-01",
    src: "/images/gallery-sc-01.jpg",
    alt: "Professional steam cleaning of a light-toned carpet in a home",
    category: "steam-cleaning",
    caption: "Steam cleaning — carpet refresh (illustrative image)",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sc-02",
    src: "/images/gallery-sc-02.jpg",
    alt: "Steam cleaning an upholstered sofa to refresh fabric",
    category: "steam-cleaning",
    caption: "Steam cleaning — upholstery refresh (illustrative image)",
    isStock: true,
    aspect: "square",
  },
  {
    id: "sc-03",
    src: "/images/gallery-sc-03.jpg",
    alt: "Close-up of steam cleaning equipment at work on carpet",
    category: "steam-cleaning",
    caption: "Steam cleaning — equipment at work (illustrative image)",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "sp-01",
    src: "/images/gallery-sp-01.jpg",
    alt: "Polished hard floor with a clean, even sheen",
    category: "strip-and-polish",
    caption: "Strip & polish — freshly polished floor (illustrative image)",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sp-02",
    src: "/images/gallery-sp-02.jpg",
    alt: "Maintenance worker polishing a hard floor surface",
    category: "strip-and-polish",
    caption: "Strip & polish — finishing a floor (illustrative image)",
    isStock: true,
    aspect: "square",
  },
  {
    id: "pm-01",
    src: "/images/gallery-pm-01.jpg",
    alt: "Maintenance professional carrying out practical property upkeep",
    category: "property-maintenance",
    caption: "Property maintenance — practical upkeep (illustrative image)",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "pm-02",
    src: "/images/gallery-pm-02.jpg",
    alt: "Well-maintained property interior ready to present well",
    category: "property-maintenance",
    caption: "Property maintenance — presented interior (illustrative image)",
    isStock: true,
    aspect: "tall",
  },
  {
    id: "sc-04",
    src: "/images/gallery-sc-04.jpg",
    alt: "Freshly steam cleaned carpet in a bright living space",
    category: "steam-cleaning",
    caption: "Steam cleaning — fresh carpet result (illustrative image)",
    isStock: true,
    aspect: "wide",
  },
  {
    id: "sp-03",
    src: "/images/gallery-sp-03.jpg",
    alt: "Bright commercial floor after professional polish",
    category: "strip-and-polish",
    caption: "Strip & polish — commercial floor (illustrative image)",
    isStock: true,
    aspect: "square",
  },
];

export function getGalleryCategories(): { value: GalleryCategory; label: string }[] {
  return [
    { value: "all", label: "All" },
    { value: "steam-cleaning", label: "Steam Cleaning" },
    { value: "strip-and-polish", label: "Strip & Polish" },
    { value: "property-maintenance", label: "Property Maintenance" },
  ];
}