"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

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
          className="mb-10 flex flex-col items-start gap-3 md:gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              {t.gallery.badge[lang]}
            </span>
            <h2 className="section-title-underline text-3xl font-bold md:text-4xl text-primary">
              {t.gallery.title[lang]}
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base">
            {t.gallery.subtitle[lang]}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.gallery.items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.15 * index, duration: 0.6 },
                    }
                  : {}
              }
              whileHover={{ y: -8 }}
              className="group flex min-h-[180px] flex-col justify-center overflow-hidden rounded-2xl border border-primary/20 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl md:min-h-[200px]"
            >
              <h3 className="text-lg font-bold text-primary">{item.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.desc[lang]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
