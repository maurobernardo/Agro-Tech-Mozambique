"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { PageGridBackground } from "@/components/layout/PageGridBackground";
import { formatSiteAddress, getGoogleMapsSearchUrl, siteConfig } from "@/lib/site-config";

/** Pin alusivo ao Google Maps (vermelho #EA4335 da marca). */
function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
      <circle cx="12" cy="8.75" r="1.35" fill="#fff" />
    </svg>
  );
}

export function ContactoPageClient() {
  const { lang } = useLanguage();
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
            {t.contacto.badge[lang]}
          </span>
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            {t.contacto.title[lang]}
          </h1>
          <p className="max-w-2xl text-sm text-foreground/80 md:text-base">
            {t.contacto.intro[lang]}
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl gap-8 px-4 pb-20 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-5 rounded-3xl border-2 border-primary bg-white p-8 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.12)]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.contacto.form.name[lang]}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  placeholder={t.contacto.form.namePh[lang]}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.contacto.form.company[lang]}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  placeholder={t.contacto.form.companyPh[lang]}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.contacto.form.email[lang]}
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  placeholder={t.contacto.form.emailPh[lang]}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.contacto.form.phone[lang]}
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  placeholder="+258 ..."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.contacto.form.subject[lang]}
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder={t.contacto.form.subjectPh[lang]}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.contacto.form.message[lang]}
              </label>
              <textarea
                rows={5}
                className="w-full resize-none rounded-xl border border-primary/15 bg-background/50 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder={t.contacto.form.messagePh[lang]}
              />
            </div>

            <button
              type="submit"
              className="btn-ripple inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(27,77,46,0.4)] transition-all duration-200 hover:scale-[1.02] hover:bg-secondary hover:text-primary hover:shadow-gold-glow md:w-auto"
            >
              {t.contacto.form.submit[lang]}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.05 },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto w-full max-w-lg rounded-3xl border-2 border-primary/60 bg-white/95 p-8 text-center shadow-[0_8px_30px_-10px_rgba(27,77,46,0.25)] backdrop-blur-sm"
          >
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">
              {t.contacto.social.title[lang]}
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/75">{t.contacto.social.follow[lang]}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] transition-colors hover:bg-[#25D366]/25"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/25"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.8} />
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#E4405F] transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.8} />
              </Link>
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1877F2]/15 text-[#1877F2] transition-colors hover:bg-[#1877F2]/25"
                aria-label="Facebook"
              >
                <Facebook size={22} strokeWidth={1.8} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.1 },
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 flex flex-col gap-6 md:mt-0"
        >
          <div className="rounded-3xl border-2 border-primary bg-white p-6 shadow-[0_10px_40px_-12px_rgba(27,77,46,0.12)]">
            <h2 className="mb-4 text-lg font-semibold text-primary">
              {t.contacto.contacts.title[lang]}
            </h2>
            <div className="space-y-4 text-sm text-foreground/85">
              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-secondary" />
                <span>
                  {t.contacto.contacts.phoneLabel[lang]}:{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-medium text-primary underline-offset-2 hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-[#25D366]" />
                <span>
                  {t.contacto.contacts.whatsappLabel[lang]}:{" "}
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    +258 {siteConfig.whatsappLocal}
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-secondary" />
                <span>
                  {t.contacto.contacts.emailLabel[lang]}:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline-offset-2 hover:underline">
                    {siteConfig.email}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-secondary bg-primary p-6 text-white shadow-[0_10px_40px_-12px_rgba(27,77,46,0.25)]">
            <div className="mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-secondary" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {t.contacto.location.title[lang]}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              {t.contacto.location.desc[lang]}
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 p-3 text-sm">
                <Clock size={18} className="shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-white">{t.contacto.location.hours[lang]}</p>
                  <p className="text-white/85">{t.contacto.location.hoursValue[lang]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 p-3 text-sm">
                <MessageCircle size={18} className="shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-white">{t.contacto.location.response[lang]}</p>
                  <p className="text-white/85">{t.contacto.location.responseValue[lang]}</p>
                </div>
              </div>
            </div>
            <div className="mt-2 rounded-xl border border-white/20 bg-white/5 p-4">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary/90">
                {t.contacto.location.hq[lang]}
              </p>
              <div className="mt-3 space-y-1.5 text-left text-sm leading-snug text-white">
                {formatSiteAddress(lang).map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <Link
                href={getGoogleMapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <GoogleMapsIcon className="h-7 w-7 shrink-0" />
                <span>{t.contacto.location.openInMaps[lang]}</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    </PageGridBackground>
  );
}
