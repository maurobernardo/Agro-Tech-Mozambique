"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const phasesConfig = [
  { key: "short" as const, period: "2025–2026" },
  { key: "medium" as const, period: "2027–2028" },
  { key: "long" as const, period: "2029–2030" },
];

export function GoalsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 text-foreground bg-gradient-to-b from-white via-secondary/[0.05] to-primary/[0.04]"
      id="objectivos"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="goals-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goals-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { duration: 0.7 } }
              : {}
          }
          className="mb-8 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {t.goalsPreview.badge[lang]}
          </p>
          <h2 className="section-title-underline text-3xl font-bold md:text-4xl">
            {t.goalsPreview.title[lang]}
          </h2>
          <p className="mt-3 text-sm text-foreground/75 md:text-base">
            {t.goalsPreview.intro[lang]}
          </p>
        </motion.div>

        <div className="relative mt-6 overflow-hidden rounded-3xl border border-primary/10 bg-white/90 p-8 shadow-[0_20px_50px_-12px_rgba(27,77,46,0.15)] backdrop-blur-sm">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={
              inView
                ? {
                    scaleX: 1,
                    transition: { duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] },
                  }
                : {}
            }
            className="absolute left-8 right-8 top-1/2 h-[2px] origin-left bg-gradient-to-r from-secondary via-amber-200 to-secondary"
          />

          <div className="relative grid gap-8 md:grid-cols-3">
            {phasesConfig.map((phase, index) => (
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.2 + 0.2 * index,
                          duration: 0.7,
                        },
                      }
                    : {}
                }
                className="relative pt-10 text-center md:text-left"
              >
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center justify-center md:left-0 md:translate-x-0">
                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary bg-white text-xs font-semibold text-secondary shadow-gold-glow"
                    animate={
                      inView
                        ? {
                            boxShadow: [
                              "0 0 0 0 rgba(184,150,12,0.6)",
                              "0 0 0 14px rgba(184,150,12,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary">
                    {t.goalsPreview[phase.key].label[lang]}
                  </p>
                  <p className="text-xs font-medium text-foreground/70">
                    {phase.period}
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">{t.goalsPreview[phase.key].text[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

