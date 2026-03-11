"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setPhase("reveal"), 300);
          setTimeout(() => onComplete(), 1400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "reveal" ? null : null}
      <motion.div
        initial={{ opacity: 1 }}
        animate={phase === "reveal" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-300"
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px]" />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* M Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-brown-600 flex items-center justify-center mb-6 gold-glow"
          >
            <span className="text-dark-300 font-heading font-bold text-3xl">
              M
            </span>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-3xl font-bold text-cream-100 tracking-wide">
              Milani
            </h1>
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold-400/70 mt-1">
              Interior Design
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="w-48"
          >
            <div className="h-[1px] bg-brown-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-center text-[10px] text-gold-400/50 mt-3 uppercase tracking-[0.3em] font-medium">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-gold-400/20" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-gold-400/20" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-gold-400/20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-gold-400/20" />
      </motion.div>
    </AnimatePresence>
  );
}
