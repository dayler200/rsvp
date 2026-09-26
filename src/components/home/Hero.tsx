"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../layout/ThemeProvider";

export function Hero() {
  const { isNight } = useTheme();

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 pb-8 px-4 sm:px-6 lg:px-12">
      {/* ─── ATMOSPHERIC BACKGROUND (Day vs Night) ───────────── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <AnimatePresence mode="wait">
          {!isNight ? (
            <motion.div
              key="hero-day"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-[#f5f5f5]"
            >
              {/* Day Architectural / Warm Dine Graphic Mood */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(#05141f 1px, transparent 1px), radial-gradient(#9c0200 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                  backgroundPosition: "0 0, 20px 20px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#f5f5f5]" />
              <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-100/60 to-transparent blur-3xl pointer-events-none" />
            </motion.div>
          ) : (
            <motion.div
              key="hero-night"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-[#05141f]"
            >
              {/* Night Lounge & Club Mood — Sharp, deep, midnight aesthetic */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `radial-gradient(#fd2006 1px, transparent 1px), radial-gradient(#222 1px, transparent 1px)`,
                  backgroundSize: "36px 36px",
                  backgroundPosition: "0 0, 18px 18px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#05141f]/90 via-[#05141f]/85 to-[#05141f]" />
              <div className="absolute -top-24 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#9c0200]/25 to-transparent blur-3xl pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── CENTER HERO CONTENT (Time-Aware) ────────────────── */}
      <div className="w-full max-w-4xl mx-auto my-auto py-12 sm:py-16 text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isNight ? (
            /* Day View Content */
            <motion.div
              key="content-day"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black max-w-3xl leading-[1.08]">
                Where every meal is a <span className="text-[#9c0200]">moment</span>.
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-700 max-w-xl font-normal leading-relaxed">
                Refined daytime dining, artisanal grills, and relaxed afternoon conversations in the heart of Blantyre.
              </p>

              {/* Single Solid Red CTA Button (Mobile/Tablet only; desktop floating navbar has Reserve button) */}
              <div className="mt-8 sm:mt-10 flex lg:hidden items-center justify-center">
                <Link
                  href="#reserve"
                  className="bg-[#9c0200] hover:bg-[#b50300] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Reserve
                </Link>
              </div>
            </motion.div>
          ) : (
            /* Night View Content */
            <motion.div
              key="content-night"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fd2006] mb-4">
                Nightlife • Bottle Service • Sound
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-3xl leading-[1.08]">
                Tonight at <span className="text-[#fd2006]">RSVP</span>.
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-xl font-normal leading-relaxed">
                Malawi’s premier sound systems, elite resident DJs, signature mixology, and VIP booths built for celebration.
              </p>

              {/* Single Solid Red CTA Button (Mobile/Tablet only; desktop floating navbar has Reserve button) */}
              <div className="mt-8 sm:mt-10 flex lg:hidden items-center justify-center">
                <Link
                  href="#reserve"
                  className="bg-[#9c0200] hover:bg-[#b50300] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Reserve
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── BOTTOM DETAILS & SCROLL PROMPT ─────────────────── */}
      <div className="w-full max-w-6xl mx-auto flex items-end justify-between pt-6 border-t border-current/10">
        {/* Operating Hours Snippet */}
        <div className="text-left text-xs opacity-75 max-w-xs">
          <p className="font-semibold uppercase tracking-wider mb-0.5">Opening Hours</p>
          <p className={isNight ? "text-zinc-400" : "text-zinc-600"}>
            Restaurant: 11:30 AM – 10:00 PM
          </p>
          <p className={isNight ? "text-zinc-400" : "text-zinc-600"}>
            Lounge & Club: 5:00 PM – Late
          </p>
        </div>

        {/* Scroll down prompt */}
        <Link
          href="#three-doors"
          className="group flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-100 opacity-60"
        >
          <span>Explore Spaces</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faArrowDown} className="w-3.5 h-3.5 text-[#fd2006]" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
