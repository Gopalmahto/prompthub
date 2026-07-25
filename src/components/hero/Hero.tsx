"use client";

import { motion } from "framer-motion";

import { Container, Section } from "@/components/common";

import HeroBadge from "./HeroBadge";
import HeroBackground from "./HeroBackground";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      <HeroBackground />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <HeroBadge />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight md:text-8xl"
          >
            The AI Workspace
            <span className="block bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              for Every Prompt
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Search, build, optimize and share prompts for ChatGPT, Claude,
            Gemini, Cursor, Midjourney and every modern AI platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <HeroSearch />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <HeroStats />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
