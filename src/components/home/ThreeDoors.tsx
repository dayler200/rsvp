"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

interface DoorCard {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  ctaText: string;
  imageUrl: string;
}

const DOORS: DoorCard[] = [
  {
    id: "restaurant",
    title: "The Restaurant",
    subtitle: "Fine dining & flame grill",
    link: "/restaurant",
    ctaText: "Explore Restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "lounge",
    title: "The Lounge",
    subtitle: "Mixology & ambient sound",
    link: "/lounge",
    ctaText: "Explore Lounge",
    imageUrl:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "club",
    title: "The Club",
    subtitle: "Nightlife & VIP service",
    link: "/club",
    ctaText: "Explore Club",
    imageUrl:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
  },
];

export function ThreeDoors() {
  const { isNight } = useTheme();

  return (
    <section id="three-doors" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* ─── SECTION HEADER ─────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#fd2006]">
            Three Worlds
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-1.5">
            Step through the doors.
          </h2>
        </div>
        <p
          className={`max-w-md text-sm sm:text-base ${
            isNight ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          Choose your space. Each world carries its own atmosphere, rhythm, and hospitality.
        </p>
      </div>

      {/* ─── SLEEK IMAGE CARDS ──────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOORS.map((door, index) => {
          return (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.15,
                delay: index * 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden h-[360px] sm:h-[390px] md:h-[410px] flex flex-col justify-end border border-black/10 dark:border-white/10 shadow-sm"
            >
              {/* Background Image */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                  src={door.imageUrl}
                  alt={door.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Smooth Bottom Gradient Overlay (doesn't go high, fades naturally without visible edge) */}
              <div
                className="relative z-10 w-full px-6 pb-6 pt-12 flex flex-col gap-3.5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 75%, transparent 100%)",
                }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {door.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium tracking-wide mt-0.5">
                    {door.subtitle}
                  </p>
                </div>

                {/* Solid Red Button without arrow */}
                <Link
                  href={door.link}
                  className="w-full bg-[#9c0200] hover:bg-[#b50300] text-white font-semibold text-sm py-3 px-6 rounded-2xl text-center shadow-md active:scale-95 transition-all"
                >
                  {door.ctaText}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
