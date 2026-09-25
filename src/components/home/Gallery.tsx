"use client";

import React, { useRef, useLayoutEffect } from "react";

// 7-card symmetric size progression:
// Card 1: outer (left) 270px -> inner (right) 235px (matches Card 2 outer)
// Card 2: outer (left) 235px -> inner (right) 202px (matches Card 3 outer)
// Card 3: outer (left) 202px -> inner (right) 175px (matches Card 4 outer)
// Card 4: centre card flat 175px on both edges (compact focal point)
// Card 5: inner (left) 175px -> outer (right) 202px (matches Card 6 outer)
// Card 6: inner (left) 202px -> outer (right) 235px (matches Card 7 outer)
// Card 7: inner (left) 235px -> outer (right) 270px
const GALLERY = [
  {
    id: 1,
    bg: "#8a9e8a",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    w: 215,
    hLeft: 270,
    hRight: 235,
  }, // LARGE far left
  {
    id: 2,
    bg: "#c4b8a8",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    w: 188,
    hLeft: 235,
    hRight: 202,
  }, // MEDIUM-LARGE
  {
    id: 3,
    bg: "#d4c4a0",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    w: 162,
    hLeft: 202,
    hRight: 175,
  }, // MEDIUM
  {
    id: 4,
    bg: "#9ab0b8",
    img: "/bugger1.png",
    w: 140,
    hLeft: 175,
    hRight: 175,
  }, // SMALL centre
  {
    id: 5,
    bg: "#b8a8c0",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    w: 162,
    hLeft: 175,
    hRight: 202,
  }, // MEDIUM
  {
    id: 6,
    bg: "#c8a898",
    img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
    w: 188,
    hLeft: 202,
    hRight: 235,
  }, // MEDIUM-LARGE
  {
    id: 7,
    bg: "#a8b0a0",
    img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop",
    w: 215,
    hLeft: 235,
    hRight: 270,
  }, // LARGE far right
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

const MOBILE_GALLERY = [...GALLERY, ...GALLERY, ...GALLERY];

export function Gallery() {
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    // Start centered on Card 4 of the middle set (index 10 = middle of 21 items)
    const middleCenterCard = mobileCardsRef.current[10];
    if (middleCenterCard) {
      track.scrollLeft =
        middleCenterCard.offsetLeft +
        middleCenterCard.offsetWidth / 2 -
        track.clientWidth / 2;
    }

    const onScroll = () => {
      const card0 = mobileCardsRef.current[0];
      const card7 = mobileCardsRef.current[7];
      if (!card0 || !card7) return;

      const singleCycleWidth = card7.offsetLeft - card0.offsetLeft;
      if (singleCycleWidth <= 0) return;

      // Invisible teleport when reaching outer boundaries
      if (track.scrollLeft < singleCycleWidth * 0.5) {
        track.scrollLeft += singleCycleWidth;
      } else if (track.scrollLeft > singleCycleWidth * 1.5) {
        track.scrollLeft -= singleCycleWidth;
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="gallery" className="pt-16 pb-6 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* SVG Clip Paths for smooth rounded trapezoid cards (Desktop & Mobile) */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          {GALLERY.map((item) => (
            <React.Fragment key={item.id}>
              {/* Desktop Clip Path */}
              <clipPath id={`gallery-card-clip-${item.id}`}>
                <path d={createTrapezoidPath(item.w, item.hLeft, item.hRight, 22)} />
              </clipPath>
              {/* Mobile Clip Path (scaled ~0.8x with rounded tapered top) */}
              <clipPath id={`gallery-mobile-card-clip-${item.id}`}>
                <path
                  d={createTrapezoidPath(
                    Math.round(item.w * 0.8),
                    Math.round(item.hLeft * 0.8),
                    Math.round(item.hRight * 0.8),
                    18
                  )}
                />
              </clipPath>
            </React.Fragment>
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
          A Place Worth<br />Remembering.
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

      {/* ── MOBILE TOUCH-SCROLL CAROUSEL (< 1024px) ──────────────────────────── */}
      <div
        ref={mobileTrackRef}
        className="lg:hidden w-full overflow-x-auto scrollbar-hide py-10 flex items-center select-none"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "calc(50vw - 56px)",
          paddingRight: "calc(50vw - 56px)",
        }}
      >
        <div className="flex items-center gap-3">
          {MOBILE_GALLERY.map((item, idx) => {
            const mW = Math.round(item.w * 0.8);
            const mMaxH = Math.round(Math.max(item.hLeft, item.hRight) * 0.8);

            return (
              <div
                key={`${item.id}-${idx}`}
                ref={(el) => {
                  mobileCardsRef.current[idx] = el;
                }}
                className="flex-shrink-0 will-change-transform transition-transform duration-75 relative"
                style={{
                  scrollSnapAlign: "center",
                  filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))",
                }}
              >
                <div
                  style={{
                    width: `${mW}px`,
                    height: `${mMaxH}px`,
                    backgroundColor: item.bg,
                    clipPath: `url(#gallery-mobile-card-clip-${item.id})`,
                  }}
                  className="relative overflow-hidden"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`Rendezvous Gallery ${item.id}`}
                      className="w-full h-full object-cover pointer-events-none select-none"
                      loading="lazy"
                    />
                  )}
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP STATIC TAPERED CURVE (>= 1024px) ─────────────────────────── */}
      <div className="w-full hidden lg:flex justify-center overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
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
                  className="relative overflow-hidden"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`Rendezvous Gallery ${item.id}`}
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
