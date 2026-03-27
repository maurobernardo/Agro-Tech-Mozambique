import type { Metadata } from "next";
import { ObjectivosPageClient } from "@/components/pages/ObjectivosPageClient";

export const metadata: Metadata = {
  title: "Objectivos 2026–2030 | AGRO TECH MOZAMBIQUE",
  description:
    "Plano estratégico da AGRO TECH MOZAMBIQUE: metas de curto, médio e longo prazo. Consolidação, expansão logística e liderança no sector agrícola do norte.",
  openGraph: {
    title: "Objectivos 2026–2030 | AGRO TECH MOZAMBIQUE",
    description:
      "Metas estratégicas para crescimento sustentado e impacto no sector agroindustrial moçambicano.",
    type: "website",
  },
};

export default function ObjectivosPage() {
  return <ObjectivosPageClient />;
}

