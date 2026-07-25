"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/common";
import { TrendingPromptGrid } from "@/components/trending";
import { trendingPrompts } from "@/constants/trendingPrompts";

export default function TrendingSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Trending"
          title="Trending Prompts"
          description="Discover the hottest prompts created and loved by the community."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TrendingPromptGrid prompts={trendingPrompts} />
        </motion.div>

        <div className="mt-12 mb-8 flex justify-center">
          <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105">
            View All Trending Prompts
          </button>
        </div>
      </Container>
    </Section>
  );
}