import { TrendingPrompt } from "@/types/trendingPrompt";
import TrendingPromptCard from "./TrendingPromptCard";

interface TrendingPromptGridProps {
  prompts: TrendingPrompt[];
}

export default function TrendingPromptGrid({
  prompts,
}: TrendingPromptGridProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((prompt) => (
        <TrendingPromptCard
          key={prompt.id}
          prompt={prompt}
        />
      ))}
    </div>
  );
}