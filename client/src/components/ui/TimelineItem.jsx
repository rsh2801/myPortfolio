import FadeInWhenVisible from "../animations/FadeInWhenVisible.jsx";

export default function TimelineItem({ experience, index }) {
  const isLeft = index % 2 === 0;
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <FadeInWhenVisible delay={index * 0.1} parallax={index % 2 === 0}>
      <div className="relative flex md:justify-center">
        {/* Timeline node — gradient ring with step number */}
        <div className="absolute left-0 top-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-pink shadow-lg shadow-primary-500/30 sm:h-12 sm:w-12 md:left-1/2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-light font-display text-xs font-bold text-primary-600 dark:bg-surface-dark dark:text-primary-400 sm:h-9 sm:w-9 sm:text-sm">
            {stepNumber}
          </div>
        </div>

        {/* Card */}
        <div
          className={`ml-7 w-full sm:ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${
            isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
          }`}
        >
          <div className="group relative overflow-hidden rounded-xl bg-surface-card-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 dark:bg-surface-card-dark dark:hover:shadow-primary-500/5 sm:rounded-2xl">
            {/* Gradient left accent bar */}
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-pink" />

            {/* Top glow line on hover */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/0 to-transparent transition-all duration-300 group-hover:via-primary-500/60" />

            <div className="p-4 pl-5 sm:p-6 sm:pl-7">
              {/* Header row: date badge + location */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-3 py-1 text-sm font-bold text-white shadow-md shadow-primary-500/20 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  {experience.startDate} — {experience.endDate}
                </span>
                {experience.location && (
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark sm:text-base">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {experience.location}
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <h3 className="mt-2 font-display text-xl font-bold text-text-primary-light dark:text-text-primary-dark sm:mt-3 sm:text-3xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan dark:from-primary-400 dark:to-accent-cyan sm:text-xl">
                {experience.company}
              </p>

              {/* Divider */}
              <div className="my-4 h-px bg-gradient-to-r from-gray-200 via-gray-200 to-transparent dark:from-border-dark dark:via-border-dark dark:to-transparent" />

              {/* Description bullets */}
              <ul className="space-y-2.5">
                {experience.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:gap-3 sm:text-lg"
                  >
                    <span className="mt-2.5 flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary-500 to-accent-cyan" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
