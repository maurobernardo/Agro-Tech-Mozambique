import type { Metadata } from "next";
import { ServicosPageClient } from "@/components/pages/ServicosPageClient";

export const metadata: Metadata = {
  title: "Serviços | AGRO TECH MOZAMBIQUE",
  description:
    "Comércio grossista, equipamentos e logística, consultoria técnica e serviços administrativos. Cereais, sementes, leguminosas, aluguer de equipamentos agrícolas e mais.",
  openGraph: {
    title: "Serviços | AGRO TECH MOZAMBIQUE",
    description:
      "Portefólio completo de serviços agroindustriais: comércio grossista, equipamentos e logística, consultoria técnica e serviços administrativos.",
    type: "website",
  },
};

export default function ServicosPage() {
  return <ServicosPageClient />;
}

