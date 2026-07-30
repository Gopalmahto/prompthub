"use client";

import { useUser } from "@clerk/nextjs";

export default function ProfileAvatar() {
  const { user } = useUser();

  return (
    <div className="flex justify-center">
      <img
        src={user?.imageUrl}
        alt={user?.fullName ?? "Profile"}
        className="h-28 w-28 rounded-full border object-cover"
      />
    </div>
  );
}