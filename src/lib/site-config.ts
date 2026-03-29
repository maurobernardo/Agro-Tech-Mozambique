/**
 * Configuração do site - URLs de redes sociais e contacto.
 * Atualize com os links reais da AGRO TECH MOZAMBIQUE.
 */
export const siteConfig = {
  whatsapp: "+258844888632",
  whatsappLocal: "84 488 8632",
  social: {
    whatsapp: "https://wa.me/258844888632",
    linkedin: "https://linkedin.com/company/agro-tech-mozambique",
    instagram: "https://instagram.com/agrotechmozambique",
    facebook: "https://facebook.com/agrotechmozambique",
  },
  email: "info@agrotech-mz.com",
  /** E.164 para href="tel:" */
  phoneTel: "+258844888632",
  /** Texto apresentado no site */
  phoneDisplay: "+258 84 488 8632",
  address: {
    /** Logradouro e referências (alinhado ao documento da empresa) */
    streetLinePt:
      "Distrito de Nampula, bairro de Muatala, rua de Moma, edifício do Axinene, próximo do Sant'Egidio",
    streetLineEn:
      "Nampula District, Muatala neighbourhood, Rua de Moma, Axinene building, near Sant'Egidio",
    cityPt: "Cidade de Nampula",
    cityEn: "Nampula City",
    provincePt: "Província de Nampula",
    provinceEn: "Nampula Province",
    countryPt: "Moçambique",
    countryEn: "Mozambique",
  },
};

/** Linhas de morada para rodapé e contacto (rua opcional). */
export function formatSiteAddress(lang: "pt" | "en"): string[] {
  const a = siteConfig.address;
  const street = lang === "pt" ? a.streetLinePt : a.streetLineEn;
  const cityLine = lang === "pt" ? `${a.cityPt}, ${a.provincePt}` : `${a.cityEn}, ${a.provinceEn}`;
  const country = lang === "pt" ? a.countryPt : a.countryEn;
  return [street, cityLine, country].filter((line) => line.length > 0);
}

/** Pesquisa da sede no Google Maps (morada em português para melhor resultado local). */
export function getGoogleMapsSearchUrl(): string {
  const a = siteConfig.address;
  const query = [a.streetLinePt, a.cityPt, a.provincePt, a.countryPt].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
