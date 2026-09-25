"use client";

import React, { useEffect } from "react";
import { RestaurantHero } from "@/components/restaurant/RestaurantHero";
import { RestaurantMarquee } from "@/components/restaurant/RestaurantMarquee";
import { RestaurantFeatures } from "@/components/restaurant/RestaurantFeatures";
import { RestaurantBento } from "@/components/restaurant/RestaurantBento";
import { RestaurantGallery } from "@/components/restaurant/RestaurantGallery";
import { RestaurantLocation } from "@/components/restaurant/RestaurantLocation";
import { Footer } from "@/components/layout/Footer";

export function RestaurantContent() {
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
        <RestaurantHero />
        <RestaurantMarquee />
        <RestaurantFeatures />
        <RestaurantBento />
        <RestaurantGallery />
        <RestaurantLocation />
      </main>

      <Footer />
    </div>
  );
}
