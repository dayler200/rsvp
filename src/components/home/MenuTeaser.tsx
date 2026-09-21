"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Start fast, decelerate smoothly (ease-out) — matches WhoWeAre
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: false, amount: 0.2 } as const;

// Separate opacity (fast) from x/y movement (slow, smooth)
const SLIDE_TRANSITION = (delay = 0) => ({
  x: { duration: 1.6, ease: EASE, delay },
});
const RISE_TRANSITION = (delay = 0) => ({
  y: { duration: 1.5, ease: EASE, delay },
});

export function MenuTeaser() {
  return (
    <section
      id="menu-teaser"
      className="relative overflow-visible z-10"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />

      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_520px_1fr] items-end">

        {/* ─── LEFT: Burger ── slides from left, floats above top border ─ */}
        <motion.div
          initial={{ x: -90 }}
          whileInView={{ x: 0 }}
          viewport={VIEWPORT}
          transition={SLIDE_TRANSITION(0)}
          className="relative w-full hidden lg:block self-start"
          style={{
            height: "480px",
            marginTop: "-28px",  /* overflows just slightly above top border */
            marginBottom: "0px",
          }}
        >
          <Image
            src="/bugger1.png"
            alt="Rendezvous signature burger"
            fill
            sizes="30vw"
            className="object-contain object-top drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* ─── CENTRE: Text + CTA ─────────────────────────────────────── */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={VIEWPORT}
          transition={RISE_TRANSITION(0.2)}
          className="flex flex-col items-start text-left lg:items-center lg:text-center gap-4 py-10 px-5 lg:py-20 lg:px-14 justify-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold tracking-tight text-[var(--text)] leading-[1.15]">
            Crafted to<br />be remembered.
          </h2>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[300px] lg:max-w-[340px]">
            From flame-grilled signatures to handcrafted cocktails, every plate
            and glass at Rendezvous tells a story worth savouring.
          </p>

          {/* Coming soon — menu page not yet built */}
          <button className="mt-2 bg-[#9c0200] hover:bg-[#b50300] text-white font-semibold text-sm py-3 px-7 lg:py-3.5 lg:px-9 rounded-2xl shadow-md active:scale-95 transition-all">
            View Full Menu
          </button>
        </motion.div>

        {/* ─── RIGHT: Waiter — mobile: simple portrait next to text ───── */}
        {/* Mobile only */}
        <div
          className="relative block lg:hidden self-end"
          style={{ height: "300px" }}
        >
          <Image
            src="/waiter.png"
            alt="Rendezvous chef presenting a dish"
            fill
            sizes="50vw"
            className="object-contain object-bottom drop-shadow-xl"
            priority
          />
        </div>

        {/* Desktop only — slides from right, bottom flush with border */}
        <motion.div
          initial={{ x: 90 }}
          whileInView={{ x: 0 }}
          viewport={VIEWPORT}
          transition={SLIDE_TRANSITION(0.12)}
          className="relative w-full hidden lg:block self-end"
          style={{
            height: "460px",
            marginTop: "-60px",
            marginBottom: "0px",
          }}
        >
          <Image
            src="/waiter.png"
            alt="Rendezvous chef presenting a dish"
            fill
            sizes="30vw"
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>

      <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />
    </section>
  );
}
