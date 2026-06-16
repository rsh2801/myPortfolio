import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
};

export default function SocialLinks({ links, size = "text-2xl", className = "" }) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} text-text-secondary-light transition-colors duration-200 hover:text-primary-600 dark:text-text-secondary-dark dark:hover:text-primary-400`}
            aria-label={link.platform}
          >
            {Icon ? <Icon /> : link.platform}
          </a>
        );
      })}
    </div>
  );
}
