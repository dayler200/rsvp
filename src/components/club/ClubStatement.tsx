"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ClubStatement() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* ── FULL-WIDTH BACKGROUND IMAGE (using public/hero.jpg) ── */}
      <div className="absolute inset-0 -top-6 sm:top-0 z-0 overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Rendezvous Nightlife Experience"
          fill
          unoptimized
          priority
          sizes="100vw"
          // Shift image up on mobile screens (object-top), nicely framed on desktop
          className="object-cover object-top sm:object-[center_30%] brightness-90"
        />

        {/* Dark gradient on the left for maximum text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.4) 75%, rgba(10,10,10,0.15) 100%)",
          }}
        />

        {/* ── SEAMLESS TOP BLACK FADE ── */}
        <div
          className="absolute top-0 left-0 right-0 h-44 sm:h-64 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.3) 70%, transparent 100%)",
          }}
        />

        {/* ── SEAMLESS BOTTOM BLACK FADE ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.9) 80%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* ── OVERLAID CONTENT (Pushed down on mobile screens, tightened at bottom) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-10 sm:pt-28 sm:pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl sm:max-w-2xl flex flex-col gap-4 sm:gap-6"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white">
            Plunge Into The Hottest Exciting Nightlife And Dance Until Dawn With Premier Music.
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg">
            Every night at Rendezvous Club is a curated experience with world-class resident DJs,
            state-of-the-art acoustic design, immersive lighting, and a crowd that lives for the sound.
            Step through the doors and let the rhythm carry you through till sunrise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
