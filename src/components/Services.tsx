"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential",
    description:
      "Your home should know you better than any portrait. We design private residences where every surface, sightline, and shadow is tuned to the life lived within — from morning routines to midnight conversations.",
    image: "/images/service1.jpg",
  },
  {
    title: "Hospitality",
    description:
      "A hotel room is a promise. A restaurant is a theater. We craft environments where guests feel something they can't name but never forget — the alchemy of space, scent, and light.",
    image: "/images/service2.jpg",
  },
  {
    title: "Commercial",
    description:
      "Workspaces that think. Retail spaces that seduce. We design commercial environments where function becomes invisible and experience takes the lead.",
    image: "/images/service3.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-black/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-20"
        >
          Services
        </motion.p>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div
                className={`md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${
                  i % 2 === 1 ? "md:order-1 md:text-right" : "md:order-2"
                }`}
              >
                <h3 className="font-display text-3xl md:text-4xl text-foreground font-light tracking-tight mb-6">
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed text-text-secondary max-w-[40ch] ${
                    i % 2 === 1 ? "md:ml-auto" : ""
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
