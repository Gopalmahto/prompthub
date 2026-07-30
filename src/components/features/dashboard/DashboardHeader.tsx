"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardHeader() {
  const { user } = useUser();

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">
        Welcome back, {user?.firstName ?? "User"} 👋
      </h1>

      <p className="text-muted-foreground">
        Manage your prompts, profile and AI workspace.
      </p>
    </div>
  );
}