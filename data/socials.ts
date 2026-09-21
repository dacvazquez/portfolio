import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { profile } from "./profile";

export const socials: SocialLink[] = [
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
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: "Enviar un correo a Daniel Capote",
  },
];
