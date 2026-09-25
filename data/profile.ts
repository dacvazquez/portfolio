import type { Locale, Profile } from "@/types";

const content: Record<Locale, Profile> = {
  en: {
    name: "Daniel Capote Vázquez",
    role: "Software Developer",
    tagline: "Applied AI and full-stack web development",
    heroDescription:
      "Computer Science graduate specialized in building AI-driven solutions and modern web applications, with a detail-oriented focus on performance and code quality.",
    about: [
      "I'm Daniel Capote Vázquez, a Computer Science graduate from Universidad Central «Marta Abreu» de Las Villas in Cuba. I move comfortably between full-stack web development and artificial intelligence, and I enjoy turning complex problems into clear, usable products.",
      "During my degree I carried several projects end to end: from machine learning models for medical diagnosis and online behavior detection, to complete management applications. My thesis focused on detecting and classifying transgressive behavior on the web using AI models.",
      "I'm a fast learner and like doing things right: clean code, good practices and a polished user experience. I'm looking to keep growing on teams where technical quality and real impact matter.",
    ],
    location: "A Coruña, Spain",
    email: "daniel.capote2002@gmail.com",
    phone: "+34 611 877 304",
    avatar: "/foto_perfil.jpeg",
    resume: "/cv-en.pdf",
    highlights: [
      { label: "Degree", value: "B.Sc. Computer Science" },
      { label: "Specialty", value: "AI & Web Development" },
      { label: "Projects", value: "5+ end-to-end" },
      { label: "Languages", value: "ES native · EN advanced" },
    ],
  },
  es: {
    name: "Daniel Capote Vázquez",
    role: "Desarrollador de Software",
    tagline: "IA aplicada y desarrollo web full-stack",
    heroDescription:
      "Licenciado en Ciencias de la Computación especializado en construir soluciones basadas en inteligencia artificial y aplicaciones web modernas, con especial atención al detalle, el rendimiento y la calidad del código.",
    about: [
      "Soy Daniel Capote Vázquez, Licenciado en Ciencias de la Computación por la Universidad Central «Marta Abreu» de Las Villas en Cuba. Me muevo con soltura entre el desarrollo web full-stack y la inteligencia artificial, y disfruto convirtiendo problemas complejos en productos claros y usables.",
      "Durante la carrera llevé varios proyectos de principio a fin: desde modelos de machine learning para diagnóstico médico y detección de comportamientos en línea, hasta aplicaciones de gestión completas. Mi tesis se centró en la detección y clasificación de comportamientos transgresivos en la web mediante modelos de IA.",
      "Aprendo rápido y me gusta hacer las cosas bien: código limpio, buenas prácticas y una experiencia de usuario cuidada. Busco seguir creciendo en equipos donde la calidad técnica y el impacto real importen.",
    ],
    location: "A Coruña, España",
    email: "daniel.capote2002@gmail.com",
    phone: "+34 611 877 304",
    avatar: "/foto_perfil.jpeg",
    resume: "/cv-es.pdf",
    highlights: [
      { label: "Titulación", value: "Lic. Ciencias de la Computación" },
      { label: "Especialidad", value: "IA & Desarrollo Web" },
      { label: "Proyectos", value: "5+ end-to-end" },
      { label: "Idiomas", value: "ES nativo · EN avanzado" },
    ],
  },
};

export function getProfile(locale: Locale): Profile {
  return content[locale];
}
