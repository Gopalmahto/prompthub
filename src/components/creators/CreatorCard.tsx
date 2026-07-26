"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Star,
  Users,
  FileText,
} from "lucide-react";

import { Creator } from "@/types/creator";

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({
  creator,
}: CreatorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl"
    >
      {/* Avatar */}
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-3xl">
          {creator.avatar}
        </div>

        {creator.verified && (
          <BadgeCheck className="h-6 w-6 text-blue-500" />
        )}
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-semibold">
        {creator.name}
      </h3>

      {/* Username */}
      <p className="text-sm text-muted-foreground">
        {creator.username}
      </p>

      {/* Bio */}
      <p className="mt-3 text-sm text-muted-foreground">
        {creator.bio}
      </p>

      {/* Specialization */}
      <span className="mt-4 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
        {creator.specialization}
      </span>

      {/* Stats */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            Followers
          </span>

          <span className="font-medium">
            {creator.followers}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4" />
            Prompts
          </span>

          <span className="font-medium">
            {creator.prompts}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Rating
          </span>

          <span className="font-medium">
            {creator.rating}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">
        <Link
          href={`/creators/${creator.username.replace("@", "")}`}
          className="flex items-center gap-2 text-sm font-medium text-violet-600"
        >
          View Profile
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}