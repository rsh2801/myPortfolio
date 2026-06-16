import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-60 h-[3px] origin-left bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
