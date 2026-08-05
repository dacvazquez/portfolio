import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="03"
        title="Proyectos"
        description="Una selección de proyectos que combinan inteligencia artificial, desarrollo web y sistemas de gestión."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
