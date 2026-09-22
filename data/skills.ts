import {
  Code2,
  Server,
  Brain,
  Database,
  TestTube2,
  Wrench,
  Layout,
  TerminalSquare,
  Network,
} from "lucide-react";
import type { Locale, SkillCategory } from "@/types";

const content: Record<Locale, SkillCategory[]> = {
  en: [
    { id: "languages", title: "Languages", icon: Code2, skills: ["C / C++", "Java", "C#", "JavaScript", "Python"] },
    { id: "frontend", title: "Frontend", icon: Layout, skills: ["React", "Vue.js", "HTML", "CSS"] },
    { id: "backend", title: "Backend", icon: Server, skills: ["Node.js", ".NET", "REST APIs"] },
    { id: "ai", title: "AI & Machine Learning", icon: Brain, skills: ["Python (AI)", "Scikit-learn", "Deep Learning", "Streamlit"] },
    { id: "systems", title: "Systems & DevOps", icon: TerminalSquare, skills: ["Linux", "Windows Server", "Docker", "Bash", "PowerShell", "GitHub Actions (CI/CD)"] },
    { id: "networking", title: "Networking", icon: Network, skills: ["TCP/IP", "DNS", "DHCP", "VPN", "SSH", "Routing & Switching", "Firewalls"] },
    { id: "databases", title: "Databases", icon: Database, skills: ["SQL", "PostgreSQL"] },
    { id: "testing", title: "Testing", icon: TestTube2, skills: ["Cypress", "Testing", "Postman"] },
    { id: "tools", title: "Tools", icon: Wrench, skills: ["Git", "GitHub"] },
  ],
  es: [
    { id: "languages", title: "Lenguajes", icon: Code2, skills: ["C / C++", "Java", "C#", "JavaScript", "Python"] },
    { id: "frontend", title: "Frontend", icon: Layout, skills: ["React", "Vue.js", "HTML", "CSS"] },
    { id: "backend", title: "Backend", icon: Server, skills: ["Node.js", ".NET", "API REST"] },
    { id: "ai", title: "IA & Machine Learning", icon: Brain, skills: ["Python (IA)", "Scikit-learn", "Deep Learning", "Streamlit"] },
    { id: "systems", title: "Sistemas & DevOps", icon: TerminalSquare, skills: ["Linux", "Windows Server", "Docker", "Bash", "PowerShell", "GitHub Actions (CI/CD)"] },
    { id: "networking", title: "Redes", icon: Network, skills: ["TCP/IP", "DNS", "DHCP", "VPN", "SSH", "Routing & Switching", "Firewalls"] },
    { id: "databases", title: "Bases de Datos", icon: Database, skills: ["SQL", "PostgreSQL"] },
    { id: "testing", title: "Testing", icon: TestTube2, skills: ["Cypress", "Testing", "Postman"] },
    { id: "tools", title: "Herramientas", icon: Wrench, skills: ["Git", "GitHub"] },
  ],
};

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return content[locale];
}
