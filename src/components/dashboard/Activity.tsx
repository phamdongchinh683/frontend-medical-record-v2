import { IRecentActivity } from "@/interfaces/IRecentActivity";
import { renderIcon } from "@/utils/iconMap";
import Status from "./Status";
export default function Activity({
  activityTitle,
  records,
}: {
  activityTitle: string;
  records: IRecentActivity[];
}) {
  return (
    <div className="bg-white rounded-lg border border-pink-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {activityTitle}
      </h3>
      <div className="space-y-3">
        {records.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-between p-3 bg-pink-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                {renderIcon("FileText", { className: "h-5 w-5 text-white" })}
              </div>
              <div>
                <p className="font-medium text-gray-900">{record.type}</p>
                <p className="text-sm text-gray-500">
                  {record.fullName} - {record.createdAt}
                </p>
              </div>
            </div>
            <Status object={record} status="Completed" />
          </div>
        ))}
      </div>
    </div>
  );
}
