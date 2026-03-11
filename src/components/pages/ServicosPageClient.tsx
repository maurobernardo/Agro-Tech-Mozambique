"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, Wheat, LineChart, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { PageGridBackground } from "@/components/layout/PageGridBackground";

const servicesConfig = [
  { Icon: Wheat },
  { Icon: Truck },
  { Icon: LineChart },
  { Icon: Building2 },
];

export function ServicosPageClient() {
  const { lang } = useLanguage();
  const services = t.servicos.items.map((s, i) => ({ ...s, Icon: servicesConfig[i].Icon }));
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
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            {t.servicos.badge[lang]}
          </span>
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            {t.servicos.title[lang]}
          </h1>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base">
            {t.servicos.intro[lang]}
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title.pt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.08 * index,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_4px_24px_-4px_rgba(27,77,46,0.1)] transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_20px_50px_-12px_rgba(184,150,12,0.2)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-secondary/10 transition-transform duration-300 group-hover:scale-150" />
              <div className="relative flex gap-5 p-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary shadow-sm transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-[0_8px_24px_-4px_rgba(184,150,12,0.3)]">
                  <service.Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="mb-4 text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                    {service.title[lang]}
                  </h2>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    {service.bullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary/80" />
                        <span>{item[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border-2 border-primary bg-white p-8 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.12)]"
          >
            <h2 className="mb-6 text-xl font-bold text-primary">
              {t.servicos.whyUs.title[lang]}
            </h2>
            <ul className="space-y-3 text-sm text-foreground/85">
              {t.servicos.whyUs.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-secondary" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center rounded-3xl border-2 border-secondary bg-primary p-8 text-white shadow-[0_10px_40px_-12px_rgba(27,77,46,0.25)]"
          >
            <h2 className="mb-3 text-xl font-bold">
              {t.servicos.cta.title[lang]}
            </h2>
            <p className="mb-6 text-sm text-white/90">
              {t.servicos.cta.subtitle[lang]}
            </p>
            <Link
              href="/contacto"
              className="btn-ripple inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-gold-glow transition-transform hover:scale-105"
            >
              {t.servicos.cta.button[lang]} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </PageGridBackground>
  );
}
