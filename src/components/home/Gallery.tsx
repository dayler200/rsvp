"use client";

import React from "react";

// 7-card symmetric size progression where each card's inner height matches the neighbor's outer height:
// Card 1: outer (left) 270px -> inner (right) 235px (matches Card 2 outer)
// Card 2: outer (left) 235px -> inner (right) 202px (matches Card 3 outer)
// Card 3: outer (left) 202px -> inner (right) 175px (matches Card 4 outer)
// Card 4: centre card flat 175px on both edges
// Card 5: inner (left) 175px -> outer (right) 202px (matches Card 6 outer)
// Card 6: inner (left) 202px -> outer (right) 235px (matches Card 7 outer)
// Card 7: inner (left) 235px -> outer (right) 270px
const GALLERY = [
  { id: 1, bg: "#8a9e8a", w: 215, hLeft: 270, hRight: 235 }, // LARGE far left
  { id: 2, bg: "#c4b8a8", w: 188, hLeft: 235, hRight: 202 }, // MEDIUM-LARGE
  { id: 3, bg: "#d4c4a0", w: 162, hLeft: 202, hRight: 175 }, // MEDIUM
  { id: 4, bg: "#9ab0b8", w: 140, hLeft: 175, hRight: 175 }, // SMALL centre
  { id: 5, bg: "#b8a8c0", w: 162, hLeft: 175, hRight: 202 }, // MEDIUM
  { id: 6, bg: "#c8a898", w: 188, hLeft: 202, hRight: 235 }, // MEDIUM-LARGE
  { id: 7, bg: "#a8b0a0", w: 215, hLeft: 235, hRight: 270 }, // LARGE far right
];

const GAP = 10; // px between cards

// Helper to generate a smooth rounded trapezoid path for pixel-perfect edge height matching
function createTrapezoidPath(w: number, hLeft: number, hRight: number, r = 22) {
  const h = Math.max(hLeft, hRight);
  const yTopLeft = (h - hLeft) / 2;
  const yBottomLeft = h - yTopLeft;
  const yTopRight = (h - hRight) / 2;
  const yBottomRight = h - yTopRight;

  const slopeTop = (yTopRight - yTopLeft) / w;
  const slopeBottom = (yBottomRight - yBottomLeft) / w;

  return [
    `M 0 ${yTopLeft + r}`,
    `Q 0 ${yTopLeft} ${r} ${yTopLeft + slopeTop * r}`,
    `L ${w - r} ${yTopRight - slopeTop * r}`,
    `Q ${w} ${yTopRight} ${w} ${yTopRight + r}`,
    `L ${w} ${yBottomRight - r}`,
    `Q ${w} ${yBottomRight} ${w - r} ${yBottomRight - slopeBottom * r}`,
    `L ${r} ${yBottomLeft + slopeBottom * r}`,
    `Q 0 ${yBottomLeft} 0 ${yBottomLeft - r}`,
    "Z",
  ].join(" ");
}

export function Gallery() {
  return (
    <section id="gallery" className="pt-16 pb-0 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* SVG Clip Paths for smooth rounded trapezoid cards */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          {GALLERY.map((item) => (
            <clipPath key={item.id} id={`gallery-card-clip-${item.id}`}>
              <path d={createTrapezoidPath(item.w, item.hLeft, item.hRight, 22)} />
            </clipPath>
          ))}
        </defs>
      </svg>

      {/* ── Headline block ────────────────────────────────────────────────────── */}
      <div className="relative max-w-5xl mx-auto text-center px-6 mb-10">
        {/* Decorative slash — left of headline */}
        <span
          aria-hidden="true"
          className="absolute left-[5%] lg:left-[7%] top-[28%] text-5xl text-[var(--text-muted)] select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            display: "inline-block",
            transform: "rotate(-18deg)",
          }}
        >
          /
        </span>

        {/* Decorative note — right of headline */}
        <div
          aria-hidden="true"
          className="absolute right-[4%] lg:right-[6%] top-1 flex flex-col items-center gap-0.5 select-none pointer-events-none"
        >
          <span
            className="text-[0.8rem] text-[var(--text-muted)] leading-snug text-center"
            style={{ fontFamily: "var(--font-body)", fontStyle: "italic", maxWidth: "96px" }}
          >
            Experience<br />Rendezvous
          </span>
          <svg width="38" height="28" viewBox="0 0 38 28" fill="none" aria-hidden className="text-zinc-400">
            <path d="M33 3 C22 3, 7 9, 5 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M2 21 L5 25 L9 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Main headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--text)] leading-[1.1]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A Night Worth<br />Remembering.
        </h2>

        {/* Sub-paragraph */}
        <p
          className="mt-4 text-[var(--text-muted)] text-base leading-relaxed max-w-sm mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Step into Blantyre&apos;s finest dining, lounge and club experience.
          Every visit tells a story worth sharing.
        </p>
      </div>

      {/* ── Static tapered curve of 7 cards ────────────────────────────────────── */}
      <div className="w-full flex justify-center overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center" style={{ gap: GAP }}>
          {GALLERY.map((item) => {
            const maxH = Math.max(item.hLeft, item.hRight);
            return (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{
                  filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))",
                }}
              >
                <div
                  style={{
                    width: item.w,
                    height: maxH,
                    backgroundColor: item.bg,
                    clipPath: `url(#gallery-card-clip-${item.id})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
