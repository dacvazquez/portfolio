"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { getLanguages } from "@/data/languages";
import { useLocale } from "@/lib/locale";

export function Languages() {
  const { locale, t } = useLocale();
  const languages = getLanguages(locale);

  return (
    <Section id="languages" className="pt-0 sm:pt-0">
      <SectionHeading
        eyebrow={t.sections.languages.eyebrow}
        title={t.sections.languages.title}
        description={t.sections.languages.description}
      />

      <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
        {languages.map((lang, index) => (
          <Reveal key={lang.name} delay={index * 0.1}>
            <SpotlightCard className="group p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LanguagesIcon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <h3 className="font-semibold">{lang.name}</h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {lang.level}
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-primary/70 to-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Brillo que recorre la barra */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent motion-safe:animate-shine" />
                </motion.div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
