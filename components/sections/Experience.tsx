import { Briefcase, CheckCircle2, Trophy } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="02"
        title="Experiencia"
        description="Mi recorrido profesional y académico, de los proyectos más recientes a los primeros."
      />

      <div className="mt-14">
        <ol className="relative ml-2 border-l border-border">
          {experiences.map((exp, index) => (
            <li key={exp.id} className="relative pb-14 pl-8 last:pb-0">
              {/* Nodo */}
              <span className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              </span>

              <Reveal delay={index * 0.05}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 shrink-0 text-primary" />
                    <h3 className="text-lg font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-foreground/90">
                  {exp.company}
                  {exp.location && (
                    <span className="text-muted-foreground">
                      {" "}· {exp.location}
                    </span>
                  )}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {exp.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.achievements.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm text-foreground/90"
                      >
                        <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
