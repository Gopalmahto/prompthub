import {
  Bookmark,
  Brain,
  FolderOpen,
  FileText,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Prompts",
    value: 0,
    description: "Created prompts",
    icon: FileText,
  },
  {
    title: "Bookmarks",
    value: 0,
    description: "Saved prompts",
    icon: Bookmark,
  },
  {
    title: "AI Tools",
    value: "250+",
    description: "Supported tools",
    icon: Brain,
  },
  {
    title: "Categories",
    value: 6,
    description: "Prompt categories",
    icon: FolderOpen,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </div>
  );
}