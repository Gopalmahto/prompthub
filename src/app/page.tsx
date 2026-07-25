import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import {
  CategoriesSection,
  FeaturedPromptsSection,
} from "@/components/sections";
import AIToolsSection from "@/components/sections/AIToolsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedPromptsSection />
      <AIToolsSection />
    </>
  );
}