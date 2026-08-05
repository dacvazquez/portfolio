import Link from "next/link";
import type { Metadata } from "next";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Fondo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <p className="font-mono text-8xl font-bold text-primary sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-pretty text-muted-foreground">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <Home className="h-4 w-4" /> Volver al inicio
        </Link>
      </Button>
    </main>
  );
}
