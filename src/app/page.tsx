import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ThreeDoors } from "@/components/home/ThreeDoors";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { Gallery } from "@/components/home/Gallery";
import { ReservationTeaser } from "@/components/home/ReservationTeaser";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rendezvous Exclusive | Restaurant, Lounge & Club — Blantyre",
  description:
    "Step into Blantyre's premier dining and nightlife destination. Reserve your experience at Rendezvous Exclusive Restaurant, Lounge, or Club.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rendezvous Exclusive | Restaurant, Lounge & Club — Blantyre",
    description:
      "Step into Blantyre's premier dining and nightlife destination. Reserve your experience at Rendezvous Exclusive Restaurant, Lounge, or Club.",
    url: "/",
    images: [{ url: "/ogimage.jpg", width: 1200, height: 630, alt: "Rendezvous Exclusive Blantyre" }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Day & Night Aware) */}
      <Hero />

      {/* 2. Three Doors Section (Restaurant / Lounge / Club) */}
      <ThreeDoors />

      {/* 3. Who We Are Section (Text on left, Image on right) */}
      <WhoWeAre />

      {/* 4. Menu Teaser (Burger + Centre Text + Chef) */}
      <MenuTeaser />

      {/* 5. Gallery */}
      <Gallery />

      {/* 6. Table Reservation (Web form + Direct WhatsApp) */}
      <ReservationTeaser />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
