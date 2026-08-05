"use client";

import { useEffect, useState } from "react";

/** Devuelve `true` solo tras el montaje en cliente (evita hydration mismatch). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
