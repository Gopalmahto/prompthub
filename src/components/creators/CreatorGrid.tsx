import { Creator } from "@/types/creator";
import CreatorCard from "./CreatorCard";

interface CreatorGridProps {
  creators: Creator[];
}

export default function CreatorGrid({
  creators,
}: CreatorGridProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          creator={creator}
        />
      ))}
    </div>
  );
}