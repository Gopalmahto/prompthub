import { Container, Section } from "@/components/common";
import { AuthCard } from "@/components/auth";

export default function SignupPage() {
  return (
    <Section className="flex min-h-screen items-center bg-gradient-to-br from-violet-50 via-background to-cyan-50 dark:from-slate-950 dark:via-background dark:to-slate-900">
      <Container>
        <AuthCard type="signup" />
      </Container>
    </Section>
  );
}