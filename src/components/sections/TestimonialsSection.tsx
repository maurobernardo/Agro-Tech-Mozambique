"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 bg-primary text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="testimonials-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(184,150,12,0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
            {t.testimonials.badge[lang]}
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            {t.testimonials.title[lang]}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/85">
            {t.testimonials.subtitle[lang]}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.testimonials.quotes.map((quote, index) => (
            <motion.blockquote
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
              className="relative rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
            >
              <Quote size={40} className="mb-4 text-secondary/60" />
              <p className="text-lg leading-relaxed text-white/95">{quote.text[lang]}</p>
              <p className="mt-4 text-sm font-medium text-secondary">{quote.author[lang]}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
