"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/smooth-scroll";

/**
 * Scroll suave con inercia. Lenis respeta `prefers-reduced-motion`, deja el
 * scroll táctil nativo y gestiona los enlaces `#ancla` (usando `scroll-mt-*`).
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
