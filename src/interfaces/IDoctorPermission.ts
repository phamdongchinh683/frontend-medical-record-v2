export interface IDoctorPermission {
  id: string;
  doctorName: string;
  accessLevel: "Granted" | "Revoked";
  specialization: string;
  hospital: string;
  status: "Active" | "Inactive";
}
