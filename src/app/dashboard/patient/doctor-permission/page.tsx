"use client";
import Button from "@/components/Button";
import PermissionModal from "@/components/dashboard/patient/PermissionModal";
import DoctorPermission from "@/components/dashboard/patient/PermissonDoctor";
import Table from "@/components/dashboard/Table";
import { IDoctorPermission } from "@/interfaces/IDoctorPermission";
import { useState } from "react";

export default function DoctorPermissionPage() {
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const permissionDoctor: IDoctorPermission[] = [
    {
      id: "1",
      doctorName: "John Doe",
      specialization: "Cardiologist",
      hospital: "Hospital A",
      status: "Active",
      accessLevel: "Granted",
    },
    {
      id: "2",
      doctorName: "Jane Smith",
      specialization: "Pediatrician",
      hospital: "Hospital A",
      status: "Inactive",
      accessLevel: "Revoked",
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-lg border border-pink-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Doctor Permissions
            </h2>
            <p className="text-gray-600">
              Manage which doctors can access your medical records
            </p>
          </div>
          <Button
            type="button"
            value="Grant Permission"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2"
            onClick={() => setShowPermissionModal(true)}
          />
        </div>
        <Table>
          {permissionDoctor.map((doctor) => (
            <DoctorPermission key={doctor.id} permissionDoctor={doctor} />
          ))}
        </Table>
      </div>
      {showPermissionModal && (
        <PermissionModal setShowPermissionModal={setShowPermissionModal} />
      )}
    </div>
  );
}
