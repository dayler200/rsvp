"use client";

import React from "react";
import Image from "next/image";

const WEEKLY_NIGHTS = [
  {
    id: "thursday",
    title: "Afro Thursday",
    description:
      "High-energy sets spinning contemporary Afrobeats, Afropop, and dancehall anthems till the early morning.",
    image: "/nexttohero.jpg",
  },
  {
    id: "friday",
    title: "Amapiano Friday",
    description:
      "Deep basslines and soulful log drums. The essential sound of the southern continent curated by resident masters.",
    image: "/other.jpg",
  },
  {
    id: "saturday",
    title: "VIP Saturday",
    description:
      "The flagship night. Top-shelf champagne, table reservations, international guest sets, and uncompromised energy.",
    image: "/hero.jpg",
  },
  {
    id: "sunday",
    title: "Sunset Sunday",
    description:
      "Close the weekend with soulful house, chilled disco, and downtempo grooves under ambient club lights.",
    image: "/nexttohero.jpg",
  },
];

// Triplicate the nights for a mathematically seamless infinite loop
const TRACK = [...WEEKLY_NIGHTS, ...WEEKLY_NIGHTS, ...WEEKLY_NIGHTS];

export function ClubEvents() {
  return (
    <section id="events" className="bg-[#0a0a0a] pt-4 sm:pt-8 pb-16 sm:pb-20 overflow-hidden">
      <style>{`
        @keyframes weeklyNightsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-nights-marquee {
          animation: weeklyNightsMarquee 28s linear infinite;
          will-change: transform;
        }
        .animate-nights-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── SECTION HEADER (Clean title with NO badge) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
          Weekly Nights
        </h2>
      </div>

      {/* HORIZONTAL INFINITE LOOP TRACK: CLEAN CARDS NAMED BY DAYS */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-nights-marquee w-max">
          {TRACK.map((night, index) => (
            <div
              key={`${night.id}-${index}`}
              className="group relative shrink-0 w-[220px] sm:w-[260px] md:w-[280px] h-[310px] sm:h-[350px] md:h-[380px] mr-4 sm:mr-6 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-end select-none shadow-xl"
            >
              {/* THE IMAGE IS THE CARD (Fills 100% of the upright rectangle card) */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                  src={night.image}
                  alt={night.title}
                  fill
                  unoptimized
                  sizes="280px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Smooth Bottom Gradient Overlay with Direct Event Day Name */}
              <div
                className="relative z-10 w-full px-4 sm:px-5 pb-4 sm:pb-5 pt-14 flex flex-col gap-1"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)",
                }}
              >
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white leading-tight">
                  {night.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-300 leading-snug line-clamp-2 mt-0.5">
                  {night.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
