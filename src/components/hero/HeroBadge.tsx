import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
      <Sparkles className="h-4 w-4" />
      New • AI Prompt Marketplace Coming Soon
    </div>
  );
}