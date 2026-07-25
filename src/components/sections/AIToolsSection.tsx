"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/common";
import { AIToolGrid } from "@/components/tools";
import { aiTools } from "@/constants/aiTools";
import { Button } from "@/components/ui/button";

export default function AIToolsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="AI Tools"
          title="Explore Popular AI Tools"
          description="Browse the most popular AI platforms and discover prompts tailored for each tool."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AIToolGrid tools={aiTools} />
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Button size="lg">
            View All AI Tools
          </Button>
        </div>

      </Container>
    </Section>
  );
}