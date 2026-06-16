import { experiences } from "../../data/portfolio.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import TimelineItem from "../ui/TimelineItem.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and the impact I've made along the way."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-primary-500/80 via-accent-cyan/60 to-accent-pink/80 md:left-1/2 md:-translate-x-1/2" />
        {/* Glow effect on the line */}
        <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-primary-500/20 via-accent-cyan/10 to-accent-pink/20 blur-sm md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
