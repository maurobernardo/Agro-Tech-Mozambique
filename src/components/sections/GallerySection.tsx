"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Package, Sprout, UsersRound } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const galleryIcons = [Sprout, Package, UsersRound] as const;

function HighlightItem({
  text,
  lang,
}: {
  text: { pt: string; en: string };
  lang: Lang;
}) {
  return (
    <li className="flex gap-2.5 text-sm leading-snug text-foreground/85">
      <CheckCircle2
        className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
        strokeWidth={2}
        aria-hidden
      />
      <span>{text[lang]}</span>
    </li>
  );
}

export function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      id="actividades"
      className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="gallery-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(184,150,12,0.25)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start gap-3 md:gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              {t.gallery.badge[lang]}
            </span>
            <h2 className="section-title-underline text-3xl font-bold md:text-4xl text-primary">
              {t.gallery.title[lang]}
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base leading-relaxed">
            {t.gallery.subtitle[lang]}
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3">
          {t.gallery.items.map((item, index) => {
            const Icon = galleryIcons[index];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.12 * index, duration: 0.55 },
                      }
                    : {}
                }
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_8px_30px_-12px_rgba(27,77,46,0.18)] transition-all duration-300 hover:border-secondary/35 hover:shadow-[0_20px_44px_-16px_rgba(27,77,46,0.22)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/10 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-secondary/60 transition-all duration-500 group-hover:w-full" />

                <div className="relative flex items-start justify-between gap-3 border-b border-primary/10 bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent px-5 pb-4 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-primary shadow-sm ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">
                        {lang === "pt" ? "Pilar" : "Pillar"} · {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-0.5 text-lg font-bold leading-tight text-primary">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p className="text-sm font-medium text-secondary/95">
                    {item.desc[lang]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {item.detail[lang]}
                  </p>

                  <div className="mt-5 border-t border-dashed border-primary/15 pt-4">
                    <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                      {lang === "pt" ? "Em foco" : "In focus"}
                    </p>
                    <ul className="space-y-2.5">
                      {item.highlights.map((h, i) => (
                        <HighlightItem key={i} text={h} lang={lang} />
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
