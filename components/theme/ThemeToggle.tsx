"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {/* Evita hydration mismatch: solo animamos tras montar. */}
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </motion.span>
        </AnimatePresence>
      ) : (
        <Sun className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
