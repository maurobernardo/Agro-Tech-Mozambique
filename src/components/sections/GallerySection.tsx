"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const galleryImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
];

export function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      id="projectos"
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
              className="group overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={galleryImages[index]}
                  alt={item.title[lang]}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{item.title[lang]}</h3>
                  <p className="mt-1 text-sm text-white/90">{item.desc[lang]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
