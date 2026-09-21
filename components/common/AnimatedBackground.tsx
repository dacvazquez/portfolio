/** Fondo decorativo: rejilla y dos resplandores rojos que se mueven despacio. */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Aurora superior */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] motion-safe:animate-aurora-drift" />

      {/* Aurora inferior */}
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10 blur-[120px] motion-safe:animate-aurora-drift [animation-delay:-9s]" />

      {/* Viñeta para fundir con el fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
