"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlinePuzzle,
  HiOutlineStar,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineCube,
    title: "End-to-End Solutions",
    description:
      "We manage every aspect of your interior project, saving you time and resources from concept to completion.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "After-Sales Support",
    description:
      "We are committed to providing ongoing support and after-sales service to address any future needs or concerns.",
  },
  {
    icon: HiOutlineSparkles,
    title: "No Variety Restrictions",
    description:
      "We partner with top vendors meeting our quality standards, providing the broadest selection of design solutions.",
  },
  {
    icon: HiOutlineStar,
    title: "Superior Quality",
    description:
      "Our partnerships with the best suppliers grant us access to the finest materials, craftsmanship, and quality.",
  },
  {
    icon: HiOutlinePuzzle,
    title: "Bespoke Furniture",
    description:
      "We specialize in sourcing custom-made furniture pieces that perfectly match your unique vision and requirements.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Team",
    description:
      "Each project has a dedicated team of designers, project managers, and craftsmen ensuring seamless execution.",
  },
];

function FeatureCard({
  feature,
  index,
  sectionProgress,
}: {
  feature: (typeof features)[0];
  index: number;
  sectionProgress: MotionValue<number>;
}) {
  const delay = index * 0.08;
  const cardOpacity = useTransform(
    sectionProgress,
    [delay, delay + 0.2],
    [0, 1]
  );
  const cardY = useTransform(
    sectionProgress,
    [delay, delay + 0.25],
    [60, 0]
  );
  const cardScale = useTransform(
    sectionProgress,
    [delay, delay + 0.2],
    [0.92, 1]
  );

  return (
    <motion.div
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
      className="will-change-transform"
    >
      <div className="group p-8 rounded-3xl glass-light border border-gold-400/10 hover:border-gold-400/30 hover:shadow-xl hover:shadow-gold-400/5 transition-all duration-500">
        <div className="w-14 h-14 rounded-2xl bg-dark-200 border border-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 group-hover:border-gold-400/30 transition-all duration-500">
          <feature.icon className="w-6 h-6 text-gold-400 transition-colors duration-500" />
        </div>
        <h3 className="font-heading text-xl font-bold text-cream-100 mb-3">
          {feature.title}
        </h3>
        <p className="text-cream-200/60 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 60%"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <section ref={sectionRef} className="py-28 bg-dark-400 relative overflow-hidden">
      <motion.div
        style={{ scale: glowScale }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold-400/60 uppercase tracking-widest">
            Our Advantages
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mt-4">
            Why Choose{" "}
            <span className="text-shimmer italic">Milani Interior</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              sectionProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
