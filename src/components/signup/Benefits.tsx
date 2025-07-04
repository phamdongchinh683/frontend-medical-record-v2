import { IBenefits } from "@/interfaces/IBenefits";
import { renderIcon } from "@/utils/iconMap";

export default function Benefits({ benefits }: { benefits: IBenefits[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 p-4 bg-pink-50 rounded-lg border border-pink-100"
        >
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-2 rounded-lg flex-shrink-0">
            {renderIcon(benefit.icon, {
              className: "h-4 w-4 text-pink-600",
            })}
          </div>
          <div>
            <h4 className="font-medium text-gray-900 text-sm">
              {benefit.title}
            </h4>
            <p className="text-xs text-gray-600 mt-1">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
