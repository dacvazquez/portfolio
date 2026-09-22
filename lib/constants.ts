import { getProfile } from "@/data/profile";

/** URL pública del sitio (para SEO / OG / sitemap). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const profile = getProfile("en");

export const SITE_CONFIG = {
  name: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description: profile.heroDescription,
  url: SITE_URL,
  locale: "en_US",
  keywords: [
    "Daniel Capote Vázquez",
    "Software Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "React",
    "Python",
    "Next.js",
    "Portfolio",
    "Cuba",
  ],
} as const;
