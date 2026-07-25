"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/common";
import { CategoryCard } from "@/components/cards";
import { categories } from "@/constants/categories";

export default function CategoriesSection() {
  return (
    <Section className="pt-8 pb-24">
      <Container>

        <SectionHeading
          badge="Categories"
          title="Browse by Category"
          description="Discover prompts for every AI tool, workflow, programming language and creative task."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}