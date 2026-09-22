"use client";

import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechCard } from "./TechCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { technologies } from "@/data/technologies";
import { useLocale } from "@/lib/locale";

export function Technologies() {
  const { t } = useLocale();

  return (
    <Section id="technologies" className="pt-0 sm:pt-0">
      <SectionHeading
        eyebrow={t.sections.technologies.eyebrow}
        title={t.sections.technologies.title}
        description={t.sections.technologies.description}
        align="center"
      />

      <TooltipProvider delayDuration={100}>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-3 sm:grid-cols-6 md:gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
