"use client";
import { useUserRole } from "@/hooks/useUserRole";
import navigation from "@/mocks/navigation.json";
import { accessDashboard, navigationRole } from "@/utils/configRoute";
import { Role } from "@/utils/constant";

export default function NavigationSection() {
  const { role: roleNumber } = useUserRole();

  return (
    <div className="hidden md:flex items-center space-x-2">
      {roleNumber == undefined || roleNumber === Role.NONE
        ? navigationRole(navigation.None)
        : roleNumber === Role.DOCTOR
        ? navigationRole(accessDashboard(roleNumber))
        : navigationRole(accessDashboard(roleNumber))}
    </div>
  );
}
