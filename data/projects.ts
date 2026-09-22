import type { Locale, Project } from "@/types";

const content: Record<Locale, Project[]> = {
  en: [
    {
      id: "online-behavior-analysis",
      title: "Detection of Transgressive Online Behavior",
      description:
        "Thesis application that uses artificial intelligence models to detect and classify transgressive behavior on websites, combining data processing with an analysis interface.",
      image: "/projects/online-behavior.svg",
      technologies: ["Python", "Scikit-learn", "Deep Learning", "Streamlit"],
      difficulty: "advanced",
      problemsSolved: [
        "Automatic classification of transgressive content with ML/DL models.",
        "Preprocessing and feature extraction pipeline from web text.",
        "Interface to visualize and explore analysis results in real time.",
      ],
      githubUrl: "https://github.com/dacvazquez/Repo-Analisis-en-Linea",
      featured: true,
    },
    {
      id: "multiple-sclerosis-diagnosis",
      title: "Multiple Sclerosis Diagnosis",
      description:
        "Diagnosis support system for multiple sclerosis based on machine learning models, aimed at assisting clinical decision-making.",
      image: "/projects/ms-diagnosis.svg",
      technologies: ["Python", "Scikit-learn", "Machine Learning"],
      difficulty: "advanced",
      problemsSolved: [
        "Classification model to support diagnosis from clinical data.",
        "Analysis and cleaning of medical datasets.",
        "Performance evaluation with relevant clinical metrics.",
      ],
      githubUrl: "https://github.com/dacvazquez/Multiple-Sclerosis-Diagnosis",
      featured: true,
    },
    {
      id: "furniture-control",
      title: "Furniture Asset Management",
      description:
        "Furniture inventory management system that allows registering, controlling and tracking an institution's assets.",
      image: "/projects/furniture-control.svg",
      technologies: ["C#", ".NET", "SQL"],
      difficulty: "intermediate",
      problemsSolved: [
        "Registration and traceability of furniture inventory.",
        "CRUD management with persistence in a relational database.",
      ],
    },
    {
      id: "nursing-staff-control",
      title: "Nursing Staff Management",
      description:
        "Nursing staff management application to organize and control the department's human resources.",
      image: "/projects/nursing-control.svg",
      technologies: ["C#", ".NET", "SQL", "PostgreSQL"],
      difficulty: "intermediate",
      problemsSolved: [
        "Centralized management of nursing staff.",
        "Control of assignments and availability of human resources.",
      ],
    },
  ],
  es: [
    {
      id: "online-behavior-analysis",
      title: "Detección de Comportamientos Transgresivos en Línea",
      description:
        "Aplicación de tesis que emplea modelos de inteligencia artificial para detectar y clasificar comportamientos transgresivos en sitios web, combinando procesamiento de datos y una interfaz de análisis.",
      image: "/projects/online-behavior.svg",
      technologies: ["Python", "Scikit-learn", "Deep Learning", "Streamlit"],
      difficulty: "advanced",
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
      difficulty: "advanced",
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
      difficulty: "intermediate",
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
      difficulty: "intermediate",
      problemsSolved: [
        "Gestión centralizada del personal de enfermería.",
        "Control de asignaciones y disponibilidad de recursos humanos.",
      ],
    },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return content[locale];
}
