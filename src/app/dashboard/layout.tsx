"use client";
import SideBar from "@/components/dashboard/SideBar";
import { useUserRole } from "@/hooks/useUserRole";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role: roleNumber } = useUserRole();

  return (
    <div className="flex bg-gray-50 border-t border-pink-100">
      <SideBar role={roleNumber ?? 0} />
      <div className="flex-1 p-6 space-y-6">{children}</div>
    </div>
  );
}
