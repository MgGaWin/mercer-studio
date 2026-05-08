"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}

export default function TextReveal({ children, className = "", as: Tag = "h2" }: TextRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="overflow-hidden"
    >
      <Tag className={className}>
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: i * 0.02,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
