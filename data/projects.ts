import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "online-behavior-analysis",
    title: "Detección de Comportamientos Transgresivos en Línea",
    description:
      "Aplicación de tesis que emplea modelos de inteligencia artificial para detectar y clasificar comportamientos transgresivos en sitios web, combinando procesamiento de datos y una interfaz de análisis.",
    image: "/projects/online-behavior.svg",
    technologies: ["Python", "Scikit-learn", "Deep Learning", "Streamlit"],
    difficulty: "Avanzado",
    problemsSolved: [
      "Clasificación automática de contenido transgresivo con modelos de ML/DL.",
      "Pipeline de preprocesamiento y extracción de características a partir de texto web.",
      "Interfaz para visualizar y explorar los resultados del análisis en tiempo real.",
    ],
    githubUrl: "https://github.com/dacvazquez/Repo-Analisis-en-Linea",
    featured: true,
  },
  {
    id: "multiple-sclerosis-diagnosis",
    title: "Diagnóstico de Esclerosis Múltiple",
    description:
      "Sistema de apoyo al diagnóstico de esclerosis múltiple basado en modelos de aprendizaje automático, orientado a asistir la toma de decisiones clínicas.",
    image: "/projects/ms-diagnosis.svg",
    technologies: ["Python", "Scikit-learn", "Machine Learning"],
    difficulty: "Avanzado",
    problemsSolved: [
      "Modelo de clasificación para apoyar el diagnóstico a partir de datos clínicos.",
      "Análisis y limpieza de datasets médicos.",
      "Evaluación de rendimiento con métricas clínicas relevantes.",
    ],
    githubUrl: "https://github.com/dacvazquez/Multiple-Sclerosis-Diagnosis",
    featured: true,
  },
  {
    id: "furniture-control",
    title: "Control de Medios Mobiliarios",
    description:
      "Sistema de gestión de inventario de mobiliario que permite registrar, controlar y dar seguimiento a los medios de una institución.",
    image: "/projects/furniture-control.svg",
    technologies: ["C#", ".NET", "SQL"],
    difficulty: "Intermedio",
    problemsSolved: [
      "Registro y trazabilidad del inventario de mobiliario.",
      "Gestión CRUD con persistencia en base de datos relacional.",
    ],
  },
  {
    id: "nursing-staff-control",
    title: "Control de Material Humano en Enfermería",
    description:
      "Aplicación de gestión del personal de enfermería para organizar y controlar los recursos humanos del área.",
    image: "/projects/nursing-control.svg",
    technologies: ["C#", ".NET", "SQL", "PostgreSQL"],
    difficulty: "Intermedio",
    problemsSolved: [
      "Gestión centralizada del personal de enfermería.",
      "Control de asignaciones y disponibilidad de recursos humanos.",
    ],
  },
];
