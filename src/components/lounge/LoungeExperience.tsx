"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.1 } as const;

const EXPERIENCES = [
  {
    id: "cocktails",
    tag: "Signature Mixology",
    title: "Artisanal Cocktails",
    description:
      "Hand-infused botanicals, top-shelf spirits, and house-made syrups crafted fresh to order by master mixologists.",
  },
  {
    id: "sound",
    tag: "Sonic Identity",
    title: "Curated Sound & Music",
    description:
      "From warm sunset acoustic rhythms to deep house and late-night curated sets that define the evening's pulse.",
  },
  {
    id: "seating",
    tag: "Table Service",
    title: "Premium & VIP Seating",
    description:
      "Plush velvet booths, warm ambient lighting, and dedicated bottle service tailored for intimate dates or group celebrations.",
  },
  {
    id: "nightlife",
    tag: "Late Night",
    title: "The After-Dark Pulse",
    description:
      "An electric, sophisticated atmosphere where conversations flow effortlessly into unforgettable nights in Blantyre.",
  },
];

export function LoungeExperience() {
  const { isNight } = useTheme();
  const muted = isNight ? "text-zinc-400" : "text-zinc-600";
  const cardBg = isNight
    ? "bg-zinc-800/80 border-zinc-700/60"
    : "bg-zinc-100/90 border-zinc-200/70";

  return (
    <section
      id="lounge-experience"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full"
    >
      {/* ─── Header ────────────────────────────────────── */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Crafted for connection, music, and effortless evenings.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className={`mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed ${muted}`}
        >
          Whether meeting for sunset drinks or staying through the late-night groove, every element is designed to elevate your time at RSVP.
        </motion.p>
      </div>

      {/* ─── 4 Clean Cards: No icons, no numbers, seamless grey theme-aware surface ─── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.6,
              ease: EASE,
              delay: index * 0.08,
            }}
            className={`relative flex flex-col justify-between p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border ${cardBg} transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[170px] sm:min-h-[220px]`}
          >
            <div>
              {/* Tag */}
              <span className="inline-block text-[0.6rem] sm:text-xs font-semibold tracking-wider uppercase text-[#9c0200] mb-2 sm:mb-3">
                {exp.tag}
              </span>

              {/* Title */}
              <h3
                className="text-xs sm:text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.title}
              </h3>
            </div>

            {/* Description */}
            <p className={`text-[0.65rem] sm:text-xs md:text-sm leading-relaxed ${muted}`}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
