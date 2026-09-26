"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function ClubRulesTeaser() {
  return (
    <section className="bg-[#05141f] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 items-center">
          {/* ── IMAGE: Natural aspect ratio, NO gradient overlay as requested ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/other.jpg"
              alt="RSVP Nightlife Experience"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* ── CONTENT: Title, Subtext, Flat 'Club Rules' Button ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Nightlife Terms &amp; Conditions
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg">
              To maintain our premier atmosphere, RSVP Exclusive operates a strict dress code,
              code of conduct, and 18+ policy. Ensure your night goes smoothly by reviewing our
              guidelines before your visit.
            </p>

            <div>
              <Link
                href="/club/rules"
                className="inline-block bg-[#9c0200] hover:bg-[#b50300] active:scale-95 text-white font-bold text-sm uppercase tracking-widest py-3.5 px-8 rounded-xl transition-colors"
              >
                Club Rules
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
