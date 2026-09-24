"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Retardo en segundos. */
  delay?: number;
  /** Dirección de entrada. */
  direction?: Direction;
  className?: string;
  /** Duración de la animación. */
  duration?: number;
}

const offset = 32;

const directions: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: offset },
  down: { x: 0, y: -offset },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
  none: { x: 0, y: 0 },
};

/** Anima el contenido al entrar en pantalla (desplazamiento, desenfoque y escala). */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  className,
}: RevealProps) {
  const from = directions[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)", ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
