"use client";

import { motion, type Variants } from "framer-motion";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { getSkillCategories } from "@/data/skills";
import { useLocale } from "@/lib/locale";

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
};

export function Skills() {
  const { locale, t } = useLocale();
  const skillCategories = getSkillCategories(locale);

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={t.sections.skills.eyebrow}
        title={t.sections.skills.title}
        description={t.sections.skills.description}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.id} delay={(index % 3) * 0.08} className="h-full">
              <SpotlightCard className="group h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.7)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                {/* Los chips aparecen en cascada al entrar en pantalla. */}
                <motion.ul
                  className="mt-5 flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.035,
                        delayChildren: 0.2 + (index % 3) * 0.08,
                      },
                    },
                  }}
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chip}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
