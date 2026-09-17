"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Technology } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechCard({ tech, index }: { tech: Technology; index: number }) {
  const [failed, setFailed] = useState(false);
  const logoUrl = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="hover-glow flex aspect-square cursor-default items-center justify-center rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-card/60"
        >
          {failed ? (
            // Fallback elegante: iniciales de la tecnología.
            <span className="text-sm font-bold text-muted-foreground">
              {tech.name.slice(0, 2)}
            </span>
          ) : (
            <img
              src={logoUrl}
              alt={`Logo de ${tech.name}`}
              width={40}
              height={40}
              loading="lazy"
              onError={() => setFailed(true)}
              className="h-9 w-9 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 hover:grayscale-0"
            />
          )}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>{tech.name}</TooltipContent>
    </Tooltip>
  );
}
