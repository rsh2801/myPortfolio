import { motion } from "motion/react";
import { FiMonitor, FiServer, FiDatabase, FiGitBranch } from "react-icons/fi";
import { about } from "../../data/portfolio.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import FadeInWhenVisible from "../animations/FadeInWhenVisible.jsx";

const services = [
  {
    icon: FiMonitor,
    title: "Frontend",
    text: "React, Next.js & Tailwind CSS — responsive, accessible interfaces.",
  },
  {
    icon: FiServer,
    title: "Backend",
    text: "Node.js, Express & REST APIs — scalable server-side architecture.",
  },
  {
    icon: FiDatabase,
    title: "Database",
    text: "MongoDB, PostgreSQL & Redis — efficient data modeling & caching.",
  },
  {
    icon: FiGitBranch,
    title: "DevOps",
    text: "Docker, CI/CD & AWS — automated deployments & infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        title="About Me"
        subtitle="The person behind the code."
      />

      {/* Bio */}
      <FadeInWhenVisible>
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:text-lg">
          {about.bio}
        </p>
      </FadeInWhenVisible>

      {/* What I do cards */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
        {services.map((item, i) => (
          <FadeInWhenVisible key={item.title} delay={i * 0.1}>
            <div className="group flex h-full flex-col rounded-xl border border-gray-200/80 bg-surface-card-light p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10 dark:border-border-dark dark:bg-surface-card-dark dark:hover:shadow-primary-500/5 sm:rounded-2xl sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-100 dark:bg-primary-500/10 dark:group-hover:bg-primary-500/20 sm:mb-4 sm:h-12 sm:w-12">
                <item.icon className="h-5 w-5 text-primary-600 dark:text-primary-400 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-display text-sm font-bold text-text-primary-light dark:text-text-primary-dark sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:mt-2 sm:text-sm">
                {item.text}
              </p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
