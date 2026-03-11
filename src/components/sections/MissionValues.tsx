"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const itemsConfig = [
  { key: "mission" as const, Icon: Target },
  { key: "vision" as const, Icon: Eye },
  { key: "values" as const, Icon: Handshake },
];

export function MissionValues() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary py-24 md:py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(184,150,12,0.35)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            {t.missionValues.badge[lang]}
          </p>
          <h2 className="section-title-underline text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.missionValues.title[lang]}
          </h2>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            {t.missionValues.intro[lang]}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {itemsConfig.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.15 * index,
                        duration: 0.7,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    }
                  : {}
              }
              whileHover={{
                y: -8,
                boxShadow: "0 28px 70px rgba(0,0,0,0.45)",
                borderColor: "#B8960C",
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/50 bg-secondary/20 text-secondary shadow-soft-lg">
                  <item.Icon />
                </div>
                <h3 className="text-lg font-semibold">{t.missionValues[item.key].title[lang]}</h3>
                <p className="text-sm text-white/85">{t.missionValues[item.key].text[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

