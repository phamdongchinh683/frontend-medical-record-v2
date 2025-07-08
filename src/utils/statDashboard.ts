import { IStatDashboard } from "@/interfaces/IStatDashboard";

export const statDoctorDashboard: IStatDashboard[] = [
  {
    label: "Total Patients",
    value: 0,
    color: "pink",
    icon: "Users",
  },
  {
    label: "Today's Appointments",
    value: 0,
    color: "pink",
    icon: "Calendar",
  },
  {
    label: "Critical Cases",
    value: 0,
    color: "pink",
    icon: "AlertCircle",
  },
  {
    label: "Pending Records",
    value: 0,
    color: "pink",
    icon: "FileText",
  },
];

export const statPatientDashboard: IStatDashboard[] = [
  {
    label: "Total Records",
    value: 0,
    color: "pink",
    icon: "FileText",
  },
  {
    label: "Active Doctors",
    value: 0,
    color: "pink",
    icon: "UserCheck",
  },
  {
    label: "Upcoming Appointments",
    value: 0,
    color: "pink",
    icon: "Calendar",
  },
  {
    label: "Pending Results",
    value: 0,
    color: "pink",
    icon: "Clock",
  },
];
