"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";
import { languages } from "@/data/languages";

export function Languages() {
  return (
    <Section id="languages" className="pt-0 sm:pt-0">
      <SectionHeading
        eyebrow="07"
        title="Idiomas"
        description="Idiomas que hablo y mi nivel en cada uno."
      />

      <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
        {languages.map((lang, index) => (
          <Reveal key={lang.name} delay={index * 0.1}>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LanguagesIcon className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">{lang.name}</h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {lang.level}
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
