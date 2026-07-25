import { heroStats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
      {heroStats.map((item) => (
        <div
          key={item.label}
          className="text-center"
        >
          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}