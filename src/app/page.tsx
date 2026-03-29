import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MissionValues } from "@/components/sections/MissionValues";
import { GoalsPreview } from "@/components/sections/GoalsPreview";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <StatsBand />
      <AboutPreview />
      <ServicesGrid />
      <MissionValues />
      <GoalsPreview />
      <GallerySection />
      <FAQSection />
      <FinalCta />
    </div>
  );
}

