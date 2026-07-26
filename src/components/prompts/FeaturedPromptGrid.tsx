"use client";

import { motion } from "framer-motion";

import FeaturedPromptCard from "./FeaturedPromptCard";
import { Prompt } from "@/types/prompt";

interface FeaturedPromptGridProps {
  prompts: Prompt[];
}

export default function FeaturedPromptGrid({
  prompts,
}: FeaturedPromptGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {prompts.map((prompt) => (
        <FeaturedPromptCard
          key={prompt.id}
          prompt={prompt}
        />
      ))}
    </motion.div>
  );
}