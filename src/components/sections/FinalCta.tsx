"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function FinalCta() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] overflow-hidden bg-white py-24 md:py-28 text-foreground md:min-h-[55vh]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-white to-secondary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,77,46,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(184,150,12,0.06)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { duration: 0.7 } }
              : {}
          }
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary"
        >
          {t.finalCta.title[lang]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } }
              : {}
          }
          className="mt-3 max-w-2xl text-sm text-foreground/80 md:text-base"
        >
          {t.finalCta.subtitle[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } }
              : {}
          }
          className="mt-8"
        >
          <Link
            href="/contacto"
            className="btn-ripple inline-flex items-center justify-center rounded-full bg-secondary px-10 py-4 text-sm font-semibold text-primary shadow-gold-glow transition-transform duration-200 hover:scale-105"
          >
            {t.finalCta.button[lang]}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

