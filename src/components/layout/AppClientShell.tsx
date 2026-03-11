"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function AppClientShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}

