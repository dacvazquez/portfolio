"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Fondo decorativo: rejilla, auroras rojas que se mueven despacio y un foco de
 * luz que sigue al cursor iluminando la rejilla.
 */
export function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const followCursor = finePointer && !reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !followCursor) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${event.clientX}px`);
        el.style.setProperty("--my", `${event.clientY}px`);
        el.dataset.pointer = "on";
      });
    };
    const onLeave = () => {
      el.dataset.pointer = "off";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [followCursor]);

  return (
    <div
      ref={ref}
      aria-hidden
      data-pointer="off"
      className="group/bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Rejilla roja y resplandor que siguen al cursor */}
      <div className="grid-spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-data-[pointer=on]/bg:opacity-100" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(600px_circle_at_var(--mx)_var(--my),hsl(var(--primary)/0.09),transparent_40%)] group-data-[pointer=on]/bg:opacity-100" />

      {/* Aurora superior */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] motion-safe:animate-aurora-drift" />

      {/* Aurora lateral */}
      <div className="absolute left-0 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px] motion-safe:animate-aurora-drift-alt" />

      {/* Aurora inferior */}
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10 blur-[120px] motion-safe:animate-aurora-drift [animation-delay:-9s]" />

      {/* Grano */}
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />

      {/* Viñeta para fundir con el fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
