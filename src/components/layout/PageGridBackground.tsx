"use client";

import { useId } from "react";

/**
 * Fundo quadrangular idêntico ao da secção Alinhamento Estratégico na home.
 * Aplica-se às páginas Serviços, Objectivos, Contacto e Sobre para consistência visual.
 */
export function PageGridBackground({ children }: { children: React.ReactNode }) {
  const id = useId();
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary/20 via-primary/12 to-primary/8">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`page-grid-${id}`}
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(184,150,12,0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#page-grid-${id})`} />
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
