"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { getProfile } from "@/data/profile";
import { getSocials } from "@/data/socials";
import { useLocale } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/types";

const TERMINAL_LINES = ["ia_engineer.py", "full_stack_dev.ts", "problem_solver.exe"];

/** Panel tipo terminal con efecto de escritura en loop entre roles/stack. */
function TerminalPanel({ profile }: { profile: Profile }) {
  const prefersReducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(
    prefersReducedMotion ? TERMINAL_LINES[0] : ""
  );
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = TERMINAL_LINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setLineIndex((i) => (i + 1) % TERMINAL_LINES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, prefersReducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative rounded-xl border border-primary/30 bg-card/70 p-5 font-mono text-sm shadow-2xl backdrop-blur">
        {/* Avatar flotante, insignia de identidad sobre el panel */}
        <div className="absolute -right-4 -top-4 h-14 w-14 overflow-hidden rounded-full border-2 border-background shadow-lg">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            priority
            sizes="3.5rem"
            className="object-cover"
          />
        </div>

        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <p className="text-muted-foreground">$ whoami</p>
        <p className="mt-1 min-h-[1.25em] text-primary">
          &gt; {text}
          <span aria-hidden className="motion-safe:animate-pulse">
            _
          </span>
        </p>
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { locale, t } = useLocale();
  const profile = getProfile(locale);
  const socials = getSocials(locale);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-16"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Texto */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t.hero.available}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-xl font-medium text-primary sm:text-2xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <a href="#contact">
                  {t.hero.contactCta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.resume} download>
                  <Download className="h-4 w-4" /> {t.hero.downloadCv}
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Panel terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalPanel profile={profile} />
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
