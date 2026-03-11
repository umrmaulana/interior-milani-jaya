"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  {
    title: "Modern Minimalist Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop&q=80",
    location: "Jakarta, Indonesia",
  },
  {
    title: "Luxury Boutique Hotel",
    category: "Hospitality",
    image:
      // "https://images.unsplash.com/photo-1590490360182-c33d39de3d56?w=600&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1738407283641-5e127f36f47d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Bali, Indonesia",
  },
  {
    title: "Executive Office Suite",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop&q=80",
    location: "Surabaya, Indonesia",
  },
  {
    title: "Contemporary Penthouse",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop&q=80",
    location: "Bandung, Indonesia",
  },
  {
    title: "Premium Restaurant",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=500&fit=crop&q=80",
    location: "Yogyakarta, Indonesia",
  },
  {
    title: "Co-Working Space",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&h=500&fit=crop&q=80",
    location: "Jakarta, Indonesia",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-28 bg-dark-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold-400/60 uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mt-4">
            Featured <span className="text-gold-400 italic">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-400 text-dark-500"
                  : "bg-dark-200 text-cream-200/60 hover:bg-dark-100 border border-gold-400/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-400/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold-400 text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-cream-200/60 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
