"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setServerMessage("");

    // Capturamos el form antes de cualquier await (React reinicia currentTarget).
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""), // honeypot
    };

    // Validación en cliente.
    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Ocurrió un error inesperado."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot anti-spam (oculto para usuarios) */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">No rellenar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Correo electrónico
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto u oportunidad…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Enviar mensaje
            </>
          )}
        </Button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-emerald-400"
            >
              <CheckCircle2 className="h-4 w-4" /> ¡Mensaje enviado! Te
              responderé pronto.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4" />{" "}
              {serverMessage || "No se pudo enviar. Intenta de nuevo."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
