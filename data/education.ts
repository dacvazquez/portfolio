import type { Education, Locale } from "@/types";

const content: Record<Locale, Education[]> = {
  en: [
    {
      id: "uclv-cs",
      institution: "Universidad Central «Marta Abreu» de Las Villas (UCLV)",
      degree: "Bachelor's Degree in Computer Science",
      location: "Villa Clara, Cuba",
      period: "2021 — Jul 2025",
      description: "4-year in-person program. Graduated on July 18, 2025.",
      achievements: [
        "Undergraduate thesis: «Detection and classification of transgressive online behavior».",
        "Mention at the University Student Scientific Forum «52nd University Student Scientific Conference».",
      ],
    },
  ],
  es: [
    {
      id: "uclv-cs",
      institution: "Universidad Central «Marta Abreu» de Las Villas (UCLV)",
      degree: "Licenciatura en Ciencias de la Computación",
      location: "Villa Clara, Cuba",
      period: "2021 — Jul 2025",
      description: "Curso presencial de 4 años. Graduado el 18 de julio de 2025.",
      achievements: [
        "Trabajo de Diploma: «Detección y clasificación de comportamientos transgresivos en línea».",
        "Mención en el Fórum Científico Universitario «52 Jornada Científico Estudiantil Universitaria».",
      ],
    },
  ],
};

export function getEducation(locale: Locale): Education[] {
  return content[locale];
}
