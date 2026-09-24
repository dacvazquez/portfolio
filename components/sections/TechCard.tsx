"use client";

import { useState } from "react";
import type { Technology } from "@/types";
import { cn } from "@/lib/utils";

/** Chip con logo y nombre de una tecnología (usado en la marquesina). */
export function TechCard({ tech }: { tech: Technology }) {
  const [failed, setFailed] = useState(false);
  const logoUrl = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  return (
    <div className="hover-glow group flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur transition-colors duration-300 hover:border-primary/40">
      {failed ? (
        // Si el logo no carga, se muestran las iniciales.
        <span className="flex h-7 w-7 items-center justify-center text-xs font-bold text-muted-foreground">
          {tech.name.slice(0, 2)}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            "h-7 w-7 object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0",
            // Los logos blancos se invierten en el tema claro para que se vean.
            tech.color.toUpperCase() === "FFFFFF" && "[:root:not(.dark)_&]:invert"
          )}
        />
      )}
      <span className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {tech.name}
      </span>
    </div>
  );
}
