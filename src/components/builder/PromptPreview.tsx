interface PromptPreviewProps {
  title: string;
  tool: string;
  category: string;
  prompt: string;
}

export default function PromptPreview({
  title,
  tool,
  category,
  prompt,
}: PromptPreviewProps) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Live Preview
      </h2>

      <div className="rounded-xl bg-background p-6">
        <h3 className="text-2xl font-bold">
          {title || "Prompt Title"}
        </h3>

        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
            {category || "Category"}
          </span>

          <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
            {tool || "AI Tool"}
          </span>
        </div>

        <div className="mt-8 rounded-xl bg-muted p-4">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {prompt || "Your prompt will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
}