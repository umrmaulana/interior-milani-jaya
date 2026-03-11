"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" ref={ref} className="py-32 bg-dark-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/3 rounded-full blur-[120px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Images Grid */}
          <div className="relative">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/10">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=500&fit=crop&q=80"
                    alt="Modern Living Room"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/10">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop&q=80"
                    alt="Interior Design"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/10">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80"
                    alt="Architecture"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/10">
                  <img
                    src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=500&fit=crop&q=80"
                    alt="Luxury Bedroom"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats badge */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -right-6 lg:right-6 glass-card rounded-2xl p-6 shadow-xl border border-gold-400/10"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-gold-400">
                    150+
                  </div>
                  <div className="text-xs text-cream-200/60 mt-1">
                    Furniture Suppliers
                  </div>
                </div>
                <div className="w-px h-12 bg-gold-400/10" />
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-gold-400">
                    15+
                  </div>
                  <div className="text-xs text-cream-200/60 mt-1">
                    Years of Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium text-gold-400/60 uppercase tracking-widest">
                Our Company
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl font-bold text-cream-100 leading-tight"
            >
              Who <span className="text-shimmer italic">We Are</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-cream-200/80 leading-relaxed text-lg"
            >
              At Milani Interior, we understand the challenges of creating
              exceptional spaces that blend elegance, quality, and
              functionality. As Indonesia&apos;s premier interior design
              provider, we&apos;ve made it our mission to simplify the
              furnishing process.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-cream-200/60 leading-relaxed"
            >
              Every project is executed flawlessly from initial consultation to
              final installation. Our team of expert designers works closely
              with you to understand your vision and transform it into a living
              masterpiece that exceeds expectations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              {[
                {
                  icon: "✦",
                  title: "Expert Designers",
                  desc: "Award-winning creative team",
                },
                {
                  icon: "◈",
                  title: "Premium Materials",
                  desc: "Only the finest quality",
                },
                {
                  icon: "⬡",
                  title: "Custom Solutions",
                  desc: "Tailored to your lifestyle",
                },
                {
                  icon: "◉",
                  title: "Timely Delivery",
                  desc: "On schedule, every time",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-gold-400 text-xl mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-cream-100 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-cream-200/60 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
