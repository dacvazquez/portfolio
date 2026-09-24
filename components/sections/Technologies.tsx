"use client";

import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { TechCard } from "./TechCard";
import { technologies } from "@/data/technologies";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

// Dos filas que se desplazan en sentidos opuestos.
const half = Math.ceil(technologies.length / 2);
const rows = [technologies.slice(0, half), technologies.slice(half)];

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

      <Reveal className="mt-12 space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="group flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]"
          >
            {/* Dos copias seguidas para que el bucle no tenga cortes. */}
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className={cn(
                  "flex shrink-0 gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0",
                  rowIndex === 1 && "[animation-direction:reverse] [animation-duration:45s]",
                  copy === 1 && "motion-reduce:hidden"
                )}
              >
                {row.map((tech) => (
                  <li key={tech.name}>
                    <TechCard tech={tech} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
