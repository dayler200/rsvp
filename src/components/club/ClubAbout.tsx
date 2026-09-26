"use client";

import React from "react";
import { motion } from "framer-motion";

export function ClubAbout() {
  return (
    <section
      id="about"
      className="bg-[#05141f] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {/* Header directly matches ABOUT from inspiration */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            About
          </h2>

          {/* Clean paragraph text */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            RSVP Club is Blantyre&apos;s premier nightlife destination, an elevated sanctuary
            crafted for those who demand world-class sound, electric atmosphere, and exceptional
            hospitality. From Thursday to Sunday, our dance floor comes alive with the continent&apos;s
            finest Afrobeats, Amapiano, and house rhythms delivered through a custom-engineered acoustic
            soundstage. Whether celebrating at an exclusive VIP booth or losing yourself in the crowd,
            RSVP delivers an unforgettable night every time you walk through our doors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
