import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { about } from "../../data/portfolio.js";
import { NAV_LINKS } from "../../utils/constants.js";

const iconMap = { FaGithub, FaLinkedin, FaTwitter, FaEnvelope };

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-200 bg-surface-card-light dark:border-border-dark dark:bg-surface-card-dark">
      {/* Top gradient accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
        {/* Main footer content */}
        <div className="grid gap-8 py-10 sm:gap-12 sm:py-16 md:grid-cols-3">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-cyan font-display text-xl font-bold text-white shadow-lg shadow-primary-500/20">
                RS
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  {about.name.split(" ")[0]}
                  <span className="text-primary-500">.</span>
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:mt-4 sm:text-lg">
              {about.title} passionate about crafting clean, performant, and
              user-friendly web experiences.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-4">
              {about.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-lg text-text-secondary-light transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-primary-600 hover:shadow-md hover:shadow-primary-500/10 dark:border-border-dark dark:text-text-secondary-dark dark:hover:border-primary-500/50 dark:hover:text-primary-400 sm:h-11 sm:w-11 sm:rounded-xl sm:text-xl"
                  >
                    {Icon ? <Icon /> : link.platform[0]}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold uppercase tracking-wider text-text-primary-light dark:text-text-primary-dark sm:text-lg">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="group flex items-center gap-1.5 text-sm text-text-secondary-light sm:text-lg transition-colors duration-200 hover:text-primary-600 dark:text-text-secondary-dark dark:hover:text-primary-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-display text-base font-semibold uppercase tracking-wider text-text-primary-light dark:text-text-primary-dark sm:text-lg">
              Get In Touch
            </h4>
            <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark sm:mt-4 sm:text-lg">
              Have a project in mind or just want to chat? Feel free to reach
              out.
            </p>
            <a
              href={
                about.socialLinks.find((l) => l.platform === "Email")?.url ||
                "#"
              }
              className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2.5 text-base font-semibold text-white sm:mt-5 sm:px-6 sm:py-3 sm:text-lg shadow-lg shadow-primary-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/30"
            >
              Say Hello
              <FiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-2 border-t border-gray-200 py-5 dark:border-border-dark sm:flex-row sm:justify-between sm:gap-3 sm:py-6">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark sm:text-base">
            &copy; {year} {about.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark sm:text-base">
            Designed &amp; built with{" "}
            <span className="text-accent-pink">&hearts;</span> using React &amp;
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
