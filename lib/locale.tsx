"use client";

import * as React from "react";
import type { Locale } from "@/types";

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "en";

const dictionary = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      goHome: "Go to home",
      contactMe: "Contact me",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNav: "Main navigation",
    },
    theme: { toEnableLight: "Switch to light mode", toEnableDark: "Switch to dark mode" },
    lang: { switchTo: "Switch to Spanish", switchToLabel: "ES" },
    hero: { available: "Available for new opportunities", contactCta: "Contact me", downloadCv: "Download CV" },
    sections: {
      about: { eyebrow: "01", title: "About me", description: "A bit about who I am, how I work and what drives me." },
      experience: { eyebrow: "02", title: "Experience", description: "My professional and academic journey, from the most recent projects to the first." },
      projects: { eyebrow: "03", title: "Projects", description: "A selection of projects combining artificial intelligence, web development and management systems." },
      skills: { eyebrow: "04", title: "Skills", description: "Technologies and tools I work with, grouped by area." },
      technologies: { eyebrow: "05", title: "Tech stack", description: "Hover over each logo to see the technology." },
      education: { eyebrow: "06", title: "Education", description: "My academic background and recognition." },
      languages: { eyebrow: "07", title: "Languages", description: "Languages I speak and my level in each." },
      contact: { eyebrow: "08", title: "Let's work together", description: "Have a project in mind or an opportunity? Write to me and I'll get back to you as soon as possible." },
    },
    backToTop: "Back to top",
    project: {
      featured: "Featured",
      difficulty: { basic: "Basic", intermediate: "Intermediate", advanced: "Advanced" },
      difficultyLabel: "Difficulty",
      problemsSolved: "Problems solved",
      code: "Code",
      demo: "Demo",
      privateRepo: "Private repository",
    },
    education: { certifications: "Certifications", view: "View" },
    contact: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      name: "Name",
      namePlaceholder: "Your name",
      emailField: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about your project or opportunity…",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      errorFallback: "Couldn't send it. Please try again.",
      doNotFill: "Do not fill",
    },
    footer: {
      navigation: "Navigation",
      followMe: "Follow me",
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
    notFound: {
      title: "Page not found",
      description: "Sorry, the page you're looking for doesn't exist or was moved.",
      backHome: "Back to home",
    },
    validation: {
      nameMin: "Name must be at least 2 characters.",
      nameMax: "Name is too long.",
      emailInvalid: "Enter a valid email address.",
      messageMin: "Message must be at least 10 characters.",
      messageMax: "Message is too long.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      education: "Educación",
      contact: "Contacto",
      goHome: "Ir al inicio",
      contactMe: "Contáctame",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainNav: "Navegación principal",
    },
    theme: { toEnableLight: "Activar modo claro", toEnableDark: "Activar modo oscuro" },
    lang: { switchTo: "Cambiar a inglés", switchToLabel: "EN" },
    hero: { available: "Disponible para nuevas oportunidades", contactCta: "Contáctame", downloadCv: "Descargar CV" },
    sections: {
      about: { eyebrow: "01", title: "Sobre mí", description: "Un poco sobre quién soy, cómo trabajo y qué me motiva." },
      experience: { eyebrow: "02", title: "Experiencia", description: "Mi recorrido profesional y académico, de los proyectos más recientes a los primeros." },
      projects: { eyebrow: "03", title: "Proyectos", description: "Una selección de proyectos que combinan inteligencia artificial, desarrollo web y sistemas de gestión." },
      skills: { eyebrow: "04", title: "Habilidades", description: "Tecnologías y herramientas con las que trabajo, agrupadas por área." },
      technologies: { eyebrow: "05", title: "Stack tecnológico", description: "Pasa el cursor sobre cada logo para ver la tecnología." },
      education: { eyebrow: "06", title: "Educación", description: "Mi formación académica y reconocimientos." },
      languages: { eyebrow: "07", title: "Idiomas", description: "Idiomas que hablo y mi nivel en cada uno." },
      contact: { eyebrow: "08", title: "Trabajemos juntos", description: "¿Tienes un proyecto en mente o una oportunidad? Escríbeme y te responderé lo antes posible." },
    },
    backToTop: "Volver arriba",
    project: {
      featured: "Destacado",
      difficulty: { basic: "Básico", intermediate: "Intermedio", advanced: "Avanzado" },
      difficultyLabel: "Dificultad",
      problemsSolved: "Problemas resueltos",
      code: "Código",
      demo: "Demo",
      privateRepo: "Repositorio privado",
    },
    education: { certifications: "Certificaciones", view: "Ver" },
    contact: {
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      emailField: "Correo electrónico",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto u oportunidad…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Mensaje enviado! Te responderé pronto.",
      errorFallback: "No se pudo enviar. Intenta de nuevo.",
      doNotFill: "No rellenar",
    },
    footer: {
      navigation: "Navegación",
      followMe: "Sígueme",
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con",
    },
    notFound: {
      title: "Página no encontrada",
      description: "Lo sentimos, la página que buscas no existe o fue movida.",
      backHome: "Volver al inicio",
    },
    validation: {
      nameMin: "El nombre debe tener al menos 2 caracteres.",
      nameMax: "El nombre es demasiado largo.",
      emailInvalid: "Introduce un correo electrónico válido.",
      messageMin: "El mensaje debe tener al menos 10 caracteres.",
      messageMax: "El mensaje es demasiado largo.",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
}

const LocaleContext = React.createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "es") setLocaleState(stored);
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  const value = React.useMemo(
    () => ({ locale, setLocale, toggleLocale, t: dictionary[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within <LocaleProvider>.");
  }
  return context;
}
