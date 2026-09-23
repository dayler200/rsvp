import React from "react";
import { LoungeHero } from "@/components/lounge/LoungeHero";
import { LoungeAbout } from "@/components/lounge/LoungeAbout";
import { LoungeCards } from "@/components/lounge/LoungeCards";
import { Footer } from "@/components/layout/Footer";

export default function LoungePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LoungeHero />
      <LoungeCards />
      <LoungeAbout />
      <Footer />
    </div>
  );
}
