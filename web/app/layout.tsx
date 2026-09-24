import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Steam Cleaning, Strip & Polish & Property Maintenance Melbourne | MPM Services",
    template: "%s | MPM Services",
  },
  description:
    "Professional steam cleaning, strip & polish and property maintenance across Melbourne, VIC. Get a free quote from MPM Services — call +61 451 460 307.",
  applicationName: site.brand,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.brand,
    url: site.url,
    title:
      "Steam Cleaning, Strip & Polish & Property Maintenance Melbourne | MPM Services",
    description:
      "Professional steam cleaning, strip & polish and property maintenance across Melbourne, VIC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPM Services — Melbourne Property Services",
    description:
      "Professional steam cleaning, strip & polish and property maintenance across Melbourne, VIC.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}