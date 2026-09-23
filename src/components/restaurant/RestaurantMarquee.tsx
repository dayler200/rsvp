"use client";

import React from "react";
import Image from "next/image";

const IMAGES = [
  "/marquee/1.png",
  "/marquee/2.png",
  "/marquee/3.png",
  "/marquee/4.png",
  "/marquee/5.png",
  "/marquee/6.png",
];

// Triplicate — gives more than enough runway so the loop is never visible
const TRACK = [...IMAGES, ...IMAGES, ...IMAGES];

export function RestaurantMarquee() {
  return (
    // No bg, no shadow — sits on whatever background is behind it
    <div className="w-full overflow-hidden py-5 sm:py-7">
      <div className="flex animate-marquee-loop">
        {TRACK.map((src, i) => (
          // mr instead of gap so the spacing is included in each item's width
          // → -50% translation is mathematically exact → no visible seam
          <div
            key={i}
            className="relative flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 mr-8 sm:mr-12"
          >
            <Image
              src={src}
              alt={`Dish ${(i % IMAGES.length) + 1}`}
              fill
              sizes="112px"
              className="object-contain select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
