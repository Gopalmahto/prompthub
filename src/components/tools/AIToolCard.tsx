"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users } from "lucide-react";

import { AITool } from "@/types/aiTool";
import Link from "next/link";

interface AIToolCardProps {
  tool: AITool;
}

export default function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl"
      >
        {/* Icon */}
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${tool.color} text-2xl`}
        >
          {tool.logo}
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold">{tool.name}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>

        {/* Stats */}
        <div className="mt-5 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Prompts</span>

            <span className="font-medium">{tool.promptCount}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              Users
            </span>

            <span className="font-medium">{tool.users}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Rating
            </span>

            <span className="font-medium">{tool.rating}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-violet-600">
            Explore Tool
          </span>

          <ArrowRight className="h-5 w-5 text-violet-600 transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
}
