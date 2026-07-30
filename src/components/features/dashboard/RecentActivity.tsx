import { Clock } from "lucide-react";

export default function RecentActivity() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">
          Recent Activity
        </h2>

        <p className="text-muted-foreground">
          Your latest PromptHub activity will appear here.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center">
        <Clock className="mb-4 h-12 w-12 text-muted-foreground" />

        <h3 className="text-lg font-semibold">
          No activity yet
        </h3>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Start creating prompts, bookmark your favorites, and explore AI
          tools. Your recent activity will appear here.
        </p>
      </div>
    </section>
  );
}