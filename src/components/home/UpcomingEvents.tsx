"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faClock,
  faLocationDot,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../layout/ThemeProvider";

interface EventItem {
  id: string;
  title: string;
  tag: string;
  venueDoor: "The Club" | "The Lounge" | "The Restaurant";
  dateFormatted: string;
  timeFormatted: string;
  description: string;
  coverCharge: string;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "amapiano-groove",
    title: "Amapiano & Afrobeats Pulse",
    tag: "Club Night",
    venueDoor: "The Club",
    dateFormatted: "Friday, 26 Sep",
    timeFormatted: "9:00 PM – Late",
    description: "High energy basslines and the region’s best guest DJs spinning the finest African rhythms.",
    coverCharge: "Free Before 10 PM",
  },
  {
    id: "jazz-cocktail-session",
    title: "Saxophone & Old Fashioneds",
    tag: "Live Music",
    venueDoor: "The Lounge",
    dateFormatted: "Saturday, 27 Sep",
    timeFormatted: "6:30 PM – 10:30 PM",
    description: "Intimate acoustic jazz trio paired with handcrafted smoked cocktails and tapas plates.",
    coverCharge: "Table RSVP Only",
  },
  {
    id: "chef-prime-tasting",
    title: "The Cellar Steak Night",
    tag: "Chef's Table",
    venueDoor: "The Restaurant",
    dateFormatted: "Sunday, 28 Sep",
    timeFormatted: "12:00 PM – 4:00 PM",
    description: "Wood-fired tomahawk steaks and cellar-selected vintage wines for an exceptional Sunday lunch.",
    coverCharge: "A La Carte / Tasting Menu",
  },
  {
    id: "ladies-noir",
    title: "Glamour Noir: Ladies Night",
    tag: "VIP Special",
    venueDoor: "The Lounge",
    dateFormatted: "Wednesday, 1 Oct",
    timeFormatted: "7:00 PM – Late",
    description: "Complimentary welcome signature spritz for groups and curated R&B throwbacks all evening.",
    coverCharge: "Complimentary Entry",
  },
];

export function UpcomingEvents() {
  const { isNight } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* ─── HEADER WITH NAV CONTROLS ───────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#fd2006]">
            Calendar & Evenings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2">
            What&apos;s on at Rendezvous.
          </h2>
        </div>

        {/* Scroll Controls (Tablet/Desktop) & View All */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll events left"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                isNight
                  ? "border-white/15 text-white hover:bg-white/10 active:bg-white/20"
                  : "border-black/15 text-black hover:bg-black/5 active:bg-black/10"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll events right"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                isNight
                  ? "border-white/15 text-white hover:bg-white/10 active:bg-white/20"
                  : "border-black/15 text-black hover:bg-black/5 active:bg-black/10"
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
            </button>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#fd2006] hover:underline ml-2"
          >
            <span>Full Calendar</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ─── HORIZONTAL SCROLL / GRID CONTAINER ──────────────── */}
      <div
        ref={scrollContainerRef}
        className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pt-1"
      >
        {UPCOMING_EVENTS.map((event) => {
          return (
            <motion.div
              key={event.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`flex-none w-[285px] sm:w-[320px] lg:w-auto snap-start flex flex-col justify-between p-6 rounded-3xl border transition-colors ${
                isNight
                  ? "bg-[#111111] border-white/10 text-white"
                  : "bg-white border-black/10 text-zinc-900 shadow-sm"
              }`}
            >
              {/* Event Top Badge & Venue */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#9c0200] text-white">
                    {event.tag}
                  </span>
                  <span
                    className={`text-xs font-medium flex items-center gap-1 ${
                      isNight ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#fd2006]" />
                    {event.venueDoor}
                  </span>
                </div>

                {/* Date & Time chip */}
                <div
                  className={`flex flex-col gap-1 text-xs font-medium mb-3 ${
                    isNight ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCalendarDay} className="w-3 h-3 text-[#fd2006]" />
                    <span>{event.dateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3 text-zinc-400" />
                    <span>{event.timeFormatted}</span>
                  </div>
                </div>

                {/* Event Title & Summary */}
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {event.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                    isNight ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {event.description}
                </p>
              </div>

              {/* Event Bottom: Charge & RSVP Buttons */}
              <div className="pt-4 border-t border-current/10 flex flex-col gap-3">
                <span className="text-[11px] font-medium tracking-wide uppercase opacity-70">
                  {event.coverCharge}
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    href="#reserve"
                    className="flex-1 bg-[#9c0200] hover:bg-[#b50300] text-white text-xs font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                  >
                    <FontAwesomeIcon icon={faTicket} className="w-3 h-3" />
                    <span>RSVP / Table</span>
                  </Link>
                  <a
                    href={`https://wa.me/265882767664?text=${encodeURIComponent(
                      `Hi Rendezvous, I would like to RSVP for "${event.title}" on ${event.dateFormatted}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RSVP via WhatsApp"
                    className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm active:scale-95 transition-transform"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Swipe hint on mobile screens */}
      <div className="lg:hidden flex items-center justify-center gap-1.5 mt-4 text-xs opacity-50">
        <span>← Swipe to explore upcoming dates →</span>
      </div>
    </section>
  );
}
