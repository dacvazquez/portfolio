import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="04"
        title="Habilidades"
        description="Tecnologías y herramientas con las que trabajo, agrupadas por área."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.id} delay={(index % 3) * 0.08} className="h-full">
              <Card className="group h-full p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
