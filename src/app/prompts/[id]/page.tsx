import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Heart, Eye } from "lucide-react";

import { Container, Section } from "@/components/common";
import { promptDetails } from "@/constants/promptDetails";
import { CopyPromptButton } from "@/components/prompts";

interface PromptDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return promptDetails.map((prompt) => ({
    id: prompt.id.toString(),
  }));
}

export default async function PromptDetailPage({
  params,
}: PromptDetailPageProps) {
  const { id } = await params;

  const prompt = promptDetails.find(
    (item) => item.id === Number(id),
  );

  if (!prompt) {
    notFound();
  }

  const relatedPrompts = promptDetails.filter(
    (item) =>
      item.category === prompt.category &&
      item.id !== prompt.id,
  );

  return (
    <Section>
      <Container>
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-bold">
          {prompt.title}
        </h1>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
            {prompt.category}
          </span>

          <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
            {prompt.tool}
          </span>
        </div>

        {/* Description */}
        <p className="mt-8 text-lg text-muted-foreground">
          {prompt.description}
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {prompt.rating}
          </div>

          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            {prompt.likes}
          </div>

          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-blue-500" />
            {prompt.views}
          </div>
        </div>

        {/* Creator */}
        <div className="mt-10 rounded-xl border bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Created by
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {prompt.creator}
          </h3>
        </div>

        {/* Prompt */}
        <div className="mt-12 rounded-2xl border bg-slate-950 p-6 text-slate-100">
          <h2 className="mb-4 text-2xl font-semibold">
            Prompt
          </h2>

          <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7">
            {prompt.prompt}
          </pre>

          <CopyPromptButton prompt={prompt.prompt} />
        </div>

        {/* Related Prompts */}
        {relatedPrompts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-3xl font-bold">
              Related Prompts
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedPrompts.map((related) => (
                <Link
                  key={related.id}
                  href={`/prompts/${related.id}`}
                  className="rounded-xl border p-5 transition hover:border-violet-300 hover:shadow-md"
                >
                  <h3 className="font-semibold">
                    {related.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {related.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{related.category}</span>

                    <span>•</span>

                    <span>{related.tool}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}