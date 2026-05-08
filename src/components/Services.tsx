"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential",
    description:
      "Full-service interior design for private homes, apartments, and countryside retreats.",
  },
  {
    title: "Hospitality",
    description:
      "Bespoke environments for hotels, restaurants, and boutique spaces that tell a story.",
  },
  {
    title: "Commercial",
    description:
      "Workspaces and retail environments designed for both function and lasting impression.",
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
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-14"
        >
          Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`py-8 md:py-0 md:px-8 ${
                i < services.length - 1
                  ? "md:border-r md:border-black/[0.06]"
                  : ""
              }`}
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
