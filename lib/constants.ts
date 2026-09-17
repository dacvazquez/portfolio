import { profile } from "@/data/profile";

/** URL pública del sitio (para SEO / OG / sitemap). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const SITE_CONFIG = {
  name: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description: profile.heroDescription,
  url: SITE_URL,
  locale: "es_ES",
  keywords: [
    "Daniel Capote Vázquez",
    "Desarrollador de Software",
    "Inteligencia Artificial",
    "Machine Learning",
    "Desarrollo Web",
    "React",
    "Python",
    "Next.js",
    "Portafolio",
    "Cuba",
  ],
} as const;
