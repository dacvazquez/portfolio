"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { getProfile } from "@/data/profile";
import { markIntroComplete } from "@/lib/intro";
import { lockScroll, unlockScroll } from "@/lib/smooth-scroll";

const profile = getProfile("en");

// Curva tipo "cortina": arranca y frena con suavidad.
const curtainEase = [0.76, 0, 0.24, 1] as const;

/** Pantalla de carga inicial: contador y cortina que sube revelando la página. */
export function Loader() {
  const [loading, setLoading] = useState(true);
  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => Math.round(v).toString());
  const barWidth = useTransform(progress, (v) => `${v}%`);
  const frameLength = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    // Bloquea el scroll mientras carga.
    lockScroll();

    // Tiempo mínimo para que el loader no "parpadee".
    const controls = animate(progress, 100, {
      duration: 1.1,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setLoading(false),
    });

    return () => {
      controls.stop();
      unlockScroll();
    };
  }, [progress]);

  useEffect(() => {
    if (loading) return;
    unlockScroll();
    markIntroComplete();
  }, [loading]);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100]"
          exit={{ opacity: 1, transition: { duration: 0.95 } }}
          aria-hidden
        >
          {/* Cortina roja que sigue a la principal. */}
          <motion.div
            className="absolute inset-0 bg-primary"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: 0.12, ease: curtainEase }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-background"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: curtainEase }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative flex h-20 w-20 items-center justify-center">
                {/* Marco que se dibuja */}
                <svg
                  viewBox="0 0 80 80"
                  className="absolute inset-0 h-full w-full text-primary"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="78"
                    height="78"
                    rx="18"
                    className="stroke-primary/20"
                    strokeWidth="2"
                  />
                  <motion.rect
                    x="1"
                    y="1"
                    width="78"
                    height="78"
                    rx="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ pathLength: frameLength }}
                  />
                </svg>
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-xl font-bold text-primary"
                >
                  {initials}
                </motion.span>
              </div>

              <div className="flex w-40 flex-col items-center gap-2">
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-border">
                  <motion.span
                    className="block h-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                    style={{ width: barWidth }}
                  />
                </div>
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  <motion.span>{counter}</motion.span>%
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
