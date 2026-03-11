"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";


export function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { lang } = useLanguage();

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-white bg-[url('/images/Fundo.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

      <div className="hero-particles z-10">
        <span style={{ top: "20%", left: "15%" }} />
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:justify-start md:py-32 md:pl-2 md:pr-10 lg:pl-4 lg:pr-12">
        <div className="mx-auto w-full max-w-2xl space-y-10 text-white md:mx-0 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.8,
              y: inView ? 0 : 10,
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur"
          >
            <span>{t.hero.badge[lang]}</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.15 },
              },
            }}
          >
            {t.hero.title[lang].map((word, index) => (
              <motion.span
                key={word + index}
                className="mr-2 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
            <span
              className={`section-title-underline ${
                inView ? "is-visible" : ""
              }`}
            />
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm sm:text-base lg:text-lg text-white/85"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t.hero.subtitle[lang]}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 pt-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link
              href="#servicos"
              className="btn-ripple inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3.5 text-sm sm:text-base font-semibold text-primary shadow-gold-glow transition-transform duration-200 hover:scale-105"
            >
              <span className="mr-2">
                {t.hero.discover[lang]}
              </span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>

            <Link
              href="#servicos"
              className="btn-ripple inline-flex items-center justify-center rounded-full border border-white/50 bg-white/15 px-10 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur transition-transform duration-200 hover:scale-105"
            >
              {t.hero.allServices[lang]}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/60 bg-white/5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <motion.div
            className="mt-1 h-2 w-1 rounded-full bg-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

