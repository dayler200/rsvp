"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../layout/ThemeProvider";

export function ReservationTeaser() {
  const { isNight } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    space: "restaurant",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const spaceNames: Record<string, string> = {
      restaurant: "The Restaurant",
      lounge: "The Lounge",
      club: "The Club (VIP Booth)",
    };
    const text = `Hi RSVP, I would like to reserve a table:\n- Name: ${formData.name || "Guest"}\n- Space: ${spaceNames[formData.space] || formData.space}\n- Guests: ${formData.guests}\n- Date: ${formData.date || "Upcoming"}\n- Time: ${formData.time}\n- Phone: ${formData.phone || "N/A"}${formData.notes ? `\n- Notes: ${formData.notes}` : ""}`;
    return `https://wa.me/265882767664?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="reserve"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-current/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Secure your table.
            </h2>
          </div>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isNight ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Whether planning an intimate dinner, celebratory lounge gathering, or bottle service in the club, our hosting desk ensures your table is waiting.
          </p>

          {/* Image fills the remaining column height to match the form card */}
          <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
              alt="RSVP dining experience"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Reservation Form */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Mobile Action Buttons (< 1024px) */}
          <div className="lg:hidden grid grid-cols-2 gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setMobileFormOpen((prev) => !prev)}
              className="bg-[#9c0200] hover:bg-[#b50300] text-white text-xs sm:text-sm font-semibold py-3.5 px-3 sm:px-4 rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm transition-all active:scale-98 text-center"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">Reserve Form</span>
              <FontAwesomeIcon
                icon={mobileFormOpen ? faChevronUp : faChevronDown}
                className="w-3 h-3 opacity-80 flex-shrink-0 ml-0.5"
              />
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold py-3.5 px-3 sm:px-4 rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm transition-all active:scale-98 text-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">WhatsApp Direct</span>
            </a>
          </div>

          {/* Form Card: Always open on lg:, dropdown on mobile (< lg:) */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              mobileFormOpen ? "block" : "hidden lg:block"
            } ${
              isNight
                ? "bg-[#111111] border-white/10 text-white"
                : "bg-white border-black/10 text-zinc-900 shadow-sm"
            }`}
          >
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Reservation Request Received</h3>
                <p className={`text-sm max-w-md ${isNight ? "text-zinc-400" : "text-zinc-600"}`}>
                  Thank you, <strong>{formData.name}</strong>. Our host will confirm availability shortly via call or WhatsApp.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                    <span>Send details via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="border border-current/20 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/5"
                  >
                    New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Request Table Reservation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Kondwani Phiri"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-black/50 border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="088..."
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-black/50 border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Space Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Preferred World
                    </label>
                    <select
                      name="space"
                      value={formData.space}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-[#161616] border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    >
                      <option value="restaurant">The Restaurant</option>
                      <option value="lounge">The Lounge</option>
                      <option value="club">The Club (VIP)</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-[#161616] border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5-8">5 to 8 People</option>
                      <option value="9+">9+ (Group / VIP)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-black/50 border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                        isNight
                          ? "bg-[#161616] border-white/15 text-white"
                          : "bg-zinc-50 border-black/15 text-black"
                      }`}
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:00">1:00 PM (Lunch)</option>
                      <option value="13:30">1:30 PM (Lunch)</option>
                      <option value="14:00">2:00 PM (Lunch)</option>
                      <option value="18:00">6:00 PM (Dinner)</option>
                      <option value="18:30">6:30 PM (Dinner)</option>
                      <option value="19:00">7:00 PM (Dinner)</option>
                      <option value="19:30">7:30 PM (Dinner)</option>
                      <option value="20:00">8:00 PM (Dinner / Lounge)</option>
                      <option value="20:30">8:30 PM (Dinner / Lounge)</option>
                      <option value="21:00">9:00 PM (Lounge / Club)</option>
                      <option value="22:00">10:00 PM (Club / VIP)</option>
                      <option value="23:00">11:00 PM (Club / VIP)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    name="notes"
                    placeholder="Birthday celebration, dietary preference, quiet corner..."
                    value={formData.notes}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#fd2006] ${
                      isNight
                        ? "bg-black/50 border-white/15 text-white"
                        : "bg-zinc-50 border-black/15 text-black"
                    }`}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#9c0200] hover:bg-[#b50300] text-white text-sm font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-sm"
                  >
                    <FontAwesomeIcon icon={faCalendarCheck} className="w-4 h-4" />
                    <span>Submit Reservation</span>
                  </button>

                  {/* WhatsApp Direct button shown only on desktop form because mobile has it directly above */}
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-3.5 px-6 rounded-xl items-center justify-center gap-2 transition-colors"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
