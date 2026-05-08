"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end pb-16 pl-6 md:pl-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero content — bottom-left aligned */}
      <div className="relative z-10 max-w-[85%] sm:max-w-[70%] md:max-w-[55%]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white"
        >
          Interiors
          <br />
          that
          <br />
          breathe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5 text-[0.65rem] tracking-[0.2em] uppercase text-white/60"
        >
          Residential &mdash; Hospitality &mdash; Commercial
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="inline-flex items-center gap-2 mt-8 text-[0.7rem] tracking-[0.15em] uppercase text-white/80 border-b border-white/60 pb-1 hover:gap-3 transition-all duration-300"
        >
          View selected works
          <span className="text-sm">&rarr;</span>
        </motion.a>
      </div>

      {/* Vertical text indicator (optional) */}
      <div aria-hidden="true" className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-[0.6rem] tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-rl]">
        Interior Design Studio
      </div>
    </section>
  );
}
