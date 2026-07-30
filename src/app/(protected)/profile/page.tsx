import ProfileCard from "@/components/features/profile/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="mt-3 text-muted-foreground">
          Manage your PromptHub account.
        </p>
      </div>

      <ProfileCard />
    </div>
  );
}