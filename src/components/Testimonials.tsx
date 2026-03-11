"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Homeowner, Jakarta",
    text: "Milani Interior transformed our house into a dream home. Their attention to detail and ability to understand our vision was extraordinary. Every room tells a story.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Budi Santoso",
    role: "CEO, Santoso Group",
    text: "The team at Milani delivered our office renovation ahead of schedule and beyond expectations. The modern design has significantly boosted our team's productivity.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Rina Hartono",
    role: "Hotel Manager, Bali",
    text: "Working with Milani for our boutique hotel was the best decision. They understood the blend of modern luxury and Balinese culture we wanted to achieve.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Dimas Prasetyo",
    role: "Architect Partner",
    text: "As an architect, collaborating with Milani is seamless. Their interior design expertise complements architectural vision perfectly. A truly professional team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
];

function TestimonialCard({
  testimonial,
  index,
  currentIndex,
  sectionProgress,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  currentIndex: number;
  sectionProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const delay = 0.15 + index * 0.1;
  const cardOpacity = useTransform(sectionProgress, [delay, delay + 0.2], [0, 1]);
  const cardY = useTransform(sectionProgress, [delay, delay + 0.25], [50, 0]);
  const cardScale = useTransform(sectionProgress, [delay, delay + 0.2], [0.94, 1]);

  const isActive = currentIndex === index;

  return (
    <motion.div
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
      className={`p-6 rounded-3xl transition-all duration-700 ease-out will-change-transform ${
        isActive
          ? "glass-card border border-gold-400/20 text-cream-100 shadow-2xl shadow-gold-400/10 scale-[1.02]"
          : "bg-dark-200/50 border border-gold-400/5 hover:border-gold-400/10"
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
        isActive ? "text-cream-200" : "text-cream-200/60"
      }`}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={`w-10 h-10 rounded-full object-cover ring-2 transition-all duration-500 ${
            isActive ? "ring-gold-400/30" : "ring-transparent"
          }`}
        />
        <div>
          <h4 className="font-semibold text-sm text-cream-100">
            {testimonial.name}
          </h4>
          <p className={`text-xs transition-colors duration-500 ${
            isActive ? "text-gold-400/60" : "text-cream-200/40"
          }`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 60%"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [50, 0]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 bg-dark-400 relative overflow-hidden"
    >
      <motion.div
        style={{ x: glowX }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold-400/60 uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mt-4">
            What Our <span className="text-shimmer italic">Clients</span> Say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              currentIndex={currentIndex}
              sectionProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Pagination dots */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.65], [0, 1]),
          }}
          className="flex justify-center gap-2 mt-10"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === i
                  ? "w-8 bg-gold-400"
                  : "w-2 bg-dark-100 hover:bg-gold-400/30"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
