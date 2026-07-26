import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Container, Section } from "@/components/common";
import { PromptBuilder } from "@/components/builder";

export default async function BuilderPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <Section>
      <Container>
        <PromptBuilder />
      </Container>
    </Section>
  );
}