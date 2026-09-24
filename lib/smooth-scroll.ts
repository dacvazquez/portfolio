import type Lenis from "lenis";

// Instancia única de Lenis, compartida por los componentes que hacen scroll.
let lenis: Lenis | null = null;
let locked = false;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
  if (lenis && locked) lenis.stop();
}

/** Hace scroll suave a una posición o elemento (con fallback nativo). */
export function scrollToTarget(target: number | string | HTMLElement) {
  if (lenis) {
    lenis.scrollTo(target);
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}

/** Bloquea el scroll (p.ej. mientras se muestra el loader). */
export function lockScroll() {
  locked = true;
  document.documentElement.style.overflow = "hidden";
  lenis?.stop();
}

export function unlockScroll() {
  locked = false;
  document.documentElement.style.overflow = "";
  lenis?.start();
}
