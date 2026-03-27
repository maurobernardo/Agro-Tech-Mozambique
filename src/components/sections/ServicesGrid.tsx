"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ShoppingCart, Truck, LineChart, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const serviceIcons = [ShoppingCart, Truck, LineChart, FileText];

const serviceImages = [
  "/images/comerciogrossista.jpg",
  "/images/equipamentos.jpg",
  "/images/consultoria.jpg",
  "/images/administrativo.jpg",
];

export function ServicesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();
  const services = t.servicesGrid.items.map((s, i) => ({
    ...s,
    image: serviceImages[i],
    Icon: serviceIcons[i],
  }));

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 text-foreground bg-gradient-to-b from-primary/20 via-primary/12 to-primary/8"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(184,150,12,0.25)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
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
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-secondary" />
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                {t.servicesGrid.badge[lang]}
              </span>
            </div>
            <h2 className="section-title-underline text-3xl font-bold md:text-4xl lg:text-[2.5rem] text-primary">
              {t.servicesGrid.title[lang]}
            </h2>
            <p className="max-w-2xl text-sm text-foreground/80 md:text-base leading-relaxed">
              {t.servicesGrid.subtitle[lang]}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <Link key={index} href="/servicos">
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.12 * index,
                            duration: 0.6,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        }
                      : {}
                  }
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 22 },
                  }}
                  className="group relative flex h-[380px] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_4px_24px_-4px_rgba(27,77,46,0.12)] transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_20px_50px_-12px_rgba(184,150,12,0.25)]"
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title[lang]}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-secondary group-hover:text-primary">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {service.badge[lang]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-base font-bold text-primary transition-colors group-hover:text-secondary">
                      {service.title[lang]}
                    </h3>
                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-foreground/75">
                      {service.desc[lang]}
                    </p>
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-transform group-hover:translate-x-0.5">
                        {t.servicesGrid.learnMore[lang]}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

