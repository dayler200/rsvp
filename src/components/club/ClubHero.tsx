"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ClubHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* ── VIDEO BACKGROUND (using public/hero.mp4) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.45) 40%, rgba(10,10,10,0.85) 100%)",
          }}
        />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] text-white uppercase"
        >
          Where the
          <br />
          Night Lives.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-base sm:text-lg text-zinc-300 leading-relaxed"
        >
          Blantyre&apos;s finest club experience. Live DJs, VIP service, and nights you won&apos;t forget.
        </motion.p>

        {/* Single CTA Button: Flat, No Glow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex items-center justify-center"
        >
          <Link
            href="#events"
            className="bg-[#9c0200] hover:bg-[#b50300] active:scale-95 text-white font-bold text-sm uppercase tracking-widest py-3.5 px-8 rounded-xl transition-colors"
          >
            See What&apos;s On
          </Link>
        </motion.div>
      </div>

      {/* ── PURE BLACK SEAMLESS BOTTOM FADE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.4) 30%, rgba(10,10,10,0.85) 70%, #0a0a0a 100%)",
        }}
      />
    </section>
  );
}
