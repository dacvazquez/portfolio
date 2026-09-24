"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getNavItems } from "@/data/navigation";
import { getProfile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLocale } from "@/lib/locale";
import { useIntroComplete } from "@/lib/intro";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LocaleToggle } from "@/components/theme/LocaleToggle";

export function Navbar() {
  const { locale, t } = useLocale();
  const navItems = getNavItems(locale);
  const profile = getProfile(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  const introDone = useIntroComplete();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al pulsar Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.header
      initial={{ y: -96, opacity: 0 }}
      animate={introDone ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Al hacer scroll, la barra se convierte en una "isla" flotante. */}
      <nav
        className={cn(
          "mx-auto flex items-center justify-between border transition-all duration-500 ease-out-expo",
          scrolled
            ? "mt-3 h-14 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border-border/70 bg-background/70 px-4 shadow-[0_8px_32px_-12px_hsl(var(--primary)/0.25)] backdrop-blur-xl sm:px-5"
            : "mt-0 h-16 w-full max-w-[1200px] rounded-none border-transparent bg-transparent px-6"
        )}
        aria-label={t.nav.mainNav}
      >
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={t.nav.goHome}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-2px_hsl(var(--primary)/0.6)]">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-muted-foreground">
              {profile.name.split(" ")[1]}
            </span>
          </span>
        </a>

        {/* Enlaces desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative isolate rounded-full px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 ring-1 ring-inset ring-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">{t.nav.contactMe}</a>
          </Button>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-xl backdrop-blur-xl md:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 p-3"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="pt-2"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {t.nav.contactMe}
                  </a>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
