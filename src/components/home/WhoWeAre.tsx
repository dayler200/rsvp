"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

// Start fast, decelerate smoothly (ease-out) — same as MenuTeaser images
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: false, amount: 0.15 } as const;

export function WhoWeAre() {
  const { isNight } = useTheme();
  const muted = isNight ? "text-zinc-300" : "text-zinc-600";

  return (
    <section
      id="who-we-are"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

        {/* ─── LEFT: Text — each line fades + slides up, staggered ──── */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Heading — line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-current leading-[1.14]"
          >
            Born in Blantyre.
          </motion.div>

          {/* Heading — line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.11 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-current leading-[1.14] mb-6"
          >
            Crafted for moments that linger.
          </motion.div>

          {/* Body — paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.23 }}
            className={`text-base sm:text-lg leading-relaxed ${muted}`}
          >
            Rendezvous is more than a destination; it is Blantyre&apos;s premier
            living room by day and vibrant cultural pulse after dark.
          </motion.p>

          {/* Body — paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.36 }}
            className={`text-base sm:text-lg leading-relaxed mt-4 ${muted}`}
          >
            Under one architectural roof, three distinct worlds coexist in
            seamless harmony: an artisanal flame-grill restaurant, an intimate
            ambient cocktail lounge, and an electric high-fidelity club.
          </motion.p>
        </div>

        {/* ─── RIGHT: Image — slides from right, no fade ─────────────── */}
        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, ease: EASE_OUT }}
          className="lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-lg border border-black/10 dark:border-white/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop"
            alt="Rendezvous Venue Ambience"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-xs uppercase tracking-widest font-semibold text-zinc-300">
              Blantyre, Malawi
            </p>
            <p className="text-sm font-bold tracking-tight">
              A space tailored for conversation, taste &amp; celebration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
