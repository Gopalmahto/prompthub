"use client";

import { UserButton } from "@clerk/nextjs";

import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

export default function ProfileCard() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border bg-background p-10 shadow-sm">
      <ProfileAvatar />

      <div className="mt-6">
        <ProfileInfo />
      </div>

      <div className="mt-8 flex justify-center">
        <UserButton />
      </div>
    </div>
  );
}