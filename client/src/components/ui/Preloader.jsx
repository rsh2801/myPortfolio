import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface-light dark:bg-surface-dark"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-cyan font-display text-2xl font-bold text-white shadow-2xl shadow-primary-500/30 sm:h-24 sm:w-24 sm:rounded-3xl sm:text-4xl"
          >
            RS
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 font-display text-xl font-bold text-text-primary-light dark:text-text-primary-dark sm:mt-6 sm:text-2xl"
          >
            Roshan Singh
          </motion.p>

          {/* Loading bar */}
          <div className="mt-6 h-1 w-36 overflow-hidden rounded-full bg-gray-200 dark:bg-border-dark sm:mt-8 sm:w-48">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
