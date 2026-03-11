import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AppClientShell } from "@/components/layout/AppClientShell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AGRO TECH MOZAMBIQUE, SU, LDA",
  description:
    "Soluções integradas para o sector agroindustrial em Moçambique – comércio grossista, consultoria técnica, equipamentos e logística. Sede em Nampula.",
  keywords: [
    "agro tech",
    "moçambique",
    "comércio agrícola",
    "Nampula",
    "cereais",
    "logística agrícola",
    "consultoria técnica",
  ],
  metadataBase: new URL("https://agrotech-mz.example.com"),
  openGraph: {
    title: "AGRO TECH MOZAMBIQUE, SU, LDA",
    description:
      "Parceiro estratégico agrícola em Moçambique. Comércio grossista, consultoria técnica e logística agroindustrial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} bg-background text-foreground`}>
        <AppClientShell>{children}</AppClientShell>
      </body>
    </html>
  );
}

