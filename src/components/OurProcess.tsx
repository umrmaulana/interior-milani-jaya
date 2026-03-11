"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    subtitle: "and Discovery",
    description:
      "We begin with an in-depth consultation to understand your vision, requirements, and budget. Our designers listen carefully to create a tailored approach for your space.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  },
  {
    number: "2",
    title: "Concept",
    subtitle: "& Design",
    description:
      "Our creative team develops detailed 3D visualizations and mood boards.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  },
  {
    number: "3",
    title: "Material Selection",
    subtitle: "and Sourcing",
    description:
      "We curate the finest materials from our network of 150+ suppliers.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
  },
  {
    number: "4",
    title: "Expert Installation",
    subtitle: "and Execution",
    description:
      "Our craftsmen bring the design to life with meticulous attention.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800",
  },
  {
    number: "5",
    title: "After-Sales Support",
    subtitle: "and Maintenance",
    description:
      "We provide long-term support including warranty and maintenance.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  },
];

function StackCard({
  step,
  index,
  totalCards,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / totalCards;
  const start = index * segment;
  const end = (index + 1) * segment;

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.94]);
  const y = useTransform(scrollYProgress, [start, end], [0, -60]);
  const rotateX = useTransform(scrollYProgress, [start, end], [0, 6]);
  const opacity = 1;

  const brightness = useTransform(scrollYProgress, [start, end], [1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [start, end], [24, 40]);

  const imageScale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

  const zIndex = totalCards + index;

  return (
    <motion.div
      style={{
        zIndex,
        scale,
        y,
        rotateX,
        opacity,
      }}
      className="sticky top-[12vh] h-[68vh] min-h-[420px] max-h-[540px] w-full origin-top will-change-transform"
    >
      <motion.div
        style={{
          borderRadius,
          filter: useTransform(brightness, (v) => `brightness(${v})`),
        }}
        className="relative h-full w-full overflow-hidden 
        bg-dark-200/90 backdrop-blur-md 
        shadow-xl
        border border-gold-400/10"
      >
        <div className="grid lg:grid-cols-2 h-full">
          {/* Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12 relative">
            <span className="absolute top-4 left-8 text-[10rem] lg:text-[12rem] font-bold text-dark-50/[0.03] select-none">
              {step.number}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-gold-400/40" />
                <span className="text-xs text-gold-400/60 uppercase tracking-[0.2em]">
                  Step {step.number} of {totalCards}
                </span>
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-cream-100">
                {step.title}{" "}
                <span className="italic text-shimmer">{step.subtitle}</span>
              </h3>

              <p className="text-cream-200/60 mt-5 max-w-md">{step.description}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <motion.img
              src={step.image}
              alt={step.title}
              style={{ scale: imageScale }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark-200/30" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurProcess() {
  const headerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="process" className="bg-dark-300 relative">
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 w-[900px] h-[900px] bg-gold-400/5 
      rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-8 text-center">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-gold-400/60 uppercase tracking-widest">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-cream-100 mt-4">
            How We <span className="italic text-shimmer">Simplify</span>
            <br />
            Your Furnishing Experience
          </h2>
        </motion.div>
      </div>

      {/* Stacked Cards */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto px-6 lg:px-8"
        style={{
          height: `${steps.length * 100}vh`,
          perspective: "1200px",
        }}
      >
        {steps.map((step, index) => (
          <StackCard
            key={step.number}
            step={step}
            index={index}
            totalCards={steps.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
