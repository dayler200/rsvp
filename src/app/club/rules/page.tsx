"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function ClubRulesPage() {
  useEffect(() => {
    const html = document.documentElement;
    const previousTheme = html.getAttribute("data-theme");

    // Force night theme for this page
    html.setAttribute("data-theme", "night");

    return () => {
      if (previousTheme) {
        html.setAttribute("data-theme", previousTheme);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#05141f] text-[#f5f5f5]"
      style={
        {
          "--bg": "#05141f",
          "--text": "#f5f5f5",
          "--text-muted": "#aaaaaa",
          "--surface": "#111111",
          "--border": "#222222",
        } as React.CSSProperties
      }
    >
      <main className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        {/* ── TOP NAV / BACK LINK ── */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/club"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9c0200] hover:text-[#b50300] transition-colors"
          >
            <span>←</span>
            <span>Back to The Club</span>
          </Link>
        </div>

        {/* ── BRAND LOGO & HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center mb-12 sm:mb-16"
        >
          {/* Logo */}
          <div className="relative w-40 sm:w-48 h-16 sm:h-20 mb-4">
            <Image
              src="/rsvp_logo1.png"
              alt="RSVP Exclusive"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-zinc-400 mb-2">
            RSVP Exclusive • Restaurant, Lounge &amp; Club
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#9c0200] mt-1">
            Nightlife Terms &amp; Conditions
          </h1>

          <p className="mt-4 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed">
            To ensure an elevated, safe, and world-class atmosphere for all patrons, RSVP
            operates under strict house rules. Please review our entry and conduct guidelines below.
          </p>
        </motion.div>

        {/* ── RULES CARDS (CONVERTED FROM THE FLYER IN PURE CODE) ── */}
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* 1. ADMISSION RESTRICTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200]">
                Admission Restrictions
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#9c0200]/20 text-[#fd2006] border border-[#9c0200]/40">
                18+ Only
              </span>
            </div>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Age Verification: </span>
              Entry is strictly restricted to persons over 18+ years of age. A valid physical government-issued photo ID (passport, national ID, or driver&apos;s license) must be presented upon entry.
            </div>
          </motion.div>

          {/* 2. CODE OF CONDUCT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200]">
                Code of Conduct
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-950/40 text-red-400 border border-red-800/40">
                Zero Tolerance
              </span>
            </div>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Zero Tolerance: </span>
              Harassment, violence, unruly behavior, or possession of weapons (firearms, knives, tasers, pepper spray, etc.) is strictly prohibited. Violators will face immediate ejection and permanent bans.
            </div>
          </motion.div>

          {/* 3. DRESS CODE ENFORCEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200]">
                Dress Code Enforcement
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-white/10">
                Strictly Enforced
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* MEN */}
              <div className="bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
                  Men
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Smart-casual attire required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Covered shoes only</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-400">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>No vests</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-400">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>No slippers or flip-flops</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-400">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Mini-shorts strictly not allowed</span>
                  </li>
                </ul>
              </div>

              {/* WOMEN */}
              <div className="bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
                  Women
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Heels and clean stylish sneakers highly recommended</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Dress to kill</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Fashionable smart-casual</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9c0200] font-bold">✓</span>
                    <span>Trendy going-out tops</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-400">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>No open slippers or flip-flops</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. RESERVATIONS & VIP TABLES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200] mb-3">
              Reservations &amp; VIP Tables
            </h2>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Minimum Spend: </span>
              A minimum spend is strictly enforced per VIP booth/table as agreed at the time of reservation. Table reservations are held for a maximum of 30 minutes past confirmed booking time before release.
            </div>
          </motion.div>

          {/* 5. RESPONSIBLE SERVICE OF ALCOHOL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-3"
          >
            <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200]">
              Responsible Service of Alcohol
            </h2>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Refusal of Service: </span>
              The venue reserves the right to refuse alcohol service to any intoxicated or disorderly patrons.
            </div>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Removal Policy: </span>
              Intoxicated or disruptive guests will be escorted out by venue security for the comfort and safety of all patrons.
            </div>
          </motion.div>

          {/* 6. MEDIA CONSENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="bg-zinc-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <h2 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#9c0200] mb-3">
              Media Consent
            </h2>
            <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              <span className="font-bold text-[#9c0200]">Crowd Footage: </span>
              By entering RSVP, you consent to being photographed, filmed, and recorded as part of the crowd. Media may be used across our official marketing and social channels.
            </div>
          </motion.div>

        </div>

        {/* ── FOOTER BAR NOTE ── */}
        <div className="mt-12 sm:mt-16 text-center flex flex-col items-center gap-3 border-t border-zinc-800 pt-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400">
            Follow us: <span className="text-white">@RSVPExclusive</span>
          </p>
          <p className="text-[11px] text-zinc-500">
            Terms &amp; Conditions Apply • RSVP Exclusive Management Reserves All Rights.
          </p>
        </div>
      </main>

      <Footer forceDark />
    </div>
  );
}
