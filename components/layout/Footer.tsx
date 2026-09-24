"use client";

import { getProfile } from "@/data/profile";
import { getSocials } from "@/data/socials";
import { getNavItems } from "@/data/navigation";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale, t } = useLocale();
  const profile = getProfile(locale);
  const socials = getSocials(locale);
  const navItems = getNavItems(locale);
  const year = 2026; // TODO: si prefieres año dinámico, usa new Date().getFullYear().

  return (
    <footer className="relative">
      {/* Línea superior con degradado en movimiento */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent bg-[length:200%_100%] motion-safe:animate-gradient-x"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-24 max-w-3xl bg-primary/10 blur-3xl"
      />
      <div className="container relative py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <a
              href="#hero"
              className="link-underline font-mono text-lg font-bold text-primary"
            >
              {profile.name}
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label={t.footer.navigation} className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              {t.footer.navigation}
            </span>
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              {t.footer.followMe}
            </span>
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)]"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.builtWith}{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span>{" "}
            {locale === "en" ? "and" : "y"}{" "}
            <span className="text-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
