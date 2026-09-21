"use client";

import React from "react";
import Image from "next/image";

export function RestaurantBento() {
  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* ─── 3-COLUMN MOSAIC (Maintained side-by-side on all screens) ─── */}
      <div className="grid grid-cols-12 gap-2.5 sm:gap-4 md:gap-5 items-stretch">

        {/* ─── COLUMN 1 (Left ~25%): Card 1 is completely the waiter image ─── */}
        <div className="col-span-3 flex flex-col gap-2.5 sm:gap-4 md:gap-5">
          {/* Card 1-A: Completely an image using /waiter.png */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f0ecf5] h-40 sm:h-60 md:h-72 lg:h-80 flex items-end justify-center">
            <Image
              src="/waiter.png"
              alt="Rendezvous service and hospitality"
              fill
              sizes="(max-width: 640px) 25vw, 20vw"
              className="object-contain object-bottom drop-shadow-md select-none"
            />
          </div>

          {/* Card 1-B: Shorter Sage-Green Rounded Shape with Cupcake */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#dce7d9] h-28 sm:h-40 md:h-48 lg:h-52 flex items-center justify-center">
            <div className="relative w-[85%] h-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=600&auto=format&fit=crop"
                alt="Artisanal delicacy"
                fill
                sizes="(max-width: 640px) 25vw, 20vw"
                className="object-contain drop-shadow-sm select-none"
              />
            </div>
          </div>
        </div>

        {/* ─── COLUMN 2 (Middle ~50%): Text card on top with more words, platter photo on bottom ─── */}
        <div className="col-span-6 flex flex-col gap-2.5 sm:gap-4 md:gap-5">
          {/* Card 2-A: Middle Top Card with Rich Culinary Description */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#ded7e8] p-3 sm:p-5 md:p-6 h-28 sm:h-40 md:h-48 lg:h-52 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                <span className="text-[0.55rem] sm:text-[0.7rem] md:text-xs font-bold uppercase tracking-wider text-[#9c0200]">
                  Culinary Philosophy
                </span>
                <span className="text-[0.5rem] sm:text-xs font-semibold bg-white/70 px-2 py-0.5 rounded-full text-zinc-700">
                  Daily Selection
                </span>
              </div>
              <h3 className="text-[0.75rem] sm:text-lg md:text-xl font-extrabold text-zinc-900 tracking-tight leading-tight line-clamp-1 sm:line-clamp-2">
                Prime Cuts, Woodfire Grills &amp; Modern Craft
              </h3>
              <p className="text-[0.55rem] sm:text-xs md:text-sm text-zinc-700 mt-1 leading-relaxed font-normal line-clamp-2 sm:line-clamp-4">
                At Rendezvous, each plate is an exploration of texture and aroma. We combine aged dry cuts, locally sourced produce from the Shire highlands, and slow woodfire roasting to deliver dishes that linger on the palate.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[0.55rem] sm:text-xs font-bold text-zinc-900">
                Crafted Fresh Every Day
              </span>
            </div>
          </div>

          {/* Card 2-B: Full-Bleed Platter Image with Floating Pill */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden h-40 sm:h-60 md:h-72 lg:h-80">
            <Image
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=900&auto=format&fit=crop"
              alt="Chef's fresh tasting platter"
              fill
              sizes="(max-width: 640px) 50vw, 40vw"
              className="object-cover select-none"
            />
            {/* Floating White Pill at bottom */}
            <div className="absolute bottom-2 sm:bottom-3.5 inset-x-2 sm:inset-x-4 flex justify-center pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[0.6rem] sm:text-xs font-bold text-zinc-800">
                  Serving Fresh Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── COLUMN 3 (Right ~25%): Full-bleed image top, bottom-right describes the restaurant ─── */}
        <div className="col-span-3 flex flex-col gap-2.5 sm:gap-4 md:gap-5">
          {/* Card 3-A: Pure Image (No text, no borders) */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ebebeb] h-40 sm:h-60 md:h-72 lg:h-80">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
              alt="Stacked gourmet pastries"
              fill
              sizes="(max-width: 640px) 25vw, 20vw"
              className="object-cover select-none"
            />
          </div>

          {/* Card 3-B: Bottom-Right describing the restaurant */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#feeeda] via-[#fbdce0] to-[#f7ccd5] p-2.5 sm:p-4 md:p-5 h-28 sm:h-40 md:h-48 lg:h-52 flex flex-col justify-between">
            <div>
              <span className="block text-[0.5rem] sm:text-[0.65rem] md:text-xs font-bold uppercase tracking-wider text-[#9c0200]">
                About The Space
              </span>
              <h4 className="text-[0.65rem] sm:text-sm md:text-base font-extrabold text-zinc-900 leading-tight mt-0.5">
                The Rendezvous Dining Room
              </h4>
              <p className="text-[0.5rem] sm:text-xs text-zinc-700 mt-1 font-normal leading-snug line-clamp-3 sm:line-clamp-4">
                An intimate setting designed for shared laughter, refined business lunches, and romantic dinners beneath warm ambient lighting.
              </p>
            </div>

            <div>
              <span className="inline-block bg-white/90 text-zinc-900 text-[0.5rem] sm:text-[0.65rem] md:text-xs font-bold px-2 py-0.5 rounded-full shadow-xs">
                Fine Dining
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
