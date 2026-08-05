import {
  Code2,
  Server,
  Brain,
  Database,
  TestTube2,
  Wrench,
  Layout,
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Lenguajes",
    icon: Code2,
    skills: ["C / C++", "Java", "C#", "JavaScript", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Vue.js", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", ".NET", "API REST"],
  },
  {
    id: "ai",
    title: "IA & Machine Learning",
    icon: Brain,
    skills: ["Python (IA)", "Scikit-learn", "Deep Learning", "Streamlit"],
  },
  {
    id: "databases",
    title: "Bases de Datos",
    icon: Database,
    skills: ["SQL", "PostgreSQL"],
  },
  {
    id: "testing",
    title: "Testing",
    icon: TestTube2,
    skills: ["Cypress", "Testing", "Postman"],
  },
  {
    id: "tools",
    title: "Herramientas",
    icon: Wrench,
    skills: ["Git", "GitHub"],
  },
];
