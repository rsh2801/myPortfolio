import { motion } from "motion/react";
import { FiDownload } from "react-icons/fi";
import { about } from "../../data/portfolio.js";
import SocialLinks from "../ui/SocialLinks.jsx";
import ParticleHero from "../ui/ParticleHero.jsx";
import TypingText from "../ui/TypingText.jsx";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <ParticleHero />

      <div className="section-container flex min-h-screen items-center justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center"
        >
          {/* Role badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300 sm:text-base">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
              {about.title}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-5xl font-extrabold leading-tight sm:mt-6 sm:text-6xl lg:text-8xl"
          >
            <span className="gradient-text">{about.name}</span>
          </motion.h1>

          {/* Typing tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-lg text-accent-cyan sm:mt-4 sm:text-2xl"
          >
            <TypingText
              texts={[
                about.tagline,
                "Building the web, one pixel at a time.",
                "React · Node · MongoDB",
              ]}
            />
          </motion.p>

          {/* CTA buttons + socials */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:justify-center sm:gap-6"
          >
            <a href={about.resumeUrl} className="btn-primary">
              <FiDownload className="h-5 w-5 sm:h-6 sm:w-6" />
              Download Resume
            </a>
            <SocialLinks links={about.socialLinks} size="text-2xl sm:text-3xl" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
