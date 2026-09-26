"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUtensils, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

export function DiningAndLoungeTeaser() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#05141f] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#fd2006] mb-2 block">
              Beyond The Dance Floor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Dine &amp; Unwind
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
            Planning a pre-party dinner or an intimate afternoon drink? Discover our dedicated culinary and cocktail spaces.
          </p>
        </motion.div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-900/60 border border-white/10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/20"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                alt="RSVP Restaurant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.4] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05141f] via-[#05141f]/70 to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/10">
                <FontAwesomeIcon icon={faUtensils} className="w-3 h-3 text-[#fd2006]" />
                Fine Dining
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                The Restaurant
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
                Artisanal flame grills, prime cuts, and curated contemporary cuisine crafted by master chefs for elevated daytime and evening dining.
              </p>
              <div className="pt-2">
                <Link
                  href="/restaurant"
                  className="inline-flex items-center gap-2.5 bg-white text-[#05141f] hover:bg-zinc-200 active:scale-95 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-xl transition-all"
                >
                  <span>Explore Restaurant</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-900/60 border border-white/10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/20"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop"
                alt="RSVP Lounge"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.4] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05141f] via-[#05141f]/70 to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/10">
                <FontAwesomeIcon icon={faMartiniGlassCitrus} className="w-3 h-3 text-[#fd2006]" />
                Cocktails &amp; Ambiance
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                The Lounge
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
                Handcrafted signature mixology, premium bottle service, plush booth seating, and smooth ambient rhythms for sunset conversations.
              </p>
              <div className="pt-2">
                <Link
                  href="/lounge"
                  className="inline-flex items-center gap-2.5 bg-white text-[#05141f] hover:bg-zinc-200 active:scale-95 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-xl transition-all"
                >
                  <span>Explore Lounge</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
