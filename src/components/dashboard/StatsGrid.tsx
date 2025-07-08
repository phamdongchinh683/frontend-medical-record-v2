import { IStatDashboard } from "@/interfaces/IStatDashboard";
import Stat from "./Stat";

export default function StatsGrid({ stats }: { stats: IStatDashboard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Stat key={index} stat={stat} />
      ))}
    </div>
  );
}
