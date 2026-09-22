import type { Certification, Locale } from "@/types";

// No certifications yet. The section only shows up if this list isn't empty.
const content: Record<Locale, Certification[]> = { en: [], es: [] };

export function getCertifications(locale: Locale): Certification[] {
  return content[locale];
}
