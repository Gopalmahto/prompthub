import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import {
  CategoriesSection,
  FeaturedPromptsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedPromptsSection />
    </>
  );
}