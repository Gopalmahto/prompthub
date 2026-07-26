import { MarketplaceItem } from "@/types/marketplaceItem";
import MarketplaceCard from "./MarketplaceCard";

interface MarketplaceGridProps {
  items: MarketplaceItem[];
}

export default function MarketplaceGrid({
  items,
}: MarketplaceGridProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MarketplaceCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}