"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Guarda la posición del cursor en `--x/--y` para el efecto `.spotlight`. */
export function trackSpotlight(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

/** `Card` con un foco de luz y un borde que se iluminan bajo el cursor. */
export const SpotlightCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, onPointerMove, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "spotlight transition-[border-color,box-shadow] duration-300 hover:border-primary/30",
      className
    )}
    onPointerMove={(event) => {
      trackSpotlight(event);
      onPointerMove?.(event);
    }}
    {...props}
  />
));
SpotlightCard.displayName = "SpotlightCard";
