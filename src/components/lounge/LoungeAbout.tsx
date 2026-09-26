"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.12 } as const;

export function LoungeAbout() {
  const { isNight } = useTheme();
  const muted = isNight ? "text-zinc-400" : "text-zinc-600";

  return (
    <section
      id="lounge-about"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        {/* ─── LEFT: Two images stacked ────────────────────────────── */}
        <div className="lg:col-span-5 lg:col-start-1 flex flex-col gap-4">

          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE }}
            className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
              alt="RSVP Lounge cocktails"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop"
              alt="RSVP Lounge ambient seating"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* ─── RIGHT: Text block ────────────────────────────────────── */}
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-6 lg:pt-6">


          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]"
          >
            Good drinks. Good music. Easy nights.
          </motion.h2>

          {/* Body paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            className={`text-base sm:text-lg leading-relaxed ${muted}`}
          >
            The Lounge is where you slow down. Pull up a chair, order something
            handcrafted, and let the night unfold at its own pace.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
            className={`text-base sm:text-lg leading-relaxed ${muted}`}
          >
            Warm lighting, curated sounds, and drinks made from scratch. It is the
            kind of place you come for one and stay for three.
          </motion.p>

          {/* What makes it different — three punchy lines, no bullet icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
            className="flex flex-col gap-3 pt-2"
          >
            {[
              "Cocktails made to order, not from a mixer.",
              "Music that sets the mood without overpowering the room.",
              "A crowd that knows how to enjoy a good night.",
            ].map((line) => (
              <p
                key={line}
                className="text-sm sm:text-base font-medium"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
