import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import {
  CategoriesSection,
  FeaturedPromptsSection,
} from "@/components/sections";
import AIToolsSection from "@/components/sections/AIToolsSection";
import TrendingSection from "@/components/sections/TrendingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedPromptsSection />
      <AIToolsSection />
      <TrendingSection />
    </>
  );
}