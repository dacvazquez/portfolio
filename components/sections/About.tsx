"use client";

import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { getProfile } from "@/data/profile";
import { useLocale } from "@/lib/locale";

export function About() {
  const { locale, t } = useLocale();
  const profile = getProfile(locale);

  return (
    <Section id="about">
      <SectionHeading
        eyebrow={t.sections.about.eyebrow}
        title={t.sections.about.title}
        description={t.sections.about.description}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="left" className="h-fit">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="bg-card p-5 transition-colors hover:bg-card/60"
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                  {highlight.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-foreground">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
