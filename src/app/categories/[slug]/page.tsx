import { notFound } from "next/navigation";

import { Container, Section } from "@/components/common";
import { categoryDetails } from "@/constants/categoryDetails";
import { featuredPrompts } from "@/data/featuredPrompts";
import { FeaturedPromptGrid } from "@/components/prompts";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(categoryDetails).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categoryDetails[slug as keyof typeof categoryDetails];
  const prompts = featuredPrompts.filter(
    (prompt) => prompt.category.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!category) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <p className="text-sm text-muted-foreground">
            Home / Categories / {category.title}
          </p>

          {/* Title */}
          <h1 className="mt-4 text-5xl font-bold">{category.title}</h1>

          {/* Description */}
          <p className="mt-6 text-lg text-muted-foreground">
            {category.description}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {prompts.length} prompts available
          </p>
          {/* Search */}
          <div className="mt-10">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                placeholder={`Search ${category.title} prompts...`}
                className="pl-10"
              />
            </div>
          </div>
          <div className="mt-16">
            {prompts.length > 0 ? (
              <FeaturedPromptGrid prompts={prompts} />
            ) : (
              <div className="rounded-xl border border-dashed p-12 text-center">
                <h3 className="text-xl font-semibold">No prompts found</h3>

                <p className="mt-2 text-muted-foreground">
                  We are adding new prompts for this category soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
