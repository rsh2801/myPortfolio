import FadeInWhenVisible from "../animations/FadeInWhenVisible.jsx";

export default function SectionHeading({ title, subtitle }) {
  return (
    <FadeInWhenVisible className="mb-8 text-center sm:mb-12" parallax>
      <h2 className="font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary-light dark:text-text-secondary-dark sm:mt-4 sm:text-xl">
          {subtitle}
        </p>
      )}
    </FadeInWhenVisible>
  );
}
