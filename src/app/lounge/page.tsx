"use client";

import React from "react";
import { LoungeHero } from "@/components/lounge/LoungeHero";
import { LoungeCards } from "@/components/lounge/LoungeCards";
import { LoungeAbout } from "@/components/lounge/LoungeAbout";
import { LoungeExperience } from "@/components/lounge/LoungeExperience";
import { LoungeGallery } from "@/components/lounge/LoungeGallery";
import { Footer } from "@/components/layout/Footer";

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
