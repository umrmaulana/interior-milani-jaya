"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[120vh] flex items-center overflow-hidden bg-dark-300"
    >
      {/* Cinematic background image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1200&fit=crop&q=85"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300 via-dark-300/80 to-dark-300/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-dark-300/30" />
      </motion.div>

      {/* 3D particles overlay */}
      {/* <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
        <Scene3D />
      </div> */}

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl space-y-8">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-light"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs text-gold-400/80 font-medium uppercase tracking-[0.2em]">
              Premium Interior Design Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-cream-100"
          >
            Bringing
            <br />
            <span className="text-shimmer">Elegance</span>
            <br />
            <span className="text-cream-200/60">Into Your</span>
            <br />
            <span className="text-gradient italic">Living Space</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="text-base md:text-lg text-cream-200/50 max-w-lg leading-relaxed"
          >
            Milani Interior transforms your vision into reality — crafting
            bespoke interiors for luxury residences, boutique hotels, and
            premium commercial spaces.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-gold-400 to-brown-600 text-dark-300 rounded-full text-sm font-semibold uppercase tracking-[0.1em] hover:shadow-xl hover:shadow-gold-400/20 transition-all"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-gold-400/30 text-gold-400/80 rounded-full text-sm font-medium uppercase tracking-[0.1em] hover:border-gold-400/60 hover:text-gold-400 hover:bg-gold-400/5 transition-all"
            >
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="flex gap-12 pt-10"
          >
            {[
              { number: "200+", label: "Projects" },
              { number: "15+", label: "Years" },
              { number: "50+", label: "Awards" },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-[10px] text-cream-200/40 mt-1 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400/40">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/40 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-1/2 bg-gradient-to-b from-gold-400 to-transparent"
          />
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 w-16 h-16 border-r border-t border-gold-400/10 z-10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold-400/10 z-10" />
    </section>
  );
}
