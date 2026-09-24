"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, CheckCircle2, Trophy } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";
import { getExperiences } from "@/data/experience";
import { useLocale } from "@/lib/locale";

export function Experience() {
  const { locale, t } = useLocale();
  const experiences = getExperiences(locale);

  // La línea del timeline se "dibuja" a medida que se hace scroll.
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={t.sections.experience.eyebrow}
        title={t.sections.experience.title}
        description={t.sections.experience.description}
      />

      <div className="mt-14">
        <ol ref={listRef} className="relative ml-2">
          {/* Línea base y línea de progreso */}
          <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-border" />
          <motion.span
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-primary to-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.8)]"
          />

          {experiences.map((exp, index) => (
            <li key={exp.id} className="relative pb-14 pl-8 last:pb-0">
              {/* Nodo: se rellena y emite un pulso al entrar en pantalla */}
              <motion.span
                className="absolute -left-[6.5px] top-1.5 flex h-3.5 w-3.5 items-center justify-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -35% 0px" }}
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-primary"
                  variants={{
                    hidden: { scale: 1, opacity: 0 },
                    show: {
                      scale: [1, 3],
                      opacity: [0.6, 0],
                      transition: { duration: 1.2, ease: "easeOut" },
                    },
                  }}
                />
                <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <motion.span
                    className="h-full w-full rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.8)]"
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      show: {
                        scale: 1,
                        opacity: 1,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      },
                    }}
                  />
                </span>
              </motion.span>

              <Reveal delay={index * 0.05} direction="right">
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
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="transition-colors hover:border-primary/40 hover:text-primary"
                      >
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
