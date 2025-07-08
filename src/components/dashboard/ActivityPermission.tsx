import { IDoctorPermission } from "@/interfaces/IDoctorPermission";
import { renderIcon } from "@/utils/iconMap";
import Status from "./Status";

export default function ActivityPermission({
  doctorPermissions,
}: {
  doctorPermissions: IDoctorPermission[];
}) {
  return (
    <div className="bg-white rounded-lg border border-pink-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Active Permissions
      </h3>
      <div className="space-y-3">
        {doctorPermissions
          .filter((p) => p.status === "Granted")
          .map((permission) => (
            <div
              key={permission.id}
              className="flex items-center justify-between p-3 bg-rose-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                  {renderIcon("UserCheck", { className: "h-5 w-5 text-white" })}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {permission.doctorName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {permission.specialization}
                  </p>
                </div>
              </div>
              <Status object={permission} status="Granted" />
            </div>
          ))}
      </div>
    </div>
  );
}
