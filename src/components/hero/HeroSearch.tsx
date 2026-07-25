"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSearch() {
  return (
    <div className="mx-auto mt-10 w-full max-w-3xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="group relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-violet-500" />

          <Input
            placeholder="Search prompts, AI tools, workflows..."
            className="h-14 rounded-2xl border-border/60 bg-background/70 pl-12 pr-20 shadow-sm backdrop-blur transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500"
          />

          <kbd className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border bg-muted px-2 py-1 text-xs text-muted-foreground">
            Ctrl K
          </kbd>
        </div>

        <Button
          size="lg"
          className="h-14 rounded-2xl px-8 transition-all duration-300 hover:scale-105"
        >
          Search
        </Button>
      </div>
    </div>
  );
}