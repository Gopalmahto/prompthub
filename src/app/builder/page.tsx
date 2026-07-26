import { Container, Section } from "@/components/common";
import { PromptBuilder } from "@/components/builder";

export default function BuilderPage() {
  return (
    <Section>
      <Container>
        <PromptBuilder />
      </Container>
    </Section>
  );
}