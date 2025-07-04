"use client";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function IsDoctor(Component: React.ComponentType) {
  return function IsDoctor(props: React.ComponentProps<typeof Component>) {
    const { role: roleNumber } = useUserRole();
    const isDoctor = roleNumber === Role.DOCTOR;

    useEffect(() => {
      if (!isDoctor) {
        return redirect("/");
      }
    }, []);

    if (!isDoctor) {
      return null;
    }

    return <Component {...props} />;
  };
}
