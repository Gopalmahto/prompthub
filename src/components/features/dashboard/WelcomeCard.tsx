"use client";

export default function WelcomeCard() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-xl font-semibold">
        PromptHub Workspace
      </h2>

      <p className="mt-2 text-muted-foreground">
        Create, organize and share AI prompts from one place.
      </p>
    </div>
  );
}