import { Hero } from "@/components/home/Hero";
import { ThreeDoors } from "@/components/home/ThreeDoors";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { Gallery } from "@/components/home/Gallery";
import { ReservationTeaser } from "@/components/home/ReservationTeaser";
import { Footer } from "@/components/layout/Footer";

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

      {/* 5. Gallery (Infinite marquee with drag override) */}
      <Gallery />

      {/* 6. Table Reservation (Web form + Direct WhatsApp) */}
      <ReservationTeaser />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
