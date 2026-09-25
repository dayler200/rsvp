"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// 7-card symmetric size progression (identical to Home, Restaurant & Lounge Galleries)
const GALLERY = [
  {
    id: 1,
    bg: "#1a1200",
    img: "/nexttohero.jpg",
    w: 215,
    hLeft: 270,
    hRight: 235,
  },
  {
    id: 2,
    bg: "#141414",
    img: "/other.jpg",
    w: 188,
    hLeft: 235,
    hRight: 202,
  },
  {
    id: 3,
    bg: "#241010",
    img: "/hero.jpg",
    w: 162,
    hLeft: 202,
    hRight: 175,
  },
  {
    id: 4,
    bg: "#101e18",
    img: "/nexttohero.jpg",
    w: 140,
    hLeft: 175,
    hRight: 175,
  },
  {
    id: 5,
    bg: "#1e1026",
    img: "/other.jpg",
    w: 162,
    hLeft: 175,
    hRight: 202,
  },
  {
    id: 6,
    bg: "#261208",
    img: "/hero.jpg",
    w: 188,
    hLeft: 202,
    hRight: 235,
  },
  {
    id: 7,
    bg: "#1c1410",
    img: "/nexttohero.jpg",
    w: 215,
    hLeft: 235,
    hRight: 270,
  },
];

const GAP = 10;

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

const MOBILE_SCALE = 0.8;

export function ClubGallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <section id="club-gallery" className="pt-16 pb-12 overflow-hidden bg-[#0a0a0a]">
      {/* SVG Clip Paths for trapezoid cards (Desktop & Mobile) */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          {GALLERY.map((item) => {
            const mW = Math.round(item.w * MOBILE_SCALE);
            const mHLeft = Math.round(item.hLeft * MOBILE_SCALE);
            const mHRight = Math.round(item.hRight * MOBILE_SCALE);
            return (
              <React.Fragment key={item.id}>
                <clipPath id={`cg-card-clip-${item.id}`}>
                  <path d={createTrapezoidPath(item.w, item.hLeft, item.hRight, 22)} />
                </clipPath>
                <clipPath id={`cg-mobile-card-clip-${item.id}`}>
                  <path d={createTrapezoidPath(mW, mHLeft, mHRight, 16)} />
                </clipPath>
              </React.Fragment>
            );
          })}
        </defs>
      </svg>

      {/* Headline block */}
      <div className="relative max-w-5xl mx-auto text-center px-6 mb-10">
        <span
          aria-hidden="true"
          className="absolute left-[5%] lg:left-[7%] top-[28%] text-5xl text-zinc-600 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            display: "inline-block",
            transform: "rotate(-18deg)",
          }}
        >
          /
        </span>

        <div
          aria-hidden="true"
          className="absolute right-[4%] lg:right-[6%] top-1 flex flex-col items-center gap-0.5 select-none pointer-events-none"
        >
          <span
            className="text-[0.8rem] text-zinc-400 leading-snug text-center"
            style={{ fontFamily: "var(--font-body)", fontStyle: "italic", maxWidth: "96px" }}
          >
            Experience<br />Rendezvous
          </span>
          <svg width="38" height="28" viewBox="0 0 38 28" fill="none" aria-hidden className="text-[#9c0200]">
            <path d="M33 3 C22 3, 7 9, 5 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M2 21 L5 25 L9 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Inside<br />Rendezvous club.
        </h2>

        <p
          className="mt-4 text-zinc-400 text-base leading-relaxed max-w-sm mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A glimpse into the sound, electric energy, and moments that define our dance floor.
        </p>
      </div>

      {/* ── MOBILE EMBLA CAROUSEL (< 1024px) ── */}
      <div className="lg:hidden overflow-hidden py-8" ref={emblaRef}>
        <div className="flex items-center gap-3">
          {GALLERY.map((item) => {
            const mW = Math.round(item.w * MOBILE_SCALE);
            const mHLeft = Math.round(item.hLeft * MOBILE_SCALE);
            const mHRight = Math.round(item.hRight * MOBILE_SCALE);
            const mMaxH = Math.max(mHLeft, mHRight);

            return (
              <div
                key={item.id}
                className="flex-none"
                style={{
                  width: `${mW}px`,
                  filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4))",
                }}
              >
                <div
                  style={{
                    width: `${mW}px`,
                    height: `${mMaxH}px`,
                    backgroundColor: item.bg,
                    clipPath: `url(#cg-mobile-card-clip-${item.id})`,
                  }}
                  className="relative overflow-hidden"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`Rendezvous Club ${item.id}`}
                      className="w-full h-full object-cover pointer-events-none select-none"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP STATIC TAPERED CURVE (>= 1024px) */}
      <div className="w-full hidden lg:flex justify-center overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center" style={{ gap: GAP }}>
          {GALLERY.map((item) => {
            const maxH = Math.max(item.hLeft, item.hRight);
            return (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4))" }}
              >
                <div
                  style={{
                    width: item.w,
                    height: maxH,
                    backgroundColor: item.bg,
                    clipPath: `url(#cg-card-clip-${item.id})`,
                  }}
                  className="relative overflow-hidden"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`Rendezvous Club ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
