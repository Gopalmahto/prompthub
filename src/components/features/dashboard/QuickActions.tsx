import Link from "next/link";
import { Sparkles, User, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">
          Quick Actions
        </h2>

        <p className="text-muted-foreground">
          Jump into your most common tasks.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/builder">
            <Sparkles className="mr-2 h-4 w-4" />
            Create Prompt
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/profile">
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/categories">
            <Search className="mr-2 h-4 w-4" />
            Explore Prompts
          </Link>
        </Button>
      </div>
    </section>
  );
}