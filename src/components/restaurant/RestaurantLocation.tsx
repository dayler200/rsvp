"use client";

import React, { useEffect, useState } from "react";

const HOURS = [
  { days: "Monday to Friday", open: "10:00 AM", close: "10:00 PM", dayIndex: [1, 2, 3, 4, 5] },
  { days: "Saturday",        open: "09:00 AM", close: "11:00 PM", dayIndex: [6] },
  { days: "Sunday",          open: "10:00 AM", close: "09:00 PM", dayIndex: [0] },
];

function getTodayRow(): number {
  const day = new Date().getDay(); // 0 = Sun, 6 = Sat
  return HOURS.findIndex((row) => row.dayIndex.includes(day));
}

export function RestaurantLocation() {
  const [todayRow, setTodayRow] = useState<number>(-1);

  useEffect(() => {
    setTodayRow(getTodayRow());
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section label */}
      <span className="block text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest text-[#9c0200] mb-3">
        Visit Us
      </span>

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-10 sm:mb-14"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Find Us in the Heart<br className="hidden sm:block" /> of Blantyre.
      </h2>

      {/* Grid: stacked on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* ── LEFT: Info block ── */}
        <div className="flex flex-col gap-8">

          {/* Address */}
          <div className="flex items-start gap-3">
            {/* Pin icon */}
            <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#9c0200]/10 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9c0200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <p className="text-sm sm:text-base font-semibold text-zinc-900">RSVP Restaurant</p>
              <p className="text-sm text-zinc-500 mt-0.5 leading-snug">
                Blantyre City Centre,<br />Blantyre, Malawi
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-200 w-full" />

          {/* Opening Hours */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Opening Hours</p>
            <div className="flex flex-col gap-1.5">
              {HOURS.map((row, idx) => {
                const isToday = idx === todayRow;
                return (
                  <div
                    key={row.days}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors ${
                      isToday
                        ? "bg-[#9c0200]/8"
                        : "bg-zinc-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9c0200] animate-pulse flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          isToday ? "text-zinc-900" : "text-zinc-600"
                        }`}
                      >
                        {row.days}
                      </span>

                    </div>
                    <span
                      className={`text-sm font-semibold tabular-nums ${
                        isToday ? "text-zinc-900" : "text-zinc-500"
                      }`}
                    >
                      {row.open} to {row.close}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone / contact hint */}
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 5.94 5.94l1.06-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <p className="text-sm text-zinc-500">
              Reservations & enquiries, contact us via the{" "}
              <a href="/contact" className="text-[#9c0200] font-semibold underline-offset-2 hover:underline">
                contact page
              </a>
            </p>
          </div>
        </div>

        {/* ── RIGHT: Map embed ── */}
        <div className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
          <iframe
            title="RSVP Restaurant Location — Blantyre, Malawi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30739.35393798887!2d34.97837!3d-15.78636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84a3ebf3bfff3%3A0xe5a1a5e5a5e5a5e5!2sBlantyre%2C%20Malawi!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
