"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { PageGridBackground } from "@/components/layout/PageGridBackground";

function SectionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto max-w-6xl px-4 py-12 md:py-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

const missionCardsConfig = [
  { key: "mission" as const, Icon: Target },
  { key: "vision" as const, Icon: Eye },
  { key: "values" as const, Icon: Heart },
];

export function SobrePageClient() {
  const { lang } = useLanguage();
  return (
    <PageGridBackground>
    <div className="bg-transparent pt-24 md:pt-28">
      <SectionWrapper>
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            {t.sobre.badge[lang]}
          </span>
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            AGRO TECH MOZAMBIQUE, SU, LDA
          </h1>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base">
            {t.sobre.intro[lang]}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          {missionCardsConfig.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 * index },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col rounded-3xl border-2 border-primary bg-white p-7 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(27,77,46,0.2)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary/25">
                <card.Icon size={26} strokeWidth={1.8} />
              </div>
              <h2 className="mb-2 text-lg font-semibold text-primary">
                {t.sobre[card.key].title[lang]}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                {t.sobre[card.key].text[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 rounded-3xl border-2 border-secondary bg-primary p-8 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.2)] md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl border-2 border-secondary shadow-lg md:w-56">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
              alt="CEO - AGRO TECH MOZAMBIQUE"
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              {t.sobre.leadership.badge[lang]}
            </span>
            <h2 className="text-2xl font-bold">
              {t.sobre.leadership.name[lang]}
            </h2>
            <p className="text-sm font-medium text-secondary/90">
              {t.sobre.leadership.role[lang]}
            </p>
            <p className="text-sm leading-relaxed text-white/90">
              {t.sobre.leadership.ceoDesc[lang]}
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 rounded-3xl border-2 border-primary bg-white p-8 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.08)] md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t.sobre.history.title[lang]}
            </h2>
            <p className="text-sm text-foreground/80 md:text-base leading-relaxed">
              {t.sobre.history.p1[lang]}
            </p>
            <p className="text-sm text-foreground/80 md:text-base leading-relaxed">
              {t.sobre.history.p2[lang]}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-primary shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1000&q=80"
              alt="Equipa em planeamento estratégico"
              fill
              sizes="(min-width: 768px) 380px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">
            {t.sobre.timeline.title[lang]}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.sobre.timeline.items.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 * index },
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col rounded-2xl border-2 border-primary bg-white p-6 shadow-[0_8px_30px_-10px_rgba(27,77,46,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  {item.year}
                </span>
                <h3 className="text-base font-semibold text-primary">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {item.text[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
    </PageGridBackground>
  );
}
