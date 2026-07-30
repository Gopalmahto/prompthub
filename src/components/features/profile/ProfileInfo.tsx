"use client";

import { useUser } from "@clerk/nextjs";

export default function ProfileInfo() {
  const { user } = useUser();

  return (
    <div className="space-y-4 text-center">
      <div>
        <h2 className="text-2xl font-bold">
          {user?.fullName}
        </h2>

        <p className="text-muted-foreground">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <div className="space-y-1 text-sm text-muted-foreground">
        <p>
          Username: {user?.username ?? "Not set"}
        </p>

        <p>
          User ID: {user?.id}
        </p>
      </div>
    </div>
  );
}