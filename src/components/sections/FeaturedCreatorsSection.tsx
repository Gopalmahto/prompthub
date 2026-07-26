"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/common";
import { CreatorGrid } from "@/components/creators";
import { creators } from "@/constants/creators";
import { Button } from "@/components/ui/button";

export default function FeaturedCreatorsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Creators"
          title="Featured Creators"
          description="Meet the top AI creators building high-quality prompts for the community."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CreatorGrid creators={creators} />
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button size="lg">
            View All Creators
          </Button>
        </div>
      </Container>
    </Section>
  );
}