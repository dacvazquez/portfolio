"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lightbulb, Signal } from "lucide-react";
import type { Project, ProjectDifficulty } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<ProjectDifficulty, string> = {
  Básico: "text-emerald-400",
  Intermedio: "text-amber-400",
  Avanzado: "text-primary",
};

const difficultyBars: Record<ProjectDifficulty, number> = {
  Básico: 1,
  Intermedio: 2,
  Avanzado: 3,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      {/* Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary/40">
        <Image
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        {project.featured && (
          <span className="absolute left-3 top-3">
            <Badge>Destacado</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <span
            className={cn(
              "flex shrink-0 items-center gap-1 text-xs font-medium",
              difficultyStyles[project.difficulty]
            )}
            title={`Dificultad: ${project.difficulty}`}
          >
            <span className="flex items-end gap-0.5" aria-hidden>
              {[1, 2, 3].map((bar) => (
                <span
                  key={bar}
                  className={cn(
                    "w-1 rounded-full bg-current",
                    bar === 1 && "h-2",
                    bar === 2 && "h-3",
                    bar === 3 && "h-4",
                    bar > difficultyBars[project.difficulty] && "opacity-25"
                  )}
                />
              ))}
            </span>
            <Signal className="sr-only" />
            {project.difficulty}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Problemas resueltos */}
        {project.problemsSolved.length > 0 && (
          <div className="mt-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              <Lightbulb className="h-3.5 w-3.5 text-primary" />
              Problemas resueltos
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.problemsSolved.map((problem, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Acciones */}
        <div className="mt-5 flex items-center gap-2 pt-1">
          {project.githubUrl && (
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" /> Código
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild size="sm" className="flex-1">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </Button>
          )}
          {!project.githubUrl && !project.demoUrl && (
            <span className="text-xs italic text-muted-foreground/60">
              Repositorio privado
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
