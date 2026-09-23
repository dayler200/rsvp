"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../layout/ThemeProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.1 } as const;

const CARDS = [
  {
    id: "craft-bar",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    title: "The Craft Bar",
    descriptor: "Signature cocktails",
  },
  {
    id: "main-floor",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
    title: "The Main Floor",
    descriptor: "Lounge seating",
  },
  {
    id: "evening-service",
    image:
      "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=800&auto=format&fit=crop",
    title: "Evening Service",
    descriptor: "Bottle reservations",
  },
  {
    id: "after-dark",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    title: "After Dark",
    descriptor: "Late night sessions",
  },
];

export function LoungeCards() {
  const { isNight } = useTheme();
  const muted = isNight ? "text-zinc-400" : "text-zinc-500";

  return (
    <section
      id="lounge-cards"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* 2x2 on mobile (gap matches hero gap-4), 4-across on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.65,
              ease: EASE,
              delay: index * 0.08,
            }}
            className="flex flex-col gap-3"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Card text */}
            <div className="flex flex-col gap-0.5 px-0.5">
              <p className="text-sm sm:text-base font-semibold tracking-tight">
                {card.title}
              </p>
              <p className={`text-xs sm:text-sm ${muted}`}>
                {card.descriptor}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
