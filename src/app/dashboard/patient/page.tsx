import Activity from "@/components/dashboard/Activity";
import ActivityPermission from "@/components/dashboard/ActivityPermission";
import StatsGrid from "@/components/dashboard/StatsGrid";
import UserWelcome from "@/components/dashboard/UserWelcome";
import { IDoctorPermission } from "@/interfaces/IDoctorPermission";
import { IRecentActivity } from "@/interfaces/IRecentActivity";
import { statPatientDashboard } from "@/utils/statDashboard";

export default function PatientDashboard() {
  const userWelcomeProps = {
    firstName: "John",
    lastName: "Doe",
    description: "Here's an overview of your health information.",
  };

  const data: IRecentActivity[] = [
    {
      id: "1",
      type: "Lab results",
      fullName: "John Doe",
      createdAt: "2021-01-01",
      status: "Pending",
    },
    {
      id: "2",
      type: "Consultation",
      fullName: "John Doe",
      createdAt: "2021-01-01",
      status: "Cancelled",
    },
    {
      id: "3",
      type: "Records",
      fullName: "John Doe",
      createdAt: "2021-01-01",
      status: "Completed",
    },
  ];

  const doctorPermissions: IDoctorPermission[] = [
    {
      id: "1",
      doctorName: "John Doe",
      specialization: "Cardiology",
      hospital: "John Doe",
      accessLevel: "Granted",
      status: "Active",
    },
    {
      id: "2",
      doctorName: "Jane Doe",
      specialization: "Cardiology",
      hospital: "John Doe",
      accessLevel: "Revoked",
      status: "Inactive",
    },
  ];

  return (
    <>
      <UserWelcome {...userWelcomeProps} />
      <StatsGrid stats={statPatientDashboard} />
      <div className="grid lg:grid-cols-2 gap-6">
        <Activity activityTitle="Recent Records" records={data} />
        <ActivityPermission doctorPermissions={doctorPermissions} />
      </div>
    </>
  );
}
