import { techStack } from "../../data/portfolio.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import TechIcon from "../ui/TechIcon.jsx";
import FadeInWhenVisible from "../animations/FadeInWhenVisible.jsx";

export default function TechStack() {
  return (
    <section id="techstack" className="section-container">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with on a daily basis."
      />

      <div className="space-y-5 sm:space-y-8">
        {techStack.map((category, catIndex) => (
          <FadeInWhenVisible key={category.id} delay={catIndex * 0.1} parallax={catIndex % 2 === 0}>
            <div className="card">
              <h3 className="mb-4 font-display text-lg font-bold text-text-primary-light dark:text-text-primary-dark sm:mb-6 sm:text-2xl">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6">
                {category.items.map((item) => (
                  <TechIcon
                    key={item.name}
                    iconName={item.icon}
                    name={item.name}
                    proficiency={item.proficiency}
                  />
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
