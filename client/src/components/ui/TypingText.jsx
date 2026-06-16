import { useState, useEffect } from "react";

export default function TypingText({ texts = [], speed = 80 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Respect reduced motion — show full text statically
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || texts.length === 0) return;

    const currentText = texts[textIndex];

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const delay = isDeleting ? speed / 2 : speed;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, reducedMotion]);

  if (texts.length === 0) return null;

  if (reducedMotion) {
    return <span>{texts[0]}</span>;
  }

  const displayedText = texts[textIndex].slice(0, charIndex);

  return (
    <span>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
}
