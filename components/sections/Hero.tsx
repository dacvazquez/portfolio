"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { getProfile } from "@/data/profile";
import { getSocials } from "@/data/socials";
import { useLocale } from "@/lib/locale";
import { useIntroComplete } from "@/lib/intro";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/common/AnimatedText";
import { Magnetic } from "@/components/common/Magnetic";
import { TiltCard } from "@/components/common/TiltCard";
import type { Profile } from "@/types";

const TERMINAL_LINES = ["ia_engineer.py", "full_stack_dev.ts", "problem_solver.exe"];

/** Panel tipo terminal con efecto de escritura en loop entre roles/stack. */
function TerminalPanel({ profile }: { profile: Profile }) {
  // Hook basado en efecto: evita desajustes de hidratación con el servidor.
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(TERMINAL_LINES[0]);
      return;
    }

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
      {/* Órbitas decorativas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[min(26rem,88vw)] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 motion-safe:animate-spin-slow">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_4px_hsl(var(--primary)/0.6)]" />
          <span className="absolute bottom-[14%] right-[4%] h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_12px_3px_hsl(var(--primary)/0.5)]" />
        </div>
        <div className="absolute inset-[18%] rounded-full border border-primary/10 motion-safe:animate-spin-slow [animation-direction:reverse] [animation-duration:16s]">
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_3px_hsl(var(--primary)/0.6)]" />
        </div>
      </div>

      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/25 blur-3xl" />

      <div className="motion-safe:animate-float">
        <TiltCard max={12} glare className="rounded-xl">
          <div className="border-beam relative rounded-xl border border-primary/30 bg-card/70 p-5 font-mono text-sm shadow-2xl shadow-primary/10 backdrop-blur">
            {/* Avatar flotante, insignia de identidad sobre el panel */}
            <div className="absolute -right-4 -top-4 h-14 w-14 overflow-hidden rounded-full border-2 border-background shadow-lg ring-2 ring-primary/40">
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
        </TiltCard>
      </div>
    </div>
  );
}

// Tiempos pensados para arrancar mientras sube la cortina del loader.
const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.85 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const badge: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.4, ease },
  },
};

export function Hero() {
  const { locale, t } = useLocale();
  const profile = getProfile(locale);
  const socials = getSocials(locale);
  const introDone = useIntroComplete();
  const reducedMotion = usePrefersReducedMotion();

  // Parallax: el contenido se desplaza y se desvanece al hacer scroll.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const parallax = !reducedMotion;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-x-clip pt-16"
    >
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Texto */}
          <motion.div
            style={parallax ? { y: textY, opacity: fade } : undefined}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={introDone ? "show" : "hidden"}
            >
              <motion.div
                variants={badge}
                initial="hidden"
                animate={introDone ? "show" : "hidden"}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  {t.hero.available}
                </span>
              </motion.div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <AnimatedText
                  text={profile.name}
                  by="letter"
                  delay={0.5}
                  play={introDone}
                />
              </h1>

              <motion.p
                variants={item}
                className="text-shimmer mt-3 w-fit text-xl font-medium sm:text-2xl"
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
                <Magnetic>
                  <Button asChild size="lg">
                    <a href="#contact">
                      {t.hero.contactCta}{" "}
                      <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild size="lg" variant="outline">
                    <a href={profile.resume} download>
                      <Download className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />{" "}
                      {t.hero.downloadCv}
                    </a>
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.div variants={item} className="mt-8 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Magnetic key={social.name} strength={0.4}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/40 text-muted-foreground backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    </Magnetic>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Panel terminal */}
          <motion.div
            style={parallax ? { y: panelY, opacity: fade } : undefined}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4, filter: "blur(10px)" }}
              animate={
                introDone
                  ? { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }
                  : undefined
              }
              transition={{ duration: 1.1, delay: 0.6, ease }}
            >
              <TerminalPanel profile={profile} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : undefined}
        transition={{ delay: 1.6 }}
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
