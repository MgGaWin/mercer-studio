"use client";

import { motion } from "framer-motion";

const contactInfo = [
  { label: "Email", value: "hello@atelier-studio.com", href: "mailto:hello@atelier-studio.com" },
  { label: "Phone", value: "+1 (212) 847-3920", href: "tel:+12128473920" },
  { label: "Studio", value: "142 Wooster Street\nNew York, NY 10012" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-dark text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-8">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
            Let&apos;s create
            <br />
            something
            <br />
            remarkable
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          {contactInfo.map((item) => (
            <div key={item.label} className="mb-8 last:mb-0">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-2">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="text-sm text-white/85 hover:text-white transition-colors duration-300">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-white/85 whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
