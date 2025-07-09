"use client";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";

export default function IsDoctor(Component: React.ComponentType) {
  return function IsDoctor(props: React.ComponentProps<typeof Component>) {
    const { role: roleNumber, isLoading } = useUserRole();
    const hasRedirected = useRef(false);
    const isDoctor = roleNumber === Role.DOCTOR;

    useEffect(() => {
      if (!isLoading && !isDoctor && !hasRedirected.current) {
        hasRedirected.current = true;
        redirect("/");
      }
    }, [isDoctor, isLoading]);

    if (isLoading) {
      return null;
    }

    if (!isDoctor) {
      return null;
    }

    return <Component {...props} />;
  };
}
