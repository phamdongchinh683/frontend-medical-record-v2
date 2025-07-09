import { IDoctorPermission } from "@/interfaces/IDoctorPermission";
import { Edit, User, UserX } from "lucide-react";
import Status from "../Status";

export default function DoctorPermission({
  permissionDoctor,
}: {
  permissionDoctor: IDoctorPermission;
}) {
  return (
    <tr key={permissionDoctor.id} className="hover:bg-pink-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {permissionDoctor.doctorName}
            </div>
            <div className="text-sm text-gray-500">
              {permissionDoctor.specialization}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {permissionDoctor.hospital}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Status object={permissionDoctor.accessLevel} status="Granted" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Status object={permissionDoctor.status} status="Active" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button className="text-pink-600 hover:text-pink-900">
            <Edit className="h-4 w-4" />
          </button>
          <button className="text-red-600 hover:text-red-900">
            <UserX className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
