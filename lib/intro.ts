import { useSyncExternalStore } from "react";

// Señal global: se activa cuando el loader termina y la página queda visible.
let complete = false;
const listeners = new Set<() => void>();

export function markIntroComplete() {
  if (complete) return;
  complete = true;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** `true` cuando el loader ha terminado; úsalo para lanzar animaciones de entrada. */
export function useIntroComplete() {
  return useSyncExternalStore(
    subscribe,
    () => complete,
    () => false
  );
}
