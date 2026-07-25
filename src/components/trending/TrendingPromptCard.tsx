"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Heart, Star, Flame } from "lucide-react";

import { TrendingPrompt } from "@/types/trendingPrompt";

interface TrendingPromptCardProps {
  prompt: TrendingPrompt;
}

export default function TrendingPromptCard({
  prompt,
}: TrendingPromptCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
          {prompt.category}
        </span>

        {prompt.isTrending && (
          <span className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            <Flame className="h-3 w-3" />
            Trending
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold">
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
      <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4 text-red-500" />
          {prompt.likes}
        </div>

        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-blue-500" />
          {prompt.views}
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {prompt.rating}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">
        <Link
          href={`/prompts/${prompt.id}`}
          className="flex items-center gap-2 text-sm font-medium text-violet-600"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}