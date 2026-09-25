"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.1 } as const;

const CARDS = [
  {
    id: "craft-bar",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    alt: "Craft cocktails & signature bar",
  },
  {
    id: "main-floor",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
    alt: "Lounge seating and ambient tables",
  },
  {
    id: "evening-service",
    image:
      "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=800&auto=format&fit=crop",
    alt: "Evening bottle service and social vibe",
  },
  {
    id: "after-dark",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    alt: "After dark lounge atmosphere",
  },
];

export function LoungeCards() {
  return (
    <section
      id="lounge-cards"
      className="py-6 sm:py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full"
    >
      {/* 2x2 on mobile, 4-across on desktop - pure squares, full width, no text */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.6,
              ease: EASE,
              delay: index * 0.07,
            }}
            className={`relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-zinc-100 dark:bg-zinc-800 ${
              index >= 2 ? "hidden lg:block" : ""
            }`}
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-108 select-none"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
