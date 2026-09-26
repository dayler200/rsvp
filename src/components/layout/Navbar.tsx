"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "./ThemeProvider";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Lounge", href: "/lounge" },
  { label: "Club", href: "/club" },
  { label: "Menu", href: "/menu" },
];

export function Navbar() {
  const { isNight } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        // Scrolling down -> slide up out of view
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        // Scrolling up -> slide down into place
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── DESKTOP FLOATING NAVBAR (>= 1024px) ─────────────── */}
      <header
        className={`hidden lg:flex fixed top-5 inset-x-0 z-50 justify-center px-4 pointer-events-none transition-transform duration-300 ease-in-out ${
          isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-2.5 rounded-2xl transition-all duration-300 w-full max-w-5xl border-0 border-none shadow-none ${
            isScrolled
              ? isNight
                ? "bg-[#05141f]/90 backdrop-blur-md"
                : "bg-white/90 backdrop-blur-md"
              : isNight
              ? "bg-[#05141f]/60 backdrop-blur-sm"
              : "bg-white/60 backdrop-blur-sm"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="relative h-10 w-36">
              <Image
                src="/rsvp_logo1.png"
                alt="RSVP"
                fill
                sizes="144px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#fd2006] bg-[#fd2006]/15 font-semibold"
                        : isNight
                        ? "text-zinc-300 hover:text-white hover:bg-white/10"
                        : "text-zinc-700 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Reserve CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#reserve"
              className="bg-[#9c0200] hover:bg-[#b50300] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Reserve Table
            </Link>
          </div>
        </nav>
      </header>

      {/* ─── MOBILE FLOATING NAVBAR (< 1024px) ───────────────── */}
      <header
        className={`lg:hidden fixed top-3 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-transform duration-300 ease-in-out ${
          isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between px-4 py-2 rounded-2xl transition-all duration-300 w-full max-w-md border-0 border-none shadow-none ${
            isScrolled || mobileMenuOpen
              ? isNight
                ? "bg-[#05141f]/90 backdrop-blur-md"
                : "bg-white/90 backdrop-blur-md"
              : isNight
              ? "bg-[#05141f]/75 backdrop-blur-sm"
              : "bg-white/75 backdrop-blur-sm"
          }`}
        >
          <Link href="/" className="relative h-8 w-28">
            <Image
              src="/rsvp_logo1.png"
              alt="RSVP"
              fill
              sizes="112px"
              className="object-contain object-left"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={`p-1.5 flex items-center justify-center transition-colors ${
              isNight
                ? "text-white hover:text-zinc-300 active:opacity-70"
                : "text-zinc-900 hover:text-black active:opacity-70"
            }`}
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faXmark : faBars}
              className="w-5 h-5"
            />
          </button>
        </div>
      </header>

      {/* ─── MOBILE FULL-SCREEN OVERLAY MENU ─────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`lg:hidden fixed inset-0 z-40 flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto ${
              isNight ? "bg-[#05141f] text-white" : "bg-[#f5f5f5] text-[#05141f]"
            }`}
          >
            {/* Nav list */}
            <div className="flex flex-col gap-2 my-auto">
              <span
                className={`text-xs uppercase tracking-widest font-semibold mb-2 ${
                  isNight ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Explore RSVP
              </span>

              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-xl text-base font-semibold tracking-tight transition-colors ${
                        isActive
                          ? "text-[#fd2006] bg-[#fd2006]/15 font-bold"
                          : isNight
                          ? "text-white hover:text-[#fd2006]"
                          : "text-black hover:text-[#9c0200]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Special Reserve Link inside menu */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="pt-3"
              >
                <Link
                  href="#reserve"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-[#9c0200] hover:bg-[#b50300] text-white font-semibold text-base active:scale-98 transition-transform"
                >
                  Book a Table / RSVP
                </Link>
              </motion.div>
            </div>

            {/* Quick Contact Info */}
            <div
              className={`pt-6 flex flex-col gap-3 text-sm ${
                isNight ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Direct Line:</span>
                <a
                  href="tel:0882767664"
                  className="inline-flex items-center gap-2 font-medium text-current hover:text-[#fd2006]"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-[#fd2006]" />
                  0882767664
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>WhatsApp Booking:</span>
                <a
                  href="https://wa.me/265882767664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-emerald-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                  Chat with Host
                </a>
              </div>
              <p className="text-xs text-center mt-2 opacity-60">
                Blantyre, Malawi • Restaurant, Lounge & Club
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
