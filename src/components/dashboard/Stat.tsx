import { IStatDashboard } from "@/interfaces/IStatDashboard";
import { renderIcon } from "@/utils/iconMap";

export default function Stat({ stat }: { stat: IStatDashboard }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-pink-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
        <div
          className={`p-3 rounded-lg bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200`}
        >
          {renderIcon(stat.icon, {
            className: `h-6 w-6 text-${stat.color}-600`,
          })}
        </div>
      </div>
    </div>
  );
}
