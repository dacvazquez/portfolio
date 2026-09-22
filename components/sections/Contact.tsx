"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";
import { ContactForm } from "./ContactForm";
import { getProfile } from "@/data/profile";
import { getSocials } from "@/data/socials";
import { useLocale } from "@/lib/locale";

export function Contact() {
  const { locale, t } = useLocale();
  const profile = getProfile(locale);
  const socials = getSocials(locale);

  const contactDetails = [
    { icon: Mail, label: t.contact.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t.contact.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: t.contact.location, value: profile.location },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.sections.contact.eyebrow}
        title={t.sections.contact.title}
        description={t.sections.contact.description}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info de contacto */}
        <Reveal className="space-y-5">
          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block rounded-lg transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>

          <div className="flex gap-2 pt-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* Formulario */}
        <Reveal direction="left">
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
