"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hillside Residence",
    type: "Residential",
    year: "2024",
    image: "/images/Hillside%20Residence.png",
    description: "Morning light pours through floor-to-ceiling glass, washing over stone and linen. Every room opens to the hillside — not a view, but a conversation with the landscape.",
  },
  {
    title: "Meridian Hotel Lobby",
    type: "Hospitality",
    year: "2023",
    image: "/images/Meridian%20Hotel%20Lobby.png",
    description: "A space designed to slow you down. The weight of brass, the warmth of walnut, the hush of acoustic plaster — arrival as a sensory experience.",
  },
  {
    title: "SoHo Penthouse",
    type: "Residential",
    year: "2024",
    image: "/images/SoHo%20Penthouse.png",
    description: "Above the city's restlessness, a quiet geometry of raw concrete, white oak, and diffused light. A home that breathes with its owner.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-16"
        >
          Selected Works
        </motion.p>
      </div>

      <div className="space-y-4 md:space-y-6 px-4 md:px-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative min-h-[70vh] md:min-h-[80vh] overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-white/50 mb-3">
                {project.type} &mdash; {project.year}
              </p>
              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[0.9]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-white/60 max-w-[50ch] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 border-b border-white/40 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Project <span>&rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
