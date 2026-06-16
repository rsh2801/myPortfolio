import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiOpenjdk,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiVscodium,
} from "react-icons/si";

const iconMap = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiOpenjdk,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiVscodium,
};

export default function TechIcon({ iconName, name, proficiency }) {
  const Icon = iconName ? iconMap[iconName] : null;

  return (
    <div className="group flex flex-col items-center gap-1.5 rounded-xl p-2 transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-surface-card-dark sm:gap-2.5 sm:rounded-2xl sm:p-4">
      {Icon ? (
        <Icon className="h-8 w-8 text-text-secondary-light transition-colors duration-200 group-hover:text-primary-600 dark:text-text-secondary-dark dark:group-hover:text-primary-400 sm:h-12 sm:w-12" />
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 sm:h-12 sm:w-12 sm:rounded-xl sm:text-lg">
          {name.charAt(0)}
        </div>
      )}
      <span className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark sm:text-base">
        {name}
      </span>
      {/* Proficiency bar */}
      <div className="h-1 w-full max-w-[4rem] overflow-hidden rounded-full bg-gray-200 dark:bg-border-dark-hover sm:h-1.5 sm:max-w-[5rem]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
}
