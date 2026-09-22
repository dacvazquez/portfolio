"use client";

import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/data/projects";
import { useLocale } from "@/lib/locale";

export function Projects() {
  const { locale, t } = useLocale();
  const projects = getProjects(locale);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow={t.sections.projects.eyebrow}
        title={t.sections.projects.title}
        description={t.sections.projects.description}
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
