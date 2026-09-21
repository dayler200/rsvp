"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function RestaurantHero() {
  return (
    <section className="pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* ─── HERO CONTENT: No card, no borders, pure clean white background ─── */}
      <div className="relative w-full py-4 sm:py-8">
        {/* Side-by-side on both mobile and desktop */}
        <div className="grid grid-cols-12 gap-3 sm:gap-8 lg:gap-12 items-center">

          {/* Left Column: Burger Image (/bugger1.png) */}
          <div className="col-span-5 sm:col-span-5 lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[200px] sm:h-[320px] md:h-[380px] lg:h-[440px] flex items-center justify-center"
            >
              <Image
                src="/bugger1.png"
                alt="Rendezvous artisanal burger"
                fill
                priority
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 440px"
                className="object-contain drop-shadow-2xl select-none"
              />
            </motion.div>
          </div>

          {/* Right Column: Text & Single View Menu Button */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col justify-center text-left pl-1 sm:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#9c0200] mb-2 sm:mb-3">
                The Restaurant • Rendezvous
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-2 sm:mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Artisanal Cuisine &amp; Flame Grill.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg mb-4 sm:mb-6 font-normal line-clamp-3 sm:line-clamp-none"
            >
              From artisanal flame grills to savory daytime dishes, experience thoughtful culinary dining crafted fresh in the heart of Blantyre.
            </motion.p>

            {/* Exactly one button: View Menu */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Link
                href="/menu"
                className="inline-flex items-center justify-center bg-[#9c0200] hover:bg-[#b50300] text-white text-xs sm:text-sm font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                View Menu
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
