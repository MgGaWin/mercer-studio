"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/80 backdrop-blur-md border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-serif text-sm md:text-base tracking-[0.3em] text-foreground"
      >
        ATELIER
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.65rem] tracking-[0.2em] uppercase text-text-secondary hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
