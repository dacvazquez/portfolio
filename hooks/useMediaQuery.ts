"use client";

import { useEffect, useState } from "react";

/** Devuelve `true` si la media query indicada coincide. SSR-safe. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/** Atajo: `true` si el usuario prefiere movimiento reducido. */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
