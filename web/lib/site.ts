export const site = {
  name: "Melbourne Property Management and Services",
  brand: "MPM Services",
  tagline:
    "Professional steam cleaning, strip & polish and property maintenance across Melbourne.",
  url: "https://mpmservices.com.au",
  phoneIntl: "+61451460307",
  phoneDisplay: "+61 451 460 307",
  phoneShort: "0451 460 307",
  email: "info@mpmservices.com.au",
  location: "Melbourne, VIC 3000",
  areaServed: "Melbourne, VIC, Australia",
  facebook: "https://www.facebook.com/Melbournepropertymanagementandservices/",
  instagram: "https://www.instagram.com/mpm_services",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Steam Cleaning", href: "/services/steam-cleaning" },
      { label: "Strip & Polish", href: "/services/strip-and-polish" },
      { label: "Property Maintenance", href: "/services/property-maintenance" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const servicesQuickLinks = [
  { label: "Steam Cleaning", href: "/services/steam-cleaning" },
  { label: "Strip & Polish", href: "/services/strip-and-polish" },
  { label: "Property Maintenance", href: "/services/property-maintenance" },
];

export const contact = {
  phone: site.phoneIntl,
  phoneDisplay: site.phoneDisplay,
  email: site.email,
};