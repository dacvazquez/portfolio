"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Anima palabra a palabra o letra a letra. */
  by?: "word" | "letter";
  /** Retardo inicial en segundos. */
  delay?: number;
  /** Separación entre elementos en segundos. */
  stagger?: number;
  /**
   * Si se indica, la animación se lanza cuando pasa a `true`.
   * Si no, se lanza al entrar en pantalla.
   */
  play?: boolean;
}

const piece: Variants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Texto que se revela subiendo desde una máscara, por palabras o letras. */
export function AnimatedText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger,
  play,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger ?? (by === "letter" ? 0.03 : 0.08),
        delayChildren: delay,
      },
    },
  };

  const trigger =
    play === undefined
      ? {
          whileInView: "show",
          viewport: { once: true, margin: "0px 0px -60px 0px" },
        }
      : { animate: play ? "show" : "hidden" };

  return (
    <motion.span
      className={cn("block", className)}
      variants={container}
      initial="hidden"
      {...trigger}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <span key={i}>
            {/* Cada palabra es un bloque con máscara para que no se parta. */}
            <span className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
              {by === "letter" ? (
                word.split("").map((char, j) => (
                  <motion.span key={j} className="inline-block" variants={piece}>
                    {char}
                  </motion.span>
                ))
              ) : (
                <motion.span className="inline-block" variants={piece}>
                  {word}
                </motion.span>
              )}
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
