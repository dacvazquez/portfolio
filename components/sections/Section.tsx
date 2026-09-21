import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Contenedor común de las secciones. */
export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
