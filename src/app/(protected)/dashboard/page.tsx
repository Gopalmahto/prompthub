import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import WelcomeCard from "@/components/features/dashboard/WelcomeCard";
import StatsGrid from "@/components/features/dashboard/StatsGrid";
import QuickActions from "@/components/features/dashboard/QuickActions";
import RecentActivity from "@/components/features/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="container mx-auto space-y-10 py-16">
      <DashboardHeader />

      <WelcomeCard />

      <StatsGrid />

      <QuickActions />

      <RecentActivity />
    </div>
  );
}