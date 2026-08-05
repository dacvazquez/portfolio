"use client";

import * as React from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // El tema por defecto es "dark" (ver script inline en app/layout.tsx que evita FOUC).
  const [theme, setThemeState] = React.useState<Theme>("dark");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
    }
  }, []);

  const applyTheme = React.useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const setTheme = React.useCallback(
    (next: Theme) => {
      setThemeState(next);
      applyTheme(next);
    },
    [applyTheme]
  );

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = React.useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de <ThemeProvider>.");
  }
  return context;
}
