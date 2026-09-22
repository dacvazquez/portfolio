import { z } from "zod";
import type { Locale } from "@/types";

const messages: Record<Locale, { nameMin: string; nameMax: string; emailInvalid: string; messageMin: string; messageMax: string }> = {
  en: {
    nameMin: "Name must be at least 2 characters.",
    nameMax: "Name is too long.",
    emailInvalid: "Enter a valid email address.",
    messageMin: "Message must be at least 10 characters.",
    messageMax: "Message is too long.",
  },
  es: {
    nameMin: "El nombre debe tener al menos 2 caracteres.",
    nameMax: "El nombre es demasiado largo.",
    emailInvalid: "Introduce un correo electrónico válido.",
    messageMin: "El mensaje debe tener al menos 10 caracteres.",
    messageMax: "El mensaje es demasiado largo.",
  },
};

/** Esquema del formulario de contacto, con mensajes de error en el idioma indicado. */
export function getContactFormSchema(locale: Locale = "en") {
  const m = messages[locale];
  return z.object({
    name: z.string().trim().min(2, m.nameMin).max(80, m.nameMax),
    email: z.string().trim().email(m.emailInvalid),
    message: z.string().trim().min(10, m.messageMin).max(2000, m.messageMax),
    // Honeypot anti-spam: debe quedar vacío.
    website: z.string().max(0).optional(),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactFormSchema>>;
