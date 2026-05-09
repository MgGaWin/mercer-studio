"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, NOISE_TEXTURE_SVG, NOISE_BG_SIZE } from "@/lib/constants";

const projects = [
  {
    title: "Hillside Residence",
    type: "Residential",
    year: "2024",
    image: "/images/hillside-residence.webp",
    description:
      "Morning light pours through floor-to-ceiling glass, washing over stone and linen. Every room opens to the hillside — not a view, but a conversation with the landscape.",
  },
  {
    title: "Meridian Hotel Lobby",
    type: "Hospitality",
    year: "2023",
    image: "/images/meridian-hotel-lobby.webp",
    description:
      "A space designed to slow you down. The weight of brass, the warmth of walnut, the hush of acoustic plaster — arrival as a sensory experience.",
  },
  {
    title: "SoHo Penthouse",
    type: "Residential",
    year: "2024",
    image: "/images/soho-penthouse.webp",
    description:
      "Above the city's restlessness, a quiet geometry of raw concrete, white oak, and diffused light. A home that breathes with its owner.",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: "inset(8% 0% 8% 0%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1.2,
        delay: 0.1,
        ease: EASE,
      }}
      className="group relative min-h-[70vh] md:min-h-[80vh] overflow-hidden cursor-pointer"
    >
      {/* Parallax image */}
      <motion.img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03] -top-[10%]"
      />

      {/* Warm tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: NOISE_TEXTURE_SVG,
          backgroundSize: NOISE_BG_SIZE,
        }}
      />

      {/* Index number */}
      <div className="absolute top-6 right-8 md:top-10 md:right-14">
        <span className="font-display text-7xl md:text-8xl text-white/[0.07] font-light leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
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
  );
}

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
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
