"use client";

import { GraduationCap, Award, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { getEducation } from "@/data/education";
import { getCertifications } from "@/data/certifications";
import { useLocale } from "@/lib/locale";

export function Education() {
  const { locale, t } = useLocale();
  const education = getEducation(locale);
  const certifications = getCertifications(locale);

  return (
    <Section id="education">
      <SectionHeading
        eyebrow={t.sections.education.eyebrow}
        title={t.sections.education.title}
        description={t.sections.education.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Educación */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 0.08}>
              <SpotlightCard className="group p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/20">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="mt-0.5 text-sm text-foreground/90">
                      {edu.institution}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {edu.period} · {edu.location}
                    </p>
                    {edu.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {edu.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Certificaciones (solo si existen) */}
        {certifications.length > 0 && (
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
              <Award className="h-4 w-4 text-primary" />
              {t.education.certifications}
            </h3>
            {certifications.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 0.08}>
                <SpotlightCard className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h4 className="text-sm font-semibold">{cert.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      {t.education.view}
                    </a>
                  )}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
