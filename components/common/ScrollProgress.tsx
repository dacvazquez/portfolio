"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso de scroll fija en la parte superior de la página. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary/40 via-primary to-[hsl(0_100%_75%)] shadow-[0_0_14px_hsl(var(--primary)/0.8)]"
      aria-hidden
    />
  );
}
