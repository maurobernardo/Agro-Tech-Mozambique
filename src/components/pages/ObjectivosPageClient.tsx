"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flag, Rocket, Globe, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { PageGridBackground } from "@/components/layout/PageGridBackground";

const goalsConfig = [
  { key: "short" as const, Icon: Flag },
  { key: "medium" as const, Icon: Rocket },
  { key: "long" as const, Icon: Globe },
];

export function ObjectivosPageClient() {
  const { lang } = useLanguage();
  const itemsByPhase = t.objectivos.items[0];
  return (
    <PageGridBackground>
    <div className="bg-transparent pt-24 md:pt-28">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            {t.objectivos.badge[lang]}
          </span>
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            {t.objectivos.title[lang]}
          </h1>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base">
            {t.objectivos.intro[lang]}
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {goalsConfig.map((goal, index) => (
            <motion.div
              key={goal.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.1 * index,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative flex flex-col rounded-3xl border-2 border-primary bg-white p-8 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(184,150,12,0.2)]"
            >
              <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-white text-xs font-bold text-secondary shadow-md">
                {index + 1}
              </div>
              <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary/25">
                <goal.Icon size={24} strokeWidth={1.8} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {t.objectivos[goal.key].label[lang]} • {t.objectivos[goal.key].period}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {itemsByPhase[goal.key].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border-2 border-secondary bg-primary p-8 text-white shadow-[0_10px_40px_-12px_rgba(27,77,46,0.25)] md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
                <Target size={28} strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  {t.objectivos.cta.title[lang]}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/90">
                  {t.objectivos.cta.subtitle[lang]}
                </p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="btn-ripple inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-gold-glow transition-transform hover:scale-105"
            >
              {t.objectivos.cta.button[lang]} <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
    </PageGridBackground>
  );
}
