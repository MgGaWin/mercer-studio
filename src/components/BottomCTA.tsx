"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function BottomCTA() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10 bg-[#f0ece7]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[900px] mx-auto text-center"
      >
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-text-muted mb-8">
          Begin Your Project
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground font-light tracking-tight leading-[0.9] mb-10">
          Your vision,
          <br />
          our craft
        </h2>
        <MagneticButton
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-4 border border-foreground/30 text-[0.7rem] tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Start a conversation
          <span>&rarr;</span>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
