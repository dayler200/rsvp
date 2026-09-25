import type { Metadata } from "next";
import React from "react";
import { LoungeHero } from "@/components/lounge/LoungeHero";
import { LoungeCards } from "@/components/lounge/LoungeCards";
import { LoungeAbout } from "@/components/lounge/LoungeAbout";
import { LoungeExperience } from "@/components/lounge/LoungeExperience";
import { LoungeGallery } from "@/components/lounge/LoungeGallery";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Lounge | Cocktails, Ambiance & Social Vibes",
  description:
    "Unwind at Rendezvous Exclusive Lounge in Blantyre. Signature craft cocktails, ambient soundscapes, sunset views, and luxurious social seating.",
  alternates: {
    canonical: "/lounge",
  },
  openGraph: {
    title: "The Lounge | Cocktails & Vibes — Rendezvous Exclusive",
    description:
      "Signature craft cocktails, ambient soundscapes, sunset views, and luxurious social seating in Blantyre.",
    url: "/lounge",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Rendezvous Exclusive Lounge — Cocktails & Ambiance in Blantyre",
      },
    ],
  },
};

export default function LoungePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col">
        <LoungeHero />
        <LoungeCards />
        <LoungeAbout />
        <LoungeExperience />
        <LoungeGallery />
      </main>

      <Footer />
    </div>
  );
}
