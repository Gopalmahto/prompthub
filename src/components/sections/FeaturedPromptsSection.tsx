"use client";

import { Container, Section, SectionHeading } from "@/components/common";
import { FeaturedPromptGrid } from "@/components/prompts";

export default function FeaturedPromptsSection() {
  return (
    <Section className="py-20">
      <Container>
        <SectionHeading
          badge="Featured"
          title="Featured Prompts"
          description="Discover the most popular and highest-rated prompts from our community."
        />

        <FeaturedPromptGrid />
      </Container>
    </Section>
  );
}