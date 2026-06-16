import { projects } from "../../data/portfolio.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import { StaggerContainer } from "../animations/StaggerChildren.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects I've built — from full-stack apps to developer tools."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerContainer>
    </section>
  );
}
