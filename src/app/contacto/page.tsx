import type { Metadata } from "next";
import { ContactoPageClient } from "@/components/pages/ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto | AGRO TECH MOZAMBIQUE",
  description:
    "Contacte a AGRO TECH MOZAMBIQUE em Nampula. WhatsApp, telefone, e-mail e formulário. Projectos e apoio ao agronegócio. Resposta em até 48h úteis.",
  openGraph: {
    title: "Contacto | AGRO TECH MOZAMBIQUE",
    description:
      "Fale connosco para projectos agroindustriais. Sede em Nampula. Horário Seg–Sexta 8h–17h.",
    type: "website",
  },
};

export default function ContactoPage() {
  return <ContactoPageClient />;
}

