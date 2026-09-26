"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LoungeHero() {
  const { isNight } = useTheme();
  const muted = isNight ? "text-zinc-400" : "text-zinc-600";

  return (
    <section
      className="pt-24 sm:pt-32 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center">

        {/* ─── LEFT: Text block ─────────────────────────────── */}
        <div className="col-span-6 flex flex-col gap-3 sm:gap-5">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Drinks worth staying for.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className={`text-xs sm:text-sm md:text-base leading-relaxed max-w-md ${muted}`}
          >
            The Lounge at RSVP. Crafted cocktails, warm light, and the
            kind of music that makes time disappear.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-[#9c0200] hover:bg-[#b50300] text-white text-[0.65rem] sm:text-xs md:text-sm font-semibold px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              View Menu
            </Link>
          </motion.div>
        </div>

        {/* ─── RIGHT: Image ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
          className="col-span-6 relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop"
            alt="RSVP Lounge interior"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
