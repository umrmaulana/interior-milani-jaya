"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-2 px-4" : "py-5 px-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center h-[56px] transition-all duration-700 ease-out overflow-hidden ${
            scrolled
              ? "max-w-4xl justify-between gap-4 px-5 rounded-full border border-[#C9A96E]/15 bg-[#0D0907]/70 backdrop-blur-2xl shadow-[0_0_30px_rgba(201,169,110,0.06),inset_0_1px_0_rgba(255,255,255,0.03)]"
              : "max-w-7xl justify-between px-2 bg-transparent"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="Milani Interior"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-8" : "h-10"
              }`}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${scrolled ? "gap-0" : "gap-1"}`}
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative text-white/60 hover:text-[#C9A96E] transition-all duration-300 uppercase tracking-wider ${
                  scrolled ? "text-[11px] px-3 py-1.5" : "text-xs px-4 py-2"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={() => scrollTo("#contact")}
              className={`rounded-full bg-gradient-to-r from-[#C9A96E] to-[#8B6543] text-black font-semibold tracking-wider hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all duration-300 ${
                scrolled ? "text-[10px] px-4 py-1.5" : "text-xs px-5 py-2"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#C9A96E] p-2 shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0D0907]/98 backdrop-blur-2xl"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#C9A96E] p-2"
                aria-label="Close menu"
              >
                <HiX size={28} />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex flex-col items-start gap-6 px-8 pt-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl text-white/90 hover:text-[#C9A96E] transition-colors text-left font-light tracking-wide"
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="w-16 h-px bg-gradient-to-r from-[#C9A96E]/40 to-transparent mt-4" />

              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                onClick={() => scrollTo("#contact")}
                className="mt-2 px-8 py-3 bg-gradient-to-r from-[#C9A96E] to-[#8B6543] rounded-full text-black text-sm font-semibold tracking-wider"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Bottom brand */}
            <div className="absolute bottom-10 left-8 right-8">
              <div className="w-full h-px bg-gradient-to-r from-[#C9A96E]/20 via-[#C9A96E]/10 to-transparent mb-6" />
              <p className="text-[#C9A96E]/30 text-xs tracking-[0.3em] uppercase">
                Milani Interior
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
