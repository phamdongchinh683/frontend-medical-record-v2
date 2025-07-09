"use client";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";

export default function IsPatient(Component: React.ComponentType) {
  return function IsPatient(props: React.ComponentProps<typeof Component>) {
    const { role: roleNumber, isLoading } = useUserRole();
    const hasRedirected = useRef(false);
    const isPatient = roleNumber === Role.PATIENT;

    useEffect(() => {
      if (!isLoading && !isPatient && !hasRedirected.current) {
        hasRedirected.current = true;
        redirect("/");
      }
    }, [isPatient, isLoading]);

    if (isLoading) {
      return null;
    }

    if (!isPatient) {
      return null;
    }

    return <Component {...props} />;
  };
}
