"use client";

import React, { useEffect } from "react";
import { RestaurantHero } from "@/components/restaurant/RestaurantHero";
import { RestaurantFeatures } from "@/components/restaurant/RestaurantFeatures";
import { RestaurantBento } from "@/components/restaurant/RestaurantBento";
import { Footer } from "@/components/layout/Footer";

export default function RestaurantPage() {
  // Enforce Light / White theme permanently on the Restaurant page
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", "day");
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-[#fcfcfc] text-zinc-900 transition-colors duration-300"
      style={
        {
          "--bg": "#fcfcfc",
          "--text": "#0a0a0a",
          "--text-muted": "#555555",
          "--surface": "#ffffff",
          "--border": "#e5e5e5",
          backgroundColor: "#fcfcfc",
          color: "#0a0a0a",
        } as React.CSSProperties
      }
    >
      <main className="flex flex-col">
        {/* 1. Hero with side-by-side burger on left, text and single View Menu button on right */}
        <RestaurantHero />

        {/* 2. About the Restaurant section (sits on main white background, no card/borders/buttons) */}
        <RestaurantFeatures />

        {/* 3. 6-card asymmetrical Bento mosaic (side-by-side on all screens, waiter image in card 1) */}
        <RestaurantBento />
      </main>

      {/* 4. Shared brand footer */}
      <Footer />
    </div>
  );
}
