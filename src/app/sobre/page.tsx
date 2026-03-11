import type { Metadata } from "next";
import { SobrePageClient } from "@/components/pages/SobrePageClient";

export const metadata: Metadata = {
  title: "Sobre Nós | AGRO TECH MOZAMBIQUE",
  description:
    "Missão, visão e valores da AGRO TECH MOZAMBIQUE. Empresa moçambicana em Nampula desde 2020. Comércio agrícola, consultoria e apoio ao sector agroindustrial.",
  openGraph: {
    title: "Sobre Nós | AGRO TECH MOZAMBIQUE",
    description:
      "Quem somos: parceiro estratégico para o sector agrícola, comercial e logístico em Moçambique.",
    type: "website",
  },
};

export default function SobrePage() {
  return <SobrePageClient />;
}

