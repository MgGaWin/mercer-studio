"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-black/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] overflow-hidden"
        >
          <img
            src="/images/studio.jpg"
            alt="Atelier studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-8">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground tracking-tight">
            A room should feel like a held breath &mdash; still, intentional,
            and alive with quiet presence.
          </blockquote>
          <p className="mt-6 text-sm leading-relaxed text-text-secondary max-w-[45ch]">
            We don&apos;t decorate. We compose. Each project begins with listening
            &mdash; to the architecture, the light, and the way our clients
            move through their own lives. The result is never a style. It&apos;s
            a resonance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
