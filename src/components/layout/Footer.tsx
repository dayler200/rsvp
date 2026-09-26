"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../layout/ThemeProvider";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Lounge", href: "/lounge" },
  { label: "About", href: "/#about" },
  { label: "Rules & Guidelines", href: "/club/rules" },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/rendezvous_exclusive.bt",
    icon: faInstagram,
    color: "hover:text-pink-500 hover:border-pink-500/30",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: faFacebookF,
    color: "hover:text-blue-500 hover:border-blue-500/30",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: faXTwitter,
    color: "hover:text-zinc-400 hover:border-white/30",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: faTiktok,
    color: "hover:text-cyan-400 hover:border-cyan-400/30",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/265882767664",
    icon: faWhatsapp,
    color: "hover:text-emerald-500 hover:border-emerald-500/30",
  },
];

export function Footer({ forceDark = false }: { forceDark?: boolean } = {}) {
  const pathname = usePathname();
  const isClubRoute = pathname === "/" || pathname === "/club" || pathname?.startsWith("/club");
  const isForced = forceDark || isClubRoute;
  const { isNight, mounted } = useTheme();
  const effectiveNight = isForced || isNight;

  // isForced is a static route check so it's safe to use directly.
  const logoSrc = isForced
    ? "/rsvp_logowhite.png"
    : (mounted && isNight ? "/rsvp_logowhite.png" : "/rsvp_logoblack.png");

  const linkColor   = effectiveNight ? "text-zinc-300 hover:text-[#fd2006]" : "text-zinc-700 hover:text-[#fd2006]";
  const mutedColor  = effectiveNight ? "text-zinc-400" : "text-zinc-400";
  const brandText   = effectiveNight ? "text-zinc-100" : "text-zinc-800";
  const svgFill     = effectiveNight ? "text-white fill-white" : "text-zinc-950 fill-zinc-950";
  const borderColor = effectiveNight ? "border-zinc-800" : "border-zinc-200/80";
  const bg          = effectiveNight ? "bg-[#05141f] text-zinc-100" : "bg-white text-zinc-900";

  return (
    <footer className={`w-full pt-16 pb-0 overflow-hidden ${bg} ${isForced ? "force-dark" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ─── DESKTOP UPPER CONTENT (>= 1024px) ────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 pb-10 items-start">
          {/* Column 1: Brand Statement (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className={`text-xl sm:text-2xl font-semibold tracking-tight leading-snug max-w-sm ${brandText}`}>
                RSVP is Blantyre&apos;s premier bar and nightclub crafted for electric nightlife, world-class sound, and elevated dining.
              </p>
            </div>
            <div className={`mt-6 flex items-center gap-2 text-xs font-medium ${mutedColor}`}>
              <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-[#fd2006]" />
              <span>Blantyre, Malawi</span>
              <span className="mx-1">•</span>
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-[#fd2006]" />
              <span>11:30 AM – Late</span>
            </div>
          </div>

          {/* Column 2: Explore Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-widest font-bold mb-4 ${mutedColor}`}>
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium transition-colors">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`${linkColor} transition-colors`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow us — Icons only (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs uppercase tracking-widest font-bold mb-4 ${mutedColor}`}>
              Follow us
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
                    effectiveNight
                      ? "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10"
                      : "border-black/10 bg-black/5 text-zinc-700 hover:bg-black/10"
                  } ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Big Logo (Span 3) */}
          <div className="lg:col-span-3 flex items-center justify-end">
            <div className="relative h-28 sm:h-36 w-full max-w-[260px] shrink-0">
              <Image
                src={logoSrc}
                alt="RSVP"
                fill
                sizes="(max-width: 768px) 260px, 260px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>

        {/* ─── MOBILE UPPER CONTENT (< 1024px) ─────────────────── */}
        <div className="lg:hidden flex flex-col gap-8 pb-10">
          {/* Brand Statement */}
          <div>
            <p className={`text-xl font-semibold tracking-tight leading-snug ${brandText}`}>
              RSVP is Blantyre&apos;s premier bar and nightclub crafted for electric nightlife, world-class sound, and elevated dining.
            </p>
            <div className={`mt-4 flex flex-wrap items-center gap-2 text-xs font-medium ${mutedColor}`}>
              <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-[#fd2006]" />
              <span>Blantyre, Malawi</span>
              <span className="mx-1">•</span>
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-[#fd2006]" />
              <span>11:30 AM – Late</span>
            </div>
          </div>

          {/* Side-by-Side: Explore Links & Big Logo */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Left: Explore */}
            <div>
              <h4 className={`text-xs uppercase tracking-widest font-bold mb-3 ${mutedColor}`}>
                Explore
              </h4>
              <ul className="flex flex-col gap-2 text-sm font-medium">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`${linkColor} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Big Logo */}
            <div className="flex items-center justify-center">
              <div className="relative h-28 w-full max-w-[180px]">
                <Image
                  src={logoSrc}
                  alt="RSVP"
                  fill
                  sizes="180px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Social Icons — Centered Horizontally */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <h4 className={`text-xs uppercase tracking-widest font-bold ${mutedColor}`}>
              Follow us
            </h4>
            <div className="flex items-center justify-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
                    effectiveNight
                      ? "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10"
                      : "border-black/10 bg-black/5 text-zinc-700 hover:bg-black/10"
                  } ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── BOTTOM WORD: RENDEZVOUS ───────────────────────────────────────── */}
        <div className="w-full overflow-hidden pt-6 select-none pointer-events-none -mb-2 sm:-mb-3 md:-mb-4">
          <svg
            viewBox="0 0 1000 130"
            className={`w-full h-auto fill-current block footer-wordmark ${svgFill}`}
            aria-label="RSVP"
            role="img"
          >
            <text
              x="0"
              y="124"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              className="font-black uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "155px",
              }}
            >
              rsvp
            </text>
          </svg>
        </div>

        {/* Micro Bottom Line */}
        <div className={`py-5 text-center text-xs ${mutedColor}`}>
          <p>© {new Date().getFullYear()} RSVP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
