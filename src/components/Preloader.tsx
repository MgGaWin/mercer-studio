"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("mercer-preloader-seen");
    if (!hasSeenPreloader) {
      setIsVisible(true);
      sessionStorage.setItem("mercer-preloader-seen", "true");
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 2300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f0ece7]"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-3xl md:text-5xl tracking-[0.3em] text-[#2a2a2a] font-light"
          >
            MERCER
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
