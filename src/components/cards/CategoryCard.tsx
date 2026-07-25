"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Category } from "@/types/category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.25 }}
        className="group cursor-pointer rounded-2xl border bg-background p-7 shadow-md transition-all duration-300 hover:border-violet-300 hover:shadow-2xl"
      >
        {/* Icon */}
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-3xl shadow-lg`}
        >
          {category.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold">{category.title}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground">
          {category.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-violet-600">
            {category.promptCount} Prompts
          </span>

          <div className="flex items-center gap-2 text-sm font-medium text-violet-600">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
