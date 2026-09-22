import type { Language, Locale } from "@/types";

const content: Record<Locale, Language[]> = {
  en: [
    { name: "Spanish", level: "Native", proficiency: 100 },
    { name: "English", level: "Advanced", proficiency: 80 },
    { name: "Japanese", level: "Basic", proficiency: 20 },
  ],
  es: [
    { name: "Español", level: "Nativo", proficiency: 100 },
    { name: "Inglés", level: "Avanzado", proficiency: 80 },
    { name: "Japonés", level: "Básico", proficiency: 20 },
  ],
};

export function getLanguages(locale: Locale): Language[] {
  return content[locale];
}
