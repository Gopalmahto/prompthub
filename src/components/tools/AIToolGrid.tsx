import { AITool } from "@/types/aiTool";
import AIToolCard from "./AIToolCard";

interface AIToolGridProps {
  tools: AITool[];
}

export default function AIToolGrid({
  tools,
}: AIToolGridProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tools.map((tool) => (
        <AIToolCard
          key={tool.id}
          tool={tool}
        />
      ))}
    </div>
  );
}