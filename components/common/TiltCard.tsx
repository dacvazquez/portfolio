"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const spring = { stiffness: 180, damping: 18, mass: 0.5 };

/** Inclina su contenido en 3D siguiendo al cursor, con un reflejo opcional. */
export function TiltCard({
  children,
  className,
  wrapperClassName,
  max = 10,
  glare = false,
}: {
  children: ReactNode;
  /** Clases del elemento que se inclina. */
  className?: string;
  /** Clases del contenedor con perspectiva. */
  wrapperClassName?: string;
  /** Inclinación máxima en grados. */
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  // Posición del cursor normalizada (0–1) dentro de la tarjeta.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, hsl(0 0% 100% / 0.14), transparent 55%)`;

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={cn("[perspective:1000px]", wrapperClassName)}>
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={enabled ? { rotateX, rotateY } : undefined}
        className={cn("group/tilt relative", className)}
      >
        {children}
        {glare && enabled && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}
