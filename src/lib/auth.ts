import { IStatDashboard } from "@/interfaces/IStatDashboard";

export const statPatientDashboard: IStatDashboard[] = [
  {
    index: 1,
    label: "Total Records",
    value: 0,
    color: "pink",
    icon: "FileText",
  },
  {
    index: 2,
    label: "Active Doctors",
    value: 0,
    color: "pink",
    icon: "User",
  },
  {
    index: 3,
    label: "Upcoming Appointments",
    value: 0,
    color: "pink",
    icon: "Calendar",
  },
  {
    index: 3,
    label: "Pending Results",
    value: 0,
    color: "pink",
    icon: "Clock",
  },
];

export const statDoctorDashboard: IStatDashboard[] = [
  {
    index: 1,
    label: "Total Patients",
    value: 0,
    color: "pink",
    icon: "User",
  },
  {
    index: 2,
    label: "Today's Appointments",
    value: 0,
    color: "pink",
    icon: "Calendar",
  },
  {
    index: 2,
    label: "Critical Cases",
    value: 0,
    color: "pink",
    icon: "",
  },

];
