"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Services: [
    "Residential Design",
    "Commercial Spaces",
    "Hospitality Design",
    "Custom Furniture",
    "Project Management",
  ],
  Company: ["About Us", "Our Team", "Careers", "Press", "Blog"],
  Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-dark-500 text-cream-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gold-400/10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Milani Interior"
                className="h-12 object-contain"
              />
            </div>

            <p className="text-cream-200/40 leading-relaxed max-w-sm text-sm">
              Transforming spaces into extraordinary experiences. Premium
              interior design solutions for those who appreciate the finer
              things in life.
            </p>

            <div className="flex gap-4">
              {["IG", "Li", "Pi", "Fb"].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-dark-200 border border-gold-400/10 flex items-center justify-center text-sm text-cream-200/60 hover:bg-gold-400 hover:text-dark-500 transition-colors"
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-lg font-bold text-cream-100 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream-200/40 text-sm hover:text-gold-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-cream-200/40 text-sm">
            © 2026 Milani Interior. All rights reserved.
          </p>
          <p className="text-cream-200/20 text-xs">
            Crafted with passion for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
}
