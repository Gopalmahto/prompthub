"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/common";
import { MarketplaceGrid } from "@/components/marketplace";
import { marketplaceItems } from "@/constants/marketplaceItems";
import Link from "next/link";

export default function MarketplaceSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Marketplace"
          title="Featured Marketplace"
          description="Buy premium prompt collections created by top AI creators."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MarketplaceGrid items={marketplaceItems} />
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/marketplace"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Explore Marketplace
          </Link>
        </div>
      </Container>
    </Section>
  );
}
