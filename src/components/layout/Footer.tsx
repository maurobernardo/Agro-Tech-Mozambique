"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="mt-24 bg-primary text-sm text-white">
      <div className="h-[3px] w-full bg-secondary" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">
            AGRO TECH MOZAMBIQUE, SU, LDA
          </h3>
          <p className="text-white/70">
            {t.footer.description[lang]}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
            {t.footer.quickLinks[lang]}
          </h4>
          <ul className="space-y-2 text-white/75">
            <li>
              <Link href="/sobre" className="transition-colors hover:text-secondary">
                {t.nav.about[lang]}
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="transition-colors hover:text-secondary">
                {t.nav.services[lang]}
              </Link>
            </li>
            <li>
              <Link href="/objectivos" className="transition-colors hover:text-secondary">
                {t.nav.goals[lang]}
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="transition-colors hover:text-secondary">
                {t.nav.contact[lang]}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
            {t.footer.contacts[lang]}
          </h4>
          <p className="text-white/75">
            Nampula, Mozambique
            <br />
            Tel: +258 XX XXX XXXX
            <br />
            Email: info@agrotech-mz.com
          </p>

          <div className="mt-4 flex gap-3">
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-transform duration-200 hover:-translate-y-1 hover:bg-secondary hover:text-primary"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-transform duration-200 hover:-translate-y-1 hover:bg-secondary hover:text-primary"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-transform duration-200 hover:-translate-y-1 hover:bg-secondary hover:text-primary"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary/30 bg-secondary/90 py-4 text-center text-xs text-primary">
        {t.footer.copyright[lang]}
      </div>
    </footer>
  );
}
