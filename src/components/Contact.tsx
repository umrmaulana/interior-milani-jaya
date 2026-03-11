"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: HiOutlinePhone,
      label: "Phone",
      value: "+62 21 1234 5678",
      href: "tel:+622112345678",
    },
    {
      icon: HiOutlineMail,
      label: "Email",
      value: "hello@milaniinterior.com",
      href: "mailto:hello@milaniinterior.com",
    },
    {
      icon: HiOutlineLocationMarker,
      label: "Studio",
      value: "Jl. Sudirman No. 123, Jakarta",
      href: "#",
    },
    {
      icon: HiOutlineClock,
      label: "Hours",
      value: "Mon - Sat, 09:00 - 18:00",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 bg-dark-300 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold-400/60 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mt-4">
            Start Your{" "}
            <span className="text-shimmer italic">Design Journey</span>
          </h2>
          <p className="text-cream-200/60 mt-4 max-w-lg mx-auto">
            Ready to transform your space? Contact us for a free consultation
            and let&apos;s bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-3xl glass-card p-8 text-cream-100">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark-200 border border-gold-400/10 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors">
                      <info.icon className="w-5 h-5 text-cream-200" />
                    </div>
                    <div>
                      <div className="text-xs text-gold-400/60 uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-cream-200 mt-0.5 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10 pt-6 border-t border-gold-400/10">
                <p className="text-xs text-gold-400/60 uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2 rounded-full bg-dark-200 border border-gold-400/10 text-cream-200 text-xs hover:bg-gold-400 hover:text-dark-500 transition-colors"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-cream-200/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-400/10 bg-dark-200/50 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-200/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-400/10 bg-dark-200/50 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-cream-200/80 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-400/10 bg-dark-200/50 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-200/80 mb-2">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-400/10 bg-dark-200/50 text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="hospitality">Hospitality Design</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-cream-200/80 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gold-400/10 bg-dark-200/50 text-cream-100 placeholder-cream-200/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/30 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gold-400 text-dark-500 rounded-xl text-base font-semibold hover:bg-gold-400/90 transition-colors shadow-lg shadow-gold-400/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
