import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos del formulario inválidos." },
      { status: 422 }
    );
  }

  const { name, email, message, website } = parsed.data;

  // Honeypot: si el campo oculto viene relleno, es un bot. Fingimos éxito.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // Si no hay configuración de Resend, no rompemos el build/dev:
  // registramos el mensaje y devolvemos un error claro.
  if (!apiKey || !toEmail) {
    console.warn(
      "[contact] RESEND_API_KEY o CONTACT_TO_EMAIL no configurados. Mensaje recibido:",
      { name, email, message }
    );
    return NextResponse.json(
      {
        error:
          "El servicio de correo no está configurado todavía. Configura RESEND_API_KEY y CONTACT_TO_EMAIL.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Portafolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portafolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="margin:0 0 16px;">Nuevo mensaje desde el portafolio</h2>
          <p style="margin:4px 0;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p style="margin:4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
          <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Error inesperado:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

/** Escapa HTML básico para evitar inyección en el email. */
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
