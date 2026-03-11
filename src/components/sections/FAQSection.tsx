"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-b from-primary/5 via-white to-primary/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="faq-grid"
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
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-start gap-3 md:gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              {t.faq.badge[lang]}
            </span>
            <h2 className="section-title-underline text-3xl font-bold md:text-4xl text-primary">
              {t.faq.title[lang]}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, transition: { delay: 0.1 * index } }
                  : {}
              }
              className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-primary">{item.q[lang]}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-secondary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-primary/10 px-5 py-4 text-sm text-foreground/80">
                    {item.a[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
