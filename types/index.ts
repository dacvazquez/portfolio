import type { LucideIcon } from "lucide-react";

/** Perfil / información personal principal. */
export interface Profile {
  name: string;
  role: string;
  /** Frase corta para el hero. */
  tagline: string;
  /** Descripción breve bajo el nombre en el hero. */
  heroDescription: string;
  /** Bio larga para la sección "Sobre mí" (array de párrafos). */
  about: string[];
  location: string;
  email: string;
  phone: string;
  /** Ruta al avatar dentro de /public. */
  avatar: string;
  /** Ruta al CV en PDF dentro de /public. */
  resume: string;
  /** Datos rápidos mostrados como stats en el hero / about. */
  highlights: { label: string; value: string }[];
}

/** Enlaces sociales. */
export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  /** Etiqueta accesible. */
  label: string;
}

/** Entrada de experiencia / logros. */
export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  /** Rango de fechas legible, p.ej. "Oct 2025 — May 2026". */
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export type ProjectDifficulty = "Básico" | "Intermedio" | "Avanzado";

/** Proyecto del portafolio. */
export interface Project {
  id: string;
  title: string;
  description: string;
  /** Ruta a la imagen en /public. Usa un placeholder si no hay. */
  image: string;
  technologies: string[];
  difficulty: ProjectDifficulty;
  /** Problemas concretos resueltos por el proyecto. */
  problemsSolved: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

/** Categoría de habilidades. */
export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

/** Tecnología con logo (para la nube de tecnologías). */
export interface Technology {
  name: string;
  /** slug de simpleicons.org para el logo. */
  slug: string;
  /** color hex de marca (sin #). */
  color: string;
}

/** Educación. */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
}

/** Certificación. */
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

/** Idioma con nivel. */
export interface Language {
  name: string;
  level: string;
  /** Nivel numérico 0-100 para la barra de progreso. */
  proficiency: number;
}

/** Ítem de navegación. */
export interface NavItem {
  label: string;
  href: string;
}
