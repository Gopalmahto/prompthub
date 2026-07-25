import { Hero } from "@/components/hero";
import { Navbar } from "@/components/layout";
import { CategoriesSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
    </>
  );
}