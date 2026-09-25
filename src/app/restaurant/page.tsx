import type { Metadata } from "next";
import { RestaurantContent } from "./RestaurantContent";

export const metadata: Metadata = {
  title: "Restaurant | Fine Dining & Steaks",
  description:
    "Indulge in artisanal culinary creations, signature steaks, and curated fine dining at Rendezvous Exclusive Restaurant in Blantyre.",
  alternates: {
    canonical: "/restaurant",
  },
  openGraph: {
    title: "Restaurant | Fine Dining & Steaks — Rendezvous Exclusive",
    description:
      "Artisanal culinary creations, signature prime steaks, and curated fine dining in Blantyre.",
    url: "/restaurant",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Rendezvous Exclusive Restaurant — Fine Dining in Blantyre",
      },
    ],
  },
};

export default function RestaurantPage() {
  return <RestaurantContent />;
}
