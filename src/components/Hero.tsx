"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/e_d_f_e_e_c_dfd_f_mp_.mp4"
        />
      </div>

      {/* Inward gradient mask — vignette + bottom fade to page bg */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.35) 100%),
            linear-gradient(to bottom, transparent 60%, #f0ece7 100%)
          `,
        }}
      />

      {/* Hero content — centered */}
      <div className="relative z-10 text-center px-6 max-w-[90%] sm:max-w-[70%] md:max-w-[55%]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-white font-light"
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
          className="mt-8 text-sm tracking-[0.25em] uppercase text-white/60"
        >
          Residential &mdash; Hospitality &mdash; Commercial
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="inline-flex items-center gap-2 mt-10 text-sm tracking-[0.2em] uppercase text-white/80 border-b border-white/50 pb-1 hover:gap-3 transition-all duration-300"
        >
          View selected works
          <span className="text-sm">&rarr;</span>
        </motion.a>
      </div>
    </section>
  );
}
