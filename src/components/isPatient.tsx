"use client";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function IsPatient(Component: React.ComponentType) {
  return function IsPatient(props: React.ComponentProps<typeof Component>) {
    const { role: roleNumber } = useUserRole();
    const isPatient = roleNumber === Role.PATIENT;

    useEffect(() => {
      if (!isPatient) {
        return redirect("/");
      }
    }, []);

    if (!isPatient) {
      return null;
    }

    return <Component {...props} />;
  };
}
