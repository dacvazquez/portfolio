import { z } from "zod";

/** Esquema compartido (cliente + servidor) del formulario de contacto. */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(80, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .email("Introduce un correo electrónico válido."),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "El mensaje es demasiado largo."),
  // Honeypot anti-spam: debe quedar vacío.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
