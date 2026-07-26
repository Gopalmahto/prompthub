import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";

import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedPromptsSection from "@/components/sections/FeaturedPromptsSection";
import AIToolsSection from "@/components/sections/AIToolsSection";
import TrendingSection from "@/components/sections/TrendingSection";
import MarketplaceSection from "@/components/sections/MarketplaceSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedPromptsSection />
      <AIToolsSection />
      <TrendingSection />
      <MarketplaceSection />
    </>
  );
}