"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

/** Pantalla de carga inicial. */
export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Bloquea el scroll mientras carga.
    document.body.style.overflow = "hidden";

    const finish = () => setLoading(false);

    // Tiempo mínimo para que el loader no "parpadee".
    const minTimer = window.setTimeout(finish, 900);

    return () => {
      window.clearTimeout(minTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-2xl border border-primary/30" />
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span className="font-mono text-xl font-bold text-primary">
                {initials}
              </span>
            </motion.div>
            <motion.div
              className="h-0.5 w-32 overflow-hidden rounded-full bg-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
