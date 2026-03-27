"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const { lang } = useLanguage();

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 text-foreground bg-gradient-to-br from-white via-primary/[0.06] to-secondary/[0.04]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(27,77,46,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(184,150,12,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            inView
            ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
            : {}
          }
          className="relative w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-primary/20 bg-primary/90 shadow-[0_20px_60px_-15px_rgba(27,77,46,0.25)]">
            <Image
              src="/images/sobre.jpg"
              alt="Equipa em reunião no sector agrícola"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/20" />
          </div>
          <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-secondary/50 translate-x-2 translate-y-2" />
          <div className="pointer-events-none absolute -right-6 bottom-12 h-20 w-20 rounded-full border-2 border-secondary/30" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={
              inView
              ? { opacity: 1, y: 0, scale: 1, transition: { delay: 0.4, duration: 0.5 } }
              : {}
            }
            className="absolute -bottom-4 left-6 rounded-2xl bg-secondary px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-gold-glow"
          >
            {t.aboutPreview.since[lang]}
          </motion.div>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            inView
            ? { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } }
            : {}
          }
          className="max-w-xl space-y-7 md:space-y-8"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              {t.aboutPreview.badge[lang]}
            </p>
          </div>
          <h2 className="section-title-underline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {t.aboutPreview.title[lang]}
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            {t.aboutPreview.intro[lang]}
          </p>
          <div className="space-y-3 text-sm text-foreground/85">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">
                ✓
              </span>
              <p>{t.aboutPreview.bullet1[lang]}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">
                ✓
              </span>
              <p>{t.aboutPreview.bullet2[lang]}</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/sobre"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-soft-lg transition-transform duration-200 hover:scale-105 hover:bg-secondary hover:text-primary"
            >
              <span>{t.aboutPreview.more[lang]}</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

