"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Home, Info, Briefcase, Target, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", id: "home", key: "home" as const, Icon: Home },
  { href: "/sobre", id: "sobre", key: "about" as const, Icon: Info },
  { href: "/servicos", id: "servicos", key: "services" as const, Icon: Briefcase },
  { href: "/objectivos", id: "objectivos", key: "goals" as const, Icon: Target },
  { href: "/contacto", id: "contacto", key: "contact" as const, Icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/images/logo.png");
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showSolidHeader = scrolled || !isHome || mobileMenuOpen;

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 ${mobileMenuOpen ? "z-[120]" : "z-40"} border-b border-black/5 transition-colors duration-300 ${
        showSolidHeader
          ? "bg-white/90 text-foreground shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 md:pl-5 lg:pl-6 lg:pr-10"
      >
        <Link href="/" className="-ml-5 flex items-center gap-3 md:-ml-12 lg:-ml-16">
          <div className="relative h-[50px] w-[160px]">
            <Image
              src={logoSrc}
              alt="AGRO TECH MOZAMBIQUE"
              fill
              priority
              sizes="160px"
              className="object-contain"
              onError={() => setLogoSrc("/file.svg")}
            />
          </div>
        </Link>

        <nav
          className={`hidden items-center gap-10 text-sm md:text-base font-medium md:flex ${
            showSolidHeader ? "text-foreground/80" : "text-white/80"
          }`}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const Icon = link.Icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  active ? "text-secondary" : "hover:text-secondary"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Icon
                    size={16}
                    className="text-secondary"
                  />
                  <span>{t.nav[link.key][lang]}</span>
                </span>
                <span
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-secondary via-amber-200 to-secondary transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-current/30 bg-white/10 backdrop-blur md:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>

          <div className="hidden items-center gap-1 rounded-full bg-primary/5 p-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:flex">
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "pt" ? "bg-primary text-white" : "text-primary/70"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "en" ? "bg-primary text-white" : "text-primary/70"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/contacto"
            className="btn-ripple group relative hidden items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-soft-lg transition-transform duration-200 hover:scale-105 hover:bg-secondary md:inline-flex"
          >
            <span className="relative z-10">
              {t.nav.cta[lang]}
            </span>
            <span className="relative z-10 text-lg">→</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-y-0 -left-1 w-1 animate-shimmer bg-gradient-to-r from-white/0 via-white to-white/0" />
            </span>
          </Link>
        </div>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  key="mobile-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-[9998] bg-white md:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-hidden="true"
                />
                <motion.nav
                  key="mobile-nav"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="fixed right-0 top-0 z-[9999] flex h-full w-[min(300px,86vw)] flex-col gap-6 border-l border-black/10 bg-white px-6 pb-10 pt-20 shadow-2xl md:hidden"
                >
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur">
                    <div className="relative h-8 w-28">
                      <Image
                        src={logoSrc}
                        alt="AGRO TECH MOZAMBIQUE"
                        fill
                        sizes="112px"
                        className="object-contain"
                        onError={() => setLogoSrc("/file.svg")}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-foreground"
                      aria-label="Fechar menu"
                    >
                      <X size={20} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>

                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    const Icon = link.Icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          active
                            ? "bg-primary text-white"
                            : "text-foreground/90 hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                        {t.nav[link.key][lang]}
                      </Link>
                    );
                  })}
                  <div className="mt-4 border-t border-black/10 pt-4">
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 p-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      <button
                        type="button"
                        onClick={() => setLang("pt")}
                        className={`rounded-full px-3 py-1.5 transition-colors ${
                          lang === "pt" ? "bg-primary text-white" : "text-primary/70"
                        }`}
                      >
                        PT
                      </button>
                      <button
                        type="button"
                        onClick={() => setLang("en")}
                        className={`rounded-full px-3 py-1.5 transition-colors ${
                          lang === "en" ? "bg-primary text-white" : "text-primary/70"
                        }`}
                      >
                        EN
                      </button>
                    </div>
                    <Link
                      href="/contacto"
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-ripple mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
                    >
                      {t.nav.cta[lang]} →
                    </Link>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}

