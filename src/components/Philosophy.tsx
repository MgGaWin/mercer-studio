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
          initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] overflow-hidden group"
        >
          <img
            src="/images/studio---philosophy.webp"
            alt="Mercer Studio"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent mix-blend-multiply" />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
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
