import { AuthForm } from ".";

interface AuthCardProps {
  type?: "login" | "signup";
}

export default function AuthCard({
  type = "login",
}: AuthCardProps) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-background p-8 shadow-lg">
      <h1 className="text-center text-4xl font-bold">
        {type === "login" ? "Welcome Back" : "Create Account"}
      </h1>

      <p className="mt-3 text-center text-muted-foreground">
        {type === "login"
          ? "Login to continue using PromptHub."
          : "Create your PromptHub account."}
      </p>

      <div className="mt-8">
        <AuthForm type={type} />
      </div>
    </div>
  );
}