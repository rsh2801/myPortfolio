import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function FadeInWhenVisible({
  children,
  delay = 0,
  className = "",
  parallax = false,
  parallaxSpeed = 0.15,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxSpeed * 100, parallaxSpeed * -100]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={parallax ? { y: parallaxY } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
