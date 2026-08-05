"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="container flex h-16 items-center justify-between"
        aria-label="Navegación principal"
      >
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Ir al inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary transition-colors group-hover:bg-primary/20">
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
                    "relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">Contáctame</a>
          </Button>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contáctame
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
