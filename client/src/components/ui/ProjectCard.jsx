import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { StaggerItem } from "../animations/StaggerChildren.jsx";

export default function ProjectCard({ project }) {
  return (
    <StaggerItem className="h-full">
      <div className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface-card-light dark:bg-surface-card-dark">
        {/* Subtle border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-200/80 transition-all duration-500 group-hover:ring-primary-400/50 dark:ring-border-dark dark:group-hover:ring-primary-500/40" />

        {/* Project image with overlay */}
        <div className="relative h-44 overflow-hidden sm:h-56 md:h-60">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
            <h3 className="font-display text-lg font-bold text-white drop-shadow-lg sm:text-2xl">
              {project.title}
            </h3>
          </div>

          {project.featured && (
            <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-pink to-primary-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg shadow-accent-pink/25 sm:left-3 sm:top-3 sm:gap-1.5 sm:px-3 sm:py-1 sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Featured
            </span>
          )}

          {/* Quick action buttons overlaid on image */}
          <div className="absolute right-3 top-3 flex gap-2 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110"
                aria-label="Live Demo"
              >
                <FiArrowUpRight className="h-5 w-5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-text-primary-light shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110"
                aria-label="Source Code"
              >
                <FiGithub className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <p className="flex-1 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:text-lg">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom links */}
          <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
              >
                <FiExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-text-primary-light transition-all duration-200 hover:border-primary-300 hover:text-primary-600 dark:border-border-dark dark:text-text-primary-dark dark:hover:border-primary-500/50 dark:hover:text-primary-400 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
              >
                <FiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}
