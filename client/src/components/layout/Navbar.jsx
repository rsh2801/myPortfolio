import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import { NAV_LINKS, SECTION_IDS } from "../../utils/constants.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    if (latest < 50) {
      setHidden(false);
      setScrolled(false);
      return;
    }

    setScrolled(true);

    if (latest > previous && latest > 100) {
      setHidden(true);
      setMobileOpen(false);
    } else if (previous - latest > 5) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-500 ${
        scrolled
          ? "bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-2xl dark:bg-zinc-900/80 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-5 sm:px-8 sm:py-5 lg:px-10 lg:py-5">
        {/* Logo */}
        <button
          onClick={() => {
            setMobileOpen(false);
            const el = document.getElementById("hero");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 font-display text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11 sm:text-base">
            RS
          </div>
          <span className="font-display text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            Roshan Singh
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white lg:text-base"
              >
                {link.label}
                <FiExternalLink className="h-3.5 w-3.5 opacity-50" />
              </a>
            ) : (
              <button
                key={link.id}
                onClick={() => {
                  setMobileOpen(false);
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 lg:text-base ${
                  activeSection === link.id
                    ? "text-primary-700 dark:text-primary-300"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-xl bg-primary-50 dark:bg-primary-500/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            )
          )}

          <div className="mx-4 h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-zinc-200/60 bg-white/95 backdrop-blur-2xl dark:border-zinc-700/40 dark:bg-zinc-900/95 md:hidden"
          >
            <div className="space-y-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-zinc-500 transition-colors duration-200 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 sm:text-lg"
                  >
                    {link.label}
                    <FiExternalLink className="h-4 w-4 opacity-50" />
                  </a>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileOpen(false);
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`relative block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors duration-200 sm:text-lg ${
                      activeSection === link.id
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
                        : "text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
