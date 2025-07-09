"use client";
import { useUserRole } from "@/hooks/useUserRole";
import navigation from "@/mocks/navigation.json";
import { accessDashboard, navigationRole } from "@/utils/configRoute";
import { Role } from "@/utils/constant";
import { useMemo } from "react";

export default function NavigationSection() {
  const { role: roleNumber } = useUserRole();

  const navigationItems = useMemo(() => {
    if (roleNumber === undefined || roleNumber === Role.NONE) {
      return navigationRole(navigation.None);
    } else if (roleNumber === Role.DOCTOR) {
      return navigationRole(accessDashboard(roleNumber));
    } else {
      return navigationRole(accessDashboard(roleNumber));
    }
  }, [roleNumber]);

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {navigationItems}
    </nav>
  );
}
