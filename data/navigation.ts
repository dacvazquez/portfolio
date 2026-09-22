import type { Locale, NavItem } from "@/types";

const content: Record<Locale, NavItem[]> = {
  en: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  es: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Educación", href: "#education" },
    { label: "Contacto", href: "#contact" },
  ],
};

export function getNavItems(locale: Locale): NavItem[] {
  return content[locale];
}
