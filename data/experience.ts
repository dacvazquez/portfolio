import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "thesis-uclv",
    company: "Universidad Central «Marta Abreu» de Las Villas",
    role: "Trabajo de Diploma — Investigación en IA",
    location: "Villa Clara, Cuba",
    period: "2024 — Jul 2025",
    description:
      "Tesis de grado centrada en la detección y clasificación de comportamientos transgresivos en línea mediante modelos de inteligencia artificial.",
    responsibilities: [
      "Diseño y entrenamiento de modelos de aprendizaje automático y profundo para el análisis de contenido en sitios web.",
      "Preprocesamiento de datos, extracción de características y evaluación de métricas del modelo.",
      "Desarrollo de la aplicación que integra los modelos para detectar y clasificar comportamientos en tiempo real.",
    ],
    achievements: [
      "Tesis expuesta y aprobada en julio de 2025.",
      "Aplicación funcional end-to-end que combina IA y una interfaz de análisis.",
    ],
    technologies: ["Python", "Scikit-learn", "Deep Learning", "Streamlit"],
  },
  {
    id: "cupet-networks",
    company: "Comercializadora de CUPET",
    role: "Técnico en Administración de Redes",
    location: "Villa Clara, Cuba",
    period: "Oct 2025 — May 2026",
    description:
      "Administración y mantenimiento de la infraestructura de red de la comercializadora.",
    responsibilities: [
      "Administración de redes: configuración, monitoreo y mantenimiento de la conectividad.",
      "Resolución de incidencias y soporte técnico a usuarios.",
      "Aseguramiento de la disponibilidad y estabilidad de los servicios de red.",
    ],
    achievements: [],
    technologies: ["Administración de redes", "Soporte técnico"],
  },
  {
    id: "practices-uclv",
    company: "Universidad Central «Marta Abreu» de Las Villas",
    role: "Proyectos de Práctica — Desarrollo de Software",
    location: "Villa Clara, Cuba",
    period: "2021 — 2025 (durante la carrera)",
    description:
      "Varios proyectos prácticos culminados en el desarrollo de software funcional, abarcando IA aplicada a la salud y sistemas de gestión.",
    responsibilities: [
      "«Diagnóstico de Esclerosis Múltiple»: aplicación de apoyo al diagnóstico basada en modelos de IA.",
      "«Control de medios mobiliarios»: sistema de gestión de inventario de mobiliario.",
      "«Control de material humano en enfermería»: sistema de gestión de personal de enfermería.",
    ],
    achievements: [
      "Participación y mención en el Fórum Científico Universitario «52 Jornada Científico Estudiantil Universitaria».",
      "Entrega de múltiples sistemas funcionales a lo largo de la carrera.",
    ],
    technologies: ["Python", "C#", ".NET", "React", "SQL", "PostgreSQL"],
  },
];
