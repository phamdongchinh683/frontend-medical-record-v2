import { IStatProps } from "@/interfaces/IStatProps";
import { getIcon } from "@/utils/iconMap";

export default function StatsSection({ stats }: IStatProps) {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-rose-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = getIcon(stat.icon);
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-pink-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
