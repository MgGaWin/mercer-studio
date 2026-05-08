"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 180 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  // Detect hover on interactive elements
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group");
      setIsHoveringLink(!!isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#2a2a2a]/40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHoveringLink ? 48 : 32,
          height: isHoveringLink ? 48 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHoveringLink
            ? "rgba(42, 42, 42, 0.6)"
            : "rgba(42, 42, 42, 0.25)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
      />
    </>
  );
}
