import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest("a, button, [data-cursor='pointer']");
      if (target) setHovered(true);
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest("a, button, [data-cursor='pointer']");
      if (target) setHovered(false);
    };

    const handleMouseLeaveWindow = () => setVisible(false);
    const handleMouseEnterWindow = () => setVisible(true);

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2"
        style={{
          x: cursorX,
          y: cursorY,
          width: 30,
          height: 30,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovered
            ? "var(--color-accent-cyan)"
            : "var(--color-primary-500)",
          scale: hovered ? 1.5 : 1,
          opacity: visible ? 1 : 0,
          transition: "border-color 0.2s, scale 0.2s, opacity 0.15s",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovered
            ? "var(--color-accent-cyan)"
            : "var(--color-primary-500)",
          opacity: visible ? 1 : 0,
          transition: "background-color 0.2s, opacity 0.15s",
        }}
      />
    </>
  );
}
