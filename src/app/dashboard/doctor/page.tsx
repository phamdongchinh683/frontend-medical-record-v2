import StatsGrid from "@/components/dashboard/StatsGrid";
import { statDoctorDashboard } from "@/utils/statDashboard";
import UserWelcome from "@/components/dashboard/UserWelcome";
export default function DoctorDashboard() {
  const userWelcomeProps = {
    firstName: "John",
    lastName: "Doe",
    description: "Here's an overview of your health information.",
  };

  return (
    <>
      <UserWelcome {...userWelcomeProps} />
      <StatsGrid stats={statDoctorDashboard} />
      
    </>
  );
}
