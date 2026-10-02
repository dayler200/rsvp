import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { StickyReserve } from "@/components/layout/StickyReserve";

config.autoAddCss = false;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rsvp.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#05141f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RSVP Exclusive | Premier Bar & Nightclub — Blantyre",
    template: "%s | RSVP Exclusive",
  },
  description:
    "Blantyre's premier bar, nightclub, and entertainment destination. Experience high-energy dance floors, resident DJs, VIP bottle service, fine dining, and artisanal cocktails at RSVP Exclusive.",
  applicationName: "RSVP Exclusive",
  authors: [{ name: "RSVP Exclusive", url: siteUrl }],
  creator: "RSVP Exclusive",
  publisher: "RSVP Exclusive",
  keywords: [
    "RSVP Exclusive",
    "RSVP Blantyre",
    "Bar in Blantyre",
    "Nightclub in Blantyre",
    "Club in Blantyre",
    "Malawi nightlife",
    "Restaurant in Blantyre",
    "Lounge in Blantyre",
    "Cocktail bar Blantyre",
    "VIP bottle service Blantyre",
    "Table reservation Blantyre",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RSVP Exclusive",
    title: "RSVP Exclusive | Premier Bar & Nightclub — Blantyre",
    description:
      "Blantyre's premier bar, nightclub, and entertainment destination. Experience world-class sound, resident DJs, VIP service, and fine dining.",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "RSVP Exclusive — Premier Bar & Nightclub in Blantyre",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSVP Exclusive | Premier Bar & Nightclub — Blantyre",
    description:
      "Blantyre's premier bar, nightclub, and entertainment destination. Book your VIP table at RSVP Exclusive.",
    images: ["/ogimage.jpg"],
    creator: "@RSVPExclusive",
  },
  icons: {
    icon: [
      { url: "/favicon1.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon1.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Restaurant", "NightClub", "BarOrPub"],
      "@id": `${siteUrl}/#organization`,
      name: "RSVP Exclusive",
      alternateName: "RSVP",
      url: siteUrl,
      logo: `${siteUrl}/rsvp_logo1.png`,
      image: `${siteUrl}/ogimage.jpg`,
      description:
        "Blantyre's premier dining and nightlife destination featuring a fine dining restaurant, sophisticated cocktail lounge, and electric nightclub.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Blantyre",
        addressCountry: "MW",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.7861,
        longitude: 35.0058,
      },
      priceRange: "$$$",
      servesCuisine: ["International", "Steakhouse", "Cocktails"],
      hasMenu: `${siteUrl}/restaurant`,
      acceptsReservations: "true",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden w-full max-w-full">
        <ThemeProvider>
          <Navbar />
          <main className="overflow-x-hidden w-full max-w-full">{children}</main>
          <StickyReserve />
        </ThemeProvider>
      </body>
    </html>
  );
}
