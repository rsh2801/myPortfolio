import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import {
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import { codingProfiles } from "../../data/portfolio.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import FadeInWhenVisible from "../animations/FadeInWhenVisible.jsx";

const iconMap = { SiLeetcode, SiCodeforces, SiGeeksforgeeks };

function AnimatedNumber({ value, inView }) {
  const [display, setDisplay] = useState(0);
  const isNumber = typeof value === "number";

  useEffect(() => {
    if (!isNumber || !inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value, inView, isNumber]);

  if (!isNumber) return <span>{value}</span>;
  return <span>{inView ? display.toLocaleString() : 0}</span>;
}

export default function CodingProfiles() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="coding" className="section-container">
      <SectionHeading
        title="Coding Profiles"
        subtitle="My competitive programming and problem-solving journey across platforms."
      />

      <div ref={containerRef} className="grid gap-4 grid-cols-1 sm:grid-cols-3 sm:gap-6 max-w-4xl mx-auto">
        {codingProfiles.map((profile, i) => {
          const Icon = iconMap[profile.icon];
          return (
            <FadeInWhenVisible key={profile.id} delay={i * 0.1}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative flex h-full flex-col rounded-xl border border-gray-200/80 bg-surface-card-light p-4 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg dark:border-border-dark dark:bg-surface-card-dark dark:hover:shadow-black/30 sm:rounded-2xl sm:p-6">
                  {/* Platform header */}
                  <div className="mb-3 flex items-start justify-between sm:mb-5 sm:items-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {Icon && (
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-xl"
                          style={{ backgroundColor: profile.color + "18" }}
                        >
                          <Icon
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            style={{ color: profile.color }}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-sm font-bold text-text-primary-light dark:text-text-primary-dark sm:text-lg">
                          {profile.platform}
                        </h3>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark sm:text-sm">
                          @{profile.username}
                        </p>
                      </div>
                    </div>
                    <FiExternalLink className="hidden h-4 w-4 text-text-secondary-light opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-text-secondary-dark sm:block" />
                  </div>

                  {/* Stats */}
                  <div className="mt-auto space-y-2 sm:space-y-3">
                    {profile.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark sm:text-sm">
                          {stat.label}
                        </span>
                        <motion.span
                          className="font-display text-sm font-bold sm:text-base"
                          style={{ color: profile.color }}
                        >
                          <AnimatedNumber value={stat.value} inView={inView} />
                        </motion.span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="mt-5 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: profile.color }}
                  />
                </div>
              </a>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </section>
  );
}
