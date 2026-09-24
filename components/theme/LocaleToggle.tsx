"use client";

import { useLocale } from "@/lib/locale";

/** Botón para alternar el idioma del sitio (EN/ES). */
export function LocaleToggle({ className }: { className?: string }) {
  const { t, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.lang.switchTo}
      className={
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border font-mono text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-foreground active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
        (className ?? "")
      }
    >
      {t.lang.switchToLabel}
    </button>
  );
}
