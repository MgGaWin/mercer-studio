"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hillside Residence",
    type: "Residential",
    year: "2024",
    image: "https://picsum.photos/seed/hillside/800/600",
  },
  {
    title: "Meridian Hotel Lobby",
    type: "Hospitality",
    year: "2023",
    image: "https://picsum.photos/seed/meridian/800/600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-12"
        >
          Selected Works
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-[0.6rem] tracking-[0.2em] uppercase text-white/70">
                  {project.type} &mdash; {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-right"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-text-secondary border-b border-text-muted pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            View all projects
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
