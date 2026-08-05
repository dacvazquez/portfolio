"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Button } from "@/components/ui/button";

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
                Disponible para nuevas oportunidades
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
                  Contáctame <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.resume} download>
                  <Download className="h-4 w-4" /> Descargar CV
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

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xs lg:max-w-sm"
          >
            <div className="relative aspect-square">
              {/* Halo */}
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
              {/* Anillo giratorio sutil */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-primary/20 motion-safe:[animation:spin_40s_linear_infinite]" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-card">
                <Image
                  src={profile.avatar}
                  alt={`Foto de ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 20rem, 24rem"
                  className="object-cover"
                />
              </div>
            </div>
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
