"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Número/etiqueta corta, p.ej. "01". */
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium text-primary",
            align === "center" && "justify-center"
          )}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        >
          <motion.span
            className="font-mono"
            variants={{
              hidden: { opacity: 0, x: -12 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
            }}
          >
            {eyebrow}
          </motion.span>
          <motion.span
            aria-hidden
            className="h-px w-10 origin-left bg-gradient-to-r from-primary to-primary/0"
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.15, ease },
              },
            }}
          />
        </motion.span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        <AnimatedText text={title} delay={0.1} />
      </h2>
      {description && (
        <Reveal delay={0.25}>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
