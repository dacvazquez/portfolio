import { Github, Linkedin, Mail } from "lucide-react";
import type { Locale, SocialLink } from "@/types";
import { getProfile } from "./profile";

const content: Record<Locale, SocialLink[]> = {
  en: [
    {
      name: "GitHub",
      href: "https://github.com/dacvazquez",
      icon: Github,
      label: "Daniel Capote's GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-capote-a44255309/",
      icon: Linkedin,
      label: "Daniel Capote's LinkedIn profile",
    },
    {
      name: "Email",
      href: `mailto:${getProfile("en").email}`,
      icon: Mail,
      label: "Send Daniel Capote an email",
    },
  ],
  es: [
    {
      name: "GitHub",
      href: "https://github.com/dacvazquez",
      icon: Github,
      label: "Perfil de GitHub de Daniel Capote",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-capote-a44255309/",
      icon: Linkedin,
      label: "Perfil de LinkedIn de Daniel Capote",
    },
    {
      name: "Email",
      href: `mailto:${getProfile("es").email}`,
      icon: Mail,
      label: "Enviar un correo a Daniel Capote",
    },
  ],
};

export function getSocials(locale: Locale): SocialLink[] {
  return content[locale];
}
