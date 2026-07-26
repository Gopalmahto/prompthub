"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Eye,
  Star,
} from "lucide-react";

import { Prompt } from "@/types/prompt";
import Link from "next/link";

interface FeaturedPromptCardProps {
  prompt: Prompt;
}

export default function FeaturedPromptCard({
  prompt,
}: FeaturedPromptCardProps) {
  return (
    <Link href={`/prompts/${prompt.id}`}>
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl"
    >
      {/* Category & Price */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
          {prompt.category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            prompt.price === "Free"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {prompt.price}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold">
        {prompt.title}
      </h3>

      {/* Tool */}
      <p className="mt-2 text-sm text-muted-foreground">
        {prompt.tool}
      </p>

      {/* Creator */}
      <p className="mt-4 text-sm font-medium">
        By {prompt.creator}
      </p>

      {/* Stats */}
      <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4 text-red-500" />
          {prompt.likes.toLocaleString()}
        </div>

        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-sky-500" />
          {prompt.views.toLocaleString()}
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {prompt.rating}
        </div>
      </div>

      {/* Explore */}
      <div className="mt-6 flex justify-end">
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sm font-medium text-violet-600"
        >
          Explore
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
    </Link>
  );
}