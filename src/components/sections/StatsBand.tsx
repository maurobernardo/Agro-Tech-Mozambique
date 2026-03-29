"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const statsConfig = [
  { value: 4, suffix: "", key: "serviceLines" as const },
  { value: 48, suffix: "h", key: "response" as const },
  { value: 100, suffix: "%", key: "quality" as const },
];

export function StatsBand() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary py-12 md:py-14 text-primary shadow-[0_-1px_0_rgba(0,0,0,0.08)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:justify-center md:gap-16 lg:gap-24">
        {statsConfig.map((stat, index) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                      delay: 0.15 * index,
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                    },
                  }
                : {}
            }
            className="flex flex-1 flex-col items-center border-white/40 md:border-l first:border-l-0 md:pl-6 md:first:pl-0"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator="."
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </div>
            <div className="mt-2 text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.28em] text-white">
              {t.stats[stat.key][lang]}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

