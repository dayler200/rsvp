"use client";

import React, { useEffect } from "react";
import { ClubHero } from "@/components/club/ClubHero";
import { ClubStatement } from "@/components/club/ClubStatement";
import { ClubEvents } from "@/components/club/ClubEvents";
import { ClubRulesTeaser } from "@/components/club/ClubRulesTeaser";
import { ClubGallery } from "@/components/club/ClubGallery";
import { ClubAbout } from "@/components/club/ClubAbout";
import { Footer } from "@/components/layout/Footer";

export function ClubContent() {
  useEffect(() => {
    const html = document.documentElement;
    const previousTheme = html.getAttribute("data-theme");

    // Force night theme for this page
    html.setAttribute("data-theme", "night");

    return () => {
      // Restore the original theme when navigating away
      if (previousTheme) {
        html.setAttribute("data-theme", previousTheme);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#05141f] text-[#f5f5f5]"
      style={
        {
          "--bg": "#05141f",
          "--text": "#f5f5f5",
          "--text-muted": "#aaaaaa",
          "--surface": "#111111",
          "--border": "#222222",
        } as React.CSSProperties
      }
    >
      <main className="flex flex-col">
        <ClubHero />
        <ClubStatement />
        <ClubEvents />
        <ClubRulesTeaser />
        <ClubGallery />
        <ClubAbout />
      </main>

      <Footer forceDark />
    </div>
  );
}
