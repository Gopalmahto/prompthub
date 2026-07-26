"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Star, Package } from "lucide-react";

import { MarketplaceItem } from "@/types/marketplaceItem";

interface MarketplaceCardProps {
  item: MarketplaceItem;
}

export default function MarketplaceCard({
  item,
}: MarketplaceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
          {item.category}
        </span>

        {item.featured && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold">
        {item.title}
      </h3>

      {/* Tool */}
      <p className="mt-2 text-sm text-muted-foreground">
        {item.tool}
      </p>

      {/* Creator */}
      <p className="mt-4 text-sm font-medium">
        By {item.creator}
      </p>

      {/* Price */}
      <div className="mt-6 text-2xl font-bold text-violet-600">
        {item.price}
      </div>

      {/* Stats */}
      <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {item.rating}
        </div>

        <div className="flex items-center gap-1">
          <Package className="h-4 w-4 text-blue-500" />
          {item.sales} Sales
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:scale-105">
          <ShoppingCart className="h-4 w-4" />
          Buy Now
        </button>

        <Link
          href={`/marketplace/${item.id}`}
          className="flex items-center gap-2 text-sm font-medium text-violet-600"
        >
          Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}