"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function RestaurantFeatures() {
  return (
    <section className="pt-4 pb-8 sm:py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* ─── ABOUT THE RESTAURANT: Sits directly on main background, no borders, no shadows, no buttons ─── */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left: Rich Story & Explanation of the Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:col-span-6 lg:col-span-6 flex flex-col justify-center"
          >

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              An Elevated Culinary Experience Born in Blantyre.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed font-normal">
              <p>
                RSVP Restaurant was founded with a singular ambition: to redefine dining in Malawi by combining contemporary gastronomy with the timeless warmth of open-fire hospitality.
              </p>
              <p>
                Every morning, our kitchen comes alive with farm-fresh herbs, highland greens, and prime cuts hand-selected from trusted regional producers. Over glowing woodfire coals, our culinary team transforms premium ingredients into plates that celebrate flavor, balance, and artistry.
              </p>
              <p className="text-zinc-600">
                Whether you are joining us for an unhurried afternoon lunch or an intimate dinner gathering, RSVP provides an inviting sanctuary where every meal becomes a memorable occasion.
              </p>
            </div>
          </motion.div>

          {/* Right: Gourmet Presentation Image (Fills correctly with smooth rounded corners) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-6 lg:col-span-6 relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              alt="Artisanal flame-grilled culinary dish"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover select-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
